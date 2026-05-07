import { expect, test } from "bun:test"
import { structuralJavaScriptHash } from "../lib/js-structure"

test("structural hash ignores minified identifier names", () => {
  const a = "function a(b){let c=b+1;return c}console.log(a(1))"
  const b = "function x(y){let z=y+1;return z}console.log(x(1))"

  expect(structuralJavaScriptHash(a).sha256).toBe(structuralJavaScriptHash(b).sha256)
})

test("structural hash keeps literal platform constants significant", () => {
  const linux = 'function platform(){return "linux"}'
  const darwin = 'function platform(){return "darwin"}'

  expect(structuralJavaScriptHash(linux).sha256).not.toBe(structuralJavaScriptHash(darwin).sha256)
})
