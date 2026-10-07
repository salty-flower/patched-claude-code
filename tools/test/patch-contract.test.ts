import { expect, test } from "bun:test"
import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { loadPatchEntriesFromToml } from "../lib/patch-files"
import type { PatchEntry } from "../lib/patch-files"
import { activePatch, captureIdentifier } from "./helpers/patch-contract"
import { anchorOffset, patchedEntryFunction, patchedFunction } from "./helpers/patched-function"

const entries = loadPatchEntriesFromToml(
  `
name = "fixture"
target_version = "2.1.1"
rationale = "test active selection"
[[patches]]
name = "resolver-old"
applies_to = ">=2.1.1 <2.1.2"
platforms = ["darwin-arm64"]
locator_kind = "literal"
locator_pattern = "old"
replacement = "old-patched"
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L1-L2"
[[patches]]
name = "resolver-current"
applies_to = ">=2.1.2 <2.1.3"
platforms = ["darwin-arm64"]
locator_kind = "literal"
locator_pattern = "new"
replacement = "new-patched"
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L1-L2"
`,
  "fixture.toml",
)

test("active selection cannot fall back to a stale version or platform", () => {
  expect(activePatch(entries, "2.1.2", "darwin-arm64", "resolver-").name).toBe("resolver-current")
  expect(() => activePatch(entries, "2.1.3", "darwin-arm64", "resolver-")).toThrow("found 0")
  expect(() => activePatch(entries, "2.1.2", "linux-x64", "resolver-")).toThrow("found 0")
  expect(() => activePatch([...entries, entries[1]], "2.1.2", "darwin-arm64", "resolver-")).toThrow("found 2")
})

test("semantic role capture follows renamed identifiers and rejects ambiguity", () => {
  const role = /slug=([\w$]+)\(model\)/
  expect(captureIdentifier("slug=old(model)", "normalize", role)).toBe("old")
  expect(captureIdentifier("slug=$new(model)", "normalize", role)).toBe("$new")
  expect(() => captureIdentifier("", "normalize", role)).toThrow("found none")
  expect(() => captureIdentifier("slug=old(model);slug=$new(model)", "normalize", role)).toThrow(
    "Expected one identifier",
  )
})

test("function extraction preserves native boundaries and literal replacement bytes", () => {
  const patch = { ...entries[1], locator_pattern: "return 1", replacement: 'return "$&"' }
  const source = 'function outer(){const unrelated="}";const callback=()=>{return 1},next=()=>2;return callback}'
  expect(patchedFunction(source, patch)).toEqual({
    original: "callback=()=>{return 1}",
    patched: 'callback=()=>{return "$&"}',
  })
  expect(patchedFunction("function*warnings(){return 1}function next(){}", patch).patched).toBe(
    'function*warnings(){return "$&"}',
  )
})

test("function extraction rejects missing, duplicate, invalid, and top-level locators", () => {
  const patch = { ...entries[1], locator_pattern: "marker()", replacement: "replacement()" }
  expect(() => patchedFunction("function f(){}", patch)).toThrow("expected one locator")
  expect(() => patchedFunction("function f(){marker();marker()}", patch)).toThrow("expected one locator")
  expect(() => patchedFunction("function f(){marker();", patch)).toThrow("cannot parse target")
  expect(() => patchedFunction("marker()", patch)).toThrow("no enclosing function")
})

function graphFixture(files: Record<string, string>, run: (graph: string) => void): void {
  const graph = mkdtempSync(join(tmpdir(), "patch-contract-graph-"))
  try {
    for (const [path, source] of Object.entries(files)) writeFileSync(join(graph, path), source)
    run(graph)
  } finally {
    rmSync(graph, { recursive: true, force: true })
  }
}

function astEntry(name: string, source: string, value: string): PatchEntry {
  return {
    ...entries[1],
    name,
    locator_kind: "ast_transform",
    locator_pattern: undefined,
    replacement: undefined,
    ast: { schema: 1, match: { node: "CallExpression", source } },
    transform: { op: "replace_node", value },
  }
}

function extractGraphFunction(graph: string, patches: PatchEntry[], patch: PatchEntry = patches[0]!) {
  return patchedEntryFunction({ graph, entries: patches, version: "2.1.2", platform: "darwin-arm64", patch })
}

test("graph function extraction rejects aggregate duplicate matches instead of hiding a file error", () => {
  const patch = astEntry("duplicate-guard", "guard(model)", "true")
  graphFixture(
    {
      "one.js": "function f(){if(!guard(model))return null;return 1}",
      "two.js": "function g(){if(!guard(model))return null;if(!guard(model))return null;return 2}",
    },
    (graph) => {
      expect(() => extractGraphFunction(graph, [patch])).toThrow(
        "expected 1 AST match(es) across darwin-arm64 graph, got 3",
      )
    },
  )
})

test("AST anchor extraction reports native node boundaries and propagates invalid transforms", () => {
  const source = "function f(){return marker()}"
  const patch = {
    ...astEntry("invalid-argument", "marker()", "true"),
    transform: {
      op: "set_call_arg" as const,
      index: 1,
      value: "true",
    },
  }
  expect(() => anchorOffset(source, patch)).toThrow()
  const insert = {
    ...astEntry("insert-after", "marker()", "true"),
    transform: {
      op: "insert_after_node" as const,
      code: ";",
    },
  }
  expect(anchorOffset(source, insert)).toBe(source.indexOf("marker()"))
})

test("graph extraction composes regex capture expansion with the production AST batch", () => {
  const rename: PatchEntry = {
    ...entries[1],
    name: "rename-call",
    locator_kind: "regex",
    locator_pattern: "old\\(([^)]+)\\)",
    replacement: "newCall($1)",
  }
  const replacement = astEntry("replace-marker", "marker()", "42")
  graphFixture({ "one.js": "function f(){return old(value)+marker()}" }, (graph) => {
    expect(extractGraphFunction(graph, [rename, replacement], replacement)).toEqual({
      original: "function f(){return old(value)+marker()}",
      patched: "function f(){return newCall(value)+42}",
    })
  })
})

test("graph extraction rejects overlapping transforms within a production batch", () => {
  const patches = [astEntry("replace-call", "marker()", "42"), astEntry("replace-again", "marker()", "true")]
  graphFixture({ "one.js": "function f(){return marker()}" }, (graph) => {
    expect(() => extractGraphFunction(graph, patches)).toThrow("overlap")
  })
})

test("graph extraction retains attached resolver methods but not the next declaration", () => {
  const patch = astEntry("attached-session", "marker()", "42")
  graphFixture({ "one.js": "function f(){return marker()}function next(){return 0}" }, (graph) => {
    const owner: PatchEntry = {
      ...patch,
      name: "attach-method",
      ast: { schema: 1, match: { node: "FunctionDeclaration", function_name: "f" } },
      transform: { op: "insert_after_node", code: "f.session=function(){return 7};" },
    }
    expect(extractGraphFunction(graph, [patch, owner], patch).patched).toBe(
      "function f(){return 42}f.session=function(){return 7};",
    )
  })
})
