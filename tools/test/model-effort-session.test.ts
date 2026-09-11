import { expect, test } from "bun:test"
import { resolve } from "node:path"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { activePatch, captureIdentifier } from "./helpers/patch-contract"

type EffortResult = {
  slug: string
  value: string | undefined
  source: string
  cli: boolean
  effortByModel: Map<string, string>
}
type Resolver = (
  model: string,
  operation?: "set" | "clear",
  value?: string,
  fallback?: string,
  honorLaunchPin?: boolean,
  agentOverride?: string,
) => EffortResult
type EffortTable = { default?: string; byModel: Record<string, string> }
type Owner = {
  effortByModel?: Map<string, string>
  effortLaunchValue?: string
  mainLoopEffortState: () => { settingsEffortTable?: EffortTable }
}

const patches = loadPatchEntriesFromFile(resolve(import.meta.dir, "../../patches/model-effort-session.toml"))

for (const platform of ["darwin-arm64", "linux-x64"]) {
  test(`${platform}: shipped resolver enforces model/session precedence and truthful unsupported state`, () => {
    const patch = activePatch(patches, targetVersion(), platform, "effort-session-resolver-")
    if (!patch.replacement) throw new Error("resolver patch missing")
    const source = patch.replacement
    const binding = (role: string, pattern: RegExp) => captureIdentifier(source, role, pattern)
    const resolverName = binding("resolver", /^([\w$]+)\.session=/)
    const environment: Record<string, string> = {
      ANTHROPIC_CUSTOM_MODEL_OPTION: " gpt-5.6-luna[1m] ",
      ANTHROPIC_CUSTOM_MODEL_OPTION_EFFORT_LEVEL: "max",
    }
    const state: { settingsEffortTable?: EffortTable } = {}
    let owner: Owner = { mainLoopEffortState: () => state }
    const rejected = new Set<string>()
    const unsupported = new Set<string>()
    let environmentEffort: string | null | undefined
    const normalize = (model: string) =>
      model.trim().toLowerCase() === "sonnet"
        ? "gpt-5.6-luna"
        : model
            .trim()
            .toLowerCase()
            .replace(/\[1m\]$/, "")
    const bindings: Record<string, unknown> = {
      [binding("session owner", /const owner=([\w$]+)\(Symbol\.for/)]: () => owner,
      [binding("model normalization", /slug=([\w$]+)\(model/)]: normalize,
      [binding("default model", /model\?\?([\w$]+)\(\)/)]: () => "gpt-5.6-luna",
      [binding("environment effort", /const configured=([\w$]+)\(\)/)]: () => environmentEffort,
      [binding("launch default predicate", /honorLaunchPin&&([\w$]+)\(slug\)/)]: () => false,
      [binding("model effort default", /chosen=([\w$]+)\(slug\);source="model launch default"/)]: () => "medium",
      [binding(
        "backend rejection",
        /if\(([\w$]+)\(slug\)\)\{chosen=undefined;source="backend default \(effort unsupported\)"/,
      )]: (model: string) => rejected.has(model),
      [binding("capability", /else if\(!([\w$]+)\(slug\)\)/)]: (model: string) => !unsupported.has(model),
      [binding("organization normalization", /const normalized=([\w$]+)\(chosen,slug\)/)]: (value: string) => value,
      [binding("per-model table predicate", /undefined:([\w$]+)\(table\)\?/)]: () => true,
      [binding("table lookup", /\(table\)\?([\w$]+)\(table,slug\)/)]: (table: EffortTable, slug: string) =>
        table.byModel[slug] ?? table.default,
      process: { env: environment },
    }
    // Execute both the active replacement and its public wrapper, not a reimplementation.
    const { read, turn } = new Function(
      ...Object.keys(bindings),
      `${source}}return {read:${resolverName}.session,turn:${resolverName}};`,
    )(...Object.values(bindings)) as {
      read: Resolver
      turn: (
        model: string,
        fallback?: string,
        options?: { turnEffort?: string; agentOverride?: string },
      ) => string | undefined
    }
    expect(read("sonnet")).toMatchObject({ slug: "gpt-5.6-luna", value: "max", source: "configured default" })
    expect(read("gpt-6-astra", "set", "low").value).toBe("low")
    expect(read("sonnet").value).toBe("max")
    // A subagent caller can pass the main loop's effort as fallback; slot defaults still win.
    expect(read("sonnet", undefined, undefined, "low").value).toBe("max")
    // An agent definition/tool override is distinct from an inherited fallback and wins over the slot default.
    expect(read("sonnet", undefined, undefined, "low", true, "xhigh")).toMatchObject({
      value: "xhigh",
      source: "agent override",
    })
    expect(read("GPT-5.6-LUNA[1m]", "set", "high").value).toBe("high")
    expect(read("gpt-6-astra").value).toBe("low")
    expect(read("sonnet").value).toBe("high")
    expect(read("sonnet", "clear").value).toBe("max")
    expect(read("gpt-6-astra").value).toBe("low")
    const firstSession = owner
    owner = { mainLoopEffortState: () => state }
    expect(read("sonnet").value).toBe("max")
    expect(read("gpt-6-astra").value).toBe("medium")
    owner.effortLaunchValue = "low"
    expect(read("sonnet", "set", "high")).toMatchObject({ value: "low", source: "CLI --effort", cli: true })
    expect(owner.effortByModel?.size).toBe(0)
    expect(read("gpt-6-astra").value).toBe("low")
    owner = firstSession
    expect(read("gpt-6-astra").value).toBe("low")
    rejected.add("gpt-5.6-luna")
    expect(read("sonnet")).toMatchObject({ value: undefined, source: "backend default (effort unsupported)" })
    expect(read("gpt-6-astra").value).toBe("low")
    rejected.clear()
    expect(turn("sonnet", "low", { turnEffort: "xhigh" })).toBe("xhigh")
    expect(turn("sonnet", "low", { turnEffort: "high", agentOverride: "max" })).toBe("max")
    state.settingsEffortTable = { default: "high", byModel: { "other-model": "low" } }
    expect(read("other-model")).toMatchObject({ value: "low", source: "configured model default" })
    expect(read("unconfigured")).toMatchObject({ value: "high", source: "configured default" })
    environmentEffort = "xhigh"
    expect(read("unconfigured")).toMatchObject({ value: "xhigh", source: "environment default" })
    environmentEffort = null
    expect(read("unconfigured")).toMatchObject({ value: undefined, source: "effort omitted by environment" })
    environmentEffort = undefined
    unsupported.add("other-model")
    expect(read("other-model")).toMatchObject({ value: undefined, source: "backend default (effort not supported)" })
  })
}
