#!/usr/bin/env bun
import assert from "node:assert/strict"
import { mkdtemp, realpath, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiRequest, startClaudeApiStub } from "./helpers/claude-api-stub"
import { recordOracleCheck } from "./helpers/oracle-evidence"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"
import { WEB_SEARCH_MODEL_RUNTIME_CHECKS } from "./helpers/runtime-oracle-checks"

const MAIN = "opencode-go/deepseek-v4.1-flash"
const SMALL = "gpt-6-luna"
const DONE = "WEB_SEARCH_MODEL_COMPLETE"
const TOOL_ID = "toolu_search_model_fixture"
const RESULT_URL = "https://example.test/web-search-model-fixture"

function body(request: ClaudeApiRequest): Record<string, unknown> {
  assert.ok(request.jsonBody && typeof request.jsonBody === "object")
  return request.jsonBody as Record<string, unknown>
}

function reply(request: ClaudeApiRequest, content: Record<string, unknown>[], stop = "end_turn"): Response {
  const message = {
    id: "msg_web_search_model",
    type: "message",
    role: "assistant",
    model: body(request).model,
    content,
    stop_reason: stop,
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  if (!body(request).stream) return Response.json(message)
  const frames: [string, unknown][] = [
    ["message_start", { type: "message_start", message: { ...message, content: [], stop_reason: null } }],
  ]
  content.forEach((block, index) => {
    const tool = block.type === "tool_use" || block.type === "server_tool_use"
    const result = block.type === "web_search_tool_result"
    frames.push([
      "content_block_start",
      {
        type: "content_block_start",
        index,
        content_block: tool ? { ...block, input: {} } : result ? block : { type: "text", text: "" },
      },
    ])
    if (!result)
      frames.push([
        "content_block_delta",
        {
          type: "content_block_delta",
          index,
          delta: tool
            ? { type: "input_json_delta", partial_json: JSON.stringify(block.input) }
            : { type: "text_delta", text: block.text },
        },
      ])
    frames.push(["content_block_stop", { type: "content_block_stop", index }])
  })
  frames.push(
    [
      "message_delta",
      { type: "message_delta", delta: { stop_reason: stop, stop_sequence: null }, usage: { output_tokens: 1 } },
    ],
    ["message_stop", { type: "message_stop" }],
  )
  return new Response(frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join(""), {
    headers: { "content-type": "text/event-stream" },
  })
}

async function scenario(bundle: string, override: string | undefined, expected: string, tui: boolean): Promise<void> {
  const home = await realpath(await mkdtemp(join(tmpdir(), "patched-cc-web-search-model-")))
  const searches: ClaudeApiRequest[] = []
  const mainRequests: ClaudeApiRequest[] = []
  let completed = false
  const stub = await startClaudeApiStub({
    responder: (request) => {
      if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })
      if (!request.path.endsWith("/messages")) return Response.json({})
      const input = body(request)
      if (
        Array.isArray(input.tools) &&
        input.tools.some((tool: Record<string, unknown>) => tool.type === "web_search_20250305")
      ) {
        searches.push(request)
        return reply(request, [
          {
            type: "server_tool_use",
            id: "srvtoolu_search_fixture",
            name: "web_search",
            input: { query: "search-model-fixture" },
          },
          {
            type: "web_search_tool_result",
            tool_use_id: "srvtoolu_search_fixture",
            content: [
              {
                type: "web_search_result",
                url: RESULT_URL,
                title: "Local search fixture",
                encrypted_content: "local-fixture",
                page_age: "today",
              },
            ],
          },
          { type: "text", text: "Local search fixture found a result." },
        ])
      }
      const main =
        Array.isArray(input.tools) && input.tools.some((tool: Record<string, unknown>) => tool.name === "WebSearch")
      if (main && request.rawBody.includes(TOOL_ID)) {
        completed = true
        mainRequests.push(request)
        return reply(request, [{ type: "text", text: DONE }])
      }
      if (main && request.rawBody.includes("search-model-fixture")) {
        mainRequests.push(request)
        return reply(
          request,
          [{ type: "tool_use", id: TOOL_ID, name: "WebSearch", input: { query: "search-model-fixture" } }],
          "tool_use",
        )
      }
      return reply(request, [{ type: "text", text: "Local fixture" }])
    },
  })
  try {
    const configDir = join(home, ".claude")
    await Bun.write(join(configDir, "settings.json"), JSON.stringify({ theme: "dark" }))
    await Bun.write(
      join(configDir, ".claude.json"),
      JSON.stringify({
        hasCompletedOnboarding: true,
        customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
        projects: { [home]: { hasTrustDialogAccepted: true } },
        cachedGrowthBookFeatures: { tengu_plum_vx3: false },
      }),
    )
    const env: Record<string, string> = {
      HOME: home,
      CLAUDE_CONFIG_DIR: configDir,
      ANTHROPIC_API_KEY: "stub-api-key",
      ANTHROPIC_BASE_URL: stub.baseUrl,
      CLAUDE_API_STUB_BASE_URL: stub.baseUrl,
      ANTHROPIC_SMALL_FAST_MODEL: SMALL,
      ANTHROPIC_DEFAULT_SONNET_MODEL: "gpt-6.1-sol",
      CLAUDE_CODE_MAX_CONTEXT_TOKENS: "200000",
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      DISABLE_TELEMETRY: "1",
      ENABLE_TOOL_SEARCH: "false",
      TERM: "xterm-256color",
    }
    if (override !== undefined) env.CLAUDE_CODE_WEB_SEARCH_MODEL = override
    const inherited = { ...process.env }
    delete inherited.CLAUDE_CODE_WEB_SEARCH_MODEL
    delete inherited.CLAUDE_CODE_SIMPLE
    const args = [
      process.execPath,
      "--preload",
      resolve("runtime/bun-ant-cell-segmenter.ts"),
      "--preload",
      resolve(import.meta.dir, "helpers/redirect-first-party-api-to-stub.ts"),
      bundle,
      "--model",
      MAIN,
      "--tools",
      "WebSearch",
      "--allowedTools",
      "WebSearch",
    ]
    let command: string[]
    if (tui) {
      const input = [
        "sleep 3",
        `printf %s ${shellQuote("\x1b[200~search-model-fixture\x1b[201~")}`,
        "sleep 1",
        `printf %s ${shellQuote("\x1b[13u")}`,
        "sleep 8",
        `printf %s ${shellQuote("\x1b[200~/exit\x1b[201~")}`,
        "sleep 1",
        `printf %s ${shellQuote("\x1b[13u")}`,
        "sleep 1",
        `printf %s ${shellQuote("\x1b[13u")}`,
        "sleep 2",
      ].join("; ")
      command = [
        "bash",
        "-lc",
        makeScriptCommand(["timeout 35s env", shellEnvironment(env), ...args.map(shellQuote)].join(" "), input),
      ]
    } else command = ["timeout", "35s", ...args, "--print", "search-model-fixture"]
    const proc = Bun.spawn({ cmd: command, cwd: home, env: { ...inherited, ...env }, stdout: "pipe", stderr: "pipe" })
    const [code, stdout, stderr] = await Promise.all([
      proc.exited,
      new Response(proc.stdout).text(),
      new Response(proc.stderr).text(),
    ])
    const output = normalizeTuiOutput(stdout + stderr)
    assert.equal(code, 0, output)
    assert.ok(completed, `WebSearch result never returned to main model: ${output}`)
    assert.equal(searches.length, 1, `expected one side query: ${output}`)
    const search = searches[0]
    assert.ok(search)
    assert.equal(body(search).model, expected)
    assert.equal(mainRequests.length, 2)
    for (const request of mainRequests) assert.equal(body(request).model, MAIN)
    assert.ok(mainRequests[1]?.rawBody.includes(RESULT_URL), "search result URL must return to the main model")
    assert.ok(output.includes(DONE), output)
    assert.doesNotMatch(output, /TypeError|ReferenceError|React error/)
    if (tui) {
      assert.ok(output.includes("Claude Code"), output)
      assert.ok(output.includes("/exit"), output)
      if (process.env.TUI_SMOKE_SHOW_OUTPUT === "1") console.log(output)
    }
    console.log(
      `ok: ${tui ? "PTY + /exit" : "print"} override=${JSON.stringify(override) ?? "unset"}, search model=${body(search).model}, main model=${MAIN}`,
    )
  } finally {
    stub.stop()
    await rm(home, { recursive: true, force: true })
  }
}

async function main(): Promise<number> {
  const { bundle } = createCommand("web-search-model-tui-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched bundle")
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{ bundle: string }>()
  const path = resolve(bundle)
  const cases = [
    ["gpt-6-luna", "gpt-6-luna", true],
    ["sonnet[1m]", "gpt-6.1-sol", false],
    [undefined, MAIN, false],
    ["", MAIN, false],
  ] as const
  for (const [index, [override, expected, tui]] of cases.entries()) {
    await scenario(path, override, expected, tui)
    const platform =
      process.platform === "darwin" && process.arch === "arm64"
        ? "darwin-arm64"
        : process.platform === "linux" && process.arch === "x64"
          ? "linux-x64"
          : undefined
    if (!platform) throw new Error("unsupported host for WebSearch runtime evidence")
    const check = WEB_SEARCH_MODEL_RUNTIME_CHECKS[index]
    assert.ok(check)
    recordOracleCheck({
      oracleIds: ["web-search-model/independent-search-model"],
      platform,
      evidenceClass: "runtime",
      check,
      outcome: "passed",
    })
  }
  return 0
}

if (import.meta.main) await runCli(main)
