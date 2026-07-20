import { readFileSync } from "node:fs"
import { join } from "node:path"
import { expect, test } from "bun:test"

const ROOT = join(import.meta.dir, "..", "..")

function workflowStep(name: string): string {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "release.yml"), "utf8")
  const start = workflow.indexOf(`- name: ${name}`)
  expect(start).toBeGreaterThanOrEqual(0)
  const next = workflow.indexOf("\n      - name:", start + 1)
  return workflow.slice(start, next === -1 ? workflow.length : next)
}

test("release workflow renders once and reuses the rendered bundle", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "release.yml"), "utf8")
  const renderStep = workflowStep("Verify and render patched bundle")
  const smokeStep = workflowStep("Smoke patched bundle")
  const patchTestStep = workflowStep("Patch tests")
  const packageStep = workflowStep("Package release artifact")
  const sourceStep = workflowStep("Create Nix source tag")

  expect(workflow).not.toContain("- name: Stage target bundle")
  expect(workflow).not.toContain("- name: Verify patches and contracts")
  expect(workflow).not.toContain("- name: Render patched bundle")
  expect(renderStep).toContain('just render "${{ steps.coord.outputs.version }}"')
  expect(smokeStep).toContain('just smoke-rendered "${{ steps.coord.outputs.version }}"')
  expect(patchTestStep).toContain('just patch-test-rendered "${{ steps.coord.outputs.version }}"')
  expect(packageStep).toContain(
    'just package-rendered "${{ steps.coord.outputs.version }}" "${{ steps.coord.outputs.release_id }}"',
  )
  expect(sourceStep).toContain(
    'just release-source-rendered "${{ steps.coord.outputs.version }}" "${{ steps.coord.outputs.release_id }}"',
  )
})

test("release workflow defaults to the current target version", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "release.yml"), "utf8")

  expect(workflow).toContain('default: "2.1.215"')
})
