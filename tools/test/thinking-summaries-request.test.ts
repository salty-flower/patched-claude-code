import { describe, expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { parseSync } from "oxc-parser"
import { patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { activePatch } from "./helpers/patch-contract"
import { patchedFunction } from "./helpers/patched-function"
import { recordThinkingRequestRuntimeOracle } from "./helpers/runtime-oracle-checks"

const root = join(import.meta.dir, "../..")
const version = targetVersion()
const prefix = "thinking-display-interactive-default-"
const entries = loadPatchEntriesFromFile(join(root, "patches/thinking-display.toml"))
const featureEntries = entries.filter((entry) => entry.name.startsWith(prefix) && patchApplies(entry, version))

// Exact 304 owners: this is a native-function unit contract, not an HTTP request oracle.
const owners = {
  "darwin-arm64": {
    file: "chunk-bvn0epzr.js",
    resolver: "S$o",
    settings: "ft",
    summarySetting: "zun",
    noninteractive: "B$r",
    caller: "chunk-edt593hp.js",
    request: "chunk-na9nw575.js",
    capability: "z7e",
    displayGate: "kvr",
  },
  "linux-x64": {
    file: "chunk-7p6jp6kj.js",
    resolver: "G$o",
    settings: "pt",
    summarySetting: "Run",
    noninteractive: "bFr",
    caller: "chunk-wt08cjq1.js",
    request: "chunk-rncrmfyt.js",
    capability: "Y7e",
    displayGate: "rEr",
  },
} as const

type Display = "summarized" | "omitted" | "highlights"
type Input = { explicitDisplay?: Display; isNonInteractive: boolean; outputFormat: string; verbose: boolean }
type Resolver = (input: Input) => Display | undefined
type NativeNode = { type: string; start: number; end: number; [key: string]: unknown }

function nodes(source: string): NativeNode[] {
  const parsed = parseSync("thinking-request-native.js", source, { lang: "js", sourceType: "module" })
  expect(parsed.errors).toEqual([])
  const result: NativeNode[] = []
  function visit(value: unknown): void {
    if (!value || typeof value !== "object") return
    if (Array.isArray(value)) {
      for (const item of value) visit(item)
      return
    }
    const node = value as NativeNode
    if (typeof node.type === "string") result.push(node)
    for (const child of Object.values(value)) if (typeof child === "object") visit(child)
  }
  visit(parsed.program)
  return result
}

function unique(source: string, parsed: NativeNode[], type: string, predicate: (text: string) => boolean): string {
  const matches = parsed.filter((node) => node.type === type && predicate(source.slice(node.start, node.end)))
  expect(matches).toHaveLength(1)
  const node = matches[0]
  if (!node) throw new Error("Missing native AST node")
  return source.slice(node.start, node.end)
}

function declaration(source: string, parsed: NativeNode[], name: string): string {
  return unique(source, parsed, "FunctionDeclaration", (text) => text.startsWith(`function ${name}(`))
}

function capture(source: string, pattern: RegExp): string[] {
  const match = source.match(pattern)
  expect(match).not.toBeNull()
  if (!match) throw new Error(`Native source does not match ${pattern}`)
  return match.slice(1)
}

function required(value: string | undefined): string {
  if (value === undefined) throw new Error("Missing native binding capture")
  return value
}

if (version === "2.1.301" && featureEntries.length === 0) {
  test("301 compatibility: interactive summary restoration is a post-bump feature", () => {
    expect(featureEntries).toHaveLength(0)
  })
} else {
  test("current target must include the interactive summary feature on both platforms", () => {
    expect(version).toBe("2.1.304")
    for (const platform of Object.keys(owners)) expect(activePatch(entries, version, platform, prefix)).toBeDefined()
  })

  for (const platform of Object.keys(owners) as (keyof typeof owners)[]) {
    const owner = owners[platform]
    describe(platform, () => {
      const graph = join(root, "staging", version, "graph", platform)
      const source = readFileSync(join(graph, owner.file), "utf8")
      const parsed = nodes(source)
      const patch = activePatch(entries, version, platform, prefix)
      const functions = patchedFunction(source, patch)
      const settingFunction = declaration(source, parsed, owner.summarySetting)
      const noninteractiveFunction = declaration(source, parsed, owner.noninteractive)
      expect(functions.original).toBe(declaration(source, parsed, owner.resolver))
      function resolver(setting: boolean | undefined, patched = true, readSettings?: () => void): Resolver {
        return new Function(
          owner.settings,
          settingFunction +
            ";" +
            noninteractiveFunction +
            ";return (" +
            (patched ? functions.patched : functions.original) +
            ");",
        )(() => {
          readSettings?.()
          return setting === undefined ? {} : { showThinkingSummaries: setting }
        }) as Resolver
      }

      test("real resolver covers settings, explicit preference and interactive/noninteractive output matrix", () => {
        for (const setting of [undefined, true, false]) {
          const run = resolver(setting),
            original = resolver(setting, false)
          for (const isNonInteractive of [false, true])
            for (const outputFormat of ["text", "json", "stream-json"]) {
              for (const verbose of [false, true])
                for (const explicitDisplay of [undefined, "summarized", "omitted", "highlights"] as const) {
                  const input = { isNonInteractive, outputFormat, verbose, explicitDisplay }
                  const expected =
                    explicitDisplay ??
                    (isNonInteractive
                      ? outputFormat === "text" || (outputFormat === "json" && !verbose)
                        ? "omitted"
                        : undefined
                      : setting === false
                        ? undefined
                        : "summarized")
                  expect({ setting, input, result: run(input) }).toEqual({ setting, input, result: expected })
                  if (isNonInteractive || explicitDisplay !== undefined || setting !== undefined) {
                    expect(run(input)).toBe(original(input))
                  }
                }
            }
        }
        recordThinkingRequestRuntimeOracle("resolver-matrix", platform)
      })

      test("explicit and noninteractive branches never consult interactive settings", () => {
        const run = resolver(undefined, true, () => {
          throw new Error("unexpected settings lookup")
        })
        for (const isNonInteractive of [false, true])
          for (const explicitDisplay of ["summarized", "omitted", "highlights"] as const) {
            expect(run({ explicitDisplay, isNonInteractive, outputFormat: "text", verbose: false })).toBe(
              explicitDisplay,
            )
          }
        for (const outputFormat of ["text", "json", "stream-json"])
          for (const verbose of [false, true]) {
            run({ isNonInteractive: true, outputFormat, verbose })
          }
        recordThinkingRequestRuntimeOracle("settings-isolation", platform)
      })

      test("shared summary-setting helper retains its original false-by-default semantics", () => {
        for (const setting of [undefined, true, false]) {
          const run = new Function(owner.settings, `${settingFunction};return ${owner.summarySetting}`)(() => ({
            showThinkingSummaries: setting,
          })) as () => boolean
          expect(run()).toBe(setting === true)
        }
        // Only the resolver function may change, never the shared helper used by routing/SDK paths.
        expect(functions.patched).not.toContain(`function ${owner.summarySetting}(`)
        recordThinkingRequestRuntimeOracle("setting-helper", platform)
      })

      test("native CLI caller keeps disabled thinking disabled and bypasses the display resolver", () => {
        const caller = readFileSync(join(graph, owner.caller), "utf8")
        const guard = unique(
          caller,
          nodes(caller),
          "IfStatement",
          (text) =>
            /^if\([\w$]+\.type!=="disabled"\)/.test(text) && text.includes(`${owner.resolver}({explicitDisplay:`),
        )
        const [budget] = capture(guard, /^if\(([\w$]+)\.type!=="disabled"\)/)
        const [explicit, mark] = capture(guard, /if\(([\w$]+)\)([\w$]+)\(!0\)/)
        const [mode, format] = capture(guard, /let [\w$]+=([\w$]+)\(\),[\w$]+=([\w$]+)\?\?"text"/)
        const [verbose] = capture(guard, /verbose:([\w$]+)/)
        const noninteractive = new Function(`${noninteractiveFunction};return ${owner.noninteractive}`)() as (
          input: Input,
        ) => boolean
        for (const setting of [undefined, true, false])
          for (const explicitDisplay of [undefined, "summarized", "omitted", "highlights"] as const) {
            let calls = 0
            const display = resolver(setting)
            const bindings = {
              [required(budget)]: { type: "disabled" },
              [required(explicit)]: explicitDisplay,
              [required(mark)]: () => {},
              [required(mode)]: () => false,
              [required(format)]: "text",
              [required(verbose)]: false,
              [owner.resolver]: (input: Input) => {
                calls++
                return display(input)
              },
              [owner.noninteractive]: noninteractive,
            }
            const result = new Function(...Object.keys(bindings), `${guard};return ${budget}`)(
              ...Object.values(bindings),
            )
            expect(result).toEqual({ type: "disabled" })
            expect(calls).toBe(0)
          }
        recordThinkingRequestRuntimeOracle("disabled-caller", platform)
      })

      test("native provider and capability display gates remain restrictive (separate from resolver)", () => {
        const request = readFileSync(join(graph, owner.request), "utf8")
        const parsedRequest = nodes(request)
        const capability = declaration(request, parsedRequest, owner.capability)
        const displayGate = declaration(request, parsedRequest, owner.displayGate)
        const [blocked, supports, direct, alternate, provider] = capture(
          capability,
          /return!([\w$]+)\(\)&&([\w$]+)\(e\)&&\(([\w$]+)\(\)\|\|([\w$]+)\(e\)&&([\w$]+)\(\)!=="gateway"\)/,
        )
        for (const blockedValue of [false, true])
          for (const supported of [false, true]) {
            for (const directValue of [false, true])
              for (const alternateValue of [false, true])
                for (const providerValue of ["firstParty", "gateway", "bedrock"]) {
                  const bindings = {
                    [required(blocked)]: () => blockedValue,
                    [required(supports)]: () => supported,
                    [required(direct)]: () => directValue,
                    [required(alternate)]: () => alternateValue,
                    [required(provider)]: () => providerValue,
                  }
                  const run = new Function(
                    ...Object.keys(bindings),
                    `${capability};${displayGate};return {capability:${owner.capability},display:${owner.displayGate}}`,
                  )(...Object.values(bindings)) as {
                    capability: (model: string) => boolean
                    display: (model: string) => boolean
                  }
                  expect(run.capability("fixture-model")).toBe(
                    !blockedValue && supported && (directValue || (alternateValue && providerValue !== "gateway")),
                  )
                  expect(run.display("fixture-model")).toBe(!blockedValue && supported && directValue)
                }
          }
        // The actual request builder suppresses display unless thinking is enabled AND the gate allows it.
        const requestDisplay = unique(
          request,
          parsedRequest,
          "VariableDeclarator",
          (text) =>
            /^[\w$]+=!\(/.test(text) &&
            text.includes(`&&${owner.displayGate}(`) &&
            text.includes('.display==="highlights"'),
        )
        expect(requestDisplay).toMatch(/^[\w$]+=!\([\w$]+&&/)
        expect(requestDisplay).toContain("?void 0:")
        const [displayName, enabledBinding, gateBinding, modelBinding, configBinding, highlightsBinding] = capture(
          requestDisplay,
          /^([\w$]+)=!\(([\w$]+)&&([\w$]+)\(([\w$]+)\)\)\?void 0:([\w$]+)\.display==="highlights"&&([\w$]+)\(\)\?"omitted":/,
        )
        for (const thinkingEnabled of [false, true])
          for (const allowed of [false, true]) {
            const summarized = resolver(undefined)({ isNonInteractive: false, outputFormat: "text", verbose: false })
            const bindings = {
              [required(enabledBinding)]: thinkingEnabled,
              [required(gateBinding)]: () => allowed,
              [required(modelBinding)]: "fixture-model",
              [required(configBinding)]: { display: summarized },
              [required(highlightsBinding)]: () => false,
            }
            const run = new Function(...Object.keys(bindings), `let ${requestDisplay};return ${displayName}`)
            expect(run(...Object.values(bindings))).toBe(thinkingEnabled && allowed ? "summarized" : undefined)
          }
        const enabled = unique(request, parsedRequest, "VariableDeclarator", (text) =>
          /^[\w$]+=[\w$]+\.type!=="disabled"&&!/.test(text),
        )
        const [enabledName, config, disabledEnv] = capture(enabled, /^([\w$]+)=([\w$]+)\.type!=="disabled"&&!([\w$]+)$/)
        for (const type of ["disabled", "adaptive", "enabled"])
          for (const disabled of [false, true]) {
            const run = new Function(required(config), required(disabledEnv), `let ${enabled};return ${enabledName}`)
            expect(run({ type, display: "summarized" }, disabled)).toBe(type !== "disabled" && !disabled)
          }
        recordThinkingRequestRuntimeOracle("provider-capability-gates", platform)
      })
    })
  }
}
