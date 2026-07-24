import { afterEach, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries, patchApplies } from "../../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.199"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")
const ULTRACODE_PATCH = join(ROOT, "patches", "ultracode-opus46-max.toml")
const OPUS_46 = "claude-opus-4-6"

const ultracodePatches = loadPatchEntriesFromFile(ULTRACODE_PATCH)
const testUltracodeRuntime =
  (TARGET_VERSION === "2.1.208" ||
    TARGET_VERSION === "2.1.210" ||
    TARGET_VERSION === "2.1.212" ||
    TARGET_VERSION === "2.1.215") &&
  ultracodePatches.some((patch) => patchApplies(patch, TARGET_VERSION))

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
  if (TARGET_VERSION === "2.1.215") {
    let harness = replaceOnce(
      source,
      "function qA(){if(GVt())return!1;if(!uqn())return!1;let{available:e,defaultOn:t}=aOi();if(!e)return!1;return rL()?.settings.enableWorkflows??t}",
      "function qA(){return!0}",
    )
    harness = replaceOnce(
      harness,
      "function yi(){let e=k3();if(e!==void 0&&e!==null)return ri(e);return QE()}",
      `function yi(){return"${OPUS_46}"}`,
    )
    harness = replaceOnce(
      harness,
      "function A6e(e,t){let r=VVt(t);return r===null||ott(e)<=ott(r)}",
      "function A6e(){return!0}",
    )
    return replaceOnce(
      harness,
      "rDS();",
      'try{MIs();let __acc_result=q5_();process.stdout.write(JSON.stringify(__acc_result)+"\\n")}catch(__acc_error){console.error(__acc_error?.stack??String(__acc_error));process.exit(1)}',
    )
  }

  if (TARGET_VERSION === "2.1.212") {
    let harness = replaceOnce(
      source,
      "function KA(){if(m8t())return!1;if(!z4n())return!1;let{available:e,defaultOn:t}=Iki();if(!e)return!1;return rL()?.settings.enableWorkflows??t}",
      "function KA(){return!0}",
    )
    harness = replaceOnce(
      harness,
      "function xi(){let e=g3();if(e!==void 0&&e!==null)return oi(e);return KE()}",
      `function xi(){return"${OPUS_46}"}`,
    )
    harness = replaceOnce(
      harness,
      "function v9e(e,t){let r=g8t(t);return r===null||eet(e)<=eet(r)}",
      "function v9e(){return!0}",
    )
    return replaceOnce(
      harness,
      "hST();",
      'try{TOp();let __acc_result=f2_();process.stdout.write(JSON.stringify(__acc_result)+"\\n")}catch(__acc_error){console.error(__acc_error?.stack??String(__acc_error));process.exit(1)}',
    )
  }

  if (TARGET_VERSION === "2.1.210") {
    let harness = replaceOnce(
      source,
      "function wE(){if(Pjt())return!1;if(!zFn())return!1;let{available:e,defaultOn:t}=xvi();if(!e)return!1;return kgh()??t}",
      "function wE(){return!0}",
    )
    harness = replaceOnce(
      harness,
      "function Hi(){let e=g9();if(e!==void 0&&e!==null)return ri(e);return CE()}",
      `function Hi(){return"${OPUS_46}"}`,
    )
    harness = replaceOnce(
      harness,
      "function j4e(e,t){let r=Ljt(t);return r===null||JXe(e)<=JXe(r)}",
      "function j4e(){return!0}",
    )
    return replaceOnce(
      harness,
      "wiT();",
      'try{lEp();let __acc_result=GMy();process.stdout.write(JSON.stringify(__acc_result)+"\\n")}catch(__acc_error){console.error(__acc_error?.stack??String(__acc_error));process.exit(1)}',
    )
  }

  let harness = replaceOnce(
    source,
    "function EE(){if(hqt())return!1;if(!LNn())return!1;let{available:e,defaultOn:t}=WTi();if(!e)return!1;return alh()??t}",
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
