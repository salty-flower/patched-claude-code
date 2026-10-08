import { expect, test } from "bun:test"
import { resolve } from "node:path"
import { parseSync } from "oxc-parser"
import { applyPatchEntriesToGraphBundle, loadGraphBundle } from "../lib/graph-bundle"
import { patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { recordOracleCheck } from "./helpers/oracle-evidence"
import { evaluateStaticPatchTests, type StaticPatchTest } from "../lib/patch-tests"

const root = resolve(process.env.PATCHED_CC_ROOT ?? resolve(import.meta.dir, "../.."))
const version = "2.1.293"
const platforms = ["darwin-arm64", "linux-x64"] as const
type Platform = (typeof platforms)[number]

type FunctionSources = {
  config: string
  rewrite: string
  emit: string
  configName: "Hno" | "voo"
  rewriteName: "pEe" | "sve"
  emitName: "hCt" | "YRt"
}

type PromptConfig = { strings: string[]; matched: Set<string> }
type NativeBindings = {
  config: () => PromptConfig
  rewrite: (text: string, context: unknown) => string
}

type Scenario = {
  explicitLocalJson?: string
  allowServedToolText?: string
  cachedRemoteStrings: string[]
}

const sourceCache = new Map<Platform, FunctionSources>()

function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}

function declarations(source: string): Array<{ name: string; source: string }> {
  const parsed = parseSync("local-prompt-ablation-native.js", source)
  expect(parsed.errors).toEqual([])
  const result: Array<{ name: string; source: string }> = []
  const visit = (value: unknown) => {
    if (Array.isArray(value)) {
      for (const child of value) visit(child)
      return
    }
    if (!record(value)) return
    if (
      value.type === "FunctionDeclaration" &&
      record(value.id) &&
      typeof value.id.name === "string" &&
      typeof value.start === "number" &&
      typeof value.end === "number"
    ) {
      result.push({ name: value.id.name, source: source.slice(value.start, value.end) })
    }
    for (const child of Object.values(value)) visit(child)
  }
  visit(parsed.program)
  return result
}

function uniqueFunction(
  nodes: Array<{ name: string; source: string }>,
  name: string,
  predicate: (source: string) => boolean = () => true,
): string {
  const matches = nodes.filter((node) => node.name === name && predicate(node.source))
  expect(matches).toHaveLength(1)
  return matches[0]!.source
}

function patchedFunctions(platform: Platform): FunctionSources {
  const cached = sourceCache.get(platform)
  if (cached) return cached
  const patchFile = resolve(root, "patches/local-prompt-ablation.toml")
  const patches = loadPatchEntriesFromFile(patchFile).filter((entry) => patchApplies(entry, version))
  expect(patches).toHaveLength(3)

  const graph = loadGraphBundle(resolve(root, `staging/${version}/graph/${platform}`), platform)
  const rendered = applyPatchEntriesToGraphBundle(graph, patches, version)
  const chunkName = platform === "darwin-arm64" ? "chunk-nwqfvmza.js" : "chunk-g263vvvn.js"
  const graphFile = graph.files.find((file) => file.path === chunkName)
  expect(graphFile).toBeDefined()
  const source = rendered.texts.get(chunkName) ?? graphFile!.text
  const renderedBundle = graph.files.map((file) => rendered.texts.get(file.path) ?? file.text).join("\n")
  const staticTests = patches.flatMap((entry) => (entry.tests ?? []).filter((test) => test.kind === "static"))
  const staticResults = evaluateStaticPatchTests(renderedBundle, staticTests as StaticPatchTest[])
  expect(staticResults.filter((result) => !result.ok)).toEqual([])
  const nodes = declarations(source)
  const configName = platform === "darwin-arm64" ? "Hno" : "voo"
  const rewriteName = platform === "darwin-arm64" ? "pEe" : "sve"
  const emitName = platform === "darwin-arm64" ? "hCt" : "YRt"
  const sources: FunctionSources = {
    configName,
    rewriteName,
    emitName,
    config: uniqueFunction(nodes, configName, (body) => body.includes("CLAUDE_CODE_REMOVE_PROMPT_STRINGS")),
    rewrite: uniqueFunction(nodes, rewriteName, (body) => body.includes("promptAblation") && body.includes("replaceAll")),
    emit: uniqueFunction(nodes, emitName, (body) => body.includes("strings:e,matched:n")),
  }
  sourceCache.set(platform, sources)
  return sources
}

function instantiate(
  sources: FunctionSources,
  scenario: Scenario,
): {
  bindings: NativeBindings
  state: { promptAblation?: PromptConfig }
  cacheReads: () => number
  analyticsCalls: Array<{ name: unknown; metadata: unknown }>
} {
  const state: { promptAblation?: PromptConfig } = {}
  const analyticsCalls: Array<{ name: unknown; metadata: unknown }> = []
  let cacheReads = 0
  const remoteCacheRead = () => {
    cacheReads++
    return { remove_prompt_strings: scenario.cachedRemoteStrings }
  }
  const factory = new Function(
    "a",
    "process",
    "gt",
    "Qc",
    "Jc",
    "gCt",
    "VRt",
    "t",
    "i",
    "c",
    "nL",
    "Q0",
    "i0",
    "rM",
    "_o",
    `${sources.config}\n${sources.rewrite}\n${sources.emit}\nreturn { config: ${sources.configName}, rewrite: ${sources.rewriteName} }`,
  ) as (...args: unknown[]) => NativeBindings

  const bindings = factory(
    { CLAUDE_CODE_REMOVE_PROMPT_STRINGS: scenario.explicitLocalJson },
    { env: { CLAUDE_CODE_ALLOW_SERVED_TOOL_TEXT: scenario.allowServedToolText } },
    (value: string) => JSON.parse(value),
    remoteCacheRead,
    remoteCacheRead,
    "remove_prompt_strings",
    "remove_prompt_strings",
    () => undefined,
    (name: unknown, metadata: unknown) => analyticsCalls.push({ name, metadata }),
    () => undefined,
    (context: unknown) => record(context) && context.nativeSkip === true,
    (context: unknown) => record(context) && context.nativeSkip === true,
    Symbol("darwin-sentinel"),
    Symbol("linux-sentinel"),
    () => state,
  )

  return { bindings, state, cacheReads: () => cacheReads, analyticsCalls }
}

function withOracle(
  oracleId: string,
  check: string,
  platform: Platform,
  action: () => void,
): void {
  let outcome: "passed" | "failed" = "failed"
  try {
    action()
    outcome = "passed"
  } finally {
    recordOracleCheck({
      oracleIds: [oracleId],
      platform,
      evidenceClass: "runtime",
      check,
      outcome,
    })
  }
}

const sourceAdmissionCheck = "local-prompt-ablation-runtime.test.ts: native prompt deletion respects local source admission"
const telemetryCheck = "local-prompt-ablation-runtime.test.ts: native prompt deletion never records matching strings or emits analytics"

test(sourceAdmissionCheck, () => {
  for (const platform of platforms) {
    withOracle("local-prompt-ablation/local-source-admission", sourceAdmissionCheck, platform, () => {
      const sources = patchedFunctions(platform)
      const nativeModeGate = platform === "darwin-arm64" ? "if(nL(n)||e===i0)return e;" : "if(Q0(n)||e===rM)return e;"
      expect(sources.rewrite).toContain(nativeModeGate)

      const denied = instantiate(sources, {
        cachedRemoteStrings: ["REMOTE"],
      })
      expect(denied.bindings.rewrite(deniedScenarioInput, {})).toBe(deniedScenarioInput)
      expect(denied.cacheReads()).toBe(0)
      expect(denied.state.promptAblation?.strings).toEqual([])

      const explicitLocalInput = "LOCAL REMOTE LOCAL"
      const local = instantiate(sources, {
        explicitLocalJson: '["LOCAL"]',
        cachedRemoteStrings: ["REMOTE"],
      })
      expect(local.bindings.rewrite(explicitLocalInput, {})).toBe(" REMOTE ")
      expect(local.cacheReads()).toBe(0)
      expect(local.state.promptAblation?.strings).toEqual(["LOCAL"])

      const explicitEmpty = instantiate(sources, {
        explicitLocalJson: "[]",
        cachedRemoteStrings: ["REMOTE"],
      })
      expect(explicitEmpty.bindings.rewrite("REMOTE remains", {})).toBe("REMOTE remains")
      expect(explicitEmpty.cacheReads()).toBe(0)
      expect(explicitEmpty.state.promptAblation?.strings).toEqual([])

      const optedRemoteInput = "pre REMOTE|REMOTE post"
      const optedRemote = instantiate(sources, {
        allowServedToolText: "1",
        cachedRemoteStrings: ["REMOTE"],
      })
      expect(optedRemote.bindings.rewrite(optedRemoteInput, {})).toBe("pre | post")
      expect(optedRemote.cacheReads()).toBe(1)
      expect(optedRemote.state.promptAblation?.strings).toEqual(["REMOTE"])

      const deniedNonCanonical = instantiate(sources, {
        allowServedToolText: "true",
        cachedRemoteStrings: ["REMOTE"],
      })
      expect(deniedNonCanonical.bindings.rewrite("REMOTE remains", {})).toBe("REMOTE remains")
      expect(deniedNonCanonical.cacheReads()).toBe(0)

      const nativeModeSkipped = instantiate(sources, {
        cachedRemoteStrings: ["REMOTE"],
      })
      expect(nativeModeSkipped.bindings.rewrite("REMOTE remains", { nativeSkip: true })).toBe("REMOTE remains")
      expect(nativeModeSkipped.cacheReads()).toBe(0)
      expect(nativeModeSkipped.state.promptAblation).toBeUndefined()
    })
  }
}, 60000)

test(telemetryCheck, () => {
  for (const platform of platforms) {
    withOracle("local-prompt-ablation/telemetry-unreachable", telemetryCheck, platform, () => {
      const sources = patchedFunctions(platform)
      expect(sources.rewrite).toContain('g=g.replaceAll(h,"")')
      expect(sources.rewrite).not.toContain(".matched.has(")
      expect(sources.rewrite).not.toContain(".matched.add(")
      expect(sources.emit).not.toContain("tengu_remove_prompt_strings_applied")
      expect(sources.emit).toMatch(new RegExp(`^function ${sources.emitName}\\(\\{strings:e,matched:n\\}\\)\\{\\}$`))

      const scenarios: Array<{ input: string; options: Scenario; expected: string }> = [
        {
          input: "LOCAL then LOCAL",
          options: { explicitLocalJson: '["LOCAL"]', cachedRemoteStrings: ["REMOTE"] },
          expected: " then ",
        },
        {
          input: "REMOTE and REMOTE",
          options: { allowServedToolText: "1", cachedRemoteStrings: ["REMOTE"] },
          expected: " and ",
        },
      ]
      for (const scenario of scenarios) {
        const runtime = instantiate(sources, scenario.options)
        expect(runtime.bindings.rewrite(scenario.input, {})).toBe(scenario.expected)
        expect(runtime.state.promptAblation?.matched).toBeInstanceOf(Set)
        expect(runtime.state.promptAblation?.matched.size).toBe(0)
        expect(runtime.analyticsCalls).toEqual([])
      }
    })
  }
}, 60000)

const deniedScenarioInput = "start REMOTE end"
