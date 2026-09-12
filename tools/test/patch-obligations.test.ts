import { afterEach, expect, test } from "bun:test"
import { createHash } from "node:crypto"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import type { PatchEntry } from "../lib/patch-files"
import {
  catalogSha256,
  loadPatchEvidenceReceipts,
  type OracleEvidenceResult,
  type PatchEvidenceReceipt,
  type PatchObligationLedger,
  type PatchObligationRegistry,
  retirementProposalSha256,
  selectPatchEntriesForEvidence,
  verifyPatchObligations,
} from "../lib/patch-obligations"

const VERSION = "2.1.251"
const SOURCE_COMMIT = "0123456789abcdef0123456789abcdef01234567"
const roots: string[] = []

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

function patch(name = "gate-current", platforms: PatchEntry["platforms"] = ["darwin-arm64"]): PatchEntry {
  return {
    file: "patches/gate.toml",
    featureName: "gate",
    name,
    enabled: true,
    target_version: VERSION,
    platforms,
    rationale: "test",
    rationale_ref: "reference/v2.1.88/sources/gate.ts#L1-L2",
    locator_kind: "literal",
    locator_pattern: "before",
    replacement: "after",
  }
}

function registry(includeMissing = false): PatchObligationRegistry {
  const value: PatchObligationRegistry = {
    schema: 1,
    baselineVersion: "2.1.88",
    obligations: [
      {
        familyId: "gate",
        invariantId: "gate-remains-open",
        introducedVersion: "2.1.88",
        rationaleRefs: ["reference/v2.1.88/sources/gate.ts#L1-L2"],
        requiredPlatforms: ["darwin-arm64"],
        evidenceClass: "real-os-runtime",
        oracleIds: ["gate/gate-remains-open"],
      },
      ...(includeMissing
        ? [
            {
              familyId: "forgotten-family",
              invariantId: "historical-behavior",
              introducedVersion: "2.1.100",
              rationaleRefs: ["reference/v2.1.88/sources/forgotten.ts#L1-L2"],
              requiredPlatforms: ["darwin-arm64" as const],
              evidenceClass: "static" as const,
              oracleIds: ["forgotten-family/historical-behavior"],
            },
          ]
        : []),
    ],
  }
  value.maintainerAcknowledgement = {
    approvedBy: "sole-maintainer",
    approvedAt: "2026-08-31T00:00:00Z",
    catalogSha256: catalogSha256(value),
  }
  return value
}

function ledger(entryName = "gate-current"): PatchObligationLedger {
  return {
    schema: 1,
    targetVersion: VERSION,
    decisions: [
      {
        familyId: "gate",
        invariantId: "gate-remains-open",
        disposition: "ported",
        patchEntries: [entryName],
      },
    ],
  }
}

function fixtureRoot(): { root: string; upstreamHash: string; patchedHash: string } {
  const root = mkdtempSync(join(tmpdir(), "pcc-obligations-"))
  roots.push(root)
  const stage = join(root, "staging", VERSION)
  const graph = join(stage, "graph.patched", "darwin-arm64")
  mkdirSync(graph, { recursive: true })
  mkdirSync(join(stage, "graph.patched", "linux-x64"), { recursive: true })
  const patched = Buffer.from("patched graph")
  const upstreamHash = "a".repeat(64)
  const patchedHash = createHash("sha256").update(patched).digest("hex")
  writeFileSync(join(graph, "cli.js"), patched)
  writeFileSync(join(stage, "graph.patched", "linux-x64", "cli.js"), "patched linux graph")
  writeFileSync(
    join(stage, "stage-manifest.json"),
    JSON.stringify({
      version: VERSION,
      platforms: [
        {
          platform: "darwin-arm64",
          binaryUrl: "https://example.invalid/claude",
          binarySha256: "b".repeat(64),
          entrypointSha256: upstreamHash,
          entrypointBytes: 1,
        },
      ],
    }),
  )
  return { root, upstreamHash, patchedHash }
}

function oracleResult(overrides: Partial<OracleEvidenceResult> = {}): OracleEvidenceResult {
  return {
    oracleId: "gate/gate-remains-open",
    evidenceClass: "real-os-runtime",
    outcome: "passed",
    checks: ["gate remains open"],
    ...overrides,
  }
}

function receipt(upstreamHash: string, patchedHash: string): PatchEvidenceReceipt {
  return {
    schema: 2,
    targetVersion: VERSION,
    sourceCommit: SOURCE_COMMIT,
    platform: "darwin-arm64",
    upstreamEntrypointSha256: upstreamHash,
    patchedEntrypointSha256: patchedHash,
    selectedPatchEntries: ["gate-current"],
    executedOracleIds: ["gate/gate-remains-open"],
    evidenceClass: "real-os-runtime",
    outcome: "passed",
    skippedOracleIds: [],
    oracleResults: [oracleResult()],
  }
}

function writeReceiptFixture(root: string, value: unknown): string {
  const directory = join(root, "receipts")
  mkdirSync(directory, { recursive: true })
  writeFileSync(join(directory, "darwin-arm64.json"), JSON.stringify(value))
  return directory
}

test("patch.1-style missing historical family is rejected", () => {
  const report = verifyPatchObligations({
    root: ".",
    version: VERSION,
    mode: "coverage",
    registry: registry(true),
    ledger: ledger(),
    patches: [patch()],
  })
  expect(report.status).toBe("blocked")
  expect(report.errors).toContain("forgotten-family/historical-behavior: missing target disposition")
})

test("agent-proposed registry without maintainer digest acknowledgement is rejected", () => {
  const proposed = registry()
  delete proposed.maintainerAcknowledgement
  const report = verifyPatchObligations({
    root: ".",
    version: VERSION,
    mode: "coverage",
    registry: proposed,
    ledger: ledger(),
    patches: [patch()],
  })
  expect(report.errors).toContain("registry: missing maintainer acknowledgement")
})

test("patch.2-style complete disposition and bound real-OS receipt pass", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const report = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [receipt(upstreamHash, patchedHash)],
  })
  expect(report).toMatchObject({ status: "passed", errors: [] })
})

test("schema 1 receipts require regeneration by the current runner", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const legacy = { ...receipt(upstreamHash, patchedHash), schema: 1 }
  const directory = writeReceiptFixture(root, legacy)
  expect(() => loadPatchEvidenceReceipts(directory)).toThrow("schema must be 2; regenerate receipt with current runner")
})

test("directly supplied schema 1 receipts are rejected before evidence matching", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const legacy = { ...receipt(upstreamHash, patchedHash), schema: 1 } as unknown as PatchEvidenceReceipt
  const report = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [legacy],
  })
  expect(report.errors).toContain("receipt darwin-arm64: schema must be 2; regenerate receipt with current runner")
  expect(report.errors).toContain("gate/gate-remains-open: missing real-os-runtime evidence for darwin-arm64")
})

test("receipt without an oracle result cannot satisfy its obligation", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const missing = receipt(upstreamHash, patchedHash)
  missing.oracleResults = []
  missing.executedOracleIds = []
  const report = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [missing],
  })
  expect(report).toMatchObject({ status: "blocked" })
  expect(report.errors).toContain("gate/gate-remains-open: missing real-os-runtime evidence for darwin-arm64")
})

test("duplicate and unknown oracle results are rejected", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const duplicate = receipt(upstreamHash, patchedHash)
  duplicate.oracleResults = [oracleResult(), oracleResult()]
  const duplicateReport = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [duplicate],
  })
  expect(duplicateReport.errors).toContain("receipt darwin-arm64: duplicate oracle result gate/gate-remains-open")

  const unknown = receipt(upstreamHash, patchedHash)
  unknown.oracleResults = [oracleResult({ oracleId: "unknown/oracle" })]
  unknown.executedOracleIds = ["unknown/oracle"]
  const unknownReport = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [unknown],
  })
  expect(unknownReport.errors).toContain("receipt darwin-arm64: unknown oracle unknown/oracle")
})

test("oracle projections must match the result outcomes", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const fabricated = receipt(upstreamHash, patchedHash)
  fabricated.executedOracleIds = []
  const report = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [fabricated],
  })
  expect(report.errors).toContain("receipt darwin-arm64: executedOracleIds do not match oracleResults")
  expect(report.errors).toContain("gate/gate-remains-open: missing real-os-runtime evidence for darwin-arm64")
})

test("receipt parser requires oracle results and validates their checks and outcomes", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const missing = { ...receipt(upstreamHash, patchedHash) } as Partial<PatchEvidenceReceipt>
  delete missing.oracleResults
  expect(() => loadPatchEvidenceReceipts(writeReceiptFixture(root, missing))).toThrow(
    "receipts/darwin-arm64.json.oracleResults: expected array",
  )

  const malformedChecks = {
    ...receipt(upstreamHash, patchedHash),
    oracleResults: [oracleResult({ checks: "not-an-array" as unknown as string[] })],
  }
  expect(() => loadPatchEvidenceReceipts(writeReceiptFixture(root, malformedChecks))).toThrow(
    "receipts/darwin-arm64.json.oracleResults[0].checks: expected array",
  )

  const malformedOutcome = {
    ...receipt(upstreamHash, patchedHash),
    oracleResults: [oracleResult({ outcome: "unknown" as OracleEvidenceResult["outcome"] })],
  }
  expect(() => loadPatchEvidenceReceipts(writeReceiptFixture(root, malformedOutcome))).toThrow(
    "receipts/darwin-arm64.json.oracleResults[0].outcome: expected passed, failed, or skipped",
  )

  const emptyChecks = {
    ...receipt(upstreamHash, patchedHash),
    oracleResults: [oracleResult({ checks: [] })],
  }
  expect(() => loadPatchEvidenceReceipts(writeReceiptFixture(root, emptyChecks))).toThrow(
    "receipts/darwin-arm64.json.oracleResults[0].checks: passed result requires at least one check",
  )
})

test("failed, skipped, and empty-check results are not admissible", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const failed = receipt(upstreamHash, patchedHash)
  failed.oracleResults = [oracleResult({ outcome: "failed" })]
  const failedReport = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [failed],
  })
  expect(failedReport.errors).toContain("receipt darwin-arm64: oracle gate/gate-remains-open outcome is failed")
  expect(failedReport.errors).toContain("gate/gate-remains-open: missing real-os-runtime evidence for darwin-arm64")

  const skipped = receipt(upstreamHash, patchedHash)
  skipped.oracleResults = [oracleResult({ outcome: "skipped", checks: [] })]
  skipped.executedOracleIds = []
  skipped.skippedOracleIds = ["gate/gate-remains-open"]
  const skippedReport = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [skipped],
  })
  expect(skippedReport.errors).toContain("receipt darwin-arm64: oracle gate/gate-remains-open outcome is skipped")
  expect(skippedReport.errors).toContain("receipt darwin-arm64: skipped oracles are not admissible")

  const emptyChecks = receipt(upstreamHash, patchedHash)
  emptyChecks.oracleResults = [oracleResult({ checks: [] })]
  const emptyChecksReport = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [emptyChecks],
  })
  expect(emptyChecksReport.errors).toContain(
    "receipt darwin-arm64.oracleResults[0].checks: passed result requires at least one check",
  )
})

test("per-oracle evidence class controls satisfaction instead of the envelope class", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const weaker = receipt(upstreamHash, patchedHash)
  weaker.oracleResults = [oracleResult({ evidenceClass: "static" })]
  const report = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [weaker],
  })
  expect(report).toMatchObject({ status: "blocked" })
  expect(report.errors).toContain("gate/gate-remains-open: missing real-os-runtime evidence for darwin-arm64")
})

test("retired and wrong-platform oracle results are rejected", () => {
  const retiredRoot = fixtureRoot()
  const retiredLedger = ledger()
  retiredLedger.decisions[0] = {
    familyId: "gate",
    invariantId: "gate-remains-open",
    disposition: "retired",
  }
  const retiredReceipt = receipt(retiredRoot.upstreamHash, retiredRoot.patchedHash)
  retiredReceipt.selectedPatchEntries = []
  const retiredReport = verifyPatchObligations({
    root: retiredRoot.root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: retiredLedger,
    patches: [],
    receipts: [retiredReceipt],
  })
  expect(retiredReport.errors).toContain("receipt darwin-arm64: retired oracle gate/gate-remains-open")

  const wrongPlatformRoot = fixtureRoot()
  const wrongPlatformRegistry = registry()
  const wrongPlatformObligation = wrongPlatformRegistry.obligations.find(({ familyId }) => familyId === "gate")
  if (!wrongPlatformObligation) throw new Error("test registry is missing gate obligation")
  wrongPlatformObligation.requiredPlatforms = ["linux-x64"]
  wrongPlatformRegistry.maintainerAcknowledgement = {
    approvedBy: "sole-maintainer",
    approvedAt: "2026-08-31T00:00:00Z",
    catalogSha256: catalogSha256(wrongPlatformRegistry),
  }
  const wrongPlatformReport = verifyPatchObligations({
    root: wrongPlatformRoot.root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: wrongPlatformRegistry,
    ledger: ledger(),
    patches: [patch("gate-current", ["darwin-arm64", "linux-x64"])],
    receipts: [receipt(wrongPlatformRoot.upstreamHash, wrongPlatformRoot.patchedHash)],
  })
  expect(wrongPlatformReport.errors).toContain(
    "receipt darwin-arm64: wrong-platform oracle gate/gate-remains-open for darwin-arm64",
  )
})

test("one current patch entry may realize multiple historical invariants", () => {
  const sharedRegistry = registry()
  sharedRegistry.obligations.push({
    familyId: "gate",
    invariantId: "gate-remains-visible",
    introducedVersion: "2.1.100",
    rationaleRefs: ["reference/v2.1.88/sources/gate.ts#L1-L2"],
    requiredPlatforms: ["darwin-arm64"],
    evidenceClass: "static",
    oracleIds: ["gate/gate-remains-visible"],
  })
  sharedRegistry.maintainerAcknowledgement = {
    approvedBy: "sole-maintainer",
    approvedAt: "2026-08-31T00:00:00Z",
    catalogSha256: catalogSha256(sharedRegistry),
  }
  const sharedLedger = ledger()
  sharedLedger.decisions.push({
    familyId: "gate",
    invariantId: "gate-remains-visible",
    disposition: "ported",
    patchEntries: ["gate-current"],
  })
  const report = verifyPatchObligations({
    root: ".",
    version: VERSION,
    mode: "coverage",
    registry: sharedRegistry,
    ledger: sharedLedger,
    patches: [patch()],
  })
  expect(report).toMatchObject({ status: "passed", errors: [] })
  expect(selectPatchEntriesForEvidence(sharedLedger, [patch()], VERSION, "darwin-arm64")).toEqual(["gate-current"])
})

test("old entry mapping and skipped real-OS oracle are rejected", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const staleEntry = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "coverage",
    registry: registry(),
    ledger: ledger("gate-old"),
    patches: [patch()],
  })
  const skipped = receipt(upstreamHash, patchedHash)
  skipped.executedOracleIds = []
  skipped.skippedOracleIds = ["gate/gate-remains-open"]
  skipped.oracleResults = [oracleResult({ outcome: "skipped", checks: [] })]
  const skippedReport = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [skipped],
  })
  expect(staleEntry.errors).toContain(`gate/gate-remains-open: patch entry gate-old is not active at ${VERSION}`)
  expect(skippedReport.errors).toContain("receipt darwin-arm64: skipped oracles are not admissible")
  expect(skippedReport.errors).toContain("gate/gate-remains-open: missing real-os-runtime evidence for darwin-arm64")
})

test("stale receipt coordinates are rejected", () => {
  const { root, upstreamHash, patchedHash } = fixtureRoot()
  const stale = receipt(upstreamHash, patchedHash)
  stale.targetVersion = "2.1.250"
  stale.sourceCommit = "f".repeat(40)
  const report = verifyPatchObligations({
    root,
    version: VERSION,
    mode: "admission",
    sourceCommit: SOURCE_COMMIT,
    registry: registry(),
    ledger: ledger(),
    patches: [patch()],
    receipts: [stale],
  })
  expect(report).toMatchObject({ status: "blocked" })
  expect(report.errors).toContain("receipt darwin-arm64: stale target 2.1.250")
  expect(report.errors).toContain("receipt darwin-arm64: source commit mismatch")
  expect(report.errors).toContain("gate/gate-remains-open: missing real-os-runtime evidence for darwin-arm64")
})

test("retirement without the sole maintainer acknowledgement is rejected", () => {
  const retired = ledger()
  retired.decisions[0] = {
    familyId: "gate",
    invariantId: "gate-remains-open",
    disposition: "retired",
  }
  const report = verifyPatchObligations({
    root: ".",
    version: VERSION,
    mode: "coverage",
    registry: registry(),
    ledger: retired,
    patches: [],
  })
  expect(report.errors).toContain("retirements: batch retirements require retirementProposal")
})

test("one digest-bound acknowledgement admits a retirement batch", () => {
  const retired = ledger()
  retired.decisions[0] = {
    familyId: "gate",
    invariantId: "gate-remains-open",
    disposition: "retired",
  }
  retired.retirementProposal = {
    reason: "The maintained product no longer uses this historical behavior.",
    evidenceRefs: ["docs/records/retirement.md"],
  }
  retired.retirementAcknowledgement = {
    approvedBy: "sole-maintainer",
    approvedAt: "2026-09-01T00:00:00Z",
    proposalSha256: retirementProposalSha256(retired),
  }
  const report = verifyPatchObligations({
    root: ".",
    version: VERSION,
    mode: "coverage",
    registry: registry(),
    ledger: retired,
    patches: [],
  })
  expect(report).toMatchObject({ status: "passed", errors: [] })
})

test("retirement batch acknowledgement is bound to the exact proposal", () => {
  const retired = ledger()
  retired.decisions[0] = {
    familyId: "gate",
    invariantId: "gate-remains-open",
    disposition: "retired",
  }
  retired.retirementProposal = {
    reason: "The maintained product no longer uses this historical behavior.",
    evidenceRefs: ["docs/records/retirement.md"],
  }
  retired.retirementAcknowledgement = {
    approvedBy: "sole-maintainer",
    approvedAt: "2026-09-01T00:00:00Z",
    proposalSha256: "0".repeat(64),
  }
  const report = verifyPatchObligations({
    root: ".",
    version: VERSION,
    mode: "coverage",
    registry: registry(),
    ledger: retired,
    patches: [],
  })
  expect(report.errors).toContain("retirements: maintainer acknowledgement digest does not match the proposal")
})
