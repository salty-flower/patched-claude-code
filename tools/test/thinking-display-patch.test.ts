import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.156"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")

const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-thinking-"))
const patchedBundle = join(tempDir, "cli.patched.js")

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function renderThinkingPatch(input: string, output: string): void {
  const body = readFileSync(input, "utf8")
  const patches = loadPatchEntriesFromFile(join(ROOT, "patches", "thinking-display.toml"))

  writeFileSync(output, applyPatchEntries(body, patches, TARGET_VERSION).source)
}

function compareVersions(left: string, right: string): number {
  const parts = (value: string) => value.split(".").map((part) => Number.parseInt(part, 10))
  const leftParts = parts(left)
  const rightParts = parts(right)

  for (let index = 0; index < Math.max(leftParts.length, rightParts.length); index += 1) {
    const leftPart = leftParts[index] ?? 0
    const rightPart = rightParts[index] ?? 0
    if (leftPart > rightPart) return 1
    if (leftPart < rightPart) return -1
  }

  return 0
}

function isVersionAtLeast(version: string, floor: string): boolean {
  return compareVersions(version, floor) >= 0
}

function isVersionBefore(version: string, ceiling: string): boolean {
  return compareVersions(version, ceiling) < 0
}

test("main-screen thinking display uses the same live state as transcript rendering", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderThinkingPatch(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")
  const streamingThinkingState = isVersionAtLeast(TARGET_VERSION, "2.1.168")
    ? "EK"
    : isVersionAtLeast(TARGET_VERSION, "2.1.156")
      ? "d7"
      : "cO"
  const staleStreamingThinkingState = isVersionAtLeast(TARGET_VERSION, "2.1.168")
    ? "d7"
    : isVersionAtLeast(TARGET_VERSION, "2.1.156")
      ? "cO"
      : "oT"
  const liveStateUses = patched.match(new RegExp(`streamingThinking:${streamingThinkingState}`, "g"))?.length ?? 0

  if (isVersionAtLeast(TARGET_VERSION, "2.1.168")) {
    expect(liveStateUses).toBeGreaterThanOrEqual(1)
  } else {
    expect(liveStateUses).toBeGreaterThanOrEqual(2)
  }
  expect(patched).not.toContain(`streamingThinking:${staleStreamingThinkingState}`)
}, 120000)

test("live thinking rendering is not suppressed by brief mode", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderThinkingPatch(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")

  if (isVersionAtLeast(TARGET_VERSION, "2.1.168")) {
    expect(patched).toContain('case"thinking":{if(!1)return null;let k;')
    expect(patched).not.toContain('case"thinking":{if(!f&&!$)return null;let k;')
    expect(patched).toContain("streamingText:M,streamingThinking:__acc_streamingThinking,isBriefOnly:X=!1")
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&i1.createElement(p,{marginTop:1},i1.createElement(rk6,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:K}))',
    )
    expect(patched).not.toContain("__acc_streamingThinking?.thinking&&!C")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.156")) {
    expect(patched).toContain("qH&&X&&U4.createElement(B,{marginTop:1}")
    expect(patched).not.toContain("qH&&X&&!I&&U4.createElement(B,{marginTop:1}")
  } else {
    expect(patched).toContain("zH&&X&&m4.createElement(B,{marginTop:1}")
    expect(patched).not.toContain("zH&&X&&!b&&m4.createElement(B,{marginTop:1}")
  }
}, 120000)

test("live thinking is cleared before the next streamed content block", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderThinkingPatch(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")

  if (isVersionAtLeast(TARGET_VERSION, "2.1.156") && isVersionBefore(TARGET_VERSION, "2.1.168")) {
    expect(patched).toContain(
      'case"content_block_start":switch(Y?.({type:"content_block_start"}),A?.(()=>null),z?.(()=>null),H.event.content_block.type){',
    )
    expect(patched).not.toContain(
      'case"content_block_start":switch(Y?.({type:"content_block_start"}),A?.(()=>null),H.event.content_block.type){',
    )
  } else if (isVersionBefore(TARGET_VERSION, "2.1.156")) {
    expect(patched).toContain(
      'case"content_block_start":switch(A?.({type:"content_block_start"}),Y?.(()=>null),$?.(()=>null),H.event.content_block.type){',
    )
    expect(patched).not.toContain(
      'case"content_block_start":switch(A?.({type:"content_block_start"}),Y?.(()=>null),H.event.content_block.type){',
    )
  }
}, 120000)
