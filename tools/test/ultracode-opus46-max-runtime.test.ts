import { afterEach, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries, patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.199"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")
const ULTRACODE_PATCH = join(ROOT, "patches", "ultracode-opus46-max.toml")
const OPUS_46 = "claude-opus-4-6"

const ultracodePatches = loadPatchEntriesFromFile(ULTRACODE_PATCH)
const testUltracodeRuntime =
  TARGET_VERSION === "2.1.208" && ultracodePatches.some((patch) => patchApplies(patch, TARGET_VERSION))

const tempDirs: string[] = []

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true })
  }
})

function makeTempDir(prefix: string): string {
  const dir = mkdtempSync(join(tmpdir(), prefix))
  tempDirs.push(dir)
  return dir
}

function replaceOnce(source: string, needle: string, replacement: string): string {
  const index = source.indexOf(needle)
  if (index === -1) throw new Error(`missing harness needle: ${needle}`)
  if (source.indexOf(needle, index + needle.length) !== -1) {
    throw new Error(`ambiguous harness needle: ${needle}`)
  }
  return `${source.slice(0, index)}${replacement}${source.slice(index + needle.length)}`
}

function injectUltracodeHarness(source: string): string {
  let harness = replaceOnce(
    source,
    'function EE(){if(hqt())return!1;if(!LNn())return!1;let{available:e,defaultOn:t}=WTi();if(!e)return!1;return alh()??t}',
    "function EE(){return!0}",
  )
  harness = replaceOnce(
    harness,
    "function ki(){let e=i9();if(e!==void 0&&e!==null)return Zo(e);return SE()}",
    `function ki(){return"${OPUS_46}"}`,
  )
  harness = replaceOnce(
    harness,
    "function a3e(e,t){let r=yqt(t);return r===null||dXe(e)<=dXe(r)}",
    "function a3e(){return!0}",
  )
  return replaceOnce(
    harness,
    "qKb();",
    'try{zqs();let __acc_result=Es_();process.stdout.write(JSON.stringify(__acc_result)+"\\n")}catch(__acc_error){console.error(__acc_error?.stack??String(__acc_error));process.exit(1)}',
  )
}

function renderUltracodeHarness(input: string, output: string): void {
  const source = readFileSync(input, "utf8")
  const patched = applyPatchEntries(source, ultracodePatches, TARGET_VERSION).source
  writeFileSync(output, injectUltracodeHarness(patched))
}

test.skipIf(!testUltracodeRuntime)(
  "patched ultracode command uses max for Opus 4.6 instead of rejecting xhigh",
  async () => {
    expect(existsSync(TARGET_BUNDLE)).toBe(true)

    const dir = makeTempDir("patched-cc-ultracode-runtime-")
    const harnessBundle = join(dir, "cli.ultracode-harness.js")
    renderUltracodeHarness(TARGET_BUNDLE, harnessBundle)

    const proc = Bun.spawn({
      cmd: [process.execPath, harnessBundle],
      env: {
        ...process.env,
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
        CLAUDE_CODE_SKIP_ONBOARDING: "1",
        CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      },
      stdout: "pipe",
      stderr: "pipe",
    })

    const [stdout, stderr, exitCode] = await Promise.all([
      proc.stdout ? new Response(proc.stdout).text() : Promise.resolve(""),
      proc.stderr ? new Response(proc.stderr).text() : Promise.resolve(""),
      proc.exited,
    ])

    expect(stderr).toBe("")
    expect(exitCode).toBe(0)

    const result = JSON.parse(stdout) as {
      message?: string
      effortUpdate?: { value?: string; ultracode?: boolean }
    }
    expect(result.message).toContain("Set effort level to ultracode")
    expect(result.message).toContain("max + dynamic workflow orchestration")
    expect(result.message).not.toContain("doesn't support")
    expect(result.effortUpdate).toEqual({ value: "max", ultracode: true })
  },
  120000,
)
