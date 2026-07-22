#!/usr/bin/env bun
// Bootstrap or propose deterministic cross-version prompt lineage decisions.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { CommanderError } from "commander"
import { createCommand } from "../lib/cli"
import { inspectPromptIdentityObservations } from "../lib/prompt-catalog"
import { bootstrapPromptIdentityFiles, buildPromptIdentityDraft } from "../lib/prompt-identity"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  previousVersion?: string
  patched?: string
  identityRoot: string
  outFile?: string
  bootstrap?: boolean
}

export function parseArgs(argv: string[]): Args {
  return createCommand("reconcile-prompt-identities")
    .description("Bootstrap prompt lineages or write a deterministic target-upgrade review draft")
    .requiredOption("--version <ver>", "target upstream version")
    .option("--previous-version <ver>", "previous finalized occurrence ledger")
    .option("--patched <cli.patched.js>", "rendered patched bundle input")
    .option("--identity-root <directory>", "checked-in prompt identity state", join(ROOT, "prompt-identities"))
    .option("-o, --out-file <file>", "draft output file")
    .option("--bootstrap", "allocate the one-time baseline registry and ledger")
    .parse(argv, { from: "user" })
    .opts<Args>()
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version
  if (!version) throw new Error("missing version")
  const patched = args.patched ?? join(ROOT, "staging", version, "cli.patched.js")
  if (!existsSync(patched)) throw new Error(`patched bundle missing: ${patched}`)
  const observations = inspectPromptIdentityObservations(readFileSync(patched, "utf8"), version)

  if (args.bootstrap) {
    if (args.previousVersion || args.outFile) {
      throw new Error("--bootstrap cannot be combined with --previous-version or --out-file")
    }
    const result = bootstrapPromptIdentityFiles(args.identityRoot, version, observations)
    console.error(`bootstrapped ${result.registry.lineages.length} prompt lineages for ${version}`)
    console.error(`registry: ${join(args.identityRoot, "registry.json")}`)
    console.error(`ledger:   ${join(args.identityRoot, "versions", `${version}.json`)}`)
    return 0
  }

  const previousVersion = args.previousVersion
  if (!previousVersion) throw new Error("missing --previous-version (or pass --bootstrap for the first baseline)")
  const outFile = args.outFile ?? join(ROOT, "dist", `prompt-identities-${version}.draft.json`)
  const draft = buildPromptIdentityDraft(args.identityRoot, version, previousVersion, observations)
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, `${JSON.stringify(draft, null, 2)}\n`, { mode: 0o644 })
  console.error(`wrote ${outFile}`)
  console.error(`carried:    ${draft.summary.carried}`)
  console.error(`unresolved: ${draft.summary.unresolved}`)
  console.error(`with partial candidates: ${draft.summary.unresolvedWithPartialCandidates}`)
  console.error(`not carried: ${draft.summary.unmatchedPriorLineages.length}`)
  if (draft.summary.unresolved > 0) {
    console.error("release remains blocked until every unresolved decision is committed")
  }
  return 0
}

if (import.meta.main) {
  try {
    process.exit(main())
  } catch (error) {
    if (error instanceof CommanderError && error.code === "commander.helpDisplayed") process.exit(error.exitCode)
    throw error
  }
}
