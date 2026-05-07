import { expect, test } from "bun:test"
import { evaluateStaticPatchTests, loadPatchTestsFromToml } from "../lib/patch-tests"

test("loads embedded patch tests from TOML", () => {
  const tests = loadPatchTestsFromToml(`
name = "sample"
replacement = "function patched(){return true}"

[[tests]]
kind = "static"
name = "replacement is present"
assert_contains = "function patched(){return true}"
`)

  expect(tests).toEqual([
    {
      kind: "static",
      name: "replacement is present",
      assert_contains: "function patched(){return true}",
    },
  ])
})

test("evaluates static patch tests against rendered bundle text", () => {
  const results = evaluateStaticPatchTests("let patched = true", [
    { kind: "static", name: "has patch", assert_contains: "patched = true" },
    { kind: "static", name: "missing old gate", assert_not_contains: "patched = false" },
  ])

  expect(results).toEqual([
    { ok: true, name: "has patch", message: "contains expected text" },
    { ok: true, name: "missing old gate", message: "does not contain forbidden text" },
  ])
})
