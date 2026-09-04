import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()
const PATCH_FILE = join(ROOT, "patches", "resume-1m-model-defaults.toml")

const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-resume-1m-"))

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

test("resume restores 1m defaults after alias resolution", async () => {
  const entrypoint = await renderRunnableBundle({ root: ROOT, version: TARGET_VERSION, outDir: tempDir, patchFiles: ["resume-1m-model-defaults.toml"] })
  const graphDir = join(entrypoint, "..", "graph.patched", "darwin-arm64")
  const patched = existsSync(graphDir)
    ? readdirSync(graphDir).filter((file) => file.endsWith(".js")).map((file) => readFileSync(join(graphDir, file), "utf8")).join("\n")
    : readFileSync(entrypoint, "utf8")
  const applied = loadPatchEntriesFromFile(PATCH_FILE).filter((patch) => patchApplies(patch, TARGET_VERSION)).length

  if (isVersionAtLeast(TARGET_VERSION, "2.1.170") && isVersionBefore(TARGET_VERSION, "2.1.172")) {
    expect(applied).toBe(3)
    expect(patched).toContain(
      'if(sj()!==void 0||!j3())return;let O=PN4(H,_);if(process.env.ANTHROPIC_MODEL&&(O.kind!=="ok"||W9(U7(process.env.ANTHROPIC_MODEL))!==W9(O.model)))return;',
    )
    expect(patched).toContain('if(_&&_J(U7(_))&&bU(T)&&W9(U7(G$(_)))===W9(T))return{kind:"ok",model:T+"[1m]"};')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.172") && isVersionBefore(TARGET_VERSION, "2.1.177")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(Yj()!==void 0||!h3())return;let O=Sv4(H,_);if(process.env.ANTHROPIC_MODEL&&(O.kind!=="ok"||D9(Q7(process.env.ANTHROPIC_MODEL))!==D9(O.model)))return;',
    )
    expect(patched).toContain('if(_&&Nj(Q7(_))&&UU(T)&&D9(Q7(S$(_)))===D9(T))return{kind:"ok",model:T+"[1m]"};')
    return
  }

  if (TARGET_VERSION === "2.1.234") {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(V.ANTHROPIC_MODEL&&(o.kind!=="ok"||jo(ys(V.ANTHROPIC_MODEL))!==jo(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(y3u.map((i)=>jo(i))),n=ys(t??TA()),o=Ad(n);")
    return
  }

  if (TARGET_VERSION === "2.1.238") {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(V.ANTHROPIC_MODEL&&(o.kind!=="ok"||Fo(Ss(V.ANTHROPIC_MODEL))!==Fo(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(rfd.map((i)=>Fo(i))),n=Ss(t??CE()),o=ld(n);")
    return
  }

  if (TARGET_VERSION === "2.1.241") {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(G.ANTHROPIC_MODEL&&(o.kind!=="ok"||Ho(Ss(G.ANTHROPIC_MODEL))!==Ho(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(dAd.map((i)=>Ho(i))),n=Ss(t??Kv()),o=fd(n);")
    return
  }

  if (TARGET_VERSION === "2.1.246") {
    expect(applied).toBe(3)
    expect(patched).toContain(
      "function Xt(e,o){let t=new Set(mt.map((i)=>S(i))),n=ee(o??__acc_resume_default()),r=y(n);",
    )
    expect(patched).toContain("Pdc as __acc_resume_default")
    expect(patched).toContain("S(ee(y(o??__acc_resume_default())))===S(a)")
    expect(patched).not.toContain("n=ee(o??ct()),r=y(n)")
    expect(patched).not.toContain("S(ee(y(o??ct())))===S(a)")
    return
  }

  if (TARGET_VERSION === "2.1.259") {
    expect(applied).toBe(0)
    expect(patched).toContain(
      'if((r&&ou(r)||n!==void 0&&ou(n))&&wv(m)&&(cr(m)===i||r&&ze(Et(cr(r)))===ze(m)))return{kind:"ok",model:m+"[1m]"};',
    )
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.258")) {
    expect(applied).toBe(0)
    expect(patched).toContain(
      'if((r&&Qc(r)||n!==void 0&&Qc(n))&&uv(m)&&(hr(m)===i||r&&ze(At(hr(r)))===ze(m)))return{kind:"ok",model:m+"[1m]"};',
    )
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.251")) {
    expect(applied).toBe(0)
    expect(patched).toContain(
      'if((o&&Cc(o)||r!==void 0&&Cc(r))&&wC(u)&&(hr(u)===i||o&&Ye(Ot(hr(o)))===Ye(u)))return{kind:"ok",model:u+"[1m]"};',
    )
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.250")) {
    expect(applied).toBe(0)
    expect(patched).toContain(
      'if((o&&hu(o)||r!==void 0&&hu(r))&&kE(u)&&(br(u)===i||o&&Ye(Ot(br(o)))===Ye(u)))return{kind:"ok",model:u+"[1m]"};',
    )
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.233")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(V.ANTHROPIC_MODEL&&(o.kind!=="ok"||zo(cs(V.ANTHROPIC_MODEL))!==zo(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(EDu.map((i)=>zo(i))),n=cs(t??qA()),o=kd(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.229")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(Q.ANTHROPIC_MODEL&&(o.kind!=="ok"||Bo(ls(Q.ANTHROPIC_MODEL))!==Bo(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(Amu.map((i)=>Bo(i))),n=ls(t??ms()),o=dd(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.228") && isVersionBefore(TARGET_VERSION, "2.1.229")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(X.ANTHROPIC_MODEL&&(o.kind!=="ok"||Do(as(X.ANTHROPIC_MODEL))!==Do(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(Kcu.map((i)=>Do(i))),n=as(t??fs()),o=cd(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.227")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(re.ANTHROPIC_MODEL&&(o.kind!=="ok"||Ro(ns(re.ANTHROPIC_MODEL))!==Ro(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(qXc.map((i)=>Ro(i))),n=ns(t??ls()),o=Xu(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.221")) {
    expect(applied).toBe(2)
    expect(patched).toContain('if(re.ANTHROPIC_MODEL&&(o.kind!=="ok"||co(Oi(re.ANTHROPIC_MODEL))!==co(o.model)))return;')
    expect(patched).toContain("let r=new Set(BFc.map((i)=>co(i))),n=Oi(t??Gi()),o=rd(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.220")) {
    expect(applied).toBe(2)
    expect(patched).toContain('if(Z.ANTHROPIC_MODEL&&(o.kind!=="ok"||lo(Ei(Z.ANTHROPIC_MODEL))!==lo(o.model)))return;')
    expect(patched).toContain("let r=new Set(vbc.map((i)=>lo(i))),n=Ei(t??Mi()),o=Wu(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.218")) {
    expect(applied).toBe(2)
    expect(patched).toContain('if(Z.ANTHROPIC_MODEL&&(o.kind!=="ok"||yo(Si(Z.ANTHROPIC_MODEL))!==yo(o.model)))return;')
    expect(patched).toContain("let r=new Set(Gmc.map((i)=>yo(i))),n=Si(t??Wv()),o=pd(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.217")) {
    expect(applied).toBe(2)
    expect(patched).toContain('if(Z.ANTHROPIC_MODEL&&(o.kind!=="ok"||po(fi(Z.ANTHROPIC_MODEL))!==po(o.model)))return;')
    expect(patched).toContain("let r=new Set(Lsc.map((i)=>po(i))),n=fi(t??Ev()),o=od(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.216")) {
    expect(applied).toBe(2)
    expect(patched).toContain('if(Z.ANTHROPIC_MODEL&&(o.kind!=="ok"||po(mi(Z.ANTHROPIC_MODEL))!==po(o.model)))return;')
    expect(patched).toContain("let r=new Set(vnc.map((i)=>po(i))),n=mi(t??gv()),o=nd(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.215")) {
    expect(applied).toBe(2)
    expect(patched).toContain('if(Z.ANTHROPIC_MODEL&&(o.kind!=="ok"||so(ri(Z.ANTHROPIC_MODEL))!==so(o.model)))return;')
    expect(patched).toContain("let r=new Set(LJl.map((i)=>so(i))),n=ri(t??yi()),o=zu(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.212")) {
    expect(applied).toBe(2)
    expect(patched).toContain('if(Z.ANTHROPIC_MODEL&&(o.kind!=="ok"||lo(oi(Z.ANTHROPIC_MODEL))!==lo(o.model)))return;')
    expect(patched).toContain("let r=new Set(Czl.map((i)=>lo(i))),n=oi(t??xi()),o=ed(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.210")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(Te.ANTHROPIC_MODEL&&(o.kind!=="ok"||uo(ri(Te.ANTHROPIC_MODEL))!==uo(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(x9l.map((i)=>uo(i))),n=ri(t??QO()),o=id(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.208")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(Se.ANTHROPIC_MODEL&&(o.kind!=="ok"||co(Zo(Se.ANTHROPIC_MODEL))!==co(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(HBl.map((i)=>co(i))),n=Zo(t??QO()),o=ad(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.207")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(be.ANTHROPIC_MODEL&&(o.kind!=="ok"||ao(Zo(be.ANTHROPIC_MODEL))!==ao(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(Q1l.map(ao)),n=Zo(t??rE()),o=Kp(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.206")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(we.ANTHROPIC_MODEL&&(o.kind!=="ok"||so(ei(we.ANTHROPIC_MODEL))!==so(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(APl.map(so)),n=ei(t??yS()),o=Gp(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.205")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(Ce.ANTHROPIC_MODEL&&(o.kind!=="ok"||ao(oi(Ce.ANTHROPIC_MODEL))!==ao(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(Ykl.map(ao)),n=oi(t??lS()),o=Sp(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.199")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'function dns(){return Boolean(uy()!==void 0||!cd())}function AQe(e,t,n,r=(o)=>o()){if(dns())return;let o=TLc(e,t);if(Pe.ANTHROPIC_MODEL&&(o.kind!=="ok"||io($o(Pe.ANTHROPIC_MODEL))!==io(o.model)))return;',
    )
    expect(patched).toContain("let n=new Set(sii.map(io)),r=$o(t??j6()),o=Vu(r);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.197")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'function mYo(){return Boolean(ry()!==void 0||!ud())}function RJe(e,t,n,r=(o)=>o()){if(mYo())return;let o=Evc(e,t);if(Ne.ANTHROPIC_MODEL&&(o.kind!=="ok"||oo(Bo(Ne.ANTHROPIC_MODEL))!==oo(o.model)))return;',
    )
    expect(patched).toContain("let n=new Set(LQs.map(oo)),r=Bo(t??b_()),o=ju(r);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.181")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(by()!==void 0||!Cd())return;let o=G8l(e,t);if(process.env.ANTHROPIC_MODEL&&(o.kind!=="ok"||qo(gs(process.env.ANTHROPIC_MODEL))!==qo(o.model)))return;',
    )
    expect(patched).toContain('if(t&&Ry(gs(t))&&y8(s)&&qo(gs(Em(t)))===qo(s))return{kind:"ok",model:s+"[1m]"};')
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.177")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(kj()!==void 0||!OO())return;let O=Eu4(H,_);if(process.env.ANTHROPIC_MODEL&&(O.kind!=="ok"||_9(D9(process.env.ANTHROPIC_MODEL))!==_9(O.model)))return;',
    )
    expect(patched).toContain('if(_&&Uj(D9(_))&&bF(T)&&_9(D9(gO(_)))===_9(T))return{kind:"ok",model:T+"[1m]"};')
  }
})
