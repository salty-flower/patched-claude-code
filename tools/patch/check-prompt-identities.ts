#!/usr/bin/env bun
// Read-only release preflight; never reconcile or finalize identity decisions.
import { join } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { inspectPromptIdentityObservationsFromPath } from "../lib/prompt-catalog"
import { loadPromptIdentityResolution } from "../lib/prompt-identity"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

function main(): number {
  const args = createCommand("check-prompt-identities")
    .description("Check the rendered bundle against committed prompt identities without modifying them")
    .requiredOption("--version <version>", "target upstream version")
    .option("--patched <path>", "rendered patched bundle")
    .option("--identity-root <directory>", "committed identity state", join(ROOT, "prompt-identities"))
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{ version: string; patched?: string; identityRoot: string }>()
  const patched = args.patched ?? join(ROOT, "staging", args.version, "cli.patched.js")
  const observations = inspectPromptIdentityObservationsFromPath(patched, args.version)
  const resolution = loadPromptIdentityResolution(args.identityRoot, args.version, observations)
  console.error(`prompt identities verified: ${args.version}, ${resolution.byOccurrenceId.size} occurrences`)
  return 0
}

if (import.meta.main) await runCli(main)
