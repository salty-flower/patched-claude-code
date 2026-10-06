import { expect, test } from "bun:test"
import { join } from "node:path"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { activePatch, captureIdentifier } from "./helpers/patch-contract"
import { patchedEntryFunction } from "./helpers/patched-function"

const root = join(import.meta.dir, "..", "..")
const version = targetVersion()
const entries = loadPatchEntriesFromFile(join(root, "patches/model-effort-capabilities.toml"))

for (const platform of ["darwin-arm64", "linux-x64"]) {
  // Missing current graphs are errors, never a reason to skip or read an old target.
  const graph = join(root, "staging", version, "graph", platform)
  // Apply the real graph pipeline so entries sharing one function compose in order,
  // then return that function's text before and after patching.
  function contract(prefix: string) {
    const patch = activePatch(entries, version, platform, prefix)
    return patchedEntryFunction({ graph, entries, version, platform, patch })
  }

  test(`${platform}: active capability resolver accepts normalized firstParty declarations`, () => {
    const { patched } = contract("explicit-capabilities-first-party-")
    const name = captureIdentifier(patched, "capability resolver", /^function ([\w$]+)\(/)
    const firstPartyGate = captureIdentifier(patched, "first-party guard", /if\(([\w$]+)\(\)\)return/)
    const table = captureIdentifier(
      patched,
      "capability declarations",
      /for\(const \{modelEnvVar,capabilitiesEnvVar\} of ([\w$]+)\)/,
    )
    const env: Record<string, string> = { MODEL: " GPT-5.6-Astra[1m] ", CAPS: "effort, MAX_EFFORT" }
    const run = new Function("process", table, firstPartyGate, `${patched};return ${name};`)(
      { env },
      [{ modelEnvVar: "MODEL", capabilitiesEnvVar: "CAPS" }],
      () => true,
    ) as (model: string, capability: string) => boolean | undefined
    expect(run("gpt-5.6-astra", "max_effort")).toBe(true)
    expect(run(" GPT-5.6-ASTRA[1m] ", "effort")).toBe(true)
    expect(run("gpt-5.6-astra", "xhigh_effort")).toBe(false)
    expect(run("other-model", "effort")).toBeUndefined()
    env.ANTHROPIC_CUSTOM_MODEL_OPTION = " GPT-5.6-Luna[1m] "
    env.ANTHROPIC_CUSTOM_MODEL_OPTION_EFFORT_LEVEL = " MAX "
    env.ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES = "effort"
    expect(run("gpt-5.6-luna", "effort")).toBe(true)
    expect(run("gpt-5.6-luna", "max_effort")).toBe(true)
    expect(run("gpt-5.6-luna", "xhigh_effort")).toBe(false)
    env.ANTHROPIC_CUSTOM_MODEL_OPTION_2 = " GPT-5.6-Spark[1m] "
    env.ANTHROPIC_CUSTOM_MODEL_OPTION_2_EFFORT_LEVEL = " XHIGH "
    expect(run("gpt-5.6-spark[1m]", "effort")).toBe(true)
    expect(run("gpt-5.6-spark", "xhigh_effort")).toBe(true)
    delete env.ANTHROPIC_CUSTOM_MODEL_OPTION_2_EFFORT_LEVEL
    env.ANTHROPIC_CUSTOM_MODEL_OPTION_2_SUPPORTED_CAPABILITIES = " effort, MAX_EFFORT "
    expect(run("gpt-5.6-spark", "max_effort")).toBe(true)
    expect(run("gpt-5.6-spark", "xhigh_effort")).toBe(false)
    env.ANTHROPIC_CUSTOM_MODEL_OPTION_2_SUPPORTED_CAPABILITIES = ""
    expect(run("gpt-5.6-spark", "effort")).toBe(false)
    for (let slot = 3; slot <= 10; slot += 1) {
      const key = `ANTHROPIC_CUSTOM_MODEL_OPTION_${slot}`
      env[key] = ` Provider/Slot-${slot}[1M] `
      env[`${key}_EFFORT_LEVEL`] = " MAX "
      expect(run(`provider/slot-${slot}`, "effort")).toBe(true)
      expect(run(`provider/slot-${slot}`, "max_effort")).toBe(true)
      delete env[`${key}_EFFORT_LEVEL`]
      env[`${key}_SUPPORTED_CAPABILITIES`] = " effort, XHIGH_EFFORT "
      expect(run(`provider/slot-${slot}`, "xhigh_effort")).toBe(true)
      expect(run(`provider/slot-${slot}`, "max_effort")).toBe(false)
      env[`${key}_SUPPORTED_CAPABILITIES`] = ""
      expect(run(`provider/slot-${slot}`, "effort")).toBe(false)
    }
    env.ANTHROPIC_CUSTOM_MODEL_OPTION_11 = "provider/eleven"
    env.ANTHROPIC_CUSTOM_MODEL_OPTION_11_SUPPORTED_CAPABILITIES = "effort"
    expect(run("provider/eleven", "effort")).toBeUndefined()
  })

  test(`${platform}: active normalization preserves selected effort and organization policy`, () => {
    const { patched } = contract("effort-reactive-capability-")
    const name = captureIdentifier(patched, "effort normalizer", /^function ([\w$]+)\(/)
    const valid = captureIdentifier(patched, "effort validation", /typeof [\w$]+==="string"&&([\w$]+)\(/)
    const normalize = captureIdentifier(patched, "organization policy", /\)[\w$]+=([\w$]+)\([\w$]+,[\w$]+\)/)
    const make = (limit: boolean) =>
      new Function(valid, normalize, `${patched};return ${name};`)(
        () => true,
        (effort: string, model: string) => (limit && model === "restricted" ? "medium" : effort),
      ) as (effort: string, model: string) => string
    expect(make(false)("max", "custom")).toBe("max")
    expect(make(false)("xhigh", "custom")).toBe("xhigh")
    expect(make(true)("max", "restricted")).toBe("medium")
    expect(make(true)("xhigh", "restricted")).toBe("medium")
    expect(make(true)("max", "custom")).toBe("max")
  })

  // Each contract() locates and applies a function slice from the staged graph,
  // which is slower than a plain fixture read.
  test(`${platform}: active native rejection recovery queues one visible warning`, () => {
    const callback = contract("effort-retry-notice-queue-").patched
    const drain = contract("effort-retry-notice-drain-")
    const binding = (role: string, pattern: RegExp) => captureIdentifier(callback, role, pattern)
    const retry = binding("retry callback", /^([\w$]+)=/)
    const options = binding("request options", /\$\{([\w$]+)\.model\}/)
    const resolved = binding("resolved model", /,([\w$]+)!==[\w$]+\.model/)
    const latched: string[] = []
    const native: Record<string, unknown> = {
      [options]: { model: "alias" },
      [resolved]: "resolved-model",
      [binding("unsupported error classifier", /if\(!([\w$]+)\(/)]: (error: string) => error === "unsupported",
      [binding("unsupported model latch", /([\w$]+)\([\w$]+\.model\),/)]: (model: string) => latched.push(model),
      [binding("model identity", /\{model:([\w$]+)\(/)]: (model: string) => model,
      [binding("debug logger", /return ([\w$]+)\(`/)]: () => {},
      [binding("retry telemetry", /,([\w$]+)\("tengu_effort_unsupported_retry"/)]: () => {},
      [captureIdentifier(
        drain.patched,
        "warning factory",
        /yield ([\w$]+)\((?:__acc_notice,"warning"|\{content:__acc_notice,error:"warning"\})\)/,
      )]: (content: string | { content?: string; error?: string }, level?: string) => ({
        text: typeof content === "string" ? content : (content.content ?? ""),
        level: typeof content === "string" ? level : content.error,
      }),
      [captureIdentifier(drain.original, "pending upstream warning", /if\(([\w$]+)!==void 0\)/)]: undefined,
    }
    const drainName = captureIdentifier(drain.patched, "warning drain", /^function\*([\w$]+)\(/)
    const run = new Function(
      ...Object.keys(native),
      `let ${callback};${drain.patched};return {retry:${retry},drain:${drainName}};`,
    )(...Object.values(native)) as {
      retry: (error: string) => string | null
      drain: () => Generator<{ text: string; level: string }>
    }
    expect(run.retry("unrelated")).toBeNull()
    expect(latched).toEqual([])
    expect([...run.drain()]).toEqual([])
    expect(run.retry("unsupported")).toBe("retry:effort-unsupported")
    expect(latched).toEqual(["alias", "resolved-model"])
    const messages = [...run.drain()]
    expect(messages).toHaveLength(1)
    expect(messages[0]?.level).toBe("warning")
    expect(messages[0]?.text).toContain("Model alias rejected")
    expect(messages[0]?.text).toContain("backend default is unknown")
    expect([...run.drain()]).toEqual([])
  }, 20_000)
}
