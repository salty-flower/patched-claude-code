import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

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
  let body = readFileSync(input, "utf8")
  const patches = readdirSync(join(ROOT, "patches"))
    .filter((file) => file.startsWith("statusline-hide-builtin-footer-") && file.endsWith(".toml"))
    .sort()

  for (const file of patches) {
    const rawPatch = readFileSync(join(ROOT, "patches", file), "utf8")
    const textField = (name: string): string => {
      const triple = rawPatch.match(new RegExp(`^${name}\\s*=\\s*'''([\\s\\S]*?)'''`, "m"))
      if (triple) return triple[1] ?? ""
      const quoted = rawPatch.match(new RegExp(`^${name}\\s*=\\s*"([^"]*)"`, "m"))
      return quoted?.[1] ?? ""
    }
    const numberField = (name: string): number | undefined => {
      const value = rawPatch.match(new RegExp(`^${name}\\s*=\\s*(\\d+)`, "m"))?.[1]
      return value ? Number(value) : undefined
    }
    const patch = {
      locator_pattern: textField("locator_pattern"),
      locator_kind: textField("locator_kind") as "literal" | "regex",
      expected_matches: numberField("expected_matches"),
      replacement: textField("replacement"),
    }
    const expectedMatches = patch.expected_matches ?? 1
    if (patch.locator_kind === "literal") {
      const actualMatches = body.split(patch.locator_pattern).length - 1
      expect(actualMatches).toBe(expectedMatches)
      body = body.split(patch.locator_pattern).join(patch.replacement)
    } else {
      const pattern = new RegExp(patch.locator_pattern, "g")
      const actualMatches = body.match(pattern)?.length ?? 0
      expect(actualMatches).toBe(expectedMatches)
      body = body.replace(pattern, patch.replacement)
    }
  }

  writeFileSync(output, body)
}

test("patched bundle exposes --hide-builtin-footer and wires it into statusLine.hideBuiltinFooter", () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  renderStatuslineFooterPatches(TARGET_BUNDLE, patchedBundle)

  const patched = readFileSync(patchedBundle, "utf8")
  expect(patched).toContain("--hide-builtin-footer")
  expect(patched).toContain("hideBuiltinFooter:!0")
  expect(patched).toContain(
    "Hp=Y_((I_)=>I_.settings.hideBuiltinFooter)||Y_((I_)=>I_.settings.statusLine?.hideBuiltinFooter)||nH?void 0:Ws7(jH,qH)",
  )
  expect(patched).toContain("let A=rH?null:T,z;")
  expect(patched).toContain(
    'k?null:tq.createElement(B,{flexDirection:"row",flexWrap:"wrap",marginTop:1,width:"100%"}',
  )

  const help = run(["bun", patchedBundle, "--help"])
  expect(help.exitCode).toBe(0)
  expect(help.stdout).toContain("--hide-builtin-footer")
})
