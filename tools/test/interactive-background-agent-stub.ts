#!/usr/bin/env bun

import { existsSync, mkdirSync, mkdtempSync, realpathSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiRequest, type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"

type Args = { bundle: string }

function parseArgs(argv: string[]): Args {
  return createCommand("interactive-background-agent-stub")
    .description("Launch a local API stub and hand an interactive Claude Code TUI to the terminal")
    .requiredOption("--bundle <cli.patched.js>", "rendered Claude Code bundle")
    .parse(argv, { from: "user" })
    .opts<Args>()
}

function isStream(body: unknown): boolean {
  return typeof body === "object" && body !== null && "stream" in body && body.stream === true
}

function modelName(body: unknown): string {
  return typeof body === "object" && body !== null && "model" in body && typeof body.model === "string"
    ? body.model
    : "claude-sonnet-4-6"
}

function hasMainAgentResult(body: unknown): boolean {
  if (typeof body !== "object" || body === null || !("messages" in body) || !Array.isArray(body.messages)) return false
  return body.messages.some(
    (message) =>
      typeof message === "object" &&
      message !== null &&
      "content" in message &&
      Array.isArray(message.content) &&
      message.content.some(
        (block: unknown) =>
          typeof block === "object" &&
          block !== null &&
          "type" in block &&
          block.type === "tool_result" &&
          "tool_use_id" in block &&
          block.tool_use_id === "toolu_agent_1",
      ),
  )
}

const agentInput = {
  description: "hold background agent",
  prompt: "Stay active while you investigate the requested task. Do not finish until interrupted.",
  subagent_type: "general-purpose",
  run_in_background: true,
}

function toolUseResponse(body: unknown): Record<string, unknown> {
  return {
    id: "msg_interactive_main",
    type: "message",
    role: "assistant",
    model: modelName(body),
    content: [{ type: "tool_use", id: "toolu_agent_1", name: "Agent", input: agentInput }],
    stop_reason: "tool_use",
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
}

type Frame = [event: string, data: Record<string, unknown>]

function sse(frames: Frame[]): string {
  return frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join("")
}

function completedSse(body: unknown, content: Record<string, unknown>[], stopReason: string): Response {
  const message = {
    id: stopReason === "tool_use" ? "msg_interactive_main" : "msg_interactive_title",
    type: "message",
    role: "assistant",
    model: modelName(body),
    content: [],
    stop_reason: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  const frames: Frame[] = [["message_start", { type: "message_start", message }]]
  content.forEach((block, index) => {
    if (block.type === "tool_use") {
      frames.push([
        "content_block_start",
        {
          type: "content_block_start",
          index,
          content_block: { type: "tool_use", id: block.id, name: block.name, input: {} },
        },
      ])
      frames.push([
        "content_block_delta",
        {
          type: "content_block_delta",
          index,
          delta: { type: "input_json_delta", partial_json: JSON.stringify(block.input) },
        },
      ])
    } else {
      frames.push([
        "content_block_start",
        { type: "content_block_start", index, content_block: { type: "text", text: "" } },
      ])
      frames.push([
        "content_block_delta",
        { type: "content_block_delta", index, delta: { type: "text_delta", text: String(block.text) } },
      ])
    }
    frames.push(["content_block_stop", { type: "content_block_stop", index }])
  })
  frames.push([
    "message_delta",
    { type: "message_delta", delta: { stop_reason: stopReason, stop_sequence: null }, usage: { output_tokens: 1 } },
  ])
  frames.push(["message_stop", { type: "message_stop" }])
  return new Response(sse(frames), { headers: { "content-type": "text/event-stream", "cache-control": "no-cache" } })
}

function hangingSse(body: unknown, id: string, text?: string): Response {
  const frames: Frame[] = [
    [
      "message_start",
      {
        type: "message_start",
        message: {
          id,
          type: "message",
          role: "assistant",
          model: modelName(body),
          content: [],
          stop_reason: null,
          usage: { input_tokens: 1, output_tokens: 1 },
        },
      },
    ],
  ]
  if (text !== undefined) {
    frames.push([
      "content_block_start",
      { type: "content_block_start", index: 0, content_block: { type: "text", text: "" } },
    ])
    frames.push(["content_block_delta", { type: "content_block_delta", index: 0, delta: { type: "text_delta", text } }])
  }
  const encoder = new TextEncoder()
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(encoder.encode(sse(frames)))
    },
  })
  return new Response(stream, {
    headers: { "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" },
  })
}

function titleResponse(body: unknown): Response {
  const payload = {
    id: "msg_interactive_title",
    type: "message",
    role: "assistant",
    model: modelName(body),
    content: [{ type: "text", text: "Interactive background agent stub" }],
    stop_reason: "end_turn",
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  return isStream(body)
    ? completedSse(body, payload.content as Record<string, unknown>[], "end_turn")
    : Response.json(payload)
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }

  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-agent-playground-")))
  const configDir = join(home, ".claude")
  mkdirSync(configDir, { recursive: true })
  let ordinaryRequests = 0
  let stub: ClaudeApiStub | undefined
  const responder = (request: ClaudeApiRequest): Response => {
    if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })
    if (request.rawBody.includes("Write the title in the predominant language")) return titleResponse(request.jsonBody)

    ordinaryRequests += 1
    if (ordinaryRequests === 1) {
      const payload = toolUseResponse(request.jsonBody)
      if (!isStream(request.jsonBody)) return Response.json(payload)
      return completedSse(request.jsonBody, payload.content as Record<string, unknown>[], "tool_use")
    }
    if (hasMainAgentResult(request.jsonBody)) {
      console.error("[stub] main turn is now held open; press Esc twice to test the interrupt path")
      return hangingSse(request.jsonBody, "msg_interactive_followup", "Background agent is running.")
    }
    console.error("[stub] background subagent connected; its response is held open")
    return hangingSse(request.jsonBody, "msg_interactive_subagent")
  }

  stub = await startClaudeApiStub({ responder })
  const baseUrl = stub.baseUrl
  writeFileSync(
    join(configDir, "settings.json"),
    `${JSON.stringify({ env: { ANTHROPIC_BASE_URL: baseUrl }, theme: "dark" }, null, 2)}\n`,
  )
  writeFileSync(
    join(configDir, ".claude.json"),
    `${JSON.stringify({ customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] }, env: { ANTHROPIC_BASE_URL: baseUrl }, hasCompletedOnboarding: true, projects: { [home]: { hasTrustDialogAccepted: true } }, theme: "dark" }, null, 2)}\n`,
  )

  console.error(`\n[stub] API endpoint: ${baseUrl}`)
  console.error(`[stub] Temporary HOME/transcript root: ${home}`)
  console.error(
    "[stub] Start the CLI below. Type any prompt; the first ordinary request creates a hanging background Agent.",
  )
  console.error('[stub] Suggested prompt: "Start a background agent and keep it running."')
  console.error("[stub] After the stub reports both connections, press Esc twice. Use /exit when finished.\n")

  const child = Bun.spawn(
    [
      process.execPath,
      resolve(args.bundle),
      "--permission-mode",
      "acceptEdits",
      "--thinking-display",
      "summarized",
      "--model",
      "sonnet",
    ],
    {
      cwd: home,
      env: {
        ...process.env,
        HOME: home,
        CLAUDE_CONFIG_DIR: configDir,
        ANTHROPIC_API_KEY: "stub-api-key",
        ANTHROPIC_BASE_URL: baseUrl,
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
        CLAUDE_CODE_ENABLE_TASKS: "1",
        CLAUDE_CODE_SKIP_ONBOARDING: "1",
        DISABLE_PROMPT_CACHING: "1",
        FORCE_COLOR: "0",
        TERM: "xterm-256color",
      },
      stdin: "inherit",
      stdout: "inherit",
      stderr: "inherit",
    },
  )

  try {
    return await child.exited
  } finally {
    stub.stop()
    console.error(`\n[stub] CLI exited (status ${child.exitCode}). Transcript root was ${home}`)
  }
}

await runCli(main)
