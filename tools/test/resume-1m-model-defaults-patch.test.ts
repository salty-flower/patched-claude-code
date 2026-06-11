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
    expect(patched).toContain(
      'if(_&&_J(U7(_))&&bU(T)&&W9(U7(G$(_)))===W9(T))return{kind:"ok",model:T+"[1m]"};',
    )
    return
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.172")) {
    expect(applied).toBe(2)
    expect(patched).toContain(
      'if(Yj()!==void 0||!h3())return;let O=Sv4(H,_);if(process.env.ANTHROPIC_MODEL&&(O.kind!=="ok"||D9(Q7(process.env.ANTHROPIC_MODEL))!==D9(O.model)))return;',
    )
    expect(patched).toContain(
      'if(_&&Nj(Q7(_))&&UU(T)&&D9(Q7(S$(_)))===D9(T))return{kind:"ok",model:T+"[1m]"};',
    )
  }
}, 120000)
