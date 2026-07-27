import { expect, test } from "bun:test"
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { inspectPromptIdentityObservations, writePromptCatalog } from "../lib/prompt-catalog"
import {
  bootstrapPromptIdentityFiles,
  buildPromptIdentityDraft,
  finalizePromptIdentityDraft,
} from "../lib/prompt-identity"
import { renderPromptReviewMarkdown } from "../lib/prompt-review"
import { sha256 } from "../lib/release-payload"

const STATIC_PROMPT =
  "You are a release audit assistant. Your task is to inspect deterministic evidence, return a concise result, and do not claim that runtime-only values were recovered. Write the output without adding unstated context."

test("prompt review renders inline unchanged IDs and traced side-by-side changes", () => {
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

    const draft = buildPromptIdentityDraft(
      identityRoot,
      "2.1.218",
      "2.1.217",
      inspectPromptIdentityObservations(currentSource, "2.1.218"),
    )
    const firstDecision = draft.decisions[0]
    if (!firstDecision) throw new Error("fixture draft did not contain a prompt")
    draft.decisions[0] = {
      ...firstDecision,
      relation: "carry",
      lineageId: "prompt-000001",
      predecessors: ["v2.1.217-0000"],
      evidence: "maintainer-rule",
      rationale: "The changed text remains the same documented prompt lineage.",
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
