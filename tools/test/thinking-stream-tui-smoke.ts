#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiRequest, startClaudeApiStub } from "./helpers/claude-api-stub"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

type Args = {
  bundle: string
  timeoutSeconds: number
}

type SseFrame = readonly [event: string, data: Record<string, unknown>]

const PROMPT = "prove live reasoning rendering"
const LIVE_MARKER = "LIVE_REASONING_BEFORE_COMPLETION_7D3A"
const FINAL_TEXT = "thinking stream completed"

function parseArgs(argv: string[]): Args {
  const program = createCommand("thinking-stream-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--timeout-seconds <seconds>", "PTY timeout", (value) => Number.parseInt(value, 10), 35)
    .parse(argv, { from: "user" })
  const options = program.opts<{ bundle: string; timeoutSeconds: number }>()
  return { bundle: options.bundle, timeoutSeconds: options.timeoutSeconds }
}

function requestModel(request: ClaudeApiRequest): string {
  const body = request.jsonBody
  if (typeof body !== "object" || body === null || !("model" in body) || typeof body.model !== "string") {
    return "claude-sonnet-4-6"
  }
  return body.model
}

function encodeFrame(encoder: TextEncoder, [event, data]: SseFrame): Uint8Array {
  return encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
}

function thinkingResponse(
  request: ClaudeApiRequest,
  completionGate: Promise<void>,
  onReleaseCompletion: () => void,
): Response {
  const encoder = new TextEncoder()
  const message = {
    id: "msg_thinking_stream",
    type: "message",
    role: "assistant",
    model: requestModel(request),
    content: [],
    stop_reason: null,
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }

  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      const emit = (frame: SseFrame) => controller.enqueue(encodeFrame(encoder, frame))
      emit(["message_start", { type: "message_start", message }])
      emit([
        "content_block_start",
        {
          type: "content_block_start",
          index: 0,
          content_block: { type: "thinking", thinking: "", signature: "" },
        },
      ])
      emit([
        "content_block_delta",
        {
          type: "content_block_delta",
          index: 0,
          delta: { type: "thinking_delta", thinking: LIVE_MARKER },
        },
      ])

      await Promise.race([completionGate, Bun.sleep(8000)])
      onReleaseCompletion()

      emit([
        "content_block_delta",
        {
          type: "content_block_delta",
          index: 0,
          delta: { type: "signature_delta", signature: "stub-thinking-signature" },
        },
      ])
      emit(["content_block_stop", { type: "content_block_stop", index: 0 }])
      emit([
        "content_block_start",
        { type: "content_block_start", index: 1, content_block: { type: "text", text: "" } },
      ])
      emit([
        "content_block_delta",
        { type: "content_block_delta", index: 1, delta: { type: "text_delta", text: FINAL_TEXT } },
      ])
      emit(["content_block_stop", { type: "content_block_stop", index: 1 }])
      emit([
        "message_delta",
        {
          type: "message_delta",
          delta: { stop_reason: "end_turn", stop_sequence: null },
          usage: { output_tokens: 2 },
        },
      ])
      emit(["message_stop", { type: "message_stop" }])
      controller.close()
    },
  })

  return new Response(body, {
    headers: { "content-type": "text/event-stream", "request-id": "req_thinking_stream" },
  })
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }

  const bundle = resolve(args.bundle)
  let releaseCompletion: (() => void) | undefined
  const completionGate = new Promise<void>((resolveGate) => {
    releaseCompletion = resolveGate
  })
  let markerObservedAt: number | null = null
  let completionReleasedAt: number | null = null
  let markerWasVisibleBeforeCompletion = false
  let servedThinkingResponse = false

  const stub = await startClaudeApiStub({
    responder: (request) => {
      if (request.path.endsWith("/messages/count_tokens")) {
        return Response.json({ input_tokens: 1 }, { headers: { "request-id": "req_count" } })
      }
      if (!request.rawBody.includes(PROMPT)) {
        return Response.json({ error: { type: "unexpected_request", message: request.path } }, { status: 400 })
      }
      servedThinkingResponse = true
      return thinkingResponse(request, completionGate, () => {
        markerWasVisibleBeforeCompletion = markerObservedAt !== null
        completionReleasedAt = Date.now()
      })
    },
  })
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-thinking-stream-")))

  try {
    const configDir = join(home, ".claude")
    mkdirSync(configDir, { recursive: true })
    await Promise.all([
      Bun.write(
        join(configDir, "settings.json"),
        `${JSON.stringify({ env: { ANTHROPIC_BASE_URL: stub.baseUrl }, theme: "dark" }, null, 2)}\n`,
      ),
      Bun.write(
        join(configDir, ".claude.json"),
        `${JSON.stringify(
          {
            customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
            env: { ANTHROPIC_BASE_URL: stub.baseUrl },
            hasCompletedOnboarding: true,
            projects: { [home]: { hasTrustDialogAccepted: true } },
            theme: "dark",
          },
          null,
          2,
        )}\n`,
      ),
    ])

    const enterInput = "\x1b[13u"
    const promptInput = `\x1b[200~${PROMPT}\x1b[201~`
    const exitInput = "\x1b[200~/exit\x1b[201~"
    const commandEnv = {
      HOME: home,
      CLAUDE_CONFIG_DIR: configDir,
      ANTHROPIC_API_KEY: "stub-api-key",
      ANTHROPIC_BASE_URL: stub.baseUrl,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      DISABLE_PROMPT_CACHING: "1",
      FORCE_COLOR: "0",
      TERM: "xterm-256color",
    }
    const tuiCommand = [
      "timeout",
      `${args.timeoutSeconds}s`,
      "env",
      shellEnvironment(commandEnv),
      "bun",
      shellQuote(bundle),
      "--bare",
      "--hide-builtin-footer",
      "--thinking-display",
      "summarized",
      "--model",
      "sonnet",
    ].join(" ")
    const tuiScriptCommand = makeScriptCommand(
      tuiCommand,
      [
        "sleep 3",
        `printf %s ${shellQuote(promptInput)}`,
        "sleep 1",
        `printf %s ${shellQuote(enterInput)}`,
        "sleep 14",
        `printf %s ${shellQuote(exitInput)}`,
        "sleep 1",
        `printf %s ${shellQuote(enterInput)}`,
        "sleep 1",
        `printf %s ${shellQuote(enterInput)}`,
      ].join("; "),
    )
    const tuiProc = Bun.spawn({
      cmd: ["bash", "-lc", tuiScriptCommand],
      cwd: home,
      stdout: "pipe",
      stderr: "pipe",
    })

    const stdoutPromise = (async () => {
      const reader = tuiProc.stdout.getReader()
      const decoder = new TextDecoder()
      let output = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        output += decoder.decode(value, { stream: true })
        if (markerObservedAt === null && normalizeTuiOutput(output).includes(LIVE_MARKER)) {
          markerObservedAt = Date.now()
          setTimeout(() => releaseCompletion?.(), 100)
        }
      }
      return output + decoder.decode()
    })()
    const [exitCode, stdout, stderr] = await Promise.all([
      tuiProc.exited,
      stdoutPromise,
      new Response(tuiProc.stderr).text(),
    ])
    const tuiOutput = `${stdout}\n${stderr}`
    const normalized = normalizeTuiOutput(tuiOutput)

    if (exitCode !== 0) {
      console.error(`thinking PTY command exited ${exitCode}`)
      console.error(tuiOutput)
      return 1
    }
    if (!servedThinkingResponse) {
      console.error("thinking PTY did not reach the delayed local response")
      console.error(tuiOutput)
      return 1
    }
    if (markerObservedAt === null || completionReleasedAt === null || !markerWasVisibleBeforeCompletion) {
      console.error(
        `live thinking marker was not rendered before completion: marker=${String(markerObservedAt)}, completion=${String(completionReleasedAt)}`,
      )
      console.error(tuiOutput)
      return 1
    }
    if (!normalized.includes(FINAL_TEXT)) {
      console.error("thinking PTY did not render the completed assistant text")
      console.error(tuiOutput)
      return 1
    }
    if (normalized.includes("React error #300") || normalized.includes("TypeError") || normalized.includes("ReferenceError")) {
      console.error("thinking PTY hit a render-boundary failure")
      console.error(tuiOutput)
      return 1
    }

    console.log(
      `ok: live thinking rendered ${completionReleasedAt - markerObservedAt}ms before the stub released completion`,
    )
    return 0
  } finally {
    stub.stop()
    rmSync(home, { recursive: true, force: true })
  }
}

if (import.meta.main) await runCli(main)
