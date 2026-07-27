#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiRequest, type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

type Args = { bundle: string; timeoutSeconds: number }

function parseArgs(argv: string[]): Args {
  const program = createCommand("background-agent-interrupt-pty")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--timeout-seconds <seconds>", "PTY timeout", (value) => Number.parseInt(value, 10), 45)
    .parse(argv, { from: "user" })
  return program.opts<Args>()
}

function isStream(body: unknown): boolean {
  return typeof body === "object" && body !== null && "stream" in body && body.stream === true
}

function modelName(body: unknown): string {
  return typeof body === "object" && body !== null && "model" in body && typeof body.model === "string"
    ? body.model
    : "claude-sonnet-4-6"
}

const agentToolIds = ["toolu_agent_1", "toolu_agent_2", "toolu_agent_3"] as const
const agentPromptMarkers = ["SYNC_AGENT_1", "SYNC_AGENT_2", "SYNC_AGENT_3"] as const

function hasAgentToolResult(body: unknown): boolean {
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
          typeof block.tool_use_id === "string" &&
          agentToolIds.includes(block.tool_use_id as (typeof agentToolIds)[number]),
      ),
  )
}

function toolUseJson(body: unknown): Record<string, unknown> {
  return {
    id: "msg_stub_main",
    type: "message",
    role: "assistant",
    model: modelName(body),
    content: agentToolIds.map((id, index) => ({
      type: "tool_use",
      id,
      name: "Agent",
      input: {
        description: `hold synchronous agent ${index + 1}`,
        prompt: `${agentPromptMarkers[index]} Stay active until foreground cancellation hands you off.`,
        subagent_type: "general-purpose",
        run_in_background: false,
      },
    })),
    stop_reason: "tool_use",
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
}

function sse(body: unknown, content: Record<string, unknown>[], stopReason: string): string {
  const message = {
    id: stopReason === "tool_use" ? "msg_stub_main" : "msg_stub_followup",
    type: "message",
    role: "assistant",
    model: modelName(body),
    content: [],
    stop_reason: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  const frames: Array<[string, Record<string, unknown>]> = [["message_start", { type: "message_start", message }]]
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
  return frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join("")
}

type SseFrame = [event: string, data: Record<string, unknown>]

function hangingSse(frames: SseFrame[], onCancel?: () => void): Response {
  const encoder = new TextEncoder()
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(
        encoder.encode(frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join("")),
      )
    },
    cancel() {
      onCancel?.()
    },
  })
  return new Response(stream, {
    headers: { "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" },
  })
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }

  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-agent-pty-home-")))
  const configDir = join(home, ".claude")
  const foregroundReadyFiles = agentPromptMarkers.map((_, index) => join(home, `foreground-agent-${index + 1}-ready`))
  const exitStartedFile = join(home, "exit-started")
  mkdirSync(configDir, { recursive: true })
  let requestCount = 0
  const subagentRequestCounts = [0, 0, 0]
  let prematureAgentDisconnects = 0
  let stub: ClaudeApiStub | undefined
  const responder = (request: ClaudeApiRequest): Response => {
    if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })

    const body = request.jsonBody
    const hasToolResult = hasAgentToolResult(body)
    const isTitleRequest = request.rawBody.includes("Write the title in the predominant language")
    if (isTitleRequest) {
      const payload = {
        id: "msg_stub_title",
        type: "message",
        role: "assistant",
        model: modelName(body),
        content: [{ type: "text", text: "Background agent interrupt PTY" }],
        stop_reason: "end_turn",
        stop_sequence: null,
        usage: { input_tokens: 1, output_tokens: 1 },
      }
      if (isStream(body)) {
        return new Response(sse(body, payload.content as Record<string, unknown>[], "end_turn"), {
          headers: { "content-type": "text/event-stream", "cache-control": "no-cache" },
        })
      }
      return Response.json(payload)
    }
    requestCount += 1
    writeFileSync(join(home, `request-${requestCount}.json`), request.rawBody)

    if (requestCount === 1) {
      const payload = toolUseJson(body)
      if (isStream(body)) {
        return new Response(sse(body, payload.content as Record<string, unknown>[], "tool_use"), {
          headers: { "content-type": "text/event-stream", "cache-control": "no-cache" },
        })
      }
      return Response.json(payload)
    }

    const agentIndex = agentPromptMarkers.findIndex((marker) => request.rawBody.includes(marker))
    if (agentIndex >= 0) {
      subagentRequestCounts[agentIndex] += 1
      const occurrence = subagentRequestCounts[agentIndex]
      writeFileSync(foregroundReadyFiles[agentIndex], "ready\n")
      return hangingSse(
        [
          [
            "message_start",
            {
              type: "message_start",
              message: {
                id: `msg_stub_agent_${agentIndex + 1}_${occurrence}`,
                type: "message",
                role: "assistant",
                model: modelName(body),
                content: [],
                stop_reason: null,
                usage: { input_tokens: 1, output_tokens: 1 },
              },
            },
          ],
        ],
        () => {
          if (!existsSync(exitStartedFile)) prematureAgentDisconnects += 1
        },
      )
    }

    if (hasToolResult) {
      return hangingSse([
        [
          "message_start",
          {
            type: "message_start",
            message: {
              id: "msg_stub_followup",
              type: "message",
              role: "assistant",
              model: modelName(body),
              content: [],
              stop_reason: null,
              usage: { input_tokens: 1, output_tokens: 1 },
            },
          },
        ],
        ["content_block_start", { type: "content_block_start", index: 0, content_block: { type: "text", text: "" } }],
        [
          "content_block_delta",
          {
            type: "content_block_delta",
            index: 0,
            delta: { type: "text_delta", text: "Background agent is running." },
          },
        ],
      ])
    }

    return new Response(sse(body, [{ type: "text", text: "Stub follow-up complete." }], "end_turn"), {
      headers: { "content-type": "text/event-stream", "cache-control": "no-cache" },
    })
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

  try {
    const commandEnv = {
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
    }
    const envPrefix = shellEnvironment(commandEnv)
    const bundle = resolve(args.bundle)
    const timeoutSeconds = Math.max(30, Math.min(args.timeoutSeconds, 75))
    const command = [
      "timeout",
      `${timeoutSeconds}s`,
      "env",
      envPrefix,
      "bun",
      shellQuote(bundle),
      "--permission-mode",
      "acceptEdits",
      "--thinking-display",
      "summarized",
      "--model",
      "sonnet",
    ].join(" ")
    const enter = "\\x1b[13u"
    const prompt = "\\x1b[200~Start three synchronous agents in parallel and keep them running.\\x1b[201~"
    const exit = "\\x1b[200~/exit\\x1b[201~"
    const waitForFiles = (files: string[]) =>
      `for i in $(seq 1 160); do ${files.map((file) => `test -f ${shellQuote(file)}`).join(" && ")} && break; sleep 0.1; done`
    const inputCommand = [
      "sleep 2",
      `printf %b ${shellQuote(prompt)}`,
      "sleep 1",
      `printf %b ${shellQuote(enter)}`,
      waitForFiles(foregroundReadyFiles),
      "sleep 1",
      `printf '\\033'`,
      "sleep 3",
      `printf '\\033'`,
      "sleep 2",
      `touch ${shellQuote(exitStartedFile)}`,
      `printf %b ${shellQuote(exit)}`,
      "sleep 1",
      `printf %b ${shellQuote(enter)}`,
      "sleep 1",
      `printf %b ${shellQuote(enter)}`,
    ].join("; ")
    const child = Bun.spawn({
      cmd: ["bash", "-lc", makeScriptCommand(command, inputCommand)],
      cwd: home,
      stdout: "pipe",
      stderr: "pipe",
    })
    const [exitCode, stdout, stderr] = await Promise.all([
      child.exited,
      new Response(child.stdout).text(),
      new Response(child.stderr).text(),
    ])
    const output = `${stdout}\n${stderr}`
    const normalized = normalizeTuiOutput(output)
    if (exitCode !== 0) {
      console.error(`PTY exited ${exitCode}`)
      console.error(output)
      return 1
    }
    if (!normalized.includes("Claude Code")) {
      console.error("PTY did not render Claude Code")
      console.error(output)
      return 1
    }
    if (
      normalized.includes("TypeError") ||
      normalized.includes("ReferenceError") ||
      normalized.includes("Minified React error")
    ) {
      console.error("PTY hit a render/runtime error")
      console.error(output)
      return 1
    }
    if (subagentRequestCounts.some((count) => count !== 1)) {
      console.error(`expected one live request per synchronous agent: ${subagentRequestCounts.join(",")}`)
      console.error(output)
      return 1
    }
    if (!output.includes("agents launched")) {
      console.error("Escape did not render the three-agent background handoff")
      console.error(output)
      return 1
    }
    if (prematureAgentDisconnects !== 0) {
      console.error(`Esc disconnected ${prematureAgentDisconnects} handed-off agent streams`)
      console.error(output)
      return 1
    }

    const transcriptFiles: string[] = []
    const projectsDir = join(home, ".claude", "projects")
    const findJsonl = async (directory: string): Promise<void> => {
      for await (const entry of new Bun.Glob("**/*.jsonl").scan({ cwd: directory, absolute: true }))
        transcriptFiles.push(entry)
    }
    if (existsSync(projectsDir)) await findJsonl(projectsDir)
    const transcriptText = transcriptFiles.map((file) => readFileSync(file, "utf8")).join("\n")
    if (
      transcriptText.includes('"subtype":"agents_killed"') ||
      transcriptText.includes("background agents were stopped by the user")
    ) {
      console.error("double-Esc killed a background agent")
      console.error(normalized)
      return 1
    }
    console.log("ok: Esc handed off three synchronous agents; a second Esc left all background streams connected")
    return 0
  } finally {
    stub?.stop()
    if (process.env.KEEP_AGENT_PTY_HOME !== "1") rmSync(home, { recursive: true, force: true })
  }
}

if (import.meta.main) await runCli(main)
