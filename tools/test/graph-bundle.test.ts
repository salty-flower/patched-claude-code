import { expect, test } from "bun:test"
import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  applyPatchEntriesToGraphBundle,
  decodeStandaloneText,
  expandZstdTextAsset,
  isZstdFrame,
  rewriteBunfsSpecifiers,
  textAssetRuntimePath,
} from "../lib/graph-bundle"
import type { PatchEntry } from "../lib/patch-files"

const astPatch: PatchEntry = {
  file: "fixture.toml",
  featureName: "fixture",
  name: "calls",
  enabled: true,
  target_version: "2.1.263",
  rationale: "fixture",
  rationale_ref: "fixture",
  locator_kind: "ast_transform",
  expected_matches: 3,
  ast: { schema: 1, match: { node: "CallExpression", callee_property: "run" } },
  transform: { op: "append_call_arg", arg: "true" },
}

test("graph AST application reuses per-file preparation and enforces bundle totals", () => {
  const bundle = {
    platform: "linux-x64",
    root: "/fixture",
    files: [
      { path: "a.js", text: "x.run();y.run()" },
      { path: "b.js", text: "z.run()" },
      { path: "c.js", text: "const empty=1" },
    ],
  }
  const phases: string[] = []
  const result = applyPatchEntriesToGraphBundle(bundle, [astPatch], "2.1.263", {
    onParse: (phase) => phases.push(phase),
  })
  expect(result.texts.get("a.js")).toBe("x.run(true);y.run(true)")
  expect(result.texts.get("b.js")).toBe("z.run(true)")
  expect([...result.changedFiles]).toEqual(["a.js", "b.js"])
  expect(phases).toEqual(["initial", "final", "initial", "final", "initial"])
  expect(() => applyPatchEntriesToGraphBundle(bundle, [{ ...astPatch, expected_matches: 2 }], "2.1.263")).toThrow(
    "expected 2 AST match(es) across linux-x64 graph, got 3",
  )
  expect(bundle.files[0].text).toBe("x.run();y.run()")
})

test("graph AST preparation respects literal boundaries and rejects combined overlap", () => {
  const bundle = { platform: "linux-x64", root: "/fixture", files: [{ path: "a.js", text: "x.run()" }] }
  const patch = { ...astPatch, expected_matches: 1 }
  expect(() =>
    applyPatchEntriesToGraphBundle(
      bundle,
      [
        patch,
        {
          ...patch,
          name: "second",
          transform: { op: "replace_node", value: "false" },
        },
      ],
      "2.1.263",
    ),
  ).toThrow("overlap")
  const literal: PatchEntry = {
    ...patch,
    name: "rename",
    locator_kind: "literal",
    locator_pattern: "x.run",
    replacement: "y.run",
  }
  const result = applyPatchEntriesToGraphBundle(bundle, [patch, literal, { ...patch, name: "second" }], "2.1.263")
  expect(result.texts.get("a.js")).toBe("y.run(true,true)")
})

test("standalone text encoding comes from metadata, never byte heuristics", () => {
  const text = "Skill: café 中文 😀"
  expect(Buffer.from(decodeStandaloneText(Buffer.from(text, "utf16le"), 2, "skill")).toString()).toBe(text)
  expect(Buffer.from(decodeStandaloneText(new Uint8Array([0x80, 0xe9]), 1, "skill")).toString()).toBe("\u0080é")
  expect(() => decodeStandaloneText(new Uint8Array([0]), 2, "skill")).toThrow()
  expect(() => decodeStandaloneText(new Uint8Array(), 9, "skill")).toThrow("unsupported standalone text encoding")
})

test("loader adaptation does not rewrite require mentions in strings", () => {
  const text = 'const documentation="import.meta.require";/* import.meta.require */'
  expect(rewriteBunfsSpecifiers(text, "", new Set(["script.mjs"]))).toBe(text)
})

test.each(["runner.mjs", "runner.cjs", "runner.js", "SKILL.md"])("standalone text loader preserves %s", (asset) => {
  const dir = mkdtempSync(join(tmpdir(), "cc-text-loader-"))
  try {
    const source = asset.endsWith(".md")
      ? "# Skill heading\nRaw **Markdown**\n"
      : 'throw new Error("ASSET_EXECUTED"); process.exit(2)\n'
    writeFileSync(join(dir, asset), source)
    writeFileSync(join(dir, textAssetRuntimePath(asset)), source)
    const module = rewriteBunfsSpecifiers(
      `const load = import.meta.require; console.log(JSON.stringify(load("/$bunfs/root/${asset}")))`,
      "",
      new Set([asset]),
    )
    writeFileSync(join(dir, "main.js"), module)
    const result = Bun.spawnSync([process.execPath, join(dir, "main.js"), "--dangerously-skip-permissions"])
    expect(result.exitCode).toBe(0)
    expect(result.stderr.toString()).toBe("")
    expect(JSON.parse(result.stdout.toString())).toBe(source)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test("text asset routing preserves executable modules and nested paths", () => {
  expect(
    rewriteBunfsSpecifiers(
      'load("/$bunfs/root/script.mjs");import("/$bunfs/root/module.mjs")',
      "nested/dir",
      new Set(["script.mjs"]),
    ),
  ).toBe('load("../../script.mjs.embedded.txt");import("../../module.mjs")')
})

test("compressed text assets materialize as auditable UTF-8", () => {
  const source = new TextEncoder().encode("const transparent = true\n")
  const compressed = Bun.zstdCompressSync(source)

  expect(isZstdFrame(compressed)).toBe(true)
  expect(expandZstdTextAsset(compressed, "fixture.js")).toEqual(source)
})

test("compressed text materialization fails closed", () => {
  expect(() => expandZstdTextAsset(new TextEncoder().encode("plain text"), "plain.js")).toThrow(
    "compressed-text loader without a Zstandard frame",
  )

  const invalidUtf8 = Bun.zstdCompressSync(new Uint8Array([0xff]))
  expect(() => expandZstdTextAsset(invalidUtf8, "invalid.js")).toThrow("decompressed to invalid UTF-8")
})
