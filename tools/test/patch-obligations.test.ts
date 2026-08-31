import { afterEach, expect, test } from "bun:test"
import { createHash } from "node:crypto"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import type { PatchEntry } from "../lib/patch-files"
import {
  catalogSha256,
  type PatchEvidenceReceipt,
  type PatchObligationLedger,
  type PatchObligationRegistry,
  retirementProposalSha256,
  verifyPatchObligations,
} from "../lib/patch-obligations"

const VERSION = "2.1.251"
const SOURCE_COMMIT = "0123456789abcdef0123456789abcdef01234567"
const roots: string[] = []

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

function patch(name = "gate-current"): PatchEntry {
  return {
    file: "patches/gate.toml",
    featureName: "gate",
    name,
    enabled: true,
    target_version: VERSION,
    platforms: ["darwin-arm64"],
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

function receipt(upstreamHash: string, patchedHash: string): PatchEvidenceReceipt {
  return {
    schema: 1,
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
  }
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
  expect(report.errors).toContain("receipt darwin-arm64: stale target 2.1.250")
  expect(report.errors).toContain("receipt darwin-arm64: source commit mismatch")
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
