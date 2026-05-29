import { readFileSync } from "node:fs"
import { join } from "node:path"
import { expect, test } from "bun:test"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromToml } from "../lib/patch-files"

const patchFile = join(import.meta.dir, "..", "..", "patches", "signature-block-custom-endpoint.toml")

test("strips signature blocks for custom base URLs before API requests", () => {
  const patches = loadPatchEntriesFromToml(readFileSync(patchFile, "utf8"), patchFile)
  const source = 'async function q(){let v=Cq()==="bedrock"?DfK(H,YP(T.model)):H,E=bW(T.model);return v}'

  const result = applyPatchEntries(source, patches, "2.1.150")

  expect(result.source).toContain("let v=!DO()?bx8(H):DfK(H,YP(T.model)),E=")
  expect(result.source).not.toContain('let v=Cq()==="bedrock"?DfK(H,YP(T.model)):H,E=')
})

test("strips signature blocks for custom base URLs before 2.1.156 API requests", () => {
  const patches = loadPatchEntriesFromToml(readFileSync(patchFile, "utf8"), patchFile)
  const source = "async function q(){let v=tZK(H,NP(T.model)),E=bW(T.model);return v}"

  const result = applyPatchEntries(source, patches, "2.1.156")

  expect(result.source).toContain("let v=!CO()?eZK(H):tZK(H,NP(T.model)),E=")
  expect(result.source).not.toContain("let v=tZK(H,NP(T.model)),E=")
})
