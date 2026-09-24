#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiRequest, startClaudeApiStub } from "./helpers/claude-api-stub"
import { recordOracleCheck } from "./helpers/oracle-evidence"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

const PROMPT = "List the short labels required by the applicable local instructions, in their loaded order."
const PARENT_MARKER = "PARENT_NATIVE_AGENTS_FIXTURE_MARKER"
const PROJECT_MARKER = "PROJECT_NATIVE_AGENTS_FIXTURE_MARKER"
const CHILD_MARKER = "CHILD_NATIVE_AGENTS_FIXTURE_MARKER"
const COMPLETION = "NATIVE_AGENTS_CONTEXT_FIXTURE_COMPLETE"
const ORACLE_ID = "agent-memory-discovery/agents-md-native-hook-load"
const ORACLE_CHECK =
  "agents-md-tui-smoke.ts: parent, project, and child AGENTS.md markers reach the main conversation in native parent-to-child order with no CLAUDE.md"

type Args = {
  bundle: string
  timeoutSeconds: number
}

function bodyOf(request: ClaudeApiRequest): Record<string, unknown> {
  return typeof request.jsonBody === "object" && request.jsonBody !== null
    ? (request.jsonBody as Record<string, unknown>)
    : {}
}

function isMainConversationRequest(request: ClaudeApiRequest): boolean {
  if (!request.path.endsWith("/messages") || !request.rawBody.includes(PROMPT)) return false
  const body = bodyOf(request)
  const outputConfig = body.output_config
  return typeof outputConfig !== "object" || outputConfig === null || !("format" in outputConfig)
}

function messageResponse(request: ClaudeApiRequest, text: string): Response {
  const body = bodyOf(request)
  const message = {
    id: "msg_agents_md_fixture",
    type: "message",
    role: "assistant",
    model: typeof body.model === "string" ? body.model : "claude-sonnet-4-6",
    content: [{ type: "text", text }],
    stop_reason: "end_turn",
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  if (body.stream !== true) return Response.json(message)
  const frames = [
    ["message_start", { type: "message_start", message: { ...message, content: [], stop_reason: null } }],
    ["content_block_start", { type: "content_block_start", index: 0, content_block: { type: "text", text: "" } }],
    ["content_block_delta", { type: "content_block_delta", index: 0, delta: { type: "text_delta", text } }],
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
  ] as const
  return new Response(frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join(""), {
    headers: { "content-type": "text/event-stream", "request-id": "req_agents_md_fixture" },
  })
}

function checkArgs(argv: string[]): Args {
  const options = createCommand("agents-md-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code dispatcher")
    .option("--timeout-seconds <seconds>", "PTY timeout", (value) => Number.parseInt(value, 10), 40)
    .parse(argv, { from: "user" })
    .opts<{ bundle: string; timeoutSeconds: number }>()
  if (!existsSync(options.bundle)) throw new Error(`bundle missing: ${options.bundle}`)
  if (!Number.isSafeInteger(options.timeoutSeconds) || options.timeoutSeconds < 15) {
    throw new Error("--timeout-seconds must be an integer of at least 15")
  }
  return { bundle: resolve(options.bundle), timeoutSeconds: options.timeoutSeconds }
}

async function main(): Promise<number> {
  const args = checkArgs(process.argv.slice(2))
  const tempRoot = realpathSync(mkdtempSync(join(tmpdir(), "pcc-agents-md-tui-")))
  const home = join(tempRoot, "home")
  const configDir = join(home, ".claude")
  const projectRoot = join(tempRoot, "workspace")
  const childDir = join(projectRoot, "src", "feature")
  const agentFiles = [
    [join(tempRoot, "AGENTS.md"), `Parent scope instructions. Preserve the label ${PARENT_MARKER}.`],
    [join(projectRoot, "AGENTS.md"), `Project scope instructions. Preserve the label ${PROJECT_MARKER}.`],
    [join(childDir, "AGENTS.md"), `Child scope instructions. Preserve the label ${CHILD_MARKER}.`],
  ] as const
  const claudeFiles = [join(tempRoot, "CLAUDE.md"), join(projectRoot, "CLAUDE.md"), join(childDir, "CLAUDE.md")]
  const stub = await startClaudeApiStub({
    responder: async (request) => {
      if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })
      if (request.rawBody.includes("Write the title in the predominant language")) {
        return messageResponse(request, "Native AGENTS runtime fixture")
      }
      return messageResponse(request, COMPLETION)
    },
  })

  try {
    mkdirSync(childDir, { recursive: true })
    mkdirSync(configDir, { recursive: true })
    await Promise.all([
      ...agentFiles.map(([path, content]) => Bun.write(path, `${content}\n`)),
      Bun.write(join(configDir, "settings.json"), JSON.stringify({ theme: "dark" })),
      Bun.write(
        join(configDir, ".claude.json"),
        JSON.stringify({
          customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
          hasCompletedOnboarding: true,
          bypassPermissionsModeAccepted: true,
          projects: {
            [projectRoot]: { hasTrustDialogAccepted: true },
            [childDir]: { hasTrustDialogAccepted: true },
          },
          theme: "dark",
        }),
      ),
    ])

    const unexpectedClaudeFiles = claudeFiles.filter(existsSync)
    if (unexpectedClaudeFiles.length > 0) {
      throw new Error(`fixture unexpectedly contains CLAUDE.md: ${unexpectedClaudeFiles.join(", ")}`)
    }

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
        CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
        FORCE_COLOR: "0",
        TERM: "xterm-256color",
      }),
      "bun",
      "--preload",
      shellQuote(resolve(import.meta.dir, "..", "..", "runtime", "system-prompt-overrides.ts")),
      "--preload",
      shellQuote(resolve(import.meta.dir, "..", "..", "runtime", "bun-ant-cell-segmenter.ts")),
      shellQuote(args.bundle),
      "--dangerously-skip-permissions",
      "--hide-builtin-footer",
      "--thinking-display",
      "summarized",
      "--model",
      "sonnet",
    ].join(" ")
    const enter = `printf %s ${shellQuote("\x1b[13u")}`
    const input = [
      "sleep 4",
      `printf %s ${shellQuote(`\x1b[200~${PROMPT}\x1b[201~`)}`,
      "sleep 1",
      enter,
      "sleep 7",
      `printf %s ${shellQuote("\x1b[200~/exit\x1b[201~")}`,
      "sleep 1",
      enter,
      "sleep 1",
      enter,
    ].join("; ")
    const mainRequestResult = stub
      .waitForRequest(isMainConversationRequest, Math.min(args.timeoutSeconds * 1000, 20000))
      .then(
        (request) => ({ ok: true as const, request }),
        (error: unknown) => ({ ok: false as const, error }),
      )
    const processTui = Bun.spawn({
      cmd: ["bash", "-lc", makeScriptCommand(command, input)],
      cwd: childDir,
      stdout: "pipe",
      stderr: "pipe",
    })
    const [exitCode, stdout, stderr, requestResult] = await Promise.all([
      processTui.exited,
      new Response(processTui.stdout).text(),
      new Response(processTui.stderr).text(),
      mainRequestResult,
    ])
    const output = `${stdout}\n${stderr}`
    const normalized = normalizeTuiOutput(output)
    const failures: string[] = []
    if (exitCode !== 0) failures.push(`PTY exited ${exitCode}`)
    if (!normalized.includes("Claude Code")) failures.push("PTY did not render Claude Code")
    if (!normalized.includes(COMPLETION)) failures.push("stubbed main conversation response was not rendered")
    for (const marker of ["TypeError", "ReferenceError", "React error #300", "Cannot find module"]) {
      if (normalized.includes(marker)) failures.push(`runtime failure: ${marker}`)
    }
    if (!requestResult.ok) {
      const detail = requestResult.error instanceof Error ? requestResult.error.message : String(requestResult.error)
      failures.push(`main user conversation did not reach the local Claude API stub: ${detail}`)
    } else {
      const [parentPosition, projectPosition, childPosition] = [PARENT_MARKER, PROJECT_MARKER, CHILD_MARKER].map(
        (marker) => requestResult.request.rawBody.indexOf(marker),
      )
      const positions = [parentPosition, projectPosition, childPosition]
      if (positions.some((position) => position < 0)) {
        failures.push(
          `main conversation omitted AGENTS content (request bytes=${requestResult.request.rawBody.length}, marker positions=${positions.join(",")})`,
        )
      } else if (!(parentPosition < projectPosition && projectPosition < childPosition)) {
        failures.push(`AGENTS content order was not parent/project/child (marker positions=${positions.join(",")})`)
      }
    }

    const platform = process.env.PCC_VERIFY_PLATFORM
    if (platform === "darwin-arm64" || platform === "linux-x64") {
      recordOracleCheck({
        oracleIds: [ORACLE_ID],
        platform,
        evidenceClass: "real-os-runtime",
        check: ORACLE_CHECK,
        outcome: failures.length === 0 ? "passed" : "failed",
      })
    }

    if (failures.length > 0) {
      console.error(`native AGENTS PTY failed: ${failures.join("; ")}`)
      console.error(output)
      return 1
    }
    if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(normalized)
    console.log("ok: main conversation received parent, project, and child AGENTS.md in native order without CLAUDE.md")
    return 0
  } finally {
    stub.stop()
    rmSync(tempRoot, { recursive: true, force: true })
  }
}

if (import.meta.main) await runCli(main)
