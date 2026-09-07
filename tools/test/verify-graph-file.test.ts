import { expect, test } from "bun:test"
import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { type AstTransformPatch, verifyAstTransformPatch } from "../lib/ast-transform-patches"
import {
  GRAPH_VERIFY_MAX_BYTES,
  GRAPH_VERIFY_MAX_FILES,
  groupGraphVerificationFiles,
  verifyGraphFile,
  verifyGraphFileInWorker,
  verifyGraphFilesInWorker,
} from "../lib/verify-graph-file"

const patch: AstTransformPatch = {
  name: "calls",
  expectedMatches: 3,
  ast: { schema: 1, match: { node: "CallExpression", callee_property: "run" } },
  transform: { op: "append_call_arg", arg: "true" },
}

test("file-centric verification parses once for every applicable locator, including overlapping transforms", () => {
  const phases: string[] = []
  const patches = Array.from({ length: 12 }, (_, i) => ({ ...patch, name: `patch-${i}` }))
  const results = verifyGraphFile("x.run();y.run()", patches, { onParse: (phase) => phases.push(phase) })
  expect(results.every((result) => result.ok && result.matches === 2)).toBe(true)
  expect(phases.filter((phase) => phase === "initial")).toHaveLength(1)
  expect(phases.filter((phase) => phase === "final")).toHaveLength(12)
  for (const [index, entry] of patches.entries()) {
    expect(results[index]).toEqual(verifyAstTransformPatch("x.run();y.run()", { ...entry, expectedMatches: 2 }))
  }
})

test("file-centric verification retains invalid syntax and capture failures", () => {
  for (const arg of ["[", "%%CAPTURE:missing%%"]) {
    const invalid = { ...patch, transform: { op: "append_call_arg" as const, arg } }
    const result = verifyGraphFile("x.run()", [invalid, patch])
    expect(result[0].ok).toBe(false)
    expect(result[1]).toMatchObject({ ok: true, matches: 1 })
    expect(result[0]).toEqual(verifyAstTransformPatch("x.run()", { ...invalid, expectedMatches: 1 }))
  }
  expect(verifyGraphFile("const = ;", [patch])[0].ok).toBe(false)
  expect(verifyGraphFile("const noMatches=1", [patch])[0]).toMatchObject({ ok: true, matches: 0 })
})

test("isolated file worker returns identical results and fails closed for a missing input", () => {
  const dir = mkdtempSync(join(tmpdir(), "cc-verify-file-shards-"))
  try {
    const path = join(dir, "chunk.js")
    writeFileSync(path, "x.run();y.run()")
    expect(verifyGraphFileInWorker(path, [patch, patch])).toEqual(verifyGraphFile("x.run();y.run()", [patch, patch]))
    const other = join(dir, "other.js")
    writeFileSync(other, "const missing=1")
    expect(verifyGraphFilesInWorker([path, other], [patch])).toEqual([
      verifyGraphFile("x.run();y.run()", [patch]),
      verifyGraphFile("const missing=1", [patch]),
    ])
    writeFileSync(other, "const = ;")
    const invalid = verifyGraphFilesInWorker([path, other], [patch])
    expect(invalid[0][0].ok).toBe(true)
    expect(invalid[1][0].ok).toBe(false)
    expect(() => verifyGraphFileInWorker(join(dir, "missing.js"), [patch])).toThrow("worker failed")
    expect(() => verifyGraphFilesInWorker([path, join(dir, "missing.js")], [patch])).toThrow("worker failed")
    expect(verifyGraphFilesInWorker([], [patch])).toEqual([])
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test("worker groups preserve all files in order and enforce file-count and UTF-8 byte bounds", () => {
  const tiny = Array.from({ length: GRAPH_VERIFY_MAX_FILES + 1 }, (_, index) => ({ index, text: "" }))
  expect(groupGraphVerificationFiles(tiny).map((group) => group.length)).toEqual([GRAPH_VERIFY_MAX_FILES, 1])
  const half = { text: "a".repeat(GRAPH_VERIFY_MAX_BYTES / 2) }
  const oversized = { text: "a".repeat(GRAPH_VERIFY_MAX_BYTES + 1) }
  const unicode = { text: "é".repeat(GRAPH_VERIFY_MAX_BYTES / 2) }
  const files = [half, half, oversized, half, unicode, ...tiny]
  const groups = groupGraphVerificationFiles(files)
  expect(groups.flat()).toEqual(files)
  expect(groups.some((group) => group.length === 1 && group[0] === oversized)).toBe(true)
  for (const group of groups) {
    expect(group.length).toBeLessThanOrEqual(GRAPH_VERIFY_MAX_FILES)
    const bytes = group.reduce((total, file) => total + Buffer.byteLength(file.text, "utf8"), 0)
    expect(bytes <= GRAPH_VERIFY_MAX_BYTES || (group.length === 1 && group[0] === oversized)).toBe(true)
  }
  expect(groupGraphVerificationFiles([])).toEqual([])
})
