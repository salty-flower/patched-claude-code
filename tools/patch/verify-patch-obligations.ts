#!/usr/bin/env bun
// Fail closed when a target lacks patch dispositions or bundle-bound evidence.

import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { valid } from "semver"
import { createCommand, runCli } from "../lib/cli"
import { verifyPatchObligations } from "../lib/patch-obligations"
import { captureChecked } from "../lib/process"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version: string
  mode: "coverage" | "admission"
  evidenceDir?: string
  resultFile?: string
  sourceCommit?: string
}

export function parseArgs(argv: string[]): Args {
  const options = createCommand("verify-patch-obligations")
    .requiredOption("--version <version>", "target upstream version")
    .option("--mode <mode>", "coverage or admission", "coverage")
    .option("--evidence-dir <directory>", "directory containing platform evidence receipts")
    .option("--result-file <path>", "write the machine-readable admission report")
    .option("--source-commit <sha>", "source commit bound by evidence receipts")
    .parse(argv, { from: "user" })
    .opts<Record<string, string | undefined>>()
  if (!options.version || !valid(options.version)) throw new Error("--version must be an explicit semver")
  if (options.mode !== "coverage" && options.mode !== "admission") {
    throw new Error("--mode must be coverage or admission")
  }
  return {
    version: options.version,
    mode: options.mode,
    ...(options.evidenceDir ? { evidenceDir: options.evidenceDir } : {}),
    ...(options.resultFile ? { resultFile: options.resultFile } : {}),
    ...(options.sourceCommit ? { sourceCommit: options.sourceCommit } : {}),
  }
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const sourceCommit =
    args.mode === "admission"
      ? (args.sourceCommit ?? process.env.GITHUB_SHA ?? captureChecked(["git", "rev-parse", "HEAD"], { cwd: ROOT }))
      : undefined
  const report = verifyPatchObligations({
    root: ROOT,
    version: args.version,
    mode: args.mode,
    ...(args.evidenceDir ? { evidenceDir: args.evidenceDir } : {}),
    ...(sourceCommit ? { sourceCommit } : {}),
  })
  const resultFile = args.resultFile ?? join(ROOT, "dist", `patch-obligation-${args.mode}-${args.version}.json`)
  mkdirSync(dirname(resultFile), { recursive: true })
  writeFileSync(resultFile, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o644 })

  for (const error of report.errors) console.error(`[blocked] ${error}`)
  console.error(
    `patch obligations: ${report.status} (${report.decisions}/${report.registryObligations} decisions, ${report.receipts} receipts)`,
  )
  console.error(`report: ${resultFile}`)
  return report.status === "passed" ? 0 : 1
}

if (import.meta.main) runCli(main)
