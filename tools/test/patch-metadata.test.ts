import { expect, test } from "bun:test"
import { loadPatchEntriesFromToml } from "../lib/patch-files"
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

test("normalizes multi-patch TOML entries with inherited metadata", () => {
  const patches = loadPatchEntriesFromToml(
    `
name = "feature-file"
target_version = "2.1.133"
applies_to = ">=2.1.133 <2.2.0"

[[patches]]
name = "first-site"
rationale = "Patch the first site."
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L1-L2"
locator_pattern = "beforeOne()"
locator_kind = "literal"
replacement = "afterOne()"

[[patches.tests]]
kind = "static"
name = "first replacement"
assert_contains = "afterOne()"

[[patches]]
name = "second-site"
rationale = "Patch the second site."
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L3-L4"
locator_pattern = "beforeTwo()"
locator_kind = "literal"
expected_matches = 2
replacement = "afterTwo()"

[[patches.tests]]
kind = "static"
name = "second replacement"
assert_contains = "afterTwo()"
`,
    "patches/feature-file.toml",
  )

  expect(patches).toEqual([
    {
      file: "patches/feature-file.toml",
      featureName: "feature-file",
      name: "first-site",
      target_version: "2.1.133",
      applies_to: ">=2.1.133 <2.2.0",
      rationale: "Patch the first site.",
      rationale_ref: "reference/v2.1.88/sources/src/main.tsx#L1-L2",
      locator_pattern: "beforeOne()",
      locator_kind: "literal",
      replacement: "afterOne()",
      tests: [{ kind: "static", name: "first replacement", assert_contains: "afterOne()" }],
    },
    {
      file: "patches/feature-file.toml",
      featureName: "feature-file",
      name: "second-site",
      target_version: "2.1.133",
      applies_to: ">=2.1.133 <2.2.0",
      rationale: "Patch the second site.",
      rationale_ref: "reference/v2.1.88/sources/src/main.tsx#L3-L4",
      locator_pattern: "beforeTwo()",
      locator_kind: "literal",
      expected_matches: 2,
      replacement: "afterTwo()",
      tests: [{ kind: "static", name: "second replacement", assert_contains: "afterTwo()" }],
    },
  ])
})
