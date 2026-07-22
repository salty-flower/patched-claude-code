import { expect, test } from "bun:test"
import { join } from "node:path"
import { parseArgs as parsePromptIdentityHistoryAuditArgs } from "../patch/audit-prompt-identity-history"
import { parseArgs as parseCreateSourceTagArgs } from "../patch/create-source-tag"
import { parseArgs as parseDetectUpstreamArgs } from "../patch/detect-upstream"
import { parseArgs as parseExtractPromptCatalogArgs } from "../patch/extract-prompt-catalog"
import { parseArgs as parseFinalizePromptIdentitiesArgs } from "../patch/finalize-prompt-identities"
import { parseArgs as parseFormatStagedCliArgs } from "../patch/format-staged-cli"
import { parseArgs as parsePackageReleaseArgs } from "../patch/package-release"
import { parseArgs as parseReconcilePromptIdentitiesArgs } from "../patch/reconcile-prompt-identities"
import { parseArgs as parseStageClaudeCodeArgs } from "../patch/stage-claude-code"
import { parseArgs as parseStageTargetArgs } from "../patch/stage-target"
import { parseArgs as parseVerifyPatchesArgs } from "../patch/verify-patches"
import { parseArgs as parseWriteSourceReleaseArgs } from "../patch/write-source-release"
import { parseArgs as parseRunPatchTestsArgs, selectPatchTestsForTarget } from "./run-patch-tests"

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
  expect(
    parseCreateSourceTagArgs(["--version", "2.1.133", "--release-id", "patch.1", "--no-parent"], {
      GITHUB_SHA: "abc123",
    }),
  ).toEqual({
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

test("extract-prompt-catalog parses release inputs and conventional output option", () => {
  expect(
    parseExtractPromptCatalogArgs([
      "--version",
      "2.1.217",
      "--release-id",
      "patch.1",
      "--upstream",
      "cli.js",
      "--patched",
      "cli.patched.js",
      "-o",
      "catalog",
    ]),
  ).toEqual({
    version: "2.1.217",
    releaseId: "patch.1",
    upstream: "cli.js",
    patched: "cli.patched.js",
    outDir: "catalog",
  })
})

test("prompt identity CLIs parse explicit draft and finalize paths", () => {
  expect(
    parsePromptIdentityHistoryAuditArgs([
      "--version",
      "2.1.216",
      "--version",
      "2.1.217",
      "--staging-root",
      "fixtures",
      "--bundle-name",
      "cli.patched.js",
      "-o",
      "audit.json",
    ]),
  ).toEqual({
    version: ["2.1.216", "2.1.217"],
    stagingRoot: "fixtures",
    bundleName: "cli.patched.js",
    outFile: "audit.json",
  })
  expect(
    parseReconcilePromptIdentitiesArgs([
      "--version",
      "2.1.218",
      "--previous-version",
      "2.1.217",
      "--identity-root",
      "identities",
      "-o",
      "review.json",
    ]),
  ).toEqual({
    version: "2.1.218",
    previousVersion: "2.1.217",
    identityRoot: "identities",
    outFile: "review.json",
  })
  expect(parseFinalizePromptIdentitiesArgs(["review.json", "--identity-root", "identities"])).toEqual({
    draft: "review.json",
    identityRoot: "identities",
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

test("run-patch-tests parses target version, bundle, and patch file list", () => {
  expect(
    parseRunPatchTestsArgs(["--version", "2.1.138", "--bundle", "staging/2.1.138/cli.patched.js", "patches/a.toml"]),
  ).toEqual({
    version: "2.1.138",
    bundle: "staging/2.1.138/cli.patched.js",
    patches: ["patches/a.toml"],
  })
})

test("run-patch-tests skips files with no entries for the target version", () => {
  const toml = `
name = "old-file"
target_version = "2.1.170"
rationale = "test fixture"

[[patches]]
name = "old-only"
applies_to = ">=2.1.170 <2.1.172"
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L1-L1"
locator_kind = "literal"
locator_pattern = "old"
replacement = "new"

[[patches.tests]]
kind = "static"
name = "old test"
assert_contains = "new"
`

  expect(selectPatchTestsForTarget(toml, "2.1.172")).toEqual({ tests: [], skipped: true })
})

test("run-patch-tests still fails applicable entries without tests", () => {
  const toml = `
name = "active-file"
target_version = "2.1.172"
rationale = "test fixture"

[[patches]]
name = "active-without-tests"
applies_to = ">=2.1.172 <2.2.0"
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L1-L1"
locator_kind = "literal"
locator_pattern = "old"
replacement = "new"
`

  expect(selectPatchTestsForTarget(toml, "2.1.172")).toEqual({ tests: [], skipped: false })
})
