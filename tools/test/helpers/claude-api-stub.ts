import { createServer, type IncomingHttpHeaders, type IncomingMessage, type Server, type ServerResponse } from "node:http"

export type ClaudeApiRequest = {
  stub: ClaudeApiStub
  order: number
  method: string
  path: string
  query: string
  headers: IncomingHttpHeaders
  rawBody: string
  jsonBody: unknown
}

export type ClaudeApiFixture = "text-ok" | "delayed-text" | "count-tokens-ok" | "api-error" | "malformed-sse"

type RequestPredicate = (request: ClaudeApiRequest) => boolean

type RequestWaiter = {
  predicate: RequestPredicate
  resolve: (request: ClaudeApiRequest) => void
  reject: (error: Error) => void
  timeout: Timer
}

export type ClaudeApiStubOptions = {
  fixture?: ClaudeApiFixture
  text?: string
}

type RequestBody = {
  model?: string
  stream?: boolean
}

function isRequestBody(value: unknown): value is RequestBody {
  return typeof value === "object" && value !== null
}

function jsonBodyModel(value: unknown): string {
  return isRequestBody(value) && typeof value.model === "string" ? value.model : "claude-sonnet-4-6"
}

function jsonBodyStream(value: unknown): boolean {
  return isRequestBody(value) && value.stream === true
}

function readRequestBody(request: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = ""
    request.setEncoding("utf8")
    request.on("data", (chunk: string) => {
      body += chunk
    })
    request.on("end", () => resolve(body))
    request.on("error", reject)
  })
}

async function writeResponse(response: ServerResponse, fetchResponse: Response): Promise<void> {
  response.statusCode = fetchResponse.status
  fetchResponse.headers.forEach((value, key) => {
    response.setHeader(key, value)
  })
  response.end(await fetchResponse.text())
}

async function listen(server: Server): Promise<number> {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const port = 30000 + Math.floor(Math.random() * 30000)
    const result = await new Promise<{ ok: true; port: number } | { ok: false }>((resolve, reject) => {
      const onError = (error: NodeJS.ErrnoException) => {
        server.off("listening", onListening)
        if (error.code === "EADDRINUSE") resolve({ ok: false })
        else reject(error)
      }
      const onListening = () => {
        server.off("error", onError)
        resolve({ ok: true, port })
      }
      server.once("error", onError)
      server.once("listening", onListening)
      server.listen(port, "127.0.0.1")
    })
    if (result.ok) return result.port
  }
  throw new Error("unable to bind ClaudeApiStub to a localhost port")
}

function parseJson(rawBody: string): unknown {
  if (rawBody === "") return undefined
  try {
    return JSON.parse(rawBody) as unknown
  } catch {
    return undefined
  }
}

function makeMessageJson(body: unknown, text: string): Response {
  return Response.json(
    {
      id: "msg_stub",
      type: "message",
      role: "assistant",
      model: jsonBodyModel(body),
      content: [{ type: "text", text }],
      stop_reason: "end_turn",
      stop_sequence: null,
      usage: { input_tokens: 1, output_tokens: 1 },
    },
    { headers: { "request-id": "req_stub" } },
  )
}

function sseFrames(body: unknown, text: string): string {
  const message = {
    id: "msg_stub",
    type: "message",
    role: "assistant",
    model: jsonBodyModel(body),
    content: [],
    stop_reason: null,
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  const frames = [
    ["message_start", { type: "message_start", message }],
    ["content_block_start", { type: "content_block_start", index: 0, content_block: { type: "text", text: "" } }],
    ["content_block_delta", { type: "content_block_delta", index: 0, delta: { type: "text_delta", text } }],
    ["content_block_stop", { type: "content_block_stop", index: 0 }],
    [
      "message_delta",
      {
        type: "message_delta",
        delta: { stop_reason: "end_turn", stop_sequence: null },
        usage: { output_tokens: 1 },
      },
    ],
    ["message_stop", { type: "message_stop" }],
  ] as const
  return frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join("")
}

function makeMessageSse(body: unknown, text: string, delayed: boolean): Response {
  const content = sseFrames(body, text)
  if (!delayed) {
    return new Response(content, { headers: { "content-type": "text/event-stream", "request-id": "req_stub" } })
  }

  const chunks = content.match(/.{1,96}/gs) ?? [content]
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const encoder = new TextEncoder()
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(chunk))
        await new Promise((resolve) => setTimeout(resolve, 5))
      }
      controller.close()
    },
  })
  return new Response(stream, { headers: { "content-type": "text/event-stream", "request-id": "req_stub" } })
}

function fixtureResponse(fixture: ClaudeApiFixture, request: ClaudeApiRequest, text: string): Response {
  if (fixture === "api-error") {
    return Response.json(
      { type: "error", error: { type: "invalid_request_error", message: "stub api error" } },
      { status: 400, headers: { "request-id": "req_error" } },
    )
  }
  if (fixture === "malformed-sse") {
    return new Response("event: message_start\ndata: {\n\n", {
      headers: { "content-type": "text/event-stream", "request-id": "req_malformed" },
    })
  }
  if (request.path.endsWith("/messages/count_tokens")) {
    return Response.json({ input_tokens: 1 }, { headers: { "request-id": "req_count" } })
  }
  if (jsonBodyStream(request.jsonBody)) return makeMessageSse(request.jsonBody, text, fixture === "delayed-text")
  return makeMessageJson(request.jsonBody, text)
}

export class ClaudeApiStub {
  readonly requests: ClaudeApiRequest[] = []
  readonly text: string
  readonly fixture: ClaudeApiFixture
  #server: Server
  #waiters: RequestWaiter[] = []
  #order = 0
  #port = 0

  private constructor(options: ClaudeApiStubOptions = {}) {
    this.fixture = options.fixture ?? "text-ok"
    this.text = options.text ?? "stub"
    this.#server = createServer((request, response) => {
      void this.#handleRequest(request, response)
    })
  }

  static async start(options: ClaudeApiStubOptions = {}): Promise<ClaudeApiStub> {
    const stub = new ClaudeApiStub(options)
    stub.#port = await listen(stub.#server)
    return stub
  }

  get baseUrl(): string {
    return `http://127.0.0.1:${this.#port}`
  }

  stop(): void {
    for (const waiter of this.#waiters.splice(0)) {
      clearTimeout(waiter.timeout)
      waiter.reject(new Error("ClaudeApiStub stopped before matching request arrived"))
    }
    this.#server.closeAllConnections?.()
    this.#server.close()
  }

  waitForRequest(predicate: RequestPredicate = () => true, timeoutMs = 20000): Promise<ClaudeApiRequest> {
    const existing = this.requests.find(predicate)
    if (existing) return Promise.resolve(existing)
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        const index = this.#waiters.findIndex((waiter) => waiter.timeout === timeout)
        if (index >= 0) this.#waiters.splice(index, 1)
        reject(new Error("timed out waiting for Claude API stub request"))
      }, timeoutMs)
      this.#waiters.push({ predicate, resolve, reject, timeout })
    })
  }

  async #handleRequest(request: IncomingMessage, response: ServerResponse): Promise<void> {
    try {
      const url = new URL(request.url ?? "/", "http://127.0.0.1")
      const rawBody = await readRequestBody(request)
      const captured: ClaudeApiRequest = {
        stub: this,
        order: this.#order,
        method: request.method ?? "",
        path: url.pathname,
        query: url.search,
        headers: request.headers,
        rawBody,
        jsonBody: parseJson(rawBody),
      }
      this.#order += 1
      this.requests.push(captured)
      this.#resolveWaiters(captured)
      if (request.method !== "POST" || !this.#isKnownPath(url.pathname)) {
        await writeResponse(
          response,
          Response.json({ error: { type: "not_found_error", message: url.pathname } }, { status: 404 }),
        )
        return
      }
      await writeResponse(response, fixtureResponse(this.fixture, captured, this.text))
    } catch (error) {
      response.statusCode = 500
      response.end(error instanceof Error ? error.message : String(error))
    }
  }

  #isKnownPath(path: string): boolean {
    return path.endsWith("/messages") || path.endsWith("/messages/count_tokens")
  }

  #resolveWaiters(request: ClaudeApiRequest): void {
    const remaining: RequestWaiter[] = []
    for (const waiter of this.#waiters) {
      if (waiter.predicate(request)) {
        clearTimeout(waiter.timeout)
        waiter.resolve(request)
      } else {
        remaining.push(waiter)
      }
    }
    this.#waiters = remaining
  }
}

export async function startClaudeApiStub(options: ClaudeApiStubOptions = {}): Promise<ClaudeApiStub> {
  return await ClaudeApiStub.start(options)
}
