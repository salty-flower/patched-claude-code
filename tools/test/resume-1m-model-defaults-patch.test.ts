import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.156"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")

const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-resume-1m-"))
const patchedBundle = join(tempDir, "cli.patched.js")

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function renderResume1mPatch(input: string, output: string): number {
  const body = readFileSync(input, "utf8")
  const patches = loadPatchEntriesFromFile(join(ROOT, "patches", "resume-1m-model-defaults.toml"))
  const result = applyPatchEntries(body, patches, TARGET_VERSION)

  writeFileSync(output, result.source)
  return result.applied
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

test("resume restores 1m defaults after alias resolution", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  const applied = renderResume1mPatch(TARGET_BUNDLE, patchedBundle)
  const patched = readFileSync(patchedBundle, "utf8")

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

  if (isVersionAtLeast(TARGET_VERSION, "2.1.217")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(Z.ANTHROPIC_MODEL&&(o.kind!=="ok"||po(fi(Z.ANTHROPIC_MODEL))!==po(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(Lsc.map((i)=>po(i))),n=fi(t??Ev()),o=od(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.216")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(Z.ANTHROPIC_MODEL&&(o.kind!=="ok"||po(mi(Z.ANTHROPIC_MODEL))!==po(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(vnc.map((i)=>po(i))),n=mi(t??gv()),o=nd(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.215")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(Z.ANTHROPIC_MODEL&&(o.kind!=="ok"||so(ri(Z.ANTHROPIC_MODEL))!==so(o.model)))return;',
    )
    expect(patched).toContain("let r=new Set(LJl.map((i)=>so(i))),n=ri(t??yi()),o=zu(n);")
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.212")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(Z.ANTHROPIC_MODEL&&(o.kind!=="ok"||lo(oi(Z.ANTHROPIC_MODEL))!==lo(o.model)))return;',
    )
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
}, 120000)
