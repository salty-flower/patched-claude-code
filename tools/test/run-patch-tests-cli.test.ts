import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

const RUNNER = join(import.meta.dir, "run-patch-tests.ts")

function runFixture(options: {
  linux?: string
  platform?: string
  platforms?: string[]
  negative?: string
  untestedEntry?: boolean
  legacy?: boolean
  native?: boolean
}) {
  const root = mkdtempSync(join(tmpdir(), "patch-test-views-"))
  try {
    const bundle = join(root, "cli.patched.js")
    writeFileSync(bundle, options.legacy ? "expected" : "// dispatcher")
    if (!options.legacy) {
      for (const [platform, source] of [
        ["darwin-arm64", "expected"],
        ["linux-x64", options.linux ?? "unpatched"],
      ]) {
        const dir = join(root, "graph.patched", platform!)
        mkdirSync(dir, { recursive: true })
        writeFileSync(join(dir, "cli.js"), source!)
      }
    }
    const entry = (name: string) => `
[[patches]]
name = "${name}"
locator_kind = "literal"
locator_pattern = "unpatched"
replacement = "expected"
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L1-L2"
${options.platforms ? `platforms = ${JSON.stringify(options.platforms)}` : ""}
`
    const path = join(root, "fixture.toml")
    writeFileSync(
      path,
      `
name = "fixture"
target_version = "2.1.1"
rationale = "Keep assertions bound to the owning platform."
${entry("tested")}
[[patches.tests]]
kind = "${options.native ? "cli" : "static"}"
name = "expected marker"
assert_contains = "expected"
${options.negative ? `assert_not_contains = ${JSON.stringify(options.negative)}` : ""}
${options.untestedEntry ? entry("untested") : ""}
`,
    )
    const child = Bun.spawnSync({
      cmd: [
        process.execPath,
        RUNNER,
        path,
        "--version",
        "2.1.1",
        "--bundle",
        bundle,
        ...(options.platform ? ["--platform", options.platform] : []),
      ],
      env: { ...process.env, PATCHED_CC_HEAVY_LOCK_HELD: "1" },
      stdout: "pipe",
      stderr: "pipe",
    })
    return { exitCode: child.exitCode, output: `${child.stdout}\n${child.stderr}` }
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
}

test("Darwin text cannot satisfy a Linux assertion", () => {
  const result = runFixture({ platforms: ["linux-x64"] })
  expect(result.exitCode).toBe(1)
  expect(result.output).toContain("[linux-x64]")
  expect(result.output).toContain("missing expected text")
})

test("platform-neutral assertions run independently on both graphs", () => {
  expect(runFixture({}).exitCode).toBe(1)
  expect(runFixture({ linux: "expected" }).exitCode).toBe(0)
})

test("platform-scoped entries do not require their bytes on the other graph", () => {
  expect(runFixture({ platforms: ["darwin-arm64"] }).exitCode).toBe(0)
  expect(runFixture({ platform: "darwin-arm64" }).exitCode).toBe(0)
})

test("positive success cannot hide a failing negative assertion", () => {
  const result = runFixture({ linux: "expected stale", negative: "stale" })
  expect(result.exitCode).toBe(1)
  expect(result.output).toContain("contains forbidden text: stale")
})

test("tests on one entry cannot hide an untested sibling", () => {
  const result = runFixture({ linux: "expected", untestedEntry: true })
  expect(result.exitCode).toBe(1)
  expect(result.output).toContain("untested: no [[tests]] entries")
})

test("non-native CLI tests cannot report successful evidence without execution", () => {
  const otherPlatform = process.platform === "darwin" ? "linux-x64" : "darwin-arm64"
  const result = runFixture({ native: true, platform: otherPlatform, platforms: [otherPlatform] })
  expect(result.exitCode).toBe(1)
  expect(result.output).toContain("requires its native platform")
})

test("legacy single-bundle tests still run", () => {
  expect(runFixture({ legacy: true }).exitCode).toBe(0)
})
