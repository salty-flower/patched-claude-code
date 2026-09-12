import { expect, test } from "bun:test"
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

const RUNNER = join(import.meta.dir, "run-patch-tests.ts")

type FixtureReport = {
  schema: 1
  targetVersion: string
  results: Array<{
    patchEntry: string
    platform: string
    kind: "static" | "cli" | "pty"
    testName: string
    outcome: "passed" | "failed"
    message: string
  }>
}

function runFixture(options: {
  linux?: string
  platform?: string
  platforms?: string[]
  negative?: string
  untestedEntry?: boolean
  legacy?: boolean
  native?: boolean
  resultFile?: boolean
  staleReport?: boolean
  withoutVersion?: boolean
  missingBundle?: boolean
}) {
  const root = mkdtempSync(join(tmpdir(), "patch-test-views-"))
  try {
    const bundle = join(root, "cli.patched.js")
    const resultFile = options.resultFile ? join(root, "result.json") : undefined
    writeFileSync(bundle, options.legacy ? "expected" : "// dispatcher")
    if (!options.legacy) {
      for (const [platform, source] of [
        ["darwin-arm64", "expected"],
        ["linux-x64", options.linux ?? "unpatched"],
      ]) {
        const dir = join(root, "graph.patched", platform)
        mkdirSync(dir, { recursive: true })
        writeFileSync(join(dir, "cli.js"), source)
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
    if (resultFile && options.staleReport) {
      writeFileSync(
        resultFile,
        JSON.stringify({
          schema: 1,
          targetVersion: "2.1.1",
          results: [
            {
              patchEntry: "stale",
              platform: "linux-x64",
              kind: "static",
              testName: "stale",
              outcome: "passed",
              message: "stale report",
            },
          ],
        }),
      )
    }
    const child = Bun.spawnSync({
      cmd: [
        process.execPath,
        RUNNER,
        path,
        ...(options.missingBundle ? [] : ["--bundle", bundle]),
        ...(options.withoutVersion ? [] : ["--version", "2.1.1"]),
        ...(options.platform ? ["--platform", options.platform] : []),
        ...(resultFile ? ["--result-file", resultFile] : []),
      ],
      env: { ...process.env, PATCHED_CC_HEAVY_LOCK_HELD: "1" },
      stdout: "pipe",
      stderr: "pipe",
    })
    const report =
      resultFile && existsSync(resultFile) ? (JSON.parse(readFileSync(resultFile, "utf8")) as FixtureReport) : undefined
    return { exitCode: child.exitCode, output: `${child.stdout}\n${child.stderr}`, report }
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

test("result report records each platform assertion", () => {
  const result = runFixture({ linux: "expected", resultFile: true, staleReport: true })
  expect(result.exitCode).toBe(0)
  expect(result.report).toEqual({
    schema: 1,
    targetVersion: "2.1.1",
    results: [
      {
        patchEntry: "tested",
        platform: "darwin-arm64",
        kind: "static",
        testName: "expected marker",
        outcome: "passed",
        message: "contains expected text",
      },
      {
        patchEntry: "tested",
        platform: "linux-x64",
        kind: "static",
        testName: "expected marker",
        outcome: "passed",
        message: "contains expected text",
      },
    ],
  })
})

test("result report preserves a failed assertion and cannot reuse a stale pass", () => {
  const result = runFixture({ linux: "expected stale", negative: "stale", resultFile: true, staleReport: true })
  expect(result.exitCode).toBe(1)
  expect(result.report?.results).toEqual([
    {
      patchEntry: "tested",
      platform: "darwin-arm64",
      kind: "static",
      testName: "expected marker",
      outcome: "passed",
      message: "contains expected text; does not contain forbidden text",
    },
    {
      patchEntry: "tested",
      platform: "linux-x64",
      kind: "static",
      testName: "expected marker",
      outcome: "failed",
      message: "contains expected text; contains forbidden text: stale",
    },
  ])
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

test("result report records missing tests as failed static results", () => {
  const result = runFixture({ linux: "expected", untestedEntry: true, resultFile: true })
  expect(result.exitCode).toBe(1)
  expect(result.report?.results.filter((entry) => entry.patchEntry === "untested")).toEqual([
    {
      patchEntry: "untested",
      platform: "darwin-arm64",
      kind: "static",
      testName: "missing tests",
      outcome: "failed",
      message: "no [[tests]] entries",
    },
    {
      patchEntry: "untested",
      platform: "linux-x64",
      kind: "static",
      testName: "missing tests",
      outcome: "failed",
      message: "no [[tests]] entries",
    },
  ])
})

test("result report requires a resolved target version and removes stale output", () => {
  const result = runFixture({ resultFile: true, staleReport: true, withoutVersion: true })
  expect(result.exitCode).toBe(2)
  expect(result.output).toContain("without a resolved target version")
  expect(result.report).toBeUndefined()
})

test("result report is invalidated even when the bundle argument is missing", () => {
  const result = runFixture({ resultFile: true, staleReport: true, missingBundle: true })
  expect(result.exitCode).toBe(2)
  expect(result.output).toContain("missing --bundle")
  expect(result.report).toBeUndefined()
})

test("non-native CLI tests cannot report successful evidence without execution", () => {
  const otherPlatform = process.platform === "darwin" ? "linux-x64" : "darwin-arm64"
  const result = runFixture({
    native: true,
    platform: otherPlatform,
    platforms: [otherPlatform],
    resultFile: true,
    staleReport: true,
  })
  expect(result.exitCode).toBe(1)
  expect(result.output).toContain("requires its native platform")
  expect(result.report?.results).toEqual([
    {
      patchEntry: "tested",
      platform: otherPlatform,
      kind: "cli",
      testName: "expected marker",
      outcome: "failed",
      message: "cli test requires its native platform",
    },
  ])
})

test("legacy single-bundle tests still run", () => {
  expect(runFixture({ legacy: true }).exitCode).toBe(0)
})
