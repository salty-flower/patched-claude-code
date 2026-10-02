import { type ClaudeApiRequest, startClaudeApiStub } from "./claude-api-stub"

export const INITIAL_PROMPT = "Use a workflow after asking me whether to approve the local git fixture."
export const APPROVAL_QUESTION = "Approve rebase, verification, then fast-forward push to the isolated local remote?"
export const APPROVAL_ANSWER = "Approve local git fixture"
export const STATUS_PROMPT = "WF_STATUS_BEFORE_LAUNCH: what is the current status?"
export const POST_START_PROMPT = "WF_STATUS_AFTER_LAUNCH: this message arrived after the workflow started."
export const APPROVAL_DONE = "WF_APPROVAL_RECORDED"
export const WORKFLOW_RUNNING = "WF_RUNNING_WITH_FROZEN_HISTORY"
export const POST_START_DONE = "WF_POST_START_MESSAGE_RECORDED"
export const WORKFLOW_DONE = "WF_HISTORY_COMPLETE"
export const ASK_ID = "toolu_workflow_history_approval"
const WORKFLOW_ID = "toolu_workflow_history_launch"
export const TASK_ONE = "WF_HISTORY_N1: Return only the literal N1_COMPLETE; do not call tools."
export const TASK_THREE =
  "WF_HISTORY_N3: Rebase this fixture branch onto origin/main, run bun test ./verify.test.ts, then fast-forward push HEAD to the isolated local origin/main. Return N3_COMPLETE."
export const GIT_COMMANDS = [
  "git fetch origin && git rebase origin/main",
  "bun test ./verify.test.ts",
  "git push origin HEAD:main",
] as const

type Message = { role?: string; content?: unknown }
type RequestBody = {
  model?: string
  stream?: boolean
  messages?: Message[]
  system?: unknown
  output_config?: { format?: unknown }
  tools?: { name?: string; description?: string }[]
}

export function requestBody(request: ClaudeApiRequest): RequestBody {
  return typeof request.jsonBody === "object" && request.jsonBody !== null ? request.jsonBody : {}
}

export function messageText(content: unknown): string {
  if (typeof content === "string") return content
  if (!Array.isArray(content)) return ""
  return content
    .map((block: unknown) => {
      if (typeof block !== "object" || block === null) return ""
      if ("text" in block && typeof block.text === "string") return block.text
      if ("content" in block) return messageText(block.content)
      return ""
    })
    .join("\n")
}

export function conversationText(request: ClaudeApiRequest): string {
  return (requestBody(request).messages ?? []).map((message) => messageText(message.content)).join("\n")
}

export function isWorkerRequest(request: ClaudeApiRequest): boolean {
  return messageText(requestBody(request).system).includes(
    "You are a subagent spawned by a workflow orchestration script",
  )
}

export function hasToolResult(request: ClaudeApiRequest, id: string): boolean {
  return toolResult(request, id) !== undefined
}

function toolResult(request: ClaudeApiRequest, id: string): { content: unknown; isError: boolean } | undefined {
  for (const message of requestBody(request).messages ?? []) {
    if (!Array.isArray(message.content)) continue
    for (const block of message.content as unknown[]) {
      if (
        typeof block === "object" &&
        block !== null &&
        "type" in block &&
        block.type === "tool_result" &&
        "tool_use_id" in block &&
        block.tool_use_id === id
      ) {
        return {
          content: "content" in block ? block.content : undefined,
          isError: "is_error" in block && block.is_error === true,
        }
      }
    }
  }
  return undefined
}

function respond(request: ClaudeApiRequest, content: Record<string, unknown>[], stopReason = "end_turn"): Response {
  const body = requestBody(request)
  const message = {
    id: `msg_workflow_history_${request.order}`,
    type: "message",
    role: "assistant",
    model: body.model ?? "claude-opus-4-6",
    content,
    stop_reason: stopReason,
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  if (!body.stream) return Response.json(message)
  const frames: [string, Record<string, unknown>][] = [
    ["message_start", { type: "message_start", message: { ...message, content: [], stop_reason: null } }],
  ]
  content.forEach((block, index) => {
    const tool = block.type === "tool_use"
    frames.push(
      [
        "content_block_start",
        {
          type: "content_block_start",
          index,
          content_block: tool
            ? { type: "tool_use", id: block.id, name: block.name, input: {} }
            : { type: "text", text: "" },
        },
      ],
      [
        "content_block_delta",
        {
          type: "content_block_delta",
          index,
          delta: tool
            ? { type: "input_json_delta", partial_json: JSON.stringify(block.input) }
            : { type: "text_delta", text: String(block.text) },
        },
      ],
      ["content_block_stop", { type: "content_block_stop", index }],
    )
  })
  frames.push(
    ["message_delta", { type: "message_delta", delta: { stop_reason: stopReason }, usage: { output_tokens: 1 } }],
    ["message_stop", { type: "message_stop" }],
  )
  return new Response(frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join(""), {
    headers: { "content-type": "text/event-stream", "request-id": `req_workflow_history_${request.order}` },
  })
}

function textResponse(request: ClaudeApiRequest, text: string): Response {
  return respond(request, [{ type: "text", text }])
}

export async function startWorkflowHistoryStub() {
  let releaseFirstWorker: () => void = () => {}
  const firstWorkerGate = new Promise<void>((resolve) => {
    releaseFirstWorker = resolve
  })
  let asked = false
  let launched = false
  const errors: string[] = []
  const workers = new Map<number, ClaudeApiRequest>()
  const actionResults: { command: string; result: string; requestOrder: number }[] = []
  const parentRequests: ClaudeApiRequest[] = []
  const stub = await startClaudeApiStub({
    responder: async (request) => {
      if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })
      const body = requestBody(request)
      if (body.output_config?.format !== undefined) return textResponse(request, "Workflow history fixture")
      const text = conversationText(request)
      if (isWorkerRequest(request)) {
        const count = text.includes(TASK_ONE) ? 1 : text.includes(TASK_THREE) ? 3 : undefined
        if (count === undefined || (count === 1 && workers.has(1))) {
          errors.push(`unexpected or repeated worker request ${request.order}`)
          return textResponse(request, "WF_UNEXPECTED_WORKER")
        }
        if (!workers.has(count)) workers.set(count, request)
        if (count === 1) {
          await firstWorkerGate
          return textResponse(request, "N1_COMPLETE")
        }
        for (const [index, command] of GIT_COMMANDS.entries()) {
          const id = `toolu_workflow_history_git_${index}`
          const completed = toolResult(request, id)
          if (completed) {
            if (completed.isError) {
              errors.push(`worker action failed: ${command}: ${messageText(completed.content)}`)
              return textResponse(request, "WF_GIT_ACTION_FAILED")
            }
            if (!actionResults.some((result) => result.command === command)) {
              actionResults.push({ command, result: messageText(completed.content), requestOrder: request.order })
            }
            continue
          }
          return respond(
            request,
            [
              {
                type: "tool_use",
                id,
                name: "Bash",
                input: { command, description: `Local workflow fixture: ${command}` },
              },
            ],
            "tool_use",
          )
        }
        return textResponse(request, "N3_COMPLETE")
      }
      if (!text.includes(INITIAL_PROMPT)) {
        // Session title and suggestion requests must never drive the fixture state.
        return textResponse(request, "Workflow history fixture")
      }
      parentRequests.push(request)
      if (text.includes("<task-notification>") && text.includes("N3_COMPLETE")) {
        return textResponse(request, WORKFLOW_DONE)
      }
      if (text.includes(POST_START_PROMPT)) return textResponse(request, POST_START_DONE)
      if (hasToolResult(request, WORKFLOW_ID)) return textResponse(request, WORKFLOW_RUNNING)
      if (text.includes(STATUS_PROMPT) && !launched) {
        launched = true
        const script = [
          'export const meta = {name: "history-window-fixture", description: "Inspect selected history and run the approved isolated git fixture"}',
          `const one = await agent(${JSON.stringify(TASK_ONE)}, {label: "history-one", userHistoryTurns: 1})`,
          `const three = await agent(${JSON.stringify(TASK_THREE)}, {label: "history-three", userHistoryTurns: 3})`,
          "return {one, three}",
        ].join("\n")
        return respond(
          request,
          [{ type: "tool_use", id: WORKFLOW_ID, name: "Workflow", input: { script } }],
          "tool_use",
        )
      }
      if (hasToolResult(request, ASK_ID)) return textResponse(request, APPROVAL_DONE)
      if (!asked) {
        asked = true
        return respond(
          request,
          [
            {
              type: "tool_use",
              id: ASK_ID,
              name: "AskUserQuestion",
              input: {
                questions: [
                  {
                    header: "Local git",
                    question: APPROVAL_QUESTION,
                    options: [
                      {
                        label: APPROVAL_ANSWER,
                        description: "Allow only the isolated local rebase, verify, and FF push.",
                      },
                      { label: "Do not approve", description: "Keep the isolated git fixture unchanged." },
                    ],
                    multiSelect: false,
                  },
                ],
              },
            },
          ],
          "tool_use",
        )
      }
      errors.push(`unexpected parent request ${request.order}`)
      return textResponse(request, "WF_UNEXPECTED_PARENT")
    },
  })
  return { stub, workers, parentRequests, actionResults, errors, releaseFirstWorker }
}
