#!/usr/bin/env bun

import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiRequest, startClaudeApiStub } from "./helpers/claude-api-stub"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

type Args = {
  bundle: string
  resultCase: "success" | "stderr-exit"
  sandbox: boolean
  requireSandboxSuccess: boolean
  timeoutSeconds: number
}

type SseFrame = readonly [event: string, data: Record<string, unknown>]

const PROMPT = "run the CSharp tool fixture"
const TOOL_USE_ID = "toolu_csharp_fixture"
const COMPLETION_TEXT = "PCC_CSHARP_TOOL_COMPLETE"

function parseArgs(argv: string[]): Args {
  const options = createCommand("csharp-tool-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--case <success|stderr-exit>", "C# result path", "success")
    .option("--sandbox", "enable Claude Code's native sandbox")
    .option("--require-sandbox-success", "fail unless C# runs inside the sandbox and the write probe is denied")
    .option("--timeout-seconds <seconds>", "PTY timeout", (value) => Number.parseInt(value, 10), 120)
    .parse(argv, { from: "user" })
    .opts<{ bundle: string; case: string; sandbox: boolean; requireSandboxSuccess: boolean; timeoutSeconds: number }>()
  if (options.case !== "success" && options.case !== "stderr-exit") {
    throw new Error(`--case must be success or stderr-exit, got ${options.case}`)
  }
  if (options.requireSandboxSuccess && !options.sandbox) {
    throw new Error("--require-sandbox-success requires --sandbox")
  }
  return {
    bundle: resolve(options.bundle),
    resultCase: options.case,
    sandbox: options.sandbox,
    requireSandboxSuccess: options.requireSandboxSuccess,
    timeoutSeconds: options.timeoutSeconds,
  }
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
  const message = {
    id: "msg_csharp_fixture",
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
    headers: { "content-type": "text/event-stream", "request-id": "req_csharp_fixture" },
  })
}

function hasToolResult(request: ClaudeApiRequest): boolean {
  const messages = requestBody(request).messages
  if (!Array.isArray(messages)) return false
  return messages.some(
    (message) =>
      typeof message === "object" &&
      message !== null &&
      "content" in message &&
      Array.isArray(message.content) &&
      message.content.some(
        (block: unknown) =>
          typeof block === "object" && block !== null && "tool_use_id" in block && block.tool_use_id === TOOL_USE_ID,
      ),
  )
}

function toolResultContent(request: ClaudeApiRequest): string {
  const messages = requestBody(request).messages
  if (!Array.isArray(messages)) return ""
  for (const message of messages) {
    if (typeof message !== "object" || message === null || !("content" in message) || !Array.isArray(message.content)) {
      continue
    }
    for (const block of message.content) {
      if (
        typeof block === "object" &&
        block !== null &&
        "type" in block &&
        block.type === "tool_result" &&
        "tool_use_id" in block &&
        block.tool_use_id === TOOL_USE_ID &&
        "content" in block
      ) {
        return JSON.stringify(block.content)
      }
    }
  }
  return ""
}

function toolSource(resultCase: Args["resultCase"], sandbox: boolean, probeFile: string): string {
  if (resultCase === "stderr-exit") {
    return 'Console.Error.WriteLine("PCC_CSHARP_STDERR_EXIT"); Environment.Exit(23);'
  }
  if (sandbox) {
    return `try { System.IO.File.WriteAllText(${JSON.stringify(probeFile)}, "escape"); Console.WriteLine("PCC_SANDBOX_WRITE_ALLOWED"); } catch (Exception ex) { Console.WriteLine("PCC_SANDBOX_WRITE_DENIED:" + ex.GetType().Name); }`
  }
  return 'Console.WriteLine("PCC_CSHARP_TOOL_OK"); Console.Error.WriteLine("PCC_CSHARP_STDERR_OK");'
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }
  const dotnet = Bun.which("dotnet")
  if (dotnet === null) throw new Error("dotnet is unavailable")
  const probeRoot = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-csharp-sandbox-probe-")))
  const probeFile = join(probeRoot, "should-not-exist")
  const resultMarker = join(probeRoot, "tool-result-received")

  let toolRequest: ClaudeApiRequest | undefined
  let resultRequest: ClaudeApiRequest | undefined
  const stub = await startClaudeApiStub({
    responder: (request) => {
      if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })
      if (request.rawBody.includes("Write the title in the predominant language")) {
        return messageResponse(request, [{ type: "text", text: "CSharp tool fixture" }], "end_turn")
      }
      if (hasToolResult(request)) {
        resultRequest = request
        writeFileSync(resultMarker, "done")
        return messageResponse(request, [{ type: "text", text: COMPLETION_TEXT }], "end_turn")
      }
      if (request.rawBody.includes(PROMPT) && toolRequest === undefined) {
        toolRequest = request
        return messageResponse(
          request,
          [
            {
              type: "tool_use",
              id: TOOL_USE_ID,
              name: "CSharp",
              input: { command: toolSource(args.resultCase, args.sandbox, probeFile) },
            },
          ],
          "tool_use",
        )
      }
      return Response.json({ error: { type: "unexpected_request", message: request.path } }, { status: 400 })
    },
  })
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-csharp-tool-tui-")))

  try {
    const configDir = join(home, ".claude")
    mkdirSync(configDir, { recursive: true })
    await Promise.all([
      Bun.write(
        join(configDir, "settings.json"),
        `${JSON.stringify(
          {
            env: { ANTHROPIC_BASE_URL: stub.baseUrl },
            sandbox: { enabled: args.sandbox },
            skipDangerousModePermissionPrompt: true,
            theme: "dark",
          },
          null,
          2,
        )}\n`,
      ),
      Bun.write(
        join(configDir, ".claude.json"),
        `${JSON.stringify(
          {
            customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
            env: { ANTHROPIC_BASE_URL: stub.baseUrl },
            hasCompletedOnboarding: true,
            bypassPermissionsModeAccepted: true,
            projects: { [home]: { hasTrustDialogAccepted: true } },
            theme: "dark",
          },
          null,
          2,
        )}\n`,
      ),
    ])

    const enter = `printf %s ${shellQuote("\x1b[13u")}`
    const command = [
      "timeout",
      `${args.timeoutSeconds}s`,
      "env",
      shellEnvironment({
        HOME: home,
        ANTHROPIC_API_KEY: "stub-api-key",
        ANTHROPIC_BASE_URL: stub.baseUrl,
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
        CLAUDE_CODE_EXPERIMENTAL_CSHARP_TOOL: "1",
        CLAUDE_CODE_EXPERIMENTAL_DOTNET: dotnet,
        CLAUDE_CODE_SKIP_ONBOARDING: "1",
        CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
        CLAUDE_CONFIG_DIR: configDir,
        DISABLE_PROMPT_CACHING: "1",
        FORCE_COLOR: "0",
        TERM: "xterm-256color",
      }),
      "bun",
      "--preload",
      shellQuote(resolve(import.meta.dir, "..", "..", "runtime", "bun-ant-cell-segmenter.ts")),
      shellQuote(args.bundle),
      "--dangerously-skip-permissions",
      "--hide-builtin-footer",
      "--model",
      "sonnet",
    ].join(" ")
    const input = [
      "sleep 3",
      `printf %s ${shellQuote(`\x1b[200~${PROMPT}\x1b[201~`)}`,
      enter,
      `for ((i=0;i<90;i++)); do test -f ${shellQuote(resultMarker)} && break; sleep 1; done`,
      "sleep 3",
      `printf %s ${shellQuote("\x1b[200~/exit\x1b[201~")}`,
      enter,
      "sleep 2",
    ].join("; ")
    const processTui = Bun.spawn({
      cmd: ["bash", "-c", makeScriptCommand(command, input)],
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

    if (exitCode !== 0) {
      console.error(`CSharp TUI smoke exited ${exitCode}`)
      console.error(
        `API requests received: ${JSON.stringify(stub.requests.map((request) => ({ path: request.path, bodyStart: request.rawBody.slice(0, 120) })))}`,
      )
      console.error(output)
      return 1
    }
    if (toolRequest === undefined || resultRequest === undefined) {
      console.error(
        `CSharp TUI smoke did not complete the tool round trip (tool request: ${toolRequest !== undefined}, result request: ${resultRequest !== undefined})`,
      )
      console.error(
        JSON.stringify(
          stub.requests.map((request) => ({
            order: request.order,
            path: request.path,
            hasToolResult: hasToolResult(request),
          })),
          null,
          2,
        ),
      )
      console.error(normalized.slice(-5000))
      return 1
    }
    if (!toolRequest.rawBody.includes('"name":"CSharp"') || !toolRequest.rawBody.includes('"name":"Bash"')) {
      console.error("CSharp and Bash were not both exposed as distinct tools")
      console.error(toolRequest.rawBody)
      return 1
    }
    const resultText = toolResultContent(resultRequest)
    const sandboxUnavailable = args.sandbox && resultText.includes("CSharp sandbox is enabled but unavailable")
    const sandboxWrapperFailed = args.sandbox && resultText.includes("bwrap: Creating new namespace failed")
    const sandboxDotnetIpcDenied =
      args.sandbox && resultText.includes("/tmp/.dotnet/shm") && resultText.includes("EROFS")
    if (args.requireSandboxSuccess && (sandboxUnavailable || sandboxWrapperFailed || sandboxDotnetIpcDenied)) {
      console.error("CSharp did not complete inside the native sandbox")
      console.error(resultText)
      return 1
    }
    const expected =
      args.resultCase === "stderr-exit"
        ? "PCC_CSHARP_STDERR_EXIT"
        : sandboxUnavailable
          ? "CSharp sandbox is enabled but unavailable"
          : sandboxWrapperFailed
            ? "bwrap: Creating new namespace failed"
            : sandboxDotnetIpcDenied
              ? "EROFS"
              : args.sandbox
                ? "PCC_SANDBOX_WRITE_DENIED"
                : "PCC_CSHARP_TOOL_OK"
    if (!resultText.includes(expected)) {
      console.error(`CSharp tool result did not preserve ${expected}`)
      console.error(resultText)
      return 1
    }
    if (args.sandbox && existsSync(probeFile)) {
      console.error("CSharp escaped the enabled sandbox and wrote outside allowed paths")
      console.error(resultText)
      return 1
    }
    if (args.resultCase === "stderr-exit" && !resultText.includes("dotnet exited with code 23")) {
      console.error("CSharp failure did not preserve the dotnet exit code")
      console.error(resultText)
      return 1
    }
    if (args.resultCase === "success" && !args.sandbox && !resultText.includes("PCC_CSHARP_STDERR_OK")) {
      console.error("CSharp successful result did not preserve stderr")
      console.error(resultText)
      return 1
    }
    if (!normalized.includes(COMPLETION_TEXT)) {
      console.error("CSharp TUI did not render its completion")
      console.error(output)
      return 1
    }
    if (!normalized.includes("CSharp(")) {
      console.error("CSharp TUI did not render the tool invocation")
      console.error(normalized)
      return 1
    }
    const renderedExpected = sandboxUnavailable ? "CSharp sandbox" : sandboxWrapperFailed ? "bwrap:" : expected
    if (args.resultCase === "success" && !normalized.includes(renderedExpected)) {
      console.error("CSharp TUI did not render stdout")
      console.error(output)
      return 1
    }
    if (args.resultCase === "success" && !args.sandbox && !normalized.includes("PCC_CSHARP_STDERR_OK")) {
      console.error("CSharp TUI did not render stderr")
      console.error(normalized)
      return 1
    }
    if (
      args.resultCase === "stderr-exit" &&
      !normalized.includes("Error: PCC_CSHARP_STDERR_EXIT dotnet exited with code 23")
    ) {
      console.error("CSharp TUI did not render the error and exit code")
      console.error(normalized)
      return 1
    }
    const failures = ["Invalid tool parameters", "TypeError", "ReferenceError"].filter((text) =>
      normalized.includes(text),
    )
    if (failures.length > 0) {
      console.error(`CSharp TUI hit a validation/render failure: ${failures.join(", ")}`)
      console.error(output)
      return 1
    }

    if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(normalized)
    const sandboxOutcome = sandboxUnavailable
      ? "unavailable"
      : sandboxWrapperFailed
        ? "wrapper failed safely"
        : sandboxDotnetIpcDenied
          ? "dotnet IPC denied safely"
          : "enforced"
    console.log(
      `ok: CSharp ${args.resultCase} tool round trip rendered separately from Bash (sandbox=${args.sandbox ? sandboxOutcome : "off"})`,
    )
    return 0
  } finally {
    stub.stop()
    rmSync(home, { recursive: true, force: true })
    rmSync(probeRoot, { recursive: true, force: true })
  }
}

if (import.meta.main) await runCli(main)
