import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { targetVersion } from "../lib/target"
import { type ClaudeApiRequest, startClaudeApiStub } from "./helpers/claude-api-stub"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const root = join(import.meta.dir, "..", "..")

function mainConversation(request: ClaudeApiRequest): boolean {
  const body = request.jsonBody as { output_config?: { format?: unknown } } | undefined
  // Background title generation can use the same model and prompt text.
  // Reject and compare only the main conversation, not its structured title request.
  return request.path.endsWith("/messages") && body?.output_config?.format === undefined
}

for (const mode of ["tier declaration", "second slot default"] as const) {
  test(`rendered firstParty ${mode} sends max then retries without effort after backend rejection`, async () => {
    const work = mkdtempSync(join(tmpdir(), "patched-cc-backend-effort-"))
    const home = join(work, "home")
    mkdirSync(join(home, ".claude"), { recursive: true })
    const success = await startClaudeApiStub({ text: "effort recovery verified" })
    let rejected = false
    const stub = await startClaudeApiStub({
      responder: async (request) => {
        if (mainConversation(request) && !rejected) {
          rejected = true
          return Response.json(
            {
              type: "error",
              error: { type: "invalid_request_error", message: "This model does not support the effort parameter" },
            },
            { status: 400 },
          )
        }
        return fetch(`${success.baseUrl}${request.path}`, {
          method: "POST",
          body: request.rawBody,
          headers: { "content-type": "application/json" },
        })
      },
    })
    try {
      const bundle = await renderRunnableBundle({
        root,
        version: targetVersion(),
        outDir: join(work, "rendered"),
        patchFiles: ["model-effort-capabilities.toml", "model-effort-session.toml"],
        platforms: "host",
      })
      const env = { ...process.env }
      for (const key of Object.keys(env)) {
        if (key.startsWith("ANTHROPIC_") || key.startsWith("CLAUDE_CODE_USE_") || key === "CLAUDE_CODE_EFFORT_LEVEL")
          delete env[key]
      }
      const proc = Bun.spawn({
        cmd: [
          process.execPath,
          bundle,
          "--print",
          "--bare",
          "--model",
          "gpt-5.6-astra",
          ...(mode === "tier declaration" ? ["--effort", "max"] : []),
          "--max-turns",
          "1",
          "--no-session-persistence",
          "test effort recovery",
        ],
        cwd: home,
        env: {
          ...env,
          HOME: home,
          CLAUDE_CONFIG_DIR: join(home, ".claude"),
          ANTHROPIC_API_KEY: "stub-api-key",
          ANTHROPIC_BASE_URL: stub.baseUrl,
          ...(mode === "tier declaration"
            ? {
                ANTHROPIC_DEFAULT_FABLE_MODEL: "gpt-5.6-astra",
                ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES: "effort,max_effort",
              }
            : {
                ANTHROPIC_CUSTOM_MODEL_OPTION_2: "gpt-5.6-astra",
                ANTHROPIC_CUSTOM_MODEL_OPTION_2_EFFORT_LEVEL: "max",
                ANTHROPIC_CUSTOM_MODEL_OPTION_2_SUPPORTED_CAPABILITIES: "effort",
              }),
          CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
          CLAUDE_CODE_SKIP_ONBOARDING: "1",
          CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
          DISABLE_PROMPT_CACHING: "1",
        },
        stdout: "pipe",
        stderr: "pipe",
      })
      const timeout = setTimeout(() => proc.kill(), 45000)
      const [exitCode, stdout, stderr] = await Promise.all([
        proc.exited,
        new Response(proc.stdout).text(),
        new Response(proc.stderr).text(),
      ])
      clearTimeout(timeout)
      expect(exitCode, `${stdout}\n${stderr}`).toBe(0)
      const requests = stub.requests.filter(mainConversation)
      expect(requests.length).toBeGreaterThanOrEqual(2)
      const bodies = requests.map((r) => r.jsonBody as { model: string; output_config?: { effort?: string } })
      expect(bodies[0]?.model).toBe("gpt-5.6-astra")
      expect(bodies[0]?.output_config?.effort).toBe("max")
      for (const body of bodies.slice(1)) expect(body.output_config?.effort).toBeUndefined()
      expect(stdout).toContain("effort recovery verified")
    } finally {
      stub.stop()
      success.stop()
      rmSync(work, { recursive: true, force: true })
    }
  }, 120000)
}
