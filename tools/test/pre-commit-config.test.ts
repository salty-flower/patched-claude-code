import { readFileSync } from "node:fs"
import { join } from "node:path"
import { expect, test } from "bun:test"
import { DEFAULT_TARGET_VERSION } from "../lib/target"

const ROOT = join(import.meta.dir, "..", "..")

function hookBlock(id: string): string {
  const config = readFileSync(join(ROOT, ".pre-commit-config.yaml"), "utf8")
  const start = config.indexOf(`- id: ${id}`)
  expect(start).toBeGreaterThanOrEqual(0)
  const next = config.indexOf("\n      - id:", start + 1)
  return config.slice(start, next === -1 ? config.length : next)
}

test("pre-commit runs tool tests for runtime, workflow, and hook wiring edits", () => {
  const toolsTest = hookBlock("tools-test")

  expect(toolsTest).toContain(`TARGET_VERSION="\${TARGET_VERSION:-${DEFAULT_TARGET_VERSION}}"`)
  expect(toolsTest).toContain("runtime/")
  expect(toolsTest).toContain("\\.github/workflows/.*\\.ya?ml")
  expect(toolsTest).toContain("\\.pre-commit-config\\.yaml")
})
