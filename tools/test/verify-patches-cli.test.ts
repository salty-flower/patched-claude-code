import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { parseArgs } from "../patch/verify-patches"

test("verify-patches accepts compact skip output", () => {
  expect(parseArgs(["patches/example.toml", "--against", "staging/2.1.246/cli.js", "--quiet-skips"])).toEqual({
    patches: ["patches/example.toml"],
    target: "staging/2.1.246/cli.js",
    quietSkips: true,
  })
})

test("graph verification aggregates files, isolates duplicate names, and preserves every platform failure", () => {
  const root = mkdtempSync(join(tmpdir(), "cc-verify-file-shards-cli-"))
  const stage = join(root, "staging", "2.1.263")
  const graph = join(stage, "graph")
  try {
    mkdirSync(join(root, "reference/v2.1.88/sources"), { recursive: true })
    writeFileSync(join(root, "reference/v2.1.88/sources/fixture.ts"), "// audit\n")
    mkdirSync(join(root, "patches"))
    for (const platform of ["darwin-arm64", "linux-x64"]) {
      mkdirSync(join(graph, platform), { recursive: true })
      writeFileSync(join(graph, platform, "cli.js"), "x.run();x.other()")
      writeFileSync(join(graph, platform, "chunk.js"), "y.run()")
    }
    const toml = (property: string, expected: number) => `
name = "fixture"
target_version = "2.1.263"
rationale = "fixture"
rationale_ref = "reference/v2.1.88/sources/fixture.ts#L1"
locator_kind = "ast_transform"
expected_matches = ${expected}
[ast]
schema = 1
match = { node = "CallExpression", callee_property = "${property}" }
[transform]
op = "append_call_arg"
arg = "true"
[[tests]]
kind = "static"
name = "fixture"
assert_contains = "true"
`
    writeFileSync(join(root, "patches/run.toml"), toml("run", 2))
    writeFileSync(join(root, "patches/other.toml"), toml("other", 1))
    const run = () =>
      Bun.spawnSync(
        [process.execPath, join(import.meta.dir, "../patch/verify-patches.ts"), "--against", join(stage, "cli.js")],
        {
          env: { ...process.env, PATCHED_CC_ROOT: root, PATCHED_CC_HEAVY_LOCK_HELD: "1", PCC_VERIFY_PLATFORM: "" },
        },
      )
    const success = run()
    expect(success.stderr.toString()).toBe("")
    expect(success.exitCode).toBe(0)
    expect(success.stdout.toString().match(/\[ok\]/g)).toHaveLength(2)
    expect(success.stdout.toString()).toContain(
      "AST locator matches 2 node(s) in 2.1.263 graph/darwin-arm64; AST locator matches 2 node(s) in 2.1.263 graph/linux-x64",
    )
    writeFileSync(join(graph, "darwin-arm64/chunk.js"), "const absent=1")
    const mismatch = run()
    expect(mismatch.exitCode).toBe(1)
    expect(mismatch.stdout.toString()).toContain("2.1.263 graph/darwin-arm64: expected 2 AST match(es), got 1")
    writeFileSync(join(graph, "darwin-arm64/chunk.js"), "const = ;")
    const invalid = run()
    expect(invalid.exitCode).toBe(1)
    expect(invalid.stdout.toString()).toContain("graph/darwin-arm64/chunk.js")
    // Metadata checks still run in the coordinator, after locator success.
    writeFileSync(join(graph, "darwin-arm64/chunk.js"), "y.run()")
    writeFileSync(join(root, "reference/v2.1.88/sources/fixture.ts"), "")
    writeFileSync(join(root, "patches/run.toml"), toml("run", 2).replace("#L1", "#L99"))
    expect(run().stdout.toString()).toContain("line range [99-99] out of bounds")
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
