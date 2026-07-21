#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand } from "../lib/cli"
import { startClaudeApiStub } from "./helpers/claude-api-stub"

type Args = {
  bundle: string
  timeoutSeconds: number
}

function parseArgs(argv: string[]): Args {
  const program = createCommand("oauth-fable-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--timeout-seconds <seconds>", "PTY timeout", (value) => Number.parseInt(value, 10), 15)
    .parse(argv, { from: "user" })
  return program.opts<Args>()
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

function crashPattern(output: string): string | null {
  const patterns = ["ERROR", "Minified React error", "TypeError", "ReferenceError", " is not defined"]
  return patterns.find((pattern) => output.includes(pattern)) ?? null
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }

  const bundle = resolve(args.bundle)
  const stub = await startClaudeApiStub()
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-oauth-fable-home-")))
  const workDir = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-oauth-fable-cwd-")))
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
      ANTHROPIC_BASE_URL: stub.baseUrl,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_OAUTH_SCOPES: "user:inference",
      CLAUDE_CODE_OAUTH_TOKEN: "stub-oauth-token",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      CLAUDE_CODE_SUBSCRIPTION_TYPE: "max",
      DISABLE_PROMPT_CACHING: "1",
      FORCE_COLOR: "0",
      TERM: "xterm-256color",
    }
    const envPrefix = Object.entries(commandEnv)
      .map(([key, value]) => `${key}=${shellQuote(value)}`)
      .join(" ")
    const unsetEnvironment = [
      "ANTHROPIC_API_KEY",
      "ANTHROPIC_AUTH_TOKEN",
      "ANTHROPIC_PROFILE",
      "CLAUDE_CODE_USE_ANTHROPIC_AWS",
      "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
      "CLAUDE_CODE_USE_BEDROCK",
      "CLAUDE_CODE_USE_FOUNDRY",
      "CLAUDE_CODE_USE_MANTLE",
      "CLAUDE_CODE_USE_VERTEX",
    ].flatMap((key) => ["-u", key])
    const timeoutSeconds = Math.min(args.timeoutSeconds, 30)
    const command = [
      "timeout",
      `${timeoutSeconds}s`,
      "env",
      ...unsetEnvironment,
      envPrefix,
      "bun",
      shellQuote(bundle),
      "--hide-builtin-footer",
      "--thinking-display",
      "summarized",
    ].join(" ")
    const enterInput = "\x1b[13u"
    const modelInput = "\x1b[200~/model\x1b[201~"
    const exitInput = "\x1b[200~/exit\x1b[201~"
    const inputCommand = [
      "sleep 3",
      `printf %s ${shellQuote(modelInput)}`,
      "sleep 1",
      `printf %s ${shellQuote(enterInput)}`,
      "sleep 3",
      `printf %s ${shellQuote("\x1b")}`,
      "sleep 1",
      `printf %s ${shellQuote(exitInput)}`,
      "sleep 1",
      `printf %s ${shellQuote(enterInput)}`,
    ].join("; ")
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
      console.error(`OAuth Fable TUI hit render crash pattern: ${pattern}`)
      console.error(output)
      return 1
    }
    if (result.exitCode !== 0) {
      console.error(`OAuth Fable TUI exited ${result.exitCode}`)
      console.error(output)
      return 1
    }
    if (!normalizedOutput.includes("Claude Code")) {
      console.error("OAuth Fable TUI did not render Claude Code")
      console.error(output)
      return 1
    }
    if (!normalizedOutput.includes("Fable")) {
      console.error("OAuth Fable TUI did not render the Fable model option")
      console.error(output)
      return 1
    }

    console.log("ok: Max OAuth TUI rendered the Fable picker with footer/thinking flags and exited locally")
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
