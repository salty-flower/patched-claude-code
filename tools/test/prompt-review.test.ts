import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  inspectPromptIdentityObservations,
  type PromptCatalogManifest,
  readPromptCatalogManifest,
  writePromptCatalog,
} from "../lib/prompt-catalog"
import {
  bootstrapPromptIdentityFiles,
  buildPromptIdentityDraft,
  finalizePromptIdentityDraft,
} from "../lib/prompt-identity"
import { materializePreviousPromptCatalog, renderPromptReviewMarkdown } from "../lib/prompt-review"
import { sha256 } from "../lib/release-payload"

const STATIC_PROMPT =
  "You are a release audit assistant. Your task is to inspect deterministic evidence, return a concise result, and do not claim that runtime-only values were recovered. Write the output without adding unstated context."

function writeManifest(root: string, manifest: PromptCatalogManifest): void {
  const { manifestSha256: _previous, ...payload } = manifest
  writeFileSync(
    join(root, "manifest.json"),
    JSON.stringify(
      {
        ...payload,
        manifestSha256: sha256(Buffer.from(`${JSON.stringify(payload, null, 2)}\n`)).sri,
      },
      null,
      2,
    ),
  )
}

function runGit(root: string, ...args: string[]): void {
  const result = Bun.spawnSync(["git", ...args], {
    cwd: root,
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: "Prompt Review Test",
      GIT_AUTHOR_EMAIL: "prompt-review@example.invalid",
      GIT_COMMITTER_NAME: "Prompt Review Test",
      GIT_COMMITTER_EMAIL: "prompt-review@example.invalid",
    },
    stdout: "pipe",
    stderr: "pipe",
  })
  if (result.exitCode !== 0) {
    throw new Error(`git ${args.join(" ")} failed: ${result.stderr.toString()}`)
  }
}

test.each([false, true])("prompt review renders traced changes with historical ruleset=%s", (historicalRuleset) => {
  const root = mkdtempSync(join(tmpdir(), "patched-cc-prompt-review-"))
  try {
    const identityRoot = join(root, "prompt-identities")
    const previousSource = `const prompt=${JSON.stringify(STATIC_PROMPT)};\n`
    const currentSource = `const prompt=${JSON.stringify(STATIC_PROMPT.replace("concise result", "brief result"))};\n`
    const previous = join(root, "previous.js")
    const current = join(root, "current.js")
    writeFileSync(previous, previousSource)
    writeFileSync(current, currentSource)

    bootstrapPromptIdentityFiles(identityRoot, "2.1.217", inspectPromptIdentityObservations(previousSource, "2.1.217"))
    const previousCatalog = join(root, "previous", "catalog")
    writePromptCatalog({
      upstreamVersion: "2.1.217",
      releaseId: "patch.1",
      upstreamBundlePath: previous,
      upstreamBundleSha256: sha256(readFileSync(previous)).sri,
      patchedBundlePath: previous,
      patchedBundleSha256: sha256(readFileSync(previous)).sri,
      patchSetSha256: "sha256-test",
      outDir: previousCatalog,
      identityRoot,
    })

    const intermediateDraft = buildPromptIdentityDraft(
      identityRoot,
      "2.1.218",
      "2.1.217",
      inspectPromptIdentityObservations(previousSource, "2.1.218"),
    )
    const intermediateDecision = intermediateDraft.decisions[0]
    if (!intermediateDecision) throw new Error("fixture intermediate draft did not contain a prompt")
    intermediateDraft.decisions[0] = {
      ...intermediateDecision,
      relation: "carry",
      lineageId: "prompt-000001",
      predecessors: ["v2.1.217-0000"],
      evidence: "unique-exact-observation",
    }
    const intermediateDraftPath = join(root, "intermediate.draft.json")
    writeFileSync(intermediateDraftPath, `${JSON.stringify(intermediateDraft, null, 2)}\n`)
    finalizePromptIdentityDraft(identityRoot, intermediateDraftPath)

    const draft = buildPromptIdentityDraft(
      identityRoot,
      "2.1.219",
      "2.1.218",
      inspectPromptIdentityObservations(currentSource, "2.1.219"),
    )
    const firstDecision = draft.decisions[0]
    if (!firstDecision) throw new Error("fixture draft did not contain a prompt")
    draft.decisions[0] = {
      ...firstDecision,
      relation: "carry",
      lineageId: "prompt-000001",
      predecessors: ["v2.1.218-0000"],
      evidence: "maintainer-rule",
      rationale: "The changed text remains the same documented prompt lineage.",
    }
    const draftPath = join(root, "current.draft.json")
    writeFileSync(draftPath, `${JSON.stringify(draft, null, 2)}\n`)
    finalizePromptIdentityDraft(identityRoot, draftPath)

    const currentCatalog = join(root, "current", "catalog")
    writePromptCatalog({
      upstreamVersion: "2.1.219",
      releaseId: "patch.1",
      upstreamBundlePath: current,
      upstreamBundleSha256: sha256(readFileSync(current)).sri,
      patchedBundlePath: current,
      patchedBundleSha256: sha256(readFileSync(current)).sri,
      patchSetSha256: "sha256-test",
      outDir: currentCatalog,
      identityRoot,
    })

    const previousManifest = readPromptCatalogManifest(previousCatalog)
    if (historicalRuleset) {
      // Emulate an immutable release produced before a detector-rule change.
      previousManifest.extractor.method = {
        ...previousManifest.extractor.method,
        signals: previousManifest.extractor.method.signals.slice(1),
      }
      previousManifest.extractor.rulesetSha256 = sha256(
        Buffer.from(JSON.stringify(previousManifest.extractor.method)),
      ).sri
      writeManifest(previousCatalog, previousManifest)
      expect(() => readPromptCatalogManifest(previousCatalog)).toThrow()
    }
    const reviewOptions = {
      catalogDir: currentCatalog,
      identityRoot,
      upstreamVersion: "2.1.219",
      previousCatalogDir: previousCatalog,
    }
    const result = renderPromptReviewMarkdown(reviewOptions)
    expect(result.summary).toMatchObject({
      previousVersion: "2.1.217",
      candidates: 1,
      unchanged: 0,
      changedAndTraced: 1,
      newOrSplit: 0,
      previousCatalogAvailable: true,
    })
    expect(result.markdown).toContain("### Changed and traced (1)")
    expect(result.markdown).toContain("<summary><code>prompt-000001</code>")
    expect(result.markdown).toContain("concise result")
    expect(result.markdown).toContain("brief result")
    expect(result.releaseMarkdown).toContain("concise result")
    expect(result.releaseMarkdown).toContain("brief result")

    if (historicalRuleset) {
      const currentManifest = readPromptCatalogManifest(currentCatalog)
      writeManifest(currentCatalog, { ...currentManifest, extractor: previousManifest.extractor })
      expect(() => renderPromptReviewMarkdown(reviewOptions)).toThrow("invalid prompt catalog manifest")
      writeManifest(currentCatalog, currentManifest)

      writeManifest(previousCatalog, {
        ...previousManifest,
        target: { ...previousManifest.target, upstreamVersion: "2.1.219" },
      })
      expect(() => renderPromptReviewMarkdown(reviewOptions)).toThrow("previous prompt catalog version mismatch")

      writeManifest(previousCatalog, {
        ...previousManifest,
        extractor: { ...previousManifest.extractor, rulesetSha256: "sha256-invalid" },
      })
      expect(() => renderPromptReviewMarkdown(reviewOptions)).toThrow("invalid prompt catalog manifest")
      writeManifest(previousCatalog, previousManifest)
      expect(() =>
        renderPromptReviewMarkdown({ ...reviewOptions, previousCatalogVersion: "2.1.216" }),
      ).toThrow("expected 2.1.216 from its source tag")

      writeManifest(previousCatalog, {
        ...previousManifest,
        identity: { ...previousManifest.identity, ledgerSha256: "sha256-mismatched-ledger" },
      })
      expect(() => renderPromptReviewMarkdown(reviewOptions)).toThrow("previous prompt catalog identity mismatch")
      writeManifest(previousCatalog, previousManifest)

      const contentPath = join(previousCatalog, previousManifest.entries[0]!.contentFile)
      writeFileSync(contentPath, "corrupted historical text")
      expect(() => renderPromptReviewMarkdown(reviewOptions)).toThrow("prompt catalog content mismatch")
      writeFileSync(contentPath, STATIC_PROMPT)
      writeFileSync(join(previousCatalog, "gaps.json"), "[]\n")
      expect(() => renderPromptReviewMarkdown(reviewOptions)).toThrow("prompt catalog gaps SHA-256 mismatch")
    }
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test("previous prompt catalog materialization skips unpublished, catalog-less, and mistagged releases", () => {
  const root = mkdtempSync(join(tmpdir(), "patched-cc-prompt-review-tags-"))
  try {
    const identityRoot = join(root, "prompt-identities")
    const versionsRoot = join(identityRoot, "versions")
    const catalogRoot = join(root, "prompts", "catalog")
    mkdirSync(versionsRoot, { recursive: true })
    mkdirSync(catalogRoot, { recursive: true })
    runGit(root, "init", "--quiet")

    writeFileSync(join(versionsRoot, "2.1.216.json"), "{}\n")
    writeFileSync(join(catalogRoot, "manifest.json"), '{"target":{"upstreamVersion":"2.1.216"}}\n')
    runGit(root, "add", ".")
    runGit(root, "commit", "--quiet", "-m", "release 2.1.216 catalog")
    runGit(root, "tag", "claude-code-2.1.216-patch.2")

    rmSync(join(catalogRoot, "manifest.json"))
    writeFileSync(join(versionsRoot, "2.1.217.json"), "{}\n")
    runGit(root, "add", "--all")
    runGit(root, "commit", "--quiet", "-m", "release 2.1.217 without catalog")
    runGit(root, "tag", "claude-code-2.1.217-patch.1")

    writeFileSync(join(catalogRoot, "manifest.json"), '{"target":{"upstreamVersion":"2.1.216"}}\n')
    runGit(root, "add", ".")
    runGit(root, "commit", "--quiet", "-m", "mistag 2.1.216 catalog as 2.1.217")
    runGit(root, "tag", "claude-code-2.1.217-patch.2")

    writeFileSync(join(versionsRoot, "2.1.218.json"), "{}\n")
    runGit(root, "add", ".")
    runGit(root, "commit", "--quiet", "-m", "finalize unreleased 2.1.218 ledger")

    const materialized = materializePreviousPromptCatalog(root, identityRoot, "2.1.219")
    expect(materialized).not.toBeNull()
    if (!materialized) throw new Error("fixture did not materialize a previous catalog")
    try {
      expect(materialized.version).toBe("2.1.216")
      expect(readFileSync(join(materialized.path, "manifest.json"), "utf8")).toBe(
        '{"target":{"upstreamVersion":"2.1.216"}}\n',
      )
    } finally {
      materialized.cleanup()
    }
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test("prompt review traces contextual gaps when their detector text changes", () => {
  const root = mkdtempSync(join(tmpdir(), "patched-cc-prompt-review-gap-"))
  try {
    const identityRoot = join(root, "prompt-identities")
    const prompt =
      "You are a release audit assistant. Inspect deterministic evidence for ${context}. Return a concise result without inventing missing information, and clearly identify any values that remain available only at runtime."
    const previousSource = `const context="previous";const prompt=\`${prompt}\`;\n`
    const currentSource = previousSource.replace("concise result", "brief result")
    const previous = join(root, "previous.js")
    const current = join(root, "current.js")
    writeFileSync(previous, previousSource)
    writeFileSync(current, currentSource)

    bootstrapPromptIdentityFiles(identityRoot, "2.1.217", inspectPromptIdentityObservations(previousSource, "2.1.217"))
    const previousCatalog = join(root, "previous", "catalog")
    writePromptCatalog({
      upstreamVersion: "2.1.217",
      releaseId: "patch.1",
      upstreamBundlePath: previous,
      upstreamBundleSha256: sha256(readFileSync(previous)).sri,
      patchedBundlePath: previous,
      patchedBundleSha256: sha256(readFileSync(previous)).sri,
      patchSetSha256: "sha256-test",
      outDir: previousCatalog,
      identityRoot,
    })

    const draft = buildPromptIdentityDraft(
      identityRoot,
      "2.1.218",
      "2.1.217",
      inspectPromptIdentityObservations(currentSource, "2.1.218"),
    )
    const firstDecision = draft.decisions[0]
    if (!firstDecision) throw new Error("contextual-gap fixture draft did not contain a prompt")
    draft.decisions[0] = {
      ...firstDecision,
      relation: "carry",
      lineageId: "prompt-000001",
      predecessors: ["v2.1.217-0000"],
      evidence: "maintainer-rule",
      rationale: "The runtime expression remains the same documented prompt lineage.",
    }
    const draftPath = join(root, "current.draft.json")
    writeFileSync(draftPath, `${JSON.stringify(draft, null, 2)}\n`)
    finalizePromptIdentityDraft(identityRoot, draftPath)

    const currentCatalog = join(root, "current", "catalog")
    writePromptCatalog({
      upstreamVersion: "2.1.218",
      releaseId: "patch.1",
      upstreamBundlePath: current,
      upstreamBundleSha256: sha256(readFileSync(current)).sri,
      patchedBundlePath: current,
      patchedBundleSha256: sha256(readFileSync(current)).sri,
      patchSetSha256: "sha256-test",
      outDir: currentCatalog,
      identityRoot,
    })

    const result = renderPromptReviewMarkdown({
      catalogDir: currentCatalog,
      identityRoot,
      upstreamVersion: "2.1.218",
      previousCatalogDir: previousCatalog,
    })
    expect(result.summary).toMatchObject({
      unchanged: 0,
      changedAndTraced: 1,
      newOrSplit: 0,
    })
    expect(result.markdown).toContain("<summary><code>prompt-000001</code>")
    expect(result.markdown).toContain("No canonical side-by-side text is available for this transition.")
    expect(result.releaseMarkdown).toContain("<summary><code>prompt-000001</code>")
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
