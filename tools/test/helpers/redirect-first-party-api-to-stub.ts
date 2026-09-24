const stubBaseUrl = process.env.CLAUDE_API_STUB_BASE_URL
if (!stubBaseUrl) throw new Error("CLAUDE_API_STUB_BASE_URL is required")

const stubOrigin = new URL(stubBaseUrl).origin
const firstPartyOrigin = "https://api.anthropic.com"
const originalFetch = globalThis.fetch
const nativeFetch = originalFetch.bind(globalThis)

globalThis.fetch = Object.assign(
  async (input: Parameters<typeof originalFetch>[0], init?: Parameters<typeof originalFetch>[1]) => {
    const request = input instanceof Request ? input : new Request(input, init)
    const destination = new URL(request.url)

    if (destination.origin === stubOrigin) return await nativeFetch(request)
    if (destination.origin !== firstPartyOrigin) {
      throw new Error(`blocked network destination outside the first-party stub: ${destination.origin}`)
    }

    const body = request.method === "GET" || request.method === "HEAD" ? undefined : await request.arrayBuffer()
    const redirected = new Request(new URL(`${destination.pathname}${destination.search}`, stubBaseUrl), {
      method: request.method,
      headers: request.headers,
      ...(body === undefined ? {} : { body }),
      signal: request.signal,
    })
    return await nativeFetch(redirected)
  },
  { preconnect: originalFetch.preconnect.bind(originalFetch) },
)
