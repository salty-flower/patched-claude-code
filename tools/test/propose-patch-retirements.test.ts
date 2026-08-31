import { afterEach, expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { catalogSha256, type PatchObligationRegistry } from "../lib/patch-obligations"
import { proposePatchRetirements } from "../patch/propose-patch-retirements"

const roots: string[] = []

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

test("retirement proposal adds only missing obligations and remains unsigned", () => {
  const root = mkdtempSync(join(tmpdir(), "pcc-retirement-proposal-"))
  roots.push(root)
  mkdirSync(join(root, "patch-obligations", "versions"), { recursive: true })
  const registry: PatchObligationRegistry = {
    schema: 1,
    baselineVersion: "2.1.88",
    obligations: ["kept", "retired"].map((invariantId) => ({
      familyId: "gate",
      invariantId,
      introducedVersion: "2.1.88",
      rationaleRefs: ["reference/v2.1.88/sources/gate.ts#L1-L2"],
      requiredPlatforms: ["darwin-arm64"],
      evidenceClass: "static",
      oracleIds: [`gate/${invariantId}`],
    })),
  }
  const acknowledgedRegistry = {
    ...registry,
    maintainerAcknowledgement: {
      approvedBy: "sole-maintainer",
      approvedAt: "2026-09-01T00:00:00Z",
      catalogSha256: catalogSha256(registry),
    },
  }
  writeFileSync(join(root, "patch-obligations", "registry.json"), JSON.stringify(acknowledgedRegistry))
  writeFileSync(
    join(root, "patch-obligations", "versions", "2.1.251.json"),
    JSON.stringify({
      schema: 1,
      targetVersion: "2.1.251",
      decisions: [{ familyId: "gate", invariantId: "kept", disposition: "ported", patchEntries: ["gate"] }],
    }),
  )
  const result = proposePatchRetirements(root, {
    version: "2.1.251",
    reason: "No longer maintained.",
    evidenceRef: ["docs/records/retirement.md"],
    write: false,
  })
  expect(result.added).toBe(1)
  expect(result.ledger.decisions).toContainEqual({
    familyId: "gate",
    invariantId: "retired",
    disposition: "retired",
  })
  expect(result.ledger.retirementAcknowledgement).toBeUndefined()
  expect(result.proposalSha256).toHaveLength(64)
})
