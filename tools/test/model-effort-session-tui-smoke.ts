#!/usr/bin/env bun
import { mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { Terminal } from "@xterm/headless"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"
import { makeScriptCommand, shellEnvironment, shellQuote } from "./helpers/pty"

const LUNA = "gpt-5.6-luna"
const ASTRA = "gpt-6-astra"

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
  const command = `stty cols 120 rows 40; exec timeout --kill-after=3s 180s env ${shellEnvironment(environment)} bun ${shellQuote(bundle)} --bare --model ${shellQuote(LUNA)}${cli}`
  const proc = Bun.spawn({
    cmd: ["bash", "-lc", makeScriptCommand(command, "cat")],
    cwd: home,
    env: cleanEnv,
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
  const errors = new Response(proc.stderr).text()
  async function waitFor(predicate: () => boolean, description: string): Promise<void> {
    const deadline = Date.now() + timeout * 1000
    while (!predicate()) {
      if (exited || Date.now() > deadline) throw new Error(`${description}\n${screen}`)
      await Bun.sleep(30)
    }
    if (/TypeError|ReferenceError|React error #\d+/.test(screen)) throw new Error(screen)
  }
  async function key(value: string): Promise<void> {
    proc.stdin.write(value)
    await proc.stdin.flush()
    await Bun.sleep(150)
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
    await key(text)
    await key("\r")
    if (text.startsWith("/model ")) {
      await waitFor(
        () => screen.includes("Switch model?") || screen.includes(`❯ ${text}`),
        "model switch did not render",
      )
      if (screen.includes("Switch model?")) await key("\r")
    }
    await waitFor(() => {
      if (text === "/model") return expected.test(screen)
      const commandPosition = screen.lastIndexOf(`❯ ${text}`)
      return commandPosition !== -1 && expected.test(screen.slice(commandPosition + text.length + 2))
    }, `${text}: expected fresh command output ${expected}`)
    if (text === "/effort high" || text === "/effort current") snapshot(text)
  }
  let sequence = 0
  async function request(model: string, effort: string | undefined): Promise<void> {
    const marker = `effort-probe-${Date.now()}-${sequence++}`
    const from = stub.requests.length
    await key(marker)
    await key("\r")
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
    await Bun.sleep(500)
    console.log(`ok: rendered interaction sent ${model}/${effort}`)
  }
  async function picker(): Promise<void> {
    await commandText("/model", /Select model/)
    const selected = () => screen.match(/❯\s+\d+\.\s+([^\n]+)/)?.[1] ?? ""
    for (let count = 0; !selected().includes("Luna effort test") && count < 20; count++) await key("\x1b[B")
    await waitFor(() => selected().includes("Luna effort test"), "Luna picker row missing")
    const pickerText = () => screen.slice(screen.lastIndexOf("Select model"))
    await waitFor(() => /Max effort/.test(pickerText()), "picker does not display Luna max")
    await key("\x1b[D")
    await waitFor(() => /Xhigh effort/i.test(pickerText()), "left arrow did not adjust Luna max to xhigh")
    await key("\r")
    await waitFor(() => !screen.includes("Select model"), "picker did not close")
  }
  async function slider(): Promise<void> {
    await key("/effort")
    await key("\r")
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
    snapshot("bare /effort initialized at max")
    if (screen.includes("s for this session only"))
      throw new Error(`slider still implies effort persistence\n${screen}`)
    await key("\x1b[D")
    await waitFor(() => sliderLevel() === "xhigh", "effort slider did not adjust max to xhigh")
    await key("\r")
    await waitFor(() => !screen.includes("▲"), "effort slider did not close")
  }
  try {
    await waitFor(() => screen.includes("Claude Code") && screen.includes("❯"), "startup prompt missing")
    await run({
      command: commandText,
      request,
      picker,
      slider,
      rendered: (expected) => waitFor(() => expected.test(screen), `rendered output missing ${expected}`),
      footerCleared: () =>
        waitFor(
          () => !/max.*\/effort/i.test(screen.split("\n").slice(-8).join("\n")),
          "footer retains rejected max effort",
        ),
    })
    await key("/exit")
    await key("\r")
    proc.stdin.end()
    const code = await proc.exited
    await output
    const stderr = await errors
    if (code !== 0 || /TypeError|ReferenceError|React error #\d+/.test(transcript + stderr))
      throw new Error(`PTY exited ${code}\n${transcript}\n${stderr}`)
    const settings = (await Bun.file(join(configDir, "settings.json")).json()) as {
      effortLevel?: string
      modelSettings?: unknown
    }
    if (settings.effortLevel !== "medium" || settings.modelSettings !== undefined)
      throw new Error(`session adjustment persisted effort: ${JSON.stringify(settings)}`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    throw error
  } finally {
    if (!exited) {
      await key("\x03")
      await key("\x03")
      await Promise.race([proc.exited, Bun.sleep(1000)])
    }
    proc.stdin.end()
    if (!exited) proc.kill()
    await Promise.race([Promise.all([proc.exited, output, errors]), Bun.sleep(2000)])
    terminal.dispose()
  }
}

async function main(): Promise<number> {
  const options = createCommand("model-effort-session-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .option("--recovery-only", "run only the backend rejection PTY scenario")
    .option("--timeout-seconds <seconds>", "timeout per rendered interaction", Number, 20)
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{ bundle: string; timeoutSeconds: number; recoveryOnly?: boolean }>()
  const bundle = resolve(options.bundle)
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
    if (!options.recoveryOnly) {
      await session(bundle, stub, home, options.timeoutSeconds, undefined, async (ui) => {
        await ui.request(LUNA, "max")
        await ui.command("/effort current", /max/)
        await ui.slider()
        await ui.request(LUNA, "xhigh")
        await ui.command("/effort auto", /max.*gpt-5\.6-luna/)
        await ui.command("/model fable", /Set model/)
        await ui.command("/effort low", /low.*gpt-6-astra|gpt-6-astra.*low/)
        await ui.request(ASTRA, "low")
        await ui.command(`/model ${LUNA}`, /with max effort/)
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
        await ui.command(`/model ${LUNA}`, /with max effort/)
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
