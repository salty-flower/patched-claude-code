import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries, patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.172"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")
const laterPatches = loadPatchEntriesFromFile(join(ROOT, "patches", "later-command.toml"))
const testLaterCommand = laterPatches.some((patch) => patchApplies(patch, TARGET_VERSION))

const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-later-command-"))
const patchedBundle = join(tempDir, "cli.patched.js")

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function renderLaterCommandPatch(input: string, output: string): number {
  const body = readFileSync(input, "utf8")
  const result = applyPatchEntries(body, laterPatches, TARGET_VERSION)

  writeFileSync(output, result.source)
  return result.applied
}

function expectContainsOneOf(body: string, snippets: string[]): void {
  expect(snippets.some((snippet) => body.includes(snippet))).toBe(true)
}

test.skipIf(!testLaterCommand)(
  "/later schedules a session-only one-shot cron before prompt queueing",
  () => {
    expect(existsSync(TARGET_BUNDLE)).toBe(true)

    const applied = renderLaterCommandPatch(TARGET_BUNDLE, patchedBundle)
    const patched = readFileSync(patchedBundle, "utf8")

    expect(applied).toBe(2)
    expect(patched).toContain("__trim.match(/^\\/later\\s+(\\d+)\\s*([smhd])\\s+([\\s\\S]+)$/i)")
    expectContainsOneOf(patched, [
      "await xut(__cron,__prompt,!1,!1,void 0)",
      "await Att(__cron,__prompt,!1,!1,void 0)",
      "await gsH(__cron,__prompt,!1,!1,void 0)",
      "await hoH(__cron,__prompt,!1,!1,void 0)",
      "await SeH(__cron,__prompt,!1,!1,void 0)",
    ])
    expect(patched).toContain("if(__task)__task.later=!0")
    expectContainsOneOf(patched, ["Wee(!0)", "uX(!0)", "bo(!0)", "Or(!0)", "va(!0)"])
    expect(patched).toContain("text:`Scheduled ${__id} for ${__when.toLocaleString()}`")
  },
  120000,
)

test.skipIf(!testLaterCommand)(
  "/later list renders pending delayed prompts",
  () => {
    expect(existsSync(TARGET_BUNDLE)).toBe(true)

    renderLaterCommandPatch(TARGET_BUNDLE, patchedBundle)
    const patched = readFileSync(patchedBundle, "utf8")

    expect(patched).toContain('__trim==="/later list"')
    expect(patched).toContain("Pending /later prompts:")
    expect(patched).toContain("No pending /later prompts")
    expectContainsOneOf(patched, [
      "Iv().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "FI().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "YR().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "DG().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "vR().filter((__t)=>__t.later===!0&&!__t.recurring)",
    ])
    expect(patched).toContain("__raw.length>20?`${__raw.slice(0,17)}...`:__raw")
    expect(patched).toContain("return `${__i+1}. ${__text} @ ${__when}`")
    expect(patched).not.toContain("return `${__t.id} ${__when} ${__text}`")
  },
  120000,
)

test.skipIf(!testLaterCommand)(
  "/later appears in slash command suggestions",
  () => {
    expect(existsSync(TARGET_BUNDLE)).toBe(true)

    renderLaterCommandPatch(TARGET_BUNDLE, patchedBundle)
    const patched = readFileSync(patchedBundle, "utf8")

    expect(patched).toContain('name:"later"')
    expect(patched).toContain('description:"Schedule a prompt for later; use /later 10m <prompt> or /later list"')
    expect(patched).toContain("supportsNonInteractive:!1")
  },
  120000,
)
