#!/usr/bin/env bun
// Execute the canonical platform oracle suite and emit a bundle-bound receipt.

import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { valid } from "semver"
import { createCommand, runCli } from "../lib/cli"
import { loadPatchEntriesFromDirectory } from "../lib/patch-files"
import {
  type EvidenceClass,
  loadPatchObligationLedger,
  loadPatchObligationRegistry,
  type ObligationPlatform,
  obligationKey,
  type PatchEvidenceReceipt,
  selectPatchEntriesForEvidence,
  verifyPatchObligations,
} from "../lib/patch-obligations"
import { captureChecked, runChecked } from "../lib/process"
import { loadStageManifest } from "../lib/stage-manifest"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version: string
  platform: ObligationPlatform
  resultFile?: string
  sourceCommit?: string
}

export function parseArgs(argv: string[]): Args {
  const options = createCommand("run-patch-obligation-evidence")
    .requiredOption("--version <version>", "target upstream version")
    .requiredOption("--platform <platform>", "darwin-arm64 or linux-x64")
    .option("--result-file <path>", "receipt output path")
    .option("--source-commit <sha>", "commit under test")
    .parse(argv, { from: "user" })
    .opts<Record<string, string | undefined>>()
  if (!options.version || !valid(options.version)) throw new Error("--version must be an explicit semver")
  if (options.platform !== "darwin-arm64" && options.platform !== "linux-x64") {
    throw new Error("--platform must be darwin-arm64 or linux-x64")
  }
  return {
    version: options.version,
    platform: options.platform,
    ...(options.resultFile ? { resultFile: options.resultFile } : {}),
    ...(options.sourceCommit ? { sourceCommit: options.sourceCommit } : {}),
  }
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const hostPlatform =
    process.platform === "darwin" && process.arch === "arm64"
      ? "darwin-arm64"
      : process.platform === "linux" && process.arch === "x64"
        ? "linux-x64"
        : null
  if (hostPlatform !== args.platform) {
    throw new Error(
      `${args.platform} evidence must run on that real OS/architecture; current host is ${process.platform}-${process.arch}`,
    )
  }

  const registry = loadPatchObligationRegistry(ROOT)
  const ledger = loadPatchObligationLedger(ROOT, args.version)
  const patches = loadPatchEntriesFromDirectory(ROOT)
  const coverage = verifyPatchObligations({
    root: ROOT,
    version: args.version,
    mode: "coverage",
    registry,
    ledger,
    patches,
  })
  if (coverage.status !== "passed") {
    for (const error of coverage.errors) console.error(`[blocked] ${error}`)
    throw new Error("refusing to create evidence for an incomplete obligation ledger")
  }

  const dispatcher = join(ROOT, "staging", args.version, "cli.patched.js")
  const upstreamDispatcher = join(ROOT, "staging", args.version, "cli.js")
  const patchedGraph = join(ROOT, "staging", args.version, "graph.patched", args.platform, "cli.js")
  for (const path of [dispatcher, upstreamDispatcher, patchedGraph]) {
    if (!existsSync(path)) throw new Error(`required rendered target is missing: ${path}`)
  }

  const sharedEnv = { TARGET_VERSION: args.version, PCC_VERIFY_PLATFORM: args.platform }
  runChecked(["bun", "run", "tools/patch/verify-patches.ts", "--against", upstreamDispatcher, "--quiet-skips"], {
    cwd: ROOT,
    env: sharedEnv,
  })
  runChecked(
    [
      "bun",
      "run",
      "tools/test/run-patch-tests.ts",
      "--version",
      args.version,
      "--platform",
      args.platform,
      "--bundle",
      dispatcher,
    ],
    { cwd: ROOT, env: sharedEnv },
  )
  runChecked(["bun", "test", "--timeout", "0", "tools/test/later-command-patch.test.ts"], {
    cwd: ROOT,
    env: sharedEnv,
  })
  if (args.platform === "darwin-arm64") {
    runChecked(["bun", "test", "--timeout", "0", "tools/test/macos-keychain-bundle-runtime.test.ts"], {
      cwd: ROOT,
      env: { ...sharedEnv, PATCH_OBLIGATION_EVIDENCE_REQUIRED: "1" },
    })
  }

  const evidenceClass: EvidenceClass = args.platform === "darwin-arm64" ? "real-os-runtime" : "runtime"
  if (
    ledger.decisions.some(
      (decision) =>
        decision.familyId === "ask-user-question-unlimited" &&
        decision.invariantId === "unbounded-coherent-question-batch" &&
        decision.disposition === "ported",
    )
  ) {
    runChecked(
      ["bun", "run", "tools/test/ask-user-question-tui-smoke.ts", "--version", args.version, "--bundle", dispatcher],
      { cwd: ROOT, env: sharedEnv },
    )
  }
  const decisions = new Map(ledger.decisions.map((decision) => [obligationKey(decision), decision]))
  const selectedPatchEntries = selectPatchEntriesForEvidence(ledger, patches, args.version, args.platform)
  const executedOracleIds = registry.obligations
    .filter((obligation) => {
      const decision = decisions.get(obligationKey(obligation))
      return (
        decision?.disposition !== "retired" &&
        obligation.requiredPlatforms.includes(args.platform) &&
        evidenceRank(obligation.evidenceClass) <= evidenceRank(evidenceClass)
      )
    })
    .flatMap((obligation) => obligation.oracleIds)
    .sort()
  const stage = loadStageManifest(ROOT, args.version)
  const upstreamHash = stage?.platforms?.find(({ platform }) => platform === args.platform)?.entrypointSha256
  if (!upstreamHash) throw new Error(`stage manifest lacks ${args.platform} entrypoint hash`)
  const receipt: PatchEvidenceReceipt = {
    schema: 1,
    targetVersion: args.version,
    sourceCommit:
      args.sourceCommit ?? process.env.GITHUB_SHA ?? captureChecked(["git", "rev-parse", "HEAD"], { cwd: ROOT }),
    platform: args.platform,
    upstreamEntrypointSha256: upstreamHash,
    patchedEntrypointSha256: createHash("sha256").update(readFileSync(patchedGraph)).digest("hex"),
    selectedPatchEntries,
    executedOracleIds,
    evidenceClass,
    outcome: "passed",
    skippedOracleIds: [],
  }
  const resultFile =
    args.resultFile ?? join(ROOT, "dist", "patch-obligation-evidence", args.version, `${args.platform}.json`)
  mkdirSync(dirname(resultFile), { recursive: true })
  writeFileSync(resultFile, `${JSON.stringify(receipt, null, 2)}\n`, { mode: 0o644 })
  console.error(`wrote ${resultFile}`)
  return 0
}

function evidenceRank(value: EvidenceClass): number {
  return { static: 0, runtime: 1, "real-os-runtime": 2 }[value]
}

if (import.meta.main) runCli(main)
