import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { targetVersion } from "../lib/target"
import { startClaudeApiStub } from "./helpers/claude-api-stub"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const MARKER = "native-compose-runtime-original-test-body"

test("extracted native compose worker preserves no-op requests, edits by identity, and falls back after hook errors", async () => {
  const work = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-native-compose-")))
  const stub = await startClaudeApiStub({ text: "native compose stub ok" })
  try {
    const home = join(work, "home")
    const config = join(home, ".claude")
    const plugin = join(work, "plugin")
    mkdirSync(config, { recursive: true })
    // Memory keys can resolve from either cwd or a discovered repository root.
    // Give every capture the same root, independent of ancestor .git markers
    // and asynchronous repository discovery during native startup.
    const initialized = Bun.spawnSync({ cmd: ["git", "init", "--quiet", "--template=", home] })
    expect(initialized.exitCode).toBe(0)
    const repositoryRoot = Bun.spawnSync({ cmd: ["git", "rev-parse", "--show-toplevel"], cwd: home })
    expect(repositoryRoot.exitCode).toBe(0)
    expect(repositoryRoot.stdout.toString().trim()).toBe(home)
    mkdirSync(join(plugin, ".claude-plugin"), { recursive: true })
    mkdirSync(join(plugin, "hooks"), { recursive: true })
    writeFileSync(join(plugin, ".claude-plugin", "plugin.json"), JSON.stringify({ name: "compose-runtime-test" }))
    writeFileSync(join(plugin, "hooks", "hooks.json"), JSON.stringify({ modules: ["./register.js"] }))
    writeFileSync(join(config, "settings.json"), JSON.stringify({ theme: "dark" }))
    writeFileSync(
      join(config, ".claude.json"),
      JSON.stringify({
        hasCompletedOnboarding: true,
        customApiKeyResponses: { approved: ["stub-api-key"], rejected: [] },
        projects: { [home]: { hasTrustDialogAccepted: true } },
        theme: "dark",
      }),
    )
    const bundle = await renderRunnableBundle({
      root: ROOT,
      version: targetVersion(),
      outDir: join(work, "rendered"),
      platforms: "host",
      patchFiles: [],
    })
    async function capture(source?: string): Promise<{ system: unknown; log: string }> {
      const debug = join(work, `debug-${stub.requests.length}.log`)
      if (source) writeFileSync(join(plugin, "hooks", "register.js"), source)
      const child = Bun.spawn({
        cmd: [
          process.execPath,
          bundle,
          ...(source ? ["--plugin-dir", plugin] : []),
          "--print",
          "--model",
          "sonnet",
          "--max-turns",
          "1",
          "--debug-file",
          debug,
          "native compose runtime test",
        ],
        cwd: home,
        env: {
          ...process.env,
          HOME: home,
          CLAUDE_CONFIG_DIR: config,
          ANTHROPIC_API_KEY: "stub-api-key",
          ANTHROPIC_BASE_URL: stub.baseUrl,
          CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
          CLAUDE_CODE_SKIP_ONBOARDING: "1",
          CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
        },
        stdout: "pipe",
        stderr: "pipe",
      })
      const timer = setTimeout(() => child.kill(), 30000)
      const before = stub.requests.length
      const [exit, stdout, stderr] = await Promise.all([
        child.exited,
        new Response(child.stdout).text(),
        new Response(child.stderr).text(),
      ])
      clearTimeout(timer)
      expect({ exit, stdout, stderr }).toMatchObject({ exit: 0, stdout: "native compose stub ok\n" })
      const request = stub.requests.slice(before).find((request) => request.path.endsWith("/messages"))
      expect(request).toBeDefined()
      const system = (request?.jsonBody as { system: unknown }).system
      return { system, log: await Bun.file(debug).text() }
    }
    const baseline = await capture()
    const noop = await capture(`export function register(on) {
      on("prompt.compose", async ($, e, next) => {
        const result = await next(e)
        $.ui.log("NATIVE_COMPOSE_NOOP_RAN")
        return result
      })
    }`)
    expect(noop.log).toContain("NATIVE_COMPOSE_NOOP_RAN")
    expect(noop.log).not.toContain("the hooks worker died")
    expect(noop.system).toEqual(baseline.system)
    const changed = await capture(`export function register(on) {
      on("prompt.compose", async ($, e, next) => {
        const result = await next(e)
        const target = result.sections.find(section => ["lean_body", "doing_tasks"].includes(section.id))
        if (!target) throw new Error("native compose test profile has changed")
        $.ui.log(JSON.stringify(result.sections.map(section => ({id:section.id,scope:section.scope}))))
        return {...result,sections:result.sections.map(section => section.id === target.id ? {...section,text:${JSON.stringify(MARKER)}} : section)}
      })
    }`)
    expect(JSON.stringify(changed.system)).toContain(MARKER)
    expect(changed.log).toContain('"id":"memory"')
    const failed = await capture(`export function register(on) {
      on("prompt.compose", async () => { throw new Error("EXPLICIT_STALE_TARGET") })
    }`)
    expect(failed.log).toContain("EXPLICIT_STALE_TARGET")
    // Native mods intentionally recover from a failed hook and still send
    // the core prompt: caller-side throwing cannot implement fail-closed
    // configuration admission before API requests.
    expect(failed.system).toEqual(baseline.system)
  } finally {
    stub.stop()
    rmSync(work, { recursive: true, force: true })
  }
}, 120000)
