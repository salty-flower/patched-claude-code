import { afterAll, expect, test } from "bun:test"
import { createHash } from "node:crypto"
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { computeRuntimeBundleIntegrity } from "../../runtime/release-integrity"
import { targetVersion } from "../lib/target"
import { startClaudeApiStub, type ClaudeApiRequest } from "./helpers/claude-api-stub"
import { assertMemoryPromptContract } from "./helpers/memory-prompt-contract"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"
import { captureStructuredPromptDaemonRequest } from "./helpers/structured-prompt-daemon"

const ROOT = join(import.meta.dir, "..", "..")
const VERSION = targetVersion()
const work = mkdtempSync(join(tmpdir(), "patched-cc-301-matrix-"))
afterAll(() => rmSync(work, { recursive: true, force: true }))
const hash = (value: string) => `sha256-${createHash("sha256").update(value).digest("base64")}`
type Section = { id: string; scope: "shared" | "session"; baselineSha256: string }
type Diagnostic = {
  systemSha256: string
  messagesSha256: string
  toolsSha256: string
  sections: Array<Section & { source: string }>
  recoveries: Array<{ id: string; scope: string; reason: string }>
}
function system(request: ClaudeApiRequest): Array<{ type: string; text: string; cache_control?: unknown }> {
  return (request.jsonBody as { system: Array<{ type: string; text: string }> }).system
}
function diagnostics(stderr: string): Diagnostic {
  const line = stderr
    .split("\n")
    .reverse()
    .find((line) => line.startsWith("[system-prompt-request] "))
  if (!line) throw new Error(`final request diagnostic absent: ${stderr}`)
  return JSON.parse(line.slice("[system-prompt-request] ".length)) as Diagnostic
}
function evidence(name: string, diagnostic: Diagnostic): void {
  const directory = process.env.PATCHED_CLAUDE_CODE_TEST_PROMPT_EVIDENCE
  if (!directory) return
  mkdirSync(directory, { recursive: true })
  writeFileSync(join(directory, `${name}.json`), `${JSON.stringify(diagnostic, null, 2)}\n`)
}

test("real request matrix preserves memory and runtime context across cache, projects, styles, and print/SDK", async () => {
  const payload = process.env.PATCHED_CLAUDE_CODE_TEST_PAYLOAD
    ? resolve(process.env.PATCHED_CLAUDE_CODE_TEST_PAYLOAD)
    : undefined
  const bundle = payload
    ? join(payload, "cli.js")
    : await renderRunnableBundle({
        root: ROOT,
        version: VERSION,
        outDir: join(work, "rendered"),
        patchFiles: ["system-prompt-section-overrides.toml"],
        platforms: "host",
      })
  const manifest = payload ? join(payload, "manifest.json") : join(work, "release.json")
  if (!payload) {
    const integrity = computeRuntimeBundleIntegrity(bundle, "graph.patched")
    writeFileSync(
      manifest,
      JSON.stringify({
        upstream: { version: VERSION },
        runtime: { graphDirectory: "graph.patched" },
        bundle: integrity,
      }),
    )
  }
  const runtime = join(payload ?? ROOT, "runtime")
  const helperCommand = payload
    ? [join(payload, "bin", "claude-patched")]
    : [
        process.execPath,
        "--preload",
        join(runtime, "bun-ant-cell-segmenter.ts"),
        "--preload",
        join(runtime, "system-prompt-overrides.ts"),
        bundle,
      ]
  const stub = await startClaudeApiStub({ text: "LOCAL_MATRIX_OK" })
  try {
    const home = join(work, "home")
    const configDir = join(home, ".claude")
    mkdirSync(configDir, { recursive: true })
    writeFileSync(
      join(configDir, ".claude.json"),
      JSON.stringify({
        customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
        hasCompletedOnboarding: true,
        theme: "dark",
      }),
    )
    const projects = [join(work, "project-a"), join(work, "project-b")]
    for (const project of projects) {
      mkdirSync(project, { recursive: true })
      writeFileSync(join(project, "CLAUDE.md"), "PROJECT_INSTRUCTION_MATRIX_MARKER\n")
    }
    writeFileSync(
      join(configDir, ".claude.json"),
      JSON.stringify({
        customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
        hasCompletedOnboarding: true,
        theme: "dark",
        projects: Object.fromEntries(
          projects.flatMap((project) =>
            [...new Set([project, realpathSync(project)])].map((path) => [path, { hasTrustDialogAccepted: true }]),
          ),
        ),
      }),
    )
    mkdirSync(join(configDir, "output-styles"), { recursive: true })
    writeFileSync(
      join(configDir, "output-styles", "matrix.md"),
      "---\nname: matrix\ndescription: local runtime test\nkeep-coding-instructions: true\n---\nOUTPUT_STYLE_MATRIX_MARKER\n",
    )
    const env: Record<string, string> = {
      HOME: home,
      CLAUDE_CONFIG_DIR: configDir,
      ANTHROPIC_API_KEY: "stub-api-key",
      ANTHROPIC_BASE_URL: stub.baseUrl,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_ONBOARDING: "1",
      CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      PATCHED_CLAUDE_CODE_RELEASE_MANIFEST: manifest,
      PATCHED_CLAUDE_CODE_BUNDLE: bundle,
      BUN_OPTIONS: "",
      PATCHED_CLAUDE_CODE_RUNTIME_BOOTSTRAP: "",
    }
    const sdkPath = process.env.PATCHED_CLAUDE_CODE_TEST_AGENT_SDK
    const sdkRunner = join(work, "sdk-runner.ts")
    if (sdkPath)
      writeFileSync(
        sdkRunner,
        `const { query } = await import(${JSON.stringify(sdkPath)});\nfor await (const message of query({ prompt: "prompt matrix test", options: { cwd: process.cwd(), model: "sonnet", maxTurns: 1, executable: "bun", executableArgs: process.env.PATCHED_TEST_SKIP_HELPER === "1" ? [] : ["--preload", ${JSON.stringify(join(runtime, "bun-ant-cell-segmenter.ts"))}, "--preload", ${JSON.stringify(join(runtime, "system-prompt-overrides.ts"))}], pathToClaudeCodeExecutable: ${JSON.stringify(bundle)}, systemPrompt: { type: "preset", preset: "claude_code" }, settingSources: ["user", "project", "local"], stderr: (line) => process.stderr.write(line) } })) if (message.type === "result") console.log(JSON.stringify(message));\n`,
      )
    async function run(options: {
      project?: string
      root: string
      helper?: boolean
      cache?: boolean
      style?: boolean
      sdk?: boolean
      export?: boolean
      plugin?: string
      full?: boolean
      model?: string
    }) {
      writeFileSync(
        join(configDir, "settings.json"),
        JSON.stringify({ theme: "dark", ...(options.style ? { outputStyle: "matrix" } : {}) }),
      )
      const before = stub.requests.length
      const sdk = options.sdk ?? false
      const command =
        sdk && sdkPath
          ? [process.execPath, sdkRunner]
          : [
              ...(options.helper === false ? [process.execPath, bundle] : helperCommand),
              "--print",
              "--model",
              options.model ?? "sonnet",
              "--max-turns",
              "1",
              ...(options.plugin ? ["--plugin-dir", options.plugin] : []),
              ...(sdk
                ? ["--input-format", "stream-json", "--output-format", "stream-json", "--verbose"]
                : ["prompt matrix test"]),
            ]
      const child = Bun.spawn({
        cmd: command,
        cwd: options.project ?? projects[0],
        env: {
          ...process.env,
          ...env,
          ...(options.full ? { CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT: "0" } : {}),
          PATCHED_TEST_SKIP_HELPER: options.helper === false ? "1" : "0",
          DISABLE_PROMPT_CACHING: options.cache ? "0" : "1",
          PATCHED_CLAUDE_CODE_PROMPT_DIR: options.root,
          PATCHED_CLAUDE_CODE_PROMPT_DIAGNOSTICS: "1",
          PATCHED_CLAUDE_CODE_PROMPT_EXPORT: options.export ? "1" : "0",
        },
        stdin: sdk && !sdkPath ? "pipe" : "ignore",
        stdout: "pipe",
        stderr: "pipe",
      })
      if (sdk && !sdkPath && child.stdin) {
        child.stdin.write(
          `${JSON.stringify({ type: "user", message: { role: "user", content: "prompt matrix test" } })}\n`,
        )
        child.stdin.end()
      }
      const timeout = setTimeout(() => child.kill(), 40_000)
      const [exitCode, stdout, stderr] = await Promise.all([
        child.exited,
        new Response(child.stdout).text(),
        new Response(child.stderr).text(),
      ])
      clearTimeout(timeout)
      const allRequests = stub.requests.slice(before)
      const requests = allRequests.filter((request) => request.path.endsWith("/messages"))
      return { exitCode, stdout, stderr, allRequests, requests, request: requests.at(-1) }
    }
    const promptRoot = join(work, "prompts")
    const direct = await run({ root: join(work, "absent"), helper: false })
    expect(direct.exitCode, direct.stderr).toBe(0)
    const exported = await run({ root: promptRoot, export: true })
    expect(exported.exitCode, exported.stderr).toBe(0)
    expect(system(exported.request!)).toEqual(system(direct.request!))
    evidence("default-lean", diagnostics(exported.stderr))
    const sdkDirect = await run({ root: join(work, "sdk-absent"), helper: false, sdk: true })
    expect(sdkDirect.exitCode, sdkDirect.stderr).toBe(0)
    const catalog = JSON.parse(readFileSync(join(promptRoot, "sections.v2.json"), "utf8")) as { sections: Section[] }
    const styleRoot = join(work, "style-export")
    const styleExport = await run({ root: styleRoot, export: true, style: true })
    expect(styleExport.exitCode, `${styleExport.stdout}\n${styleExport.stderr}`).toBe(0)
    const styleCatalog = JSON.parse(readFileSync(join(styleRoot, "sections.v2.json"), "utf8")) as {
      sections: Section[]
    }
    const styleDirect = await run({ root: join(work, "style-absent"), helper: false, style: true })
    expect(styleDirect.exitCode, `${styleDirect.stdout}\n${styleDirect.stderr}`).toBe(0)
    expect(JSON.stringify(styleDirect.request!.jsonBody)).toContain("OUTPUT_STYLE_MATRIX_MARKER")
    const selected = catalog.sections.find((section) => section.scope === "shared" && section.id !== "memory")!
    expect(selected).toBeDefined()
    const replacement = "CUSTOM_STATIC_BODY_MATRIX_MARKER\n"
    writeFileSync(join(promptRoot, "body.md"), replacement)
    const styleSelected = styleCatalog.sections.find(
      (section) => section.id === selected.id && section.scope === selected.scope,
    )
    expect(styleSelected).toBeDefined()
    const config = {
      schema: 2,
      targetVersion: VERSION,
      rules: [
        {
          ...selected,
          action: "replace",
          expectedSha256: [...new Set([selected.baselineSha256, styleSelected!.baselineSha256])],
          file: "body.md",
        },
      ],
    }
    writeFileSync(join(promptRoot, "config.json"), JSON.stringify(config))
    const memoryPaths = new Set<string>()
    for (const cache of [false, true])
      for (const project of projects)
        for (const style of [false, true])
          for (const sdk of [false, true]) {
            const result = await run({ root: promptRoot, cache, project, style, sdk })
            expect(
              result.exitCode,
              `${JSON.stringify({ cache, project, style, sdk })}\n${result.stdout}\n${result.stderr}`,
            ).toBe(0)
            expect(result.request).toBeDefined()
            const text = system(result.request!)
              .map((block) => block.text)
              .join("\n")
            expect(system(result.request!).some((block) => block.cache_control !== undefined)).toBe(cache)
            expect(text).toContain(replacement)
            expect(JSON.stringify(result.request!.jsonBody).includes("OUTPUT_STYLE_MATRIX_MARKER")).toBe(style)
            const directory = text.match(/(?:\/[^\s`<>]+)+\/memory\//)?.[0]
            expect(directory, text).toBeDefined()
            memoryPaths.add(directory!)
            assertMemoryPromptContract(text, { directory: directory!, profile: "lean" })
            const diagnostic = diagnostics(result.stderr)
            expect(diagnostic.systemSha256).toBe(hash(JSON.stringify(system(result.request!))))
            const body = result.request!.jsonBody as { messages: unknown; tools: unknown }
            expect(diagnostic.messagesSha256).toBe(hash(JSON.stringify(body.messages ?? null)))
            expect(diagnostic.toolsSha256).toBe(hash(JSON.stringify(body.tools ?? null)))
            if (!cache && project === projects[0] && !style && !sdk) evidence("configured-lean", diagnostic)
            if (!cache && project === projects[0] && !style && sdk) evidence("sdk-preset", diagnostic)
            expect(
              diagnostic.sections.find((section) => section.id === selected.id && section.scope === selected.scope)
                ?.source,
            ).toBe("user")
            expect(result.stderr).not.toContain(replacement.trim())
            const baselineAttribution = system((sdk ? sdkDirect : direct).request!).filter((block) =>
              /billing|attribution/i.test(block.text),
            )
            expect(system(result.request!).filter((block) => /billing|attribution/i.test(block.text))).toEqual(
              baselineAttribution,
            )
            expect(JSON.stringify(result.request!.jsonBody)).toContain("PROJECT_INSTRUCTION_MATRIX_MARKER")
          }
    expect(memoryPaths.size).toBe(2)
    const removable = catalog.sections.find((section) => section.scope === "session" && section.id === "communication")!
    expect(removable).toBeDefined()
    writeFileSync(
      join(promptRoot, "config.json"),
      JSON.stringify({
        ...config,
        rules: [
          ...config.rules,
          { id: removable.id, scope: removable.scope, action: "remove", expectedSha256: removable.baselineSha256 },
        ],
      }),
    )
    const removed = await run({ root: promptRoot })
    expect(removed.exitCode, `${removed.stdout}\n${removed.stderr}`).toBe(0)
    const removedText = system(removed.request!)
      .map((block) => block.text)
      .join("\n")
    expect(removedText).not.toContain(readFileSync(join(promptRoot, "upstream", "session-communication.md"), "utf8"))
    expect(
      diagnostics(removed.stderr).sections.find(
        (section) => section.scope === "session" && section.id === "communication",
      )?.source,
    ).toBe("removed")
    assertMemoryPromptContract(removedText, { directory: [...memoryPaths][0], profile: "lean" })
    writeFileSync(join(promptRoot, "config.json"), JSON.stringify(config))
    const full = await run({ root: join(work, "full-unconfigured"), full: true })
    expect(full.exitCode, full.stderr).toBe(0)
    assertMemoryPromptContract(
      system(full.request!)
        .map((block) => block.text)
        .join("\n"),
      { directory: [...memoryPaths][0], profile: "full" },
    )
    evidence("forced-full", diagnostics(full.stderr))
    const plugin = join(work, "native-plugin")
    mkdirSync(join(plugin, ".claude-plugin"), { recursive: true })
    mkdirSync(join(plugin, "hooks"), { recursive: true })
    writeFileSync(join(plugin, ".claude-plugin", "plugin.json"), JSON.stringify({ name: "compose-matrix" }))
    writeFileSync(join(plugin, "hooks", "hooks.json"), JSON.stringify({ modules: ["./register.js"] }))
    writeFileSync(
      join(plugin, "hooks", "register.js"),
      'export function register(on) { on("prompt.compose", async ($, event, next) => { const result = await next(event); return { ...result, sections: [...result.sections, { id: "unknown_matrix_section", scope: "session", text: "UNKNOWN_NATIVE_SECTION_MATRIX_MARKER" }] }; }); }\n',
    )
    const unknown = await run({ root: promptRoot, plugin })
    expect(unknown.exitCode, unknown.stderr).toBe(0)
    expect(
      system(unknown.request!)
        .map((block) => block.text)
        .join("\n"),
    ).toContain("UNKNOWN_NATIVE_SECTION_MATRIX_MARKER")
    expect(
      diagnostics(unknown.stderr).sections.find((section) => section.id === "unknown_matrix_section")?.source,
    ).toBe("upstream")
    // Exercise the interactive renderer and a local slash command with the same preload.
    writeFileSync(join(configDir, "settings.json"), JSON.stringify({ theme: "dark" }))
    const tuiEnv = {
      ...env,
      TERM: "xterm-256color",
      DISABLE_PROMPT_CACHING: "1",
      PATCHED_CLAUDE_CODE_PROMPT_DIR: promptRoot,
      PATCHED_CLAUDE_CODE_PROMPT_DIAGNOSTICS: "1",
    }
    const tuiCommand = `stty cols 120 rows 40; ${shellEnvironment(tuiEnv)} ${[...helperCommand, "--model", "sonnet"].map(shellQuote).join(" ")}`
    const beforeTui = stub.requests.length
    const tui = Bun.spawn({
      cmd: [
        "bash",
        "-c",
        makeScriptCommand(
          tuiCommand,
          "sleep 4; printf '\\033[200~prompt matrix TUI test\\033[201~'; sleep 1; printf '\\033[13u'; sleep 6; printf '\\033[200~/exit\\033[201~'; sleep 1; printf '\\033[13u'; sleep 2",
        ),
      ],
      cwd: projects[0],
      env: process.env,
      stdout: "pipe",
      stderr: "pipe",
    })
    const tuiTimeout = setTimeout(() => tui.kill(), 25_000)
    const [tuiExit, tuiStdout, tuiStderr] = await Promise.all([
      tui.exited,
      new Response(tui.stdout).text(),
      new Response(tui.stderr).text(),
    ])
    clearTimeout(tuiTimeout)
    expect(tuiExit, `${tuiStdout}\n${tuiStderr}`).toBe(0)
    const tuiRequest = stub.requests
      .slice(beforeTui)
      .filter((request) => request.path.endsWith("/messages"))
      .at(-1)
    expect(tuiRequest, normalizeTuiOutput(`${tuiStdout}\n${tuiStderr}`)).toBeDefined()
    expect(
      system(tuiRequest!)
        .map((block) => block.text)
        .join("\n"),
    ).toContain(replacement)
    expect(normalizeTuiOutput(tuiStdout)).not.toMatch(/ReferenceError|TypeError/)
    const daemonRequest = await captureStructuredPromptDaemonRequest({
      command: helperCommand,
      cwd: realpathSync(projects[0]),
      env: tuiEnv,
      directory: work,
      stub,
      marker: replacement.trim(),
    })
    assertMemoryPromptContract(
      system(daemonRequest)
        .map((block) => block.text)
        .join("\n"),
      { directory: [...memoryPaths][0], profile: "lean" },
    )
    // Opt in to the installed ACP adapter; the adapter must spawn this fixture,
    // rather than its SDK-bundled CLI or the user's configured live package.
    const adapter = process.env.PATCHED_CLAUDE_CODE_TEST_ACP_ADAPTER
    if (adapter) {
      const executable = payload ? helperCommand[0] : join(work, "claude-acp-fixture")
      if (!payload) {
        writeFileSync(executable, `#!/bin/sh\nexec ${helperCommand.map(shellQuote).join(" ")} "$@"\n`)
        chmodSync(executable, 0o755)
      }
      const beforeAcp = stub.requests.length
      const acp = Bun.spawn({
        cmd: [adapter],
        cwd: projects[0],
        env: { ...process.env, ...tuiEnv, CLAUDE_CODE_EXECUTABLE: executable },
        stdin: "pipe",
        stdout: "pipe",
        stderr: "pipe",
      })
      const pending = new Map<number, { resolve: (result: unknown) => void; reject: (error: Error) => void }>()
      let nextId = 1
      const stderr = new Response(acp.stderr).text()
      const reader = (async () => {
        let buffer = ""
        for await (const chunk of acp.stdout) {
          buffer += new TextDecoder().decode(chunk)
          let end: number
          while ((end = buffer.indexOf("\n")) >= 0) {
            const line = buffer.slice(0, end)
            buffer = buffer.slice(end + 1)
            if (!line.trim()) continue
            const message = JSON.parse(line) as { id?: number; result?: unknown; error?: unknown }
            if (message.id === undefined) continue
            const waiter = pending.get(message.id)
            if (!waiter) continue
            pending.delete(message.id)
            if (message.error) waiter.reject(new Error(JSON.stringify(message.error)))
            else waiter.resolve(message.result)
          }
        }
      })()
      async function rpc(method: string, params: unknown): Promise<unknown> {
        const id = nextId++
        return await new Promise((resolve, reject) => {
          pending.set(id, { resolve, reject })
          acp.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id, method, params })}\n`)
        })
      }
      const timeout = setTimeout(() => {
        acp.kill()
        for (const waiter of pending.values()) waiter.reject(new Error("ACP fixture timed out"))
      }, 40_000)
      try {
        await rpc("initialize", {
          protocolVersion: 1,
          clientCapabilities: {},
          clientInfo: { name: "patched-runtime-matrix", version: "1" },
        })
        const session = (await rpc("session/new", { cwd: projects[0], mcpServers: [] })) as { sessionId: string }
        await rpc("session/prompt", {
          sessionId: session.sessionId,
          prompt: [{ type: "text", text: "ACP matrix test" }],
        })
        const request = stub.requests
          .slice(beforeAcp)
          .filter((request) => request.path.endsWith("/messages"))
          .at(-1)
        expect(request).toBeDefined()
        const text = system(request!)
          .map((block) => block.text)
          .join("\n")
        expect(text).toContain(replacement)
        assertMemoryPromptContract(text, { directory: [...memoryPaths][0], profile: "lean" })
      } finally {
        clearTimeout(timeout)
        acp.kill()
        await reader
        await stderr
      }
    }
    for (const mutation of [{ id: "absent-upstream-section" }, { expectedSha256: hash("stale upstream text") }]) {
      writeFileSync(
        join(promptRoot, "config.json"),
        JSON.stringify({ ...config, rules: [{ ...config.rules[0], ...mutation }] }),
      )
      const recovered = await run({ root: promptRoot })
      expect(recovered.exitCode, recovered.stderr).toBe(0)
      expect(recovered.request).toBeDefined()
      expect(system(recovered.request!)).toEqual(system(direct.request!))
      const nativeBody = direct.request!.jsonBody as { messages: unknown; tools: unknown }
      const recoveredBody = recovered.request!.jsonBody as { messages: unknown; tools: unknown }
      expect(recoveredBody.messages).toEqual(nativeBody.messages)
      expect(recoveredBody.tools).toEqual(nativeBody.tools)
      expect(diagnostics(recovered.stderr).recoveries).toEqual([
        { id: mutation.id ?? selected.id, scope: selected.scope, reason: mutation.id ? "absent" : "hash_mismatch" },
      ])
    }
    writeFileSync(join(promptRoot, "config.json"), JSON.stringify(config))
    // Opus refusal fallback changes the lean body's system-message guidance.
    // Bind only the initial model's actual export, then compose the fallback model.
    const initialRoot = join(work, "opus-initial")
    const initial = await run({ root: initialRoot, model: "claude-opus-5-5", export: true })
    expect(initial.exitCode, initial.stderr).toBe(0)
    const initialSection = diagnostics(initial.stderr).sections.find(
      (section) => section.scope === "shared" && section.id === "lean_body",
    )!
    expect(initialSection).toBeDefined()
    writeFileSync(join(initialRoot, "body.md"), replacement)
    writeFileSync(
      join(initialRoot, "config.json"),
      JSON.stringify({
        ...config,
        rules: [
          {
            id: initialSection.id,
            scope: initialSection.scope,
            action: "replace",
            expectedSha256: initialSection.baselineSha256,
            file: "body.md",
          },
        ],
      }),
    )
    const fallbackNative = await run({ root: join(work, "fallback-native"), model: "claude-opus-4-8" })
    expect(fallbackNative.exitCode, fallbackNative.stderr).toBe(0)
    const fallback = await run({ root: initialRoot, model: "claude-opus-4-8" })
    expect(fallback.exitCode, fallback.stderr).toBe(0)
    expect(system(fallback.request!)).toEqual(system(fallbackNative.request!))
    expect(diagnostics(fallback.stderr).recoveries).toEqual([
      { id: "lean_body", scope: "shared", reason: "hash_mismatch" },
    ])
    const fallbackBody = fallback.request!.jsonBody as { messages: unknown; tools: unknown }
    const fallbackNativeBody = fallbackNative.request!.jsonBody as { messages: unknown; tools: unknown }
    expect(fallbackBody.messages).toEqual(fallbackNativeBody.messages)
    expect(fallbackBody.tools).toEqual(fallbackNativeBody.tools)
    const restored = await run({ root: initialRoot, model: "claude-opus-5-5" })
    expect(restored.exitCode, restored.stderr).toBe(0)
    expect(diagnostics(restored.stderr).recoveries).toEqual([])
    expect(
      system(restored.request!)
        .map((block) => block.text)
        .join("\n"),
    ).toContain(replacement)
    writeFileSync(join(promptRoot, "body.md"), replacement)
    const genericBody = await run({ root: promptRoot, style: true })
    expect(genericBody.exitCode, `${genericBody.stdout}\n${genericBody.stderr}`).toBe(0)
    const genericText = system(genericBody.request!)
      .map((block) => block.text)
      .join("\n")
    expect(JSON.stringify(genericBody.request!.jsonBody)).toContain("OUTPUT_STYLE_MATRIX_MARKER")
    assertMemoryPromptContract(genericText, { directory: [...memoryPaths][0], profile: "lean" })
  } finally {
    stub.stop()
  }
}, 600_000)
