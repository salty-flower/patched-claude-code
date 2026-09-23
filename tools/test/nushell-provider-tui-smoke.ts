#!/usr/bin/env bun

import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand } from "../lib/cli"
import { runtimePreloadArguments } from "../lib/runtime-support"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

const ROOT = resolve(import.meta.dir, "..", "..")
const SENTINEL = "PCC_NU_OK"

type Args = {
  bundle: string
  timeoutSeconds: number
}

function parseArgs(argv: string[]): Args {
  const program = createCommand("nushell-provider-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>")
    .option("--timeout-seconds <seconds>", "PTY timeout", "30")
    .parse(argv, { from: "user" })
  const options = program.opts<{
    bundle: string
    timeoutSeconds: string
  }>()
  const timeoutSeconds = Number(options.timeoutSeconds)
  if (!Number.isSafeInteger(timeoutSeconds) || timeoutSeconds < 10) {
    throw new Error(`--timeout-seconds must be an integer of at least 10, got ${options.timeoutSeconds}`)
  }
  return {
    bundle: resolve(options.bundle),
    timeoutSeconds,
  }
}

function findNu(): string {
  const path = Bun.which("nu")
  if (path === null) throw new Error("nushell is unavailable")
  return path
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }

  const nu = findNu()
  const runtimeVersionResult = Bun.spawnSync({
    cmd: [nu, "--version"],
    stdout: "pipe",
    stderr: "pipe",
  })
  const runtimeVersion = runtimeVersionResult.stdout.toString().trim()
  if (runtimeVersionResult.exitCode !== 0 || runtimeVersion === "") {
    throw new Error(
      `failed to read nushell version: ${runtimeVersionResult.stderr.toString().trim()}`,
    )
  }
  const testRoot = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-nushell-smoke-")))
  try {
    const configDir = join(testRoot, ".claude")
    mkdirSync(configDir, { recursive: true })
    writeFileSync(join(configDir, "settings.json"), `${JSON.stringify({ theme: "dark" }, null, 2)}\n`)
    writeFileSync(
      join(configDir, ".claude.json"),
      `${JSON.stringify(
        {
          customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
          hasCompletedOnboarding: true,
          projects: { [ROOT]: { hasTrustDialogAccepted: true } },
          theme: "dark",
        },
        null,
        2,
      )}\n`,
    )

    const environment = shellEnvironment({
      ANTHROPIC_API_KEY: "stub-api-key",
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SHELL: nu,
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      CLAUDE_CONFIG_DIR: configDir,
      FORCE_COLOR: "0",
      SHELL: nu,
      TERM: "xterm-256color",
    })
    const command = [
      "timeout",
      `--kill-after=3s`,
      `${args.timeoutSeconds}s`,
      "env",
      environment,
      "bun",
      ...runtimePreloadArguments(ROOT).map(shellQuote),
      shellQuote(args.bundle),
      "--bare",
    ].join(" ")
    const enter = `printf %s ${shellQuote("\x1b[13u")}`
    const runtimeInput = `!print "${SENTINEL}"; version | get version`
    const input = [
      "sleep 5",
      `printf %s ${shellQuote(`\x1b[200~${runtimeInput}\x1b[201~`)}`,
      enter,
      "sleep 1",
      enter,
      "sleep 6",
      `printf %s ${shellQuote("\x1b[200~/exit\x1b[201~")}`,
      enter,
      "sleep 2",
    ].join("; ")
    const result = Bun.spawnSync({
      cmd: ["bash", "-lc", makeScriptCommand(command, input)],
      cwd: ROOT,
      stdout: "pipe",
      stderr: "pipe",
    })
    const output = normalizeTuiOutput(`${result.stdout.toString()}\n${result.stderr.toString()}`)
    if (result.exitCode !== 0) {
      console.error(`Nushell TUI smoke exited ${result.exitCode}`)
      console.error(output)
      return 1
    }
    if (!output.includes(SENTINEL)) {
      console.error(`Nushell TUI smoke did not render ${SENTINEL}`)
      console.error(output)
      return 1
    }
    if (!output.includes(runtimeVersion)) {
      console.error(`Nushell TUI smoke did not render ${runtimeVersion}`)
      console.error(output)
      return 1
    }
    console.log(`nushell BashTool smoke passed with ${nu}`)
    return 0
  } finally {
    rmSync(testRoot, { force: true, recursive: true })
  }
}

process.exit(await main())
