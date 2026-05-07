import { expect, test } from "bun:test"
import { GCS_RELEASE_BASE, gcsManifestUrl, gcsNativeBinaryUrl, GCS_STABLE_URL } from "../lib/upstream-channels"

test("uses the public GCS bucket stable object for native-channel discovery", () => {
  expect(GCS_STABLE_URL).toBe(
    "https://storage.googleapis.com/claude-code-dist-86c565f3-f756-42ad-8dfa-d59b1c096819/claude-code-releases/stable",
  )
})

test("builds manifest and binary URLs from the same GCS bucket base", () => {
  expect(GCS_RELEASE_BASE).toBe(
    "https://storage.googleapis.com/claude-code-dist-86c565f3-f756-42ad-8dfa-d59b1c096819/claude-code-releases",
  )
  expect(gcsManifestUrl("2.1.2")).toBe(`${GCS_RELEASE_BASE}/2.1.2/manifest.json`)
  expect(gcsNativeBinaryUrl("2.1.2", "darwin-arm64", "claude")).toBe(`${GCS_RELEASE_BASE}/2.1.2/darwin-arm64/claude`)
})
