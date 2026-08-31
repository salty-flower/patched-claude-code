import { expect, test } from "bun:test"
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  inspectPromptIdentityObservations,
  readPromptCatalogManifest,
  rebindPromptCatalog,
  validateCatalogContents,
  writePromptCatalog,
} from "../lib/prompt-catalog"
import {
  bootstrapPromptIdentityFiles,
  buildPromptIdentityDraft,
  finalizePromptIdentityDraft,
} from "../lib/prompt-identity"
import { summarizePromptIdentityDraft } from "../lib/prompt-identity-audit"
import { latestPreviousLedgerVersion, preparePromptIdentityBump } from "../lib/prompt-identity-bump"
import { loadPatches, sha256, writeReleasePayload } from "../lib/release-payload"

const ROOT = join(import.meta.dir, "..", "..")

const STATIC_PROMPT =
  "You are a release audit assistant. Your task is to inspect deterministic evidence, return a concise result, and do not claim that runtime-only values were recovered. Write the output without adding unstated context."
const DYNAMIC_SOURCE =
  "`You are a contextual assistant for ${name}. Your task is to inspect the current workspace. Do not claim this template is a complete request, and return only evidence for ${path}.`"

function withTempDir(run: (root: string) => void): void {
  const root = mkdtempSync(join(tmpdir(), "patched-cc-prompt-catalog-"))
  try {
    run(root)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
}

function writeFixture(root: string): { upstream: string; patched: string; identityRoot: string } {
  const upstream = join(root, "upstream.js")
  const patched = join(root, "patched.js")
  const source = `const staticPrompt=${JSON.stringify(STATIC_PROMPT)};const dynamicPrompt=${DYNAMIC_SOURCE};\n`
  writeFileSync(upstream, source)
  writeFileSync(patched, source)
  const identityRoot = join(root, "prompt-identities")
  bootstrapPromptIdentityFiles(identityRoot, "2.1.217", inspectPromptIdentityObservations(source, "2.1.217"))
  return { upstream, patched, identityRoot }
}

test("static prompt catalog emits exact Markdown and explicit contextual gaps", () => {
  withTempDir((root) => {
    const { upstream, patched, identityRoot } = writeFixture(root)
    const outDir = join(root, "first", "catalog")
    const result = writePromptCatalog({
      upstreamVersion: "2.1.217",
      releaseId: "patch.test",
      upstreamBundlePath: upstream,
      upstreamBundleSha256: sha256(readFileSync(upstream)).sri,
      patchedBundlePath: patched,
      patchedBundleSha256: sha256(readFileSync(patched)).sri,
      patchSetSha256: "sha256-test-patches",
      outDir,
      identityRoot,
    })

    expect(result.manifest.completeness).toBe("partial")
    expect(result.manifest.summary).toEqual({
      candidates: 2,
      staticEntries: 1,
      contextualGaps: 1,
      opaqueGaps: 1,
    })
    const entry = result.manifest.entries[0]!
    expect(entry.lineageId).toBe("prompt-000001")
    expect(entry.occurrenceId).toBe("v2.1.217-0000")
    expect(entry).not.toHaveProperty("legacyId")
    expect(entry.contentFile).toBe("entries/auxiliary/system/prompt-000001.md")
    expect(readFileSync(join(outDir, entry.contentFile), "utf8")).toBe(STATIC_PROMPT)
    const gaps = JSON.parse(readFileSync(join(outDir, "gaps.json"), "utf8")) as Array<{
      classification: string
      reasonCode: string
    }>
    expect(gaps.map((gap) => gap.classification)).toEqual(["contextual-gap", "opaque-gap"])
    expect(gaps[0]?.reasonCode).toBe("runtime-expressions")
    validateCatalogContents(outDir)
  })
})

test("identity draft carries unique exact observations and leaves changes or duplicates unresolved", () => {
  withTempDir((root) => {
    const { patched, identityRoot } = writeFixture(root)
    const source = readFileSync(patched, "utf8")
    const observations = inspectPromptIdentityObservations(source, "2.1.218")
    const draft = buildPromptIdentityDraft(identityRoot, "2.1.218", "2.1.217", observations)

    expect(draft.summary).toMatchObject({ carried: 2, unresolved: 0 })
    expect(draft.decisions[0]).toMatchObject({
      relation: "carry",
      lineageId: "prompt-000001",
      evidence: "unique-exact-observation",
    })
    expect(draft.decisions[1]).toMatchObject({
      relation: "carry",
      lineageId: "prompt-000002",
      evidence: "unique-exact-observation",
    })

    const changedSource = source.replace("contextual assistant", "contextual audit assistant")
    const changedDraft = buildPromptIdentityDraft(
      identityRoot,
      "2.1.218",
      "2.1.217",
      inspectPromptIdentityObservations(changedSource, "2.1.218"),
    )
    expect(changedDraft.summary).toMatchObject({ carried: 1, unresolved: 1, unresolvedWithPartialCandidates: 1 })
    expect(changedDraft.decisions[1]).toMatchObject({
      relation: "unresolved",
      lineageId: null,
      evidence: "manual-resolution-required",
    })
    expect(changedDraft.decisions[1]?.candidateMatches[0]).toMatchObject({
      rank: 1,
      lineageId: "prompt-000002",
      predecessorOccurrenceId: "v2.1.217-0001",
      astContextMatch: true,
      familyMatch: true,
      roleMatch: true,
    })
    expect(changedDraft.decisions[1]?.candidateMatches[0]?.textSimilarity).toBeGreaterThan(0.8)
    expect(summarizePromptIdentityDraft(changedDraft, 2)).toMatchObject({
      previousObservations: 2,
      currentObservations: 2,
      carried: 1,
      unresolved: 1,
      ambiguousExact: 0,
      changedWithPartialCandidate: 1,
      strongChangedCandidate: 1,
      changedCandidateWithAstContext: 1,
      changedCandidateWithFamilyAndRole: 1,
      changedCandidateWithUniqueBestScore: 1,
      unresolvedWithoutCandidate: 0,
    })
    expect(JSON.stringify(changedDraft)).not.toContain("contextual audit assistant")
    expect(
      buildPromptIdentityDraft(
        identityRoot,
        "2.1.218",
        "2.1.217",
        inspectPromptIdentityObservations(changedSource, "2.1.218"),
      ),
    ).toEqual(changedDraft)

    const duplicateSource = `${source}const duplicate=${JSON.stringify(STATIC_PROMPT)};\n`
    const duplicateDraft = buildPromptIdentityDraft(
      identityRoot,
      "2.1.218",
      "2.1.217",
      inspectPromptIdentityObservations(duplicateSource, "2.1.218"),
    )
    expect(
      duplicateDraft.decisions.filter(({ revisionSha256 }) => revisionSha256 !== null).map(({ relation }) => relation),
    ).toEqual(["unresolved", "unresolved"])
    expect(
      duplicateDraft.decisions
        .filter(({ revisionSha256 }) => revisionSha256 !== null)
        .map(({ candidateMatches }) => candidateMatches[0]?.textSimilarity),
    ).toEqual([1, 1])
  })
})

test("prompt identity bump preparation auto-finalizes only exact complete transitions", () => {
  withTempDir((root) => {
    const { patched, identityRoot } = writeFixture(root)
    const observations = inspectPromptIdentityObservations(readFileSync(patched, "utf8"), "2.1.218")
    const draftFile = join(root, "2.1.218.draft.json")

    expect(latestPreviousLedgerVersion(identityRoot, "2.1.218")).toBe("2.1.217")
    const prepared = preparePromptIdentityBump({
      identityRoot,
      upstreamVersion: "2.1.218",
      observations,
      draftFile,
    })
    expect(prepared).toMatchObject({
      status: "finalized-exact-only",
      previousVersion: "2.1.217",
      reviewReasons: [],
      draftSummary: { carried: 2, unresolved: 0, unmatchedPriorLineages: [] },
    })
    expect(existsSync(join(identityRoot, "versions", "2.1.218.json"))).toBe(true)
    expect(
      preparePromptIdentityBump({
        identityRoot,
        upstreamVersion: "2.1.218",
        observations,
        draftFile,
      }).status,
    ).toBe("ready-existing")
  })
})

test("prompt identity bump preparation blocks changes and removed predecessors", () => {
  withTempDir((root) => {
    const { patched, identityRoot } = writeFixture(root)
    const source = readFileSync(patched, "utf8")
    const changed = preparePromptIdentityBump({
      identityRoot,
      upstreamVersion: "2.1.218",
      observations: inspectPromptIdentityObservations(
        source.replace("contextual assistant", "contextual audit assistant"),
        "2.1.218",
      ),
      draftFile: join(root, "changed.draft.json"),
    })
    expect(changed).toMatchObject({
      status: "review-required",
      reviewReasons: ["unresolved-current-occurrences", "unmatched-prior-lineages"],
      draftSummary: { carried: 1, unresolved: 1 },
    })
    expect(existsSync(join(identityRoot, "versions", "2.1.218.json"))).toBe(false)
  })

  withTempDir((root) => {
    const { identityRoot } = writeFixture(root)
    const removedSource = `const staticPrompt=${JSON.stringify(STATIC_PROMPT)};\n`
    const removed = preparePromptIdentityBump({
      identityRoot,
      upstreamVersion: "2.1.218",
      observations: inspectPromptIdentityObservations(removedSource, "2.1.218"),
      draftFile: join(root, "removed.draft.json"),
    })
    expect(removed).toMatchObject({
      status: "review-required",
      reviewReasons: ["unmatched-prior-lineages"],
      draftSummary: { carried: 1, unresolved: 0, unmatchedPriorLineages: ["prompt-000002"] },
    })
    expect(existsSync(join(identityRoot, "versions", "2.1.218.json"))).toBe(false)
  })
})

test("finalized identity draft appends a lineage without invalidating the baseline ledger", () => {
  withTempDir((root) => {
    const { upstream, patched, identityRoot } = writeFixture(root)
    const source = readFileSync(patched, "utf8")
    const changedSource = source.replace("contextual assistant", "contextual audit assistant")
    const draft = buildPromptIdentityDraft(
      identityRoot,
      "2.1.218",
      "2.1.217",
      inspectPromptIdentityObservations(changedSource, "2.1.218"),
    )
    Object.assign(draft.decisions[1]!, {
      relation: "new",
      evidence: "maintainer-rule",
      rationale: "The upstream contextual prompt has no safe predecessor.",
    })
    const corruptedDraft = structuredClone(draft)
    corruptedDraft.decisions[0]!.lineageId = "prompt-000002"
    const corruptedDraftPath = join(root, "2.1.218.corrupted.draft.json")
    writeFileSync(corruptedDraftPath, `${JSON.stringify(corruptedDraft, null, 2)}\n`)
    expect(() => finalizePromptIdentityDraft(identityRoot, corruptedDraftPath)).toThrow(
      "automatic prompt carry evidence was edited or is ambiguous",
    )

    const draftPath = join(root, "2.1.218.draft.json")
    writeFileSync(draftPath, `${JSON.stringify(draft, null, 2)}\n`)
    const finalized = finalizePromptIdentityDraft(identityRoot, draftPath)

    expect(finalized.registry.lineages).toHaveLength(3)
    expect(finalized.ledger.occurrences[1]).toMatchObject({
      lineageId: "prompt-000003",
      relation: "new",
      evidence: "maintainer-rule",
    })

    const baselineOut = join(root, "baseline", "catalog")
    expect(() =>
      writePromptCatalog({
        upstreamVersion: "2.1.217",
        releaseId: "patch.test",
        upstreamBundlePath: upstream,
        upstreamBundleSha256: sha256(readFileSync(upstream)).sri,
        patchedBundlePath: patched,
        patchedBundleSha256: sha256(readFileSync(patched)).sri,
        patchSetSha256: "sha256-test-patches",
        outDir: baselineOut,
        identityRoot,
      }),
    ).not.toThrow()
  })
})

test("catalog output is byte-reproducible and can be rebound to a release id", () => {
  withTempDir((root) => {
    const { upstream, patched, identityRoot } = writeFixture(root)
    const coordinates = {
      upstreamVersion: "2.1.217",
      releaseId: "ci.test",
      upstreamBundleSha256: sha256(readFileSync(upstream)).sri,
      patchedBundleSha256: sha256(readFileSync(patched)).sri,
      patchSetSha256: "sha256-test-patches",
    }
    const first = writePromptCatalog({
      ...coordinates,
      upstreamBundlePath: upstream,
      patchedBundlePath: patched,
      outDir: join(root, "first", "catalog"),
      identityRoot,
    })
    const second = writePromptCatalog({
      ...coordinates,
      upstreamBundlePath: upstream,
      patchedBundlePath: patched,
      outDir: join(root, "second", "catalog"),
      identityRoot,
    })
    expect(second.treeSha256).toBe(first.treeSha256)

    const rebound = rebindPromptCatalog(join(root, "first", "catalog"), join(root, "rebound", "catalog"), {
      ...coordinates,
      releaseId: "patch.1",
    })
    expect(rebound.manifest.target.releaseId).toBe("patch.1")
    expect(rebound.manifest.contentTreeSha256).toBe(first.manifest.contentTreeSha256)
    expect(readPromptCatalogManifest(join(root, "rebound", "catalog")).target.releaseId).toBe("patch.1")
  })
})

test("catalog validation rejects modified Markdown", () => {
  withTempDir((root) => {
    const { upstream, patched, identityRoot } = writeFixture(root)
    const outDir = join(root, "catalog")
    const result = writePromptCatalog({
      upstreamVersion: "2.1.217",
      releaseId: "patch.test",
      upstreamBundlePath: upstream,
      upstreamBundleSha256: sha256(readFileSync(upstream)).sri,
      patchedBundlePath: patched,
      patchedBundleSha256: sha256(readFileSync(patched)).sri,
      patchSetSha256: "sha256-test-patches",
      outDir,
      identityRoot,
    })
    const entry = result.manifest.entries[0]!
    mkdirSync(join(outDir, "entries"), { recursive: true })
    writeFileSync(join(outDir, entry.contentFile), "tampered")
    expect(() => validateCatalogContents(outDir)).toThrow("prompt catalog content mismatch")
  })
})

test("release payload publishes and binds the static prompt catalog", () => {
  withTempDir((root) => {
    const { upstream, patched, identityRoot } = writeFixture(root)
    const outDir = join(root, "payload")
    const payload = writeReleasePayload({
      root: ROOT,
      version: "2.1.217",
      releaseId: "patch.test",
      input: patched,
      upstreamInput: upstream,
      outDir,
      promptIdentityRoot: identityRoot,
    })

    expect(payload.manifest.schema).toBe(2)
    expect(payload.manifest.promptCatalog).toMatchObject({
      path: "prompts/catalog",
      completeness: "partial",
      entries: 1,
      contextualGaps: 1,
      opaqueGaps: 1,
    })
    expect(readPromptCatalogManifest(join(outDir, "prompts", "catalog")).target.releaseId).toBe("patch.test")
  })
})

test("release payload publishes both platform graphs and records the graph directory", () => {
  withTempDir((root) => {
    const { upstream } = writeFixture(root)
    const rendered = join(root, "rendered")
    const patched = join(rendered, "cli.patched.js")
    mkdirSync(rendered, { recursive: true })
    // biome-ignore lint/suspicious/noTemplateCurlyInString: Exercise the literal dispatcher interpolation.
    const source = 'const platformDir = "darwin-arm64"; await import(`./graph.patched/${platformDir}/cli.js`)\n'
    writeFileSync(patched, source)
    const identityRoot = join(root, "graph-identities")
    bootstrapPromptIdentityFiles(identityRoot, "2.1.217", inspectPromptIdentityObservations(source, "2.1.217"))
    for (const platform of ["darwin-arm64", "linux-x64"]) {
      mkdirSync(join(rendered, "graph.patched", platform), { recursive: true })
      writeFileSync(join(rendered, "graph.patched", platform, "cli.js"), `// ${platform}\n`)
      writeFileSync(join(rendered, "graph.patched", platform, "asset.txt"), `${platform}\n`)
    }

    const outDir = join(root, "payload")
    const payload = writeReleasePayload({
      root: ROOT,
      version: "2.1.217",
      releaseId: "patch.test",
      input: patched,
      upstreamInput: upstream,
      outDir,
      promptIdentityRoot: identityRoot,
    })

    expect(payload.manifest.runtime.graphDirectory).toBe("graph.patched")
    expect(payload.manifest.bundle.entrypointSha256).toBe(payload.cliHash.sri)
    expect(payload.manifest.bundle.sha256).not.toBe(payload.manifest.bundle.entrypointSha256)
    expect(payload.manifest.bundle.files.map((file) => file.path)).toEqual([
      "cli.js",
      "graph.patched/darwin-arm64/asset.txt",
      "graph.patched/darwin-arm64/cli.js",
      "graph.patched/linux-x64/asset.txt",
      "graph.patched/linux-x64/cli.js",
    ])
    const catalogManifest = readPromptCatalogManifest(join(outDir, "prompts", "catalog"))
    expect(catalogManifest.target.patchedBundleSha256).toBe(payload.manifest.bundle.sha256)
    expect(catalogManifest.target.patchedEntrypointSha256).toBe(payload.manifest.bundle.entrypointSha256)
    expect(readFileSync(join(outDir, "graph.patched", "darwin-arm64", "asset.txt"), "utf8")).toBe("darwin-arm64\n")
    expect(readFileSync(join(outDir, "graph.patched", "linux-x64", "asset.txt"), "utf8")).toBe("linux-x64\n")

    rmSync(join(rendered, "graph.patched", "linux-x64", "cli.js"))
    expect(() =>
      writeReleasePayload({
        root: ROOT,
        version: "2.1.217",
        releaseId: "patch.test",
        input: patched,
        upstreamInput: upstream,
        outDir: join(root, "incomplete-payload"),
        promptIdentityRoot: identityRoot,
      }),
    ).toThrow("rendered linux-x64 graph is missing")
  })
}, 30_000)

test("catalog extraction rejects malformed UTF-8 before parsing", () => {
  withTempDir((root) => {
    const upstream = join(root, "upstream.js")
    const patched = join(root, "patched.js")
    const malformed = Buffer.from([0xff])
    writeFileSync(upstream, malformed)
    writeFileSync(patched, malformed)

    expect(() =>
      writePromptCatalog({
        upstreamVersion: "2.1.217",
        releaseId: "patch.test",
        upstreamBundlePath: upstream,
        upstreamBundleSha256: sha256(malformed).sri,
        patchedBundlePath: patched,
        patchedBundleSha256: sha256(malformed).sri,
        patchSetSha256: "sha256-test-patches",
        outDir: join(root, "catalog"),
        identityRoot: join(root, "missing-identities"),
      }),
    ).toThrow("prompt catalog input is not valid UTF-8")
  })
})

test("release payload rebinds a verified CI catalog when upstream bytes are unavailable", () => {
  withTempDir((root) => {
    const { upstream, patched, identityRoot } = writeFixture(root)
    const patchSetSha256 = sha256(
      loadPatches(ROOT)
        .map(({ patch, raw }) => `${patch.name}\0${raw}`)
        .join("\n"),
    ).sri
    const catalogDir = join(root, "ci", "catalog")
    writePromptCatalog({
      upstreamVersion: "2.1.217",
      releaseId: "ci.test",
      upstreamBundlePath: upstream,
      upstreamBundleSha256: sha256(readFileSync(upstream)).sri,
      patchedBundlePath: patched,
      patchedBundleSha256: sha256(readFileSync(patched)).sri,
      patchSetSha256,
      outDir: catalogDir,
      identityRoot,
    })
    const payload = writeReleasePayload({
      root: ROOT,
      version: "2.1.217",
      releaseId: "patch.1",
      input: patched,
      upstreamInput: join(root, "missing-upstream.js"),
      promptCatalogInput: catalogDir,
      promptIdentityRoot: identityRoot,
      outDir: join(root, "payload"),
    })
    expect(payload.manifest.promptCatalog.entries).toBe(1)
    expect(readPromptCatalogManifest(join(root, "payload", "prompts", "catalog")).target.releaseId).toBe("patch.1")
  })
}, 30_000)
