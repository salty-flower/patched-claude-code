import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { DEFAULT_TARGET_VERSION } from "../lib/target"

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
  const swapStep = workflowStep("Configure audit swap")
  const previousCatalogStep = workflowStep("Fetch previous prompt catalog source tag")
  const promptReviewStep = workflowStep("Check generated prompt review notes")
  const ciReleaseId = "ci.$" + "{GITHUB_SHA::12}"

  expect(workflow).toContain(`TARGET_VERSION: "${DEFAULT_TARGET_VERSION}"`)
  expect(auditStep).toContain(`just ci-release-audit "$TARGET_VERSION" "${ciReleaseId}"`)
  expect(swapStep).toContain("sudo fallocate -l 8G /mnt/pcc-audit.swap")
  expect(swapStep).toContain("sudo swapon /mnt/pcc-audit.swap")
  expect(previousCatalogStep).toContain("git ls-remote --tags origin")
  expect(previousCatalogStep).toContain("git fetch --no-tags origin")
  expect(promptReviewStep).toContain("test -s dist/release-notes.md")
  expect(promptReviewStep).toContain("test -s dist/prompt-review.md")
  expect(promptReviewStep).toContain("^## Prompt review$")
  expect(workflow).toContain("sudo apt-get install -y just ripgrep")
  expect(workflow).toContain("rg --version")
  expect(workflow).toContain("prompts/catalog/")
  expect(workflow).toContain("dist/release-notes.md")
  expect(workflow).toContain("dist/prompt-review.md")
  expect(workflow).toContain("staging/${{ env.TARGET_VERSION }}/graph.patched/")
  expect(workflow).not.toContain("- name: Verify patches and contracts")
  expect(workflow).not.toContain("- name: Render patched bundle")
  expect(workflow).not.toContain("- name: Smoke patched bundle")
  expect(workflow).not.toContain("- name: Patch tests")
  expect(workflow).not.toContain("- name: Package release artifact")
  expect(workflow).not.toContain("- name: Create Nix source tag")
})

test("ci reuses the canonical stage in the release audit", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const checkStep = workflowStep("Check canonical stage")
  const uploadStep = workflowStep("Upload canonical stage")
  const reuseStep = workflowStep("Reuse canonical stage")

  expect(workflow).toContain("needs: [changes, canonical-platform-merge]")
  expect(uploadStep).toContain("canonical-stage-ubuntu-24.04-${{ env.TARGET_VERSION }}")
  expect(uploadStep).toContain("staging/${{ env.TARGET_VERSION }}/cli.js")
  expect(uploadStep).toContain("staging/${{ env.TARGET_VERSION }}/stage-manifest.json")
  expect(uploadStep).toContain("staging/${{ env.TARGET_VERSION }}/graph-manifest.json")
  expect(uploadStep).toContain("staging/${{ env.TARGET_VERSION }}/graph/")
  expect(uploadStep).toContain("staging/${{ env.TARGET_VERSION }}/canonical/cli.js")
  expect(uploadStep).toContain("staging/${{ env.TARGET_VERSION }}/canonical/platform-merge-report.json")
  expect(checkStep).toContain(".dualGraph != null")
  expect(checkStep).toContain('mergePolicy == "canonical-dual-graph-v1"')
  expect(checkStep).toContain("$stage/graph-manifest.json")
  expect(checkStep).toContain("$stage/canonical/platform-merge-report.json")
  expect(reuseStep).toContain("actions/download-artifact@v6")
  expect(reuseStep).toContain("canonical-stage-ubuntu-24.04-${{ env.TARGET_VERSION }}")
  expect(reuseStep).toContain("path: staging/${{ env.TARGET_VERSION }}")
})

test("ci handles workflow dispatch and rewritten push bases", () => {
  const classifyStep = workflowStep("Classify changed paths")
  const whitespaceStep = workflowStep("Check whitespace")

  expect(classifyStep).toContain('git cat-file -e "${base}^{commit}"')
  expect(classifyStep).toContain('git rev-parse "${head}^"')
  expect(whitespaceStep).toContain('"$EVENT_NAME" == "workflow_dispatch"')
  expect(whitespaceStep).toContain('git cat-file -e "${base}^{commit}"')
  expect(whitespaceStep).toContain('git rev-parse "${head}^"')
})

test("ci routes workflow and pre-commit wiring edits through tool tests", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")

  expect(workflow).toContain(".github/workflows/*|.pre-commit-config.yaml)")
  expect(workflow).toContain("runtime/*)")
  expect(workflow).toContain("runtime/macos-keychain.ts")
  expect(workflow).toContain("runtime/release-integrity.ts")
})
