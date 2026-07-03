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
  TARGET_VERSION === "2.1.199" && ultracodePatches.some((patch) => patchApplies(patch, TARGET_VERSION))

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
    'function Sb(){if(KOn())return!1;if(!vji())return!1;let{available:e,defaultOn:t}=Eeo();if(!e)return!1;return qVd()??t}',
    "function Sb(){return!0}",
  )
  harness = replaceOnce(
    harness,
    "function Hs(){let e=j6();if(e!==void 0&&e!==null)return $o(e);return P_()}",
    `function Hs(){return"${OPUS_46}"}`,
  )
  harness = replaceOnce(
    harness,
    "function X6e(e,t){let n=ect(t);return n===null||HHe(e)<=HHe(n)}",
    "function X6e(){return!0}",
  )
  const entrypointMatches = [...harness.matchAll(/\b([A-Za-z_$][\w$]*Zf)\(\);/g)]
  const entrypointMatch = entrypointMatches.at(-1)
  if (!entrypointMatch?.[0]) throw new Error("could not locate CLI entrypoint call")
  if (entrypointMatches.length > 1) {
    const names = entrypointMatches.map((match) => match[1]).join(", ")
    throw new Error(`expected exactly one CLI entrypoint call, found ${entrypointMatches.length}: ${names}`)
  }
  return harness.replace(
    entrypointMatch[0],
    'try{l$();let __acc_result=Epf();process.stdout.write(JSON.stringify(__acc_result)+"\\n")}catch(__acc_error){console.error(__acc_error?.stack??String(__acc_error));process.exit(1)}',
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
    expect(result.message).toContain("max effort + dynamic workflow orchestration")
    expect(result.message).not.toContain("doesn't support")
    expect(result.effortUpdate).toEqual({ value: "max", ultracode: true })
  },
  120000,
)
