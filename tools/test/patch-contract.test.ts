import { expect, test } from "bun:test"
import { loadPatchEntriesFromToml } from "../lib/patch-files"
import { activePatch, captureIdentifier } from "./helpers/patch-contract"

const entries = loadPatchEntriesFromToml(
  `
name = "fixture"
target_version = "2.1.1"
rationale = "test active selection"
[[patches]]
name = "resolver-old"
applies_to = ">=2.1.1 <2.1.2"
platforms = ["darwin-arm64"]
locator_kind = "literal"
locator_pattern = "old"
replacement = "old-patched"
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L1-L2"
[[patches]]
name = "resolver-current"
applies_to = ">=2.1.2 <2.1.3"
platforms = ["darwin-arm64"]
locator_kind = "literal"
locator_pattern = "new"
replacement = "new-patched"
rationale_ref = "reference/v2.1.88/sources/src/main.tsx#L1-L2"
`,
  "fixture.toml",
)

test("active selection cannot fall back to a stale version or platform", () => {
  expect(activePatch(entries, "2.1.2", "darwin-arm64", "resolver-").name).toBe("resolver-current")
  expect(() => activePatch(entries, "2.1.3", "darwin-arm64", "resolver-")).toThrow("found 0")
  expect(() => activePatch(entries, "2.1.2", "linux-x64", "resolver-")).toThrow("found 0")
  expect(() => activePatch([...entries, entries[1]!], "2.1.2", "darwin-arm64", "resolver-")).toThrow("found 2")
})

test("semantic role capture follows renamed identifiers and rejects ambiguity", () => {
  const role = /slug=([\w$]+)\(model\)/
  expect(captureIdentifier("slug=old(model)", "normalize", role)).toBe("old")
  expect(captureIdentifier("slug=$new(model)", "normalize", role)).toBe("$new")
  expect(() => captureIdentifier("", "normalize", role)).toThrow("found none")
  expect(() => captureIdentifier("slug=old(model);slug=$new(model)", "normalize", role)).toThrow(
    "Expected one identifier",
  )
})
