import { appendFileSync, readFileSync } from "node:fs"
import type { EvidenceClass, ObligationPlatform } from "../../lib/patch-obligations"

export type OracleCheck = {
  oracleIds: string[]
  platform: ObligationPlatform
  evidenceClass: EvidenceClass
  check: string
  outcome: "passed" | "failed" | "skipped"
}

// Only the evidence runner sets this path, inside a fresh, private run directory.
// A successful process exit is never itself an oracle result.
export function recordOracleCheck(result: OracleCheck): void {
  const path = process.env.PCC_ORACLE_RESULTS_FILE
  if (!path || result.platform !== process.env.PCC_VERIFY_PLATFORM) return
  appendFileSync(path, `${JSON.stringify(result)}\n`)
}

export function readOracleChecks(path: string): OracleCheck[] {
  return readFileSync(path, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const value: unknown = JSON.parse(line)
      if (!value || typeof value !== "object") throw new Error("invalid oracle check")
      const record = value as Record<string, unknown>
      if (
        !Array.isArray(record.oracleIds) ||
        record.oracleIds.length === 0 ||
        !record.oracleIds.every((id) => typeof id === "string" && id.length > 0) ||
        !["darwin-arm64", "linux-x64"].includes(String(record.platform)) ||
        !["static", "runtime", "real-os-runtime"].includes(String(record.evidenceClass)) ||
        !["passed", "failed", "skipped"].includes(String(record.outcome)) ||
        typeof record.check !== "string" ||
        !record.check
      )
        throw new Error("invalid oracle check fields")
      return record as OracleCheck
    })
}
