#!/usr/bin/env bun
// Replay prompt identity matching across staged upstream bundles without mutating checked-in identity state.

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { compare, valid } from "semver"
import { collectOption, createCommand, runCli } from "../lib/cli"
import { inspectPromptIdentityObservations } from "../lib/prompt-catalog"
import { auditPromptIdentityTransition, type PromptIdentityTransitionAudit } from "../lib/prompt-identity-audit"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version: string[]
  stagingRoot: string
  bundleName: string
  outFile?: string
}

export function parseArgs(argv: string[]): Args {
  return createCommand("audit-prompt-identity-history")
    .description("Replay exact and partial prompt identity matching across adjacent staged versions")
    .option("--version <ver>", "staged version to include; repeat to choose an explicit sequence", collectOption, [])
    .option("--staging-root <directory>", "directory containing staged version bundles", join(ROOT, "staging"))
    .option("--bundle-name <file>", "bundle filename within each staged version", "cli.js")
    .option("-o, --out-file <file>", "write the complete audit as JSON")
    .parse(argv, { from: "user" })
    .opts<Args>()
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const versions = selectVersions(args.stagingRoot, args.bundleName, args.version)
  if (versions.length < 2) throw new Error("prompt identity history audit requires at least two staged versions")

  const observations = new Map<string, ReturnType<typeof inspectPromptIdentityObservations>>()
  for (const version of versions) {
    const bundlePath = join(args.stagingRoot, version, args.bundleName)
    console.error(`inspect ${version}: ${bundlePath}`)
    observations.set(version, inspectPromptIdentityObservations(readFileSync(bundlePath, "utf8"), version))
  }

  const transitions: PromptIdentityTransitionAudit[] = []
  for (let index = 1; index < versions.length; index += 1) {
    const previousVersion = versions[index - 1]
    const upstreamVersion = versions[index]
    if (!previousVersion || !upstreamVersion) throw new Error("invalid adjacent staged version pair")
    const previousObservations = observations.get(previousVersion)
    const currentObservations = observations.get(upstreamVersion)
    if (!previousObservations || !currentObservations) throw new Error("staged prompt observations are incomplete")
    console.error(`compare ${previousVersion} -> ${upstreamVersion}`)
    transitions.push(
      auditPromptIdentityTransition(previousVersion, previousObservations, upstreamVersion, currentObservations),
    )
  }

  process.stdout.write(renderAuditTable(transitions))
  if (args.outFile) {
    mkdirSync(dirname(args.outFile), { recursive: true })
    writeFileSync(
      args.outFile,
      `${JSON.stringify({ schema: 1, scope: "prompt-identity-history-audit", bundleName: args.bundleName, transitions }, null, 2)}\n`,
      { mode: 0o644 },
    )
    console.error(`wrote ${args.outFile}`)
  }
  return 0
}

function selectVersions(stagingRoot: string, bundleName: string, requested: string[]): string[] {
  const versions =
    requested.length > 0
      ? requested
      : readdirSync(stagingRoot, { withFileTypes: true })
          .filter((entry) => entry.isDirectory() && valid(entry.name))
          .map(({ name }) => name)
  const sorted = [...new Set(versions)].sort(compare)
  for (const version of sorted) {
    if (!valid(version)) throw new Error(`invalid staged version: ${version}`)
    const bundlePath = join(stagingRoot, version, bundleName)
    if (!existsSync(bundlePath)) throw new Error(`staged bundle missing: ${bundlePath}`)
  }
  return sorted
}

function renderAuditTable(transitions: PromptIdentityTransitionAudit[]): string {
  const rows = transitions.map((audit) => [
    `${audit.previousVersion} -> ${audit.upstreamVersion}`,
    `${audit.previousObservations}/${audit.currentObservations}`,
    String(audit.carried),
    String(audit.ambiguousExact),
    String(audit.changedWithPartialCandidate),
    String(audit.strongChangedCandidate),
    String(audit.unresolvedWithoutCandidate),
    formatScore(audit.changedCandidateSimilarity.median),
  ])
  const header = ["transition", "observed", "carry", "exact?", "partial", ">=.5", "none", "median"]
  const widths = header.map((value, column) => Math.max(value.length, ...rows.map((row) => (row[column] ?? "").length)))
  const line = (row: string[]): string =>
    row.map((value, column) => value.padEnd(widths[column] ?? value.length)).join("  ")
  return `${line(header)}\n${line(widths.map((width) => "-".repeat(width)))}\n${rows.map(line).join("\n")}\n`
}

function formatScore(score: number | null): string {
  return score === null ? "-" : score.toFixed(4)
}

if (import.meta.main) await runCli(main)
