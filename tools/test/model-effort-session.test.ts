import { expect, test } from "bun:test"
import { join, resolve } from "node:path"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { activePatch, captureIdentifier } from "./helpers/patch-contract"
import { patchedEntryFunction } from "./helpers/patched-function"

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
  carriedEffort?: string | null,
  withHold?: boolean,
) => EffortResult
type EffortTable = { default?: string; byModel: Record<string, string> }
type Owner = {
  effortByModel?: Map<string, string>
  effortLaunchValue?: string
  mainLoopEffortState: () => { settingsEffortTable?: EffortTable }
}

const patches = loadPatchEntriesFromFile(resolve(import.meta.dir, "../../patches/model-effort-session.toml"))
const root = join(import.meta.dir, "..", "..")

for (const platform of ["darwin-arm64", "linux-x64"]) {
  test(`${platform}: shipped resolver enforces model/session precedence and truthful unsupported state`, () => {
    const patch = activePatch(patches, targetVersion(), platform, "effort-session-resolver-")
    // AST entries have no replacement text; read the patched function from the
    // staged graph so the test sees the shipped resolver, not the authored value.
    const { patched: source } = patchedEntryFunction({
      graph: join(root, "staging", targetVersion(), "graph", platform),
      entries: patches,
      version: targetVersion(),
      platform,
      patch,
    })
    const binding = (role: string, pattern: RegExp) => captureIdentifier(source, role, pattern)
    const resolverName = binding("resolver", /^function ([\w$]+)\(/).concat(".session")
    const environment: Record<string, string> = {
      ANTHROPIC_CUSTOM_MODEL_OPTION: " gpt-5.6-luna[1m] ",
      ANTHROPIC_CUSTOM_MODEL_OPTION_EFFORT_LEVEL: "max",
    }
    const state: {
      sessionEffort?: { kind: "default" | "inherit" | "level"; value?: string }
      settingsEffortTable?: EffortTable
      mainLoopModelForSession?: string
      mainLoopModel?: string
    } = {}
    let owner: Owner = { mainLoopEffortState: () => state }
    const unsupported = new Set<string>()
    let environmentEffort: string | null | undefined
    let modelDefault: string | undefined = "medium"
    let carriedEffortValue: string | null | undefined
    const normalize = (model: string) =>
      model.trim().toLowerCase() === "sonnet"
        ? "gpt-5.6-luna"
        : model
            .trim()
            .toLowerCase()
            .replace(/\[1m\]$/, "")
    const bindings: Record<string, unknown> = {
      [binding("session owner", /const owner=([\w$]+)\(Symbol\.for/)]: () => owner,
      [binding("model normalization", /slug=([\w$]+)\(modelName\)/)]: normalize,
      [binding("default model", /modelName=model\?\?[^;]*\?\?([\w$]+)\(\)/)]: () => "gpt-5.6-luna",
      [binding("environment effort", /const configured=([\w$]+)\(\)/)]: () => environmentEffort,
      [binding("model effort default", /chosen=([\w$]+)\(modelName,carriedEffort\);source="model default"/)]:
        () => modelDefault,
      [binding("capability", /if\(!([\w$]+)\(modelName\)\)\{chosen=/)]: (model: string) =>
        !unsupported.has(normalize(model)),
      [binding("organization normalization", /const normalized=([\w$]+)\(chosen,modelName\)/)]: (value: string) => value,
      [binding(
        "per-model table predicate",
        /if\(([\w$]+)\(table\)&&!hasCarried\)nativeTable=table\.default/,
      )]: (table: EffortTable) => Object.keys(table.byModel).length === 0,
      [binding("table lookup", /nativeTable=([\w$]+)\(table,slug\)/)]: (table: EffortTable, slug: string) =>
        table.byModel[slug] ?? table.default,
      [binding("carried effort default", /carriedEffort===void 0\?([\w$]+)\(\):carriedEffort!==null/)]: () =>
        carriedEffortValue,
      [binding("wrapper carried default", /carriedEffort:d=([\w$]+)\(e\)/)]: () => carriedEffortValue,
      [binding("with-hold predicate", /&&([\w$]+)\(modelName\)!==void 0\)nativeTable=void 0/)]: () => undefined,
      // Numeric-effort capability is `capability(...) !== null`; null means the model
      // takes string effort, which is the default this test exercises.
      [binding("numeric capability", /let __acc_numeric=([\w$]+)\(e\)!==null/)]: () => null,
      [binding("hook normalizer", /\?([\w$]+)\(s\):s;return/)]: (value: string) => value,
      process: { env: environment },
    }
    // Execute both the active replacement and its public wrapper, not a reimplementation.
    const { read, turn } = new Function(
      ...Object.keys(bindings),
      `${source}return {read:${resolverName},turn:${resolverName.split(".")[0]}};`,
    )(...Object.values(bindings)) as {
      read: Resolver
      turn: (
        model: string,
        fallback?: string,
        options?: { turnEffort?: string; agentOverride?: string },
      ) => string | undefined
    }
    expect(read("sonnet")).toMatchObject({ slug: "gpt-5.6-luna", value: "max", source: "configured default" })
    for (let slot = 2; slot <= 10; slot += 1) {
      const key = `ANTHROPIC_CUSTOM_MODEL_OPTION_${slot}`
      environment[key] = ` Provider/Slot-${slot}[1m] `
      environment[`${key}_EFFORT_LEVEL`] = slot % 2 === 0 ? " XHIGH " : " LOW "
      expect(read(`provider/slot-${slot}`)).toMatchObject({
        value: slot % 2 === 0 ? "xhigh" : "low",
        source: "configured default",
      })
    }
    expect(read("provider/slot-10", "set", "high").value).toBe("high")
    expect(read("provider/slot-9").value).toBe("low")
    expect(read("provider/slot-10", "clear").value).toBe("xhigh")
    environment.ANTHROPIC_CUSTOM_MODEL_OPTION_11 = "provider/eleven"
    environment.ANTHROPIC_CUSTOM_MODEL_OPTION_11_EFFORT_LEVEL = "max"
    expect(read("provider/eleven").value).toBe("medium")
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
    unsupported.add("gpt-5.6-luna")
    expect(read("sonnet")).toMatchObject({ value: undefined, source: "backend default (effort not supported)" })
    expect(read("gpt-6-astra").value).toBe("low")
    unsupported.clear()
    expect(turn("sonnet", "low", { turnEffort: "xhigh" })).toBe("xhigh")
    expect(turn("sonnet", "low", { turnEffort: "high", agentOverride: "max" })).toBe("max")
    state.sessionEffort = { kind: "inherit" }
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
  }, 20_000)
}
