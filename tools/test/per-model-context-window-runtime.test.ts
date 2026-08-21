import { afterAll, expect, test } from "bun:test"
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")
const PATCH_FILE = join(ROOT, "patches", "per-model-context-window.toml")
const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-model-context-"))

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function injectContextWindowHarness(source: string): string {
  const entrypointMatches = [...source.matchAll(/\b([A-Za-z_$][\w$]*\(\));var __acc_linux_[A-Za-z_$][\w$]*=/g)]
  const entrypointMatch = entrypointMatches.at(-1)
  if (!entrypointMatch?.[1] || entrypointMatch.index === undefined) {
    throw new Error("could not locate CLI entrypoint call")
  }
  if (entrypointMatches.length !== 1) {
    throw new Error(`expected one CLI entrypoint call, found ${entrypointMatches.length}`)
  }

  const start = entrypointMatch.index + entrypointMatch[0].indexOf(entrypointMatch[1])
  const harness =
    'HP();process.stdout.write(JSON.stringify({alpha:jCd("alpha/model",[]),beta:jCd("beta-model",[]),tagged:jCd("alpha/model[1m]",[]),fallback:jCd("unconfigured-model",[])}));process.exit(0);'
  return `${source.slice(0, start)}${harness}${source.slice(start + entrypointMatch[1].length)}`
}

test("model-specific context windows follow the active model", async () => {
  const source = readFileSync(TARGET_BUNDLE, "utf8")
  const patches = loadPatchEntriesFromFile(PATCH_FILE)
  const patched = applyPatchEntries(source, patches, TARGET_VERSION).source
  const harnessPath = join(tempDir, "context-window-harness.js")
  writeFileSync(harnessPath, injectContextWindowHarness(patched))

  const proc = Bun.spawn({
    cmd: [process.execPath, harnessPath],
    env: {
      ...process.env,
      CLAUDE_CODE_MAX_CONTEXT_TOKENS_alpha_model: "131072",
      CLAUDE_CODE_MAX_CONTEXT_TOKENS_beta_model: "262144",
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
    },
    stdout: "pipe",
    stderr: "pipe",
  })
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited,
  ])

  expect(exitCode).toBe(0)
  expect(stderr).toBe("")
  expect(JSON.parse(stdout)).toEqual({
    alpha: 131072,
    beta: 262144,
    tagged: 131072,
    fallback: 200000,
  })
}, 30000)
