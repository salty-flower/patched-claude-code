import { afterEach, expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { targetVersion } from "../lib/target"
import { type ClaudeApiRequest, type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()
const TEST_SESSION_ID = "11111111-1111-4111-8111-111111111111"
const TEST_PROJECT_DIR_NAME = "patched-cc-resume-1m-test"
const TRANSCRIPT_MODEL = "claude-opus-5-5"
const DEFAULT_OPUS_MODEL = `${TRANSCRIPT_MODEL}[1m]`

const tempDirs: string[] = []
const stubs: ClaudeApiStub[] = []

afterEach(() => {
  for (const stub of stubs.splice(0)) stub.stop()
  for (const dir of tempDirs.splice(0)) rmSync(dir, { recursive: true, force: true })
})

type RequestBody = {
  model?: string
}

function makeTempDir(prefix: string): string {
  const dir = mkdtempSync(join(tmpdir(), prefix))
  tempDirs.push(dir)
  return dir
}

function writeResumeTranscript(home: string): void {
  const projectDir = join(home, ".claude", "projects", TEST_PROJECT_DIR_NAME)
  mkdirSync(projectDir, { recursive: true })
  const userUuid = "22222222-2222-4222-8222-222222222222"
  const assistantUuid = "33333333-3333-4333-8333-333333333333"
  const transcript = [
    {
      type: "user",
      uuid: userUuid,
      parentUuid: null,
      sessionId: TEST_SESSION_ID,
      timestamp: "2026-09-24T00:00:00.000Z",
      message: { role: "user", content: "previous prompt" },
    },
    {
      type: "assistant",
      uuid: assistantUuid,
      parentUuid: userUuid,
      sessionId: TEST_SESSION_ID,
      timestamp: "2026-09-24T00:00:01.000Z",
      requestId: "req_previous",
      message: {
        id: "msg_previous",
        type: "message",
        role: "assistant",
        model: TRANSCRIPT_MODEL,
        content: [{ type: "text", text: "previous response" }],
        stop_reason: "end_turn",
        stop_sequence: null,
        usage: { input_tokens: 1, output_tokens: 1 },
      },
    },
  ]
  writeFileSync(
    join(projectDir, `${TEST_SESSION_ID}.jsonl`),
    `${transcript.map((row) => JSON.stringify(row)).join("\n")}\n`,
  )
}

async function runResumedRequest(bundle: string, stub: ClaudeApiStub, home: string): Promise<ClaudeApiRequest> {
  const configDir = join(home, ".claude")
  mkdirSync(configDir, { recursive: true })
  writeResumeTranscript(home)
  writeFileSync(join(configDir, "settings.json"), "{}\n")
  writeFileSync(
    join(configDir, ".claude.json"),
    `${JSON.stringify(
      {
        customApiKeyResponses: { approved: ["test-api-key"], rejected: [] },
        hasCompletedOnboarding: true,
        projects: { [home]: { hasTrustDialogAccepted: true } },
        theme: "dark",
      },
      null,
      2,
    )}\n`,
  )
  const envWithoutAnthropicOverrides = Object.fromEntries(
    Object.entries(process.env).filter(([name]) => !name.startsWith("ANTHROPIC_")),
  )
  const proc = Bun.spawn({
    cmd: [
      process.execPath,
      "--preload",
      resolve(ROOT, "runtime", "bun-ant-cell-segmenter.ts"),
      "--preload",
      resolve(import.meta.dir, "helpers", "redirect-first-party-api-to-stub.ts"),
      bundle,
      "--print",
      "--max-turns",
      "1",
      "--no-session-persistence",
      "--resume",
      TEST_SESSION_ID,
      "continue",
    ],
    cwd: home,
    env: {
      ...envWithoutAnthropicOverrides,
      HOME: home,
      CLAUDE_CONFIG_DIR: configDir,
      CLAUDE_CODE_PROJECT_DIR_NAME: TEST_PROJECT_DIR_NAME,
      CLAUDE_API_STUB_BASE_URL: stub.baseUrl,
      ANTHROPIC_API_KEY: "test-api-key",
      ANTHROPIC_DEFAULT_OPUS_MODEL: DEFAULT_OPUS_MODEL,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      DISABLE_PROMPT_CACHING: "1",
    },
    stdout: "pipe",
    stderr: "pipe",
  })
  const stdout = proc.stdout ? new Response(proc.stdout).text() : Promise.resolve("")
  const stderr = proc.stderr ? new Response(proc.stderr).text() : Promise.resolve("")

  let request: ClaudeApiRequest
  try {
    const result = await Promise.race([
      stub
        .waitForRequest((request) => request.path.endsWith("/messages"), 30_000)
        .then((request) => ({
          kind: "request" as const,
          request,
        })),
      proc.exited.then(async (exitCode) => ({
        kind: "exit" as const,
        exitCode,
        stdout: await stdout,
        stderr: await stderr,
      })),
    ])
    if (result.kind === "exit") {
      throw new Error(
        `Claude exited ${result.exitCode} before reaching the API stub\n${result.stdout}\n${result.stderr}`,
      )
    }
    request = result.request
  } finally {
    proc.kill()
    await proc.exited
  }
  await Promise.all([stdout, stderr])
  return request
}

function requestBody(request: ClaudeApiRequest): RequestBody {
  if (typeof request.jsonBody !== "object" || request.jsonBody === null || Array.isArray(request.jsonBody)) {
    throw new Error("Claude API stub received a non-object request body")
  }
  return request.jsonBody as RequestBody
}

function hasLongContextBeta(request: ClaudeApiRequest): boolean {
  const beta = request.headers["anthropic-beta"]
  return Array.isArray(beta)
    ? beta.some((value) => value.includes("context-1m-2025-08-07"))
    : typeof beta === "string" && beta.includes("context-1m-2025-08-07")
}

test.skipIf(TARGET_VERSION !== "2.1.281")(
  "resume preserves the configured Opus 1m environment default",
  async () => {
    const dir = makeTempDir("patched-cc-resume-1m-runtime-")
    const unpatchedBundle = await renderRunnableBundle({
      root: ROOT,
      version: TARGET_VERSION,
      outDir: join(dir, "rendered-unpatched"),
      patchFiles: [],
      platforms: "host",
    })
    const patchedBundle = await renderRunnableBundle({
      root: ROOT,
      version: TARGET_VERSION,
      outDir: join(dir, "rendered-patched"),
      patchFiles: ["resume-1m-model-defaults.toml"],
      platforms: "host",
    })
    const unpatchedStub = await startClaudeApiStub()
    stubs.push(unpatchedStub)
    const unpatchedRequest = await runResumedRequest(unpatchedBundle, unpatchedStub, join(dir, "home-unpatched"))

    const patchedStub = await startClaudeApiStub()
    stubs.push(patchedStub)
    const patchedRequest = await runResumedRequest(patchedBundle, patchedStub, join(dir, "home-patched"))
    expect(requestBody(unpatchedRequest).model).toBe(TRANSCRIPT_MODEL)
    expect(hasLongContextBeta(unpatchedRequest)).toBe(true)
    expect(requestBody(patchedRequest).model).toBe(TRANSCRIPT_MODEL)
    expect(hasLongContextBeta(patchedRequest)).toBe(true)
    expect(hasLongContextBeta(patchedRequest)).toBe(hasLongContextBeta(unpatchedRequest))
  },
  90_000,
)
