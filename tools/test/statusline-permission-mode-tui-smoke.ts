#!/usr/bin/env bun
import { mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { Terminal } from "@xterm/headless"
import { createCommand, runCli } from "../lib/cli"
import { startClaudeApiStub } from "./helpers/claude-api-stub"
import { EventConditions } from "./helpers/event-conditions"
import { shellEnvironment, shellQuote } from "./helpers/pty"
import { emptyPrompt, submitPtyText } from "./helpers/pty-input"

export async function statuslinePermissionModeSmoke(bundle: string): Promise<void> {
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-statusline-mode-")))
  const configDir = join(home, ".claude")
  mkdirSync(configDir)
  const capture = join(home, "statusline.jsonl")
  const stub = await startClaudeApiStub()
  try {
    await Bun.write(
      join(configDir, ".claude.json"),
      JSON.stringify({
        customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
        hasCompletedOnboarding: true,
        projects: { [home]: { hasTrustDialogAccepted: true } },
        theme: "dark",
      }),
    )
    await Bun.write(
      join(configDir, "settings.json"),
      JSON.stringify({
        statusLine: {
          type: "command",
          command: `${shellQuote(process.execPath)} ${shellQuote(join(import.meta.dir, "fixtures", "statusline-permission-mode.ts"))} ${shellQuote(capture)}`,
        },
      }),
    )
    const env = Object.fromEntries(
      Object.entries(process.env).filter(
        ([key]) =>
          !key.startsWith("ANTHROPIC_") &&
          !key.startsWith("CLAUDE_CODE_") &&
          !key.startsWith("PATCHED_CLAUDE_CODE_") &&
          key !== "CLAUDE_CONFIG_DIR" &&
          key !== "CLAUDECODE",
      ),
    )
    const commandEnv = {
      HOME: home,
      CLAUDE_CONFIG_DIR: configDir,
      ANTHROPIC_API_KEY: "stub-api-key",
      ANTHROPIC_BASE_URL: stub.baseUrl,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      TERM: "xterm-256color",
      FORCE_COLOR: "0",
    }
    const command = `stty cols 120 rows 40; exec timeout --kill-after=3s 60s env ${shellEnvironment(commandEnv)} ${shellQuote(process.execPath)} --preload ${shellQuote(resolve(import.meta.dir, "..", "..", "runtime", "system-prompt-overrides.ts"))} --preload ${shellQuote(resolve(import.meta.dir, "..", "..", "runtime", "bun-ant-cell-segmenter.ts"))} ${shellQuote(resolve(bundle))} --permission-mode default --model sonnet --hide-builtin-footer --thinking-display summarized`
    const script =
      process.platform === "darwin"
        ? `script -q -e /dev/null bash -lc ${shellQuote(command)}`
        : `script -q -e -c ${shellQuote(command)} /dev/null`
    const proc = Bun.spawn({
      cmd: ["bash", "-lc", `${script} < <(cat)`],
      cwd: home,
      env,
      detached: process.platform === "darwin",
      stdin: "pipe",
      stdout: "pipe",
      stderr: "pipe",
    })
    const terminal = new Terminal({ allowProposedApi: true, cols: 120, rows: 40 })
    const events = new EventConditions()
    let screen = "",
      transcript = "",
      exiting = false,
      inputClosed = false
    let exitTranscriptOffset: number | undefined
    function closeInput(): void {
      if (!inputClosed) {
        inputClosed = true
        proc.stdin.end()
      }
    }
    function kill(): void {
      try {
        process.platform === "darwin" ? process.kill(-proc.pid, "SIGKILL") : proc.kill("SIGKILL")
      } catch {
        proc.kill("SIGKILL")
      }
    }
    const watchdog = setTimeout(() => {
      events.fail(new Error(`statusline PTY timed out\n${screen}`))
      closeInput()
      kill()
    }, 65_000)
    const output = (async () => {
      for await (const chunk of proc.stdout) {
        const text = new TextDecoder().decode(chunk)
        transcript += text
        if (exitTranscriptOffset !== undefined && transcript.includes("\x1b[?1049l", exitTranscriptOffset)) closeInput()
        await new Promise<void>((done) => terminal.write(chunk, done))
        const buffer = terminal.buffer.active
        screen = Array.from(
          { length: terminal.rows },
          (_, row) => buffer.getLine(buffer.viewportY + row)?.translateToString(true) ?? "",
        ).join("\n")
        if (/TypeError|ReferenceError|React error #\d+/.test(screen)) events.fail(new Error(screen))
        else if (screen.includes("statusline mode=MISSING"))
          events.fail(new Error(`statusline JSON omitted permission_mode\n${screen}`))
        else events.notify()
      }
    })().catch((error: unknown) => events.fail(error instanceof Error ? error : new Error(String(error))))
    const errors = new Response(proc.stderr).text()
    void proc.exited.then((code) => {
      if (!exiting) events.fail(new Error(`PTY exited ${code}\n${screen}`))
    })
    const line = () => {
      const buffer = terminal.buffer.active
      return (buffer.getLine(buffer.baseY + buffer.cursorY)?.translateToString(true) ?? "").replaceAll("\u00a0", " ")
    }
    const key = async (value: string) => {
      proc.stdin.write(value)
      await proc.stdin.flush()
    }
    const waitFor = (predicate: () => boolean, description: string) => events.waitFor(predicate, description)
    try {
      for (const [index, mode] of ["default", "acceptEdits", "plan", "auto", "default"].entries()) {
        if (index > 0) await key("\x1b[Z")
        await waitFor(
          () => screen.includes(`statusline mode=${mode}`) && emptyPrompt(line()),
          `statusline did not render ${mode}`,
        )
        const records = readFileSync(capture, "utf8")
          .trim()
          .split("\n")
          .map((record) => JSON.parse(record) as { permission_mode?: unknown })
        if (records.at(-1)?.permission_mode !== mode) throw new Error(`statusline JSON did not export ${mode}`)
        if (screen.includes("? for shortcuts") || screen.includes("shift+tab to cycle"))
          throw new Error(`built-in footer is visible\n${screen}`)
        console.log(`statusline JSON and PTY: ${mode}`)
        if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(screen)
      }
      await key("\x1b[200~statusline cancel probe\x1b[201~")
      await waitFor(() => line().includes("statusline cancel probe"), "paste did not render")
      await key("\x03")
      await waitFor(() => emptyPrompt(line()), "Ctrl+C did not clear the prompt")
      exitTranscriptOffset = transcript.length
      exiting = true
      await submitPtyText({ line, key, waitFor }, "/exit")
      const code = await proc.exited
      await output
      const stderr = await errors
      if (code !== 0) throw new Error(`statusline PTY exited ${code}\n${screen}\n${stderr}`)
      if (stub.requests.some((request) => request.path.endsWith("/messages")))
        throw new Error("local mode interactions sent a model request")
    } finally {
      clearTimeout(watchdog)
      closeInput()
      if (proc.exitCode === null) kill()
      await Promise.all([proc.exited, output, errors])
      terminal.dispose()
    }
  } finally {
    stub.stop()
    rmSync(home, { recursive: true, force: true })
  }
}

async function main(): Promise<number> {
  const options = createCommand("statusline-permission-mode-tui-smoke")
    .requiredOption("--bundle <path>", "rendered Claude Code bundle")
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{ bundle: string }>()
  await statuslinePermissionModeSmoke(options.bundle)
  return 0
}
if (import.meta.main) await runCli(main)
