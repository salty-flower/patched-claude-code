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

const PROMPT = "ask the six-question fixture"
const TOOL_USE_ID = "toolu_ask_six_questions"
const COMPLETION_TEXT = "ASK_USER_QUESTION_SIX_COMPLETE"
const QUESTIONS = Array.from({ length: 6 }, (_, index) => {
  const number = index + 1
  return {
    question: `Fixture question ${number}?`,
    header: `Q${number}`,
    options: [
      { label: `Alpha ${number}`, description: `Select fixture answer ${number}` },
      { label: `Beta ${number}`, description: `Alternate fixture answer ${number}` },
    ],
    multiSelect: false,
  }
})

function parseArgs(argv: string[]): Args {
  const options = createCommand("ask-user-question-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--timeout-seconds <seconds>", "PTY timeout", (value) => Number.parseInt(value, 10), 45)
    .parse(argv, { from: "user" })
    .opts<{ bundle: string; timeoutSeconds: number }>()
  return { bundle: options.bundle, timeoutSeconds: options.timeoutSeconds }
}

function requestBody(request: ClaudeApiRequest): Record<string, unknown> {
  return typeof request.jsonBody === "object" && request.jsonBody !== null
    ? (request.jsonBody as Record<string, unknown>)
    : {}
}

function formatFrames(frames: readonly SseFrame[]): string {
  return frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join("")
}

function messageResponse(request: ClaudeApiRequest, content: Record<string, unknown>[], stopReason: string): Response {
  const body = requestBody(request)
  const model = typeof body.model === "string" ? body.model : "claude-sonnet-4-6"
  if (body.stream !== true) {
    return Response.json({
      id: "msg_ask_user_question_fixture",
      type: "message",
      role: "assistant",
      model,
      content,
      stop_reason: stopReason,
      stop_sequence: null,
      usage: { input_tokens: 1, output_tokens: 1 },
    })
  }

  const message = {
    id: "msg_ask_user_question_fixture",
    type: "message",
    role: "assistant",
    model,
    content: [],
    stop_reason: null,
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  const frames: SseFrame[] = [["message_start", { type: "message_start", message }]]
  content.forEach((block, index) => {
    frames.push([
      "content_block_start",
      {
        type: "content_block_start",
        index,
        content_block:
          block.type === "tool_use"
            ? { type: "tool_use", id: block.id, name: block.name, input: {} }
            : { type: "text", text: "" },
      },
    ])
    frames.push([
      "content_block_delta",
      {
        type: "content_block_delta",
        index,
        delta:
          block.type === "tool_use"
            ? { type: "input_json_delta", partial_json: JSON.stringify(block.input) }
            : { type: "text_delta", text: String(block.text) },
      },
    ])
    frames.push(["content_block_stop", { type: "content_block_stop", index }])
  })
  frames.push([
    "message_delta",
    {
      type: "message_delta",
      delta: { stop_reason: stopReason, stop_sequence: null },
      usage: { output_tokens: 1 },
    },
  ])
  frames.push(["message_stop", { type: "message_stop" }])
  return new Response(formatFrames(frames), {
    headers: { "content-type": "text/event-stream", "request-id": "req_ask_user_question_fixture" },
  })
}

function hasToolResult(request: ClaudeApiRequest): boolean {
  const body = requestBody(request)
  if (!Array.isArray(body.messages)) return false
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
          block.tool_use_id === TOOL_USE_ID,
      ),
  )
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }

  let questionResponseCount = 0
  let answerRequest: ClaudeApiRequest | undefined
  const stub = await startClaudeApiStub({
    responder: (request) => {
      if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })
      if (request.rawBody.includes("Write the title in the predominant language")) {
        return messageResponse(request, [{ type: "text", text: "Six-question PTY fixture" }], "end_turn")
      }
      if (hasToolResult(request)) {
        answerRequest = request
        return messageResponse(request, [{ type: "text", text: COMPLETION_TEXT }], "end_turn")
      }
      if (!request.rawBody.includes(PROMPT) || questionResponseCount > 0) {
        return Response.json({ error: { type: "unexpected_request", message: request.path } }, { status: 400 })
      }
      questionResponseCount += 1
      return messageResponse(
        request,
        [{ type: "tool_use", id: TOOL_USE_ID, name: "AskUserQuestion", input: { questions: QUESTIONS } }],
        "tool_use",
      )
    },
  })
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-ask-user-question-tui-")))

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
    const command = [
      "timeout",
      `${args.timeoutSeconds}s`,
      "env",
      shellEnvironment({
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
      }),
      "bun",
      shellQuote(resolve(args.bundle)),
      "--hide-builtin-footer",
      "--thinking-display",
      "summarized",
      "--model",
      "sonnet",
    ].join(" ")
    const inputCommands = [
      "sleep 3",
      `printf %s ${shellQuote(promptInput)}`,
      "sleep 1",
      `printf %s ${shellQuote(enterInput)}`,
      "sleep 3",
      ...QUESTIONS.flatMap(() => [`printf %s ${shellQuote(enterInput)}`, "sleep 1"]),
      `printf %s ${shellQuote(enterInput)}`,
      "sleep 4",
      `printf %s ${shellQuote(exitInput)}`,
      "sleep 1",
      `printf %s ${shellQuote(enterInput)}`,
      "sleep 1",
      `printf %s ${shellQuote(enterInput)}`,
    ].join("; ")
    const tuiProc = Bun.spawn({
      cmd: ["bash", "-lc", makeScriptCommand(command, inputCommands)],
      cwd: home,
      stdout: "pipe",
      stderr: "pipe",
    })
    const [exitCode, stdout, stderr] = await Promise.all([
      tuiProc.exited,
      new Response(tuiProc.stdout).text(),
      new Response(tuiProc.stderr).text(),
    ])
    const output = `${stdout}\n${stderr}`
    const normalized = normalizeTuiOutput(output)

    if (exitCode !== 0) {
      console.error(`AskUserQuestion PTY command exited ${exitCode}`)
      console.error(output)
      return 1
    }
    if (questionResponseCount !== 1 || answerRequest === undefined) {
      console.error("AskUserQuestion PTY did not complete the six-question tool round trip")
      console.error(output)
      return 1
    }
    for (const [index, question] of QUESTIONS.entries()) {
      if (!normalized.includes(question.question)) {
        console.error(`AskUserQuestion PTY did not render question ${index + 1}`)
        console.error(output)
        return 1
      }
      if (!answerRequest.rawBody.includes(`Alpha ${index + 1}`)) {
        console.error(`AskUserQuestion PTY did not submit answer ${index + 1}`)
        console.error(answerRequest.rawBody)
        return 1
      }
    }
    if (!normalized.includes(COMPLETION_TEXT)) {
      console.error("AskUserQuestion PTY did not render the post-submit completion response")
      console.error(output)
      return 1
    }
    const failures = ["Invalid tool parameters", "React error #300", "TypeError", "ReferenceError"].filter((text) =>
      normalized.includes(text),
    )
    if (failures.length > 0) {
      console.error(`AskUserQuestion PTY hit a validation/render failure: ${failures.join(", ")}`)
      console.error(output)
      return 1
    }

    if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(normalized)
    console.log("ok: PTY rendered and submitted six AskUserQuestion prompts in one tool call")
    return 0
  } finally {
    stub.stop()
    rmSync(home, { recursive: true, force: true })
  }
}

if (import.meta.main) await runCli(main)
