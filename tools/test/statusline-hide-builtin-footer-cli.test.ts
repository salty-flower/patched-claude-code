import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.138"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")

const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-statusline-"))
const patchedBundle = join(tempDir, "cli.patched.js")

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function renderStatuslineFooterPatches(input: string, output: string): void {
  const body = readFileSync(input, "utf8")
  const patches = readdirSync(join(ROOT, "patches"))
    .filter(
      (file) =>
        file === "statusline-footer-control.toml" ||
        ((file.startsWith("statusline-hide-builtin-footer-") || file.startsWith("statusline-json-")) &&
          file.endsWith(".toml")),
    )
    .sort()
    .flatMap((file) => loadPatchEntriesFromFile(join(ROOT, "patches", file)))

  writeFileSync(output, applyPatchEntries(body, patches, TARGET_VERSION).source)
}

function isVersionAtLeast(version: string, floor: string): boolean {
  const parts = (value: string) => value.split(".").map((part) => Number.parseInt(part, 10))
  const current = parts(version)
  const minimum = parts(floor)

  for (let index = 0; index < Math.max(current.length, minimum.length); index += 1) {
    const currentPart = current[index] ?? 0
    const minimumPart = minimum[index] ?? 0
    if (currentPart > minimumPart) return true
    if (currentPart < minimumPart) return false
  }

  return true
}

test("patched bundle exposes --hide-builtin-footer and wires it into statusLine.disabledFooter", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderStatuslineFooterPatches(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")
  expect(patched).toContain("--hide-builtin-footer")
  expect(patched).toContain(
    '["footer","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"]',
  )
  expect(patched).toContain("disabledFooter:_")
  expect(patched).toContain(
    '["footer","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional().describe("Built-in footer items to hide when a custom status line is configured.")',
  )
  expect(patched).toContain('disabledFooter?.includes("effort_notification")')
  expect(patched).toContain('disabledFooter?.includes("rate_limit_warning")')
  expect(patched).toContain('disabledFooter?.includes("teammate_idle_spacer")')
  expect(patched).toContain("Image in clipboard")
  expect(patched).toContain("globalThis.__acc_clipboard_image_available=")
  expect(patched).toContain(
    'clipboard_image:{available:globalThis.__acc_clipboard_image_available===!0,paste_shortcut:"ctrl+v"}',
  )
  expect(patched).toContain("globalThis.__acc_rate_limit_warning=T")
  expect(patched).toContain("rate_limit_warning:{message:globalThis.__acc_rate_limit_warning}")

  if (isVersionAtLeast(TARGET_VERSION, "2.1.140")) {
    expect(patched).toContain("z.hideBuiltinFooter")
    expect(patched).toContain("let H=u8()")
    expect(patched).not.toContain("A.hideBuiltinFooter?(()=>{let H=m8()")
  }
}, 120000)
