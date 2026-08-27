import { afterEach, expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { targetVersion } from "../lib/target"
import { type ClaudeApiRequest, type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()
const CUSTOM_MODEL_1 = "provider/custom-model-1"
const CUSTOM_MODEL_2 = "provider/custom-model-2"

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

function requestBody(request: ClaudeApiRequest): {
  model?: string
  output_config?: { effort?: string }
} {
  if (typeof request.jsonBody !== "object" || request.jsonBody === null) {
    throw new Error("captured request has no JSON body")
  }
  return request.jsonBody as { model?: string; output_config?: { effort?: string } }
}

async function runPrint(
  bundle: string,
  home: string,
  stub: ClaudeApiStub,
  model: string,
): Promise<ClaudeApiRequest> {
  const before = stub.requests.length
  const proc = Bun.spawn({
    cmd: [
      process.execPath,
      bundle,
      "--print",
      "--bare",
      "--model",
      model,
      "--max-turns",
      "1",
      "--no-session-persistence",
      "custom model effort runtime test",
    ],
    cwd: home,
    env: {
      ...process.env,
      HOME: home,
      CLAUDE_CONFIG_DIR: join(home, ".claude"),
      ANTHROPIC_API_KEY: "stub-api-key",
      ANTHROPIC_BASE_URL: stub.baseUrl,
      ANTHROPIC_CUSTOM_MODEL_OPTION: CUSTOM_MODEL_1,
      ANTHROPIC_CUSTOM_MODEL_OPTION_NAME: "Custom One",
      ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES: "effort",
      ANTHROPIC_CUSTOM_MODEL_OPTION_EFFORT_LEVEL: "medium",
      ANTHROPIC_CUSTOM_MODEL_OPTION_2: CUSTOM_MODEL_2,
      ANTHROPIC_CUSTOM_MODEL_OPTION_2_NAME: "Custom Two",
      ANTHROPIC_CUSTOM_MODEL_OPTION_2_SUPPORTED_CAPABILITIES: "effort",
      ANTHROPIC_CUSTOM_MODEL_OPTION_2_EFFORT_LEVEL: "high",
      CLAUDE_CODE_EFFORT_LEVEL: "low",
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      DISABLE_PROMPT_CACHING: "1",
    },
    stdout: "pipe",
    stderr: "pipe",
  })

  const [exitCode, stdout, stderr] = await Promise.all([
    proc.exited,
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ])
  if (exitCode !== 0) throw new Error(`rendered bundle exited ${exitCode}\n${stdout}\n${stderr}`)

  const request = stub.requests
    .slice(before)
    .reverse()
    .find((candidate) => candidate.path.endsWith("/messages"))
  if (!request) throw new Error(`rendered bundle did not reach the message stub\n${stdout}\n${stderr}`)
  return request
}

test("custom model slots keep their efforts separate from each other and global effort", async () => {
  const work = makeTempDir("patched-cc-custom-model-2-")
  const home = join(work, "home")
  mkdirSync(join(home, ".claude"), { recursive: true })
  const bundle = await renderRunnableBundle({
    root: ROOT,
    version: TARGET_VERSION,
    outDir: join(work, "rendered"),
    patchFiles: ["custom-model-slots.toml"],
  })

  const stub = await startClaudeApiStub({ text: "custom model effort ok" })
  stubs.push(stub)

  const customRequest1 = requestBody(await runPrint(bundle, home, stub, CUSTOM_MODEL_1))
  expect(customRequest1.model).toBe(CUSTOM_MODEL_1)
  expect(customRequest1.output_config?.effort).toBe("medium")

  const customRequest2 = requestBody(await runPrint(bundle, home, stub, CUSTOM_MODEL_2))
  expect(customRequest2.model).toBe(CUSTOM_MODEL_2)
  expect(customRequest2.output_config?.effort).toBe("high")

  const globalRequest = requestBody(await runPrint(bundle, home, stub, "claude-sonnet-4-6"))
  expect(globalRequest.model).toBe("claude-sonnet-4-6")
  expect(globalRequest.output_config?.effort).toBe("low")
}, 120000)
