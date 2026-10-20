#!/usr/bin/env bun
import assert from "node:assert/strict"
import { randomUUID } from "node:crypto"
import { mkdirSync, mkdtempSync, realpathSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { Terminal } from "@xterm/headless"
import { createCommand, runCli } from "../lib/cli"
import type { ClaudeApiRequest } from "./helpers/claude-api-stub"
import { EventConditions } from "./helpers/event-conditions"
import { shellEnvironment, shellQuote } from "./helpers/pty"
import { emptyPrompt, submitPtyText } from "./helpers/pty-input"
import { recordThinkingSummaryBoundaryRuntimeOracle } from "./helpers/runtime-oracle-checks"
import { thinkingSummaryCancelReady } from "./helpers/thinking-summary-cancel-ready"
import { finishThinkingSummaryInput, settleThroughWait } from "./helpers/thinking-summary-lifecycle"

type JsonObject = Record<string, unknown>
type CapturedRequest = Omit<ClaudeApiRequest, "stub">
type Options = { bundle: string; timeoutSeconds: number; displayMode: string; viewport: string }
const TAG = "DUAL-7F2"
const HISTORY = ["R1-7F2", "N1-7F2", "R2-7F2", "N2-7F2"]
const FINAL = "DONE-7F2"
function object(value: unknown): value is JsonObject {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}
// Classifier fixture only: protobuf field path 2 -> 1 -> 8, NOT a cryptographic server signature.
function signature(kind: string): string {
  const text = Buffer.from(kind)
  assert(text.length < 120)
  return Buffer.from([0x12, text.length + 4, 0x0a, text.length + 2, 0x42, text.length, ...text]).toString("base64")
}
const REASON = signature("summary"),
  NARRATION = signature("narration")
const PRESERVED = [
  { type: "thinking", thinking: "R1-7F2 first then second", signature: REASON },
  { type: "thinking", thinking: "N1-7F2 inspecting local fixture", signature: NARRATION },
]
function blocks(request: CapturedRequest): JsonObject[] {
  assert(object(request.jsonBody) && Array.isArray(request.jsonBody.messages))
  return request.jsonBody.messages.flatMap((message: unknown) =>
    object(message) && Array.isArray(message.content) ? message.content.filter(object) : [],
  )
}
function assertPreserved(request: CapturedRequest): void {
  for (const expected of PRESERVED) {
    const actual = blocks(request).find((block) => block.type === "thinking" && block.thinking === expected.thinking)
    assert(actual, `signed history missing: ${expected.thinking}`)
    assert.equal(actual.signature, expected.signature, "rendering mutated signed history")
  }
}
function copies(text: string, marker: string): number {
  return text.split(marker).length - 1
}
function unique(text: string, markers: readonly string[]): void {
  for (const marker of markers) assert.equal(copies(text, marker), 1, `expected one rendered copy: ${marker}`)
}
class Stream {
  readonly response: Response
  cancelled = false
  closed = false
  #controller!: ReadableStreamDefaultController<Uint8Array>
  constructor(
    request: CapturedRequest,
    id: number,
    readonly notify: () => void,
  ) {
    this.response = new Response(
      new ReadableStream<Uint8Array>({
        start: (controller) => {
          this.#controller = controller
        },
        cancel: () => {
          this.cancelled = true
          notify()
        },
      }),
      { headers: { "Content-Type": "text/event-stream", "request-id": `req_dual_${id}` } },
    )
    this.emit("message_start", {
      message: {
        id: `msg_dual_${id}`,
        type: "message",
        role: "assistant",
        model: object(request.jsonBody) ? request.jsonBody.model : "claude-opus-4-7",
        content: [],
        stop_reason: null,
        stop_sequence: null,
        usage: { input_tokens: 1, output_tokens: 0 },
      },
    })
  }
  emit(type: string, data: JsonObject): void {
    assert(!this.cancelled && !this.closed, "emit on cancelled/closed stream")
    this.#controller.enqueue(new TextEncoder().encode(`event: ${type}\ndata: ${JSON.stringify({ type, ...data })}\n\n`))
    this.notify()
  }
  start(index: number, content_block: JsonObject): void {
    this.emit("content_block_start", { index, content_block })
  }
  delta(index: number, delta: JsonObject): void {
    this.emit("content_block_delta", { index, delta })
  }
  think(index: number, thinking: string): void {
    this.delta(index, { type: "thinking_delta", thinking })
  }
  sign(index: number, value: string): void {
    this.delta(index, { type: "signature_delta", signature: value })
  }
  stop(index: number): void {
    this.emit("content_block_stop", { index })
  }
  begin(index: number): void {
    this.start(index, { type: "thinking", thinking: "", signature: "" })
  }
  finish(reason = "end_turn"): void {
    this.emit("message_delta", { delta: { stop_reason: reason, stop_sequence: null }, usage: { output_tokens: 40 } })
    this.emit("message_stop", {})
    this.close()
  }
  text(index: number, text: string): void {
    this.start(index, { type: "text", text: "" })
    this.delta(index, { type: "text_delta", text })
    this.stop(index)
    this.finish()
  }
  close(): void {
    if (this.closed || this.cancelled) return
    this.closed = true
    this.#controller.close()
    this.notify()
  }
}

// Bun node:http does not report idle midstream cancellation reliably on the host
// runtime; direct Bun.serve preserves native ReadableStream.cancel observability.
function startLocalStub(options: { responder(request: CapturedRequest): Response }) {
  const requests: CapturedRequest[] = []
  const server = Bun.serve({
    hostname: "127.0.0.1",
    port: 0,
    idleTimeout: 0,
    async fetch(incoming) {
      const url = new URL(incoming.url)
      const rawBody = await incoming.text()
      let jsonBody: unknown
      try {
        jsonBody = rawBody ? JSON.parse(rawBody) : undefined
      } catch {
        jsonBody = undefined
      }
      const request: CapturedRequest = {
        order: requests.length,
        method: incoming.method,
        path: url.pathname,
        query: url.search,
        headers: Object.fromEntries(incoming.headers),
        rawBody,
        jsonBody,
      }
      requests.push(request)
      if (incoming.method !== "POST" || !url.pathname.startsWith("/v1/messages"))
        return new Response("not found", { status: 404 })
      return options.responder(request)
    },
  })
  return { baseUrl: server.url.origin, requests, stop: () => server.stop(true) }
}

async function scenario(options: Options, display: string, cols: number, rows: number): Promise<void> {
  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-dual-summary-")))
  const artifacts = join(home, "evidence"),
    configDir = join(home, ".claude"),
    fixture = join(home, "fixture.txt")
  mkdirSync(artifacts)
  mkdirSync(configDir)
  console.error(`dual-summary evidence (started): ${artifacts}`)
  await Bun.write(fixture, "LOCAL-READ-7F2\n")
  const sessionId = randomUUID(),
    events = new EventConditions()
  const streams: Stream[] = [],
    requests: CapturedRequest[] = [],
    phases: string[] = []
  let failure: Error | undefined,
    success = false
  const notify = () => events.notify()
  const fail = (error: unknown) => {
    failure = error instanceof Error ? error : new Error(String(error))
    notify()
  }
  const stub = startLocalStub({
    responder: (request) => {
      if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })
      const body = request.jsonBody
      const hasReadTool =
        object(body) &&
        Array.isArray(body.tools) &&
        body.tools.some((tool: unknown) => object(tool) && tool.name === "Read")
      if (!object(body) || body.stream !== true || !hasReadTool || !JSON.stringify(body.messages ?? []).includes(TAG)) {
        if (object(body) && body.stream === true) {
          const auxiliary = new Stream(request, 0, notify)
          auxiliary.text(0, "Local summary test")
          return auxiliary.response
        }
        return Response.json({
          id: "msg_aux",
          type: "message",
          role: "assistant",
          model: object(body) ? body.model : "claude-opus-4-7",
          content: [{ type: "text", text: "Local summary test" }],
          stop_reason: "end_turn",
          stop_sequence: null,
          usage: { input_tokens: 1, output_tokens: 1 },
        })
      }
      try {
        assert(object(body.thinking), "missing thinking config")
        assert.equal(body.thinking.display, "summarized", "interactive default/explicit must request summarized")
        requests.push(request)
        const stream = new Stream(request, requests.length, notify)
        streams.push(stream)
        notify()
        return stream.response
      } catch (error) {
        fail(error)
        return Response.json({ error: { type: "test_contract", message: String(error) } }, { status: 400 })
      }
    },
  })
  await Bun.write(join(configDir, "settings.json"), JSON.stringify({ theme: "dark", permissions: { allow: ["Read"] } }))
  await Bun.write(
    join(configDir, ".claude.json"),
    JSON.stringify({
      hasCompletedOnboarding: true,
      theme: "dark",
      customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
      projects: { [home]: { hasTrustDialogAccepted: true } },
    }),
  )
  async function launch(resume: boolean) {
    const terminal = new Terminal({ allowProposedApi: true, cols, rows, scrollback: 3000 })
    let raw = "",
      screen = "",
      revision = 0,
      exited: number | undefined
    const root = resolve(import.meta.dir, "../..")
    const environment = {
      PATH: process.env.PATH ?? "/usr/bin:/bin",
      HOME: home,
      TMPDIR: home,
      CLAUDE_CONFIG_DIR: configDir,
      CLAUDE_CODE_TMPDIR: home,
      TERM: "xterm-256color",
      LANG: "en_US.UTF-8",
      FORCE_COLOR: "0",
      ANTHROPIC_API_KEY: "stub-api-key",
      ANTHROPIC_BASE_URL: "https://api.anthropic.com",
      CLAUDE_API_STUB_BASE_URL: stub.baseUrl,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      DISABLE_TELEMETRY: "1",
      DO_NOT_TRACK: "1",
      DISABLE_PROMPT_CACHING: "1",
      SHELL: Bun.which("bash") ?? "/bin/bash",
    }
    const timeoutPath = Bun.which("timeout")
    assert(timeoutPath, "GNU timeout is required for bounded PTY children")
    const command = [
      `stty cols ${cols} rows ${rows}; exec ${shellQuote(timeoutPath)} --kill-after=3s ${options.timeoutSeconds}s env -i`,
      shellEnvironment(environment),
      shellQuote(process.execPath),
      "--preload",
      shellQuote(join(root, "runtime/system-prompt-overrides.ts")),
      "--preload",
      shellQuote(join(root, "runtime/bun-ant-cell-segmenter.ts")),
      "--preload",
      shellQuote(join(import.meta.dir, "helpers/redirect-first-party-api-to-stub.ts")),
      shellQuote(resolve(options.bundle)),
      "--bare --hide-builtin-footer --model claude-opus-4-7 --thinking adaptive --tools Read --allowedTools Read",
      display === "explicit" ? "--thinking-display summarized" : "",
      resume ? `--resume ${sessionId}` : `--session-id ${sessionId}`,
    ].join(" ")
    const script =
      process.platform === "darwin"
        ? `script -q -e /dev/null ${shellQuote(environment.SHELL)} -c ${shellQuote(command)}`
        : `script -q -e -c ${shellQuote(command)} /dev/null`
    const proc = Bun.spawn({
      cmd: [environment.SHELL, "-c", `${script} < <(cat)`],
      cwd: home,
      env: { PATH: environment.PATH, HOME: home, SHELL: environment.SHELL, TERM: environment.TERM },
      stdin: "pipe",
      stdout: "pipe",
      stderr: "pipe",
    })
    const processExit = proc.exited.then((code) => {
      exited = code
      notify()
      return code
    })
    let closing = false
    const stopPumps = new AbortController()
    const stopped = new Promise<void>((done) =>
      stopPumps.signal.addEventListener("abort", () => done(), { once: true }),
    )
    const pump = async (input: ReadableStream<Uint8Array>) => {
      const decoder = new TextDecoder()
      const reader = input.getReader()
      stopPumps.signal.addEventListener(
        "abort",
        () => {
          void reader.cancel().catch(() => {})
        },
        { once: true },
      )
      while (!closing) {
        const chunk = await Promise.race([reader.read(), stopped.then(() => undefined)])
        if (!chunk || chunk.done || closing) break
        const text = decoder.decode(chunk.value, { stream: true })
        raw += text
        if (!text) continue
        await Promise.race([new Promise<void>((done) => terminal.write(text, done)), stopped])
        if (closing) break
        const buffer = terminal.buffer.active
        screen = Array.from(
          { length: buffer.length },
          (_, index) => buffer.getLine(index)?.translateToString(true) ?? "",
        )
          .join("\n")
          .replaceAll("\u00a0", " ")
        revision++
        if (/ReferenceError|TypeError|Minified React error|openpty:|test_contract/.test(screen)) fail(new Error(screen))
        notify()
      }
    }
    const output = Promise.all([pump(proc.stdout), pump(proc.stderr)]).catch((error) => {
      if (!closing) fail(error)
    })
    let activePhase = "launch"
    const diagnostic = (phase: string) =>
      console.error(`dual-summary ${display} ${cols}x${rows} ${resume ? "resume" : "main"}: ${phase}`)
    const watchdog = setTimeout(
      () => fail(new Error(`PTY watchdog: ${display} ${cols}x${rows}; phase=${activePhase}`)),
      options.timeoutSeconds * 1000,
    )
    async function wait(predicate: () => boolean, description: string): Promise<void> {
      activePhase = description
      await events.waitFor(() => Boolean(failure) || predicate() || exited !== undefined, description)
      if (failure)
        throw new Error(
          `While waiting for ${description}; cursor=${JSON.stringify(line())}; streams=${JSON.stringify(streams.map((stream) => ({ cancelled: stream.cancelled, closed: stream.closed })))}`,
          { cause: failure },
        )
      assert(predicate(), `PTY exited ${exited} before ${description}\n${screen}`)
    }
    async function key(value: string): Promise<void> {
      proc.stdin.write(value)
      await settleThroughWait(proc.stdin.flush(), wait, notify, "stdin key flush")
    }
    async function finishInput(): Promise<void> {
      diagnostic("sending stdin EOF and awaiting exit")
      await finishThinkingSummaryInput(
        () => proc.stdin.end(),
        () => exited,
        wait,
        notify,
      )
      diagnostic("child exited successfully")
    }
    function line(): string {
      const buffer = terminal.buffer.active
      return (buffer.getLine(buffer.baseY + buffer.cursorY)?.translateToString(true) ?? "").replaceAll("\u00a0", " ")
    }
    function ready(): boolean {
      return emptyPrompt(line()) && !/esc to interrupt/i.test(screen.slice(-cols * rows))
    }
    async function snapshot(phase: string): Promise<string> {
      const text = screen
      phases.push(phase)
      diagnostic(phase)
      await Bun.write(join(artifacts, `${phase}.txt`), text)
      const buffer = terminal.buffer.active
      await Bun.write(
        join(artifacts, `${phase}-viewport.json`),
        JSON.stringify(
          {
            cols,
            rows,
            baseY: buffer.baseY,
            viewportY: buffer.viewportY,
            cursorY: buffer.cursorY,
            text: Array.from(
              { length: rows },
              (_, index) => buffer.getLine(buffer.viewportY + index)?.translateToString(true) ?? "",
            ).join("\n"),
          },
          null,
          2,
        ),
      )
      return text
    }
    async function dump(): Promise<void> {
      const prefix = resume ? "resume" : "main"
      await Bun.write(join(artifacts, `${prefix}.ansi`), raw)
      await Bun.write(join(artifacts, `${prefix}-last.txt`), screen)
    }
    async function close(): Promise<void> {
      clearTimeout(watchdog)
      await dump()
      closing = true
      stopPumps.abort()
      try {
        proc.stdin.end()
      } catch {
        /* child may already have closed stdin */
      }
      if (exited === undefined) proc.kill()
      let deadline: ReturnType<typeof setTimeout> | undefined
      try {
        await Promise.race([
          Promise.all([processExit, output]),
          new Promise<never>((_, reject) => {
            deadline = setTimeout(() => reject(new Error("PTY cleanup exceeded 3s")), 3000)
          }),
        ])
      } finally {
        if (deadline) clearTimeout(deadline)
        terminal.dispose()
      }
    }
    return {
      wait,
      waitFor: wait,
      line,
      key,
      ready,
      snapshot,
      dump,
      close,
      finishInput,
      screen: () => screen,
      revision: () => revision,
    }
  }
  const sessions: Array<Awaited<ReturnType<typeof launch>>> = []
  let cleanupFailure: unknown
  try {
    const tui = await launch(false)
    sessions.push(tui)
    await tui.wait(tui.ready, "initial composer")
    await submitPtyText(tui, `${TAG} run local Read and summaries`)
    let consumed = 0
    async function nextStream(description: string, toolUseId?: string): Promise<Stream> {
      await tui.wait(() => streams.length > consumed, description)
      const request = requests[consumed]
      if (toolUseId) {
        assert(blocks(request).some((block) => block.type === "tool_result" && block.tool_use_id === toolUseId))
        assertPreserved(request)
      }
      return streams[consumed++]
    }
    const first = await nextStream("first request")
    first.begin(0)
    first.think(0, "R1-7F2 first")
    await tui.wait(() => tui.screen().includes("R1-7F2"), "thinking before signature")
    assert.match(await tui.snapshot("01-reasoning-live"), /∴ Summary/)
    first.think(0, " then second")
    await tui.wait(() => tui.screen().includes("then second"), "second delta")
    first.sign(0, REASON)
    first.stop(0)
    first.begin(1)
    first.think(1, "N1-7F2 inspecting")
    await tui.wait(() => tui.screen().includes("N1-7F2"), "narration before signature")
    assert.match(await tui.snapshot("02-narration-unknown"), /∴ Summary/)
    // Native signature_delta REPLACES, not appends. Partial metadata must not poison classification.
    first.sign(1, NARRATION.slice(0, Math.floor(NARRATION.length / 2)))
    first.think(1, " local fixture")
    await tui.wait(() => tui.screen().includes("local fixture"), "partial signature delta")
    assert.match(await tui.snapshot("03-partial-signature"), /∴ Summary/)
    const revision = tui.revision()
    first.sign(1, NARRATION)
    first.stop(1)
    first.begin(2)
    first.think(2, "")
    await tui.wait(
      () => tui.revision() > revision && !tui.screen().includes("∴ Summary"),
      "completed narration replaces live row",
    )
    unique(await tui.snapshot("04-complete-empty-block"), HISTORY.slice(0, 2))
    first.sign(2, REASON)
    first.stop(2)
    first.begin(3)
    first.think(3, " \n\t ")
    first.sign(3, NARRATION)
    first.stop(3)
    first.start(4, { type: "tool_use", id: "dual_read_7f2", name: "Read", input: {} })
    first.delta(4, { type: "input_json_delta", partial_json: JSON.stringify({ file_path: fixture }) })
    first.stop(4)
    first.finish("tool_use")
    const second = await nextStream("first local Read tool loop", "dual_read_7f2")
    await tui.snapshot("05-tool-loop")
    second.begin(0)
    second.think(0, "R2-7F2 verified file")
    await tui.wait(() => tui.screen().includes("R2-7F2"), "thinking after tool")
    second.sign(0, REASON)
    second.stop(0)
    // No narration/text breaker between this ordinary summary and Read2: native hgo
    // absorbs the summary, then clears latestThinkingSummary on the next collapsible tool.
    second.start(1, { type: "tool_use", id: "dual_read_again_7f2", name: "Read", input: {} })
    second.delta(1, { type: "input_json_delta", partial_json: JSON.stringify({ file_path: fixture }) })
    second.stop(1)
    second.finish("tool_use")
    const third = await nextStream("second local Read tool loop", "dual_read_again_7f2")
    const intervening = blocks(requests[consumed - 1]).find((block) => block.thinking === "R2-7F2 verified file")
    assert.equal(intervening?.signature, REASON, "grouping must not mutate intervening signed summary")
    third.begin(0)
    third.think(0, "N2-7F2 finishing")
    await tui.wait(() => tui.screen().includes("N2-7F2"), "narration after second Read")
    unique(await tui.snapshot("05b-summary-between-reads"), ["R2-7F2"])
    third.sign(0, NARRATION)
    third.stop(0)
    third.text(1, FINAL)
    await tui.wait(() => tui.screen().includes(FINAL) && tui.ready(), "finished composer")
    const completed = await tui.snapshot("06-completed-normal")
    unique(completed, [...HISTORY, FINAL])
    assert(!completed.includes("∴ Summary"), "completed turn leaves live summary")
    // Native Bs uses aria-label="thinking:" plus Jjt (∴), not a visible "Thinking" heading.
    assert.equal(copies(completed, "∴"), 2, "only the two ordinary nonblank summaries get the native thinking glyph")
    for (const marker of ["R1-7F2", "R2-7F2"]) assert.match(completed, new RegExp(`∴\\s+${marker}`))
    // Transcript is a native scroll viewport, not terminal scrollback. Never
    // concatenate overlapping pages and mistake revisited rows for duplicates.
    async function verifyTranscript(view: typeof tui, phase: string, markers: readonly string[], transcript = true) {
      const seen = new Set<string>()
      for (let page = 0; page < 12; page++) {
        const text = await view.snapshot(`${phase}-${page}`)
        for (const marker of markers) {
          assert(copies(text, marker) <= 1, `duplicate within transcript page: ${marker}`)
          if (text.includes(marker)) seen.add(marker)
        }
        if (seen.size === markers.length) {
          if (!transcript && page > 0) {
            await view.key("\x1b[1;5F")
            await view.wait(
              () => view.screen().includes(markers.at(-1) ?? "") && view.ready(),
              "normal history returns to bottom",
            )
          }
          return
        }
        const prior = view.screen()
        await view.key(page === 0 ? (transcript ? "g" : "\x1b[1;5H") : "\x1b[6~")
        await view.wait(() => view.screen() !== prior, "native transcript page changed")
      }
      assert.fail(`unseen transcript bodies: ${markers.filter((marker) => !seen.has(marker))}`)
    }
    let before = tui.revision()
    await tui.key("\x0f")
    await tui.wait(() => tui.revision() > before && /transcript|ctrl\+o/i.test(tui.screen()), "expanded transcript")
    await verifyTranscript(tui, "07-completed-transcript", [...HISTORY, FINAL])
    before = tui.revision()
    await tui.key("\x0f")
    await tui.wait(() => tui.revision() > before && tui.ready(), "normal composer")
    // Native Cse treats thinking-only output as no response: ESC rewinds the turn
    // and restores its prompt. A completed thinking anchor would still rewind.
    const rollbackPrompt = `${TAG} early rollback`
    await submitPtyText(tui, rollbackPrompt)
    const rollback = await nextStream("thinking-only early cancellation")
    rollback.begin(0)
    rollback.think(0, "EARLY-7F2 rollback")
    await tui.wait(() => tui.screen().includes("EARLY-7F2"), "early-cancel live text visible")
    await tui.snapshot("08-early-before")
    await tui.key("\x1b")
    await tui.wait(() => tui.line().trim() === `❯ ${rollbackPrompt}`, "early cancellation restores draft")
    if (!rollback.cancelled) rollback.emit("ping", {})
    await tui.wait(() => rollback.cancelled, "early cancel closes transport after SSE heartbeat")
    const rewound = await tui.snapshot("08-early-rewound")
    assert(!rewound.includes("EARLY-7F2"), "native early rewind must remove partial")
    assert(!rewound.includes("∴ Summary"), "early rewind leaves live summary")
    await tui.key("\x15")
    await tui.wait(tui.ready, "explicitly cleared restored draft")
    for (const [index, signed] of [false, true].entries()) {
      const marker = signed ? "C2-7F2" : "C1-7F2"
      await submitPtyText(tui, `${TAG} interrupt ${index}`)
      const pending = await nextStream(`interrupt request ${index}`)
      // A completed text block makes native Cse=false, exercising retained partials.
      pending.start(0, { type: "text", text: "" })
      pending.delta(0, { type: "text_delta", text: `ANCHOR-${index}-7F2` })
      pending.stop(0)
      await tui.wait(() => tui.screen().includes(`ANCHOR-${index}-7F2`), "completed text anchor visible")
      pending.begin(1)
      pending.think(1, `${marker} pending`)
      await tui.wait(() => tui.screen().includes(marker), "interrupt text visible")
      if (signed) {
        pending.sign(1, NARRATION)
        pending.think(1, " signed-arrival")
        await tui.wait(() => tui.screen().includes("signed-arrival"), "post-signature delta rendered before interrupt")
      }
      await tui.snapshot(`08-interrupt-${index}-before`)
      await tui.key("\x1b")
      await tui.wait(tui.ready, "cancelled turn restores composer")
      if (!pending.cancelled) pending.emit("ping", {})
      await tui.wait(
        () => thinkingSummaryCancelReady(pending.cancelled, tui.ready(), tui.screen(), marker),
        "cancel closes transport and renders live cleanup",
      )
      const cancelled = await tui.snapshot(`09-interrupt-${index}-after`)
      unique(cancelled, [marker])
      assert(!cancelled.includes("∴ Summary"), "cancelled turn leaves stale live summary")
    }
    await submitPtyText(tui, `${TAG} recovery`)
    const recovery = await nextStream("post-cancel request")
    assertPreserved(requests[consumed - 1])
    recovery.text(0, "RECOVERED-7F2")
    await tui.wait(() => tui.screen().includes("RECOVERED-7F2") && tui.ready(), "recovery complete")
    await verifyTranscript(tui, "10-recovered", [...HISTORY, "RECOVERED-7F2"], false)
    console.error(`dual-summary ${display} ${cols}x${rows}: submitting main /exit`)
    await submitPtyText(tui, "/exit")
    await tui.finishInput()
    const resumed = await launch(true)
    sessions.push(resumed)
    await resumed.wait(() => resumed.ready() && resumed.screen().includes("RECOVERED-7F2"), "resumed history")
    await verifyTranscript(resumed, "11-resumed-normal", [...HISTORY, FINAL, "RECOVERED-7F2"], false)
    before = resumed.revision()
    await resumed.key("\x0f")
    await resumed.wait(
      () => resumed.revision() > before && /transcript|ctrl\+o/i.test(resumed.screen()),
      "resumed transcript",
    )
    await verifyTranscript(resumed, "12-resumed-transcript", [...HISTORY, FINAL, "RECOVERED-7F2"])
    before = resumed.revision()
    await resumed.key("\x0f")
    await resumed.wait(() => resumed.revision() > before && resumed.ready(), "resumed composer")
    console.error(`dual-summary ${display} ${cols}x${rows}: submitting resumed /exit`)
    await submitPtyText(resumed, "/exit")
    await resumed.finishInput()
    assert.equal(requests.length, consumed, "resume/exit should not invoke the model")
    success = true
  } catch (error) {
    console.error(error instanceof Error ? error.stack : error)
    console.error(`dual-summary failed; evidence: ${artifacts}`)
    for (const session of sessions) await session.dump()
    throw error
  } finally {
    for (const stream of streams) stream.close()
    stub.stop()
    for (const session of sessions) {
      try {
        await session.close()
      } catch (error) {
        console.error("dual-summary cleanup failure:", error)
        cleanupFailure ??= error
        success = false
      }
    }
    await Bun.write(
      join(artifacts, "requests.json"),
      JSON.stringify(
        requests.map((request) => request.jsonBody),
        null,
        2,
      ),
    )
    await Bun.write(
      join(artifacts, "all-requests.json"),
      JSON.stringify(
        stub.requests.map((request) => ({ path: request.path, body: request.jsonBody })),
        null,
        2,
      ),
    )
    await Bun.write(
      join(artifacts, "events.json"),
      JSON.stringify(
        {
          display,
          cols,
          rows,
          sessionId,
          success,
          phases,
          streams: streams.map((stream) => ({ cancelled: stream.cancelled, closed: stream.closed })),
        },
        null,
        2,
      ),
    )
    console.log(`dual-summary evidence: ${artifacts}`)
  }
  if (cleanupFailure) throw cleanupFailure
  const viewport = `${cols}x${rows}`
  assert(display === "default" || display === "explicit")
  assert(viewport === "80x24" || viewport === "120x40")
  recordThinkingSummaryBoundaryRuntimeOracle(display, viewport)
  console.log(`PASS dual summaries: ${display} ${cols}x${rows}`)
}
async function main(): Promise<number> {
  const options = createCommand("thinking-summaries-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "unified rendered feature bundle")
    .option("--timeout-seconds <seconds>", "per-PTY watchdog", Number, 120)
    .option("--display-mode <mode>", "all, default, or explicit", "all")
    .option("--viewport <size>", "both, 80x24, or 120x40", "both")
    .parse(process.argv.slice(2), { from: "user" })
    .opts<Options>()
  assert(["all", "default", "explicit"].includes(options.displayMode))
  assert(["both", "80x24", "120x40"].includes(options.viewport))
  assert(Number.isSafeInteger(options.timeoutSeconds) && options.timeoutSeconds > 0)
  assert(await Bun.file(options.bundle).exists(), "rendered feature bundle missing")
  const displays = options.displayMode === "all" ? ["default", "explicit"] : [options.displayMode]
  const sizes = options.viewport === "both" ? ["80x24", "120x40"] : [options.viewport]
  for (const display of displays)
    for (const size of sizes) {
      const [cols, rows] = size.split("x").map(Number)
      await scenario(options, display, cols, rows)
    }
  return 0
}
if (import.meta.main) await runCli(main)
