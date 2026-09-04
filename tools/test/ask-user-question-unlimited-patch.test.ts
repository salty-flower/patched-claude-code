import { afterAll, beforeAll, expect, test } from "bun:test"
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { satisfies } from "semver"
import { targetVersion } from "../lib/target"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()
const TEST_UNBOUNDED_QUESTIONS = satisfies(TARGET_VERSION, ">=2.1.260 <2.2.0")
const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-ask-user-question-unlimited-"))
const patchedGraphs: string[] = []

beforeAll(async () => {
  const entrypoint = await renderRunnableBundle({
    root: ROOT,
    version: TARGET_VERSION,
    outDir: tempDir,
    patchFiles: ["ask-user-question-unlimited.toml"],
  })
  const renderedRoot = join(entrypoint, "..", "graph.patched")

  for (const platform of ["darwin-arm64", "linux-x64"]) {
    const graphDir = join(renderedRoot, platform)
    patchedGraphs.push(
      readdirSync(graphDir)
        .filter((file) => file.endsWith(".js"))
        .map((file) => readFileSync(join(graphDir, file), "utf8"))
        .join("\n"),
    )
  }
})

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

test.skipIf(!TEST_UNBOUNDED_QUESTIONS)(
  "AskUserQuestion accepts an unbounded number of questions on every platform",
  () => {
    for (const graph of patchedGraphs) {
      expect(graph).not.toContain("Questions to ask the user (1-4")
      expect(graph).not.toContain("The 1-4 questions and 2-4 options bounds are hard schema constraints")

      const descriptions = [
        "Questions to ask the user (one or more; no fixed maximum). Group related questions",
        "Questions to ask the user (one or more; no fixed maximum, most important first). Group related questions",
      ]
      for (const description of descriptions) {
        const descriptionIndex = graph.indexOf(description)
        expect(descriptionIndex).toBeGreaterThan(-1)
        const schemaPrefix = graph.slice(Math.max(0, descriptionIndex - 80), descriptionIndex)
        expect(schemaPrefix).toContain(".min(1).describe(")
        expect(schemaPrefix).not.toContain(".max(4)")
      }

      expect(graph).toContain("Each choice question still accepts 2-4 options.")
      expect(graph).toContain("Must have 2-4 options.")
    }
  },
)

test.skipIf(!TEST_UNBOUNDED_QUESTIONS)("AskUserQuestion description and prompt expose the unbounded contract", () => {
  for (const graph of patchedGraphs) {
    expect(graph).toContain("A call has no fixed question-count maximum.")
    expect(graph).toContain("Question batching:")
    expect(graph).toContain("A call may contain one or more questions with no fixed maximum.")
    expect(graph).toContain("Batch related questions into one call when they form a coherent set for the user.")
  }
})
