import { readFileSync } from "node:fs"
import { join } from "node:path"
import { expect, test } from "bun:test"
import { DEFAULT_TARGET_VERSION } from "../lib/target"

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
  const reuseStep = workflowStep("Reuse CI artifact (release-commit path)")
  const renderStep = workflowStep("Verify and render patched bundle")
  const smokeStep = workflowStep("Smoke patched bundle")
  const patchTestStep = workflowStep("Patch tests")
  const previousCatalogStep = workflowStep("Fetch previous prompt catalog source tag")
  const packageStep = workflowStep("Package release artifact")
  const sourceStep = workflowStep("Create Nix source tag")

  expect(workflow).not.toContain("- name: Stage target bundle")
  expect(workflow).not.toContain("- name: Verify patches and contracts")
  expect(workflow).not.toContain("- name: Render patched bundle")
  expect(workflow).toContain("permissions:\n  actions: read\n  checks: read\n  contents: write")
  expect(reuseStep).toContain('echo "No CI run found for release commit $GITHUB_SHA — aborting release" >&2')
  expect(reuseStep).not.toContain("No CI run found for this SHA — will render from scratch")
  expect(reuseStep).toContain("deadline=$((SECONDS + 1800))")
  expect(reuseStep).toContain('mkdir -p bin runtime "staging/$version"')
  expect(reuseStep).toContain('cp ci-artifact/cli.js "staging/$version/cli.patched.js"')
  expect(reuseStep).toContain("install -m755 ci-artifact/bin/claude-patched bin/claude-patched")
  expect(reuseStep).toContain("cp ci-artifact/runtime/macos-keychain.ts runtime/macos-keychain.ts")
  expect(reuseStep).toContain("cp ci-artifact/runtime/system-prompt-overrides.ts runtime/system-prompt-overrides.ts")
  expect(reuseStep).toContain("cp -R ci-artifact/prompts/catalog prompts/catalog")
  expect(renderStep).toContain('just render "${{ steps.coord.outputs.version }}"')
  expect(smokeStep).toContain('just smoke-rendered "${{ steps.coord.outputs.version }}"')
  expect(patchTestStep).toContain('just _patch-test-rendered "${{ steps.coord.outputs.version }}"')
  expect(previousCatalogStep).toContain("git ls-remote --tags origin")
  expect(previousCatalogStep).toContain("git fetch --no-tags origin")
  expect(packageStep).toContain(
    'just _package-rendered "${{ steps.coord.outputs.version }}" "${{ steps.coord.outputs.release_id }}"',
  )
  expect(sourceStep).toContain(
    'just _release-source-rendered "${{ steps.coord.outputs.version }}" "${{ steps.coord.outputs.release_id }}"',
  )
  expect(workflow).toContain("prompts/catalog/")
  expect(workflow).toContain("runtime/macos-keychain.ts")
  expect(workflow).toContain("dist/prompt-review.md")
})

test("release workflow defaults to the current target version", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "release.yml"), "utf8")

  expect(workflow).toContain(`default: "${DEFAULT_TARGET_VERSION}"`)
})
