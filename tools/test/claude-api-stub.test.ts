import { afterEach, expect, test } from "bun:test"
import { type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"

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
