#!/usr/bin/env bun
// Prepare a target bump's prompt identity state and auto-finalize exact-only transitions.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { CommanderError } from "commander"
import { createCommand } from "../lib/cli"
import { inspectPromptIdentityObservations } from "../lib/prompt-catalog"
import { preparePromptIdentityBump } from "../lib/prompt-identity-bump"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  previousVersion?: string
  patched?: string
  identityRoot: string
  draftFile?: string
  resultFile?: string
}

export function parseArgs(argv: string[]): Args {
  return createCommand("prepare-prompt-identity-bump")
    .description("Validate an existing prompt ledger or auto-finalize an exact-only target transition")
    .requiredOption("--version <ver>", "target upstream version")
    .option("--previous-version <ver>", "previous finalized ledger; defaults to the newest lower version")
    .option("--patched <cli.patched.js>", "rendered patched bundle input")
    .option("--identity-root <directory>", "checked-in prompt identity state", join(ROOT, "prompt-identities"))
    .option("--draft-file <file>", "generated review draft")
    .option("--result-file <file>", "machine-readable preparation result")
    .parse(argv, { from: "user" })
    .opts<Args>()
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version
  if (!version) throw new Error("missing version")
  const patched = args.patched ?? join(ROOT, "staging", version, "cli.patched.js")
  if (!existsSync(patched)) throw new Error(`patched bundle missing: ${patched}`)
  const draftFile = args.draftFile ?? join(ROOT, "dist", `prompt-identities-${version}.draft.json`)
  const resultFile = args.resultFile ?? join(ROOT, "dist", `prompt-identity-bump-${version}.json`)
  const observations = inspectPromptIdentityObservations(readFileSync(patched, "utf8"), version)
  const result = preparePromptIdentityBump({
    identityRoot: args.identityRoot,
    upstreamVersion: version,
    observations,
    draftFile,
    ...(args.previousVersion ? { previousVersion: args.previousVersion } : {}),
  })

  mkdirSync(dirname(resultFile), { recursive: true })
  writeFileSync(resultFile, `${JSON.stringify(result, null, 2)}\n`, { mode: 0o644 })
  console.error(`prompt identity status: ${result.status}`)
  console.error(`result: ${resultFile}`)
  if (result.draftFile) console.error(`draft:  ${result.draftFile}`)
  if (result.status === "review-required") {
    console.error(`review required: ${result.reviewReasons.join(", ")}`)
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
