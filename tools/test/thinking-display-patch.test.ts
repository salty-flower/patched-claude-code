import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.150"
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

test("2.1.150 main-screen thinking display uses the same live state as transcript rendering", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderThinkingPatch(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")
  const liveStateUses = patched.match(/streamingThinking:cO/g)?.length ?? 0

  expect(liveStateUses).toBeGreaterThanOrEqual(2)
  expect(patched).not.toContain("streamingThinking:oT")
}, 120000)

test("2.1.150 live thinking rendering is not suppressed by brief mode", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderThinkingPatch(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")

  expect(patched).toContain("zH&&X&&m4.createElement(B,{marginTop:1}")
  expect(patched).not.toContain("zH&&X&&!b&&m4.createElement(B,{marginTop:1}")
}, 120000)
