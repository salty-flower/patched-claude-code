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
      enabled: true,
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
      enabled: true,
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

test("loads AST transform patch entries without byte replacement fields", () => {
  const patches = loadPatchEntriesFromToml(
    `
name = "ast-feature"
target_version = "2.1.133"

[[patches]]
name = "append-call-arg"
rationale = "Append an argument through a typed AST transform."
rationale_ref = "reference/v2.1.88/sources/src/tools/FileReadTool/UI.tsx#L80-L88"
locator_kind = "ast_transform"

[patches.ast]
schema = 1
match = { node = "CallExpression", callee_property = "createElement", string_literal = "Read image (" }

[patches.transform]
op = "append_call_arg"
arg = "Z"

[[patches.tests]]
kind = "static"
name = "path suffix is rendered"
assert_contains = '"Read image (",q,")",Z'
`,
    "patches/ast-feature.toml",
  )

  expect(patches).toEqual([
    {
      file: "patches/ast-feature.toml",
      featureName: "ast-feature",
      name: "append-call-arg",
      enabled: true,
      target_version: "2.1.133",
      rationale: "Append an argument through a typed AST transform.",
      rationale_ref: "reference/v2.1.88/sources/src/tools/FileReadTool/UI.tsx#L80-L88",
      locator_kind: "ast_transform",
      ast: {
        schema: 1,
        match: { node: "CallExpression", callee_property: "createElement", string_literal: "Read image (" },
      },
      transform: { op: "append_call_arg", arg: "Z" },
      tests: [{ kind: "static", name: "path suffix is rendered", assert_contains: '"Read image (",q,")",Z' }],
    },
  ])
})

test("loads disabled patch entries while defaulting omitted enabled to true", () => {
  const patches = loadPatchEntriesFromToml(
    `
name = "feature-file"
target_version = "2.1.133"

[[patches]]
name = "default-enabled-site"
rationale = "Patch the default-enabled site."
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L1-L2"
locator_pattern = "beforeOne()"
locator_kind = "literal"
replacement = "afterOne()"

[[patches.tests]]
kind = "static"
name = "first replacement"
assert_contains = "afterOne()"

[[patches]]
name = "disabled-site"
enabled = false
rationale = "Keep this patch recorded but disabled."
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L3-L4"
locator_pattern = "beforeTwo()"
locator_kind = "literal"
replacement = "afterTwo()"

[[patches.tests]]
kind = "static"
name = "second replacement"
assert_contains = "afterTwo()"
`,
    "patches/feature-file.toml",
  )

  expect(patches[0]?.enabled).toBe(true)
  expect(patches[1]?.enabled).toBe(false)
})
