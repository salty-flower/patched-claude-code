import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { parseArgs as parsePromptIdentityHistoryAuditArgs } from "../patch/audit-prompt-identity-history"
import { parseArgs as parseCreateSourceTagArgs, sourceTagFiles } from "../patch/create-source-tag"
import { parseArgs as parseDetectUpstreamArgs } from "../patch/detect-upstream"
import { parseArgs as parseExtractPromptCatalogArgs } from "../patch/extract-prompt-catalog"
import { parseArgs as parseFinalizePromptIdentitiesArgs } from "../patch/finalize-prompt-identities"
import { parseArgs as parsePackageReleaseArgs } from "../patch/package-release"
import { parseArgs as parsePreparePromptIdentityBumpArgs } from "../patch/prepare-prompt-identity-bump"
import { parseArgs as parsePrepareTargetBumpArgs } from "../patch/prepare-target-bump"
import { parseArgs as parseReconcilePromptIdentitiesArgs } from "../patch/reconcile-prompt-identities"
import { parseArgs as parseStageClaudeCodeArgs } from "../patch/stage-claude-code"
import { parseArgs as parseStageTargetArgs, stageManifestMatchesArgs } from "../patch/stage-target"
import { parseArgs as parseVerifyPatchesArgs } from "../patch/verify-patches"
import { parseArgs as parseWriteSourceReleaseArgs } from "../patch/write-source-release"
import { parseArgs as parseRunPatchTestsArgs, selectPatchTestsForTarget } from "./run-patch-tests"

const ROOT = join(import.meta.dir, "..", "..")

function runCliScript(script: string, args: string[]): { exitCode: number; stdout: string; stderr: string } {
  const result = Bun.spawnSync({
    cmd: [process.execPath, join(ROOT, script), ...args],
    cwd: ROOT,
    stdout: "pipe",
    stderr: "pipe",
  })
  return {
    exitCode: result.exitCode,
    stdout: result.stdout.toString(),
    stderr: result.stderr.toString(),
  }
}

test("CLI entrypoints render help and argument errors without Commander stack traces", () => {
  const help = runCliScript("tools/patch/stage-target.ts", ["--help"])
  expect(help.exitCode).toBe(0)
  expect(help.stdout).toContain("Usage: stage-target")
  expect(help.stderr).toBe("")

  const asyncHelp = runCliScript("tools/test/resume-transcript-tui-smoke.ts", ["--help"])
  expect(asyncHelp.exitCode).toBe(0)
  expect(asyncHelp.stdout).toContain("Usage: resume-transcript-tui-smoke")
  expect(asyncHelp.stderr).toBe("")

  const invalid = runCliScript("tools/patch/package-release.ts", ["--definitely-invalid"])
  expect(invalid.exitCode).toBe(1)
  expect(invalid.stderr).toContain("error: unknown option '--definitely-invalid'")
  expect(invalid.stderr).not.toContain("CommanderError")
  expect(invalid.stderr).not.toContain("node_modules/commander")

  const invalidSource = runCliScript("tools/patch/stage-target.ts", ["--version", "2.1.218", "--source", "mirror"])
  expect(invalidSource.exitCode).toBe(1)
  expect(invalidSource.stderr).toContain("expected one of: canonical, npm, direct")
  expect(invalidSource.stderr).not.toContain("InvalidArgumentError")
})

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

test("stage-target reuses a matching canonical platform merge", () => {
  const args = parseStageTargetArgs(["--version", "2.1.220", "--source", "canonical"], {})
  const canonical = {
    cliPath: "staging/2.1.220/canonical/cli.js",
    reportPath: "staging/2.1.220/canonical/platform-merge-report.json",
    bytes: 1,
    sha256: "sha256",
    mergePolicy: "canonical-platform-merge-v1",
  }

  expect(
    stageManifestMatchesArgs(args, {
      version: "2.1.220",
      channel: "canonical",
      basePlatform: "darwin-arm64",
      canonical,
    }),
  ).toBe(true)
  expect(
    stageManifestMatchesArgs(args, {
      version: "2.1.220",
      channel: "canonical",
      basePlatform: "linux-x64",
      canonical,
    }),
  ).toBe(false)
})

test("prepare-target-bump parses a source and report output", () => {
  expect(parsePrepareTargetBumpArgs(["--version", "2.1.218", "--source", "direct", "-o", "bump.json"])).toEqual({
    version: "2.1.218",
    source: "direct",
    outFile: "bump.json",
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

test("package-release accepts an explicit previous prompt catalog", () => {
  expect(
    parsePackageReleaseArgs([
      "--version",
      "2.1.220",
      "--release-id",
      "patch.1",
      "--previous-catalog",
      "dist/previous/prompts/catalog",
    ]),
  ).toMatchObject({
    version: "2.1.220",
    releaseId: "patch.1",
    previousCatalog: "dist/previous/prompts/catalog",
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

test("create-source-tag includes every graph file required by a dispatcher", () => {
  const root = mkdtempSync(join(tmpdir(), "patched-cc-source-tag-"))
  try {
    writeFileSync(
      join(root, "cli.js"),
      // biome-ignore lint/suspicious/noTemplateCurlyInString: Exercise the literal dispatcher interpolation.
      'const platformDir = "darwin-arm64"; await import(`./graph.patched/${platformDir}/cli.js`)\n',
    )
    for (const platform of ["darwin-arm64", "linux-x64"]) {
      mkdirSync(join(root, "graph.patched", platform), { recursive: true })
      writeFileSync(join(root, "graph.patched", platform, "cli.js"), `// ${platform}\n`)
      writeFileSync(join(root, "graph.patched", platform, "asset.txt"), `${platform}\n`)
    }

    const paths = sourceTagFiles(root).map((file) => file.path)
    expect(paths).toContain("graph.patched/darwin-arm64/cli.js")
    expect(paths).toContain("graph.patched/darwin-arm64/asset.txt")
    expect(paths).toContain("graph.patched/linux-x64/cli.js")
    expect(paths).toContain("graph.patched/linux-x64/asset.txt")

    rmSync(join(root, "graph.patched", "linux-x64", "cli.js"))
    expect(() => sourceTagFiles(root)).toThrow("source tag payload missing: graph.patched/linux-x64/cli.js")
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
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
    parsePreparePromptIdentityBumpArgs([
      "--version",
      "2.1.218",
      "--previous-version",
      "2.1.217",
      "--patched",
      "cli.patched.js",
      "--identity-root",
      "identities",
      "--draft-file",
      "review.json",
      "--result-file",
      "result.json",
    ]),
  ).toEqual({
    version: "2.1.218",
    previousVersion: "2.1.217",
    patched: "cli.patched.js",
    identityRoot: "identities",
    draftFile: "review.json",
    resultFile: "result.json",
  })
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
