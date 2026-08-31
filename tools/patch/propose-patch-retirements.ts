#!/usr/bin/env bun

import { writeFileSync } from "node:fs"
import { join } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import {
  loadPatchObligationLedger,
  loadPatchObligationRegistry,
  obligationKey,
  retirementProposalSha256,
} from "../lib/patch-obligations"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version: string
  reason: string
  evidenceRef: string[]
  write: boolean
}

export function proposePatchRetirements(
  root: string,
  args: Args,
): {
  added: number
  proposalSha256: string
  ledger: ReturnType<typeof loadPatchObligationLedger>
} {
  const registry = loadPatchObligationRegistry(root)
  const ledger = loadPatchObligationLedger(root, args.version)
  const decided = new Set(ledger.decisions.map(obligationKey))
  const missing = registry.obligations.filter((obligation) => !decided.has(obligationKey(obligation)))
  ledger.decisions.push(
    ...missing.map(({ familyId, invariantId }) => ({
      familyId,
      invariantId,
      disposition: "retired" as const,
    })),
  )
  ledger.decisions.sort((left, right) => obligationKey(left).localeCompare(obligationKey(right)))
  ledger.retirementProposal = {
    reason: args.reason,
    evidenceRefs: [...new Set(args.evidenceRef)].sort(),
  }
  delete ledger.retirementAcknowledgement
  return {
    added: missing.length,
    proposalSha256: retirementProposalSha256(ledger),
    ledger,
  }
}

function main(): number {
  const args = createCommand("propose-patch-retirements")
    .description("Propose retiring every obligation missing from one target ledger")
    .requiredOption("--version <version>", "target upstream version")
    .requiredOption("--reason <reason>", "retirement reason bound by the proposal digest")
    .requiredOption("--evidence-ref <path...>", "evidence reference bound by the proposal digest")
    .option("--write", "replace the target ledger with the proposal", false)
    .parse(process.argv.slice(2), { from: "user" })
    .opts<Args>()
  const result = proposePatchRetirements(ROOT, args)
  if (args.write) {
    const path = join(ROOT, "patch-obligations", "versions", `${args.version}.json`)
    writeFileSync(path, `${JSON.stringify(result.ledger, null, 2)}\n`, { mode: 0o644 })
  }
  console.log(`retirement proposal: ${result.added} added`)
  console.log(`proposal sha256: ${result.proposalSha256}`)
  console.log(
    args.write ? "ledger updated; sole-maintainer acknowledgement remains required" : "dry run; pass --write to update",
  )
  return 0
}

if (import.meta.main) runCli(main)
