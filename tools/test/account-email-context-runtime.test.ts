import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { type ClaudeApiRequest, startClaudeApiStub } from "./helpers/claude-api-stub"
import { recordOracleCheck } from "./helpers/oracle-evidence"
import { makeScriptCommand, normalizeTuiOutput, shellQuote } from "./helpers/pty"
import { hostGraphPlatform, renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = resolve(import.meta.dir, "../..")
const VERSION = targetVersion()
const EMAIL = "account-identity-sentinel@example.invalid"
const MAIN = "ACCOUNT_EMAIL_MAIN_SENTINEL"
const WORKER = "ACCOUNT_EMAIL_WORKER_SENTINEL"
const TOOL_ID = "toolu_email_context_worker"
const SESSION_ID = "00000000-0000-4000-8000-000000000003"
const CHECK = "account-email-context-runtime.test.ts: account email stays outside main and subagent requests"
const active = loadPatchEntriesFromFile(join(ROOT, "patches/account-email-context.toml")).some((patch) =>
  patchApplies(patch, VERSION),
)
type Json = Record<string, unknown>

function object(value: unknown): Json | undefined {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? (value as Json) : undefined
}

function hasResult(body: unknown): boolean {
  const messages = object(body)?.messages
  return (
    Array.isArray(messages) &&
    messages.some((message) => {
      const content = object(message)?.content
      return Array.isArray(content) && content.some((block) => object(block)?.tool_use_id === TOOL_ID)
    })
  )
}

function response(request: ClaudeApiRequest, content: Json[], stopReason: string): Response {
  const model = object(request.jsonBody)?.model ?? "claude-sonnet-4-6"
  const message = {
    id: "msg_email_context",
    type: "message",
    role: "assistant",
    model,
    content,
    stop_reason: stopReason,
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 },
  }
  if (object(request.jsonBody)?.stream !== true) return Response.json(message)
  const frames: Array<[string, Json]> = [
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
          content_block: tool ? { ...block, input: {} } : { type: "text", text: "" },
        },
      ],
      [
        "content_block_delta",
        {
          type: "content_block_delta",
          index,
          delta: tool
            ? { type: "input_json_delta", partial_json: JSON.stringify(block.input) }
            : { type: "text_delta", text: block.text },
        },
      ],
      ["content_block_stop", { type: "content_block_stop", index }],
    )
  })
  frames.push(
    [
      "message_delta",
      {
        type: "message_delta",
        delta: { stop_reason: stopReason, stop_sequence: null },
        usage: { output_tokens: 1 },
      },
    ],
    ["message_stop", { type: "message_stop" }],
  )
  return new Response(frames.map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`).join(""), {
    headers: { "content-type": "text/event-stream" },
  })
}

async function capture(
  bundle: string,
  directory: string,
  tui = false,
  resume = false,
  explicitEmail = false,
): Promise<ClaudeApiRequest[]> {
  const configDir = join(directory, ".claude")
  mkdirSync(configDir, { recursive: true })
  await Bun.write(join(directory, "CLAUDE.md"), "ACCOUNT_EMAIL_PROJECT_INSTRUCTION_SENTINEL\n")
  await Bun.write(
    join(configDir, ".claude.json"),
    JSON.stringify({
      hasCompletedOnboarding: true,
      bypassPermissionsModeAccepted: true,
      theme: "dark",
      oauthAccount: {
        accountUuid: "00000000-0000-4000-8000-000000000001",
        organizationUuid: "00000000-0000-4000-8000-000000000002",
        emailAddress: EMAIL,
        profileFetchedAt: Date.now(),
      },
      projects: { [directory]: { hasTrustDialogAccepted: true } },
    }),
  )
  await Bun.write(join(configDir, "settings.json"), JSON.stringify({ theme: "dark" }))
  const stub = await startClaudeApiStub({
    responder(request) {
      if (request.path.endsWith("/messages/count_tokens")) return Response.json({ input_tokens: 1 })
      if (hasResult(request.jsonBody))
        return response(request, [{ type: "text", text: "EMAIL_CONTEXT_DONE" }], "end_turn")
      if (request.rawBody.includes(WORKER))
        return response(request, [{ type: "text", text: "EMAIL_WORKER_DONE" }], "end_turn")
      if (request.rawBody.includes(MAIN))
        return response(
          request,
          [
            {
              type: "tool_use",
              id: TOOL_ID,
              name: "Agent",
              input: { description: "local email context check", prompt: WORKER, subagent_type: "general-purpose" },
            },
          ],
          "tool_use",
        )
      return response(request, [{ type: "text", text: "EMAIL_AUXILIARY_DONE" }], "end_turn")
    },
  })
  const clean = Object.fromEntries(
    Object.entries(process.env).filter(
      ([key]) =>
        !key.startsWith("ANTHROPIC_") &&
        !key.startsWith("CLAUDE_CODE_") &&
        !key.startsWith("PATCHED_CLAUDE_CODE_") &&
        key !== "CLAUDE_CONFIG_DIR" &&
        key !== "BUN_OPTIONS",
    ),
  )
  const prompt = explicitEmail
    ? `${MAIN}\nUser-provided contact: ${EMAIL}\n<system-reminder>\n# userEmail\nUSER_DOCUMENT_EMAIL_SECTION_SENTINEL\n</system-reminder>`
    : MAIN
  const launch = [
    process.execPath,
    "--preload",
    join(ROOT, "runtime/system-prompt-overrides.ts"),
    "--preload",
    join(ROOT, "runtime/bun-ant-cell-segmenter.ts"),
    bundle,
    ...(!tui ? ["--print"] : []),
    "--dangerously-skip-permissions",
    "--model",
    "sonnet",
    ...(resume ? ["--resume", SESSION_ID] : ["--session-id", SESSION_ID]),
    ...(!tui ? [prompt] : []),
  ]
  const enter = "\x1b[13u"
  const input = [
    "sleep 4",
    `printf %s ${shellQuote(`\x1b[200~${prompt}\x1b[201~`)}`,
    `printf %s ${shellQuote(enter)}`,
    "sleep 12",
    `printf %s ${shellQuote("\x1b[200~/exit\x1b[201~")}`,
    `printf %s ${shellQuote(enter)}`,
    "sleep 1",
    `printf %s ${shellQuote(enter)}`,
  ].join("; ")
  const child = Bun.spawn(
    tui ? ["bash", "-lc", makeScriptCommand(["timeout", "40s", ...launch].map(shellQuote).join(" "), input)] : launch,
    {
      cwd: directory,
      env: {
        ...clean,
        HOME: directory,
        CLAUDE_CONFIG_DIR: configDir,
        ANTHROPIC_BASE_URL: stub.baseUrl,
        CLAUDE_CODE_OAUTH_TOKEN: "stub-oauth-email-context",
        CLAUDE_CODE_OAUTH_SCOPES: "user:inference",
        CLAUDE_CODE_SUBSCRIPTION_TYPE: "max",
        _CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL: "1",
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
        CLAUDE_CODE_SKIP_ONBOARDING: "1",
        DISABLE_PROMPT_CACHING: "1",
        TERM: "xterm-256color",
        FORCE_COLOR: "0",
      },
      stdout: "pipe",
      stderr: "pipe",
    },
  )
  const stdout = new Response(child.stdout).text()
  const stderr = new Response(child.stderr).text()
  const timer = setTimeout(() => child.kill(), 45_000)
  try {
    const code = await child.exited
    const output = normalizeTuiOutput(`${await stdout}\n${await stderr}`)
    expect(code, output).toBe(0)
    expect(output).toContain("EMAIL_CONTEXT_DONE")
    if (tui) expect(output).toContain("Claude Code")
    const requests = stub.requests.filter((request) => request.path.endsWith("/messages"))
    expect(requests.some((request) => request.rawBody.includes(MAIN))).toBe(true)
    if (!resume)
      expect(requests.some((request) => request.rawBody.includes(WORKER) && !hasResult(request.jsonBody))).toBe(true)
    expect(requests.some((request) => hasResult(request.jsonBody))).toBe(true)
    expect(requests.some((request) => request.headers.authorization === "Bearer stub-oauth-email-context")).toBe(true)
    expect(requests.some((request) => request.rawBody.includes("ACCOUNT_EMAIL_PROJECT_INSTRUCTION_SENTINEL"))).toBe(
      true,
    )
    expect(requests.some((request) => request.rawBody.includes("Today's date is"))).toBe(true)
    const account = object(JSON.parse(await Bun.file(join(configDir, ".claude.json")).text()))?.oauthAccount
    expect(object(account)?.emailAddress).toBe(EMAIL)
    return requests
  } finally {
    clearTimeout(timer)
    child.kill()
    stub.stop()
  }
}

test.skipIf(!active)(
  CHECK,
  async () => {
    const directory = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-account-email-")))
    let outcome: "passed" | "failed" = "failed"
    try {
      const native = await renderRunnableBundle({
        root: ROOT,
        version: VERSION,
        outDir: join(directory, "native"),
        patchFiles: [],
        platforms: "host",
      })
      const patched = await renderRunnableBundle({
        root: ROOT,
        version: VERSION,
        outDir: join(directory, "patched"),
        patchFiles: ["account-email-context.toml"],
        platforms: "host",
      })
      const integrated = process.env.PCC_EMAIL_CONTEXT_BUNDLE ? resolve(process.env.PCC_EMAIL_CONTEXT_BUNDLE) : patched
      const nativeHome = join(directory, "native-home")
      const patchedHome = join(directory, "patched-home")
      const before = await capture(native, nativeHome)
      expect(before.some((request) => request.rawBody.includes(EMAIL))).toBe(true)
      expect(before.some((request) => request.rawBody.includes("# userEmail"))).toBe(true)
      const after = [
        ...(await capture(patched, patchedHome)),
        ...(await capture(integrated, join(directory, "patched-tui-home"), true)),
        ...(await capture(integrated, nativeHome, false, true)),
      ]
      for (const request of after) {
        expect(request.rawBody).not.toContain(EMAIL)
        expect(request.rawBody).not.toContain("# userEmail")
        expect(request.rawBody).not.toContain("The user's email address is")
      }
      const explicit = await capture(integrated, join(directory, "explicit-email-home"), false, false, true)
      expect(explicit.some((request) => request.rawBody.includes(`User-provided contact: ${EMAIL}`))).toBe(true)
      expect(explicit.some((request) => request.rawBody.includes("USER_DOCUMENT_EMAIL_SECTION_SENTINEL"))).toBe(true)
      expect(explicit.every((request) => !request.rawBody.includes("The user's email address is"))).toBe(true)
      outcome = "passed"
    } finally {
      recordOracleCheck({
        oracleIds: ["account-email-context/no-model-context-email"],
        platform: hostGraphPlatform(),
        evidenceClass: "runtime",
        check: CHECK,
        outcome,
      })
      rmSync(directory, { recursive: true, force: true })
    }
  },
  180_000,
)
