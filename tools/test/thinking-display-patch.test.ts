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

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function getStreamingThinkingState(body: string): string {
  const setters = [...body.matchAll(/onStreamingThinking:([A-Za-z_$][\w$]*)/g)].map((match) => match[1])
  const setter = setters.at(-1)
  expect(setter).toBeDefined()

  const state = body.match(new RegExp(`\\[([A-Za-z_$][\\w$]*),${escapeRegExp(setter!)}\\]=[A-Za-z_$][\\w$]*\\.useState\\(null\\)`))?.[1]
  expect(state).toBeDefined()
  return state!
}

function getThinkingDeltaCaseAt(body: string, deltaIndex: number): string {
  const nextCaseIndex = body.indexOf('case"', deltaIndex + 'case"thinking_delta":{'.length)
  expect(nextCaseIndex).toBeGreaterThan(deltaIndex)
  return body.slice(deltaIndex, nextCaseIndex)
}

function getStreamHandlerThinkingPatch(body: string): { callback: string; deltaCase: string } {
  let searchFrom = 0
  while (true) {
    const deltaIndex = body.indexOf('case"thinking_delta":{', searchFrom)
    if (deltaIndex === -1) break

    const functionStart = body.lastIndexOf("function ", deltaIndex)
    expect(functionStart).toBeGreaterThanOrEqual(0)

    const functionHead = body.slice(functionStart, deltaIndex)
    const callback = functionHead.match(/onStreamingThinking:([A-Za-z_$][\w$]*)/)?.[1]
    if (callback) {
      return { callback, deltaCase: getThinkingDeltaCaseAt(body, deltaIndex) }
    }

    searchFrom = deltaIndex + 1
  }

  throw new Error("Could not find stream handler thinking_delta case")
}

test("thinking deltas update the stream handler's live thinking callback", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderThinkingPatch(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")

  if (isVersionAtLeast(TARGET_VERSION, "2.1.181")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:BKn(w)})')
    return
  }

  const { callback, deltaCase } = getStreamHandlerThinkingPatch(patched)

  expect(deltaCase).toContain(`${callback}?.((J)=>({thinking:(J?.thinking??"")+w,isStreaming:!0}))`)
}, 120000)

test("main-screen thinking display uses the same live state as transcript rendering", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderThinkingPatch(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")
  const streamingThinkingState = isVersionAtLeast(TARGET_VERSION, "2.1.168")
    ? getStreamingThinkingState(patched)
    : isVersionAtLeast(TARGET_VERSION, "2.1.156")
      ? "d7"
      : "cO"
  const liveStateUses = patched.match(new RegExp(`streamingThinking:${streamingThinkingState}`, "g"))?.length ?? 0

  if (isVersionAtLeast(TARGET_VERSION, "2.1.168")) {
    expect(liveStateUses).toBeGreaterThanOrEqual(1)
    if (streamingThinkingState !== "EK") {
      expect(patched).not.toContain("streamingThinking:EK")
    }
  } else {
    expect(liveStateUses).toBeGreaterThanOrEqual(2)
    const staleStreamingThinkingState = isVersionAtLeast(TARGET_VERSION, "2.1.156") ? "cO" : "oT"
    expect(patched).not.toContain(`streamingThinking:${staleStreamingThinkingState}`)
  }
}, 120000)

test("live thinking rendering is not suppressed by brief mode", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderThinkingPatch(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")

  if (isVersionAtLeast(TARGET_VERSION, "2.1.181")) {
    expect(patched).toContain('case"thinking":{if(!1)return null;let C;')
    expect(patched).not.toContain('case"thinking":{if(!m&&!i)return null;let C;')
    expect(patched).toContain("streamingText:h,streamingThinking:__acc_streamingThinking,hideStreamingTail:g=!1,isBriefOnly:_=!1")
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&Bu.createElement(B,{marginTop:1},Bu.createElement(GFn,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:r}))',
    )
    expect(patched).not.toContain("__acc_streamingThinking?.thinking&&!C")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.177")) {
    expect(patched).toContain('case"thinking":{if(!1)return null;let h;')
    expect(patched).not.toContain('case"thinking":{if(!J&&!z)return null;let h;')
    expect(patched).toContain("streamingText:M,streamingThinking:__acc_streamingThinking,isBriefOnly:X=!1")
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&v5.createElement(B,{marginTop:1},v5.createElement(lC6,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:K}))',
    )
    expect(patched).not.toContain("__acc_streamingThinking?.thinking&&!C")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.172")) {
    expect(patched).toContain('case"thinking":{if(!1)return null;let h;')
    expect(patched).not.toContain('case"thinking":{if(!J&&!z)return null;let h;')
    expect(patched).toContain("streamingText:M,streamingThinking:__acc_streamingThinking,isBriefOnly:X=!1")
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&P5.createElement(B,{marginTop:1},P5.createElement(fE6,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:K}))',
    )
    expect(patched).not.toContain("__acc_streamingThinking?.thinking&&!C")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.168")) {
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
