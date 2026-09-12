import { patchApplies } from "../../lib/apply-patches"
import type { PatchEntry } from "../../lib/patch-files"
import {
  type EvidenceClass,
  type ObligationPlatform,
  type OracleEvidenceResult,
  obligationKey,
  type PatchObligationLedger,
  type PatchObligationRegistry,
  selectPatchEntriesForEvidence,
} from "../../lib/patch-obligations"
import type { PatchTestReportResult } from "../run-patch-tests"
import type { OracleCheck } from "./oracle-evidence"

export type EmbeddedCheck = PatchTestReportResult

export function readEmbeddedReport(value: unknown, version: string): EmbeddedCheck[] {
  if (!value || typeof value !== "object") throw new Error("invalid embedded test report")
  const report = value as Record<string, unknown>
  if (report.schema !== 1 || report.targetVersion !== version || !Array.isArray(report.results)) {
    throw new Error("invalid or stale embedded test report")
  }
  return report.results.map((value: unknown) => {
    if (!value || typeof value !== "object") throw new Error("invalid embedded test result")
    const result = value as Record<string, unknown>
    for (const key of ["patchEntry", "platform", "testName", "message"]) {
      if (typeof result[key] !== "string" || !result[key]) throw new Error(`invalid embedded result ${key}`)
    }
    if (
      !["static", "cli", "pty"].includes(String(result.kind)) ||
      !["passed", "failed"].includes(String(result.outcome))
    )
      throw new Error("invalid embedded result outcome/kind")
    return result as EmbeddedCheck
  })
}

const rank = (value: EvidenceClass) => ({ static: 0, runtime: 1, "real-os-runtime": 2 })[value]

export function collectOracleEvidence(options: {
  registry: PatchObligationRegistry
  ledger: PatchObligationLedger
  patches: PatchEntry[]
  version: string
  platform: ObligationPlatform
  embedded: EmbeddedCheck[]
  runtime: OracleCheck[]
  runtimeRequirements: Record<string, string[]>
}): { selectedPatchEntries: string[]; oracleResults: OracleEvidenceResult[] } {
  const { registry, ledger, patches, version, platform, embedded, runtime } = options
  const selected = selectPatchEntriesForEvidence(ledger, patches, version, platform)
  const complete = (name: string) => {
    const entry = patches.find((patch) => patch.name === name && patchApplies(patch, version))
    const actual = embedded.filter((result) => result.patchEntry === name && result.platform === platform)
    return (
      Boolean(entry?.tests?.length) &&
      actual.length === entry?.tests?.length &&
      entry.tests.every((test) => {
        const matches = actual.filter((result) => result.testName === test.name && result.kind === test.kind)
        return matches.length === 1 && matches[0]?.outcome === "passed"
      })
    )
  }
  const decisions = new Map(ledger.decisions.map((decision) => [obligationKey(decision), decision]))
  const oracleResults = new Map<string, OracleEvidenceResult>()
  for (const obligation of registry.obligations) {
    const decision = decisions.get(obligationKey(obligation))
    if (!decision || decision.disposition === "retired" || !obligation.requiredPlatforms.includes(platform)) continue
    for (const oracleId of obligation.oracleIds) {
      const observed = runtime.filter(
        (result) =>
          result.platform === platform &&
          result.oracleIds.includes(oracleId) &&
          rank(result.evidenceClass) >= rank(obligation.evidenceClass),
      )
      let result: OracleEvidenceResult = {
        oracleId,
        evidenceClass: obligation.evidenceClass,
        outcome: "skipped",
        checks: [],
      }
      if (observed.length > 0) {
        const required = options.runtimeRequirements[oracleId] ?? []
        const missing =
          required.length === 0 ||
          required.some((name) => observed.filter((check) => check.check === name).length !== 1)
        result = {
          oracleId,
          // Report only the class this oracle requires; never promote sibling checks.
          evidenceClass: obligation.evidenceClass,
          outcome: observed.some((check) => check.outcome === "failed")
            ? "failed"
            : missing || observed.some((check) => check.outcome === "skipped")
              ? "skipped"
              : "passed",
          checks: [...new Set(observed.map((check) => check.check))].sort(),
        }
      } else if (obligation.evidenceClass === "static" && decision.disposition === "ported") {
        const names = (decision.patchEntries ?? []).filter((name) => selected.includes(name))
        const actual = embedded.filter((check) => names.includes(check.patchEntry) && check.platform === platform)
        result = {
          oracleId,
          evidenceClass: "static",
          outcome: actual.some((check) => check.outcome === "failed")
            ? "failed"
            : names.length > 0 && names.every(complete)
              ? "passed"
              : "skipped",
          checks: [
            ...new Set(
              actual.map((check) => `run-patch-tests.ts: ${check.patchEntry}: ${check.kind}: ${check.testName}`),
            ),
          ].sort(),
        }
      }
      const previous = oracleResults.get(oracleId)
      if (previous) throw new Error(`oracle is shared by multiple obligations: ${oracleId}`)
      oracleResults.set(oracleId, result)
    }
  }
  const expected = new Set(oracleResults.keys())
  for (const check of runtime) {
    if (check.platform !== platform || check.oracleIds.some((id) => !expected.has(id))) {
      throw new Error(`unexpected runtime oracle result: ${check.check}`)
    }
  }
  return {
    selectedPatchEntries: selected.filter(complete),
    oracleResults: [...oracleResults.values()].sort((left, right) => left.oracleId.localeCompare(right.oracleId)),
  }
}
