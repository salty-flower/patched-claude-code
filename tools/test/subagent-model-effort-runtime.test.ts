import { expect, test } from "bun:test"
import { join, resolve } from "node:path"
import { parseSync } from "oxc-parser"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { activePatch, captureIdentifier } from "./helpers/patch-contract"
import { patchedEntryFunction } from "./helpers/patched-function"

const entries = loadPatchEntriesFromFile(resolve(import.meta.dir, "../../patches/subagent-model-effort.toml"))
const version = targetVersion()

type Definition = { effort?: string }
type Result = {
  absolute?: string
  relative?: string
  override?: string
  model?: string
  definition: Definition
  requestEffort?: string
  teammateEffort?: string
  adjustments: number[]
  resolutionEfforts: Array<string | undefined>
}

for (const platform of ["darwin-arm64", "linux-x64"]) {
  test(`${platform}: shipped Agent launcher separates relative effort from absolute overrides`, () => {
    const patch = activePatch(entries, version, platform, "agent-effective-effort-")
    const { patched: source } = patchedEntryFunction({
      graph: join(import.meta.dir, "../../staging", version, "graph", platform),
      entries,
      version,
      platform,
      patch,
    })
    const binding = (role: string, pattern: RegExp) => captureIdentifier(source, role, pattern)
    // Execute the shipped initialization, model selection and effort calculation
    // intact. Omit unrelated filesystem/hooks/task-launch work between them.
    const input = binding("Agent input", /agentInput:([\w$]+)/)
    const native = parseSync("agent-launcher.js", source).program.body[0]
    if (native?.type !== "FunctionDeclaration" || !native.body) {
      throw new Error("shipped Agent launcher is not a function")
    }
    const [initializers, coordinatorGuard] = native.body.body
    if (initializers?.type !== "VariableDeclaration" || coordinatorGuard?.type !== "IfStatement") {
      throw new Error("shipped Agent effort initialization boundaries changed")
    }
    const initialization = source.slice(initializers.start, coordinatorGuard.end)
    const absolute = binding("absolute effort", /patchedAgentEffort=([\w$]+);if/)
    const model = binding("requested model", /;if\([^;]+\)([\w$]+)=patchedAgentEffort=/)
    const relative = binding("relative effort", /patchedAgentEffort=[\w$]+=([\w$]+)=void 0/)
    const effortStart = source.indexOf("if(patchedAgentEffort!==void 0")
    const tail = source.slice(effortStart).match(/;([\w$]+)=[\w$]+\?\.agentDefinition\?\?\1;/)
    if (effortStart < 0 || !tail || tail.index === undefined) {
      throw new Error("shipped Agent effort calculation boundaries changed")
    }
    const calculation = source.slice(effortStart, effortStart + tail.index + tail[0].length)
    const definition = tail[1]
    if (!definition) throw new Error("shipped Agent definition binding missing")
    const selection = calculation.match(
      /let ([\w$]+)=([\w$]+)\?"inherit":([\w$]+),([\w$]+)=([\w$]+)\(([\w$]+)\(([\w$]+),([\w$]+)\),\8,\1,([\w$]+)\);/,
    )
    if (!selection || selection[7] !== definition) throw new Error("shipped Agent model selection changed")
    const [, , fork, modelAlias, , modelResolver, definitionReader, , parentModel, permissionMode] = selection
    if (!fork || !modelAlias || !modelResolver || !definitionReader || !parentModel || !permissionMode) {
      throw new Error("shipped Agent model selection bindings missing")
    }
    const requestEffort = captureIdentifier(calculation, "request effort", /,([\w$]+)=[\w$]+\?void 0:[\w$]+\?\?[\w$]+;/)
    const remote = captureIdentifier(calculation, "remote predicate", /let [\w$]+=([\w$]+)\?void 0:/)
    const teammateFallback = source.match(/effort:patchedAgentEffort\?\?([\w$]+)\?\.effort/)
    const teammateDefinition = teammateFallback?.[1]
    if (!teammateDefinition) throw new Error("shipped teammate effort fallback missing")
    const run = (effort?: string, coordinator = false, relativeEnabled = true, isFork = false): Result => {
      const adjustments: number[] = []
      const resolutionEfforts: Array<string | undefined> = []
      const bindings: Record<string, unknown> = {
        [input]: { effort, model: "custom-worker" },
        [binding("relative effort flag", /,[\w$]+=([\w$]+)\(\)&&/)]: () => relativeEnabled,
        [binding("coordinator guard", /if\(([\w$]+)\(\)&&[\w$]+\.CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL/)]:
          () => coordinator,
        [binding("settings", /if\([\w$]+\(\)&&([\w$]+)\.CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL/)]: {
          CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL: true,
        },
        [fork]: isFork,
        [modelResolver]: (_definition: Definition, _parent: string, selected?: string) => selected ?? "parent-model",
        [definitionReader]: (definition: Definition) => {
          resolutionEfforts.push(definition.effort)
          return definition
        },
        [binding("permission effort resolver", /:([\w$]+)\(\{agentDefinition:[\w$]+,isFork:/)]: (options: {
          agentDefinition: Definition
        }) => ({ agentDefinition: options.agentDefinition, subagentEffort: options.agentDefinition.effort }),
        [binding("native relative adjustment", /\?([\w$]+)\([\w$]+,[\w$]+\.subagentEffort,[\w$]+===/)]: (
          _model: string,
          _base: string,
          direction: number,
        ) => {
          adjustments.push(direction)
          return direction === 1 ? "high" : "low"
        },
        [binding("tool context", /effortState:([\w$]+)\.getAppState/)]: {
          getAppState: () => ({}),
          permissionLayers: [],
        },
        [teammateDefinition]: { effort: "medium" },
        [definition]: { effort: "medium" },
        [parentModel]: "parent-model",
        [remote]: false,
        [permissionMode]: "default",
      }
      const result = new Function(
        ...Object.keys(bindings),
        `${initialization}let ${modelAlias}=${model};${calculation}return {absolute:${absolute},relative:${relative},override:patchedAgentEffort,model:${model},definition:${definition},requestEffort:${requestEffort},teammateEffort:patchedAgentEffort??${teammateDefinition}?.effort};`,
      )(...Object.values(bindings)) as Omit<Result, "adjustments" | "resolutionEfforts">
      return { ...result, adjustments, resolutionEfforts }
    }

    for (const [relative, direction, expected] of [
      ["lower", -1, "low"],
      ["higher", 1, "high"],
    ] as const) {
      expect(run(relative)).toMatchObject({
        relative,
        absolute: undefined,
        override: undefined,
        definition: { effort: expected },
        requestEffort: expected,
        teammateEffort: "medium",
        adjustments: [direction],
        resolutionEfforts: ["medium"],
      })
      expect(run(relative, false, false)).toMatchObject({
        absolute: undefined,
        relative: undefined,
        override: undefined,
        definition: { effort: "medium" },
        requestEffort: undefined,
        adjustments: [],
      })
    }
    expect(run("xhigh")).toMatchObject({
      absolute: "xhigh",
      relative: undefined,
      override: "xhigh",
      definition: { effort: "xhigh" },
      requestEffort: "xhigh",
      teammateEffort: "xhigh",
      adjustments: [],
      resolutionEfforts: ["xhigh"],
    })
    expect(run()).toMatchObject({
      definition: { effort: "medium" },
      teammateEffort: "medium",
      requestEffort: undefined,
    })
    for (const effort of ["lower", "higher", "xhigh"]) {
      expect(run(effort, true)).toMatchObject({
        absolute: undefined,
        relative: undefined,
        override: undefined,
        model: undefined,
        definition: { effort: "medium" },
        teammateEffort: "medium",
        requestEffort: undefined,
        adjustments: [],
      })
      expect(run(effort, false, true, true)).toMatchObject({
        definition: { effort: "medium" },
        requestEffort: undefined,
        adjustments: [],
      })
    }
  }, 120_000)
}
