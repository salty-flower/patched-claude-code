import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"

const ROOT = join(import.meta.dir, "..", "..")

function workflowStep(name: string): string {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const start = workflow.indexOf(`- name: ${name}`)
  expect(start).toBeGreaterThanOrEqual(0)
  const next = workflow.indexOf("\n      - name:", start + 1)
  return workflow.slice(start, next === -1 ? workflow.length : next)
}

test("ci does not split staged-bundle checks into separate just invocations", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")

  expect(workflow).not.toContain("- name: Stage target bundle")
  expect(workflow).not.toContain("- name: Test tools")
})

test("ci runs release audit through one declarative just target", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const auditStep = workflowStep("Run release audit")
  const ciReleaseId = "ci.$" + "{GITHUB_SHA::12}"

  expect(workflow).toContain('TARGET_VERSION: "2.1.138"')
  expect(auditStep).toContain(`just ci-release-audit "$TARGET_VERSION" "${ciReleaseId}"`)
  expect(workflow).not.toContain("- name: Verify patches and contracts")
  expect(workflow).not.toContain("- name: Render patched bundle")
  expect(workflow).not.toContain("- name: Smoke patched bundle")
  expect(workflow).not.toContain("- name: Patch tests")
  expect(workflow).not.toContain("- name: Package release artifact")
  expect(workflow).not.toContain("- name: Create Nix source tag")
})

test("ci routes workflow and pre-commit wiring edits through tool tests", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")

  expect(workflow).toContain(".github/workflows/*|.pre-commit-config.yaml)")
})
