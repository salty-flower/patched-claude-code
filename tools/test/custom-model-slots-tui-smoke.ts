#!/usr/bin/env bun
import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { Terminal } from "@xterm/headless"
import { createCommand, runCli } from "../lib/cli"
import { startClaudeApiStub } from "./helpers/claude-api-stub"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"

type Args = {
  bundle: string
  timeoutSeconds: number
}

const CUSTOM_MODEL_1 = "provider/custom-model-1"
const CUSTOM_MODEL_2 = "provider/custom-model-2"

type PickerCase = {
  name: string
  environment: Record<string, string>
  expectedRows?: number
  present: string[]
  absent: string[]
  select?: string
}

// Read rendered cells, not accumulated ANSI output: removed rows must not count.
function screenText(terminal: Terminal): string {
  const buffer = terminal.buffer.active
  return Array.from(
    { length: terminal.rows },
    (_, row) => buffer.getLine(buffer.viewportY + row)?.translateToString(true) ?? "",
  ).join("\n")
}

async function runPicker(bundle: string, scenario: PickerCase, timeoutSeconds: number, baseUrl: string): Promise<void> {
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-custom-picker-")))
  const terminal = new Terminal({ allowProposedApi: true, cols: 120, rows: 40, scrollback: 100 })
  const configDir = join(home, ".claude")
  mkdirSync(configDir, { recursive: true })
  await Bun.write(
    join(configDir, ".claude.json"),
    JSON.stringify({
      customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
      hasCompletedOnboarding: true,
      projects: { [home]: { hasTrustDialogAccepted: true } },
      theme: "dark",
    }),
  )
  const environment = {
    HOME: home,
    CLAUDE_CONFIG_DIR: configDir,
    ANTHROPIC_API_KEY: "stub-api-key",
    ANTHROPIC_BASE_URL: baseUrl,
    ANTHROPIC_CUSTOM_MODEL_OPTION: CUSTOM_MODEL_1,
    ANTHROPIC_CUSTOM_MODEL_OPTION_NAME: "PICKER SLOT ONE",
    ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION: "First independent custom slot",
    ANTHROPIC_CUSTOM_MODEL_OPTION_2: CUSTOM_MODEL_2,
    ANTHROPIC_CUSTOM_MODEL_OPTION_2_NAME: "PICKER SLOT TWO",
    ANTHROPIC_CUSTOM_MODEL_OPTION_2_DESCRIPTION: "Second independent custom slot",
    CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
    CLAUDE_CODE_SKIP_ONBOARDING: "1",
    CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
    FORCE_COLOR: "0",
    TERM: "xterm-256color",
    ...scenario.environment,
  }
  // Clear inherited provider configuration so local and CI inputs are identical.
  const cleanEnv = Object.fromEntries(
    Object.entries(process.env).filter(
      ([key]) => !key.startsWith("ANTHROPIC_") && !key.startsWith("CLAUDE_CODE_") && key !== "CLAUDE_CONFIG_DIR",
    ),
  )
  const command = `stty cols 120 rows 40; exec timeout --kill-after=3s ${Math.max(timeoutSeconds, 45)}s env ${shellEnvironment(environment)} bun ${shellQuote(bundle)} --bare --model ${shellQuote(environment.ANTHROPIC_CUSTOM_MODEL_OPTION)}`
  const proc = Bun.spawn({
    // Bun uses a socket for stdin:"pipe"; Darwin script requires a real pipe.
    cmd: ["bash", "-lc", makeScriptCommand(command, "cat")],
    env: cleanEnv,
    cwd: home,
    stdin: "pipe",
    stdout: "pipe",
    stderr: "pipe",
  })
  let screen = ""
  let transcript = ""
  let exited = false
  void proc.exited.then(() => {
    exited = true
  })
  const output = (async () => {
    for await (const chunk of proc.stdout) {
      transcript += new TextDecoder().decode(chunk)
      await new Promise<void>((done) => terminal.write(chunk, done))
      screen = screenText(terminal)
    }
  })()
  let errorOutput = ""
  const stderr = new Response(proc.stderr).text().then((value) => {
    errorOutput = value
    return value
  })
  async function waitFor(predicate: () => boolean, description: string): Promise<void> {
    const deadline = Date.now() + timeoutSeconds * 1000
    while (!predicate()) {
      if (exited || Date.now() > deadline)
        throw new Error(`${scenario.name}: ${description}\n${screen}\n${transcript}\n${errorOutput}`)
      await Bun.sleep(25)
    }
  }
  async function key(value: string): Promise<void> {
    proc.stdin.write(value)
    await proc.stdin.flush()
    await Bun.sleep(100)
  }
  const selected = () => screen.match(/❯\s+(\d+)\.\s+([^\n]+)/)?.[1]
  const rows = new Map<number, string>()
  function collectRows(): void {
    for (const line of screen.split("\n")) {
      const match = line.match(/^\s*[❯↑↓]?\s*(\d+)\.\s+(.+)/)
      if (match) rows.set(Number(match[1]), match[2])
    }
  }
  try {
    await waitFor(() => screen.includes("Claude Code") && screen.includes("❯"), "startup prompt missing")
    await key("/model")
    await key("\r")
    await waitFor(() => screen.includes("Select model") && selected() !== undefined, "picker did not open")
    const first = selected()
    let wrapped = false
    // Enumerate a complete selection cycle so viewport clipping cannot hide failures.
    for (let step = 0; step < 32; step += 1) {
      collectRows()
      const previous = selected()
      await key("\x1b[B")
      await waitFor(() => selected() !== undefined && selected() !== previous, "picker selection did not advance")
      if (selected() === first) {
        wrapped = true
        break
      }
    }
    if (!wrapped) throw new Error(`${scenario.name}: picker did not complete a bounded cycle\n${screen}`)
    const labels = [...rows.values()].join("\n")
    if (scenario.expectedRows !== undefined && rows.size !== scenario.expectedRows) {
      throw new Error(`${scenario.name}: expected ${scenario.expectedRows} rows, saw ${rows.size}\n${labels}`)
    }
    for (const label of scenario.present)
      if (!labels.includes(label)) throw new Error(`${scenario.name}: missing ${label}\n${labels}`)
    for (const label of scenario.absent)
      if (labels.includes(label)) throw new Error(`${scenario.name}: duplicate ${label}\n${labels}`)
    if (scenario.select) {
      const target = [...rows.entries()].find(([, label]) => label.includes(scenario.select ?? ""))?.[0]
      if (target === undefined) throw new Error(`${scenario.name}: selection target absent`)
      for (let step = 0; selected() !== String(target) && step < rows.size; step += 1) {
        const previous = selected()
        await key("\x1b[B")
        await waitFor(() => selected() !== previous, "selection did not advance to custom slot")
      }
      await key("\r")
      await waitFor(
        () => !screen.includes("Select model") && screen.includes(CUSTOM_MODEL_2),
        "slot 2 was not selected",
      )
    } else {
      await key("\x1b")
      await waitFor(() => !screen.includes("Select model"), "picker did not close")
    }
    await key("/exit")
    await key("\r")
    proc.stdin.end()
    const exitCode = await proc.exited
    await output
    const errors = await stderr
    if (exitCode !== 0 || /TypeError|ReferenceError|React error #\d+/.test(transcript + errors)) {
      throw new Error(`${scenario.name}: PTY exit ${exitCode}\n${transcript}\n${errors}`)
    }
    console.log(`ok: picker ${scenario.name}: ${rows.size} enumerated rows`)
    if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(labels)
  } finally {
    proc.stdin.end()
    if (!exited) proc.kill()
    await Promise.all([proc.exited, output, stderr])
    terminal.dispose()
    rmSync(home, { recursive: true, force: true })
  }
}

function parseArgs(argv: string[]): Args {
  const program = createCommand("custom-model-slots-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--timeout-seconds <seconds>", "PTY capture window per model", (value) => Number.parseInt(value, 10), 15)
    .parse(argv, { from: "user" })
  const options = program.opts<{ bundle: string; timeoutSeconds: number }>()
  return { bundle: options.bundle, timeoutSeconds: options.timeoutSeconds }
}

async function runCustomModel(
  bundle: string,
  model: string,
  expectedEffort: string,
  timeoutSeconds: number,
  baseUrl: string,
): Promise<void> {
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
    await runPicker(
      bundle,
      {
        name: "distinct slots remain visible and slot 2 is selectable",
        environment: {},
        present: ["PICKER SLOT ONE", "PICKER SLOT TWO"],
        absent: [],
        select: "PICKER SLOT TWO",
      },
      args.timeoutSeconds,
      stub.baseUrl,
    )
    const tierPins = {
      ANTHROPIC_DEFAULT_FABLE_MODEL: "provider/tier-fable",
      ANTHROPIC_DEFAULT_OPUS_MODEL: "provider/tier-opus",
      ANTHROPIC_DEFAULT_SONNET_MODEL: "provider/tier-sonnet[1m]",
      ANTHROPIC_DEFAULT_HAIKU_MODEL: "provider/tier-haiku",
      ANTHROPIC_CUSTOM_MODEL_OPTION: "provider/tier-sonnet",
      ANTHROPIC_CUSTOM_MODEL_OPTION_2: "provider/tier-opus",
    }
    await runPicker(
      bundle,
      {
        name: "tier aliases deduplicate both slots including [1m]",
        environment: tierPins,
        expectedRows: 5,
        present: ["Default", "Fable", "Opus", "Sonnet", "Haiku"],
        absent: ["PICKER SLOT ONE", "PICKER SLOT TWO"],
      },
      args.timeoutSeconds,
      stub.baseUrl,
    )
    await runPicker(
      bundle,
      {
        name: "unrelated slot survives after removing a tier pin",
        environment: { ...tierPins, ANTHROPIC_DEFAULT_SONNET_MODEL: "", ANTHROPIC_CUSTOM_MODEL_OPTION: CUSTOM_MODEL_1 },
        present: ["PICKER SLOT ONE"],
        absent: ["PICKER SLOT TWO"],
      },
      args.timeoutSeconds,
      stub.baseUrl,
    )
    return 0
  } finally {
    stub.stop()
  }
}

if (import.meta.main) await runCli(main)
