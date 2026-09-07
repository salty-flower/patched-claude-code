import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { DEFAULT_TARGET_VERSION } from "../lib/target"

const ROOT = join(import.meta.dir, "..", "..")

function recipeBlock(name: string): string {
  const justfile = readFileSync(join(ROOT, "justfile"), "utf8")
  const start = justfile.indexOf(`\n${name}`)
  expect(start).toBeGreaterThanOrEqual(0)
  const next = justfile.indexOf("\n\n", start + 1)
  return justfile.slice(start + 1, next === -1 ? justfile.length : next)
}

test("Just defaults to the shared active target", () => {
  const justfile = readFileSync(join(ROOT, "justfile"), "utf8")
  expect(justfile).toContain(`target := env_var_or_default("TARGET_VERSION", "${DEFAULT_TARGET_VERSION}")`)
})

test("ci release audit target declares shared staged-bundle work once", () => {
  const recipe = recipeBlock("ci-release-audit")
  expect(recipe).toContain("(ci-runtime-audit version source)")
  expect(recipe).toContain("(ci-package-audit version release_id)")
  const runtime = recipeBlock("ci-runtime-audit")
  const packaging = recipeBlock("ci-package-audit")

  expect(runtime).toContain("(tool-test version source)")
  expect(runtime).toContain("(render version source)")
  expect(runtime.indexOf("(prompt-identity-check version)")).toBeGreaterThan(runtime.indexOf("(render version source)"))
  expect(runtime.indexOf("(prompt-identity-check version)")).toBeLessThan(runtime.indexOf("(tool-test version source)"))
  expect(runtime).toContain("(smoke-rendered version)")
  expect(runtime).toContain("(_patch-test-rendered version)")
  expect(runtime).toContain("(_api-stub-smoke-rendered version resume_transcript_timeout)")
  expect(packaging).not.toContain("(render ")
  expect(packaging).toContain("(_package-rendered version release_id)")
  expect(packaging).toContain("(_release-source-rendered version release_id)")
  expect(packaging).toContain("git ls-tree -r --name-only")
  expect(packaging).toContain("shopt -s nullglob globstar")
  expect(packaging).toContain("prompts/catalog/entries/**/*.md")
})

test("tool tests receive the selected target version", () => {
  const recipe = recipeBlock("tool-test")

  expect(recipe).toContain('TARGET_VERSION="{{version}}" bun run --cwd tools test')
})

test("release dry target reuses the rendered bundle", () => {
  const recipe = recipeBlock("release-dry")

  expect(recipe).toContain('just render "{{version}}" "{{source}}"')
  expect(recipe).toContain('just smoke-rendered "{{version}}"')
  expect(recipe).toContain('just _patch-test-rendered "{{version}}"')
  expect(recipe).toContain('just _package-rendered "{{version}}" "{{release_id}}"')
  expect(recipe).not.toContain("(smoke version source)")
  expect(recipe).not.toContain("(patch-test version source)")
  expect(recipe).not.toContain("(package version release_id source)")
})

test("render target depends on verify but skips render-patched internal verification", () => {
  const recipe = recipeBlock("render")

  expect(recipe).toContain("render version=target source=source: (verify version source)")
  expect(recipe).toContain('render-patched.ts "{{version}}" --skip-verify')
})

test("target bumps expose one automated preparation entrypoint", () => {
  const recipe = recipeBlock("bump-prepare")

  expect(recipe).toContain("tools/patch/prepare-target-bump.ts")
  expect(recipe).toContain('--version "{{version}}"')
  expect(recipe).toContain('--source "{{source}}"')
})

test("release packaging requires bundle-bound obligation admission", () => {
  const packageRecipe = recipeBlock("_package-rendered")
  const admissionRecipe = recipeBlock("obligation-admission")

  expect(packageRecipe).toContain("(obligation-admission version)")
  expect(admissionRecipe).toContain("verify-patch-obligations.ts")
  expect(admissionRecipe).toContain("--mode admission")
  expect(admissionRecipe).toContain("dist/patch-obligation-evidence/{{version}}")
})

test("api stub smoke renders once and runs the complete local PTY matrix", () => {
  const recipe = recipeBlock("api-stub-smoke")
  const renderedRecipe = recipeBlock("_api-stub-smoke-rendered")

  expect(recipe).toContain("api-stub-smoke version=target source=source resume_timeout=resume_transcript_timeout:")
  expect(recipe).toContain("(render version source)")
  expect(recipe).toContain("(_api-stub-smoke-rendered version resume_timeout)")
  expect(renderedRecipe).toContain("_api-stub-smoke-rendered version=target resume_timeout=resume_transcript_timeout:")
  expect(renderedRecipe).toContain('oauth-fable-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js"')
  expect(renderedRecipe).toContain('tui-stub-smoke.ts --bundle "staging/{{version}}/cli.patched.js"')
  expect(renderedRecipe).toContain(
    'ask-user-question-tui-smoke.ts --version "{{version}}" --bundle "staging/{{version}}/cli.patched.js"',
  )
  expect(renderedRecipe).toContain('thinking-stream-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js"')
  expect(renderedRecipe).toContain(
    'resume-transcript-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout-seconds "{{resume_timeout}}"',
  )
  expect(renderedRecipe).toContain('background-agent-interrupt-pty.ts --bundle "staging/{{version}}/cli.patched.js"')
  expect(renderedRecipe).not.toContain(
    'oauth-fable-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout',
  )
  expect(renderedRecipe).not.toContain(
    'background-agent-interrupt-pty.ts --bundle "staging/{{version}}/cli.patched.js" --timeout',
  )
})

test("Agent interrupt playground renders once and opens the interactive local stub", () => {
  const recipe = recipeBlock("agent-interrupt-playground")

  expect(recipe).toContain("agent-interrupt-playground version=target source=source:")
  expect(recipe).toContain("(render version source)")
  expect(recipe).toContain('interactive-agent-interrupt-stub.ts --bundle "staging/{{version}}/cli.patched.js"')
})

test("public lifecycle recipes delegate rendered work to one implementation", () => {
  expect(recipeBlock("smoke")).toContain("(smoke-rendered version)")
  expect(recipeBlock("patch-test")).toContain("(_patch-test-rendered version)")
  expect(recipeBlock("package")).toContain("(_package-rendered version release_id)")
  expect(recipeBlock("release-source")).toContain("(_release-source-rendered version release_id)")
})
