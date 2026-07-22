import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  readPromptCatalogManifest,
  rebindPromptCatalog,
  validateCatalogContents,
  writePromptCatalog,
} from "../lib/prompt-catalog"
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

function writeFixture(root: string): { upstream: string; patched: string } {
  const upstream = join(root, "upstream.js")
  const patched = join(root, "patched.js")
  const source = `const staticPrompt=${JSON.stringify(STATIC_PROMPT)};const dynamicPrompt=${DYNAMIC_SOURCE};\n`
  writeFileSync(upstream, source)
  writeFileSync(patched, source)
  return { upstream, patched }
}

test("static prompt catalog emits exact Markdown and explicit contextual gaps", () => {
  withTempDir((root) => {
    const { upstream, patched } = writeFixture(root)
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
    })

    expect(result.manifest.completeness).toBe("partial")
    expect(result.manifest.summary).toEqual({
      candidates: 2,
      staticEntries: 1,
      contextualGaps: 1,
      opaqueGaps: 1,
    })
    const entry = result.manifest.entries[0]!
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

test("catalog output is byte-reproducible and can be rebound to a release id", () => {
  withTempDir((root) => {
    const { upstream, patched } = writeFixture(root)
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
    })
    const second = writePromptCatalog({
      ...coordinates,
      upstreamBundlePath: upstream,
      patchedBundlePath: patched,
      outDir: join(root, "second", "catalog"),
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
    const { upstream, patched } = writeFixture(root)
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
    })
    const entry = result.manifest.entries[0]!
    mkdirSync(join(outDir, "entries"), { recursive: true })
    writeFileSync(join(outDir, entry.contentFile), "tampered")
    expect(() => validateCatalogContents(outDir)).toThrow("prompt catalog content mismatch")
  })
})

test("release payload publishes and binds the static prompt catalog", () => {
  withTempDir((root) => {
    const { upstream, patched } = writeFixture(root)
    const outDir = join(root, "payload")
    const payload = writeReleasePayload({
      root: ROOT,
      version: "2.1.217",
      releaseId: "patch.test",
      input: patched,
      upstreamInput: upstream,
      outDir,
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
      }),
    ).toThrow("prompt catalog input is not valid UTF-8")
  })
})

test("release payload rebinds a verified CI catalog when upstream bytes are unavailable", () => {
  withTempDir((root) => {
    const { upstream, patched } = writeFixture(root)
    const patchSetSha256 = sha256(loadPatches(ROOT).map(({ patch, raw }) => `${patch.name}\0${raw}`).join("\n")).sri
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
    })
    const payload = writeReleasePayload({
      root: ROOT,
      version: "2.1.217",
      releaseId: "patch.1",
      input: patched,
      upstreamInput: join(root, "missing-upstream.js"),
      promptCatalogInput: catalogDir,
      outDir: join(root, "payload"),
    })
    expect(payload.manifest.promptCatalog.entries).toBe(1)
    expect(readPromptCatalogManifest(join(root, "payload", "prompts", "catalog")).target.releaseId).toBe("patch.1")
  })
})
