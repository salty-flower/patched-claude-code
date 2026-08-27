import { afterEach, expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { targetVersion } from "../lib/target"
import { type ClaudeApiRequest, type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()
const TEST_SESSION_ID = "11111111-1111-4111-8111-111111111111"
const TEST_PROJECT_DIR_NAME = "patched-cc-signature-test"

const tempDirs: string[] = []

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true })
  }
})

type RequestBody = {
  messages?: Array<{ role: string; content: unknown }>
  stream?: boolean
  model?: string
}

function makeTempDir(prefix: string): string {
  const dir = mkdtempSync(join(tmpdir(), prefix))
  tempDirs.push(dir)
  return dir
}

function writeSignedThinkingTranscript(dir: string): string {
  const userUuid = "22222222-2222-4222-8222-222222222222"
  const assistantUuid = "33333333-3333-4333-8333-333333333333"
  const transcript = join(dir, "signed-thinking.jsonl")
  const lines = [
    {
      type: "user",
      uuid: userUuid,
      parentUuid: null,
      sessionId: TEST_SESSION_ID,
      timestamp: "2026-05-26T00:00:00.000Z",
      message: { role: "user", content: "hello" },
    },
    {
      type: "assistant",
      uuid: assistantUuid,
      parentUuid: userUuid,
      sessionId: TEST_SESSION_ID,
      timestamp: "2026-05-26T00:00:01.000Z",
      requestId: "req_old",
      message: {
        id: "msg_old",
        type: "message",
        role: "assistant",
        model: "claude-sonnet-4-6",
        content: [
          { type: "thinking", thinking: "private reasoning", signature: "stale-signature" },
          { type: "redacted_thinking", data: "stale-redacted" },
          { type: "text", text: "hello back" },
        ],
        stop_reason: null,
        stop_sequence: null,
        usage: { input_tokens: 1, output_tokens: 1 },
      },
    },
  ]
  writeFileSync(transcript, `${lines.map((line) => JSON.stringify(line)).join("\n")}\n`)
  return transcript
}

function compareVersions(left: string, right: string): number {
  const parts = (value: string) => value.split(".").map((part) => Number.parseInt(part, 10))
  const leftParts = parts(left)
  const rightParts = parts(right)

  for (let index = 0; index < Math.max(leftParts.length, rightParts.length); index += 1) {
    const leftPart = leftParts[index] ?? 0
    const rightPart = rightParts[index] ?? 0
    if (leftPart > rightPart) return 1
    if (leftPart < rightPart) return -1
  }

  return 0
}

function isVersionBefore(version: string, ceiling: string): boolean {
  return compareVersions(version, ceiling) < 0
}

function hasSignedThinkingBlocks(body: RequestBody): boolean {
  return (body.messages ?? []).some((message) => {
    if (!Array.isArray(message.content)) return false
    return message.content.some((block) => {
      if (!block || typeof block !== "object") return false
      const candidate = block as { type?: unknown; signature?: unknown }
      return candidate.type === "redacted_thinking" || (candidate.type === "thinking" && candidate.signature)
    })
  })
}

function hasAssistantText(body: RequestBody): boolean {
  return (body.messages ?? []).some((message) => {
    if (message.role !== "assistant" || !Array.isArray(message.content)) return false
    return message.content.some((block) => {
      return Boolean(block && typeof block === "object" && "type" in block && block.type === "text")
    })
  })
}

async function runClaudeUntilMessageRequest(
  bundle: string,
  stub: ClaudeApiStub,
  transcriptPath: string,
  home: string,
): Promise<RequestBody> {
  mkdirSync(home, { recursive: true })
  let resumeArg = transcriptPath
  if (!isVersionBefore(TARGET_VERSION, "2.1.234")) {
    const projectDir = join(home, ".claude", "projects", TEST_PROJECT_DIR_NAME)
    mkdirSync(projectDir, { recursive: true })
    writeFileSync(join(projectDir, `${TEST_SESSION_ID}.jsonl`), readFileSync(transcriptPath))
    resumeArg = TEST_SESSION_ID
  }
  const proc = Bun.spawn({
    cmd: [
      process.execPath,
      bundle,
      "--print",
      "--bare",
      "--model",
      "sonnet",
      "--max-turns",
      "1",
      "--no-session-persistence",
      "--resume",
      resumeArg,
      "continue",
    ],
    cwd: home,
    env: {
      ...process.env,
      HOME: home,
      CLAUDE_CONFIG_DIR: join(home, ".claude"),
      CLAUDE_CODE_PROJECT_DIR_NAME: TEST_PROJECT_DIR_NAME,
      ANTHROPIC_API_KEY: "test-api-key",
      ANTHROPIC_BASE_URL: stub.baseUrl,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      DISABLE_PROMPT_CACHING: "1",
    },
    stdout: "pipe",
    stderr: "pipe",
  })

  let timeout: Timer | undefined
  const timeoutPromise = new Promise<ClaudeApiRequest>((_, reject) => {
    timeout = setTimeout(() => reject(new Error("timed out waiting for /v1/messages")), 20000)
  })

  try {
    const request = await Promise.race([
      stub.waitForRequest((candidate) => candidate.path.endsWith("/messages")),
      timeoutPromise,
    ])
    return request.jsonBody as RequestBody
  } catch (error) {
    proc.kill()
    const stderr = proc.stderr ? await new Response(proc.stderr).text() : ""
    throw new Error(`${error instanceof Error ? error.message : String(error)}\n${stderr}`)
  } finally {
    if (timeout) clearTimeout(timeout)
    proc.kill()
    await proc.exited.catch(() => {})
  }
}

test("patched custom base URL requests strip stale signed thinking from resumed transcripts", async () => {
  const dir = makeTempDir("patched-cc-signature-runtime-")
  const transcript = writeSignedThinkingTranscript(dir)
  const patchedBundle = await renderRunnableBundle({ root: ROOT, version: TARGET_VERSION, outDir: join(dir, "rendered"), patchFiles: ["signature-block-custom-endpoint.toml"] })

  const unpatchedStub = await startClaudeApiStub()
  try {
    const request = await runClaudeUntilMessageRequest(
      join(ROOT, "staging", TARGET_VERSION, "cli.js"),
      unpatchedStub,
      transcript,
      join(dir, "home-unpatched"),
    )
    if (isVersionBefore(TARGET_VERSION, "2.1.197")) {
      expect(hasSignedThinkingBlocks(request)).toBe(true)
    }
  } finally {
    unpatchedStub.stop()
  }

  const patchedStub = await startClaudeApiStub()
  try {
    const request = await runClaudeUntilMessageRequest(
      patchedBundle,
      patchedStub,
      transcript,
      join(dir, "home-patched"),
    )
    expect(hasAssistantText(request)).toBe(true)
    expect(hasSignedThinkingBlocks(request)).toBe(false)
  } finally {
    patchedStub.stop()
  }
}, 120000)
