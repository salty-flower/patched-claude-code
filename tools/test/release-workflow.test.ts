// biome-ignore-all lint/suspicious/noTemplateCurlyInString: GitHub Actions expressions are literal workflow syntax.
import { expect, test } from "bun:test"
import { mkdtempSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
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
  const reuseStep = workflowStep("Reuse audited CI artifact")
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
  expect(reuseStep).toContain('mkdir -p bin runtime dist "staging/$version"')
  expect(reuseStep).toContain('cp ci-artifact/cli.js "staging/$version/cli.patched.js"')
  expect(reuseStep).toContain('cp -R ci-artifact/staging/"$version"/graph.patched "staging/$version/graph.patched"')
  expect(reuseStep).toContain("install -m755 ci-artifact/bin/claude-patched bin/claude-patched")
  expect(reuseStep).toContain("cp ci-artifact/runtime/macos-keychain.ts runtime/macos-keychain.ts")
  expect(reuseStep).toContain("cp ci-artifact/runtime/release-integrity.ts runtime/release-integrity.ts")
  expect(reuseStep).toContain("cp ci-artifact/runtime/system-prompt-overrides.ts runtime/system-prompt-overrides.ts")
  expect(reuseStep).toContain("cp -R ci-artifact/prompts/catalog prompts/catalog")
  expect(reuseStep).toContain("cp -R ci-artifact/dist/patch-obligation-evidence dist/patch-obligation-evidence")
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
  expect(workflow).toContain("runtime/release-integrity.ts")
  expect(workflow).toContain("dist/prompt-review.md")
})

test("release workflow defaults to the current target version", () => {
  const workflow = readFileSync(join(ROOT, ".github", "workflows", "release.yml"), "utf8")

  expect(workflow).toContain(`default: "${DEFAULT_TARGET_VERSION}"`)
})

test("explicit dispatch reuses the same restoration path; ordinary dispatch still renders", () => {
  const step = workflowStep("Reuse audited CI artifact")
  expect(step).toContain("(github.event_name == 'push' && startsWith(github.ref, 'refs/heads/')) ||")
  expect(step).toContain("(github.event_name == 'workflow_dispatch' && inputs.ci_run_id != '')")
  expect(step).toContain("REQUESTED_CI_RUN_ID: ${{ inputs.ci_run_id }}")
  expect(workflowStep("Verify and render patched bundle")).toContain("if: steps.reuse.outputs.reused != 'true'")
})

function runReuseGate(
  overrides: {
    sha?: string
    path?: string
    status?: string
    conclusion?: string
    missingArtifact?: boolean
    explicit?: boolean
  } = {},
) {
  const step = workflowStep("Reuse audited CI artifact")
  const body = step
    .slice(step.indexOf("        run: |\n") + "        run: |\n".length)
    .split("\n")
    .map((line) => line.replace(/^ {10}/, ""))
    .join("\n")
    .split("\ncp ci-artifact/cli.js cli.js")[0]
    .replaceAll("${{ steps.coord.outputs.version }}", "2.1.260")
  const directory = mkdtempSync(join(tmpdir(), "release-reuse-gate-"))
  try {
    return Bun.spawnSync(
      [
        "bash",
        "-c",
        `
gh() {
  if [[ "$1" == "api" ]]; then
    if [[ -n "\${watched:-}" ]]; then
      printf '%s' "$RUN_METADATA" | jq '.status = "completed" | .conclusion = "success"'
    else
      printf '%s' "$RUN_METADATA"
    fi
  elif [[ "$1 $2" == "run list" ]]; then
    printf '123'
  elif [[ "$1 $2" == "run watch" ]]; then
    [[ "$3 $4" == "123 --exit-status" ]] || return 1
    watched=true
    echo watched
  elif [[ "$1 $2" == "run download" ]]; then
    [[ "$3 $4 $5 $6 $7" == "123 --name patched-claude-code-2.1.260 --dir ci-artifact" ]] || return 1
    [[ "$MISSING_ARTIFACT" != "true" ]]
  else
    return 1
  fi
}
${body}
`,
      ],
      {
        cwd: directory,
        env: {
          ...process.env,
          GITHUB_SHA: "same-commit",
          GITHUB_REPOSITORY: "owner/repo",
          GITHUB_OUTPUT: join(directory, "output"),
          REQUESTED_CI_RUN_ID: overrides.explicit === false ? "" : "123",
          MISSING_ARTIFACT: String(overrides.missingArtifact ?? false),
          RUN_METADATA: JSON.stringify({
            head_sha: overrides.sha ?? "same-commit",
            path: overrides.path ?? ".github/workflows/ci.yml",
            status: overrides.status ?? "completed",
            conclusion: overrides.conclusion ?? "success",
          }),
        },
      },
    )
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
}

test("audited reuse accepts a successful same-commit target artifact", () => {
  const result = runReuseGate()
  expect(result.stderr.toString()).toBe("")
  expect(result.exitCode).toBe(0)
})

test("audited reuse blocks wrong commit and wrong workflow", () => {
  for (const overrides of [{ sha: "other-commit" }, { path: ".github/workflows/release.yml" }]) {
    const result = runReuseGate(overrides)
    expect(result.exitCode).toBe(1)
    expect(result.stderr.toString()).toContain("this exact commit")
  }
})

test("audited reuse blocks failed, cancelled, and skipped CI", () => {
  for (const conclusion of ["failure", "cancelled", "skipped"]) {
    const result = runReuseGate({ conclusion })
    expect(result.exitCode).toBe(1)
    expect(result.stderr.toString()).toContain("CI run did not succeed")
  }
})

test("explicit CI reuse fails closed on a missing target artifact", () => {
  const result = runReuseGate({ missingArtifact: true })
  expect(result.exitCode).toBe(1)
  expect(result.stderr.toString()).toContain("lacks the target artifact patched-claude-code-2.1.260")
  expect(result.stdout.toString()).not.toContain("will render from scratch")
})

test("release-commit missing artifact preserves the existing render fallback", () => {
  const result = runReuseGate({ missingArtifact: true, explicit: false })
  expect(result.exitCode).toBe(0)
  expect(result.stdout.toString()).toContain("will render from scratch")
})

test("audited reuse watches an unfinished run with exit-status and rechecks completion", () => {
  const result = runReuseGate({ status: "in_progress", conclusion: "" })
  expect(result.exitCode).toBe(0)
  expect(result.stdout.toString()).toContain("watched")
})
