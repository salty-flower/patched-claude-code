import { expect, test } from "bun:test"
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import type { PatchEntry } from "../lib/patch-files"
import {
  loadPatchObligationLedger,
  loadPatchObligationRegistry,
  type PatchObligationLedger,
  type PatchObligationRegistry,
} from "../lib/patch-obligations"
import { targetVersion } from "../lib/target"
import { collectOracleEvidence, type EmbeddedCheck, readEmbeddedReport } from "./helpers/collect-oracle-evidence"
import { type OracleCheck, readOracleChecks } from "./helpers/oracle-evidence"
import { runtimeOracleChecks } from "./helpers/runtime-oracle-checks"

test("every active Keychain oracle has an explicit runtime callback roster", () => {
  const root = join(import.meta.dir, "../..")
  const version = targetVersion()
  const registry = loadPatchObligationRegistry(root)
  const ledger = loadPatchObligationLedger(root, version)
  const roster = runtimeOracleChecks(version)
  for (const obligation of registry.obligations.filter((item) => item.familyId === "explicit-macos-keychain")) {
    const decision = ledger.decisions.find(
      (item) => item.familyId === obligation.familyId && item.invariantId === obligation.invariantId,
    )
    expect(decision).toBeDefined()
    for (const oracle of obligation.oracleIds) {
      if (decision?.disposition === "retired") {
        expect(roster[oracle]).toBeUndefined()
      } else {
        expect(roster[oracle]?.length).toBeGreaterThan(0)
        expect(new Set(roster[oracle]).size).toBe(roster[oracle]?.length)
      }
    }
  }
})

function first<T>(values: T[]): T {
  const value = values[0]
  if (value === undefined) throw new Error("missing fixture value")
  return value
}

function fixture() {
  const patches: PatchEntry[] = [
    {
      name: "gate-current",
      featureName: "gate",
      file: "gate.toml",
      enabled: true,
      target_version: "2.1.268",
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
        invariantId: "open",
        introducedVersion: "2.1.88",
        rationaleRefs: ["fixture"],
        requiredPlatforms: ["linux-x64"],
        evidenceClass: "static",
        oracleIds: ["gate/open"],
      },
    ],
  }
  const ledger: PatchObligationLedger = {
    schema: 1,
    targetVersion: "2.1.268",
    decisions: [
      {
        familyId: "gate",
        invariantId: "open",
        disposition: "ported",
        patchEntries: ["gate-current"],
      },
    ],
  }
  const embedded: EmbeddedCheck[] = [
    {
      patchEntry: "gate-current",
      platform: "linux-x64",
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
    version: "2.1.268",
    platform: "linux-x64" as const,
    embedded,
    runtime: [] as OracleCheck[],
    runtimeRequirements: { "gate/open": ["actual callback"] },
  }
}

test("static evidence requires observed results for every selected entry test", () => {
  const options = fixture()
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe("passed")
  options.patches[0]?.tests?.push({ kind: "static", name: "negative", assert_not_contains: "before" })
  const result = collectOracleEvidence(options)
  expect(result.selectedPatchEntries).toEqual([])
  expect(result.oracleResults[0]?.outcome).toBe("skipped")
})

test("registry declarations and zero checks cannot mint executed evidence", () => {
  const options = fixture()
  options.embedded = []
  expect(collectOracleEvidence(options).oracleResults).toEqual([
    {
      oracleId: "gate/open",
      evidenceClass: "static",
      outcome: "skipped",
      checks: [],
    },
  ])
  first(options.registry.obligations).evidenceClass = "runtime"
  options.embedded = fixture().embedded
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe("skipped")
})

test.each(["failed", "skipped"] as const)("runtime %s cannot be hidden by a passing check", (outcome) => {
  const options = fixture()
  first(options.registry.obligations).evidenceClass = "runtime"
  const check: OracleCheck = {
    oracleIds: ["gate/open"],
    platform: "linux-x64",
    evidenceClass: "runtime",
    check: "actual callback",
    outcome: "passed",
  }
  options.runtime = [check, { ...check, check: "second callback", outcome }]
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe(outcome)
})

test("static failures and duplicate observations do not satisfy an entry", () => {
  const options = fixture()
  first(options.embedded).outcome = "failed"
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe("failed")
  options.embedded = [...fixture().embedded, ...fixture().embedded]
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe("skipped")
})

test("wrong-platform, unknown, and weaker runtime evidence fail closed", () => {
  const options = fixture()
  first(options.registry.obligations).evidenceClass = "real-os-runtime"
  const check: OracleCheck = {
    oracleIds: ["gate/open"],
    platform: "linux-x64",
    evidenceClass: "runtime",
    check: "actual callback",
    outcome: "passed",
  }
  options.runtime = [check]
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe("skipped")
  options.runtime = [{ ...check, platform: "darwin-arm64" }]
  expect(() => collectOracleEvidence(options)).toThrow("unexpected runtime oracle")
  options.runtime = [{ ...check, oracleIds: ["unknown"] }]
  expect(() => collectOracleEvidence(options)).toThrow("unexpected runtime oracle")
})

test("a passing sibling cannot hide a missing required callback", () => {
  const options = fixture()
  first(options.registry.obligations).evidenceClass = "runtime"
  const check: OracleCheck = {
    oracleIds: ["gate/open"],
    platform: "linux-x64",
    evidenceClass: "runtime",
    check: "actual callback",
    outcome: "passed",
  }
  options.runtime = [check]
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe("passed")
  options.runtimeRequirements["gate/open"].push("second callback")
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe("skipped")
  options.runtime.push({ ...check, check: "second callback" })
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe("passed")
  options.runtime.push(check)
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe("skipped")
})

test("equivalence needs its own observation; retirement needs no evidence", () => {
  const options = fixture()
  first(options.ledger.decisions).disposition = "upstream_equivalent"
  expect(collectOracleEvidence(options).oracleResults[0]?.outcome).toBe("skipped")
  first(options.ledger.decisions).disposition = "retired"
  expect(collectOracleEvidence(options).oracleResults).toEqual([])
})

test("embedded report rejects stale version and malformed observations", () => {
  const report = { schema: 1, targetVersion: "2.1.268", results: fixture().embedded }
  expect(readEmbeddedReport(report, "2.1.268")).toEqual(report.results)
  expect(() => readEmbeddedReport(report, "2.1.267")).toThrow("stale")
  expect(() => readEmbeddedReport({ ...report, results: [{}] }, "2.1.268")).toThrow("invalid embedded")
})

test("callback reporting observes skip, success, and failure without granting skipped assertions execution", () => {
  const directory = mkdtempSync(join(tmpdir(), "pcc-oracle-callback-test-"))
  try {
    const results = join(directory, "results.jsonl")
    const source = join(directory, "callbacks.test.ts")
    writeFileSync(results, "")
    writeFileSync(
      source,
      `
import { keychainOracleTest } from ${JSON.stringify(join(import.meta.dir, "helpers/oracle-test.ts"))};
keychainOracleTest(["skip"], true, "skip callback", () => { throw new Error("must not run"); }, 1000);
keychainOracleTest(["pass"], false, "pass callback", async () => {}, 1000);
keychainOracleTest(["fail"], false, "fail callback", async () => { throw new Error("expected fixture failure"); }, 1000);
`,
    )
    const child = Bun.spawnSync([process.execPath, "test", source], {
      env: { ...process.env, PCC_VERIFY_PLATFORM: "darwin-arm64", PCC_ORACLE_RESULTS_FILE: results },
      stdout: "pipe",
      stderr: "pipe",
    })
    expect(child.exitCode).toBe(1)
    expect(child.stderr.toString()).toContain("expected fixture failure")
    expect(readOracleChecks(results).map(({ check, outcome }) => ({ check, outcome }))).toEqual([
      { check: "macos-keychain-bundle-runtime.test.ts: skip callback", outcome: "skipped" },
      { check: "macos-keychain-bundle-runtime.test.ts: pass callback", outcome: "passed" },
      { check: "macos-keychain-bundle-runtime.test.ts: fail callback", outcome: "failed" },
    ])
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
})

test("an evidence attempt removes stale success before an early platform failure", () => {
  const directory = mkdtempSync(join(tmpdir(), "pcc-oracle-stale-test-"))
  try {
    const result = join(directory, "receipt.json")
    writeFileSync(result, JSON.stringify({ outcome: "passed" }))
    const platform = process.platform === "darwin" ? "linux-x64" : "darwin-arm64"
    const child = Bun.spawnSync(
      [
        process.execPath,
        join(import.meta.dir, "run-patch-obligation-evidence.ts"),
        "--version",
        "2.1.268",
        "--platform",
        platform,
        "--result-file",
        result,
      ],
      { stdout: "pipe", stderr: "pipe" },
    )
    expect(child.exitCode).not.toBe(0)
    expect(child.stderr.toString()).toContain("evidence must run on that real OS/architecture")
    expect(existsSync(result)).toBe(false)
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
})
