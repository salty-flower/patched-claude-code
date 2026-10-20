import { expect, test } from "bun:test"

// Serialize a typed fixture into a fresh process: never replace the runner's fetch.
async function fixture(mode: "native" | "helper", scenario: string, shared: boolean, directory: string) {
  const deadline = async <T>(promise: Promise<T>, ms = 2_000): Promise<T> => {
    let timer: ReturnType<typeof setTimeout> | undefined
    try {
      return await Promise.race([
        promise,
        new Promise<never>((_, reject) => {
          timer = setTimeout(() => reject(new Error("event deadline exceeded")), ms)
        }),
      ])
    } finally {
      clearTimeout(timer)
    }
  }
  let requests = 0
  let signalAborted = false
  let cancelled = false
  let notifySignal = () => {}
  let notifyCancel = () => {}
  const signalEvent = new Promise<void>((resolve) => {
    notifySignal = resolve
  })
  const cancelEvent = new Promise<void>((resolve) => {
    notifyCancel = resolve
  })
  const streamResponse = () =>
    new Response(
      new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(new TextEncoder().encode("first chunk"))
        },
        cancel() {
          cancelled = true
          notifyCancel()
        },
      }),
    )
  const server = shared
    ? undefined
    : Bun.serve({
        hostname: "127.0.0.1",
        port: 0,
        async fetch(request) {
          requests++
          request.signal.addEventListener(
            "abort",
            () => {
              signalAborted = true
              notifySignal()
            },
            { once: true },
          )
          if (scenario === "stream") return streamResponse()
          const url = new URL(request.url)
          return Response.json({
            method: request.method,
            body: await request.text(),
            header: request.headers.get("x-override"),
            oldHeader: request.headers.get("x-old"),
            path: url.pathname,
            query: url.search,
          })
        },
      })
  const stub = shared
    ? await (
        (await import(`${directory}/helpers/claude-api-stub.ts`)) as typeof import("./helpers/claude-api-stub")
      ).startClaudeApiStub({
        responder: () => {
          requests++
          return streamResponse()
        },
      })
    : undefined
  const baseUrl = server ? server.url.origin : stub?.baseUrl
  if (!baseUrl) throw new Error("missing local server")
  try {
    if (mode === "helper") {
      process.env.CLAUDE_API_STUB_BASE_URL = baseUrl
      await import(`${directory}/helpers/redirect-first-party-api-to-stub.ts`)
    }
    const url = `${mode === "helper" ? "https://api.anthropic.com" : baseUrl}/v1/messages?beta=true`
    const controller = new AbortController()
    if (scenario === "preabort" || scenario === "blocked") {
      if (scenario === "preabort") controller.abort()
      let error = ""
      try {
        const response = await deadline(
          fetch(new Request(scenario === "blocked" ? "https://blocked.invalid/no-network" : url), {
            signal: controller.signal,
          }),
        )
        await response.body?.cancel()
      } catch (caught) {
        error = String(caught)
      }
      return { error, requests }
    }
    if (scenario === "override") {
      const original = new AbortController()
      original.abort()
      const response = await deadline(
        fetch(
          new Request(url, {
            method: "POST",
            body: "original",
            headers: { "x-old": "old" },
            signal: original.signal,
          }),
          {
            method: "PUT",
            body: "replacement",
            headers: { "x-override": "new" },
            signal: controller.signal,
          },
        ),
      )
      return { response: await deadline(response.json()), requests }
    }
    const response = await deadline(
      fetch(new Request(url, { method: "POST", body: "{}" }), { signal: controller.signal }),
    )
    if (!response.body) throw new Error("missing response body")
    const reader = response.body.getReader()
    try {
      const first = await deadline(reader.read())
      const pendingRead = reader.read()
      controller.abort()
      let error = ""
      try {
        await deadline(pendingRead)
      } catch (caught) {
        error = String(caught)
      }
      // Observe events BEFORE stopping the server or exiting: cleanup itself can cause close.
      const observed = await Promise.all(
        (shared ? [cancelEvent] : [signalEvent, cancelEvent]).map((event) =>
          deadline(event, 300).then(
            () => true,
            () => false,
          ),
        ),
      )
      return {
        first: new TextDecoder().decode(first.value),
        error,
        requests,
        signalAborted: shared ? null : signalAborted,
        cancelled,
        observed,
      }
    } finally {
      reader.releaseLock()
    }
  } finally {
    if (server) await server.stop(true)
    stub?.stop()
  }
}

async function run(mode: "native" | "helper", scenario: string, shared = false) {
  const child = Bun.spawn(
    [
      process.execPath,
      "--eval",
      `console.log(JSON.stringify(await (${fixture.toString()})(${JSON.stringify(mode)}, ${JSON.stringify(scenario)}, ${shared}, ${JSON.stringify(import.meta.dir)})))`,
    ],
    {
      stdout: "pipe",
      stderr: "pipe",
      env: { ...process.env, HTTP_PROXY: "", HTTPS_PROXY: "", ALL_PROXY: "", NO_PROXY: "*" },
    },
  )
  const timer = setTimeout(() => child.kill("SIGKILL"), 4_000)
  try {
    const [code, stdout, stderr] = await Promise.all([
      child.exited,
      new Response(child.stdout).text(),
      new Response(child.stderr).text(),
    ])
    expect({ code, stderr }).toEqual({ code: 0, stderr: "" })
    return JSON.parse(stdout)
  } finally {
    clearTimeout(timer)
    if (child.exitCode === null) child.kill("SIGKILL")
    await child.exited
  }
}

for (const mode of ["native", "helper"] as const) {
  test(`${mode}: preaborted Request + init.signal sends no HTTP request`, async () => {
    const result = await run(mode, "preabort")
    expect(result.error).toContain("AbortError")
    expect(result.requests).toBe(0)
  })
  test(`${mode}: Request + init overrides method, body, headers and signal`, async () => {
    expect(await run(mode, "override")).toEqual({
      requests: 1,
      response: {
        method: "PUT",
        body: "replacement",
        header: "new",
        oldHeader: null,
        path: "/v1/messages",
        query: "?beta=true",
      },
    })
  })
  for (const shared of [false, true]) {
    test(`${mode}: midstream abort rejects reader (${shared ? "shared node:http" : "Bun.serve"})`, async () => {
      const result = await run(mode, "stream", shared)
      expect(result.first).toBe("first chunk")
      expect(result.error).toContain("AbortError")
      expect(result.requests).toBe(1)
      if (!shared) {
        expect(result.signalAborted).toBe(true)
        expect(result.cancelled).toBe(true)
      }
      // Node adapter notifications remain diagnostic: allow future Bun versions to improve.
      // These fixture observations do not guarantee transport close for the real TUI.
      console.info(
        JSON.stringify({ bun: Bun.version, mode, server: shared ? "shared node:http" : "Bun.serve", ...result }),
      )
    })
  }
}

test("helper blocks external origins locally", async () => {
  const result = await run("helper", "blocked")
  expect(result.error).toContain("blocked network destination outside the first-party stub: https://blocked.invalid")
  expect(result.requests).toBe(0)
})
