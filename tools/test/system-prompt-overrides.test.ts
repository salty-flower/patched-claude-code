import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  buildPromptManifest,
  createSystemPromptOverrideHook,
  hashSectionVector,
  type PromptManifest,
} from "../../runtime/system-prompt-overrides"

const VERSION = "2.1.217"
const BUNDLE_SHA256 = "sha256-test-bundle"

function withPromptRoot(run: (root: string) => void): void {
  const root = mkdtempSync(join(tmpdir(), "patched-cc-prompt-overrides-"))
  try {
    run(root)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
}

function exportPrompt(root: string, sections: string[]): PromptManifest {
  createSystemPromptOverrideHook({
    targetVersion: VERSION,
    bundleSha256: BUNDLE_SHA256,
    promptRoot: root,
    exportMode: "export",
  })({ orderedSections: sections })
  return JSON.parse(readFileSync(join(root, "manifest.json"), "utf8")) as PromptManifest
}

function writeOverride(root: string, id: string, text: string | Uint8Array): string {
  const path = join(root, "overrides", `${id}.md`)
  mkdirSync(join(root, "overrides"), { recursive: true })
  writeFileSync(path, text)
  return path
}

test("no override preserves the exact upstream vector", () => {
  withPromptRoot((root) => {
    const upstream = ["# Intro\nExact bytes", "# Environment\nCWD: /tmp"]
    const output = createSystemPromptOverrideHook({
      targetVersion: VERSION,
      bundleSha256: BUNDLE_SHA256,
      promptRoot: root,
    })({ orderedSections: upstream })

    expect(output.effectiveSections).toBe(upstream)
    expect(output.effectiveVectorSha256).toBe(hashSectionVector(upstream))
    expect(output.sectionDiff.every((section) => !section.changed)).toBe(true)
  })
})

test("export writes version-scoped identities and sparse override changes only one section", () => {
  withPromptRoot((root) => {
    const upstream = ["# Intro\nOriginal", "# Environment\nOriginal cwd", "No heading"]
    const manifest = exportPrompt(root, upstream)
    expect(manifest.target).toEqual({ version: VERSION, bundleSha256: BUNDLE_SHA256 })
    expect(manifest.sections.map((section) => section.id)).toEqual(["v2.1.217-000", "v2.1.217-001", "v2.1.217-002"])
    expect(readFileSync(join(root, manifest.sections[1]!.file), "utf8")).toBe(upstream[1])

    writeOverride(root, manifest.sections[1]!.id, "Local preface\n{{upstream}}\nLocal suffix")
    const output = createSystemPromptOverrideHook({
      targetVersion: VERSION,
      bundleSha256: BUNDLE_SHA256,
      promptRoot: root,
    })({ orderedSections: upstream })

    expect(output.effectiveSections).toEqual([upstream[0], `Local preface\n${upstream[1]}\nLocal suffix`, upstream[2]])
    expect(output.sectionDiff.map((section) => section.changed)).toEqual([false, true, false])
  })
})

test("override files are an immutable process-start snapshot", () => {
  withPromptRoot((root) => {
    const upstream = ["# Intro\nOriginal"]
    const manifest = exportPrompt(root, upstream)
    const id = manifest.sections[0]!.id
    writeOverride(root, id, "first")
    const firstProcessHook = createSystemPromptOverrideHook({
      targetVersion: VERSION,
      bundleSha256: BUNDLE_SHA256,
      promptRoot: root,
    })

    writeOverride(root, id, "second")
    expect(firstProcessHook({ orderedSections: upstream }).effectiveSections).toEqual(["first"])
    expect(
      createSystemPromptOverrideHook({
        targetVersion: VERSION,
        bundleSha256: BUNDLE_SHA256,
        promptRoot: root,
      })({ orderedSections: upstream }).effectiveSections,
    ).toEqual(["second"])
  })
})

test("stale baseline, unknown identity, and repeated placeholders fail closed with file diagnostics", () => {
  withPromptRoot((root) => {
    const upstream = ["# Intro\nOriginal"]
    const manifest = exportPrompt(root, upstream)
    const id = manifest.sections[0]!.id
    const overridePath = writeOverride(root, id, "local")
    const staleHook = createSystemPromptOverrideHook({
      targetVersion: VERSION,
      bundleSha256: BUNDLE_SHA256,
      promptRoot: root,
    })
    expect(() => staleHook({ orderedSections: ["# Intro\nChanged upstream"] })).toThrow(overridePath)
    expect(() => staleHook({ orderedSections: ["# Intro\nChanged upstream"] })).toThrow("baseline SHA-256 mismatch")

    rmSync(overridePath)
    const unknownPath = writeOverride(root, "v2.1.217-999", "local")
    const unknownHook = createSystemPromptOverrideHook({
      targetVersion: VERSION,
      bundleSha256: BUNDLE_SHA256,
      promptRoot: root,
    })
    expect(() => unknownHook({ orderedSections: upstream })).toThrow(unknownPath)
    expect(() => unknownHook({ orderedSections: upstream })).toThrow("unknown section identity")

    rmSync(unknownPath)
    const repeatedPath = writeOverride(root, id, "{{upstream}} then {{upstream}}")
    const repeatedHook = createSystemPromptOverrideHook({
      targetVersion: VERSION,
      bundleSha256: BUNDLE_SHA256,
      promptRoot: root,
    })
    expect(() => repeatedHook({ orderedSections: upstream })).toThrow(repeatedPath)
    expect(() => repeatedHook({ orderedSections: upstream })).toThrow("occurs 2 times")
  })
})

test("malformed UTF-8 is rejected during the process-start snapshot", () => {
  withPromptRoot((root) => {
    const manifest = exportPrompt(root, ["# Intro\nOriginal"])
    const path = writeOverride(root, manifest.sections[0]!.id, new Uint8Array([0xc3, 0x28]))
    expect(() =>
      createSystemPromptOverrideHook({
        targetVersion: VERSION,
        bundleSha256: BUNDLE_SHA256,
        promptRoot: root,
      }),
    ).toThrow(path)
  })
})

test("stale override coordinates are rejected during the process-start snapshot", () => {
  withPromptRoot((root) => {
    const manifest = exportPrompt(root, ["# Intro\nOriginal"])
    const section = manifest.sections[0]
    if (!section) throw new Error("exported prompt manifest has no sections")
    writeOverride(root, section.id, "local")

    expect(() =>
      createSystemPromptOverrideHook({
        targetVersion: "2.1.218",
        bundleSha256: BUNDLE_SHA256,
        promptRoot: root,
      }),
    ).toThrow("target version mismatch")
    expect(() =>
      createSystemPromptOverrideHook({
        targetVersion: VERSION,
        bundleSha256: "sha256-new-bundle",
        promptRoot: root,
      }),
    ).toThrow("bundle SHA-256 mismatch")
  })
})

test("plain export preserves stale override baselines while explicit rebase updates them", () => {
  withPromptRoot((root) => {
    const original = ["# Intro\nOriginal"]
    const manifest = exportPrompt(root, original)
    writeOverride(root, manifest.sections[0]!.id, "local prose")
    const changed = ["# Intro\nChanged upstream"]

    expect(() =>
      createSystemPromptOverrideHook({
        targetVersion: VERSION,
        bundleSha256: BUNDLE_SHA256,
        promptRoot: root,
        exportMode: "export",
      })({ orderedSections: changed }),
    ).toThrow("export would rebind existing overrides")
    expect(JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"))).toEqual(manifest)

    expect(() =>
      createSystemPromptOverrideHook({
        targetVersion: VERSION,
        bundleSha256: BUNDLE_SHA256,
        promptRoot: root,
        exportMode: "rebase",
      })({ orderedSections: changed }),
    ).not.toThrow()
    const rebased = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8")) as PromptManifest
    expect(rebased.baselineVectorSha256).toBe(hashSectionVector(changed))
    expect(readFileSync(join(root, "overrides", `${manifest.sections[0]!.id}.md`), "utf8")).toBe("local prose")
  })
})

test("vector hashing is length-prefixed rather than naive concatenation", () => {
  expect(hashSectionVector(["ab", "c"])).not.toBe(hashSectionVector(["a", "bc"]))
  expect(buildPromptManifest(VERSION, BUNDLE_SHA256, ["ab", "c"]).baselineVectorSha256).toBe(
    hashSectionVector(["ab", "c"]),
  )
})
