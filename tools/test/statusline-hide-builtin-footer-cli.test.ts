import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = "2.1.133"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")

const tempDir = mkdtempSync(join(tmpdir(), "audited-cc-statusline-"))
const patchedBundle = join(tempDir, "cli.patched.js")

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function run(cmd: string[]): { stdout: string; stderr: string; exitCode: number | null } {
  const result = Bun.spawnSync({
    cmd,
    cwd: ROOT,
    stdout: "pipe",
    stderr: "pipe",
  })
  return {
    stdout: result.stdout.toString(),
    stderr: result.stderr.toString(),
    exitCode: result.exitCode,
  }
}

function renderStatuslineFooterPatches(input: string, output: string): void {
  const body = readFileSync(input, "utf8")
  const patches = readdirSync(join(ROOT, "patches"))
    .filter(
      (file) =>
        file === "statusline-footer-control.toml" ||
        (file.startsWith("statusline-hide-builtin-footer-") || file.startsWith("statusline-json-")) &&
          file.endsWith(".toml"),
    )
    .sort()
    .flatMap((file) => loadPatchEntriesFromFile(join(ROOT, "patches", file)))

  writeFileSync(output, applyPatchEntries(body, patches, TARGET_VERSION).source)
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
    'disabledFooter:v.array(v.enum(["footer","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
  )
  expect(patched).toContain(
    'Hp=(Y_((I_)=>I_.settings.statusLine?.hideBuiltinFooter)||Y_((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification")))?void 0:nH?void 0:Ws7(jH,qH)',
  )
  expect(patched).toContain("let A=rH?null:T,z;")
  expect(patched).toContain(
    'bH&&k?null:tq.createElement(B,{flexDirection:"row",flexWrap:"wrap",marginTop:1,width:"100%"}',
  )
  expect(patched).toContain("w||Y({key:CC1,text:`Image in clipboard")
  expect(patched).toContain(
    'clipboard_image:{available:globalThis.__acc_clipboard_image_available===!0,paste_shortcut:"ctrl+v"}',
  )
  expect(patched).toContain("globalThis.__acc_rate_limit_warning=T")
  expect(patched).toContain("rate_limit_warning:{message:globalThis.__acc_rate_limit_warning}")

  const help = run(["bun", patchedBundle, "--help"])
  expect(help.exitCode).toBe(0)
  expect(help.stdout).toContain("--hide-builtin-footer")
})
