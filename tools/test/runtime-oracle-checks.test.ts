import { expect, test } from "bun:test"
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import type { PatchObligationLedger, PatchObligationRegistry } from "../lib/patch-obligations"
import type { OracleCheck } from "./helpers/oracle-evidence"
import {
  recordThinkingRequestRuntimeOracle,
  recordThinkingSummaryBoundaryRuntimeOracle,
  runtimeOracleChecks,
  THINKING_REQUEST_RUNTIME_CHECKS,
  THINKING_BOUNDARY_RUNTIME_CHECKS,
} from "./helpers/runtime-oracle-checks"
import { collectPortedOracleEvidence, thinkingEvidenceCommands } from "./run-patch-obligation-evidence"

const invariants = ["thinking-display-interactive-default", "thinking-preserve-summary-boundaries"]
const ledger: PatchObligationLedger = {
  schema: 1,
  targetVersion: "2.1.304",
  decisions: invariants.map((invariantId) => ({
    familyId: "thinking-display",
    invariantId,
    disposition: "ported",
    patchEntries: [],
  })),
}
const registry: PatchObligationRegistry = {
  schema: 1,
  baselineVersion: "2.1.88",
  obligations: invariants.map((invariantId) => ({
    familyId: "thinking-display",
    invariantId,
    introducedVersion: "2.1.304",
    rationaleRefs: ["fixture"],
    requiredPlatforms: ["darwin-arm64", "linux-x64"],
    evidenceClass: "runtime",
    oracleIds: ["thinking-display/" + invariantId],
  })),
}
const requirements = runtimeOracleChecks("2.1.304")
function collect(runtime: OracleCheck[], decisions = ledger.decisions) {
  return collectPortedOracleEvidence({
    registry,
    ledger: { ...ledger, decisions },
    patches: [],
    version: "2.1.304",
    platform: "darwin-arm64",
    embedded: [],
    runtime,
    runtimeRequirements: requirements,
  }).oracleResults
}
function checks(): OracleCheck[] {
  return invariants.flatMap((invariant) =>
    requirements["thinking-display/" + invariant].map((check) => ({
      oracleIds: ["thinking-display/" + invariant],
      platform: "darwin-arm64" as const,
      evidenceClass: invariant === invariants[0] ? ("runtime" as const) : ("real-os-runtime" as const),
      check,
      outcome: "passed" as const,
    })),
  )
}

test("thinking runner schedules only ported obligations and the complete PTY matrix", () => {
  const commands = thinkingEvidenceCommands(ledger, "/fixture/cli.js")
  expect(commands).toHaveLength(2)
  expect(commands[0]).toContain("tools/test/thinking-summaries-request.test.ts")
  expect(commands[1]).toEqual([
    "bun",
    "run",
    "tools/test/thinking-summaries-tui-smoke.ts",
    "--bundle",
    "/fixture/cli.js",
    "--display-mode",
    "all",
    "--viewport",
    "both",
  ])
  expect(thinkingEvidenceCommands({ decisions: [] }, "old")).toEqual([])
  expect(
    thinkingEvidenceCommands({ decisions: ledger.decisions.map((d) => ({ ...d, disposition: "retired" })) }, "old"),
  ).toEqual([])
  expect(thinkingEvidenceCommands({ decisions: ledger.decisions.slice(0, 1) }, "only-request")).toHaveLength(1)
})

test("complete five request plus four boundary callbacks satisfy runtime, membership alone does not", () => {
  expect(Object.values(THINKING_REQUEST_RUNTIME_CHECKS)).toHaveLength(5)
  expect(Object.values(THINKING_BOUNDARY_RUNTIME_CHECKS)).toHaveLength(4)
  expect(collect(checks()).map((x) => x.outcome)).toEqual(["passed", "passed"])
  expect(collect([]).map((x) => x.outcome)).toEqual(["skipped", "skipped"])
  expect(collect([], [])).toEqual([])
})

test("every omitted duplicate failed skipped or wrong-platform callback blocks its oracle", () => {
  const complete = checks()
  for (let i = 0; i < complete.length; i++) {
    const id = complete[i].oracleIds[0]
    const outcome = (rows: OracleCheck[]) => collect(rows).find((x) => x.oracleId === id)?.outcome
    expect(outcome(complete.filter((_, index) => index !== i))).toBe("skipped")
    expect(outcome([...complete, complete[i]])).toBe("skipped")
    expect(outcome(complete.map((row, index) => (index === i ? { ...row, outcome: "failed" } : row)))).toBe("failed")
    expect(outcome(complete.map((row, index) => (index === i ? { ...row, outcome: "skipped" } : row)))).toBe("skipped")
    expect(() =>
      outcome(complete.map((row, index) => (index === i ? { ...row, platform: "linux-x64" } : row))),
    ).toThrow("unexpected runtime oracle result")
    expect(outcome(complete.map((row, index) => (index === i ? { ...row, evidenceClass: "static" } : row)))).toBe(
      "skipped",
    )
  }
})

test("thinking callbacks record only the actual host and never cross-platform evidence", () => {
  const host =
    process.platform === "darwin" && process.arch === "arm64"
      ? "darwin-arm64"
      : process.platform === "linux" && process.arch === "x64"
        ? "linux-x64"
        : undefined
  if (!host) return
  const dir = mkdtempSync(join(tmpdir(), "thinking-oracle-test-")),
    path = join(dir, "checks.jsonl")
  const previousFile = process.env.PCC_ORACLE_RESULTS_FILE,
    previousPlatform = process.env.PCC_VERIFY_PLATFORM
  try {
    writeFileSync(path, "")
    process.env.PCC_ORACLE_RESULTS_FILE = path
    process.env.PCC_VERIFY_PLATFORM = host
    recordThinkingRequestRuntimeOracle("resolver-matrix", host)
    recordThinkingRequestRuntimeOracle("resolver-matrix", host === "darwin-arm64" ? "linux-x64" : "darwin-arm64")
    recordThinkingSummaryBoundaryRuntimeOracle("default", "80x24")
    const rows: OracleCheck[] = readFileSync(path, "utf8")
      .trim()
      .split("\n")
      .map((row) => JSON.parse(row))
    expect(rows).toHaveLength(2)
    expect(rows.map((row) => row.platform)).toEqual([host, host])
    expect(rows.map((row) => row.evidenceClass)).toEqual(["runtime", "real-os-runtime"])
    process.env.PCC_VERIFY_PLATFORM = host === "darwin-arm64" ? "linux-x64" : "darwin-arm64"
    recordThinkingSummaryBoundaryRuntimeOracle("explicit", "120x40")
    expect(readFileSync(path, "utf8").trim().split("\n")).toHaveLength(2)
  } finally {
    if (previousFile === undefined) delete process.env.PCC_ORACLE_RESULTS_FILE
    else process.env.PCC_ORACLE_RESULTS_FILE = previousFile
    if (previousPlatform === undefined) delete process.env.PCC_VERIFY_PLATFORM
    else process.env.PCC_VERIFY_PLATFORM = previousPlatform
    // dir is the exact private mkdtemp path created above, never a caller-supplied path.
    rmSync(dir, { recursive: true, force: true })
  }
})
