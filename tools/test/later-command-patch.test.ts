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

  expect(applied).toBe(2)
  expect(patched).toContain('__trim.match(/^\\/later\\s+(\\d+)\\s*([smhd])\\s+([\\s\\S]+)$/i)')
  expect(patched).toContain("await gsH(__cron,__prompt,!1,!1,void 0)")
  expect(patched).toContain("if(__task)__task.later=!0")
  expect(patched).toContain("bo(!0)")
  expect(patched).toContain('text:`Scheduled ${__id} for ${__when.toLocaleString()}`')
}, 120000)

test("/later list renders pending delayed prompts", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderLaterCommandPatch(TARGET_BUNDLE, patchedBundle)
  const patched = readFileSync(patchedBundle, "utf8")

  expect(patched).toContain('__trim==="/later list"')
  expect(patched).toContain("Pending /later prompts:")
  expect(patched).toContain("No pending /later prompts")
  expect(patched).toContain("YR().filter((__t)=>__t.later===!0&&!__t.recurring)")
}, 120000)

test("/later appears in slash command suggestions", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderLaterCommandPatch(TARGET_BUNDLE, patchedBundle)
  const patched = readFileSync(patchedBundle, "utf8")

  expect(patched).toContain('name:"later"')
  expect(patched).toContain('description:"Schedule a prompt for later; use /later 10m <prompt> or /later list"')
  expect(patched).toContain("supportsNonInteractive:!1")
}, 120000)
