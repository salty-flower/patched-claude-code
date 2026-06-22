import { expect, test } from "bun:test"
import { applyPatchEntries, patchSkipReason } from "../lib/apply-patches"
import type { PatchEntry } from "../lib/patch-files"

function basePatch(fields: Partial<PatchEntry>): PatchEntry {
  return {
    file: "patches/test.toml",
    featureName: "test",
    name: "test patch",
    enabled: true,
    target_version: "1.0.0",
    rationale: "Test patch.",
    rationale_ref: "reference/v2.1.88/sources/src/main.tsx#L1-L1",
    locator_kind: "literal",
    tests: [{ kind: "static", name: "patched", assert_contains: "patched" }],
    ...fields,
  }
}

test("applies legacy byte patches and AST transform patches in order", () => {
  const patches: PatchEntry[] = [
    basePatch({
      name: "legacy literal",
      locator_kind: "literal",
      locator_pattern: "verbose:q",
      replacement: "verbose:K",
    }),
    basePatch({
      name: "ast verbose",
      locator_kind: "ast_transform",
      ast: {
        schema: 1,
        match: { node: "CallExpression", callee_property: "createElement", object_property: "verbose" },
      },
      transform: { op: "set_call_arg", index: 1, value: "{key:J,item:w,verbose:!0}" },
    }),
  ]

  const result = applyPatchEntries("const out=L4.createElement(yr5,{key:J,item:w,verbose:q})", patches, "1.0.0")

  expect(result.source).toBe("const out=L4.createElement(yr5,{key:J,item:w,verbose:!0})")
  expect(result.applied).toBe(2)
})

test("batches consecutive applicable AST transform patches", () => {
  let parses = 0
  const patches: PatchEntry[] = [
    basePatch({
      name: "update verbose",
      locator_kind: "ast_transform",
      ast: { schema: 1, match: { node: "ObjectExpression", object_property: "verbose" } },
      transform: { op: "set_object_property", property: "verbose", value: "!0" },
    }),
    basePatch({
      name: "add verbose",
      locator_kind: "ast_transform",
      ast: { schema: 1, match: { node: "ObjectExpression", object_property: "key" } },
      transform: { op: "set_object_property", property: "verbose", value: "!0" },
    }),
  ]

  const result = applyPatchEntries("const a={verbose:q};const b={key:J}", patches, "1.0.0", {
    astTransformOptions: { onParse: () => parses++ },
  })

  expect(result.source).toBe("const a={verbose:!0};const b={key:J,verbose:!0}")
  expect(result.applied).toBe(2)
  expect(parses).toBe(2)
})

test("skips AST transform patches outside their semver range", () => {
  const result = applyPatchEntries(
    'const out=tK.createElement(V,null,"Read image (",q,")")',
    [
      basePatch({
        locator_kind: "ast_transform",
        applies_to: ">=2.0.0",
        ast: {
          schema: 1,
          match: { node: "CallExpression", callee_property: "createElement", string_literal: "Read image (" },
        },
        transform: { op: "append_call_arg", arg: "Z" },
      }),
    ],
    "1.0.0",
  )

  expect(result.source).toBe('const out=tK.createElement(V,null,"Read image (",q,")")')
  expect(result.applied).toBe(0)
})

test("skips disabled patches while defaulting omitted enabled to true", () => {
  const result = applyPatchEntries(
    "beforeOne();beforeTwo()",
    [
      basePatch({
        name: "default enabled",
        locator_kind: "literal",
        locator_pattern: "beforeOne()",
        replacement: "afterOne()",
      }),
      basePatch({
        name: "disabled",
        enabled: false,
        locator_kind: "literal",
        locator_pattern: "beforeTwo()",
        replacement: "afterTwo()",
      }),
    ],
    "1.0.0",
  )

  expect(result.source).toBe("afterOne();beforeTwo()")
  expect(result.applied).toBe(1)
  expect(result.skipped.map((patch) => patch.name)).toEqual(["disabled"])
})

test("reports disabled patch skip reasons separately from semver misses", () => {
  expect(patchSkipReason(basePatch({ enabled: false }), "1.0.0")).toBe("enabled=false")
  expect(patchSkipReason(basePatch({ applies_to: ">=2.0.0" }), "1.0.0")).toBe("applies_to=>=2.0.0 excludes 1.0.0")
  expect(patchSkipReason(basePatch({}), "1.0.0")).toBeUndefined()
})
