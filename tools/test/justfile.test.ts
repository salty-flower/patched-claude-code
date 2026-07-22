import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"

const ROOT = join(import.meta.dir, "..", "..")

function recipeBlock(name: string): string {
  const justfile = readFileSync(join(ROOT, "justfile"), "utf8")
  const start = justfile.indexOf(`\n${name}`)
  expect(start).toBeGreaterThanOrEqual(0)
  const next = justfile.indexOf("\n\n", start + 1)
  return justfile.slice(start + 1, next === -1 ? justfile.length : next)
}

test("ci release audit target declares shared staged-bundle work once", () => {
  const recipe = recipeBlock("ci-release-audit")

  expect(recipe).toContain("(tool-test version source)")
  expect(recipe).toContain("(render version source)")
  expect(recipe).toContain("(smoke-rendered version)")
  expect(recipe).toContain("(patch-test-rendered version)")
  expect(recipe).toContain("(oauth-fable-smoke-rendered version resume_transcript_timeout)")
  expect(recipe).toContain("(package-rendered version release_id)")
  expect(recipe).toContain("(release-source-rendered version release_id)")
  expect(recipe).toContain("git ls-tree -r --name-only")
  expect(recipe).toContain("shopt -s nullglob globstar")
  expect(recipe).toContain("prompts/catalog/entries/**/*.md")
})

test("tool tests receive the selected target version", () => {
  const recipe = recipeBlock("tool-test")

  expect(recipe).toContain('TARGET_VERSION="{{version}}" bun run --cwd tools test')
})

test("release dry target reuses the rendered bundle", () => {
  const recipe = recipeBlock("release-dry")

  expect(recipe).toContain("(render version source)")
  expect(recipe).toContain("(smoke-rendered version)")
  expect(recipe).toContain("(patch-test-rendered version)")
  expect(recipe).toContain("(package-rendered version release_id)")
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

test("api stub smoke can run with or without rendering first", () => {
  const recipe = recipeBlock("api-stub-smoke")
  const renderedRecipe = recipeBlock("api-stub-smoke-rendered")

  expect(recipe).toContain(
    "api-stub-smoke version=target source=source timeout=resume_transcript_timeout: (render version source)",
  )
  expect(recipe).toContain('tui-stub-smoke.ts --bundle "staging/{{version}}/cli.patched.js"')
  expect(recipe).toContain(
    'oauth-fable-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout-seconds "{{timeout}}"',
  )
  expect(recipe).toContain(
    'resume-transcript-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout-seconds "{{timeout}}"',
  )
  expect(renderedRecipe).toContain("api-stub-smoke-rendered version=target timeout=resume_transcript_timeout:")
  expect(renderedRecipe).toContain('tui-stub-smoke.ts --bundle "staging/{{version}}/cli.patched.js"')
  expect(renderedRecipe).toContain(
    'oauth-fable-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout-seconds "{{timeout}}"',
  )
  expect(renderedRecipe).toContain(
    'resume-transcript-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout-seconds "{{timeout}}"',
  )
})

test("OAuth Fable smoke can run with or without rendering first", () => {
  const recipe = recipeBlock("oauth-fable-smoke")
  const renderedRecipe = recipeBlock("oauth-fable-smoke-rendered")

  expect(recipe).toContain(
    "oauth-fable-smoke version=target source=source timeout=resume_transcript_timeout: (render version source)",
  )
  expect(recipe).toContain('oauth-fable-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js"')
  expect(renderedRecipe).toContain("oauth-fable-smoke-rendered version=target timeout=resume_transcript_timeout:")
  expect(renderedRecipe).toContain('oauth-fable-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js"')
})
