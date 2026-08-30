import { expect, test } from "bun:test"
import { expandZstdTextAsset, isZstdFrame } from "../lib/graph-bundle"

test("compressed text assets materialize as auditable UTF-8", () => {
  const source = new TextEncoder().encode("const transparent = true\n")
  const compressed = Bun.zstdCompressSync(source)

  expect(isZstdFrame(compressed)).toBe(true)
  expect(expandZstdTextAsset(compressed, "fixture.js")).toEqual(source)
})

test("compressed text materialization fails closed", () => {
  expect(() => expandZstdTextAsset(new TextEncoder().encode("plain text"), "plain.js")).toThrow(
    "compressed-text loader without a Zstandard frame",
  )

  const invalidUtf8 = Bun.zstdCompressSync(new Uint8Array([0xff]))
  expect(() => expandZstdTextAsset(invalidUtf8, "invalid.js")).toThrow("decompressed to invalid UTF-8")
})
