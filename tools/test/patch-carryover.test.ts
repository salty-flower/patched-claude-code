import { expect, test } from "bun:test"
import type { PatchEntry } from "../lib/patch-files"
import {
  findPatchCarryoverWarnings,
  patchLineageName,
} from "../patch/check-patch-carryover"

function entry(name: string, appliesTo: string, platforms?: string[]): PatchEntry {
  return {
    file: "patches/example.toml",
    featureName: "example",
    name,
    enabled: true,
    target_version: "2.1.246",
    applies_to: appliesTo,
    platforms,
    rationale: "test",
    rationale_ref: "reference/v2.1.88/sources/example.ts#L1-L2",
    locator_kind: "literal",
    locator_pattern: "before",
    replacement: "after",
  }
}

test("normalizes version and platform suffixes into one patch lineage", () => {
  expect(patchLineageName("statusline-json-permission-mode-2-1-246")).toBe(
    "statusline-json-permission-mode",
  )
  expect(patchLineageName("statusline-json-permission-mode-2-1-250-darwin")).toBe(
    "statusline-json-permission-mode",
  )
  expect(patchLineageName("ask-user-question-2-1-246-askuser")).toBe(
    "ask-user-question-askuser",
  )
  expect(patchLineageName("future-patch-2-2-0-linux-x64")).toBe("future-patch")
})

test("warns when an active lineage is capped without a target successor", () => {
  const warnings = findPatchCarryoverWarnings(
    [entry("permission-mode-2-1-246", ">=2.1.246 <2.1.250")],
    "2.1.246",
    "2.1.250",
  )

  expect(warnings).toEqual([
    {
      feature: "example",
      lineage: "permission-mode",
      missingPlatforms: ["darwin-arm64", "linux-x64"],
      previousEntries: ["permission-mode-2-1-246"],
      rationaleRefs: ["reference/v2.1.88/sources/example.ts#L1-L2"],
    },
  ])
})

test("accepts a platform-split successor for an older shared lineage", () => {
  const warnings = findPatchCarryoverWarnings(
    [
      entry("permission-mode-2-1-246", ">=2.1.246 <2.1.250"),
      entry("permission-mode-2-1-250-darwin", ">=2.1.250 <2.2.0", ["darwin-arm64"]),
      entry("permission-mode-2-1-250-linux", ">=2.1.250 <2.2.0", ["linux-x64"]),
    ],
    "2.1.246",
    "2.1.250",
  )

  expect(warnings).toEqual([])
})

test("warns when a platform-split successor leaves old shared coverage incomplete", () => {
  const warnings = findPatchCarryoverWarnings(
    [
      entry("permission-mode-2-1-246", ">=2.1.246 <2.1.250"),
      entry("permission-mode-2-1-250-darwin", ">=2.1.250 <2.2.0", ["darwin-arm64"]),
    ],
    "2.1.246",
    "2.1.250",
  )

  expect(warnings).toEqual([
    {
      feature: "example",
      lineage: "permission-mode",
      missingPlatforms: ["linux-x64"],
      previousEntries: ["permission-mode-2-1-246"],
      rationaleRefs: ["reference/v2.1.88/sources/example.ts#L1-L2"],
    },
  ])
})
