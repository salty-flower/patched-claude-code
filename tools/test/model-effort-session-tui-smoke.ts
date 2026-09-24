#!/usr/bin/env bun
import { mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { Terminal } from "@xterm/headless"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"
import { EventConditions } from "./helpers/event-conditions"
import { shellEnvironment, shellQuote } from "./helpers/pty"
import { effortCommandResult, emptyPrompt, submitPtyText } from "./helpers/pty-input"
import { type ModelEffortRuntimeOracle, recordModelEffortRuntimeOracle } from "./helpers/runtime-oracle-checks"

const LUNA = "gpt-5.6-luna"
const ASTRA = "gpt-6-astra"
const watchdogKillAfterSeconds = 3

// Automatic title generation shares model and prompt text, but has a structured output schema.
function conversationRequest(request: { path: string; rawBody: string; jsonBody: unknown }): boolean {
  const body = request.jsonBody as { output_config?: { format?: unknown } }
  return (
    request.path.endsWith("/messages") &&
    request.rawBody.includes("effort-probe-") &&
    body.output_config?.format === undefined
  )
}

function screenText(terminal: Terminal): string {
  const buffer = terminal.buffer.active
  return Array.from(
    { length: terminal.rows },
    (_, row) => buffer.getLine(buffer.viewportY + row)?.translateToString(true) ?? "",
  ).join("\n")
}

async function session(
  bundle: string,
  stub: ClaudeApiStub,
  home: string,
  timeout: number,
  cliEffort: string | undefined,
  run: (ui: {
    command: (text: string, expected: RegExp) => Promise<void>
    request: (model: string, effort: string | undefined) => Promise<void>
    picker: () => Promise<void>
    slider: () => Promise<void>
    sliderGuard: () => Promise<void>
    recordOracle: (invariantId: ModelEffortRuntimeOracle) => void
    snapshot: (label: string) => void
    rendered: (expected: RegExp) => Promise<void>
    footerCleared: () => Promise<void>
  }) => Promise<void>,
): Promise<void> {
  const configDir = join(home, ".claude")
  const terminal = new Terminal({ allowProposedApi: true, cols: 120, rows: 40, scrollback: 200 })
  const cleanEnv = Object.fromEntries(
    Object.entries(process.env).filter(
      ([key]) => !key.startsWith("ANTHROPIC_") && !key.startsWith("CLAUDE_CODE_") && key !== "CLAUDE_CONFIG_DIR",
    ),
  )
  const environment = {
    HOME: home,
    CLAUDE_CONFIG_DIR: configDir,
    ANTHROPIC_API_KEY: "stub-api-key",
    ANTHROPIC_BASE_URL: stub.baseUrl,
    ANTHROPIC_CUSTOM_MODEL_OPTION: LUNA,
    ANTHROPIC_CUSTOM_MODEL_OPTION_NAME: "Luna effort test",
    ANTHROPIC_CUSTOM_MODEL_OPTION_EFFORT_LEVEL: "max",
    ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES: "effort,max_effort,xhigh_effort",
    ANTHROPIC_DEFAULT_FABLE_MODEL: ASTRA,
    ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES: "effort,max_effort,xhigh_effort",
    CLAUDE_CODE_EFFORT_LEVEL: "medium",
    CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
    CLAUDE_CODE_SKIP_ONBOARDING: "1",
    CLAUDE_CODE_MAX_CONTEXT_TOKENS: "200000",
    FORCE_COLOR: "0",
    TERM: "xterm-256color",
  }
  const cli = cliEffort ? ` --effort ${shellQuote(cliEffort)}` : ""
  const command = `stty cols 120 rows 40; exec timeout --kill-after=${watchdogKillAfterSeconds}s ${timeout}s env ${shellEnvironment(environment)} bun --preload ${shellQuote(resolve(import.meta.dir, "..", "..", "runtime", "bun-ant-cell-segmenter.ts"))} ${shellQuote(bundle)} --bare --model ${shellQuote(LUNA)}${cli}`
  const scriptCommand =
    process.platform === "darwin"
      ? `script -q -e /dev/null bash -lc ${shellQuote(command)}`
      : `script -q -e -c ${shellQuote(command)} /dev/null`
  const proc = Bun.spawn({
    // Bun implements stdin:"pipe" with a socket on macOS, but Darwin `script`
    // needs a pipe. Bash process substitution gives `script` a real pipe while
    // letting the outer shell exit as soon as `script` exits; a regular
    // `cat | script` pipeline would make it wait for cat to see stdin EOF.
    cmd: ["bash", "-lc", `${scriptCommand} < <(cat)`],
    cwd: home,
    env: cleanEnv,
    detached: true,
    stdin: "pipe",
    stdout: "pipe",
    stderr: "pipe",
  })
  let stdinEnded = false
  function endInput(): void {
    if (stdinEnded) return
    stdinEnded = true
    proc.stdin.end()
  }
  function killGroup(): void {
    try {
      process.kill(-proc.pid, "SIGKILL")
    } catch {
      proc.kill("SIGKILL")
    }
  }
  const events = new EventConditions()
  // If the inner timeout kills the CLI while `script` is waiting for stdin,
  // end the complete wrapper group and wake any event wait before the harness
  // safety timeout. The inner PTY child gets its own TERM/KILL window first.
  const watchdog = setTimeout(() => {
    endInput()
    events.fail(new Error("whole-session watchdog expired"))
    killGroup()
  }, (timeout + watchdogKillAfterSeconds + 1) * 1000)
  let screen = ""
  let lastInteractiveScreen = ""
  let transcript = ""
  let exited = false
  let outputError: unknown
  const unsubscribe = stub.onRequest(() => events.notify())
  void proc.exited.then((code) => {
    clearTimeout(watchdog)
    exited = true
    events.fail(new Error(`PTY exited ${code}${code === 124 ? " (whole-session watchdog expired)" : ""}`))
  })
  const output = (async () => {
    for await (const chunk of proc.stdout) {
      transcript += new TextDecoder().decode(chunk)
      await new Promise<void>((done) => terminal.write(chunk, done))
      screen = screenText(terminal)
      if (screen.includes("❯")) lastInteractiveScreen = screen
      if (/TypeError|ReferenceError|React error #\d+/.test(screen)) events.fail(new Error(screen))
      else events.notify()
    }
  })().catch((error: unknown) => {
    outputError = error
    events.fail(error instanceof Error ? error : new Error(String(error)))
  })
  const errors = new Response(proc.stderr).text()
  async function waitFor(predicate: () => boolean, description: string): Promise<void> {
    try {
      await events.waitFor(predicate, description)
    } catch (error) {
      throw new Error(`${error instanceof Error ? error.message : error}\n${lastInteractiveScreen || screen}`, {
        cause: error,
      })
    }
  }
  async function key(value: string): Promise<void> {
    const trace = process.env.TUI_SMOKE_TRACE_KEYS === "1"
    if (trace) console.log(`pty key send: ${JSON.stringify(value)}`)
    proc.stdin.write(value)
    await proc.stdin.flush()
    if (trace) console.log(`pty key flushed: ${JSON.stringify(value)}`)
  }
  function inputLine(): string {
    const buffer = terminal.buffer.active
    return (buffer.getLine(buffer.baseY + buffer.cursorY)?.translateToString(true) ?? "").replaceAll("\u00a0", " ")
  }
  function inputReady(): boolean {
    return emptyPrompt(inputLine()) && !/esc to interrupt/i.test(screen)
  }
  async function submit(text: string): Promise<void> {
    await waitFor(inputReady, `input not idle before ${text}`)
    await submitPtyText({ line: inputLine, key, waitFor }, text)
  }
  function snapshot(label: string): void {
    if (process.env.TUI_SMOKE_SHOW_OUTPUT !== "1") return
    console.log(
      `screen: ${label}\n${screen
        .split("\n")
        .filter((line) => line.trim() && !/^[─▔]+$/.test(line))
        .join("\n")}`,
    )
  }
  async function commandText(text: string, expected: RegExp): Promise<void> {
    await submit(text)
    function commandResult(): string | undefined {
      if (!text.startsWith("/effort ") || text === "/effort current") return effortCommandResult(screen, text)
      const position = screen.lastIndexOf(`❯ ${text}`)
      if (position === -1) return undefined
      const result = screen
        .slice(position + `❯ ${text}`.length)
        .split("\n")
        .map((line) => line.match(/^\s*⎿\s+(.*)$/)?.[1])
        .find((line) => line !== undefined)
      if (
        result &&
        /^Effective effort for \S+: (?:low|medium|high|xhigh|max|backend default) \([^\n)]+\)\.$/.test(result)
      ) {
        return result
      }
      if (
        text === "/effort high" &&
        result &&
        /^Not applied: CLI --effort holds \S+ at (?:low|medium|high|xhigh|max) this session\.$/.test(result)
      ) {
        return result
      }
      return undefined
    }
    const completed = () => {
      if (text === "/model") return expected.test(screen)
      const result = commandResult()
      return result !== undefined && expected.test(result) && inputReady()
    }
    if (text.startsWith("/model ")) {
      await waitFor(() => screen.includes("Switch model?") || completed(), "model switch did not render")
      if (screen.includes("Switch model?")) await key("\r")
    }
    await waitFor(completed, `${text}: expected fresh command output ${expected}`)
    if (text === "/effort high" || text === "/effort current") snapshot(text)
  }
  let sequence = 0
  async function request(model: string, effort: string | undefined): Promise<void> {
    const marker = `effort-probe-${Date.now()}-${sequence++}`
    const from = stub.requests.length
    await submit(marker)
    await waitFor(
      () =>
        stub.requests.slice(from).some((request) => conversationRequest(request) && request.rawBody.includes(marker)),
      `request ${model}/${effort} did not reach localhost`,
    )
    const captured = stub.requests
      .slice(from)
      .find((request) => conversationRequest(request) && request.rawBody.includes(marker))
    const body = captured?.jsonBody as { model?: string; output_config?: { effort?: string } }
    if (body.model !== model || body.output_config?.effort !== effort)
      throw new Error(`expected request ${model}/${effort}, received ${JSON.stringify(body)}\n${screen}`)
    await waitFor(() => {
      const markerPosition = screen.lastIndexOf(marker)
      return markerPosition !== -1 && screen.slice(markerPosition + marker.length).includes("effort stub done")
    }, "fresh stub answer missing")
    await waitFor(inputReady, "input prompt not idle after fresh answer")
    console.log(`ok: rendered interaction sent ${model}/${effort}`)
  }
  function recordOracle(invariantId: ModelEffortRuntimeOracle): void {
    const platform = process.env.PCC_VERIFY_PLATFORM
    if (platform === "darwin-arm64" || platform === "linux-x64") {
      recordModelEffortRuntimeOracle(invariantId, platform)
    }
  }
  async function picker(): Promise<void> {
    await commandText("/model", /Select model/)
    const selected = () => screen.match(/❯\s+\d+\.\s+([^\n]+)/)?.[1] ?? ""
    for (let count = 0; !selected().includes("Luna effort test") && count < 20; count++) {
      const previous = selected()
      await key("\x1b[B")
      await waitFor(() => selected() !== previous, "picker selection did not advance")
    }
    await waitFor(() => selected().includes("Luna effort test"), "Luna picker row missing")
    const pickerText = () => screen.slice(screen.lastIndexOf("Select model"))
    const pickerEffort = () => pickerText().match(/(?:low|medium|high|xhigh|max) effort \([^\n)]+\)/i)?.[0]
    await waitFor(() => pickerEffort() !== undefined, "picker effort level did not render for the selected Luna row")
    const initialEffort = pickerEffort()
    await Bun.sleep(500)
    const settledEffort = pickerEffort()
    if (initialEffort !== settledEffort || settledEffort?.toLowerCase() !== "max effort (configured default)") {
      throw new Error(
        `picker Luna effort did not settle at Max/configured-default (initial=${initialEffort ?? "missing"}, settled=${settledEffort ?? "missing"})\n${pickerText()}`,
      )
    }
    snapshot("picker effort settled at Max/configured-default")
    await key("\x1b[D")
    await waitFor(
      () => pickerEffort()?.toLowerCase() === "xhigh effort (this session)",
      "left arrow did not adjust Luna max to xhigh for this session",
    )
    const initialAdjustedEffort = pickerEffort()
    await Bun.sleep(500)
    const settledAdjustedEffort = pickerEffort()
    if (
      initialAdjustedEffort !== settledAdjustedEffort ||
      settledAdjustedEffort?.toLowerCase() !== "xhigh effort (this session)"
    ) {
      throw new Error(
        `picker Luna effort did not settle at Xhigh/this-session after Left (initial=${initialAdjustedEffort ?? "missing"}, settled=${settledAdjustedEffort ?? "missing"})\n${pickerText()}`,
      )
    }
    snapshot("picker effort settled at Xhigh/this-session")
    recordOracle("model-echo")
    await Bun.sleep(250)
    await key("\r")
    snapshot("picker after confirming the selected model")
    await waitFor(
      () => !screen.includes("Select model") && screen.includes("with xhigh effort") && inputReady(),
      "picker did not commit xhigh and restore the input prompt",
    )
  }
  async function slider(): Promise<void> {
    await submit("/effort")
    await waitFor(() => screen.includes("←/→ to adjust") && screen.includes("▲"), "effort slider did not open")
    const sliderLevel = () => {
      const lines = screen.split("\n")
      const pointerRow = lines.findIndex((line) => line.includes("▲"))
      const pointer = lines[pointerRow]?.indexOf("▲") ?? -1
      const labels = lines[pointerRow + 1] ?? ""
      return ["low", "medium", "high", "xhigh", "max"].find((level) => {
        const match = new RegExp(`\\b${level}\\b`).exec(labels)
        return match !== null && Math.abs(match.index + Math.floor(level.length / 2) - pointer) <= 3
      })
    }
    await waitFor(() => sliderLevel() === "max", "effort slider did not initialize from applied max")
    recordOracle("slider-initial")
    snapshot("bare /effort initialized at max")
    await waitFor(
      () => screen.includes("this model, this session"),
      "effort slider does not explain that the change is model-local",
    )
    recordOracle("slider-scope")
    await waitFor(() => !screen.includes("ultracode"), "model effort slider still offers the global ultracode workflow")
    recordOracle("slider-workflow")
    await key("\x1b[D")
    await waitFor(() => sliderLevel() === "xhigh", "effort slider did not adjust max to xhigh")
    await key("\r")
    await waitFor(() => !screen.includes("▲") && inputReady(), "effort slider did not restore input")
  }
  async function sliderGuard(): Promise<void> {
    await submit("/effort")
    await waitFor(
      () => screen.includes("Current effort level:") && !screen.includes("←/→ to adjust") && !screen.includes("▲"),
      "CLI-pinned effort selector opened an editable slider instead of the current-status view",
    )
    recordOracle("slider-guard")
    snapshot("CLI-pinned /effort showed current status")
    await key("\x1b")
    await waitFor(inputReady, "current-status view did not close back to the input prompt")
  }
  try {
    await waitFor(() => screen.includes("Claude Code") && screen.includes("❯"), "startup prompt missing")
    await run({
      command: commandText,
      request,
      picker,
      slider,
      sliderGuard,
      recordOracle,
      snapshot,
      rendered: (expected) => waitFor(() => expected.test(screen), `rendered output missing ${expected}`),
      footerCleared: () =>
        waitFor(
          () => !/max.*\/effort/i.test(screen.split("\n").slice(-8).join("\n")),
          "footer retains rejected max effort",
        ),
    })
    await submit("/exit")
    endInput()
    const code = await proc.exited
    await output
    const stderr = await errors
    if (process.env.TUI_SMOKE_SHOW_STDERR === "1" && stderr) console.log(`pty stderr:\n${stderr}`)
    if (outputError || code !== 0 || /TypeError|ReferenceError|React error #\d+/.test(transcript + stderr))
      throw new Error(`PTY exited ${code}\n${transcript}\n${stderr}`)
    const settings = (await Bun.file(join(configDir, "settings.json")).json()) as {
      effortLevel?: string
      modelSettings?: unknown
    }
    if (settings.effortLevel !== "medium" || settings.modelSettings !== undefined)
      throw new Error(`session adjustment persisted effort: ${JSON.stringify(settings)}`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    console.error(transcript)
    console.error(await errors)
    throw error
  } finally {
    unsubscribe()
    events.fail(new Error("PTY session disposed"))
    if (!exited && !stdinEnded) {
      await key("\x03")
      await key("\x03")
      await Promise.race([proc.exited, Bun.sleep(1000)])
    }
    endInput()
    if (!exited) killGroup()
    await Promise.race([Promise.all([proc.exited, output, errors]), Bun.sleep(2000)])
    terminal.dispose()
  }
}

async function main(): Promise<number> {
  const options = createCommand("model-effort-session-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--recovery-only", "run only the backend rejection PTY scenario")
    .option("--model-switch-only", "run only the inline model-switch PTY scenario")
    .option("--picker-debug-only", "run the model-switch and effort-picker regression scenario")
    .option("--timeout-seconds <seconds>", "whole-session safety watchdog (not an interaction delay)", Number, 180)
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{
      bundle: string
      timeoutSeconds: number
      recoveryOnly?: boolean
      modelSwitchOnly?: boolean
      pickerDebugOnly?: boolean
    }>()
  const bundle = resolve(options.bundle)
  if (!Number.isSafeInteger(options.timeoutSeconds) || options.timeoutSeconds <= 0) {
    throw new Error("--timeout-seconds must be a positive integer")
  }
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-model-effort-session-")))
  const configDir = join(home, ".claude")
  mkdirSync(configDir)
  await Bun.write(
    join(configDir, ".claude.json"),
    JSON.stringify({
      customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
      hasCompletedOnboarding: true,
      projects: { [home]: { hasTrustDialogAccepted: true } },
      theme: "dark",
    }),
  )
  await Bun.write(join(configDir, "settings.json"), JSON.stringify({ effortLevel: "medium" }))
  const stub = await startClaudeApiStub({ text: "effort stub done" })
  try {
    if (options.modelSwitchOnly) {
      await session(bundle, stub, home, options.timeoutSeconds, undefined, async (ui) => {
        await ui.request(LUNA, "max")
        await ui.command("/effort auto", /Effective effort for gpt-5\.6-luna: max \(.+\)\./)
        await ui.request(LUNA, "max")
        await ui.command(
          "/model fable",
          /Current model runs with medium effort \(environment default for gpt-6-astra\)/,
        )
        await ui.request(ASTRA, "medium")
      })
      console.log("ok: inline /model fable switch reports the resolver source and sends the resolved model effort")
      return 0
    }
    if (options.pickerDebugOnly) {
      await session(bundle, stub, home, options.timeoutSeconds, undefined, async (ui) => {
        await ui.command("/model fable", /Set model/)
        await ui.rendered(/Current model runs with medium effort \(environment default for gpt-6-astra\)/)
        ui.snapshot("after switching to Fable")
        await ui.request(ASTRA, "medium")
        await ui.command("/effort low", /Effective effort for gpt-6-astra: low \(this session\)\./)
        await ui.request(ASTRA, "low")
        await ui.command(`/model ${LUNA}`, /Set model/)
        ui.snapshot("after switching back to Luna")
        await ui.picker()
        await ui.request(LUNA, "xhigh")
      })
      console.log("ok: model switch preserves Luna's picker effort and the picker applies the selected effort")
      return 0
    }
    if (!options.recoveryOnly) {
      await session(bundle, stub, home, options.timeoutSeconds, undefined, async (ui) => {
        await ui.request(LUNA, "max")
        await ui.command("/effort current", /Current effort level: max for gpt-5\.6-luna \(.+\)\./i)
        ui.recordOracle("model-effort-current")
        await ui.slider()
        await ui.request(LUNA, "xhigh")
        await ui.command("/effort auto", /Effective effort for gpt-5\.6-luna: max \(.+\)\./)
        await ui.request(LUNA, "max")
        await ui.command("/model fable", /Set model/)
        await ui.command("/effort low", /low.*gpt-6-astra|gpt-6-astra.*low/)
        await ui.request(ASTRA, "low")
        await ui.command(
          `/model ${LUNA}`,
          /Current model runs with max effort \(configured default for gpt-5\.6-luna\)/,
        )
        ui.recordOracle("inline-echo")
        await ui.request(LUNA, "max")
        await ui.command("/effort high", /high.*gpt-5\.6-luna|gpt-5\.6-luna.*high/)
        await ui.request(LUNA, "high")
        await ui.command("/model fable", /Set model/)
        await ui.command("/effort low", /low.*gpt-6-astra|gpt-6-astra.*low/)
        await ui.request(ASTRA, "low")
        await ui.command(`/model ${LUNA}`, /with high effort/)
        await ui.request(LUNA, "high")
        await ui.command("/effort auto", /default|auto/i)
        await ui.request(LUNA, "max")
        await ui.command("/model fable", /with low effort/)
        await ui.command("/effort max", /max.*gpt-6-astra|gpt-6-astra.*max/)
        await ui.request(ASTRA, "max")
        await ui.command(
          `/model ${LUNA}`,
          /Current model runs with max effort \(configured default for gpt-5\.6-luna\)/,
        )
        await ui.picker()
        await ui.request(LUNA, "xhigh")
        await ui.command("/model fable", /with max effort/)
        await ui.command(`/model ${LUNA}`, /with xhigh effort/)
        await ui.request(LUNA, "xhigh")
      })
      await session(bundle, stub, home, options.timeoutSeconds, undefined, async (ui) => {
        await ui.request(LUNA, "max")
      })
      await session(bundle, stub, home, options.timeoutSeconds, "low", async (ui) => {
        await ui.request(LUNA, "low")
        await ui.command("/effort high", /Not applied|--effort/i)
        await ui.sliderGuard()
        await ui.request(LUNA, "low")
        await ui.command("/model fable", /with low effort/)
        await ui.request(ASTRA, "low")
      })
    }
    const rejecting = await startClaudeApiStub({
      responder: async (request) => {
        const body = request.jsonBody as { output_config?: { effort?: string } }
        if (conversationRequest(request) && body.output_config?.effort !== undefined) {
          return Response.json(
            {
              type: "error",
              error: { type: "invalid_request_error", message: "This model does not support the effort parameter" },
            },
            { status: 400 },
          )
        }
        return fetch(`${stub.baseUrl}${request.path}`, {
          method: "POST",
          body: request.rawBody,
          headers: { "content-type": "application/json" },
        })
      },
    })
    try {
      await session(bundle, rejecting, home, options.timeoutSeconds, undefined, async (ui) => {
        await ui.request(LUNA, "max")
        const messages = rejecting.requests.filter(conversationRequest)
        if (messages.length < 2) throw new Error("unsupported effort did not retry")
        await ui.command("/effort current", /backend default.*effort unsupported/i)
        await ui.request(LUNA, undefined)
        await ui.footerCleared()
        for (const request of messages.slice(1)) {
          const body = request.jsonBody as { output_config?: { effort?: string } }
          if (body.output_config?.effort !== undefined)
            throw new Error(`retry retained rejected effort: ${JSON.stringify(body.output_config)}`)
        }
        await ui.rendered(/rejected the effort parameter/)
        await ui.rendered(/backend default is unknown/)
      })
    } finally {
      rejecting.stop()
    }
    console.log(
      options.recoveryOnly
        ? "ok: backend rejection warning, truthful current effort, retry and subsequent request omit effort"
        : "ok: per-model effort, reset, sliders, tier capabilities, CLI pin, session isolation, settings unchanged, backend recovery",
    )
    return 0
  } finally {
    stub.stop()
    rmSync(home, { recursive: true, force: true })
  }
}

if (import.meta.main) await runCli(main)
