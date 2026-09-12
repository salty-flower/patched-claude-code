import { afterEach, expect, test } from "bun:test"
import { type ClaudeApiRequest, type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"

const stubs: ClaudeApiStub[] = []

afterEach(() => {
  for (const stub of stubs.splice(0)) {
    stub.stop()
  }
})

async function startTrackedStub(): Promise<ClaudeApiStub> {
  const stub = await startClaudeApiStub({ text: "stub text" })
  stubs.push(stub)
  return stub
}

test("ClaudeApiStub captures request metadata and returns message fixtures", async () => {
  const stub = await startTrackedStub()
  const response = await fetch(`${stub.baseUrl}/v1/messages?beta=true`, {
    method: "POST",
    headers: {
      authorization: "Bearer token",
      "x-api-key": "api-key",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      stream: false,
      messages: [{ role: "user", content: "hello" }],
    }),
  })

  expect(response.status).toBe(200)
  expect(await response.json()).toMatchObject({
    content: [{ type: "text", text: "stub text" }],
  })

  const request = await stub.waitForRequest()
  expect(request).toMatchObject({
    method: "POST",
    path: "/v1/messages",
    query: "?beta=true",
    order: 0,
  })
  expect(request.headers.authorization).toBe("Bearer token")
  expect(request.headers["x-api-key"]).toBe("api-key")
  expect(request.jsonBody).toMatchObject({ model: "claude-sonnet-4-6" })
  expect(request.rawBody).toContain("claude-sonnet-4-6")
})

test("ClaudeApiStub supports count_tokens and rejects unknown paths", async () => {
  const stub = await startTrackedStub()

  const countResponse = await fetch(`${stub.baseUrl}/v1/messages/count_tokens`, {
    method: "POST",
    body: JSON.stringify({ model: "claude-sonnet-4-6", messages: [{ role: "user", content: "hello" }] }),
  })
  expect(await countResponse.json()).toEqual({ input_tokens: 1 })

  const unknownResponse = await fetch(`${stub.baseUrl}/v1/unknown`, { method: "POST" })
  expect(unknownResponse.status).toBe(404)
})

test("ClaudeApiStub supports request-aware response overrides", async () => {
  const stub = await startClaudeApiStub({
    responder: (request) =>
      Response.json(
        { path: request.path, model: (request.jsonBody as { model?: string } | undefined)?.model },
        { status: 202 },
      ),
  })
  stubs.push(stub)

  const response = await fetch(`${stub.baseUrl}/v1/messages`, {
    method: "POST",
    body: JSON.stringify({ model: "claude-test" }),
  })

  expect(response.status).toBe(202)
  expect(await response.json()).toEqual({ path: "/v1/messages", model: "claude-test" })
})

test("ClaudeApiStub notifies listeners after capture and waiter resolution", async () => {
  const stub = await startTrackedStub()
  const events: string[] = []
  const observed: ClaudeApiRequest[] = []
  const waiter = stub.waitForRequest((request) => {
    expect(stub.requests).toContain(request)
    events.push("waiter")
    return true
  })
  const unsubscribe = stub.onRequest((request) => {
    expect(stub.requests).toContain(request)
    events.push("listener")
    observed.push(request)
  })

  const response = await fetch(`${stub.baseUrl}/v1/messages`, { method: "POST", body: "{}" })

  expect(response.status).toBe(200)
  const request = await waiter
  expect(observed).toEqual([request])
  expect(events).toEqual(["waiter", "listener"])
  unsubscribe()
})

test("ClaudeApiStub notifies every subscribed listener", async () => {
  const stub = await startTrackedStub()
  const calls: string[] = []
  const unsubscribeFirst = stub.onRequest(({ order }) => calls.push(`first:${order}`))
  const unsubscribeSecond = stub.onRequest(({ order }) => calls.push(`second:${order}`))

  const response = await fetch(`${stub.baseUrl}/v1/messages`, { method: "POST", body: "{}" })

  expect(response.status).toBe(200)
  expect(calls).toEqual(["first:0", "second:0"])
  unsubscribeFirst()
  unsubscribeSecond()
})

test("ClaudeApiStub subscriptions do not replay and unsubscribe idempotently", async () => {
  const stub = await startTrackedStub()
  await fetch(`${stub.baseUrl}/v1/messages`, { method: "POST", body: "{}" })

  const observed: ClaudeApiRequest[] = []
  const unsubscribe = stub.onRequest((request) => observed.push(request))
  expect(observed).toEqual([])
  expect(stub.requests).toHaveLength(1)

  const secondResponse = await fetch(`${stub.baseUrl}/v1/messages`, { method: "POST", body: "{}" })
  expect(secondResponse.status).toBe(200)
  expect(observed).toEqual([stub.requests[1]])

  unsubscribe()
  unsubscribe()
  const thirdResponse = await fetch(`${stub.baseUrl}/v1/messages`, { method: "POST", body: "{}" })
  expect(thirdResponse.status).toBe(200)
  expect(observed).toHaveLength(1)
})

test("ClaudeApiStub observer failures use the request handler error path", async () => {
  const stub = await startTrackedStub()
  stub.onRequest(() => {
    throw new Error("observer failed")
  })

  const response = await fetch(`${stub.baseUrl}/v1/messages`, { method: "POST", body: "{}" })

  expect(response.status).toBe(500)
  expect(await response.text()).toBe("observer failed")
  expect(stub.requests).toHaveLength(1)
})
