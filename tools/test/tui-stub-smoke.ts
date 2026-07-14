#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand } from "../lib/cli"
import { startClaudeApiStub } from "./helpers/claude-api-stub"

type Args = {
  bundle: string
  prompt: string
  expectText: string
  timeoutSeconds: number
}

function parseArgs(argv: string[]): Args {
  const program = createCommand("tui-stub-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--prompt <text>", "prompt to submit through the stubbed API check", "hello")
    .option("--expect <text>", "text expected in print-mode output", "stub")
    .option("--timeout-seconds <seconds>", "PTY timeout", (value) => Number.parseInt(value, 10), 75)
    .parse(argv, { from: "user" })
  const options = program.opts<{
    bundle: string
    prompt: string
    expect: string
    timeoutSeconds: number
  }>()
  return {
    bundle: options.bundle,
    prompt: options.prompt,
    expectText: options.expect,
    timeoutSeconds: options.timeoutSeconds,
  }
}

function shellQuote(value: string): string {
  return `'${value.replaceAll("'", "'\\''")}'`
}

function makeScriptCommand(command: string, inputCommand: string): string {
  if (process.platform === "darwin") {
    return `(${inputCommand}) | script -q -e /dev/null bash -lc ${shellQuote(command)}`
  }
  return `(${inputCommand}) | script -q -e -c ${shellQuote(command)} /dev/null`
}

function normalizeTuiOutput(output: string): string {
  return output
    .replace(/\x1B\][^\x07]*(?:\x07|\x1B\\)/g, " ")
    .replace(/\x1B\[[0-?]*[ -/]*[@-~]/g, " ")
    .replace(/[\x00-\x1F\x7F]+/g, " ")
    .replace(/\s+/g, " ")
}

function formatLaterTimestamp(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, "0")
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }
  const bundle = resolve(args.bundle)

  const stub = await startClaudeApiStub({ text: args.expectText })
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-tui-stub-smoke-")))
  try {
    const configDir = join(home, ".claude")
    mkdirSync(configDir, { recursive: true })
    writeFileSync(
      join(configDir, "settings.json"),
      `${JSON.stringify({ env: { ANTHROPIC_BASE_URL: stub.baseUrl }, theme: "dark" }, null, 2)}\n`,
    )
    writeFileSync(
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
    )
    const laterPrompt = "patched TUI smoke"
    const laterAt = new Date(Date.now() + 35000)
    laterAt.setMilliseconds(0)
    const laterTimestamp = formatLaterTimestamp(laterAt)
    const laterScheduleInput = `/later ${laterTimestamp} ${laterPrompt}\r`
    const laterListInput = "/later list\r"
    const pastedInput = "\x1b[200~hook-order regression\x1b[201~"
    const cancelInput = "\x03"
    const clearInput = "\x15"
    const exitInput = "/exit\r"
    const confirmExitInput = "\r"
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
    const envPrefix = Object.entries(commandEnv)
      .map(([key, value]) => `${key}=${shellQuote(value)}`)
      .join(" ")
    const tuiTimeoutSeconds = Math.min(args.timeoutSeconds, 60)
    const tuiCommand = [
      "timeout",
      `${tuiTimeoutSeconds}s`,
      "env",
      envPrefix,
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
        "sleep 2",
        `printf %s ${shellQuote(pastedInput)}`,
        "sleep 1",
        `printf %s ${shellQuote(cancelInput)}`,
        "sleep 1",
        `printf %s ${shellQuote(clearInput)}`,
        "sleep 1",
        `printf %s ${shellQuote(laterScheduleInput)}`,
        "sleep 1",
        `printf %s ${shellQuote(laterListInput)}`,
        "sleep 33",
        `printf %s ${shellQuote(exitInput)}`,
        "sleep 1",
        `printf %s ${shellQuote(confirmExitInput)}`,
      ].join("; "),
    )
    const laterRequestPromise = stub
      .waitForRequest(
        (request) => request.path.endsWith("/messages") && request.rawBody.includes(laterPrompt),
        tuiTimeoutSeconds * 1000,
      )
      .then(
        (request) => ({ ok: true as const, request, resolvedAt: Date.now() }),
        (error: unknown) => ({ ok: false as const, error }),
      )
    const tuiProc = Bun.spawn({
      cmd: ["bash", "-lc", tuiScriptCommand],
      cwd: home,
      stdout: "pipe",
      stderr: "pipe",
    })
    const [tuiExitCode, tuiStdout, tuiStderr, laterRequestResult] = await Promise.all([
      tuiProc.exited,
      new Response(tuiProc.stdout).text(),
      new Response(tuiProc.stderr).text(),
      laterRequestPromise,
    ])
    const tuiOutput = `${tuiStdout}\n${tuiStderr}`
    const normalizedTuiOutput = normalizeTuiOutput(tuiOutput)
    if (tuiExitCode !== 0) {
      console.error(`PTY command exited ${tuiExitCode}`)
      console.error(tuiOutput)
      return 1
    }
    if (!normalizedTuiOutput.includes("Claude Code")) {
      console.error("PTY output did not render Claude Code")
      console.error(tuiOutput)
      return 1
    }
    if (normalizedTuiOutput.includes("React error #300")) {
      console.error("PTY paste/Ctrl+C interaction violated React hook order")
      console.error(tuiOutput)
      return 1
    }
    if (!normalizedTuiOutput.includes("Scheduled later-")) {
      console.error("PTY output did not confirm /later scheduling")
      console.error(tuiOutput)
      return 1
    }
    if (!normalizedTuiOutput.includes(`1. ${laterPrompt} @ ${laterTimestamp}`)) {
      console.error("PTY output did not render the exact /later timestamp")
      console.error(tuiOutput)
      return 1
    }
    if (!laterRequestResult.ok) {
      const detail = laterRequestResult.error instanceof Error ? laterRequestResult.error.message : String(laterRequestResult.error)
      console.error(`absolute /later prompt did not reach the local Claude API stub: ${detail}`)
      console.error(tuiOutput)
      return 1
    }
    if (laterRequestResult.resolvedAt < laterAt.getTime()) {
      console.error(
        `absolute /later prompt fired ${laterAt.getTime() - laterRequestResult.resolvedAt}ms early: scheduled ${laterAt.toISOString()}, observed ${new Date(laterRequestResult.resolvedAt).toISOString()}`,
      )
      console.error(tuiOutput)
      return 1
    }
    if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(normalizedTuiOutput)

    const printProc = Bun.spawn({
      cmd: [process.execPath, bundle, "--print", "--bare", "--model", "sonnet", "--max-turns", "1", args.prompt],
      cwd: home,
      env: { ...process.env, ...commandEnv },
      stdout: "pipe",
      stderr: "pipe",
    })
    try {
      await stub.waitForRequest((request) => request.path.endsWith("/messages"), 20000)
    } catch (error) {
      printProc.kill()
      const stderr = printProc.stderr ? await new Response(printProc.stderr).text() : ""
      console.error(error instanceof Error ? error.message : String(error))
      console.error(stderr)
      return 1
    }
    const [exitCode, stdout, stderr] = await Promise.all([
      printProc.exited,
      new Response(printProc.stdout).text(),
      new Response(printProc.stderr).text(),
    ])
    if (exitCode !== 0) {
      console.error(`print command exited ${exitCode}`)
      console.error(stderr)
      return 1
    }
    if (!stdout.includes(args.expectText)) {
      console.error(`print output missing expected text: ${args.expectText}`)
      console.error(stdout)
      console.error(stderr)
      return 1
    }
    console.log(
      `ok: PTY rendered Claude Code and /later, ${stub.requests.length} Claude API request(s), print rendered ${JSON.stringify(args.expectText)}`,
    )
    return 0
  } finally {
    stub.stop()
    rmSync(home, { recursive: true, force: true })
  }
}

if (import.meta.main) {
  process.exit(await main())
}
