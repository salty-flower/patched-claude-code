import { readFileSync } from "node:fs"
import { join } from "node:path"
import { expect, test } from "bun:test"

const ROOT = join(import.meta.dir, "..", "..")

function workflowStep(name: string): string {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "auto-release.yml"), "utf8")
  const start = workflow.indexOf(`- name: ${name}`)
  expect(start).toBeGreaterThanOrEqual(0)
  const next = workflow.indexOf("\n      - name:", start + 1)
  return workflow.slice(start, next === -1 ? workflow.length : next)
}

test("auto-release only creates Nix source refs after canonical promotion", () => {
  const packageStep = workflowStep("Verify, render, smoke, and package")
  expect(packageStep).not.toContain("just release-source")
  expect(packageStep).not.toContain("bun ./cli.js --version")

  const pushRefs = workflowStep("Create and push Nix source refs")
  const lines = pushRefs.split("\n").map((line) => line.trim())
  const exactTagPush = 'git push origin "refs/tags/$tag" --force'
  const latestPush = 'git push origin "refs/tags/$tag:refs/heads/claude-code-latest" --force'

  expect(lines).toContain("if: steps.detect.outputs.action == 'promote'")
  expect(lines).toContain('just release-source-rendered "${{ steps.detect.outputs.version }}" "patch.1"')
  expect(lines).toContain("bun ./cli.js --version")
  expect(lines).toContain(exactTagPush)
  expect(lines.filter((line) => line === latestPush)).toHaveLength(1)
})

test("auto-release reuses rendered bundle across release checks", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "auto-release.yml"), "utf8")
  const packageStep = workflowStep("Verify, render, smoke, and package")

  expect(workflow).not.toContain("- name: Stage candidate")
  expect(packageStep).toContain('just render "${{ steps.detect.outputs.version }}"')
  expect(packageStep).toContain('just smoke-rendered "${{ steps.detect.outputs.version }}"')
  expect(packageStep).toContain('just patch-test-rendered "${{ steps.detect.outputs.version }}"')
  expect(packageStep).toContain('just package-rendered "${{ steps.detect.outputs.version }}" "patch.1"')
  expect(packageStep).not.toContain('just verify "${{ steps.detect.outputs.version }}"')
  expect(packageStep).not.toContain('just smoke "${{ steps.detect.outputs.version }}"')
  expect(packageStep).not.toContain('just patch-test "${{ steps.detect.outputs.version }}"')
  expect(packageStep).not.toContain('just package "${{ steps.detect.outputs.version }}" "patch.1"')
})
