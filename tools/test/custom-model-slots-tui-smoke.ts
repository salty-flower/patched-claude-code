#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { startClaudeApiStub } from "./helpers/claude-api-stub"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

type Args = {
  bundle: string
  timeoutSeconds: number
}

const CUSTOM_MODEL_1 = "provider/custom-model-1"
const CUSTOM_MODEL_2 = "provider/custom-model-2"

function parseArgs(argv: string[]): Args {
  const program = createCommand("custom-model-slots-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--timeout-seconds <seconds>", "PTY capture window per model", (value) => Number.parseInt(value, 10), 15)
    .parse(argv, { from: "user" })
  const options = program.opts<{ bundle: string; timeoutSeconds: number }>()
  return { bundle: options.bundle, timeoutSeconds: options.timeoutSeconds }
}

async function runCustomModel(bundle: string, model: string, expectedEffort: string, timeoutSeconds: number, baseUrl: string): Promise<void> {
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-custom-model-tui-")))
  try {
    const configDir = join(home, ".claude")
    mkdirSync(configDir, { recursive: true })
    await Bun.write(
      join(configDir, ".claude.json"),
      `${JSON.stringify(
        {
          customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
          hasCompletedOnboarding: true,
          projects: { [home]: { hasTrustDialogAccepted: true } },
          theme: "dark",
        },
        null,
        2,
      )}\n`,
    )

    const exitInput = "\x04"
    const commandEnv = {
      HOME: home,
      CLAUDE_CONFIG_DIR: configDir,
      ANTHROPIC_API_KEY: "stub-api-key",
      ANTHROPIC_BASE_URL: baseUrl,
      ANTHROPIC_CUSTOM_MODEL_OPTION: CUSTOM_MODEL_1,
      ANTHROPIC_CUSTOM_MODEL_OPTION_NAME: "Custom One",
      ANTHROPIC_CUSTOM_MODEL_OPTION_EFFORT_LEVEL: "medium",
      ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES: "effort",
      ANTHROPIC_CUSTOM_MODEL_OPTION_2: CUSTOM_MODEL_2,
      ANTHROPIC_CUSTOM_MODEL_OPTION_2_NAME: "Custom Two",
      ANTHROPIC_CUSTOM_MODEL_OPTION_2_EFFORT_LEVEL: "high",
      ANTHROPIC_CUSTOM_MODEL_OPTION_2_SUPPORTED_CAPABILITIES: "effort",
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      DISABLE_PROMPT_CACHING: "1",
      FORCE_COLOR: "0",
      TERM: "xterm-256color",
    }
    const tuiCommand = [
      "timeout",
      `${timeoutSeconds}s`,
      "env",
      shellEnvironment(commandEnv),
      "bun",
      shellQuote(bundle),
      "--bare",
      "--model",
      shellQuote(model),
    ].join(" ")
    const scriptCommand = makeScriptCommand(
      tuiCommand,
      [
        "sleep 10",
        `printf %s ${shellQuote(exitInput)}`,
        // Separate key events so the second press sees the exit confirmation state.
        "sleep 0.5",
        `printf %s ${shellQuote(exitInput)}`,
      ].join("; "),
    )
    const proc = Bun.spawn({
      cmd: ["bash", "-lc", scriptCommand],
      cwd: home,
      stdout: "pipe",
      stderr: "pipe",
    })
    const [exitCode, stdout, stderr] = await Promise.all([
      proc.exited,
      new Response(proc.stdout).text(),
      new Response(proc.stderr).text(),
    ])
    const output = `${stdout}\n${stderr}`
    const normalized = normalizeTuiOutput(output)
    if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(`${model}: ${normalized}`)
    if (exitCode !== 0) throw new Error(`PTY command for ${model} exited ${exitCode}\n${output}`)
    for (const expected of ["Claude Code", model, expectedEffort]) {
      if (!normalized.toLowerCase().includes(expected.toLowerCase())) {
        throw new Error(`TUI for ${model} did not render ${JSON.stringify(expected)}\n${output}`)
      }
    }
    if (/TypeError|ReferenceError|React error #\d+/.test(normalized)) {
      throw new Error(`TUI for ${model} hit a render-boundary error\n${output}`)
    }
  } finally {
    rmSync(home, { recursive: true, force: true })
  }
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }
  const bundle = resolve(args.bundle)
  const stub = await startClaudeApiStub()
  try {
    await runCustomModel(bundle, CUSTOM_MODEL_1, "medium", args.timeoutSeconds, stub.baseUrl)
    await runCustomModel(bundle, CUSTOM_MODEL_2, "high", args.timeoutSeconds, stub.baseUrl)
    console.log("ok: both custom model slots rendered in the PTY with independent effort")
    return 0
  } finally {
    stub.stop()
  }
}

if (import.meta.main) await runCli(main)
