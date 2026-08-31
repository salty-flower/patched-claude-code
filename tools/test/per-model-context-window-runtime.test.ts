import { afterAll, expect, test } from "bun:test"
import { mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { targetVersion } from "../lib/target"
import { gte } from "semver"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()
const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-model-context-"))

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function injectContextWindowHarness(source: string): string {
  if (source.includes("__acc_model_context_key") && source.includes("export{")) {
    const resolverMatch = source.match(
      /function ([A-Za-z_$][\w$]*)\(e,t\)\{let __acc_model_context_key=/,
    )
    if (!resolverMatch?.[1] || resolverMatch.index === undefined) {
      throw new Error("could not locate graph context-window resolver")
    }
    const initializer = source
      .slice(resolverMatch.index)
      .match(/var ([A-Za-z_$][\w$]*)=[A-Za-z_$][\w$]*\(\(\)=>\{/)?.[1]
    if (!initializer) throw new Error("could not locate graph context-window module initializer")
    const exportIndex = source.lastIndexOf("export{")
    if (exportIndex === -1) throw new Error("could not locate graph module exports")
    const resolver = resolverMatch[1]
    const harness =
      `${initializer}();process.stdout.write(JSON.stringify({alpha:${resolver}("alpha/model",[]),beta:${resolver}("beta-model",[]),tagged:${resolver}("alpha/model[1m]",[]),fallback:${resolver}("unconfigured-model",[])}));process.exit(0);`
    return `${source.slice(0, exportIndex)}${harness}${source.slice(exportIndex)}`
  }

  const entrypointMatches = [...source.matchAll(/\b([A-Za-z_$][\w$]*\(\));var __acc_linux_[A-Za-z_$][\w$]*=/g)]
  const entrypointMatch = entrypointMatches.at(-1)
  if (!entrypointMatch?.[1] || entrypointMatch.index === undefined) {
    throw new Error("could not locate CLI entrypoint call")
  }
  if (entrypointMatches.length !== 1) {
    throw new Error(`expected one CLI entrypoint call, found ${entrypointMatches.length}`)
  }

  const start = entrypointMatch.index + entrypointMatch[0].indexOf(entrypointMatch[1])
  const resolveContextWindow = gte(TARGET_VERSION, "2.1.241") ? "W$d" : "jCd"
  const contextWindowModuleThunk = gte(TARGET_VERSION, "2.1.241") ? "qP" : "HP"
  const harness =
    `${contextWindowModuleThunk}();process.stdout.write(JSON.stringify({alpha:${resolveContextWindow}("alpha/model",[]),beta:${resolveContextWindow}("beta-model",[]),tagged:${resolveContextWindow}("alpha/model[1m]",[]),fallback:${resolveContextWindow}("unconfigured-model",[])}));process.exit(0);`
  return `${source.slice(0, start)}${harness}${source.slice(start + entrypointMatch[1].length)}`
}

test("model-specific context windows follow the active model", async () => {
  const entrypoint = await renderRunnableBundle({
    root: ROOT,
    version: TARGET_VERSION,
    outDir: join(tempDir, "rendered"),
    patchFiles: ["per-model-context-window.toml"],
  })
  let harnessEntrypoint = entrypoint
  if (gte(TARGET_VERSION, "2.1.246")) {
    const graphDir = join(entrypoint, "..", "graph.patched", "darwin-arm64")
    const graphFile = readdirSync(graphDir)
      .filter((file) => file.endsWith(".js"))
      .map((file) => join(graphDir, file))
      .find((file) => /__acc_model_context_key/.test(readFileSync(file, "utf8")))
    if (!graphFile) throw new Error("could not locate patched context-window graph module")
    writeFileSync(graphFile, injectContextWindowHarness(readFileSync(graphFile, "utf8")))
    harnessEntrypoint = graphFile
  } else {
    writeFileSync(entrypoint, injectContextWindowHarness(readFileSync(entrypoint, "utf8")))
  }

  const proc = Bun.spawn({
    cmd: [process.execPath, harnessEntrypoint],
    env: {
      ...process.env,
      CLAUDE_CODE_MAX_CONTEXT_TOKENS_alpha_model: "131072",
      CLAUDE_CODE_MAX_CONTEXT_TOKENS_beta_model: "262144",
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
    },
    stdout: "pipe",
    stderr: "pipe",
  })
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited,
  ])

  expect(stderr).toBe("")
  expect(exitCode).toBe(0)
  expect(JSON.parse(stdout)).toEqual({
    alpha: 131072,
    beta: 262144,
    tagged: 131072,
    fallback: 200000,
  })
}, 60000)
