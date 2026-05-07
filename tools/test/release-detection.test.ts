import { expect, test } from "bun:test"
import { classifyReleaseCandidate, parseHandledReleaseTags } from "../lib/release-detection"

test("classifies a one-sided npm version as a prerelease candidate", () => {
  const candidate = classifyReleaseCandidate({
    npmLatest: "2.1.140",
    gcsLatest: "2.1.139",
    handledVersions: new Set(["2.1.139"]),
  })

  expect(candidate).toEqual({
    action: "prerelease",
    version: "2.1.140",
    source: "npm",
    reason: "npm latest is newer than any handled release",
  })
})

test("classifies converged channels as promotion when only a prerelease exists", () => {
  const candidate = classifyReleaseCandidate({
    npmLatest: "2.1.140",
    gcsLatest: "2.1.140",
    handledVersions: new Set(),
    prereleaseVersions: new Set(["2.1.140"]),
  })

  expect(candidate).toEqual({
    action: "promote",
    version: "2.1.140",
    source: "npm",
    reason: "npm latest and GCS stable have converged",
  })
})

test("classifies a new converged version as promotion gated by platform audit", () => {
  const candidate = classifyReleaseCandidate({
    npmLatest: "2.1.140",
    gcsLatest: "2.1.140",
    handledVersions: new Set(["2.1.139"]),
  })

  expect(candidate).toEqual({
    action: "promote",
    version: "2.1.140",
    source: "npm",
    reason: "npm latest and GCS stable have converged on an unhandled version",
  })
})

test("extracts handled release versions from patch tags", () => {
  const handled = parseHandledReleaseTags([
    "claude-code-2.1.132-patch.1",
    "claude-code-2.1.132-patch.2",
    "other-tag",
    "claude-code-2.1.140-patch.1",
  ])

  expect([...handled].sort()).toEqual(["2.1.132", "2.1.140"])
})
