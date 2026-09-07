import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"

const ROOT = join(import.meta.dir, "..", "..")

function workflowStep(name: string): string {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "auto-release.yml"), "utf8")
  const start = workflow.indexOf(`- name: ${name}`)
  expect(start).toBeGreaterThanOrEqual(0)
  const next = workflow.indexOf("\n      - name:", start + 1)
  return workflow.slice(start, next === -1 ? workflow.length : next)
}

test("auto-release only creates Nix source refs after canonical promotion", () => {
  const renderStep = workflowStep("Verify, render, and smoke")
  expect(renderStep).not.toContain("just release-source")
  expect(renderStep).not.toContain("bun ./cli.js --version")

  const pushRefs = workflowStep("Create and push Nix source refs")
  const lines = pushRefs.split("\n").map((line) => line.trim())
  const exactTagPush = 'git push origin "refs/tags/$tag" --force'
  const latestPush = 'git push origin "refs/tags/$tag:refs/heads/claude-code-latest" --force'

  expect(lines).toContain(
    "if: steps.detect.outputs.action == 'promote' && steps.identity.outputs.status == 'ready-existing'",
  )
  expect(lines).toContain('just _release-source-rendered "${{ steps.detect.outputs.version }}" "patch.1"')
  expect(lines).toContain("bun ./cli.js --version")
  expect(lines).toContain(exactTagPush)
  expect(lines.filter((line) => line === latestPush)).toHaveLength(1)
})

test("auto-release reuses rendered bundle across release checks", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "auto-release.yml"), "utf8")
  const renderStep = workflowStep("Verify, render, and smoke")
  const previousCatalogStep = workflowStep("Fetch previous prompt catalog source tag")
  const packageStep = workflowStep("Package release artifact")

  expect(workflow).not.toContain("- name: Stage candidate")
  expect(renderStep).toContain('just render "${{ steps.detect.outputs.version }}"')
  expect(renderStep).toContain('just smoke-rendered "${{ steps.detect.outputs.version }}"')
  expect(renderStep).toContain('just _patch-test-rendered "${{ steps.detect.outputs.version }}"')
  expect(previousCatalogStep).toContain("git ls-remote --tags origin")
  expect(previousCatalogStep).toContain("git fetch --no-tags origin")
  expect(packageStep).toContain('just _package-rendered "${{ steps.detect.outputs.version }}" "patch.1"')
  expect(packageStep).toContain("steps.identity.outputs.status == 'ready-existing'")
  expect(workflow).toContain("dist/prompt-review.md")
})

test("auto-release audits both canonical stage layouts before promotion", () => {
  const checkStep = workflowStep("Check canonical stage before promotion")

  expect(checkStep).toContain(".dualGraph != null")
  expect(checkStep).toContain('mergePolicy == "canonical-dual-graph-v1"')
  expect(checkStep).toContain('textAssetMaterialization == "zstd-decompress-v1"')
  expect(checkStep).toContain('.upstream.sha256')
  expect(checkStep).toContain('.materialized.sha256')
  expect(checkStep).toContain("$stage/graph-manifest.json")
  expect(checkStep).toContain("$stage/canonical/platform-merge-report.json")
})

test("auto-release commits only exact-only identity transitions to a bot PR", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "auto-release.yml"), "utf8")
  const prepareStep = workflowStep("Prepare prompt identity ledger")
  const uploadStep = workflowStep("Upload prompt identity review")
  const commitStep = workflowStep("Commit exact-only prompt identity ledger")
  const blockStep = workflowStep("Block unresolved prompt identities")

  expect(workflow).toContain("pull-requests: write")
  expect(workflow).toContain("group: auto-release")
  expect(workflow).toContain("cancel-in-progress: false")
  expect(prepareStep).toContain('just prompt-identity-prepare "$version"')
  expect(uploadStep).toContain("actions/upload-artifact@v7.0.1")
  expect(commitStep).toContain("if: steps.identity.outputs.status == 'finalized-exact-only'")
  expect(commitStep).toContain('branch="automation/prompt-identities-$version"')
  expect(commitStep).toContain('git push origin "HEAD:refs/heads/$branch"')
  expect(commitStep).not.toContain("--force")
  expect(commitStep).toContain("gh pr create")
  expect(blockStep).toContain("if: steps.identity.outputs.status == 'review-required'")
  expect(blockStep).toContain("exit 1")
})
