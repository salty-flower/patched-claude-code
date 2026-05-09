import { readFileSync } from "node:fs"
import { join } from "node:path"
import { expect, test } from "bun:test"

const ROOT = join(import.meta.dir, "..", "..")

function workflowStep(name: string): string {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const start = workflow.indexOf(`- name: ${name}`)
  expect(start).toBeGreaterThanOrEqual(0)
  const next = workflow.indexOf("\n      - name:", start + 1)
  return workflow.slice(start, next === -1 ? workflow.length : next)
}

test("ci stages target bundle before running integration-heavy tool tests", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const stageIndex = workflow.indexOf("- name: Stage target bundle")
  const testIndex = workflow.indexOf("- name: Test tools")

  expect(stageIndex).toBeGreaterThanOrEqual(0)
  expect(testIndex).toBeGreaterThanOrEqual(0)
  expect(stageIndex).toBeLessThan(testIndex)
  expect(workflowStep("Test tools")).toContain("bun run --cwd tools test")
})

test("ci routes workflow and pre-commit wiring edits through tool tests", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")

  expect(workflow).toContain(".github/workflows/*|.pre-commit-config.yaml)")
})
