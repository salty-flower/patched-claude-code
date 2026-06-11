import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.172"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")

const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-later-command-"))
const patchedBundle = join(tempDir, "cli.patched.js")

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function renderLaterCommandPatch(input: string, output: string): number {
  const body = readFileSync(input, "utf8")
  const patches = loadPatchEntriesFromFile(join(ROOT, "patches", "later-command.toml"))
  const result = applyPatchEntries(body, patches, TARGET_VERSION)

  writeFileSync(output, result.source)
  return result.applied
}

test("/later schedules a session-only one-shot cron before prompt queueing", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  const applied = renderLaterCommandPatch(TARGET_BUNDLE, patchedBundle)
  const patched = readFileSync(patchedBundle, "utf8")

  expect(applied).toBe(1)
  expect(patched).toContain('v.trim().match(/^\\/later\\s+(\\d+)\\s*([smhd])\\s+([\\s\\S]+)$/i)')
  expect(patched).toContain("await gsH(__cron,__prompt,!1,!1,void 0)")
  expect(patched).toContain("bo(!0)")
  expect(patched).toContain('text:`Scheduled ${__id} for ${__when.toLocaleString()}`')
}, 120000)
