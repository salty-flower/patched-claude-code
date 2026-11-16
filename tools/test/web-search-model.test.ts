import { describe, expect, test } from "bun:test"
import { join } from "node:path"
import { parseSync } from "oxc-parser"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadGraphBundle } from "../lib/graph-bundle"
import { loadPatchEntriesFromFile, type PatchEntry } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { activePatch } from "./helpers/patch-contract"

const root = join(import.meta.dir, "../..")
const version = targetVersion()
const entries = loadPatchEntriesFromFile(join(root, "patches/web-search-model.toml"))

function literal(entry: PatchEntry): { locator: string; replacement: string } {
  if (entry.locator_kind !== "literal" || !entry.locator_pattern || entry.replacement === undefined) {
    throw new Error(`${entry.name}: expected a literal patch`)
  }
  return { locator: entry.locator_pattern, replacement: entry.replacement }
}

for (const platform of ["darwin-arm64", "linux-x64"] as const) {
  describe(platform, () => {
    test("native search expression preserves fallback branches and native flag bookkeeping", async () => {
      const graphRoot = join(root, "staging", version, "graph", platform)
      const entry = literal(activePatch(entries, version, platform, "web-search-model-select-"))
      const matching = loadGraphBundle(graphRoot, platform).files.filter((file) => file.text.includes(entry.locator))
      expect(matching).toHaveLength(1)
      const matched = matching[0]
      if (!matched) throw new Error("native WebSearch module missing")
      const source = matched.text
      const inlineSelection = entry.locator.match(
        /^([\w$]+)=([\w$]+)\("tengu_plum_vx3",!1\)\?([\w$]+)\(\):([\w$]+)\.mainLoopModel\(\)$/,
      )
      const splitSelection = entry.locator.match(/^([\w$]+)=([\w$]+)\?([\w$]+)\(\):([\w$]+)\.mainLoopModel\(\)$/)
      const selection = inlineSelection ?? splitSelection
      if (!selection) throw new Error("native WebSearch model selection changed")
      const [, selected, flag, small, context] = selection
      const flagAssignment = splitSelection
        ? source.match(new RegExp(`\\b${flag?.replace(/\$/g, "\\$")}=([\\w$]+)\\("tengu_plum_vx3",!1\\)`))
        : undefined
      const flagReader = splitSelection ? flagAssignment?.[1] : flag
      if (!selected || !flagReader || !small || !context) throw new Error("native WebSearch bindings missing")
      if (splitSelection) expect(source).toContain(`leavesLimitStateAlone:${flag}?!0:void 0`)
      const patched = applyPatchEntries(
        source,
        entries.filter((entry) => !entry.platforms || entry.platforms.includes(platform)),
        version,
      ).source
      const parsed = parseSync("web-search.js", patched, { sourceType: "module" })
      expect(parsed.errors).toEqual([])
      expect(() => new Bun.Transpiler({ loader: "js" }).transformSync(patched)).not.toThrow()
      const imports = parsed.program.body.flatMap((node) =>
        node.type === "ImportDeclaration"
          ? node.specifiers.flatMap((specifier) =>
              specifier.type === "ImportSpecifier" &&
              specifier.imported.type === "Identifier" &&
              specifier.local.name === "patchedWebSearchModel"
                ? [{ parser: specifier.imported.name, module: node.source.value }]
                : [],
            )
          : [],
      )
      expect(imports).toHaveLength(1)
      const parserImport = imports[0]
      if (!parserImport) throw new Error("patched WebSearch parser import missing")
      const parserSource = await Bun.file(join(graphRoot, parserImport.module)).text()
      const parserModule = parseSync("native-model-parser.js", parserSource, { sourceType: "module" })
      expect(parserModule.errors).toEqual([])
      expect(
        parserModule.program.body.some(
          (node) =>
            node.type === "ExportNamedDeclaration" &&
            node.specifiers.some(
              (specifier) =>
                specifier.exported.type === "Identifier" && specifier.exported.name === parserImport.parser,
            ),
        ),
      ).toBe(true)
      for (const override of [undefined, "", "gpt-6-luna", "sonnet[1m]"]) {
        for (const flag of [false, true]) {
          const calls: string[] = []
          const bindings = {
            process: { env: { CLAUDE_CODE_WEB_SEARCH_MODEL: override } },
            patchedWebSearchModel: (model: string) => {
              calls.push("parse")
              return `resolved:${model}`
            },
            [flagReader]: (key: string, fallback: boolean) => {
              expect([key, fallback]).toEqual(["tengu_plum_vx3", false])
              calls.push("flag")
              return flag
            },
            [small]: () => {
              calls.push("small")
              return "small-model"
            },
            [context]: {
              mainLoopModel: () => {
                calls.push("main")
                return "main-model"
              },
            },
          }
          const run = (expression: string) =>
            new Function(
              ...Object.keys(bindings),
              `let ${flagAssignment ? `${flagAssignment[0]},` : ""}${expression};return ${selected}`,
            )(...Object.values(bindings))
          const result = run(entry.replacement)
          expect(calls).toEqual(
            override ? [...(splitSelection ? ["flag"] : []), "parse"] : ["flag", flag ? "small" : "main"],
          )
          expect(result).toBe(override ? `resolved:${override}` : run(entry.locator))
        }
      }
    })
  })
}
