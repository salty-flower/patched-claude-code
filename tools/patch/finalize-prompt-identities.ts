#!/usr/bin/env bun
// Commit a fully reviewed prompt identity draft to the registry and version ledger.

import { join } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { finalizePromptIdentityDraft } from "../lib/prompt-identity"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  draft?: string
  identityRoot: string
}

export function parseArgs(argv: string[]): Args {
  const program = createCommand("finalize-prompt-identities")
    .description("Validate a reviewed prompt identity draft and commit its registry and ledger state")
    .argument("<draft.json>", "reviewed prompt identity draft")
    .option("--identity-root <directory>", "checked-in prompt identity state", join(ROOT, "prompt-identities"))
    .parse(argv, { from: "user" })
  return { ...program.opts<Args>(), draft: program.args[0] }
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  if (!args.draft) throw new Error("missing draft")
  const result = finalizePromptIdentityDraft(args.identityRoot, args.draft)
  const ledger = result.ledger
  console.error(`committed ${ledger.occurrences.length} prompt identity decisions for ${ledger.upstreamVersion}`)
  console.error(`registry: ${join(args.identityRoot, "registry.json")}`)
  console.error(`ledger:   ${join(args.identityRoot, "versions", `${ledger.upstreamVersion}.json`)}`)
  return 0
}

if (import.meta.main) await runCli(main)
