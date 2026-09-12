import { afterAll, expect, test } from "bun:test"
import { cpSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { writeGraphCredentialHarness } from "./helpers/keychain-graph-harness"
import { activePatch } from "./helpers/patch-contract"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const root = join(import.meta.dir, "..", "..")
const version = targetVersion()
const scratch = mkdtempSync(join(tmpdir(), "pcc-keychain-graph-helper-test-"))
afterAll(() => rmSync(scratch, { recursive: true, force: true }))
const renderedDir = join(scratch, "rendered")
await renderRunnableBundle({ root, version, outDir: renderedDir, patchFiles: ["explicit-macos-keychain.toml"] })
const rendered = join(renderedDir, "graph.patched", "darwin-arm64")

function fixture(name: string): { renderDir: string; graph: string; outDir: string; root: string; version: string } {
  const renderDir = join(scratch, name)
  const graph = join(renderDir, "graph.patched", "darwin-arm64")
  mkdirSync(graph, { recursive: true })
  return { renderDir, graph, outDir: renderDir, root, version }
}

test("graph harness refuses an absent native owner", () => {
  expect(() => writeGraphCredentialHarness(fixture("missing"))).toThrow(
    "Expected one native propagate-write-failures, found 0",
  )
})

test("graph harness rejects duplicate native owners before instrumentation", () => {
  const options = fixture("duplicate")
  const entries = loadPatchEntriesFromFile(join(root, "patches", "explicit-macos-keychain.toml"))
  const patch = activePatch(entries, version, "darwin-arm64", "explicit-macos-keychain-propagate-write-failures-")
  const marker = patch.ast?.match.strings?.[0]
  if (!marker) throw new Error("Missing OAuth native semantic marker")
  const owner = readdirSync(rendered).find(
    (file) => file.endsWith(".js") && readFileSync(join(rendered, file), "utf8").includes(marker),
  )
  if (!owner) throw new Error("Missing rendered OAuth owner")
  cpSync(join(rendered, owner), join(options.graph, "owner.js"))
  cpSync(join(rendered, owner), join(options.graph, "duplicate.js"))
  expect(() => writeGraphCredentialHarness(options)).toThrow("Expected one native propagate-write-failures, found 2")
  expect(readFileSync(join(options.graph, "owner.js"), "utf8")).not.toContain("__pcc_")
})

test("graph harness observes native prefetch controls without accessing an OS Keychain", () => {
  const options = fixture("runtime")
  cpSync(rendered, options.graph, { recursive: true })
  const path = writeGraphCredentialHarness(options)
  expect(writeGraphCredentialHarness(options)).toBe(path)
  const home = join(options.renderDir, "home")
  mkdirSync(home, { recursive: true })
  writeFileSync(join(home, "settings.json"), "{}")
  const run = (extra: Record<string, string | undefined>) => {
    const result = Bun.spawnSync([process.execPath, path], {
      cwd: home,
      env: {
        ...process.env,
        HOME: home,
        CLAUDE_CONFIG_DIR: home,
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "prefetch",
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
        CLAUDE_CODE_KEYCHAIN_PATH: undefined,
        PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS: undefined,
        ...extra,
      },
      stdout: "pipe",
      stderr: "pipe",
      timeout: 30000,
    })
    expect(result.stderr.toString()).toBe("")
    expect(result.exitCode).toBe(0)
    return JSON.parse(result.stdout.toString()) as { calls: Array<{ file: string; args: string[] }> }
  }
  const control = run({})
  expect(control.calls).toHaveLength(2)
  for (const call of control.calls) {
    expect(call.file).toBe("security")
    expect(call.args[0]).toBe("find-generic-password")
  }
  expect(run({ CLAUDE_CODE_KEYCHAIN_PATH: join(home, "synthetic.keychain-db") }).calls).toEqual([])
  expect(run({ PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS: "1" }).calls).toEqual([])
}, 60000)
