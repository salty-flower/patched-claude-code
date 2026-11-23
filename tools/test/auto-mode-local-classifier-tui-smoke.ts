#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync } from "node:fs"
import { join, resolve } from "node:path"
import { Terminal } from "@xterm/headless"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiRequest, startClaudeApiStub } from "./helpers/claude-api-stub"
import { EventConditions } from "./helpers/event-conditions"
import { recordOracleCheck } from "./helpers/oracle-evidence"
import { emptyPrompt, submitPtyText } from "./helpers/pty-input"
import { shellEnvironment, shellQuote } from "./helpers/pty"
import { AUTO_MODE_CLASSIFIER_RUNTIME_CHECKS } from "./helpers/runtime-oracle-checks"

const cases = ["local-allow", "local-block", "local-unavailable", "server-block", "server-allow"] as const
type Scenario = (typeof cases)[number]

function messageResponse(request: ClaudeApiRequest, text: string, scenario?: Scenario, command?: string): Response {
  const body = request.jsonBody as { model: string; stream?: boolean }
  const toolId = `toolu_${scenario}`
  const block =
    command === undefined
      ? { type: "text", text }
      : {
          type: "tool_use",
          id: toolId,
          name: "Bash",
          input: { command, description: "Create a test marker directory" },
        }
  const usage = { input_tokens: 10, output_tokens: 10 }
  const stopReason = command === undefined ? "end_turn" : "tool_use"
  const message = { id: `msg_stub_${request.order}`, type: "message", role: "assistant", model: body.model, usage }
  if (!body.stream) return Response.json({ ...message, content: [block], stop_reason: stopReason, stop_sequence: null })

  const verdict =
    scenario?.startsWith("server-") && command !== undefined
      ? [
          {
            type: "dangerous_tool_use",
            status: {
              type: "available",
              tool_uses: {
                [toolId]: {
                  type: "evaluated",
                  outcome: scenario === "server-block" ? "flagged" : "not_flagged",
                  explanation: "Stub server verdict",
                },
              },
            },
          },
        ]
      : undefined
  const frames = [
    { type: "message_start", message: { ...message, content: [], stop_reason: null } },
    {
      type: "content_block_start",
      index: 0,
      content_block: block.type === "text" ? { ...block, text: "" } : { ...block, input: {} },
    },
    {
      type: "content_block_delta",
      index: 0,
      delta:
        block.type === "text"
          ? { type: "text_delta", text }
          : { type: "input_json_delta", partial_json: JSON.stringify(block.input) },
    },
    { type: "content_block_stop", index: 0 },
    {
      type: "message_delta",
      usage,
      delta: {
        stop_reason: stopReason,
        stop_sequence: null,
        ...(verdict === undefined ? {} : { safeguard_results: verdict }),
      },
    },
    { type: "message_stop" },
  ]
  return new Response(frames.map((frame) => `event: ${frame.type}\ndata: ${JSON.stringify(frame)}\n\n`).join(""), {
    headers: { "content-type": "text/event-stream" },
  })
}

async function smoke(bundle: string, customEndpoint: boolean): Promise<void> {
  const root = realpathSync(mkdtempSync("/tmp/pcc-auto-mode-"))
  const cwd = join(root, "work")
  const config = join(root, "config")
  const debugFile = join(root, "debug.log")
  mkdirSync(cwd)
  mkdirSync(config)
  await Bun.write(
    join(config, ".claude.json"),
    JSON.stringify({
      hasCompletedOnboarding: true,
      hasSeenAutoModeEntryWarning: true,
      projects: { [cwd]: { hasTrustDialogAccepted: true } },
      theme: "dark",
    }),
  )

  let scenario: Scenario = "local-allow"
  let sentTool = false
  let severityMode = false
  const stub = await startClaudeApiStub({
    responder(request) {
      if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 10 })
      if (!request.path.endsWith("/messages")) return Response.json({}, { status: 404 })
      const body = request.jsonBody as { model: string; tools?: Array<{ name: string }>; stop_sequences?: string[] }
      if (!body.tools?.some((tool) => tool.name === "Bash")) {
        if (!body.model.includes("sonnet")) return messageResponse(request, "Stub auxiliary response")
        if (body.stop_sequences) severityMode = body.stop_sequences.some((stop) => stop.includes("severity"))
        const text =
          scenario === "local-allow"
            ? severityMode
              ? "<severity>0</severity>"
              : "<block>no</block>"
            : scenario === "local-block"
              ? severityMode
                ? "<severity>999</severity>"
                : "<block>yes</block><reason>Stub local verdict blocks this action</reason>"
              : "No valid classifier output"
        return messageResponse(request, text)
      }
      if (!request.rawBody.includes(`pcc-case-${scenario}`)) return messageResponse(request, "Stub auxiliary response")
      if (sentTool) return messageResponse(request, `finished-${scenario}`)
      sentTool = true
      return messageResponse(request, "", scenario, `mkdir -- ${shellQuote(join(root, scenario))}`)
    },
  })

  const env = {
    PATH: process.env.PATH ?? "",
    TERM: "xterm-256color",
    HOME: root,
    CLAUDE_CONFIG_DIR: config,
    CLAUDE_API_STUB_BASE_URL: stub.baseUrl,
    CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
    CLAUDE_CODE_SKIP_ONBOARDING: "1",
    CLAUDE_CODE_OAUTH_TOKEN: "stub-auto-mode-oauth",
    CLAUDE_CODE_OAUTH_SCOPES: "user:inference",
    CLAUDE_CODE_SUBSCRIPTION_TYPE: "max",
    ...(customEndpoint ? { ANTHROPIC_BASE_URL: stub.baseUrl } : {}),
    DISABLE_TELEMETRY: "1",
    FORCE_COLOR: "0",
  }
  const command = [
    "stty cols 120 rows 40; exec timeout --kill-after=3s 80s env -i",
    shellEnvironment(env),
    shellQuote(process.execPath),
    "--preload",
    shellQuote(join(import.meta.dir, "helpers", "redirect-first-party-api-to-stub.ts")),
    "--preload",
    shellQuote(resolve(import.meta.dir, "../../runtime/system-prompt-overrides.ts")),
    "--preload",
    shellQuote(resolve(import.meta.dir, "../../runtime/bun-ant-cell-segmenter.ts")),
    shellQuote(bundle),
    "--permission-mode auto --model opus --hide-builtin-footer --thinking-display summarized --debug-file",
    shellQuote(debugFile),
  ].join(" ")
  const script =
    process.platform === "darwin"
      ? `script -q -e /dev/null bash -lc ${shellQuote(command)}`
      : `script -q -e -c ${shellQuote(command)} /dev/null`
  const proc = Bun.spawn({
    cmd: ["bash", "-lc", `exec ${script} < <(cat)`],
    cwd,
    env: { ...env, SHELL: Bun.which("bash") ?? "bash" },
    stdin: "pipe",
    stdout: "pipe",
    stderr: "pipe",
  })

  const events = new EventConditions()
  const terminal = new Terminal({ allowProposedApi: true, cols: 120, rows: 40 })
  let transcript = ""
  let exitTranscriptOffset: number | undefined
  let inputClosed = false
  function closeInput() {
    if (!inputClosed) {
      inputClosed = true
      proc.stdin.end()
    }
  }
  const watchdog = setTimeout(() => {
    events.fail(new Error("PTY smoke timed out"))
    closeInput()
    proc.kill("SIGKILL")
  }, 25_000)
  const readDebug = () => (existsSync(debugFile) ? readFileSync(debugFile, "utf8") : "")
  const output = (async () => {
    for await (const chunk of proc.stdout) {
      transcript += new TextDecoder().decode(chunk)
      await new Promise<void>((done) => terminal.write(chunk, done))
      if (exitTranscriptOffset !== undefined && transcript.includes("\x1b[?1049l", exitTranscriptOffset)) closeInput()
      if (/TypeError|ReferenceError|React error #\d+/.test(transcript)) events.fail(new Error("rendered TUI crashed"))
      events.notify()
    }
  })().catch((error: unknown) => events.fail(new Error(String(error))))
  const errors = new Response(proc.stderr).text()
  void proc.exited.then((code) => {
    if (exitTranscriptOffset === undefined) events.fail(new Error(`PTY exited ${code}`))
  })
  const input = {
    line() {
      const buffer = terminal.buffer.active
      return (
        buffer
          .getLine(buffer.baseY + buffer.cursorY)
          ?.translateToString(true)
          .replaceAll("\u00a0", " ") ?? ""
      )
    },
    async key(text: string) {
      proc.stdin.write(text)
      await proc.stdin.flush()
    },
    waitFor(predicate: () => boolean, description: string) {
      return events.waitFor(predicate, description)
    },
  }

  try {
    for (const next of cases) {
      scenario = next
      sentTool = false
      const offset = transcript.length
      const debugOffset = readDebug().length
      await submitPtyText(input, `pcc-case-${scenario}`)
      await events.waitFor(
        () => transcript.includes(`finished-${next}`, offset) && emptyPrompt(input.line()),
        `turn ${next} did not finish`,
      )
      const logs = readDebug().slice(debugOffset)
      const localStart = logs.match(/classifier_request_started[^\n]+tool=Bash[^\n]+stage=xml_s1/)
      if (Boolean(localStart) !== next.startsWith("local-"))
        throw new Error(`unexpected local classifier usage for ${next}`)
      if (next.endsWith("-block") && !logs.includes("Auto mode classifier blocked action")) {
        throw new Error(`missing explicit classifier block for ${next}`)
      }
      if (
        next === "local-unavailable" &&
        !stub.requests.some((request) => request.rawBody.includes("auto mode's local classifier gave no verdict"))
      ) {
        throw new Error("missing fail-closed tool result for unavailable local classifier")
      }
      const ran = existsSync(join(root, next))
      if (ran !== next.endsWith("-allow")) throw new Error(`unexpected Bash execution for ${next}`)
      console.log(
        `${customEndpoint ? "custom endpoint" : "first party"} ${next}: ${localStart?.[0] ?? "server verdict"}, Bash ${ran ? "ran" : "blocked"}`,
      )
    }
    exitTranscriptOffset = transcript.length
    await submitPtyText(input, "/exit")
    if ((await proc.exited) !== 0) throw new Error("PTY did not exit cleanly")
    const platform =
      process.platform === "darwin" && process.arch === "arm64"
        ? "darwin-arm64"
        : process.platform === "linux" && process.arch === "x64"
          ? "linux-x64"
          : undefined
    if (platform === undefined) throw new Error("unsupported host for auto-mode runtime evidence")
    recordOracleCheck({
      oracleIds: ["auto-mode-local-classifier/per-call-classifier-fallback"],
      platform,
      evidenceClass: "runtime",
      check: AUTO_MODE_CLASSIFIER_RUNTIME_CHECKS[customEndpoint ? "customEndpoint" : "firstParty"],
      outcome: "passed",
    })
  } catch (error) {
    const log = readDebug()
      .split("\n")
      .filter((line) => /classifier|auto.mode|safeguard/i.test(line))
      .join("\n")
    closeInput()
    proc.kill("SIGKILL")
    throw new Error(`${String(error)}\n${transcript}\n${log}\n${await errors}`)
  } finally {
    clearTimeout(watchdog)
    await Promise.all([proc.exited, output])
    terminal.dispose()
    stub.stop()
    rmSync(root, { recursive: true, force: true })
  }
}

async function main(): Promise<number> {
  const { bundle } = createCommand("auto-mode-local-classifier-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{ bundle: string }>()
  await smoke(resolve(bundle), false)
  await smoke(resolve(bundle), true)
  return 0
}

if (import.meta.main) await runCli(main)
