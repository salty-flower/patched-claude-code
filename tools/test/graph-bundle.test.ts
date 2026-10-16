import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  applyPatchEntriesToGraphBundle,
  decodeStandaloneText,
  dispatcherSource,
  expandZstdTextAsset,
  isZstdFrame,
  materializeStandaloneFileAsset,
  relocateStandaloneWorkerUrls,
  rewriteBunfsSpecifiers,
  textAssetRuntimePath,
} from "../lib/graph-bundle"
import type { PatchEntry } from "../lib/patch-files"
import { computeRuntimeBundleIntegrity } from "../../runtime/release-integrity"

test("packaged sidecars survive the daemon's argv-only re-exec without BUN_OPTIONS", async () => {
  const root = mkdtempSync(join(tmpdir(), "dispatcher-reexec-"))
  try {
    const platform = process.platform === "darwin" ? "darwin-arm64" : "linux-x64"
    const graph = join(root, "graph.patched", platform)
    mkdirSync(graph, { recursive: true })
    const entry = join(root, "cli.js")
    writeFileSync(entry, dispatcherSource("rendered"))
    writeFileSync(
      join(graph, "cli.js"),
      `
if (process.argv.includes("--child")) {
  console.log(JSON.stringify({ hook: typeof globalThis[Symbol.for("patched-claude-code.system-prompt-overrides.v2")], segmenter: typeof Bun.ant?.CellSegmenter }))
} else {
  const child = Bun.spawn({ cmd: [process.execPath, process.argv[1], "--child"], env: process.env, stdout: "inherit", stderr: "inherit" })
  process.exitCode = await child.exited
}
`,
    )
    const manifest = join(root, "manifest.json")
    writeFileSync(
      manifest,
      JSON.stringify({
        upstream: { version: "2.1.301" },
        runtime: { graphDirectory: "graph.patched" },
        bundle: computeRuntimeBundleIntegrity(entry, "graph.patched"),
      }),
    )
    const env = Object.fromEntries(
      Object.entries(process.env).filter(
        ([key]) => key !== "BUN_OPTIONS" && key !== "PATCHED_CLAUDE_CODE_RUNTIME_BOOTSTRAP",
      ),
    )
    const child = Bun.spawn({
      cmd: [process.execPath, "--preload", join(import.meta.dir, "../../runtime/system-prompt-overrides.ts"), entry],
      env: {
        ...env,
        PATCHED_CLAUDE_CODE_RELEASE_MANIFEST: manifest,
        PATCHED_CLAUDE_CODE_BUNDLE: entry,
        PATCHED_CLAUDE_CODE_PROMPT_DIR: join(root, "prompts"),
      },
      stdout: "pipe",
      stderr: "pipe",
    })
    const [exit, stdout, stderr] = await Promise.all([
      child.exited,
      new Response(child.stdout).text(),
      new Response(child.stderr).text(),
    ])
    expect(exit, stderr).toBe(0)
    expect(JSON.parse(stdout)).toEqual({ hook: "function", segmenter: "function" })
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

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

test("worker URL metadata resolves beside the graph, with its dependency required", () => {
  const path = "src/plugins/functionHooks/hooks-worker/hooks-worker.js"
  const text = `const build={HOOKS_WORKER_URL:"./${path}"};const prose='HOOKS_WORKER_URL:"./missing.js"'`
  expect(relocateStandaloneWorkerUrls(text, "", new Set([path]))).toBe(
    `const build={HOOKS_WORKER_URL:new URL("./${path}",import.meta.url).pathname};const prose='HOOKS_WORKER_URL:"./missing.js"'`,
  )
  expect(relocateStandaloneWorkerUrls(text, "nested", new Set([path]))).toContain(
    `new URL("../${path}",import.meta.url).pathname`,
  )
  expect(() => relocateStandaloneWorkerUrls(text, "", new Set())).toThrow("missing graph file")
  const absolute = 'const build={HOOKS_WORKER_URL:"/absolute/worker.js"}'
  expect(relocateStandaloneWorkerUrls(absolute, "", new Set())).toBe(absolute)
})

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

test("file loader preserves raw binary assets and records actual compression", () => {
  // Include invalid UTF-8: treating a binary asset as text corrupts its bytes.
  const font = new Uint8Array([0x77, 0x4f, 0x46, 0x32, 0, 0xff, 0x80])
  expect(materializeStandaloneFileAsset(font, "opaque.asset")).toEqual({
    bytes: font,
    encoding: "identity",
    transformation: "identity",
  })
  const text = new TextEncoder().encode("embedded text")
  expect(materializeStandaloneFileAsset(Bun.zstdCompressSync(text), "opaque.asset")).toEqual({
    bytes: text,
    encoding: "zstd",
    transformation: "zstd-decompress-v1",
  })
  expect(() => materializeStandaloneFileAsset(new Uint8Array([0x28, 0xb5, 0x2f, 0xfd]), "broken.asset")).toThrow(
    "failed Zstandard decompression",
  )
})
