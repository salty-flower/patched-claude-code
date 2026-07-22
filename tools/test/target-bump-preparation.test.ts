import { expect, test } from "bun:test"
import {
  buildTargetBumpSteps,
  executeTargetBumpSteps,
  renderTargetBumpSummary,
  type TargetBumpPreparationReport,
} from "../patch/prepare-target-bump"

test("target bump preparation defines one ordered deterministic lane", () => {
  const steps = buildTargetBumpSteps("/repo", "2.1.218", "direct")

  expect(steps.map(({ id }) => id)).toEqual([
    "stage",
    "verify-patches",
    "verify-native-contract",
    "tool-tests",
    "render",
    "smoke",
    "patch-tests",
    "prompt-identities",
  ])
  expect(steps[0]?.command).toEqual([
    "bun",
    "run",
    "tools/patch/stage-target.ts",
    "--version",
    "2.1.218",
    "--source",
    "direct",
  ])
  expect(steps.find(({ id }) => id === "tool-tests")?.env).toEqual({ TARGET_VERSION: "2.1.218" })
  expect(steps.find(({ id }) => id === "render")?.command).toContain("--skip-verify")
  expect(steps.find(({ id }) => id === "prompt-identities")?.command).toContain(
    "/repo/dist/prompt-identity-bump-2.1.218.json",
  )
  expect(steps.find(({ id }) => id === "verify-patches")?.logFile).toBe(
    "/repo/dist/target-bump-2.1.218.logs/verify-patches.log",
  )
})

test("target bump preparation stops dependent work after the first failure", () => {
  const steps = buildTargetBumpSteps("/repo", "2.1.218", "npm")
  const started: string[] = []
  const results = executeTargetBumpSteps(
    steps,
    ({ id }) => (id === "verify-patches" ? 7 : 0),
    ({ id }) => started.push(id),
  )

  expect(started).toEqual(["stage", "verify-patches"])
  expect(results.map(({ status }) => status)).toEqual([
    "passed",
    "failed",
    "skipped",
    "skipped",
    "skipped",
    "skipped",
    "skipped",
    "skipped",
  ])
  expect(results[1]?.exitCode).toBe(7)
})

test("target bump summary renders a compact manual handoff", () => {
  const steps = executeTargetBumpSteps(buildTargetBumpSteps("/repo", "2.1.218", "canonical").slice(0, 2), () => 0).map(
    (step) => ({ ...step, durationMs: step.id === "stage" ? 1250 : 80 }),
  )
  const report: TargetBumpPreparationReport = {
    schema: 1,
    scope: "target-bump-preparation",
    target: { version: "2.1.218", source: "canonical" },
    status: "manual-review-ready",
    steps,
    promptIdentity: null,
    manualGates: ["review drift", "exercise TUI"],
    reportFile: "/repo/dist/target-bump-2.1.218.json",
    logsRoot: "/repo/dist/target-bump-2.1.218.logs",
  }

  expect(renderTargetBumpSummary(report)).toBe(`Target bump: 2.1.218 (canonical)

PASS  stage                  1.3s
PASS  verify-patches         0.1s

Outcome: manual-review-ready
Report:  /repo/dist/target-bump-2.1.218.json
Logs:    /repo/dist/target-bump-2.1.218.logs

Remaining manual gates:
  - review drift
  - exercise TUI
`)
})
