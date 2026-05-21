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

function renderPatchFiles(input: string, output: string, files: string[]): void {
  const body = readFileSync(input, "utf8")
  const patches = readdirSync(join(ROOT, "patches"))
    .filter((file) => files.includes(file))
    .sort()
    .flatMap((file) => loadPatchEntriesFromFile(join(ROOT, "patches", file)))

  writeFileSync(output, applyPatchEntries(body, patches, TARGET_VERSION).source)
}

function renderStatuslineFooterPatches(input: string, output: string): void {
  renderPatchFiles(
    input,
    output,
    readdirSync(join(ROOT, "patches")).filter(
      (file) =>
        file === "statusline-footer-control.toml" ||
        ((file.startsWith("statusline-hide-builtin-footer-") || file.startsWith("statusline-json-")) &&
          file.endsWith(".toml")),
    ),
  )
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

test("patched bundle exposes --hide-builtin-footer and wires it into statusLine.disabledFooter", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderStatuslineFooterPatches(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")
  expect(patched).toContain("--hide-builtin-footer")
  expect(patched).toContain(
    '["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"]',
  )
  expect(patched).toContain("disabledFooter:_")
  expect(patched).toContain(
    '["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional().describe("Built-in footer items to hide when a custom status line is configured.")',
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

  if (isVersionAtLeast(TARGET_VERSION, "2.1.140") && isVersionBefore(TARGET_VERSION, "2.1.142")) {
    expect(patched).toContain("z.hideBuiltinFooter")
    expect(patched).toContain("let H=u8()")
    expect(patched).not.toContain("A.hideBuiltinFooter?(()=>{let H=m8()")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.142")) {
    expect(patched).toContain("$.hideBuiltinFooter")
    expect(patched).toContain("let H=m8()")
    expect(patched).not.toContain("z.hideBuiltinFooter?(()=>{let H=u8()")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.143")) {
    expect(patched).toContain('disabledFooter?.includes("permission_mode")')
    expect(patched).toContain('disabledFooter?.includes("mode")')
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.143") && isVersionBefore(TARGET_VERSION, "2.1.146")) {
    expect(patched).toContain(
      'Y_((m)=>m.settings.statusLine?.hideBuiltinFooter)||Y_((m)=>m.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
    )
    expect(patched).not.toContain(
      'A_((m)=>m.settings.statusLine?.hideBuiltinFooter)||A_((m)=>m.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
    )
    expect(patched).toContain("OD.useEffect(()=>{m()},[__cci,m]);")
    expect(patched).not.toContain("KD.useEffect(()=>{p()},[__cci,p]);")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.146")) {
    expect(patched).toContain(
      'f_((m)=>m.settings.statusLine?.hideBuiltinFooter)||f_((m)=>m.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
    )
  }
}, 120000)

test("thinking display wires main-screen streaming thinking to the current REPL state", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderPatchFiles(TARGET_BUNDLE, patchedBundle, ["thinking-display.toml"])

  const patched = readFileSync(patchedBundle, "utf8")

  if (isVersionAtLeast(TARGET_VERSION, "2.1.146")) {
    expect(patched).toContain("streamingThinking:oT")
    expect(patched).not.toContain("streamingThinking:r4")
  }
}, 120000)
