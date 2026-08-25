#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { startClaudeApiStub } from "./helpers/claude-api-stub"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

const DEFAULT_FIXTURE = join(import.meta.dir, "fixtures", "resume-transcripts", "away-summary-only.jsonl")

type Args = {
  bundle: string
  fixture: string
  prompt: string
  timeoutSeconds: number
  startupDelaySeconds: number
  hideBuiltinFooter: boolean
  statusLine: boolean
  thinkingDisplay?: string
  submitPrompt: boolean
  focusTransition: boolean
  captureResumeError: boolean
}

type TranscriptEvent = {
  content?: unknown
  cwd?: unknown
  sessionId?: unknown
}

export function parseArgs(argv: string[]): Args {
  const program = createCommand("resume-transcript-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--fixture <jsonl>", "resume transcript JSONL fixture", DEFAULT_FIXTURE)
    .option("--prompt <text>", "prompt to submit through the resumed TUI", "ping")
    .option("--timeout-seconds <seconds>", "PTY timeout", (value) => Number.parseInt(value, 10), 30)
    .option(
      "--startup-delay-seconds <seconds>",
      "delay before submitting the prompt",
      (value) => Number.parseInt(value, 10),
      4,
    )
    .option("--no-hide-builtin-footer", "do not pass --hide-builtin-footer")
    .option("--no-status-line", "omit the custom statusLine setting")
    .option("--thinking-display <mode>", "thinking display mode to pass to the resumed TUI", "summarized")
    .option("--no-thinking-display", "do not pass --thinking-display")
    .option("--no-submit-prompt", "only verify initial resumed rendering")
    .option("--no-focus-transition", "do not send terminal focus-out/focus-in events after resume")
    .option("--capture-resume-error", "allow local debug logging of a resume failure")
    .parse(argv, { from: "user" })
  const options = program.opts<{
    bundle: string
    fixture: string
    prompt: string
    timeoutSeconds: number
    startupDelaySeconds: number
    hideBuiltinFooter: boolean
    statusLine: boolean
    thinkingDisplay?: string | false
    submitPrompt: boolean
    focusTransition: boolean
    captureResumeError: boolean
  }>()
  return {
    bundle: options.bundle,
    fixture: options.fixture,
    prompt: options.prompt,
    timeoutSeconds: options.timeoutSeconds,
    startupDelaySeconds: options.startupDelaySeconds,
    hideBuiltinFooter: options.hideBuiltinFooter,
    statusLine: options.statusLine,
    thinkingDisplay: options.thinkingDisplay || undefined,
    submitPrompt: options.submitPrompt,
    focusTransition: options.focusTransition,
    captureResumeError: options.captureResumeError,
  }
}

function projectKeyFromCwd(cwd: string): string {
  return cwd.replaceAll("/", "-").replaceAll("\\", "-")
}

async function readFixtureAsync(path: string): Promise<{ raw: string; firstEvent: TranscriptEvent }> {
  const raw = (await Bun.file(path).text()).trimEnd()
  const firstLine = raw.split("\n")[0]
  if (!firstLine) throw new Error(`fixture is empty: ${path}`)
  const parsed = JSON.parse(firstLine) as unknown
  if (typeof parsed !== "object" || parsed === null) {
    throw new Error(`fixture first line is not an object: ${path}`)
  }
  return { raw: `${raw}\n`, firstEvent: parsed as TranscriptEvent }
}

function stringField(value: unknown, field: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`fixture missing string field: ${field}`)
  }
  return value
}

function relocateFixtureCwd(raw: string, cwd: string): string {
  return `${raw
    .trimEnd()
    .split("\n")
    .map((line) => {
      const event = JSON.parse(line) as Record<string, unknown>
      return JSON.stringify("cwd" in event ? { ...event, cwd } : event)
    })
    .join("\n")}\n`
}

function crashPattern(output: string): string | null {
  const patterns = [
    "ERROR",
    "Minified React error #300",
    "number is not iterable",
    "is not iterable",
    "is not a function",
    "TypeError",
    "ReferenceError",
  ]
  return patterns.find((pattern) => output.includes(pattern)) ?? null
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }
  if (!existsSync(args.fixture)) {
    console.error(`fixture missing: ${args.fixture}`)
    return 2
  }

  const bundle = resolve(args.bundle)
  const fixturePath = resolve(args.fixture)
  const { raw: fixtureRaw, firstEvent } = await readFixtureAsync(fixturePath)
  const sessionId = stringField(firstEvent.sessionId, "sessionId")
  // Keep the fixture shaped like a real transcript while replaying from a temp cwd.
  stringField(firstEvent.cwd, "cwd")
  const expectedContent = typeof firstEvent.content === "string" ? firstEvent.content.slice(0, 32) : "Claude Code"

  const stub = await startClaudeApiStub({ text: "stub ok" })
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-resume-transcript-")))
  const workDir = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-resume-cwd-")))
  try {
    const configDir = join(home, ".claude")
    const projectDir = join(configDir, "projects", projectKeyFromCwd(workDir))
    mkdirSync(projectDir, { recursive: true })
    writeFileSync(join(projectDir, `${sessionId}.jsonl`), relocateFixtureCwd(fixtureRaw, workDir))
    const settings: {
      env: { ANTHROPIC_BASE_URL: string }
      statusLine?: { type: "command"; command: string }
      theme: "dark"
    } = {
      env: { ANTHROPIC_BASE_URL: stub.baseUrl },
      theme: "dark",
    }
    if (args.statusLine) settings.statusLine = { type: "command", command: "printf PATCHED_STATUSLINE_OK" }
    writeFileSync(join(configDir, "settings.json"), `${JSON.stringify(settings, null, 2)}\n`)
    writeFileSync(
      join(configDir, ".claude.json"),
      `${JSON.stringify(
        {
          customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
          env: { ANTHROPIC_BASE_URL: stub.baseUrl },
          hasCompletedOnboarding: true,
          projects: { [workDir]: { hasTrustDialogAccepted: true } },
          theme: "dark",
        },
        null,
        2,
      )}\n`,
    )

    const commandEnv = {
      HOME: home,
      CLAUDE_CONFIG_DIR: configDir,
      ANTHROPIC_API_KEY: "stub-api-key",
      ANTHROPIC_BASE_URL: stub.baseUrl,
      // Claude's error logger is disabled with nonessential traffic, including its
      // local debug-file sink. The diagnostic path removes this variable entirely.
      ...(args.captureResumeError ? {} : { CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1" }),
      CLAUDE_CODE_ENABLE_TELEMETRY: "0",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      DISABLE_PROMPT_CACHING: "1",
      FORCE_COLOR: "0",
      TERM: "xterm-256color",
    }
    const debugPath = join(home, "resume-debug.log")
    const envPrefix = shellEnvironment(commandEnv)
    const command = [
      "timeout",
      `${Math.min(args.timeoutSeconds, 45)}s`,
      "env",
      ...(args.captureResumeError ? ["-u", "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC"] : []),
      envPrefix,
      "bun",
      shellQuote(bundle),
      ...(args.hideBuiltinFooter ? ["--hide-builtin-footer"] : []),
      ...(args.thinkingDisplay ? ["--thinking-display", args.thinkingDisplay] : []),
      ...(args.captureResumeError ? ["--debug-file", shellQuote(debugPath)] : []),
      "--resume",
      shellQuote(sessionId),
    ].join(" ")
    const inputCommand = args.submitPrompt
      ? [
          `sleep ${args.startupDelaySeconds}`,
          ...(args.focusTransition
            ? [`printf %s ${shellQuote("\x1b[O")}`, "sleep 1", `printf %s ${shellQuote("\x1b[I")}`, "sleep 1"]
            : []),
          `printf %s ${shellQuote(`\x1b[200~${args.prompt}\x1b[201~`)}`,
          "sleep 1",
          `printf %s ${shellQuote("\x1b[13u")}`,
          "sleep 5",
          "printf '\\003'",
        ].join("; ")
      : `sleep ${Math.min(args.timeoutSeconds, 45) + 1}`
    const result = Bun.spawnSync({
      cmd: ["bash", "-lc", makeScriptCommand(command, inputCommand)],
      cwd: workDir,
      stdout: "pipe",
      stderr: "pipe",
    })
    const output = `${result.stdout.toString()}\n${result.stderr.toString()}`
    const normalizedOutput = normalizeTuiOutput(output)
    if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(normalizedOutput)
    const pattern = crashPattern(normalizedOutput)
    if (pattern) {
      console.error(`resume transcript TUI hit render crash pattern: ${pattern}`)
      console.error(output)
      return 1
    }
    // This fixture can sit in the resumed TUI after the prompt; timeout is a stable success
    // once rendering, prompt echo, and crash absence have been checked.
    if (result.exitCode !== 0 && result.exitCode !== 124) {
      console.error(`resume transcript TUI exited ${result.exitCode}`)
      console.error(output)
      if (existsSync(debugPath)) console.error(readFileSync(debugPath, "utf8"))
      const diagnosticProc = Bun.spawn({
        cmd: [process.execPath, bundle, "--print", "--resume", sessionId, "--max-turns", "1"],
        cwd: workDir,
        env: {
          ...process.env,
          ...commandEnv,
          ...(args.captureResumeError ? { CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: undefined } : {}),
        },
        stdout: "pipe",
        stderr: "pipe",
      })
      const diagnosticTimeout = setTimeout(() => diagnosticProc.kill(), 15000)
      const [diagnosticExitCode, diagnosticStdout, diagnosticStderr] = await Promise.all([
        diagnosticProc.exited,
        new Response(diagnosticProc.stdout).text(),
        new Response(diagnosticProc.stderr).text(),
      ])
      clearTimeout(diagnosticTimeout)
      console.error(`resume diagnostic exited ${diagnosticExitCode}`)
      console.error(diagnosticStdout)
      console.error(diagnosticStderr)
      return 1
    }
    if (!normalizedOutput.includes("Claude Code")) {
      console.error("resume transcript TUI did not render Claude Code")
      console.error(output)
      return 1
    }
    if (expectedContent !== "Claude Code" && !normalizedOutput.includes(expectedContent)) {
      console.error(`resume transcript TUI did not render fixture content: ${expectedContent}`)
      console.error(output)
      return 1
    }
    if (args.submitPrompt && !normalizedOutput.includes(args.prompt)) {
      console.error(`resume transcript TUI did not echo submitted prompt: ${args.prompt}`)
      console.error(output)
      return 1
    }
    if (args.statusLine && !normalizedOutput.includes("PATCHED_STATUSLINE_OK")) {
      console.error("resume transcript TUI did not render the configured status line")
      console.error(output)
      return 1
    }
    // `script` captures every redraw. Check after the submitted prompt so an
    // earlier startup frame cannot be mistaken for the final footer state.
    const lastPromptIndex = args.submitPrompt ? normalizedOutput.lastIndexOf(args.prompt) : -1
    const finalOutput = lastPromptIndex >= 0 ? normalizedOutput.slice(lastPromptIndex) : normalizedOutput
    if (args.hideBuiltinFooter && finalOutput.includes("· /effort")) {
      console.error("resume transcript TUI rendered the built-in effort footer despite --hide-builtin-footer")
      console.error(output)
      return 1
    }
    console.log(
      `ok: resumed ${sessionId}, custom status line=${args.statusLine}, built-in footer hidden=${args.hideBuiltinFooter}, prompt submitted=${args.submitPrompt}, no render crash`,
    )
    return 0
  } finally {
    stub.stop()
    rmSync(home, { recursive: true, force: true })
    rmSync(workDir, { recursive: true, force: true })
  }
}

if (import.meta.main) await runCli(main)
