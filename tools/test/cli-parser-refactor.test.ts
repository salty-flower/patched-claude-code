import { join } from "node:path"
import { expect, test } from "bun:test"
import { parseArgs as parseCreateSourceTagArgs } from "../patch/create-source-tag"
import { parseArgs as parseDetectUpstreamArgs } from "../patch/detect-upstream"
import { parseArgs as parseFormatStagedCliArgs } from "../patch/format-staged-cli"
import { parseArgs as parsePackageReleaseArgs } from "../patch/package-release"
import { parseArgs as parseStageClaudeCodeArgs } from "../patch/stage-claude-code"
import { parseArgs as parseStageTargetArgs } from "../patch/stage-target"
import { parseArgs as parseVerifyPatchesArgs } from "../patch/verify-patches"
import { parseArgs as parseWriteSourceReleaseArgs } from "../patch/write-source-release"
import { parseArgs as parseRunPatchTestsArgs } from "./run-patch-tests"

const ROOT = join(import.meta.dir, "..", "..")

test("stage-target parses typed options with environment defaults", () => {
  const args = parseStageTargetArgs(["--version", "2.1.133", "--source", "direct", "--platform", "linux-x64"], {
    TARGET_PLATFORM_PACKAGE: "@example/cli",
    TARGET_CANONICAL_BASE: "linux-x64",
  })

  expect(args).toEqual({
    version: "2.1.133",
    source: "direct",
    platform: "linux-x64",
    platformPackage: "@example/cli",
    canonicalBase: "linux-x64",
  })
})

test("verify-patches parses repeated patch files and explicit target", () => {
  expect(parseVerifyPatchesArgs(["patches/a.toml", "patches/b.toml", "--against", "staging/2.1.133/cli.js"])).toEqual({
    patches: ["patches/a.toml", "patches/b.toml"],
    target: "staging/2.1.133/cli.js",
  })
})

test("package-release parses options and falls back to release tag metadata", () => {
  const args = parsePackageReleaseArgs(["--input", "staging/2.1.133/cli.patched.js"], {
    GITHUB_REF_NAME: "claude-code-2.1.133-patch.7",
  })

  expect(args).toEqual({
    version: "2.1.133",
    releaseId: "patch.7",
    input: "staging/2.1.133/cli.patched.js",
    outDir: join(ROOT, "dist"),
  })
})

test("write-source-release requires version and defaults release metadata", () => {
  expect(parseWriteSourceReleaseArgs(["--version", "2.1.133"])).toEqual({
    version: "2.1.133",
    releaseId: "patch.local",
    outDir: ROOT,
  })
})

test("create-source-tag parses parent toggles", () => {
  expect(parseCreateSourceTagArgs(["--version", "2.1.133", "--release-id", "patch.1", "--no-parent"], {
    GITHUB_SHA: "abc123",
  })).toEqual({
    version: "2.1.133",
    releaseId: "patch.1",
    parent: null,
  })
})

test("detect-upstream collects repeated release tag options", () => {
  expect(
    parseDetectUpstreamArgs([
      "--handled-tag",
      "claude-code-2.1.133-patch.1",
      "--prerelease-tag",
      "claude-code-2.1.137-patch.1",
    ]),
  ).toEqual({
    tags: ["claude-code-2.1.133-patch.1"],
    prereleaseTags: ["claude-code-2.1.137-patch.1"],
  })
})

test("format-staged-cli parses positional version and optional paths", () => {
  expect(parseFormatStagedCliArgs(["2.1.133", "--input", "cli.js", "--output", "cli.formatted.js"])).toEqual({
    version: "2.1.133",
    input: "cli.js",
    output: "cli.formatted.js",
  })
})

test("stage-claude-code parses positional version and source options", () => {
  expect(parseStageClaudeCodeArgs(["2.1.133", "--source", "direct", "--platform", "linux-x64", "--all"])).toEqual({
    version: "2.1.133",
    source: "direct",
    platform: "linux-x64",
    keepAll: true,
  })
})

test("run-patch-tests parses bundle and patch file list", () => {
  expect(parseRunPatchTestsArgs(["--bundle", "staging/2.1.133/cli.patched.js", "patches/a.toml"])).toEqual({
    bundle: "staging/2.1.133/cli.patched.js",
    patches: ["patches/a.toml"],
  })
})
