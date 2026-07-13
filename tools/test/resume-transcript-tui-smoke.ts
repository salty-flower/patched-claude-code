#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand } from "../lib/cli"
import { startClaudeApiStub } from "./helpers/claude-api-stub"

const DEFAULT_FIXTURE = join(import.meta.dir, "fixtures", "resume-transcripts", "away-summary-only.jsonl")

type Args = {
  bundle: string
  fixture: string
  prompt: string
  timeoutSeconds: number
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
    .parse(argv, { from: "user" })
  const options = program.opts<{
    bundle: string
    fixture: string
    prompt: string
    timeoutSeconds: number
  }>()
  return {
    bundle: options.bundle,
    fixture: options.fixture,
    prompt: options.prompt,
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
    writeFileSync(join(projectDir, `${sessionId}.jsonl`), fixtureRaw)
    writeFileSync(
      join(configDir, "settings.json"),
      `${JSON.stringify(
        {
          env: { ANTHROPIC_BASE_URL: stub.baseUrl },
          statusLine: { type: "command", command: "printf statusline" },
          theme: "dark",
        },
        null,
        2,
      )}\n`,
    )
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
    const command = [
      "timeout",
      `${Math.min(args.timeoutSeconds, 45)}s`,
      "env",
      envPrefix,
      "bun",
      shellQuote(bundle),
      "--resume",
      shellQuote(sessionId),
    ].join(" ")
    const inputCommand = [
      "sleep 4",
      `printf %s ${shellQuote(`${args.prompt}\r`)}`,
      "sleep 5",
      "printf '\\003'",
    ].join("; ")
    const result = Bun.spawnSync({
      cmd: ["bash", "-lc", makeScriptCommand(command, inputCommand)],
      cwd: workDir,
      stdout: "pipe",
      stderr: "pipe",
    })
    const output = `${result.stdout.toString()}\n${result.stderr.toString()}`
    const normalizedOutput = normalizeTuiOutput(output)
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
    if (!normalizedOutput.includes(args.prompt)) {
      console.error(`resume transcript TUI did not echo submitted prompt: ${args.prompt}`)
      console.error(output)
      return 1
    }
    console.log(
      `ok: resumed ${sessionId}, rendered fixture, submitted ${JSON.stringify(args.prompt)}, no render crash`,
    )
    return 0
  } finally {
    stub.stop()
    rmSync(home, { recursive: true, force: true })
    rmSync(workDir, { recursive: true, force: true })
  }
}

if (import.meta.main) {
  process.exit(await main())
}
