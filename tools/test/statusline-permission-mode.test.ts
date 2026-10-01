import { afterAll, expect, test } from "bun:test"
import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyAstTransformPatches } from "../lib/ast-transform-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { activePatch } from "./helpers/patch-contract"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"
import { statuslinePermissionModeSmoke } from "./statusline-permission-mode-tui-smoke"

const root = join(import.meta.dir, "..", "..")
const version = targetVersion()
const entries = loadPatchEntriesFromFile(join(root, "patches", "statusline-footer-control.toml"))
const temp = mkdtempSync(join(tmpdir(), "patched-cc-statusline-mode-test-"))
afterAll(() => rmSync(temp, { recursive: true, force: true }))

test("statusline mode survives an undefined or conflicting hook payload through JSON serialization", () => {
  for (const platform of ["darwin-arm64", "linux-x64"]) {
    const patch = activePatch(entries, version, platform, "statusline-json-permission-mode-")
    if (!patch.ast || !patch.transform) throw new Error(`${patch.name}: expected AST transform`)
    // Repo-owned shape fixture: the native hook payload precedes statusline fields.
    const fixture =
      'function build({session,permissionMode:mode,hook}){return{...hook,session_name:session,model:{id:"fixture"},context_window:{},fast_mode:false}}'
    const source = applyAstTransformPatches(fixture, [
      {
        name: patch.name,
        ast: patch.ast,
        transform: patch.transform,
        expectedMatches: 1,
      },
    ]).source
    const build = new Function(`${source};return build`)() as (input: {
      session: string
      permissionMode: string
      hook: { permission_mode?: string }
    }) => unknown
    for (const mode of ["default", "acceptEdits", "plan", "auto", "bypassPermissions"]) {
      for (const hookMode of [undefined, "stale-hook-mode"]) {
        const result = JSON.parse(
          JSON.stringify(build({ session: "fixture", permissionMode: mode, hook: { permission_mode: hookMode } })),
        )
        expect(result.permission_mode).toBe(mode)
      }
    }
  }
})

test("rendered statusline exports and refreshes permission modes with the built-in footer hidden", async () => {
  const bundle = await renderRunnableBundle({ root, version, outDir: join(temp, "bundle"), platforms: "host" })
  await statuslinePermissionModeSmoke(bundle)
}, 180_000)
