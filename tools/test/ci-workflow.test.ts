import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { DEFAULT_TARGET_VERSION } from "../lib/target"

const ROOT = join(import.meta.dir, "..", "..")
const WORKFLOW = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")

function workflowStep(name: string, workflow = WORKFLOW): string {
  const start = workflow.indexOf(`- name: ${name}`)
  expect(start).toBeGreaterThanOrEqual(0)
  const next = workflow.indexOf("\n      - ", start + 1)
  return workflow.slice(start, next === -1 ? workflow.length : next)
}

function workflowJob(name: string): string {
  const start = WORKFLOW.indexOf(`\n  ${name}:\n`)
  expect(start).toBeGreaterThanOrEqual(0)
  const remaining = WORKFLOW.slice(start + 1)
  const next = remaining.search(/\n  [a-z][a-z-]*:\n/)
  return remaining.slice(0, next === -1 ? remaining.length : next)
}

test("ci does not split staged-bundle checks into separate just invocations", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")

  expect(workflow).not.toContain("- name: Stage target bundle")
  expect(workflow).not.toContain("- name: Test tools")
})

test("ci runs final packaging through a rendered-only declarative just target", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const auditStep = workflowStep("Run packaging audit")
  const swapStep = workflowStep("Configure audit swap")
  const previousCatalogStep = workflowStep("Fetch previous prompt catalog source tag")
  const promptReviewStep = workflowStep("Check generated prompt review notes")
  const ciReleaseId = "ci.$" + "{GITHUB_SHA::12}"

  expect(workflow).toContain(`TARGET_VERSION: \${{ inputs.target_version || '${DEFAULT_TARGET_VERSION}' }}`)
  expect(auditStep).toContain(`just ci-package-audit "$TARGET_VERSION" "${ciReleaseId}"`)
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

test("ci reuses the canonical stage in the parallel Linux runtime audit", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const checkStep = workflowStep("Check canonical stage")
  const uploadStep = workflowStep("Upload canonical stage")
  const reuseStep = workflowStep("Reuse canonical stage for Linux audit")

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
  expect(reuseStep).toContain("actions/download-artifact@v8.0.1")
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
  expect(job).toContain("brew install just coreutils")
  expect(job).toContain('echo "$(brew --prefix coreutils)/libexec/gnubin" >> "$GITHUB_PATH"')
  expect(job.indexOf("run: timeout --version")).toBeLessThan(job.indexOf("run: bun run --cwd tools test"))
  expect(job).not.toContain("obligation-evidence")
})

test("ci joins real-OS receipts before release admission", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const darwinEvidence = workflowStep("Record Darwin patch-obligation evidence")
  const linuxEvidence = workflowStep("Record Linux patch-obligation evidence")
  const verify = workflowJob("verify")
  const packaging = workflowStep("Run packaging audit", verify)

  expect(workflow).toContain(
    "needs: [changes, linux-release-audit, darwin-tool-test, darwin-obligation-evidence, linux-obligation-evidence]",
  )
  expect(workflow).toContain("name: darwin-obligation-evidence (macos-15)")
  expect(workflow).toContain("name: linux-obligation-evidence (ubuntu-24.04)")
  expect(darwinEvidence).toContain('just obligation-evidence "$TARGET_VERSION" darwin-arm64')
  expect(workflow).toContain("patch-obligation-evidence-darwin-${{ env.TARGET_VERSION }}")
  expect(workflow).toContain("patch-obligation-evidence-linux-${{ env.TARGET_VERSION }}")
  expect(workflow).toContain("Reuse Darwin patch-obligation evidence")
  expect(workflow).toContain("Reuse Linux patch-obligation evidence")
  expect(linuxEvidence).toContain('just obligation-evidence "$TARGET_VERSION" linux-x64')
  expect(packaging).toContain('just ci-package-audit "$TARGET_VERSION"')
  expect(verify).toContain("if: needs.changes.outputs.full == 'true'")
  expect(verify).not.toContain("always()")
  expect(verify).not.toContain("continue-on-error")
  expect(verify).not.toContain("just render")
  expect(verify).not.toContain("just ci-release-audit")
  expect(verify).not.toContain("just ci-runtime-audit")
  expect(verify).not.toContain("bun run --cwd tools test")
  expect(verify.indexOf("Reuse Darwin patch-obligation evidence")).toBeLessThan(verify.indexOf("Run packaging audit"))
  expect(verify.indexOf("Reuse Linux patch-obligation evidence")).toBeLessThan(verify.indexOf("Run packaging audit"))
  expect(verify.indexOf("Run packaging audit")).toBeLessThan(verify.indexOf("Upload CI artifact"))
  expect(workflow).toContain("dist/patch-obligation-evidence/")
})

test("ci overlaps the complete Linux audit with Darwin tests and platform evidence", () => {
  const audit = workflowJob("linux-release-audit")
  expect(audit).toContain("needs: [changes, canonical-platform-merge]")
  expect(audit).toContain("if: needs.changes.outputs.full == 'true'")
  expect(audit).toContain('just ci-runtime-audit "$TARGET_VERSION"')
  expect(audit).not.toContain("darwin-tool-test")
  expect(audit).not.toContain("obligation-evidence")
  expect(audit).not.toContain("always()")
  expect(audit).not.toContain("continue-on-error")
  expect(audit.indexOf("Configure Linux runtime audit swap")).toBeLessThan(audit.indexOf("Run Linux runtime audit"))
  expect(audit.indexOf("Run Linux runtime audit")).toBeLessThan(audit.indexOf("Upload audited stage"))

  const upload = workflowStep("Upload audited stage", audit)
  const reuse = workflowStep("Reuse audited stage", workflowJob("verify"))
  expect(upload).toContain("actions/upload-artifact@v7.0.1")
  expect(upload).toContain("name: audited-stage-${{ env.TARGET_VERSION }}")
  expect(upload).toContain("path: staging/${{ env.TARGET_VERSION }}/")
  expect(upload).toContain("if-no-files-found: error")
  expect(reuse).toContain("actions/download-artifact@v8.0.1")
  expect(reuse).toContain("name: audited-stage-${{ env.TARGET_VERSION }}")
  expect(reuse).toContain("path: staging/${{ env.TARGET_VERSION }}")
  expect(reuse).not.toContain("run-id:")
  expect(reuse).not.toContain("repository:")
})

test("ci checks PTY dependencies before expensive Linux rendering", () => {
  for (const [jobName, dependencyStep, renderStep] of [
    ["linux-release-audit", "Check Linux audit dependencies", "Run Linux runtime audit"],
    ["linux-obligation-evidence", "Check Linux evidence PTY dependencies", "Record Linux patch-obligation evidence"],
  ] as const) {
    const job = workflowJob(jobName)
    const dependencies = workflowStep(dependencyStep, job)
    expect(dependencies).toContain("timeout --version")
    expect(dependencies).toContain("script --version")
    expect(job.indexOf(dependencyStep)).toBeLessThan(job.indexOf(renderStep))
  }
})

test("ci handles workflow dispatch and rewritten push bases", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "ci.yml"), "utf8")
  const coordinatesStep = workflowStep("Resolve CI target version")
  const classifyStep = workflowStep("Classify changed paths")
  const whitespaceStep = workflowStep("Check whitespace")

  expect(workflow).toContain("TARGET_VERSION: ${{ inputs.target_version || '2.1.263' }}")
  expect(workflow).toContain('target_version:\n        description: "Claude Code version to audit"')
  expect(workflow).toContain("target_version: ${{ steps.coordinates.outputs.target_version }}")
  expect(workflow).toContain("TARGET_VERSION: ${{ needs.changes.outputs.target_version }}")
  expect(coordinatesStep).toContain('target_version="${REQUESTED_TARGET_VERSION:-$DEFAULT_TARGET_VERSION}"')
  expect(coordinatesStep).toContain("^release:\\ claude-code-([0-9]+\\.[0-9]+\\.[0-9]+)-patch\\.[0-9]+$")
  expect(coordinatesStep).toContain('target_version="${BASH_REMATCH[1]}"')
  expect(coordinatesStep).toContain('echo "target_version=$target_version" | tee -a "$GITHUB_OUTPUT"')
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
  expect(workflow).toContain("patch-obligations/*|prompt-identities/*|reference/*")
  expect(workflow).toContain("runtime/macos-keychain.ts")
  expect(workflow).toContain("runtime/release-integrity.ts")
})
