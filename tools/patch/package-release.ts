#!/usr/bin/env bun
// Package a rendered patched Claude Code bundle as a release artifact.

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { basename, join } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { requirePatchObligationAdmission } from "../lib/patch-obligations"
import { captureChecked, runChecked } from "../lib/process"
import { materializePreviousPromptCatalog, renderPromptReviewMarkdown } from "../lib/prompt-review"
import {
  artifactBase,
  attachPatchObligationPayload,
  sha256,
  UPSTREAM_PACKAGE,
  writeReleasePayload,
} from "../lib/release-payload"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")
const DEFAULT_TAG_PATTERN = /^claude-code-(\d+\.\d+\.\d+)-(.+)$/
const GITHUB_RELEASE_BODY_MAX_CHARACTERS = 125_000

type Args = {
  version?: string
  releaseId?: string
  input?: string
  previousCatalog?: string
  outDir: string
}

export function parseArgs(argv: string[], env: Record<string, string | undefined> = process.env): Args {
  const program = createCommand("package-release")
    .option("--version <ver>")
    .option("--release-id <id>")
    .option("--input <cli.patched.js>")
    .option("--previous-catalog <prompts/catalog>", "previous release prompt catalog for side-by-side review")
    .option("--out-dir <dist>", "artifact output directory", join(ROOT, "dist"))
    .parse(argv, { from: "user" })
  const args = program.opts<Args>()
  const tag = env.GITHUB_REF_NAME
  const match = tag?.match(DEFAULT_TAG_PATTERN)
  args.version ??= match?.[1]
  args.releaseId ??= match?.[2] ?? "patch.local"

  if (!args.version) {
    throw new Error("missing --version and GITHUB_REF_NAME does not match claude-code-<version>-<release-id>")
  }
  return args
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version
  if (!version) throw new Error("missing version")
  const releaseId = args.releaseId ?? "patch.local"
  const input = args.input ?? join(ROOT, "staging", version, "cli.patched.js")
  if (!existsSync(input)) throw new Error(`patched bundle missing: ${input}`)

  const base = artifactBase(version, releaseId)
  const workDir = join(args.outDir, base)
  const tarball = join(args.outDir, `${base}.tar.gz`)
  const releaseManifestPath = join(args.outDir, `${base}.manifest.json`)
  const notesPath = join(args.outDir, "release-notes.md")
  const promptReviewPath = join(args.outDir, "prompt-review.md")

  rmSync(workDir, { recursive: true, force: true })
  mkdirSync(args.outDir, { recursive: true })

  const gitCommit = process.env.GITHUB_SHA || captureChecked(["git", "rev-parse", "HEAD"], { cwd: ROOT })
  requirePatchObligationAdmission(ROOT, version, gitCommit)
  const remoteUrl = captureChecked(["git", "remote", "get-url", "origin"], { cwd: ROOT })
  const remoteMatch = remoteUrl.match(/[:/]([^/]+\/[^/]+?)(?:\.git)?$/)
  const githubSlug = process.env.GITHUB_REPOSITORY || remoteMatch?.[1] || "<owner>/patched-claude-code"
  const tag = process.env.GITHUB_REF_NAME
  const payload = writeReleasePayload({
    root: ROOT,
    version,
    releaseId,
    input,
    outDir: workDir,
    tag: tag ?? null,
    gitCommit,
    builtAt: new Date().toISOString(),
  })
  payload.manifest = attachPatchObligationPayload(ROOT, version, workDir, payload.manifest)

  const configuredPreviousCatalog = args.previousCatalog ?? process.env.PATCHED_CC_PREVIOUS_PROMPT_CATALOG
  const materializedPreviousCatalog = configuredPreviousCatalog
    ? null
    : materializePreviousPromptCatalog(ROOT, join(ROOT, "prompt-identities"), version)
  const previousCatalog = configuredPreviousCatalog ?? materializedPreviousCatalog?.path
  let promptReview: string
  let promptReviewBody: string
  try {
    const promptReviewResult = renderPromptReviewMarkdown({
      catalogDir: join(workDir, "prompts", "catalog"),
      identityRoot: join(ROOT, "prompt-identities"),
      upstreamVersion: version,
      ...(previousCatalog ? { previousCatalogDir: previousCatalog } : {}),
    })
    if (promptReviewResult.summary.previousVersion && !promptReviewResult.summary.previousCatalogAvailable) {
      throw new Error(
        `previous prompt catalog unavailable for ${promptReviewResult.summary.previousVersion}; fetch its source tag before packaging`,
      )
    }
    promptReview = promptReviewResult.markdown
    promptReviewBody = promptReviewResult.releaseMarkdown
  } finally {
    materializedPreviousCatalog?.cleanup()
  }
  writeFileSync(promptReviewPath, promptReview)

  rmSync(tarball, { force: true })
  runChecked(["tar", "-czf", tarball, "-C", args.outDir, base], { cwd: ROOT })
  const tarBytes = readFileSync(tarball)
  const tarHash = sha256(tarBytes)
  writeFileSync(join(args.outDir, `${basename(tarball)}.sha256`), `${tarHash.hex}  ${basename(tarball)}\n`)
  writeFileSync(
    releaseManifestPath,
    JSON.stringify(
      {
        ...payload.manifest,
        artifact: {
          file: basename(tarball),
          bytes: tarBytes.byteLength,
          sha256: tarHash.sri,
          sha256Hex: tarHash.hex,
        },
      },
      null,
      2,
    ) + "\n",
  )
  const releaseTag = `claude-code-${version}-${releaseId}`
  const promptReviewUrl = `https://github.com/${githubSlug}/releases/download/${releaseTag}/prompt-review.md`
  const releaseNotes = `# ${base}

Target: \`${UPSTREAM_PACKAGE}@${version}\`
Patch release: \`${releaseId}\`
Commit: \`${gitCommit}\`

Artifact:
- \`${basename(tarball)}\`
- raw tarball hash: \`${tarHash.sri}\`
- static prompt catalog: \`prompts/catalog/\` (${payload.manifest.promptCatalog.entries} recovered entries, ${payload.manifest.promptCatalog.contextualGaps + payload.manifest.promptCatalog.opaqueGaps} explicit gaps)
- patch obligations: ${payload.manifest.patchObligations?.obligations ?? 0} admitted obligations, ${payload.manifest.patchObligations?.receipts ?? 0} bundle-bound platform receipts

Nix/Home Manager should use the source tag \`github:${githubSlug}/claude-code-${version}-${releaseId}\` for exact pinning, or \`github:${githubSlug}/claude-code-latest\` when \`nix flake update\` should follow the latest patched source.
The tarball remains available for non-flake/manual installs.

Full structured prompt review: [\`prompt-review.md\`](${promptReviewUrl})

${promptReviewBody}
`
  if (releaseNotes.length > GITHUB_RELEASE_BODY_MAX_CHARACTERS) {
    throw new Error(
      `release notes exceed GitHub's ${GITHUB_RELEASE_BODY_MAX_CHARACTERS}-character body limit: ${releaseNotes.length}`,
    )
  }
  writeFileSync(notesPath, releaseNotes)

  console.error(`wrote ${tarball}`)
  console.error(`wrote ${releaseManifestPath}`)
  console.error(`wrote ${notesPath}`)
  console.error(`wrote ${promptReviewPath}`)
  return 0
}

if (import.meta.main) await runCli(main)
