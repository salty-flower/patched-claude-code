import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { lt, rcompare, valid } from "semver"
import {
  buildPromptIdentityDraft,
  finalizePromptIdentityDraft,
  loadPromptIdentityResolution,
  type PromptIdentityDraft,
  type PromptIdentityObservation,
} from "./prompt-identity"
import { type PromptIdentityTransitionAudit, summarizePromptIdentityDraft } from "./prompt-identity-audit"

export type PromptIdentityBumpStatus = "ready-existing" | "finalized-exact-only" | "review-required"

export type PromptIdentityBumpPreparation = {
  schema: 1
  scope: "prompt-identity-bump-preparation"
  status: PromptIdentityBumpStatus
  upstreamVersion: string
  previousVersion: string | null
  draftFile: string | null
  ledgerFile: string
  reviewReasons: Array<"unresolved-current-occurrences" | "unmatched-prior-lineages">
  draftSummary: PromptIdentityDraft["summary"] | null
  audit: PromptIdentityTransitionAudit | null
}

export type PreparePromptIdentityBumpOptions = {
  identityRoot: string
  upstreamVersion: string
  observations: PromptIdentityObservation[]
  draftFile: string
  previousVersion?: string
}

export function preparePromptIdentityBump(options: PreparePromptIdentityBumpOptions): PromptIdentityBumpPreparation {
  const ledgerFile = join(options.identityRoot, "versions", `${options.upstreamVersion}.json`)
  if (existsSync(ledgerFile)) {
    loadPromptIdentityResolution(options.identityRoot, options.upstreamVersion, options.observations)
    return {
      schema: 1,
      scope: "prompt-identity-bump-preparation",
      status: "ready-existing",
      upstreamVersion: options.upstreamVersion,
      previousVersion: null,
      draftFile: null,
      ledgerFile,
      reviewReasons: [],
      draftSummary: null,
      audit: null,
    }
  }

  const previousVersion =
    options.previousVersion ?? latestPreviousLedgerVersion(options.identityRoot, options.upstreamVersion)
  const draft = buildPromptIdentityDraft(
    options.identityRoot,
    options.upstreamVersion,
    previousVersion,
    options.observations,
  )
  mkdirSync(dirname(options.draftFile), { recursive: true })
  writeFileSync(options.draftFile, `${JSON.stringify(draft, null, 2)}\n`, { mode: 0o644 })

  const reviewReasons: PromptIdentityBumpPreparation["reviewReasons"] = []
  if (draft.summary.unresolved > 0) reviewReasons.push("unresolved-current-occurrences")
  if (draft.summary.unmatchedPriorLineages.length > 0) reviewReasons.push("unmatched-prior-lineages")
  const audit = summarizePromptIdentityDraft(draft, readPreviousObservationCount(options.identityRoot, previousVersion))
  if (reviewReasons.length > 0) {
    return {
      schema: 1,
      scope: "prompt-identity-bump-preparation",
      status: "review-required",
      upstreamVersion: options.upstreamVersion,
      previousVersion,
      draftFile: options.draftFile,
      ledgerFile,
      reviewReasons,
      draftSummary: draft.summary,
      audit,
    }
  }

  finalizePromptIdentityDraft(options.identityRoot, options.draftFile)
  return {
    schema: 1,
    scope: "prompt-identity-bump-preparation",
    status: "finalized-exact-only",
    upstreamVersion: options.upstreamVersion,
    previousVersion,
    draftFile: options.draftFile,
    ledgerFile,
    reviewReasons: [],
    draftSummary: draft.summary,
    audit,
  }
}

export function latestPreviousLedgerVersion(identityRoot: string, upstreamVersion: string): string {
  if (!valid(upstreamVersion)) throw new Error(`invalid upstream version: ${upstreamVersion}`)
  const versionsRoot = join(identityRoot, "versions")
  if (!existsSync(versionsRoot)) throw new Error(`prompt identity versions directory missing: ${versionsRoot}`)
  const previous = readdirSync(versionsRoot)
    .flatMap((name) => (name.endsWith(".json") ? [name.slice(0, -".json".length)] : []))
    .filter((version) => valid(version) && lt(version, upstreamVersion))
    .sort(rcompare)[0]
  if (!previous) throw new Error(`no finalized prompt identity ledger precedes ${upstreamVersion}`)
  return previous
}

function readPreviousObservationCount(identityRoot: string, previousVersion: string): number {
  const ledger = JSON.parse(readFileSync(join(identityRoot, "versions", `${previousVersion}.json`), "utf8")) as {
    occurrences?: unknown[]
  }
  if (!Array.isArray(ledger.occurrences)) throw new Error(`invalid previous prompt identity ledger: ${previousVersion}`)
  return ledger.occurrences.length
}
