#!/usr/bin/env bun
// Run the deterministic target-bump preparation lane once and emit a review handoff report.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { valid } from "semver"
import { createCommand, runCli } from "../lib/cli"
import { runWithHeavyLock } from "../lib/heavy-lock"
import type { PromptIdentityBumpPreparation } from "../lib/prompt-identity-bump"
import {
  DEFAULT_TARGET_VERSION,
  parseTargetSource,
  parseTargetSourceOption,
  type TargetSource,
} from "../lib/target"
import type { PatchCarryoverReport } from "./check-patch-carryover"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

const MANUAL_GATES = [
  "resolve every patch-carryover warning with a successor or upstream-equivalence evidence",
  "classify locator and replacement-symbol drift",
  "generate and review the anti-trace dossier and invariants",
  "exercise the rendered PTY/TUI path",
  "update target metadata and commit with audit evidence",
] as const

type Args = {
  version?: string
  source: TargetSource
  outFile?: string
}

export type TargetBumpStep = {
  id: string
  label: string
  command: string[]
  logFile: string
  env?: Record<string, string>
}

export type TargetBumpStepResult = TargetBumpStep & {
  status: "passed" | "failed" | "skipped"
  exitCode: number | null
  durationMs: number
}

export type TargetBumpPreparationReport = {
  schema: 1
  scope: "target-bump-preparation"
  target: {
    version: string
    source: TargetSource
  }
  status: "manual-review-ready" | "prompt-review-required" | "failed"
  steps: TargetBumpStepResult[]
  patchCarryover: PatchCarryoverReport | null
  promptIdentity: PromptIdentityBumpPreparation | null
  manualGates: readonly string[]
  reportFile: string
  logsRoot: string
}

type StepRunner = (step: TargetBumpStep) => number

export function parseArgs(argv: string[], env: Record<string, string | undefined> = process.env): Args {
  return createCommand("prepare-target-bump")
    .description("Run deterministic target-bump preparation and write a review handoff report")
    .requiredOption("--version <ver>", "target upstream version")
    .option(
      "--source <source>",
      "bundle source: canonical, npm, or direct",
      parseTargetSourceOption,
      parseTargetSource(env.TARGET_SOURCE ?? "canonical"),
    )
    .option("-o, --out-file <file>", "machine-readable bump preparation report")
    .parse(argv, { from: "user" })
    .opts<Args>()
}

export function buildTargetBumpSteps(root: string, version: string, source: TargetSource): TargetBumpStep[] {
  const upstream = join("staging", version, "cli.js")
  const patched = join("staging", version, "cli.patched.js")
  const identityDraft = join("dist", `prompt-identities-${version}.draft.json`)
  const identityResult = join("dist", `prompt-identity-bump-${version}.json`)
  const carryoverResult = join("dist", `patch-carryover-${version}.json`)
  const logsRoot = join(root, "dist", `target-bump-${version}.logs`)
  return [
    {
      id: "stage",
      label: "stage target bundle",
      command: ["bun", "run", "tools/patch/stage-target.ts", "--version", version, "--source", source],
    },
    {
      id: "patch-carryover",
      label: "warn about patch lineages without successors",
      command: [
        "bun",
        "run",
        "tools/patch/check-patch-carryover.ts",
        "--from",
        DEFAULT_TARGET_VERSION,
        "--to",
        version,
        "--result-file",
        carryoverResult,
      ],
    },
    {
      id: "verify-patches",
      label: "verify patch locators and rationale refs",
      command: ["bun", "run", "tools/patch/verify-patches.ts", "--against", upstream],
    },
    {
      id: "verify-native-contract",
      label: "verify native extraction contract",
      command: ["bun", "run", "tools/patch/check-native-extraction-contract.ts"],
    },
    {
      id: "tool-tests",
      label: "run target-aware tool tests",
      command: ["bun", "run", "--cwd", "tools", "test"],
      env: { TARGET_VERSION: version },
    },
    {
      id: "render",
      label: "render patched bundle",
      command: ["bun", "run", "tools/patch/render-patched.ts", version, "--skip-verify"],
    },
    {
      id: "smoke",
      label: "smoke rendered bundle",
      command: ["bun", patched, "--version"],
    },
    {
      id: "patch-tests",
      label: "run rendered patch tests",
      command: ["bun", "run", "tools/test/run-patch-tests.ts", "--version", version, "--bundle", patched],
    },
    {
      id: "prompt-identities",
      label: "prepare prompt identity ledger",
      command: [
        "bun",
        "run",
        "tools/patch/prepare-prompt-identity-bump.ts",
        "--version",
        version,
        "--patched",
        patched,
        "--draft-file",
        identityDraft,
        "--result-file",
        identityResult,
      ],
    },
  ].map((step) => ({
    ...step,
    command: step.command.map((value) => resolveRootArgument(root, value)),
    logFile: join(logsRoot, `${step.id}.log`),
  }))
}

export function executeTargetBumpSteps(
  steps: TargetBumpStep[],
  runner: StepRunner,
  onStart: (step: TargetBumpStep, index: number, total: number) => void = () => {},
): TargetBumpStepResult[] {
  const results: TargetBumpStepResult[] = []
  let blocked = false
  for (const [index, step] of steps.entries()) {
    if (blocked) {
      results.push({ ...step, status: "skipped", exitCode: null, durationMs: 0 })
      continue
    }
    onStart(step, index, steps.length)
    const startedAt = performance.now()
    const exitCode = runner(step)
    const durationMs = Math.round(performance.now() - startedAt)
    const status = exitCode === 0 ? "passed" : "failed"
    results.push({ ...step, status, exitCode, durationMs })
    blocked = status === "failed"
  }
  return results
}

export function renderTargetBumpSummary(report: TargetBumpPreparationReport): string {
  const lines = [`Target bump: ${report.target.version} (${report.target.source})`, ""]
  for (const step of report.steps) {
    lines.push(`${stepStatusLabel(step.status).padEnd(4)}  ${step.id.padEnd(22)} ${formatDuration(step.durationMs)}`)
  }
  lines.push("", `Outcome: ${report.status}`, `Report:  ${report.reportFile}`, `Logs:    ${report.logsRoot}`)
  if (report.patchCarryover?.warnings.length) {
    lines.push("", `Patch carryover warnings: ${report.patchCarryover.warnings.length}`)
    for (const warning of report.patchCarryover.warnings) {
      lines.push(`  - ${warning.feature}/${warning.lineage}`)
    }
  }
  if (report.status === "manual-review-ready") {
    lines.push("", "Remaining manual gates:", ...report.manualGates.map((gate) => `  - ${gate}`))
  } else if (report.status === "prompt-review-required") {
    lines.push("", `Next: review ${report.promptIdentity?.draftFile ?? "the prompt identity draft"}`)
  } else {
    const failed = report.steps.find(({ status }) => status === "failed")
    lines.push("", `Next: fix ${failed?.id ?? "the failed automated step"} and rerun bump-prepare`)
  }
  return `${lines.join("\n")}\n`
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version
  if (!version) throw new Error("missing version")
  if (!valid(version)) throw new Error(`invalid target version: ${version}; pass an explicit semver`)
  if (!new Set(["canonical", "npm", "direct"]).has(args.source)) {
    throw new Error(`unsupported source: ${args.source}; expected canonical, npm, or direct`)
  }
  const reportFile = args.outFile ?? join(ROOT, "dist", `target-bump-${version}.json`)
  const logsRoot = join(ROOT, "dist", `target-bump-${version}.logs`)
  const identityResultFile = join(ROOT, "dist", `prompt-identity-bump-${version}.json`)
  const carryoverResultFile = join(ROOT, "dist", `patch-carryover-${version}.json`)
  const steps = buildTargetBumpSteps(ROOT, version, args.source)
  const results = executeTargetBumpSteps(steps, runStep, (step, index, total) => {
    console.error(`\n==> [${index + 1}/${total}] ${step.label}`)
  })
  const failed = results.some(({ status }) => status === "failed")
  const carryoverPassed = results.find(({ id }) => id === "patch-carryover")?.status === "passed"
  const patchCarryover = carryoverPassed ? readPatchCarryoverResult(carryoverResultFile) : null
  const promptIdentity = failed ? null : readPromptIdentityResult(identityResultFile)
  let status: TargetBumpPreparationReport["status"] = "failed"
  if (!failed) {
    if (!promptIdentity) throw new Error("prompt identity result missing after successful automated steps")
    status = promptIdentity.status === "review-required" ? "prompt-review-required" : "manual-review-ready"
  }
  const report: TargetBumpPreparationReport = {
    schema: 1,
    scope: "target-bump-preparation",
    target: { version, source: args.source },
    status,
    steps: results,
    patchCarryover,
    promptIdentity,
    manualGates: MANUAL_GATES,
    reportFile,
    logsRoot,
  }
  mkdirSync(dirname(reportFile), { recursive: true })
  writeFileSync(reportFile, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o644 })
  const failedStep = results.find(({ status: stepStatus }) => stepStatus === "failed")
  if (failedStep) printFailureLogTail(failedStep.logFile)
  console.error(`\n${renderTargetBumpSummary(report)}`)
  if (status === "failed") return 1
  if (status === "prompt-review-required") return 2
  return 0
}

function runStep(step: TargetBumpStep): number {
  const result = Bun.spawnSync({
    cmd: step.command,
    cwd: ROOT,
    env: { ...process.env, ...step.env },
    stdout: "pipe",
    stderr: "pipe",
  })
  mkdirSync(dirname(step.logFile), { recursive: true })
  const stdout = new TextDecoder().decode(result.stdout)
  const stderr = new TextDecoder().decode(result.stderr)
  const sections = [`command: ${JSON.stringify(step.command)}`, `exit: ${result.exitCode}`]
  if (stdout.length > 0) sections.push(`\n[stdout]\n${stdout.trimEnd()}`)
  if (stderr.length > 0) sections.push(`\n[stderr]\n${stderr.trimEnd()}`)
  writeFileSync(step.logFile, `${sections.join("\n")}\n`, { mode: 0o644 })
  return result.exitCode
}

function printFailureLogTail(path: string): void {
  if (!existsSync(path)) return
  const lines = readFileSync(path, "utf8").trimEnd().split("\n")
  console.error(`\nFailure log tail (${path}):\n${lines.slice(-40).join("\n")}`)
}

function readPromptIdentityResult(path: string): PromptIdentityBumpPreparation {
  if (!existsSync(path)) throw new Error(`prompt identity result missing after successful preparation: ${path}`)
  const result = JSON.parse(readFileSync(path, "utf8")) as PromptIdentityBumpPreparation
  if (result.schema !== 1 || result.scope !== "prompt-identity-bump-preparation") {
    throw new Error(`invalid prompt identity preparation result: ${path}`)
  }
  return result
}

function readPatchCarryoverResult(path: string): PatchCarryoverReport {
  if (!existsSync(path)) throw new Error(`patch carryover result missing after successful preparation: ${path}`)
  const result = JSON.parse(readFileSync(path, "utf8")) as PatchCarryoverReport
  if (result.schema !== 1 || result.scope !== "patch-carryover") {
    throw new Error(`invalid patch carryover result: ${path}`)
  }
  return result
}

function resolveRootArgument(root: string, value: string): string {
  if (!value.startsWith("staging/") && !value.startsWith("dist/")) return value
  return join(root, value)
}

function stepStatusLabel(status: TargetBumpStepResult["status"]): string {
  if (status === "passed") return "PASS"
  if (status === "failed") return "FAIL"
  return "SKIP"
}

function formatDuration(durationMs: number): string {
  if (durationMs === 0) return "-"
  return `${(durationMs / 1000).toFixed(1)}s`
}

if (import.meta.main) await runWithHeavyLock(ROOT, () => runCli(main))
