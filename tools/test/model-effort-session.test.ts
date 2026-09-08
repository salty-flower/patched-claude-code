import { expect, test } from "bun:test"
import { resolve } from "node:path"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

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
type Owner = { effortByModel?: Map<string, string>; effortLaunchValue?: string }

const patches = loadPatchEntriesFromFile(resolve(import.meta.dir, "../../patches/model-effort-session.toml"))

for (const platform of ["darwin-arm64", "linux-x64"]) {
  test(`${platform}: shipped resolver enforces model/session precedence and truthful unsupported state`, () => {
    const patch = patches.find((entry) => entry.name === `effort-session-resolver-${platform}`)
    if (!patch?.replacement) throw new Error("resolver patch missing")
    // Execute the actual replacement helper, with external bundle dependencies controlled.
    // No duplicate implementation of the precedence rules lives in this fixture.
    const helper = patch.replacement.slice(0, patch.replacement.indexOf(";function ") + 1)
    const darwin = platform === "darwin-arm64"
    const resolverName = darwin ? "MT" : "$w"
    const environment: Record<string, string> = {
      ANTHROPIC_CUSTOM_MODEL_OPTION: " gpt-5.6-luna[1m] ",
      ANTHROPIC_CUSTOM_MODEL_OPTION_EFFORT_LEVEL: "max",
    }
    let owner: Owner = {}
    const rejected = new Set<string>()
    const normalize = (model: string) => (model.toLowerCase() === "sonnet" ? "gpt-5.6-luna[1m]" : model.trim())
    const bindings: Record<string, unknown> = {
      [resolverName]: {},
      [darwin ? "drt" : "Ynt"]: () => owner,
      [darwin ? "wt" : "Ht"]: normalize,
      [darwin ? "VH" : "MI"]: () => "medium",
      [darwin ? "UN" : "LO"]: () => false,
      [darwin ? "bHt" : "tIt"]: (model: string) => rejected.has(model),
      [darwin ? "zh" : "Wh"]: () => true,
      P: (value: string) => value,
      D: () => "high",
      X: () => ({}),
      q: () => undefined,
      ol: () => "gpt-5.6-luna",
      process: { env: environment },
    }
    const read = new Function(...Object.keys(bindings), `${helper}return ${resolverName}.session;`)(
      ...Object.values(bindings),
    ) as Resolver
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
    owner = {}
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
  })
}
