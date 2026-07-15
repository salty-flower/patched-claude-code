import { afterEach, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { type ClaudeApiRequest, type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.199"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")
const PER_MODEL_PATCH = join(ROOT, "patches", "per-model-endpoint.toml")
const MODEL = "claude-sonnet-4-6"
const SANITIZED_MODEL = MODEL.replace(/[^a-zA-Z0-9]/g, "_")

const tempDirs: string[] = []
const stubs: ClaudeApiStub[] = []

afterEach(() => {
  for (const stub of stubs.splice(0)) {
    stub.stop()
  }
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true })
  }
})

function makeTempDir(prefix: string): string {
  const dir = mkdtempSync(join(tmpdir(), prefix))
  tempDirs.push(dir)
  return dir
}

function findBundledAnthropicClientSymbols(source: string): { init: string; client: string } {
  const classMatch = source.match(
    /([A-Za-z_$][\w$]*)=class \1 extends [A-Za-z_$][\w$]*\{constructor\(\)\{super\(\.\.\.arguments\);this\.completions=[\s\S]*?this\.messages=new [A-Za-z_$][\w$]*\(this\)/,
  )
  if (!classMatch?.[1] || classMatch.index === undefined) {
    throw new Error("could not locate bundled Anthropic client symbols")
  }
  const initializerMatches = [
    ...source.slice(0, classMatch.index).matchAll(/var ([A-Za-z_$][\w$]*)=(?:b|T|S)\(\(\)=>\{/g),
  ]
  const initializerMatch = initializerMatches.at(-1)
  if (!initializerMatch?.[1]) {
    throw new Error("could not locate bundled Anthropic client initializer")
  }
  return { init: initializerMatch[1], client: classMatch[1] }
}

function injectSdkHarness(source: string): string {
  const { init, client } = findBundledAnthropicClientSymbols(source)
  const replacement = `${init}();(async()=>{try{let e=new ${client}({baseURL:process.env.ANTHROPIC_BASE_URL,apiKey:process.env.ANTHROPIC_API_KEY,authToken:process.env.ANTHROPIC_AUTH_TOKEN,maxRetries:0}),t={model:process.env.CLAUDE_STUB_HARNESS_MODEL,max_tokens:1,messages:[{role:"user",content:"hello"}]},n={headers:{"x-api-key":"caller-key",Authorization:"Bearer caller-token"}};await e.messages.create({...t,stream:false},n);await e.beta.messages.create({...t,stream:false,betas:["token-counting-2024-11-01"]},n);await e.messages.countTokens(t,n);await e.beta.messages.countTokens({...t,betas:["token-counting-2024-11-01"]},n);process.stdout.write("ok\\n")}catch(r){console.error(r?.stack??String(r));process.exit(1)}})();`
  const entrypointMatches = [
    ...source.matchAll(/\b([A-Za-z_$][\w$]*\(\));var __acc_linux_[A-Za-z_$][\w$]*=/g),
  ]
  const legacyEntrypointMatches = [...source.matchAll(/\b([A-Za-z_$][\w$]*Zf\(\));/g)]
  const matches = entrypointMatches.length > 0 ? entrypointMatches : legacyEntrypointMatches
  const entrypointMatch = matches.at(-1)
  if (!entrypointMatch?.[0]) throw new Error("could not locate CLI entrypoint call")
  if (matches.length > 1) {
    const names = matches.map((match) => match[1]).join(", ")
    throw new Error(`expected exactly one CLI entrypoint call, found ${matches.length}: ${names}`)
  }
  const captureOffset = entrypointMatch[0].indexOf(entrypointMatch[1])
  const start = (entrypointMatch.index ?? 0) + captureOffset
  const end = start + entrypointMatch[1].length
  return `${source.slice(0, start)}${replacement}${source.slice(end)}`
}

function renderPerModelHarness(input: string, output: string): void {
  const source = readFileSync(input, "utf8")
  const patches = loadPatchEntriesFromFile(PER_MODEL_PATCH)
  const patched = applyPatchEntries(source, patches, TARGET_VERSION).source
  writeFileSync(output, injectSdkHarness(patched))
}

async function startTrackedStub(): Promise<ClaudeApiStub> {
  const stub = await startClaudeApiStub()
  stubs.push(stub)
  return stub
}

async function runHarness(bundle: string, globalStub: ClaudeApiStub, perModelStub: ClaudeApiStub): Promise<void> {
  const proc = Bun.spawn({
    cmd: [process.execPath, bundle],
    env: {
      ...process.env,
      ANTHROPIC_API_KEY: "global-api-key",
      ANTHROPIC_AUTH_TOKEN: "global-auth-token",
      ANTHROPIC_BASE_URL: globalStub.baseUrl,
      [`ANTHROPIC_MODEL_BASE_URL_${SANITIZED_MODEL}`]: perModelStub.baseUrl,
      [`ANTHROPIC_MODEL_API_KEY_${SANITIZED_MODEL}`]: "per-model-api-key",
      [`ANTHROPIC_MODEL_AUTH_TOKEN_${SANITIZED_MODEL}`]: "per-model-auth-token",
      CLAUDE_STUB_HARNESS_MODEL: MODEL,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
    },
    stdout: "pipe",
    stderr: "pipe",
  })

  const [stdout, stderr, exitCode] = await Promise.all([
    proc.stdout ? new Response(proc.stdout).text() : Promise.resolve(""),
    proc.stderr ? new Response(proc.stderr).text() : Promise.resolve(""),
    proc.exited,
  ])

  expect(stderr).toBe("")
  expect(stdout).toContain("ok")
  expect(exitCode).toBe(0)
}

function requestKey(request: ClaudeApiRequest): string {
  return `${request.path}${request.query}`
}

test("patched per-model endpoint routes create and count_tokens requests to model-local auth", async () => {
  expect(existsSync(TARGET_BUNDLE)).toBe(true)

  const dir = makeTempDir("patched-cc-per-model-runtime-")
  const patchedBundle = join(dir, "cli.per-model-harness.js")
  renderPerModelHarness(TARGET_BUNDLE, patchedBundle)

  const globalStub = await startTrackedStub()
  const perModelStub = await startTrackedStub()

  await runHarness(patchedBundle, globalStub, perModelStub)

  expect(globalStub.requests).toHaveLength(0)
  expect(perModelStub.requests.map(requestKey).sort()).toEqual(
    [
      "/v1/messages",
      "/v1/messages?beta=true",
      "/v1/messages/count_tokens",
      "/v1/messages/count_tokens?beta=true",
    ].sort(),
  )

  for (const request of perModelStub.requests) {
    expect(request.jsonBody).toMatchObject({ model: MODEL })
    expect({ request: requestKey(request), value: request.headers["x-api-key"] }).toEqual({
      request: requestKey(request),
      value: "per-model-api-key",
    })
    expect({ request: requestKey(request), value: request.headers.authorization }).toEqual({
      request: requestKey(request),
      value: "Bearer per-model-auth-token",
    })
  }

  const betaRequests = perModelStub.requests.filter((request) => request.query === "?beta=true")
  expect(betaRequests).toHaveLength(2)
  for (const request of betaRequests) {
    expect(request.headers["anthropic-beta"]).toContain("token-counting-2024-11-01")
  }
}, 120000)
