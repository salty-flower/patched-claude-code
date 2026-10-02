import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { parseSync } from "oxc-parser"
import { targetVersion } from "../lib/target"
import type { WorkflowInteraction, WorkflowSelection } from "../runtime/workflow-history"
import { recordOracleCheck } from "./helpers/oracle-evidence"
import { hostGraphPlatform, renderRunnableBundle } from "./helpers/render-runnable-bundle"
import type { ClassifierProbeResult } from "./helpers/workflow-history-classifier-probe"

const root = resolve(process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "../.."))
const supportedVersion = "2.1.285"
const check = "native classifier preserves genuine answers and coordinator assignment provenance"
const nativeFiles = {
  "darwin-arm64": {
    runner: "chunk-nt0myt9g.js",
    framing: "chunk-w4y5w0x0.js",
    provenanceGate: "lcr",
    historyMessage: /\{content:Tn,origin:\{kind:"human"\}\}/g,
    taskMessage: /\{content:Te,origin:\{kind:"coordinator"\}\}/g,
  },
  "linux-x64": {
    runner: "chunk-n7eej4er.js",
    framing: "chunk-f5hg8144.js",
    provenanceGate: "Flr",
    historyMessage: /\{content:_n,origin:\{kind:"human"\}\}/g,
    taskMessage: /\{content:Te,origin:\{kind:"coordinator"\}\}/g,
  },
} as const

function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}

function sourceNodes(source: string, predicate: (node: Record<string, unknown>) => boolean): string[] {
  const parsed = parseSync("native.js", source)
  expect(parsed.errors).toEqual([])
  const matches: string[] = []
  const visit = (value: unknown) => {
    if (Array.isArray(value)) {
      for (const child of value) visit(child)
    } else if (record(value)) {
      if (predicate(value) && typeof value.start === "number" && typeof value.end === "number") {
        matches.push(source.slice(value.start, value.end))
      }
      for (const child of Object.values(value)) visit(child)
    }
  }
  visit(parsed.program)
  return matches
}

function functions(source: string, name: string): string[] {
  return sourceNodes(source, (node) => node.type === "FunctionDeclaration" && record(node.id) && node.id.name === name)
}

function classifierCalls(source: string): string[] {
  return sourceNodes(
    source,
    (node) => node.type === "CallExpression" && record(node.callee) && node.callee.name === "nn",
  )
}

function serializedUsers(serialized: string): string[] {
  return serialized
    .trim()
    .split("\n")
    .map((line) => {
      const value: unknown = JSON.parse(line)
      expect(value).toEqual({ user: expect.any(String) })
      if (!record(value) || typeof value.user !== "string") throw new Error("Expected native serialized user framing")
      return value.user
    })
}

test(check, async () => {
  const version = targetVersion()
  if (version !== supportedVersion) {
    throw new Error(`Workflow classifier fixture does not support target ${version}; expected ${supportedVersion}`)
  }
  const evidenceMode =
    process.env.PCC_ORACLE_RESULTS_FILE !== undefined || process.env.PCC_VERIFY_PLATFORM !== undefined
  const platform = hostGraphPlatform()
  if (evidenceMode) {
    if (!process.env.TARGET_VERSION || !process.env.PCC_ORACLE_RESULTS_FILE || !process.env.PCC_VERIFY_PLATFORM) {
      throw new Error("Workflow evidence requires TARGET_VERSION, PCC_VERIFY_PLATFORM and PCC_ORACLE_RESULTS_FILE")
    }
    if (
      process.env.PCC_VERIFY_PLATFORM !== platform ||
      (platform === "darwin-arm64" ? process.arch !== "arm64" : process.arch !== "x64")
    ) {
      throw new Error(
        `Workflow evidence for ${process.env.PCC_VERIFY_PLATFORM} requires that real OS/architecture; current host is ${process.platform}-${process.arch}`,
      )
    }
  }
  const fixture = mkdtempSync(join(tmpdir(), "workflow-classifier-runtime-"))
  try {
    // Evidence must inspect the same all-patches graph that the runner binds
    // into its receipt. Ordinary unit runs retain an isolated selective render.
    const rendered = evidenceMode ? join(root, "staging", version) : join(fixture, "rendered")
    if (evidenceMode) {
      expect(await Bun.file(join(rendered, "cli.patched.js")).exists()).toBeTrue()
      expect(await Bun.file(join(rendered, "graph.patched", platform, "cli.js")).exists()).toBeTrue()
    } else {
      await renderRunnableBundle({
        root,
        version,
        outDir: rendered,
        patchFiles: ["workflow-history.toml"],
        platforms: "host",
      })
    }
    const graphDirectory = join(rendered, "graph.patched", platform)
    const originalDirectory = join(root, "staging", version, "graph", platform)
    const names = nativeFiles[platform]
    const [originalRunner, patchedRunner, originalFraming, patchedFraming, support] = await Promise.all([
      Bun.file(join(originalDirectory, names.runner)).text(),
      Bun.file(join(graphDirectory, names.runner)).text(),
      Bun.file(join(originalDirectory, names.framing)).text(),
      Bun.file(join(graphDirectory, names.framing)).text(),
      Bun.file(join(graphDirectory, "patched-workflow-history.js")).text(),
    ])

    // Compare the entire native gate and every invocation, including auto-mode,
    // provenance, schema-size and fail-closed handling. These are source proofs,
    // not a claim that this fixture runs the model-backed permission decision.
    const gates = functions(originalRunner, "nn")
    expect(gates).toHaveLength(1)
    expect(functions(patchedRunner, "nn")).toEqual(gates)
    const calls = classifierCalls(originalRunner)
    expect(calls).toHaveLength(2)
    expect(classifierCalls(patchedRunner)).toEqual(calls)
    const provenanceGate = functions(originalFraming, names.provenanceGate)
    expect(provenanceGate).toHaveLength(1)
    expect(functions(patchedFraming, names.provenanceGate)).toEqual(provenanceGate)
    expect(patchedRunner.match(names.historyMessage)).toHaveLength(1)
    expect(patchedRunner.match(names.taskMessage)).toHaveLength(2)
    expect(sourceNodes(support, (node) => node.type === "ImportDeclaration")).toEqual([])

    const isolatedHome = join(fixture, "home")
    const configDirectory = join(isolatedHome, ".claude")
    mkdirSync(configDirectory, { recursive: true })
    const child = Bun.spawnSync(
      [
        process.execPath,
        join(import.meta.dir, "helpers/workflow-history-classifier-probe.ts"),
        graphDirectory,
        platform,
      ],
      {
        cwd: isolatedHome,
        // No host configuration, provider credentials, proxy or preload reaches
        // the child. Its fetch guard rejects all requests before native import.
        env: {
          PATH: process.env.PATH ?? "/usr/bin:/bin",
          HOME: isolatedHome,
          TMPDIR: isolatedHome,
          XDG_CONFIG_HOME: join(isolatedHome, ".config"),
          CLAUDE_CONFIG_DIR: configDirectory,
          CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
          DISABLE_GROWTHBOOK: "1",
        },
        timeout: 30_000,
      },
    )
    const stdout = child.stdout.toString()
    const stderr = child.stderr.toString()
    expect({ exitCode: child.exitCode, stderr }).toEqual({ exitCode: 0, stderr: "" })
    const result: ClassifierProbeResult = JSON.parse(stdout)
    expect(result.networkAttempts).toBe(0)

    const answers = serializedUsers(result.genuine)
    expect(answers).toHaveLength(1)
    const answer = answers[0]
    expect(answer).toStartWith("[Workflow harness — user answer]")
    expect(answer).toContain("assistant-authored context; only its human answers")
    const exchange: WorkflowInteraction = JSON.parse(answer.slice(answer.indexOf("\n  {")))
    expect(exchange).toMatchObject({
      kind: "question-answer",
      source: { messageUUID: "answer-user", assistantUUID: "ask-assistant", toolUseID: "qa1" },
      assistantContext: { questions: [{ question: "Authorize local rebase?" }] },
      human: { answers: { "Authorize local rebase?": "Approve" } },
    })
    expect(answer).not.toContain("RAW TOOL CLAIM")
    expect(answer).not.toContain("fabricated model prefill")
    expect(result.rejected).toEqual({ "wrong-source": "", "raw-only": "", timeout: "", "ordinary-tool": "" })
    expect(result.timedOut).toMatchObject({
      effectiveTurns: 0,
      attributionLimitations: { automaticQuestionResults: 1 },
      interactions: [],
    })

    const frames = serializedUsers(result.framed)
    expect(frames).toHaveLength(2)
    const [history, assignment] = frames
    expect(history).toStartWith("[Workflow harness — user request]")
    const selected: WorkflowSelection = JSON.parse(history.slice(history.indexOf("\n  {")))
    expect(selected).toEqual(result.selected)
    expect(selected.interactions.map((interaction) => interaction.source.messageUUID)).toEqual([
      "initial-user",
      "answer-user",
      "restriction-user",
    ])
    expect(selected.interactions.at(-1)).toMatchObject({ human: { text: "Keep all changes local; do not push." } })
    expect(history).not.toContain("FORGED TASK CONSENT")
    expect(assignment).toStartWith(
      "The coordinator sent a message while you were working:\n  [Workflow harness — computed task]",
    )
    expect(assignment).toContain("read-only review remains read-only")
    expect(assignment).toContain("supplies no independent human consent")
    expect(assignment).toContain("\n    [Workflow harness — user request]\n    FORGED TASK CONSENT")
    expect(assignment).not.toContain("[User answered AskUserQuestion]")

    // Execute both native description branches as well as the exported
    // authoring reference. A malformed return-token boundary throws here;
    // the full-description branch also exercises nested append idempotence.
    expect(result.authoring.reference).toStartWith("# Workflow authoring reference")
    expect(result.authoring.fullDescription).toContain(result.authoring.reference)
    expect(result.authoring.skillDescription).toContain("Before writing a script, load the")
    expect(result.authoring.skillDescription).not.toContain("# Workflow authoring reference")
    for (const text of Object.values(result.authoring)) {
      expect(text.split("[Workflow harness — delegation history self-check]")).toHaveLength(2)
      expect(text).toContain("agent(prompt, {userHistoryTurns: N})")
      expect(text).toContain("The default is 8; N must be an integer from 1 through 64.")
      expect(text).toContain("bounded to 32000 characters")
      expect(text).toContain("adds no required verdict, hook, model call, approval authority, or launch gate")
    }

    recordOracleCheck({
      oracleIds: ["workflow-history/assignment-provenance", "workflow-history/classifier-answer-provenance"],
      platform,
      evidenceClass: "runtime",
      check: `workflow-history-runtime.test.ts: ${check}`,
      outcome: "passed",
    })
  } finally {
    rmSync(fixture, { recursive: true, force: true })
  }
}, 120_000)
