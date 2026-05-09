import { expect, test } from "bun:test"
import {
  DIRECT_LATEST_URL,
  DIRECT_RELEASE_BASE,
  directManifestUrl,
  directNativeBinaryUrl,
} from "../lib/upstream-channels"

test("uses Claude's direct latest object for native-channel discovery", () => {
  expect(DIRECT_LATEST_URL).toBe("https://downloads.claude.ai/claude-code-releases/latest")
})

test("builds manifest and binary URLs from the same direct release base", () => {
  expect(DIRECT_RELEASE_BASE).toBe("https://downloads.claude.ai/claude-code-releases")
  expect(directManifestUrl("2.1.2")).toBe(`${DIRECT_RELEASE_BASE}/2.1.2/manifest.json`)
  expect(directNativeBinaryUrl("2.1.2", "darwin-arm64", "claude")).toBe(
    `${DIRECT_RELEASE_BASE}/2.1.2/darwin-arm64/claude`,
  )
})
