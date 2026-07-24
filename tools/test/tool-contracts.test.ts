import { expect, test } from "bun:test"
import { captureChecked } from "../lib/process"
import { parseStageManifest } from "../lib/stage-manifest"
import { DEFAULT_TARGET_VERSION, parseTargetSource, targetVersion } from "../lib/target"
import { normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

test("active target coordinates share one default and validate source names", () => {
  expect(targetVersion({})).toBe(DEFAULT_TARGET_VERSION)
  expect(targetVersion({ TARGET_VERSION: "2.1.217" })).toBe("2.1.217")
  expect(parseTargetSource("canonical")).toBe("canonical")
  expect(parseTargetSource("direct")).toBe("direct")
  expect(() => parseTargetSource("mirror")).toThrow("expected one of: canonical, npm, direct")
})

test("stage manifest decoder validates cross-process fields", () => {
  expect(
    parseStageManifest({
      version: "2.1.218",
      channel: "canonical",
      source: "canonical-platform-merge",
      canonical: {
        cliPath: "/repo/staging/2.1.218/canonical/cli.js",
        reportPath: "/repo/staging/2.1.218/canonical/platform-merge-report.json",
        bytes: 42,
        sha256: "abc",
        mergePolicy: "canonical-platform-merge-v1",
      },
      platforms: [
        {
          platform: "darwin-arm64",
          binaryUrl: "https://example.invalid/claude",
          binarySha256: "binary",
          entrypointSha256: "entrypoint",
          entrypointBytes: 42,
        },
      ],
    }),
  ).toMatchObject({
    version: "2.1.218",
    channel: "canonical",
    source: "canonical-platform-merge",
  })

  expect(() => parseStageManifest({ channel: "mirror" })).toThrow("unsupported target source")
  expect(() =>
    parseStageManifest({
      canonical: {
        cliPath: "cli.js",
        reportPath: "report.json",
        bytes: "42",
        sha256: "abc",
        mergePolicy: "test",
      },
    }),
  ).toThrow("stage-manifest.json.canonical.bytes must be a finite number")
})

test("checked process runner preserves argv boundaries and explicit environment", () => {
  expect(
    captureChecked(
      [process.execPath, "-e", "process.stdout.write(`${process.argv[1]}:${process.env.PATCHED_CC_TEST_VALUE}`)", "a b"],
      { env: { PATCHED_CC_TEST_VALUE: "ok" } },
    ),
  ).toBe("a b:ok")
  expect(() => captureChecked([process.execPath, "-e", "process.exit(7)"])).toThrow("command failed (7)")
})

test("PTY helpers quote shell values and normalize rendered output", () => {
  expect(shellQuote("it's ready")).toBe("'it'\\''s ready'")
  expect(shellEnvironment({ FIRST: "a b", SECOND: "c" })).toBe("FIRST='a b' SECOND='c'")
  expect(normalizeTuiOutput("\u001b[31mred\u001b[0m\nnext")).toBe(" red next")
})
