import { afterEach, expect, test } from "bun:test"
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = "2.1.150"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")
const SIGNATURE_PATCH = join(ROOT, "patches", "signature-block-custom-endpoint.toml")

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
  const sessionId = "11111111-1111-4111-8111-111111111111"
  const userUuid = "22222222-2222-4222-8222-222222222222"
  const assistantUuid = "33333333-3333-4333-8333-333333333333"
  const transcript = join(dir, "signed-thinking.jsonl")
  const lines = [
    {
      type: "user",
      uuid: userUuid,
      parentUuid: null,
      sessionId,
      timestamp: "2026-05-26T00:00:00.000Z",
      message: { role: "user", content: "hello" },
    },
    {
      type: "assistant",
      uuid: assistantUuid,
      parentUuid: userUuid,
      sessionId,
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

function renderSignaturePatch(input: string, output: string): void {
  const source = readFileSync(input, "utf8")
  const patches = loadPatchEntriesFromFile(SIGNATURE_PATCH)
  writeFileSync(output, applyPatchEntries(source, patches, TARGET_VERSION).source)
}

function makeSseResponse(body: RequestBody): Response {
  const model = body.model ?? "claude-sonnet-4-6"
  const message = {
    id: "msg_stub",
    type: "message",
    role: "assistant",
    model,
    content: [],
    stop_reason: null,
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  const frames = [
    ["message_start", { type: "message_start", message }],
    ["content_block_start", { type: "content_block_start", index: 0, content_block: { type: "text", text: "" } }],
    ["content_block_delta", { type: "content_block_delta", index: 0, delta: { type: "text_delta", text: "stub" } }],
    ["content_block_stop", { type: "content_block_stop", index: 0 }],
    [
      "message_delta",
      {
        type: "message_delta",
        delta: { stop_reason: "end_turn", stop_sequence: null },
        usage: { output_tokens: 1 },
      },
    ],
    ["message_stop", { type: "message_stop" }],
  ]
  const text = frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join("")
  return new Response(text, {
    headers: {
      "content-type": "text/event-stream",
      "request-id": "req_stub",
    },
  })
}

function makeJsonResponse(body: RequestBody): Response {
  return Response.json(
    {
      id: "msg_stub",
      type: "message",
      role: "assistant",
      model: body.model ?? "claude-sonnet-4-6",
      content: [{ type: "text", text: "stub" }],
      stop_reason: "end_turn",
      stop_sequence: null,
      usage: { input_tokens: 1, output_tokens: 1 },
    },
    { headers: { "request-id": "req_stub" } },
  )
}

function startClaudeStub(): {
  server: ReturnType<typeof Bun.serve>
  requests: RequestBody[]
  firstMessageRequest: Promise<RequestBody>
  baseUrl: string
} {
  const requests: RequestBody[] = []
  let resolveFirstMessageRequest: (body: RequestBody) => void = () => {}
  const firstMessageRequest = new Promise<RequestBody>((resolve) => {
    resolveFirstMessageRequest = resolve
  })
  const server = Bun.serve({
    port: 0,
    fetch: async (request) => {
      const url = new URL(request.url)
      if (request.method === "POST" && url.pathname.endsWith("/messages/count_tokens")) {
        return Response.json({ input_tokens: 1 }, { headers: { "request-id": "req_count" } })
      }
      if (request.method === "POST" && url.pathname.endsWith("/messages")) {
        const body = (await request.json()) as RequestBody
        requests.push(body)
        if (requests.length === 1) resolveFirstMessageRequest(body)
        return body.stream ? makeSseResponse(body) : makeJsonResponse(body)
      }
      return Response.json({ error: { type: "not_found_error", message: url.pathname } }, { status: 404 })
    },
  })
  return { server, requests, firstMessageRequest, baseUrl: `http://127.0.0.1:${server.port}` }
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
  stub: ReturnType<typeof startClaudeStub>,
  transcriptPath: string,
  home: string,
): Promise<RequestBody> {
  mkdirSync(home, { recursive: true })
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
      transcriptPath,
      "continue",
    ],
    cwd: home,
    env: {
      ...process.env,
      HOME: home,
      CLAUDE_CONFIG_DIR: join(home, ".claude"),
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
  const timeoutPromise = new Promise<RequestBody>((_, reject) => {
    timeout = setTimeout(() => reject(new Error("timed out waiting for /v1/messages")), 20000)
  })

  try {
    return await Promise.race([stub.firstMessageRequest, timeoutPromise])
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
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  const dir = makeTempDir("patched-cc-signature-runtime-")
  const transcript = writeSignedThinkingTranscript(dir)
  const patchedBundle = join(dir, "cli.signature-patched.js")
  renderSignaturePatch(TARGET_BUNDLE, patchedBundle)

  const unpatchedStub = startClaudeStub()
  try {
    const request = await runClaudeUntilMessageRequest(TARGET_BUNDLE, unpatchedStub, transcript, join(dir, "home-unpatched"))
    expect(hasSignedThinkingBlocks(request)).toBe(true)
  } finally {
    unpatchedStub.server.stop(true)
  }

  const patchedStub = startClaudeStub()
  try {
    const request = await runClaudeUntilMessageRequest(patchedBundle, patchedStub, transcript, join(dir, "home-patched"))
    expect(hasAssistantText(request)).toBe(true)
    expect(hasSignedThinkingBlocks(request)).toBe(false)
  } finally {
    patchedStub.server.stop(true)
  }
}, 120000)
