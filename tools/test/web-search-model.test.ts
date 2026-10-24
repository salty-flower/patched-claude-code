import { describe, expect, test } from "bun:test"
import { join } from "node:path"
import { parseSync } from "oxc-parser"
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

for (const [platform, file, parser, small] of [
  ["darwin-arm64", "chunk-1dq1pcbj.js", "Ft", "_S"],
  ["linux-x64", "chunk-pp7zwndm.js", "$t", "yb"],
] as const) {
  describe(platform, () => {
    test("native search expression preserves both fallback branches and bypasses the flag for overrides", async () => {
      const source = await Bun.file(join(root, "staging", version, "graph", platform, file)).text()
      let patched = source
      for (const prefix of ["web-search-model-parser-", "web-search-model-select-"]) {
        const entry = literal(activePatch(entries, version, platform, prefix))
        expect(source.split(entry.locator)).toHaveLength(2)
        patched = patched.replace(entry.locator, () => entry.replacement)
      }
      const parsed = parseSync("web-search.js", patched, { sourceType: "module" })
      expect(parsed.errors).toEqual([])
      expect(() => new Bun.Transpiler({ loader: "js" }).transformSync(patched)).not.toThrow()
      expect(
        parsed.program.body.some(
          (node) =>
            node.type === "ImportDeclaration" &&
            node.specifiers.some(
              (specifier) =>
                specifier.type === "ImportSpecifier" &&
                specifier.imported.type === "Identifier" &&
                specifier.imported.name === parser &&
                specifier.local.name === "patchedWebSearchModel",
            ),
        ),
      ).toBe(true)
      const entry = literal(activePatch(entries, version, platform, "web-search-model-select-"))
      for (const override of [undefined, "", "gpt-6-luna", "sonnet[1m]"]) {
        for (const flag of [false, true]) {
          const calls: string[] = []
          const bindings = {
            process: { env: { CLAUDE_CODE_WEB_SEARCH_MODEL: override } },
            patchedWebSearchModel: (model: string) => {
              calls.push("parse")
              return `resolved:${model}`
            },
            k: (key: string, fallback: boolean) => {
              expect([key, fallback]).toEqual(["tengu_plum_vx3", false])
              calls.push("flag")
              return flag
            },
            [small]: () => {
              calls.push("small")
              return "small-model"
            },
            y: {
              mainLoopModel: () => {
                calls.push("main")
                return "main-model"
              },
            },
          }
          const run = (expression: string) =>
            new Function(...Object.keys(bindings), `let ${expression};return x`)(...Object.values(bindings))
          const result = run(entry.replacement)
          expect(calls).toEqual(override ? ["parse"] : ["flag", flag ? "small" : "main"])
          expect(result).toBe(override ? `resolved:${override}` : run(entry.locator))
        }
      }
    })
  })
}
