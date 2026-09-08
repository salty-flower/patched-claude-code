#!/usr/bin/env bun

import { existsSync, mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { type ClaudeApiRequest, type ClaudeApiStub, startClaudeApiStub } from "./helpers/claude-api-stub"

const CUSTOM_MODEL = "gpt-5.6-agent-slot"
const MAIN_MARKER = "SUBAGENT_MODEL_EFFORT_MAIN"
const WORKER_MARKER = "SUBAGENT_MODEL_EFFORT_WORKER"
const TOOL_USE_ID = "toolu_subagent_model_effort"
const EFFORT_LEVELS = ["low", "medium", "high", "xhigh", "max"]

type Frame = [event: string, data: Record<string, unknown>]
type JsonRecord = Record<string, unknown>

function record(value: unknown): JsonRecord | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value) ? (value as JsonRecord) : undefined
}

function requestModel(body: unknown): string {
  const value = record(body)?.model
  return typeof value === "string" ? value : "claude-sonnet-4-6"
}

function isStream(body: unknown): boolean {
  return record(body)?.stream === true
}

function sse(frames: Frame[]): string {
  return frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join("")
}

function completedSse(body: unknown, content: JsonRecord[], stopReason: "end_turn" | "tool_use"): Response {
  const frames: Frame[] = [
    [
      "message_start",
      {
        type: "message_start",
        message: {
          id: `msg_${stopReason}`,
          type: "message",
          role: "assistant",
          model: requestModel(body),
          content: [],
          stop_reason: null,
          stop_sequence: null,
          usage: { input_tokens: 1, output_tokens: 1 },
        },
      },
    ],
  ]
  content.forEach((block, index) => {
    if (block.type === "tool_use") {
      frames.push([
        "content_block_start",
        {
          type: "content_block_start",
          index,
          content_block: { type: "tool_use", id: block.id, name: block.name, input: {} },
        },
      ])
      frames.push([
        "content_block_delta",
        {
          type: "content_block_delta",
          index,
          delta: { type: "input_json_delta", partial_json: JSON.stringify(block.input) },
        },
      ])
    } else {
      frames.push([
        "content_block_start",
        { type: "content_block_start", index, content_block: { type: "text", text: "" } },
      ])
      frames.push([
        "content_block_delta",
        { type: "content_block_delta", index, delta: { type: "text_delta", text: String(block.text) } },
      ])
    }
    frames.push(["content_block_stop", { type: "content_block_stop", index }])
  })
  frames.push([
    "message_delta",
    {
      type: "message_delta",
      delta: { stop_reason: stopReason, stop_sequence: null },
      usage: { output_tokens: 1 },
    },
  ])
  frames.push(["message_stop", { type: "message_stop" }])
  return new Response(sse(frames), { headers: { "content-type": "text/event-stream", "cache-control": "no-cache" } })
}

function messageResponse(body: unknown, text: string): Response {
  const content = [{ type: "text", text }]
  if (isStream(body)) return completedSse(body, content, "end_turn")
  return Response.json({
    id: "msg_stub",
    type: "message",
    role: "assistant",
    model: requestModel(body),
    content,
    stop_reason: "end_turn",
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  })
}

function hasToolResult(body: unknown): boolean {
  const messages = record(body)?.messages
  if (!Array.isArray(messages)) return false
  return messages.some((message) => {
    const content = record(message)?.content
    return (
      Array.isArray(content) &&
      content.some((block) => {
        const value = record(block)
        return value?.type === "tool_result" && value.tool_use_id === TOOL_USE_ID
      })
    )
  })
}

function agentTool(body: unknown): JsonRecord {
  const tools = record(body)?.tools
  if (!Array.isArray(tools)) throw new Error("main request has no tools array")
  const agent = tools.map(record).find((tool) => tool?.name === "Agent")
  if (!agent) throw new Error("main request has no Agent tool definition")
  return agent
}

function assertAgentTool(agent: JsonRecord): void {
  const schema = record(agent.input_schema)
  if (!schema) throw new Error("Agent tool has no input_schema")
  const properties = record(schema.properties)
  const model = record(properties?.model)
  const effort = record(properties?.effort)
  if (model?.type !== "string" || model.enum !== undefined) {
    throw new Error(`Agent model schema is still restricted: ${JSON.stringify(model)}`)
  }
  if (effort?.type !== "string" || JSON.stringify(effort.enum) !== JSON.stringify(EFFORT_LEVELS)) {
    throw new Error(`Agent effort schema is wrong: ${JSON.stringify(effort)}`)
  }
  const modelDescription = typeof model.description === "string" ? model.description : ""
  const effortDescription = typeof effort.description === "string" ? effort.description : ""
  if (!modelDescription.includes("full custom model ID")) {
    throw new Error(`Agent model description omits custom IDs: ${JSON.stringify(modelDescription)}`)
  }
  if (!effortDescription.includes("Takes precedence over the agent definition's effort")) {
    throw new Error(`Agent effort description omits precedence: ${JSON.stringify(effortDescription)}`)
  }
  const toolDescription = typeof agent.description === "string" ? agent.description : ""
  if (!toolDescription.includes("the `model` and `effort` parameters here override the definition for this one call")) {
    throw new Error("Agent usage prompt does not advertise per-call model and effort overrides")
  }
  if (toolDescription.includes("a `model` override is ignored")) {
    throw new Error("Agent usage prompt retains the model-only fork restriction")
  }
}

async function waitForExit(child: ReturnType<typeof Bun.spawn>, timeoutMs: number): Promise<number> {
  const result = await Promise.race([
    child.exited.then((code) => ({ code })),
    Bun.sleep(timeoutMs).then(() => undefined),
  ])
  if (result) return result.code
  child.kill()
  await child.exited
  throw new Error(`patched CLI timed out after ${timeoutMs}ms`)
}

async function main(): Promise<number> {
  const options = createCommand("subagent-model-effort-smoke")
    .requiredOption("--bundle <cli.patched.js>", "rendered patched Claude Code bundle")
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{ bundle: string }>()
  const bundle = resolve(options.bundle)
  if (!existsSync(bundle)) throw new Error(`bundle missing: ${bundle}`)

  const home = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-subagent-model-effort-")))
  const configDir = join(home, ".claude")
  mkdirSync(configDir)
  let stub: ClaudeApiStub | undefined
  try {
    const responder = (request: ClaudeApiRequest): Response => {
      if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })
      if (hasToolResult(request.jsonBody)) return messageResponse(request.jsonBody, "subagent override complete")
      if (request.rawBody.includes(WORKER_MARKER)) return messageResponse(request.jsonBody, "worker override received")
      if (request.rawBody.includes(MAIN_MARKER)) {
        const content = [
          {
            type: "tool_use",
            id: TOOL_USE_ID,
            name: "Agent",
            input: {
              description: "verify custom override",
              prompt: WORKER_MARKER,
              subagent_type: "general-purpose",
              model: CUSTOM_MODEL,
              effort: "xhigh",
            },
          },
        ]
        if (isStream(request.jsonBody)) return completedSse(request.jsonBody, content, "tool_use")
        return Response.json({
          id: "msg_tool_use",
          type: "message",
          role: "assistant",
          model: requestModel(request.jsonBody),
          content,
          stop_reason: "tool_use",
          stop_sequence: null,
          usage: { input_tokens: 1, output_tokens: 1 },
        })
      }
      return messageResponse(request.jsonBody, "stub auxiliary response")
    }

    stub = await startClaudeApiStub({ responder })
    await Bun.write(
      join(configDir, ".claude.json"),
      JSON.stringify({
        customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
        hasCompletedOnboarding: true,
        projects: { [home]: { hasTrustDialogAccepted: true } },
        theme: "dark",
      }),
    )
    await Bun.write(join(configDir, "settings.json"), JSON.stringify({ theme: "dark" }))

    const cleanEnv = Object.fromEntries(
      Object.entries(process.env).filter(
        ([key]) => !key.startsWith("ANTHROPIC_") && !key.startsWith("CLAUDE_CODE_") && key !== "CLAUDE_CONFIG_DIR",
      ),
    )
    const child = Bun.spawn(
      [
        process.execPath,
        bundle,
        "--print",
        "--dangerously-skip-permissions",
        "--model",
        "sonnet",
        MAIN_MARKER,
      ],
      {
        cwd: home,
        env: {
          ...cleanEnv,
          HOME: home,
          CLAUDE_CONFIG_DIR: configDir,
          ANTHROPIC_API_KEY: "stub-api-key",
          ANTHROPIC_BASE_URL: stub.baseUrl,
          ANTHROPIC_CUSTOM_MODEL_OPTION: CUSTOM_MODEL,
          ANTHROPIC_CUSTOM_MODEL_OPTION_EFFORT_LEVEL: "medium",
          ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES: "effort,xhigh_effort,max_effort",
          CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
          CLAUDE_CODE_SKIP_ONBOARDING: "1",
          DISABLE_PROMPT_CACHING: "1",
          FORCE_COLOR: "0",
          TERM: "xterm-256color",
        },
        stdout: "pipe",
        stderr: "pipe",
      },
    )
    const stdoutPromise = new Response(child.stdout).text()
    const stderrPromise = new Response(child.stderr).text()
    const code = await waitForExit(child, 45_000)
    const [stdout, stderr] = await Promise.all([stdoutPromise, stderrPromise])
    if (code !== 0) throw new Error(`patched CLI exited ${code}\n${stdout}\n${stderr}`)
    if (!stdout.includes("subagent override complete")) {
      throw new Error(`main agent did not finish after the subagent result\n${stdout}\n${stderr}`)
    }

    const messageRequests = stub.requests.filter((request) => request.path.endsWith("/messages"))
    const mainRequest = messageRequests.find((request) => request.rawBody.includes(MAIN_MARKER))
    if (!mainRequest) throw new Error("main request did not reach the local API stub")
    assertAgentTool(agentTool(mainRequest.jsonBody))

    const workerRequest = messageRequests.find((request) => request.rawBody.includes(WORKER_MARKER))
    if (!workerRequest) throw new Error("subagent request did not reach the local API stub")
    const workerBody = record(workerRequest.jsonBody)
    const outputConfig = record(workerBody?.output_config)
    if (workerBody?.model !== CUSTOM_MODEL || outputConfig?.effort !== "xhigh") {
      throw new Error(
        `expected worker ${CUSTOM_MODEL}/xhigh, received ${JSON.stringify({ model: workerBody?.model, output_config: outputConfig })}`,
      )
    }

    console.log(`ok: Agent prompt, schema, and request used ${CUSTOM_MODEL}/xhigh`)
    return 0
  } finally {
    stub?.stop()
    rmSync(home, { recursive: true, force: true })
  }
}

await runCli(main)
