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

  expect(workflow).toContain(`TARGET_VERSION: \${{ inputs.target_version || '${DEFAULT_TARGET_VERSION}' }}`)
  expect(auditStep).toContain(`just ci-release-audit "$TARGET_VERSION" "${ciReleaseId}"`)
  expect(workflow).not.toContain("timeout-minutes:")
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
  expect(checkStep).toContain('textAssetMaterialization == "zstd-decompress-v1"')
  expect(checkStep).toContain(".upstream.sha256")
  expect(checkStep).toContain(".materialized.sha256")
  expect(checkStep).toContain("$stage/graph-manifest.json")
  expect(checkStep).toContain("$stage/canonical/platform-merge-report.json")
  expect(reuseStep).toContain("actions/download-artifact@v6")
  expect(reuseStep).toContain("canonical-stage-ubuntu-24.04-${{ env.TARGET_VERSION }}")
  expect(reuseStep).toContain("path: staging/${{ env.TARGET_VERSION }}")
})

test("ci runs tool tests on macOS using the canonical stage", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const start = workflow.indexOf("  darwin-tool-test:\n")
  expect(start).toBeGreaterThanOrEqual(0)
  const next = workflow.indexOf("\n  darwin-obligation-evidence:\n", start)
  const job = workflow.slice(start, next === -1 ? workflow.length : next)

  expect(job).toContain("name: darwin-tool-test (macos-15)")
  expect(job).toContain("needs: [changes, canonical-platform-merge]")
  expect(job).toContain("if: needs.changes.outputs.full == 'true'")
  expect(job).toContain("runs-on: macos-15")
  expect(job).toContain("canonical-stage-ubuntu-24.04-${{ env.TARGET_VERSION }}")
  expect(job).toContain("run: bun run --cwd tools test")
  expect(job).not.toContain("obligation-evidence")
})

test("ci joins real-OS receipts before release admission", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const darwinEvidence = workflowStep("Record Darwin patch-obligation evidence")
  const linuxEvidence = workflowStep("Record Linux patch-obligation evidence")
  const renderForAdmission = workflowStep("Render patched graph for admission")
  const admission = workflowStep("Admit patch obligations")

  expect(workflow).toContain(
    "needs: [changes, canonical-platform-merge, darwin-tool-test, darwin-obligation-evidence, linux-obligation-evidence]",
  )
  expect(workflow).toContain("name: darwin-obligation-evidence (macos-15)")
  expect(workflow).toContain("name: linux-obligation-evidence (ubuntu-24.04)")
  expect(darwinEvidence).toContain('just obligation-evidence "$TARGET_VERSION" darwin-arm64')
  expect(workflow).toContain("patch-obligation-evidence-darwin-${{ env.TARGET_VERSION }}")
  expect(workflow).toContain("patch-obligation-evidence-linux-${{ env.TARGET_VERSION }}")
  expect(workflow).toContain("Reuse Darwin patch-obligation evidence")
  expect(workflow).toContain("Reuse Linux patch-obligation evidence")
  expect(linuxEvidence).toContain('just obligation-evidence "$TARGET_VERSION" linux-x64')
  expect(renderForAdmission).toContain('just render "$TARGET_VERSION"')
  expect(admission).toContain('just obligation-admission "$TARGET_VERSION"')
  expect(workflow).toContain("dist/patch-obligation-evidence/")
})

test("ci handles workflow dispatch and rewritten push bases", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const classifyStep = workflowStep("Classify changed paths")
  const whitespaceStep = workflowStep("Check whitespace")

  expect(workflow).toContain("TARGET_VERSION: ${{ inputs.target_version || '2.1.260' }}")
  expect(workflow).toContain('target_version:\n        description: "Claude Code version to audit"')
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
