import { afterAll, beforeAll, expect, test } from "bun:test"
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { targetVersion } from "../lib/target"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()

const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-thinking-"))
let patched = ""

beforeAll(async () => {
  const entrypoint = await renderRunnableBundle({ root: ROOT, version: TARGET_VERSION, outDir: tempDir, patchFiles: ["thinking-display.toml"] })
  const graphDir = join(entrypoint, "..", "graph.patched", "darwin-arm64")
  patched = readdirSync(graphDir).filter((file) => file.endsWith(".js")).map((file) => readFileSync(join(graphDir, file), "utf8")).join("\n")
})

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

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

const targetUses251ThinkingSymbols =
  isVersionAtLeast(TARGET_VERSION, "2.1.251") && isVersionBefore(TARGET_VERSION, "2.1.258")

const targetUses258ThinkingSymbols =
  isVersionAtLeast(TARGET_VERSION, "2.1.258") && isVersionBefore(TARGET_VERSION, "2.1.259")

const targetUses259ThinkingSymbols =
  isVersionAtLeast(TARGET_VERSION, "2.1.259") && isVersionBefore(TARGET_VERSION, "2.2.0")

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function getStreamingThinkingState(body: string): string {
  const setters = [...body.matchAll(/onStreamingThinking:([A-Za-z_$][\w$]*)/g)].map((match) => match[1])
  const setter = setters.at(-1)
  expect(setter).toBeDefined()

  const state = body.match(
    new RegExp(`\\[([A-Za-z_$][\\w$]*),${escapeRegExp(setter!)}\\]=[A-Za-z_$][\\w$]*\\.useState\\(null\\)`),
  )?.[1]
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

function getFunctionSourceUntilNextDeclaration(body: string, signature: string): string {
  const start = body.indexOf(signature)
  expect(start).toBeGreaterThanOrEqual(0)
  const end = body.indexOf("function ", start + signature.length)
  expect(end).toBeGreaterThan(start)
  return body.slice(start, end)
}

test("thinking deltas update the stream handler's live thinking callback", () => {
  if (TARGET_VERSION === "2.1.250") {
    expect(patched).toContain('onStreamingText:T,onStreamingThinking:S,onCompactEvent:E')
    expect(patched).toContain('S?.((B)=>({thinking:(B?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('estimatedTokensDelta:con(N.thinking)')
    return
  }
  if (targetUses251ThinkingSymbols) {
    expect(patched).toContain('onStreamingText:C,onStreamingThinking:S,onCompactEvent:A')
    expect(patched).toContain('S?.((B)=>({thinking:(B?.thinking??"")+w,isStreaming:!0}))')
    return
  }
  if (targetUses259ThinkingSymbols) {
    expect(patched).toContain("mut(e,{...n,onStreamingThinking:f})")
    expect(patched).toContain('n.onStreamingThinking?.((j)=>({thinking:(j?.thinking??"")+w,isStreaming:!0}))')
    return
  }
  if (targetUses258ThinkingSymbols) {
    expect(patched).toContain('onStreamingThinking:d')
    expect(patched).toContain('n.onStreamingThinking?.((j)=>({thinking:(j?.thinking??"")+w,isStreaming:!0}))')
    return
  }
  if (TARGET_VERSION === "2.1.238") {
    expect(patched).toContain('t.onStreamingThinking?.((J)=>({thinking:(J?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:dIl(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:ysl(w)})')
    return
  }

  if (TARGET_VERSION === "2.1.234") {
    expect(patched).toContain('t.onStreamingThinking?.((J)=>({thinking:(J?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:ysl(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:QYa(w)})')
    return
  }

  if (TARGET_VERSION === "2.1.241") {
    expect(patched).toContain('t.onStreamingThinking?.((J)=>({thinking:(J?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:XUl(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:dIl(w)})')
    return
  }

  if (TARGET_VERSION === "2.1.246") {
    expect(patched).toContain('t.onStreamingThinking?.((J)=>({thinking:(J?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:Q5s(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:XUl(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.233")) {
    expect(patched).toContain('t.onStreamingThinking?.((J)=>({thinking:(J?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:QYa(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:W$a(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.228")) {
    expect(patched).toContain('t.onStreamingThinking?.((J)=>({thinking:(J?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:fFa(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:fwa(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.221")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:xma(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:HVs(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.220")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:HVs(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:Ijs(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.218")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:Ijs(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:BBs(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.217")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:BBs(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:s2s(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.216")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:s2s(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:Mrn(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.215")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:Mrn(w)})')
    expect(patched).not.toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:Pen(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.212")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:Pen(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.210")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:AXr(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.208")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:pon(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.206")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:Xin(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.205")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:con(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.199")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:zrn(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.197")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:Ven(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.186")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:aQn(w)})')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.181")) {
    expect(patched).toContain('t.onStreamingThinking?.((p)=>({thinking:(p?.thinking??"")+w,isStreaming:!0}))')
    expect(patched).toContain('else if(w.length>0)o?.({type:"thinking_progress",estimatedTokensDelta:BKn(w)})')
    return
  }

  const { callback, deltaCase } = getStreamHandlerThinkingPatch(patched)

  expect(deltaCase).toContain(`${callback}?.((J)=>({thinking:(J?.thinking??"")+w,isStreaming:!0}))`)
})

test("main-screen thinking display uses the same live state as transcript rendering", () => {
  if (TARGET_VERSION === "2.1.250") {
    expect(patched).toContain("onStreamingThinking:this.stream.setStreamingThinking")
    expect(patched).toContain("__acc_streamingThinking=Ze(d.stream,(Ke)=>Ke.streamingThinking)")
    expect(patched).toContain(
      "__acc_streamingThinking?.thinking&&e(t,{dimColor:!0,children:__acc_streamingThinking.thinking})",
    )
    return
  }
  if (targetUses251ThinkingSymbols) {
    expect(patched).toContain("onStreamingThinking:this.stream.setStreamingThinking")
    expect(patched).toContain("__acc_streamingThinking=Xe(S.stream,(ot)=>ot.streamingThinking)")
    expect(patched).toContain(
      "__acc_streamingThinking?.thinking&&e(t,{dimColor:!0,children:__acc_streamingThinking.thinking})",
    )
    return
  }
  if (targetUses259ThinkingSymbols) {
    expect(patched).toContain("__acc_streamingThinking=Ue(hq?.stream,(T)=>T.streamingThinking)")
    expect(patched).toContain(
      "__acc_streamingThinking?.thinking&&e(n,{dimColor:!0,children:__acc_streamingThinking.thinking})",
    )
    return
  }
  if (targetUses258ThinkingSymbols) {
    expect(patched).toContain("__acc_streamingThinking=Ue(FR?.stream,(T)=>T.streamingThinking)")
    expect(patched).toContain(
      "__acc_streamingThinking?.thinking&&e(n,{dimColor:!0,children:__acc_streamingThinking.thinking})",
    )
    return
  }
  if (TARGET_VERSION === "2.1.238") {
    expect(patched).toContain("onStreamingThinking:en.stream.setStreamingThinking")
    expect(patched).toContain(
      "streamingToolUses:$o,streamingThinking:__acc_streamingThinking,userInputOnProcessing:po",
    )
    expect(patched).toContain("streamingThinking:wi.isMain?__acc_streamingThinking:null")
    expect(patched).toContain(
      "streamingPreview:h,streamingThinking:__acc_streamingThinking,isBriefOnly:g=!1",
    )
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&_L.jsx(P,{marginTop:1,children:_L.jsx(Fsn,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:k})})',
    )
    return
  }

  if (TARGET_VERSION === "2.1.234") {
    const streamingThinkingState = getStreamingThinkingState(patched)
    expect(streamingThinkingState).toBe("ds")
    expect(patched).toContain("onStreamingThinking:Js")
    expect(patched).toContain("streamingThinking:gR.isMain?ds:null")
    expect(patched).toContain(
      "streamingPreview:S,streamingThinking:__acc_streamingThinking,isBriefOnly:v=!1",
    )
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&XD.jsx(x,{marginTop:1,children:XD.jsx(fXr,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:n})})',
    )
    return
  }

  if (TARGET_VERSION === "2.1.241") {
    expect(patched).toContain("onStreamingThinking:Zr.stream.setStreamingThinking")
    expect(patched).toContain(
      "streamingToolUses:Qi,streamingThinking:__acc_streamingThinking,userInputOnProcessing:is",
    )
    expect(patched).toContain("streamingThinking:Yn.isMain?__acc_streamingThinking:null")
    expect(patched).toContain(
      "streamingPreview:h,streamingThinking:__acc_streamingThinking,isBriefOnly:g=!1",
    )
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&HL.jsx(P,{marginTop:1,children:HL.jsx(rpn,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:k})})',
    )
    return
  }

  if (TARGET_VERSION === "2.1.246") {
    expect(patched).toContain("onStreamingThinking:this.stream.setStreamingThinking")
    expect(patched).toContain(
      "streamingToolUses:Jn,streamingThinking:__acc_streamingThinking,userInputOnProcessing:Pr,toolProgress:pe",
    )
    expect(patched).toContain("streamingThinking:Ti.isMain?__acc_streamingThinking:null")
    expect(patched).toContain(
      "streamingPreview:C,streamingThinking:__acc_streamingThinking,isBriefOnly:U=!1",
    )
    expect(patched).toContain(
      "__acc_streamingThinking?.thinking&&r(p,{marginTop:1,children:r(c,{dimColor:!0,children:__acc_streamingThinking.thinking})})",
    )
    expect(patched).not.toContain("__acc_streamingThinking?.thinking&&o(P,{marginTop:1")
    expect(patched).not.toContain(
      "children:o(t,{dimColor:!0,children:__acc_streamingThinking.thinking})",
    )
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.233")) {
    const streamingThinkingState = getStreamingThinkingState(patched)
    expect(streamingThinkingState).toBe("hl")
    expect(patched).toContain("onStreamingThinking:El")
    expect(patched).toContain(
      `streamingThinking:zE.isMain?${streamingThinkingState}:null`,
    )
    expect(patched).toContain(
      "streamingPreview:v,streamingThinking:__acc_streamingThinking,isBriefOnly:S=!1",
    )
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&dD.jsx(x,{marginTop:1,children:dD.jsx(OVr,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:n})})',
    )
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.205")) {
    expect(patched).not.toContain("streamingThinking:_t")
    expect(patched).not.toContain("streamingThinking:ma")
    return
  }

  const streamingThinkingState = isVersionAtLeast(TARGET_VERSION, "2.1.168")
    ? getStreamingThinkingState(patched)
    : isVersionAtLeast(TARGET_VERSION, "2.1.156")
      ? "d7"
      : "cO"
  const liveStateUses = patched.match(new RegExp(`streamingThinking:${streamingThinkingState}`, "g"))?.length ?? 0

  if (isVersionAtLeast(TARGET_VERSION, "2.1.206")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!ost&&!dJ){return null}')
    expect(patched).toContain("let RBC=!0;")
    expect(patched).not.toContain("let RBC=tsd||rsd;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.205")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!lit&&!qY){return null}')
    expect(patched).toContain("let qDC=!0;")
    expect(patched).not.toContain("let qDC=prd||frd;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.199")) {
    expect(patched).toContain("streamingThinking:ma")
    expect(patched).toContain("streamingThinking:__acc_streamingThinking")
    expect(patched).not.toContain("streamingThinking:EK")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.168")) {
    expect(liveStateUses).toBeGreaterThanOrEqual(1)
    if (streamingThinkingState !== "EK") {
      expect(patched).not.toContain("streamingThinking:EK")
    }
  } else {
    expect(liveStateUses).toBeGreaterThanOrEqual(2)
    const staleStreamingThinkingState = isVersionAtLeast(TARGET_VERSION, "2.1.156") ? "cO" : "oT"
    expect(patched).not.toContain(`streamingThinking:${staleStreamingThinkingState}`)
  }
})

test("live thinking rendering is not suppressed by brief mode", () => {
  if (TARGET_VERSION === "2.1.250") {
    expect(patched).toContain(
      "__acc_streamingThinking?.thinking&&e(t,{dimColor:!0,children:__acc_streamingThinking.thinking})",
    )
    expect(patched).not.toContain(
      "ee&&__acc_streamingThinking?.thinking&&e(t,{dimColor:!0,children:__acc_streamingThinking.thinking})",
    )
    return
  }
  if (targetUses251ThinkingSymbols) {
    expect(patched).toContain(
      "__acc_streamingThinking?.thinking&&e(t,{dimColor:!0,children:__acc_streamingThinking.thinking})",
    )
    expect(patched).not.toContain("!P&&!de&&!pe&&re&&x.isMain&&e(PXt,{})]})}")
    return
  }
  if (targetUses259ThinkingSymbols) {
    expect(patched).toContain(
      "__acc_streamingThinking?.thinking&&e(n,{dimColor:!0,children:__acc_streamingThinking.thinking})",
    )
    const liveRowFunction = getFunctionSourceUntilNextDeclaration(patched, "function tz(")
    expect(liveRowFunction).not.toContain("streamingThinking:null")
    return
  }
  if (targetUses258ThinkingSymbols) {
    expect(patched).toContain(
      "__acc_streamingThinking?.thinking&&e(n,{dimColor:!0,children:__acc_streamingThinking.thinking})",
    )
    const liveRowFunction = getFunctionSourceUntilNextDeclaration(patched, "function E4(")
    expect(liveRowFunction).not.toContain("streamingThinking:null")
    return
  }
  if (TARGET_VERSION === "2.1.238") {
    expect(patched).toContain('if(!1){return null}let h6;if(Yqt[38]')
    expect(patched).not.toContain('if(!Vqt&&!kge){return null}let h6;if(Yqt[38]')
    expect(patched).toContain("let ZeM=!0;")
    expect(patched).not.toContain("let ZeM=vDh||TDh;")
    return
  }

  if (TARGET_VERSION === "2.1.234") {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!i4t&&!gme){return null}')
    expect(patched).toContain("let t$O=!0;")
    expect(patched).not.toContain("let t$O=Y7m||J7m;")
    return
  }

  if (TARGET_VERSION === "2.1.241") {
    expect(patched).toContain('if(!1){return null}let B6;if(fGt[38]')
    expect(patched).not.toContain('case"thinking":{if(!dGt&&!xye){return null}')
    expect(patched).not.toContain('if(!Vqt&&!kge){return null}let B6;if(fGt[38]')
    expect(patched).toContain("let BWM=!0;")
    expect(patched).not.toContain("let BWM=OKh||DKh;")
    return
  }

  if (TARGET_VERSION === "2.1.246") {
    expect(patched).toContain('if(!1){return null}let eo;if(mi[42]')
    expect(patched).not.toContain('if(!li&&!et){return null}let eo;if(mi[42]')
    expect(patched).toContain("let Nce=!0;")
    expect(patched).not.toContain("let Nce=FO||$O;")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.233")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!kMt&&!xue){return null}')
    expect(patched).toContain("let $oO=!0;")
    expect(patched).not.toContain("let _JI=!0;")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.228")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!bPt&&!ece){return null}')
    expect(patched).toContain("let v2I=!0;")
    expect(patched).not.toContain("let XcI=bYf||SYf;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.221")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!Uwt&&!$oe){return null}')
    expect(patched).toContain("let ZVk=!0;")
    expect(patched).not.toContain("let ZVk=xCf||ICf;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.220")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!Vyt&&!gre){return null}')
    expect(patched).toContain("let K4R=!0;")
    expect(patched).not.toContain("let K4R=L9p||M9p;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.218")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!W_t&&!Ute){return null}')
    expect(patched).toContain("let UO0=!0;")
    expect(patched).not.toContain("let UO0=zFp||KFp;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.217")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!Aht&&!Eee){return null}')
    expect(patched).toContain("let Pr0=!0;")
    expect(patched).not.toContain("let Pr0=BRp||URp;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.216")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!iht&&!oee){return null}')
    expect(patched).toContain("let G7R=!0;")
    expect(patched).not.toContain("let G7R=Svp||Tvp;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.215")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!imt&&!nZ){return null}')
    expect(patched).toContain("let nFR=!0;")
    expect(patched).not.toContain("let nFR=xmp||kmp;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.212")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).toContain("let gRR=!0;")
    expect(patched).not.toContain("let gRR=Ncp||Fcp;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.210")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).toContain("let _c0=!0;")
    expect(patched).not.toContain("let _c0=IZd||HZd;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.208")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!Rlt&&!gX){return null}')
    expect(patched).toContain("let Mrw=!0;")
    expect(patched).not.toContain("let Mrw=hgd||ggd;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.206")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!ost&&!dJ){return null}')
    expect(patched).toContain("let RBC=!0;")
    expect(patched).not.toContain("let RBC=tsd||rsd;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.205")) {
    expect(patched).toContain('case"thinking":{if(!1){return null}')
    expect(patched).not.toContain('case"thinking":{if(!lit&&!qY){return null}')
    expect(patched).toContain("let qDC=!0;")
    expect(patched).not.toContain("let qDC=prd||frd;")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.199")) {
    expect(patched).toContain('case"thinking":{if(!1)return null;let R;')
    expect(patched).not.toContain('case"thinking":{if(!m&&!i)return null;let R;')
    expect(patched).toContain(
      "streamingText:g,streamingThinking:__acc_streamingThinking,hideStreamingTail:_=!1,isBriefOnly:y=!1",
    )
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&YA.jsx(B,{marginTop:1,children:YA.jsx(mer,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:r})})',
    )
    expect(patched).not.toContain("__acc_streamingThinking?.thinking&&!y")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.197")) {
    expect(patched).toContain('case"thinking":{if(!1)return null;let R;')
    expect(patched).not.toContain('case"thinking":{if(!m&&!i)return null;let R;')
    expect(patched).toContain(
      "streamingText:g,streamingThinking:__acc_streamingThinking,hideStreamingTail:_=!1,isBriefOnly:T=!1",
    )
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&BA.jsx(B,{marginTop:1,children:BA.jsx(Fzn,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:r})})',
    )
    expect(patched).not.toContain("__acc_streamingThinking?.thinking&&!T")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.186")) {
    expect(patched).toContain('case"thinking":{if(!1)return null;let R;')
    expect(patched).not.toContain('case"thinking":{if(!m&&!i)return null;let C;')
    expect(patched).toContain(
      "streamingText:g,streamingThinking:__acc_streamingThinking,hideStreamingTail:_=!1,isBriefOnly:T=!1",
    )
    expect(patched).toContain(
      '__acc_streamingThinking?.thinking&&$E.jsx($,{marginTop:1,children:$E.jsx(u3n,{param:{type:"thinking",thinking:__acc_streamingThinking.thinking},addMargin:!1,isTranscriptMode:!0,verbose:r})})',
    )
    expect(patched).not.toContain("__acc_streamingThinking?.thinking&&!T")
  } else if (isVersionAtLeast(TARGET_VERSION, "2.1.181")) {
    expect(patched).toContain('case"thinking":{if(!1)return null;let C;')
    expect(patched).not.toContain('case"thinking":{if(!m&&!i)return null;let C;')
    expect(patched).toContain(
      "streamingText:h,streamingThinking:__acc_streamingThinking,hideStreamingTail:g=!1,isBriefOnly:_=!1",
    )
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
})

test("interrupt replaces 2.1.233 live thinking with one preserved message", () => {
  if (!isVersionAtLeast(TARGET_VERSION, "2.1.233")) return

  if (TARGET_VERSION === "2.1.238") {
    expect(patched).toContain('isVirtual:!0})]);this.stream.setStreamingThinking(null);let{salvage:p}=')
    expect(patched).not.toContain('isVirtual:!0})]);let{salvage:p}=')
    return
  }

  if (TARGET_VERSION === "2.1.234") {
    expect(patched).toContain('isVirtual:!0})]);Js(null);let{salvage:')
    expect(patched).not.toContain('isVirtual:!0})]);El(null);let{salvage:')
    return
  }

  if (TARGET_VERSION === "2.1.241") {
    expect(patched).toContain('isVirtual:!0})]);this.stream.setStreamingThinking(null);let{salvage:p}=')
    expect(patched).not.toContain('isVirtual:!0})]);let{salvage:')
    return
  }

  if (TARGET_VERSION === "2.1.246") {
    expect(patched).toContain('isVirtual:!0})]);this.stream.setStreamingThinking(null);let{salvage:d}=')
    expect(patched).not.toContain('isVirtual:!0})]);let{salvage:d}=')
    return
  }

  if (TARGET_VERSION === "2.1.250") {
    expect(patched).toContain('isVirtual:!0})]);this.stream.setStreamingThinking(null);let{salvage:')
    expect(patched).not.toContain('isVirtual:!0})]);let{salvage:')
    return
  }

  if (targetUses251ThinkingSymbols || targetUses258ThinkingSymbols || targetUses259ThinkingSymbols) {
    expect(patched).toContain('isVirtual:!0})]);this.stream.setStreamingThinking(null);let{salvage:')
    expect(patched).not.toContain('isVirtual:!0})]);let{salvage:')
    return
  }

  expect(patched).toContain('isVirtual:!0})]);El(null);let{salvage:')
  expect(patched).not.toContain('isVirtual:!0})]);let{salvage:')
})

test("live thinking is cleared before the next streamed content block", () => {
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
})
