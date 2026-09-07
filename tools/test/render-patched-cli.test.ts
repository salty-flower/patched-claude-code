import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, utimesSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { parseArgs } from "../patch/render-patched"

test("graph batches leave untouched files and embedded resources unchanged", () => {
  const root = mkdtempSync(join(tmpdir(), "cc-render-writes-"))
  try {
    const graph = join(root, "staging/2.1.263/graph/darwin-arm64")
    const output = join(root, "staging/2.1.263/graph.patched/darwin-arm64")
    mkdirSync(graph, { recursive: true })
    mkdirSync(output, { recursive: true })
    mkdirSync(join(root, "patches"))
    writeFileSync(join(graph, "cli.js"), "const value = 1;")
    writeFileSync(join(output, "cli.js"), "const value = 1;")
    writeFileSync(join(output, "untouched.js"), "export const stable = true;")
    writeFileSync(join(output, "skill.mjs.embedded.txt"), "process.exit(2)")
    utimesSync(join(output, "untouched.js"), 1, 1)
    writeFileSync(
      join(root, "patches/example.toml"),
      `
name = "example"
enabled = true
target_version = "2.1.263"
rationale = "Fixture"
rationale_ref = "fixture#L1-L1"
locator_kind = "literal"
locator_pattern = "const value = 1;"
replacement = "const value = 2;"
`,
    )
    const result = Bun.spawnSync(
      [process.execPath, join(import.meta.dir, "../patch/render-patched.ts"), "2.1.263", "--skip-verify"],
      {
        env: {
          ...process.env,
          PATCHED_CC_ROOT: root,
          PCC_RENDER_PLATFORM: "darwin-arm64",
          PCC_RENDER_PATCH_INDICES: "[0]",
        },
      },
    )
    expect(result.stderr.toString()).toContain("1/1 patch entries applied")
    expect(result.exitCode).toBe(0)
    expect(readFileSync(join(output, "cli.js"), "utf8")).toBe("const value = 2;")
    expect(statSync(join(output, "untouched.js")).mtimeMs).toBe(1000)
    expect(readFileSync(join(output, "skill.mjs.embedded.txt"), "utf8")).toBe("process.exit(2)")
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test("render-patched defaults to self-verifying direct CLI use", () => {
  expect(parseArgs(["2.1.133"])).toEqual({ version: "2.1.133" })
})

test("render-patched accepts an explicit skip-verify mode for dependency-verified callers", () => {
  expect(parseArgs(["2.1.133", "--skip-verify"])).toEqual({ version: "2.1.133", skipVerify: true })
})

test("render-patched rejects unknown options through the CLI parser", () => {
  const writeStderr = process.stderr.write
  process.stderr.write = (() => true) as typeof process.stderr.write
  try {
    expect(() => parseArgs(["2.1.133", "--wat"])).toThrow()
  } finally {
    process.stderr.write = writeStderr
  }
})
