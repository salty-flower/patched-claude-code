import { afterEach, expect, test } from "bun:test"
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  hashSectionVector,
  type PromptManifest,
  type SystemPromptBridgeOutput,
} from "../../runtime/system-prompt-overrides"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { writeReleasePayload } from "../lib/release-payload"
import { type ClaudeApiRequest, type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.217"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")
const PATCH_FILE = join(ROOT, "patches", "system-prompt-section-overrides.toml")
const tempDirs: string[] = []
const stubs: ClaudeApiStub[] = []

afterEach(() => {
  for (const stub of stubs.splice(0)) stub.stop()
  for (const dir of tempDirs.splice(0)) rmSync(dir, { recursive: true, force: true })
})

function makeTempDir(prefix: string): string {
  const dir = mkdtempSync(join(tmpdir(), prefix))
  tempDirs.push(dir)
  return dir
}

function renderBridgeOnly(output: string): void {
  const source = readFileSync(TARGET_BUNDLE, "utf8")
  const patches = loadPatchEntriesFromFile(PATCH_FILE)
  writeFileSync(output, applyPatchEntries(source, patches, TARGET_VERSION).source)
}

function configureHome(home: string, baseUrl: string): Record<string, string> {
  const claudeConfig = join(home, ".claude")
  mkdirSync(claudeConfig, { recursive: true })
  const settings = { env: { ANTHROPIC_BASE_URL: baseUrl }, theme: "dark" }
  writeFileSync(join(claudeConfig, "settings.json"), `${JSON.stringify(settings, null, 2)}\n`)
  writeFileSync(
    join(claudeConfig, ".claude.json"),
    `${JSON.stringify(
      {
        customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
        env: { ANTHROPIC_BASE_URL: baseUrl },
        hasCompletedOnboarding: true,
        projects: { [home]: { hasTrustDialogAccepted: true } },
        theme: "dark",
      },
      null,
      2,
    )}\n`,
  )
  return {
    HOME: home,
    CLAUDE_CONFIG_DIR: claudeConfig,
    ANTHROPIC_API_KEY: "stub-api-key",
    ANTHROPIC_BASE_URL: baseUrl,
    CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
    CLAUDE_CODE_SKIP_ONBOARDING: "1",
    CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
    DISABLE_PROMPT_CACHING: "1",
  }
}

async function runPrint(
  command: string[],
  cwd: string,
  env: Record<string, string>,
): Promise<{ exitCode: number; stdout: string; stderr: string }> {
  const process = Bun.spawn({
    cmd: [...command, "--print", "--model", "sonnet", "--max-turns", "1", "prompt override runtime test"],
    cwd,
    env: { ...globalThis.process.env, ...env },
    stdout: "pipe",
    stderr: "pipe",
  })
  const [exitCode, stdout, stderr] = await Promise.all([
    process.exited,
    new Response(process.stdout).text(),
    new Response(process.stderr).text(),
  ])
  return { exitCode, stdout, stderr }
}

function messageRequests(stub: ClaudeApiStub): ClaudeApiRequest[] {
  return stub.requests.filter((request) => request.path.endsWith("/messages"))
}

function requestSystem(request: ClaudeApiRequest): Array<{ type: string; text: string }> {
  const body = request.jsonBody as { system?: unknown }
  if (!Array.isArray(body.system)) throw new Error("captured request has no system array")
  return body.system as Array<{ type: string; text: string }>
}

function diagnosticFromStderr(stderr: string): SystemPromptBridgeOutput {
  const line = stderr
    .split("\n")
    .find(
      (candidate) => candidate.startsWith("[system-prompt-overrides] {") && candidate.includes("effectiveVectorSha256"),
    )
  if (!line) throw new Error(`prompt override diagnostic missing from stderr:\n${stderr}`)
  return JSON.parse(line.slice("[system-prompt-overrides] ".length)) as SystemPromptBridgeOutput
}

test("rendered bridge preserves no-op requests, applies one override, and rejects stale input before network", async () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)
  const work = makeTempDir("patched-cc-prompt-runtime-")
  const payload = join(work, "payload")
  const home = join(work, "home")
  const promptRoot = join(work, "prompts")
  const bundle = join(work, "cli.bridge.js")
  mkdirSync(home, { recursive: true })
  renderBridgeOnly(bundle)
  writeReleasePayload({
    root: ROOT,
    version: TARGET_VERSION,
    releaseId: "runtime.test",
    input: bundle,
    outDir: payload,
  })

  const stub = await startClaudeApiStub({ text: "stub runtime ok" })
  stubs.push(stub)
  const env = configureHome(home, stub.baseUrl)
  const directResult = await runPrint([process.execPath, join(payload, "cli.js")], home, env)
  expect(directResult.exitCode).toBe(0)
  const directRequest = messageRequests(stub).at(-1)
  if (!directRequest) throw new Error("direct no-helper run did not reach the stub")

  const exportResult = await runPrint([join(payload, "bin", "claude-patched")], home, {
    ...env,
    PATCHED_CLAUDE_CODE_PROMPT_DIR: promptRoot,
    PATCHED_CLAUDE_CODE_PROMPT_EXPORT: "1",
  })
  expect(exportResult.exitCode).toBe(0)
  const exportRequest = messageRequests(stub).at(-1)
  if (!exportRequest) throw new Error("helper export run did not reach the stub")
  expect(requestSystem(exportRequest)).toEqual(requestSystem(directRequest))

  const manifestPath = join(promptRoot, "manifest.json")
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as PromptManifest
  const selected = manifest.sections[0]
  if (!selected) throw new Error("exported prompt manifest has no sections")
  const overrideMarker = "PATCHED_CC_SECTION_OVERRIDE_RUNTIME_MARKER"
  writeFileSync(join(promptRoot, "overrides", `${selected.id}.md`), `# Local override\n${overrideMarker}\n`)

  const overrideResult = await runPrint([join(payload, "bin", "claude-patched")], home, {
    ...env,
    PATCHED_CLAUDE_CODE_PROMPT_DIR: promptRoot,
    PATCHED_CLAUDE_CODE_PROMPT_DIAGNOSTICS: "1",
  })
  expect(overrideResult.exitCode).toBe(0)
  const overrideRequest = messageRequests(stub).at(-1)
  if (!overrideRequest) throw new Error("override run did not reach the stub")
  const effectiveSystem = requestSystem(overrideRequest)
  expect(effectiveSystem.some((block) => block.text.includes(overrideMarker))).toBe(true)
  const diagnostic = diagnosticFromStderr(overrideResult.stderr)
  expect(diagnostic.sectionDiff.filter((section) => section.changed).map((section) => section.id)).toEqual([
    selected.id,
  ])
  const expectedEffectiveSections = manifest.sections.map((section) =>
    section.id === selected.id
      ? `# Local override\n${overrideMarker}\n`
      : readFileSync(join(promptRoot, section.file), "utf8"),
  )
  expect(effectiveSystem.at(-1)?.text).toBe(expectedEffectiveSections.join("\n\n"))
  expect(diagnostic.effectiveVectorSha256).toBe(hashSectionVector(expectedEffectiveSections))

  const staleManifest = { ...manifest, target: { ...manifest.target, bundleSha256: "sha256-stale" } }
  writeFileSync(manifestPath, `${JSON.stringify(staleManifest, null, 2)}\n`)
  const requestsBeforeFailure = stub.requests.length
  const staleResult = await runPrint([join(payload, "bin", "claude-patched")], home, {
    ...env,
    PATCHED_CLAUDE_CODE_PROMPT_DIR: promptRoot,
  })
  expect(staleResult.exitCode).not.toBe(0)
  const staleOutput = `${staleResult.stdout}\n${staleResult.stderr}`
  expect(staleOutput).toContain(manifestPath)
  expect(staleOutput).toContain("bundle SHA-256 mismatch")
  expect(stub.requests).toHaveLength(requestsBeforeFailure)
}, 180000)

test("packaged launcher rejects a bundle that no longer matches its release manifest", async () => {
  const work = makeTempDir("patched-cc-prompt-bundle-hash-")
  const input = join(work, "input.js")
  const payload = join(work, "payload")
  writeFileSync(input, 'process.stdout.write("bundle ran\\n")\n')
  writeReleasePayload({
    root: ROOT,
    version: TARGET_VERSION,
    releaseId: "bundle-hash.test",
    input,
    outDir: payload,
  })
  const packagedBundle = join(payload, "cli.js")
  writeFileSync(packagedBundle, `${readFileSync(packagedBundle, "utf8")}/* tampered */\n`)

  const result = await runPrint([join(payload, "bin", "claude-patched")], work, { HOME: work })
  expect(result.exitCode).not.toBe(0)
  expect(`${result.stdout}\n${result.stderr}`).toContain("rendered bundle SHA-256 mismatch")
  expect(result.stdout).not.toContain("bundle ran")
})
