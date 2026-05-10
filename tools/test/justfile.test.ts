import { readFileSync } from "node:fs"
import { join } from "node:path"
import { expect, test } from "bun:test"

const ROOT = join(import.meta.dir, "..", "..")

function recipeBlock(name: string): string {
  const justfile = readFileSync(join(ROOT, "justfile"), "utf8")
  const start = justfile.indexOf(`\n${name}`)
  expect(start).toBeGreaterThanOrEqual(0)
  const next = justfile.indexOf("\n\n", start + 1)
  return justfile.slice(start + 1, next === -1 ? justfile.length : next)
}

test("ci release audit target declares shared staged-bundle work once", () => {
  const recipe = recipeBlock("ci-release-audit")

  expect(recipe).toContain("(tool-test version source)")
  expect(recipe).toContain("(smoke version source)")
  expect(recipe).toContain("(patch-test version source)")
  expect(recipe).toContain("(package version release_id source)")
  expect(recipe).toContain("(release-source version release_id source)")
  expect(recipe).toContain("git ls-tree -r --name-only")
})

test("render target depends on verify but skips render-patched internal verification", () => {
  const recipe = recipeBlock("render")

  expect(recipe).toContain("render version=target source=source: (verify version source)")
  expect(recipe).toContain('render-patched.ts "{{version}}" --skip-verify')
})
