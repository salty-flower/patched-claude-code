#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs"
import { join, resolve } from "node:path"
import { valid } from "semver"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiRequest, startClaudeApiStub } from "./helpers/claude-api-stub"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

const PROMPT = "load the built-in claude-api skill fixture"
const TOOL_USE_ID = "toolu_builtin_claude_api_fixture"
const COMPLETION = "BUILTIN_SKILL_RESOURCE_ROUND_TRIP_COMPLETE"

function bodyOf(request: ClaudeApiRequest): Record<string, unknown> {
  return typeof request.jsonBody === "object" && request.jsonBody !== null
    ? (request.jsonBody as Record<string, unknown>)
    : {}
}

function response(request: ClaudeApiRequest, content: Record<string, unknown>[], stopReason: string): Response {
  const body = bodyOf(request)
  const message = {
    id: "msg_builtin_skill_fixture",
    type: "message",
    role: "assistant",
    model: typeof body.model === "string" ? body.model : "claude-sonnet-4-6",
    content,
    stop_reason: stopReason,
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  if (body.stream !== true) return Response.json(message)
  const frames: Array<readonly [string, Record<string, unknown>]> = [
    ["message_start", { type: "message_start", message: { ...message, content: [], stop_reason: null } }],
  ]
  for (const [index, block] of content.entries()) {
    frames.push(
      [
        "content_block_start",
        {
          type: "content_block_start",
          index,
          content_block:
            block.type === "tool_use"
              ? { type: "tool_use", id: block.id, name: block.name, input: {} }
              : { type: "text", text: "" },
        },
      ],
      [
        "content_block_delta",
        {
          type: "content_block_delta",
          index,
          delta:
            block.type === "tool_use"
              ? { type: "input_json_delta", partial_json: JSON.stringify(block.input) }
              : { type: "text_delta", text: String(block.text) },
        },
      ],
      ["content_block_stop", { type: "content_block_stop", index }],
    )
  }
  frames.push(
    [
      "message_delta",
      { type: "message_delta", delta: { stop_reason: stopReason, stop_sequence: null }, usage: { output_tokens: 1 } },
    ],
    ["message_stop", { type: "message_stop" }],
  )
  return new Response(frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join(""), {
    headers: { "content-type": "text/event-stream", "request-id": "req_builtin_skill_fixture" },
  })
}

function toolResult(request: ClaudeApiRequest): Record<string, unknown> | undefined {
  const messages = bodyOf(request).messages
  if (!Array.isArray(messages)) return undefined
  for (const message of messages) {
    if (!Array.isArray(message?.content)) continue
    for (const block of message.content) {
      if (block?.type === "tool_result" && block.tool_use_id === TOOL_USE_ID) return block
    }
  }
  return undefined
}

async function main(): Promise<number> {
  const args = createCommand("builtin-skill-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .requiredOption("--version <semver>", "target Claude Code version")
    .option("--timeout-seconds <seconds>", "PTY timeout", (value) => Number.parseInt(value, 10), 35)
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{ bundle: string; version: string; timeoutSeconds: number }>()
  if (!valid(args.version)) throw new Error("--version must be an explicit semver")
  if (!existsSync(args.bundle)) throw new Error(`bundle missing: ${args.bundle}`)

  let skillCalls = 0
  let extractedRunner = false
  let result: Record<string, unknown> | undefined
  let continuation: ClaudeApiRequest | undefined
  const stub = await startClaudeApiStub({
    responder: async (request) => {
      if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })
      if (request.rawBody.includes("Write the title in the predominant language")) {
        return response(request, [{ type: "text", text: "Built-in skill resource fixture" }], "end_turn")
      }
      const receivedResult = toolResult(request)
      if (receivedResult) {
        result = receivedResult
        continuation = request
        for await (const path of new Bun.Glob("**/runner-scaffold.mjs").scan({
          cwd: home,
          dot: true,
          absolute: true,
        })) {
          const source = await Bun.file(path).text()
          extractedRunner ||= source.length > 100 && !source.startsWith("[object Object]")
        }
        return response(request, [{ type: "text", text: COMPLETION }], "end_turn")
      }
      if (!request.rawBody.includes(PROMPT) || skillCalls > 0) {
        return Response.json({ error: { type: "unexpected_request", message: request.path } }, { status: 400 })
      }
      skillCalls += 1
      return response(
        request,
        [{ type: "tool_use", id: TOOL_USE_ID, name: "Skill", input: { skill: "claude-api" } }],
        "tool_use",
      )
    },
  })
  // Claude's macOS temp policy ignores TMPDIR; use its explicit override too.
  // Keep the path short enough for the runtime's Unix-domain sockets.
  const home = realpathSync(mkdtempSync("/tmp/cc-bs-"))
  try {
    const configDir = join(home, ".claude")
    mkdirSync(configDir, { recursive: true })
    await Promise.all([
      Bun.write(join(configDir, "settings.json"), JSON.stringify({ theme: "dark" })),
      Bun.write(
        join(configDir, ".claude.json"),
        JSON.stringify({
          customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
          hasCompletedOnboarding: true,
          bypassPermissionsModeAccepted: true,
          projects: { [home]: { hasTrustDialogAccepted: true } },
          theme: "dark",
        }),
      ),
    ])
    const command = [
      "timeout",
      `${args.timeoutSeconds}s`,
      "env",
      "-i",
      shellEnvironment({
        PATH: process.env.PATH ?? "",
        HOME: home,
        TMPDIR: home,
        CLAUDE_CODE_TMPDIR: home,
        CLAUDE_CONFIG_DIR: configDir,
        ANTHROPIC_API_KEY: "stub-api-key",
        ANTHROPIC_BASE_URL: stub.baseUrl,
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
        CLAUDE_CODE_SKIP_ONBOARDING: "1",
        FORCE_COLOR: "0",
        TERM: "xterm-256color",
      }),
      "bun",
      shellQuote(resolve(args.bundle)),
      "--dangerously-skip-permissions",
      "--hide-builtin-footer",
      "--thinking-display",
      "summarized",
      "--model",
      "sonnet",
    ].join(" ")
    const enter = `printf %s ${shellQuote("\x1b[13u")}`
    const input = [
      "sleep 3",
      `printf %s ${shellQuote(`\x1b[200~${PROMPT}\x1b[201~`)}`,
      "sleep 1",
      enter,
      "sleep 9",
      `printf %s ${shellQuote("\x1b[200~/exit\x1b[201~")}`,
      "sleep 1",
      enter,
      "sleep 1",
      enter,
    ].join("; ")
    const processTui = Bun.spawn({
      cmd: ["bash", "-lc", makeScriptCommand(command, input)],
      cwd: home,
      stdout: "pipe",
      stderr: "pipe",
    })
    const [exitCode, stdout, stderr] = await Promise.all([
      processTui.exited,
      new Response(processTui.stdout).text(),
      new Response(processTui.stderr).text(),
    ])
    const output = `${stdout}\n${stderr}`
    const normalized = normalizeTuiOutput(output)
    const failures: string[] = []
    if (exitCode !== 0) failures.push(`PTY exited ${exitCode}`)
    if (skillCalls !== 1 || !result || !continuation) failures.push("Skill did not complete a tool round trip")
    if (result?.is_error === true) failures.push(`Skill failed: ${JSON.stringify(result.content)}`)
    if (!extractedRunner) failures.push("loaded skill did not materialize its runner resource as source text")
    if (!normalized.includes(COMPLETION)) failures.push("post-skill response was not rendered")
    for (const marker of ["TypeError", "ReferenceError", "React error #300", "Unknown option:"]) {
      if (normalized.includes(marker)) failures.push(`runtime failure: ${marker}`)
    }
    if (failures.length > 0) {
      console.error(`built-in skill PTY failed: ${failures.join("; ")}`)
      console.error(output)
      return 1
    }
    if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(normalized)
    console.log(
      "ok: PTY loaded built-in claude-api resources, completed Skill, rendered continuation, and /exit returned 0",
    )
    return 0
  } finally {
    stub.stop()
    rmSync(home, { recursive: true, force: true })
  }
}

if (import.meta.main) await runCli(main)
