#!/usr/bin/env bun
import { mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { join, resolve } from "node:path"
import { Terminal } from "@xterm/headless"
import { createCommand, runCli } from "../lib/cli"
import { EventConditions } from "./helpers/event-conditions"
import { emptyPrompt } from "./helpers/pty-input"
import { normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

const CANCELLED_TEXT = "local-baseline-cancelled-input"
const ENTER = "\x1b[13u"

function screenText(terminal: Terminal): string {
  const buffer = terminal.buffer.active
  return Array.from(
    { length: terminal.rows },
    (_, row) => buffer.getLine(buffer.viewportY + row)?.translateToString(true) ?? "",
  ).join("\n")
}

async function main(): Promise<number> {
  const options = createCommand("tui-local-baseline")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--timeout-seconds <seconds>", "PTY session timeout", Number, 45)
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{ bundle: string; timeoutSeconds: number }>()
  const bundle = resolve(options.bundle)
  if (!Number.isSafeInteger(options.timeoutSeconds) || options.timeoutSeconds <= 0) {
    throw new Error("--timeout-seconds must be a positive integer")
  }
  if (!(await Bun.file(bundle).exists())) throw new Error(`bundle missing: ${bundle}`)

  const home = realpathSync(mkdtempSync("/tmp/cc-tlb-"))
  const configDir = join(home, ".claude")
  mkdirSync(configDir, { recursive: true })
  writeFileSync(join(configDir, "settings.json"), `${JSON.stringify({ theme: "dark" }, null, 2)}\n`)
  writeFileSync(
    join(configDir, ".claude.json"),
    `${JSON.stringify(
      {
        hasCompletedOnboarding: true,
        projects: { [home]: { hasTrustDialogAccepted: true } },
        theme: "dark",
      },
      null,
      2,
    )}\n`,
  )

  const terminal = new Terminal({ allowProposedApi: true, cols: 120, rows: 40, scrollback: 200 })
  const events = new EventConditions()
  const cleanEnv = Object.fromEntries(
    Object.entries(process.env).filter(
      ([key]) => !key.startsWith("ANTHROPIC_") && !key.startsWith("CLAUDE_CODE_") && key !== "CLAUDE_CONFIG_DIR",
    ),
  )
  const environment = {
    PATH: process.env.PATH ?? "",
    HOME: home,
    TMPDIR: home,
    CLAUDE_CODE_TMPDIR: home,
    CLAUDE_CONFIG_DIR: configDir,
    ANTHROPIC_BASE_URL: "http://127.0.0.1:1",
    CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
    CLAUDE_CODE_SKIP_ONBOARDING: "1",
    CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
    DISABLE_PROMPT_CACHING: "1",
    DISABLE_TELEMETRY: "1",
    DO_NOT_TRACK: "1",
    FORCE_COLOR: "0",
    TERM: "xterm-256color",
  }
  const command = [
    "stty cols 120 rows 40; exec timeout --kill-after=3s",
    `${options.timeoutSeconds}s env -i`,
    shellEnvironment(environment),
    "bun",
    "--preload",
    shellQuote(resolve(import.meta.dir, "..", "..", "runtime", "system-prompt-overrides.ts")),
    "--preload",
    shellQuote(resolve(import.meta.dir, "..", "..", "runtime", "bun-ant-cell-segmenter.ts")),
    shellQuote(bundle),
    "--bare --hide-builtin-footer --thinking-display summarized --model sonnet",
  ].join(" ")
  const scriptCommand =
    process.platform === "darwin"
      ? `script -q -e /dev/null bash -lc ${shellQuote(command)}`
      : `script -q -e -c ${shellQuote(command)} /dev/null`
  const proc = Bun.spawn({
    cmd: ["bash", "-lc", `${scriptCommand} < <(cat)`],
    cwd: home,
    env: { ...cleanEnv, HOME: home, PATH: environment.PATH, TERM: environment.TERM },
    stdin: "pipe",
    stdout: "pipe",
    stderr: "pipe",
  })

  let screen = ""
  let transcript = ""
  let stderr = ""
  let exited = false
  let exitCode: number | undefined
  let outputError: unknown
  let ctrlCCount = 0
  let timeoutHandle: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<never>((_resolve, reject) => {
    timeoutHandle = setTimeout(() => reject(new Error(`PTY session exceeded ${options.timeoutSeconds}s`)), options.timeoutSeconds * 1000)
  })
  const processExit = proc.exited.then((code) => {
    exited = true
    exitCode = code
    events.notify()
    return code
  })
  const output = (async () => {
    for await (const chunk of proc.stdout) {
      transcript += new TextDecoder().decode(chunk)
      await new Promise<void>((done) => terminal.write(chunk, done))
      screen = screenText(terminal)
      if (/TypeError|ReferenceError|React error #\d+/.test(screen)) {
        events.fail(new Error("rendered TUI contains a TypeError, ReferenceError, or React error"))
      } else {
        events.notify()
      }
    }
  })().catch((error: unknown) => {
    outputError = error
    events.fail(error instanceof Error ? error : new Error(String(error)))
  })
  const errors = new Response(proc.stderr).text().then((value) => {
    stderr = value
    events.notify()
    return value
  })

  function inputLine(): string {
    const buffer = terminal.buffer.active
    return (buffer.getLine(buffer.baseY + buffer.cursorY)?.translateToString(true) ?? "").replaceAll("\u00a0", " ")
  }

  function inputReady(): boolean {
    return emptyPrompt(inputLine()) && !/esc to interrupt/i.test(screen)
  }

  async function waitFor(predicate: () => boolean, description: string): Promise<void> {
    await Promise.race([
      events.waitFor(predicate, description),
      processExit.then((code) => {
        if (!predicate()) throw new Error(`PTY exited ${code} before ${description}`)
      }),
      timeout,
    ])
  }

  async function key(value: string): Promise<void> {
    if (value === "\x03") ctrlCCount += 1
    proc.stdin.write(value)
    await proc.stdin.flush()
  }

  async function waitForExit(): Promise<void> {
    if (exited) return
    const confirmation = /exit anyway|are you sure.*exit|exit claude code/i
    await Promise.race([
      processExit,
      events.waitFor(() => confirmation.test(screen), "exit confirmation missing"),
      Bun.sleep(1000),
    ])
    if (confirmation.test(screen)) await key(ENTER)
    // `script` keeps reading from the process-substitution pipe after the TUI
    // exits. Close that pipe so its wrapper can report the CLI exit status.
    proc.stdin.end()
    await Promise.race([processExit, timeout])
  }

  try {
    await waitFor(() => screen.includes("Claude Code") && screen.includes("❯") && inputReady(), "main composer did not render")
    await waitFor(() => inputReady(), "composer was not ready before paste")
    await key(`\x1b[200~${CANCELLED_TEXT}\x1b[201~`)
    await waitFor(() => inputLine().trim() === `❯ ${CANCELLED_TEXT}`, "pasted text was not visible in the composer")
    await key("\x03")
    await waitFor(() => inputReady(), "Ctrl+C did not clear the composer")
    if (inputLine().trim() !== "❯") throw new Error(`composer retained text after Ctrl+C: ${inputLine()}`)
    await key(`\x1b[200~/exit\x1b[201~`)
    await waitFor(() => inputLine().trim() === "❯ /exit", "/exit was not visible in the composer")
    await key(ENTER)
    await waitForExit()
    const code = exitCode ?? (await proc.exited)
    await output
    await errors
    if (timeoutHandle !== undefined) clearTimeout(timeoutHandle)

    const normalized = normalizeTuiOutput(`${transcript}\n${stderr}`)
    const failures: string[] = []
    if (code !== 0) failures.push(`PTY exited ${code}`)
    if (!normalized.includes("Claude Code")) failures.push("Claude Code main screen was not rendered")
    if (!normalized.includes(CANCELLED_TEXT)) failures.push("nonempty pasted text was not recorded in the PTY transcript")
    if (!normalized.includes("/exit")) failures.push("local /exit interaction was not recorded in the PTY transcript")
    if (ctrlCCount !== 1) failures.push(`expected one Ctrl+C input, sent ${ctrlCCount}`)
    if (/React error #300|TypeError|ReferenceError/.test(normalized)) failures.push("render-boundary error appeared")
    if (/ECONNREFUSED|fetch failed|API Error|unable to connect/i.test(normalized)) {
      failures.push("an API request was attempted against the closed loopback-only endpoint")
    }
    const visibleBuiltinFooter = ["· /effort", "manual mode on", "? for shortcuts"].filter((text) =>
      normalized.includes(text),
    )
    if (visibleBuiltinFooter.length > 0) {
      failures.push(`built-in footer remained visible: ${visibleBuiltinFooter.join(", ")}`)
    }
    if (outputError) failures.push(`PTY output capture failed: ${String(outputError)}`)
    if (failures.length > 0) {
      console.error(`local baseline PTY failed: ${failures.join("; ")}`)
      console.error(`${transcript}\n${stderr}`)
      return 1
    }
    console.log(normalized)
    console.log("ok: rendered main screen, pasted and cleared text with one Ctrl+C, and exited through local /exit")
    return 0
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error))
    console.error(screen)
    console.error(`${transcript}\n${stderr}`)
    return 1
  } finally {
    if (timeoutHandle !== undefined) clearTimeout(timeoutHandle)
    if (!exited) proc.kill()
    await Promise.race([Promise.all([proc.exited, output, errors]), Bun.sleep(2000)])
    terminal.dispose()
    proc.stdin.end()
    rmSync(home, { recursive: true, force: true })
  }
}

if (import.meta.main) await runCli(main)
