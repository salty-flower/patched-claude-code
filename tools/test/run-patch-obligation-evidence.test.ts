import { expect, test } from "bun:test"
import type { PatchEntry } from "../lib/patch-files"
import type { PatchObligationLedger, PatchObligationRegistry } from "../lib/patch-obligations"
import type { EmbeddedCheck } from "./helpers/collect-oracle-evidence"
import type { OracleCheck } from "./helpers/oracle-evidence"
import { collectPortedOracleEvidence } from "./run-patch-obligation-evidence"

const version = "2.1.268"
const platform = "linux-x64" as const

function fixture() {
  const patches: PatchEntry[] = [
    {
      name: "gate-current",
      featureName: "gate",
      file: "gate.toml",
      enabled: true,
      target_version: version,
      rationale: "fixture",
      rationale_ref: "reference/v2.1.88/sources/gate.ts#L1-L2",
      locator_kind: "literal",
      locator_pattern: "before",
      replacement: "after",
      tests: [{ kind: "static", name: "gate stays open", assert_contains: "after" }],
    },
  ]
  const registry: PatchObligationRegistry = {
    schema: 1,
    baselineVersion: "2.1.88",
    obligations: [
      {
        familyId: "gate",
        invariantId: "ported",
        introducedVersion: "2.1.88",
        rationaleRefs: ["fixture"],
        requiredPlatforms: [platform],
        evidenceClass: "static",
        oracleIds: ["gate/ported"],
      },
      {
        familyId: "gate",
        invariantId: "equivalent",
        introducedVersion: "2.1.88",
        rationaleRefs: ["fixture"],
        requiredPlatforms: [platform],
        evidenceClass: "static",
        oracleIds: ["gate/equivalent"],
      },
      {
        familyId: "gate",
        invariantId: "retired",
        introducedVersion: "2.1.88",
        rationaleRefs: ["fixture"],
        requiredPlatforms: [platform],
        evidenceClass: "static",
        oracleIds: ["gate/retired"],
      },
    ],
  }
  const ledger: PatchObligationLedger = {
    schema: 1,
    targetVersion: version,
    decisions: [
      { familyId: "gate", invariantId: "ported", disposition: "ported", patchEntries: ["gate-current"] },
      { familyId: "gate", invariantId: "equivalent", disposition: "upstream_equivalent" },
      { familyId: "gate", invariantId: "retired", disposition: "retired" },
    ],
  }
  const embedded: EmbeddedCheck[] = [
    {
      patchEntry: "gate-current",
      platform,
      kind: "static",
      testName: "gate stays open",
      outcome: "passed",
      message: "contains expected text",
    },
  ]
  return {
    registry,
    ledger,
    patches,
    version,
    platform,
    embedded,
    runtime: [] as OracleCheck[],
    runtimeRequirements: { "gate/ported": ["ported runtime callback"] },
  }
}

test("only ported obligations enter the current patch evidence roster", () => {
  const options = fixture()
  const result = collectPortedOracleEvidence(options)

  expect(result.selectedPatchEntries).toEqual(["gate-current"])
  expect(result.oracleResults).toEqual([
    {
      oracleId: "gate/ported",
      evidenceClass: "static",
      outcome: "passed",
      checks: ["run-patch-tests.ts: gate-current: static: gate stays open"],
    },
  ])
})

test("missing current evidence for a ported obligation remains skipped", () => {
  const options = fixture()
  options.embedded = []

  const result = collectPortedOracleEvidence(options)

  expect(result.selectedPatchEntries).toEqual([])
  expect(result.oracleResults).toEqual([
    { oracleId: "gate/ported", evidenceClass: "static", outcome: "skipped", checks: [] },
  ])
})

test("filtering acknowledged decisions does not hide unknown runtime oracle IDs", () => {
  const options = fixture()
  options.runtime = [
    {
      oracleIds: ["unknown/oracle"],
      platform,
      evidenceClass: "runtime",
      check: "unexpected callback",
      outcome: "passed",
    },
  ]

  expect(() => collectPortedOracleEvidence(options)).toThrow("unexpected runtime oracle result")
})
