import { expect, test } from "bun:test"
import { join, resolve } from "node:path"
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
    const initialization = source.slice(source.indexOf("{", source.indexOf(")")) + 1, source.indexOf("let Qe="))
    const effortStart = source.indexOf("if(patchedAgentEffort!==void 0")
    const effortEnd = source.indexOf("let We=", effortStart)
    if (effortStart < 0 || effortEnd < 0 || !initialization.includes("patchedAgentEffort=Je")) {
      throw new Error("shipped Agent effort calculation boundaries changed")
    }
    const calculation = source.slice(effortStart, effortEnd)
    const fork = binding("fork predicate", /if\(patchedAgentEffort!==void 0&&!([\w$]+)\)/)
    const teammateFallback = source.match(/effort:patchedAgentEffort\?\?([\w$]+)\?\.effort/)
    const teammateDefinition = teammateFallback?.[1]
    if (!teammateDefinition) throw new Error("shipped teammate effort fallback missing")
    const run = (effort?: string, coordinator = false, relativeEnabled = true, isFork = false): Result => {
      const adjustments: number[] = []
      const resolutionEfforts: Array<string | undefined> = []
      const bindings: Record<string, unknown> = {
        [input]: { effort, model: "custom-worker" },
        [binding("relative effort flag", /pt=([\w$]+)\(\)&&/)]: () => relativeEnabled,
        [binding("coordinator guard", /if\(([\w$]+)\(\)&&[\w$]+\.CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL/)]:
          () => coordinator,
        [binding("settings", /if\([\w$]+\(\)&&([\w$]+)\.CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL/)]: {
          CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL: true,
        },
        [fork]: isFork,
        [binding("model resolver", /ee=([\w$]+)\(/)]: (_definition: Definition, _parent: string, selected?: string) =>
          selected ?? "parent-model",
        [binding("definition model reader", /ee=[\w$]+\(([\w$]+)\(s,wt\)/)]: (definition: Definition) => {
          resolutionEfforts.push(definition.effort)
          return definition
        },
        [binding("permission effort resolver", /:([\w$]+)\(\{agentDefinition:s,isFork:/)]: (options: {
          agentDefinition: Definition
        }) => ({ agentDefinition: options.agentDefinition, subagentEffort: options.agentDefinition.effort }),
        [binding("native relative adjustment", /\?([\w$]+)\(ee,[\w$]+\.subagentEffort,pt===/)]: (
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
        s: { effort: "medium" },
        wt: "parent-model",
        he: false,
        [binding("permission mode", /ee=[\w$]+\([\w$]+\(s,wt\),wt,ze,([\w$]+)\)/)]: "default",
      }
      const result = new Function(
        ...Object.keys(bindings),
        `${initialization}let Qe=Ke;${calculation}return {absolute:Je,relative:pt,override:patchedAgentEffort,model:Ke,definition:s,requestEffort:It,teammateEffort:patchedAgentEffort??${teammateDefinition}?.effort};`,
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
