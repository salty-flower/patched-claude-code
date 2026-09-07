import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  embeddedResourceTreeSha256,
  type ResourceGraphManifest,
  validateEmbeddedResourceAudit,
  writeEmbeddedResourceAudit,
} from "../lib/embedded-resource-audit"
import { sha256 } from "../lib/release-payload"

function required<T>(value: T | undefined): T {
  if (value === undefined) throw new Error("required fixture value missing")
  return value
}

function fixture(run: (root: string, manifest: ResourceGraphManifest) => void): void {
  const root = mkdtempSync(join(tmpdir(), "cc-resource-audit-test-"))
  try {
    const graph = join(root, "graph", "darwin-arm64")
    mkdirSync(graph, { recursive: true })
    const inputs = [
      {
        path: "skill.js",
        loader: 1,
        text: 'var a=load("./runner.mjs.embedded.txt"),p=load("./SKILL.md.embedded.txt"),q=load("./helper.js"),f={"scripts/runner.mjs":a,"scripts/check.py":q};export{f as SKILL_FILES,p as SKILL_MD}',
      },
      {
        path: "helper.js",
        loader: 1,
        text: 'var a="./check.txt.zst",b=decompress(a,import.meta.dirname);export{b as default}',
      },
      {
        path: "runner.mjs",
        loader: 13,
        text: 'throw new Error("MUST_NOT_EXECUTE"); process.exit(2)\n',
        runtimePath: "runner.mjs.embedded.txt",
      },
      { path: "SKILL.md", loader: 13, text: "# Example skill\n", runtimePath: "SKILL.md.embedded.txt" },
      { path: "check.txt.zst", loader: 5, text: "print('audit only')\n" },
    ]
    const files = inputs.map((file) => {
      writeFileSync(join(graph, file.path), file.text)
      if (file.runtimePath) writeFileSync(join(graph, file.runtimePath), file.text)
      const identity = { encoding: "identity", bytes: Buffer.byteLength(file.text), sha256: sha256(file.text).hex }
      return {
        path: file.path,
        loader: file.loader,
        runtimePath: file.runtimePath,
        upstream: identity,
        materialized: identity,
      }
    })
    const manifest: ResourceGraphManifest = { version: "2.1.263", platforms: [{ platform: "darwin-arm64", files }] }
    writeFileSync(join(root, "graph-manifest.json"), JSON.stringify(manifest))
    run(root, manifest)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
}
function extract(root: string, output = "audit") {
  return writeEmbeddedResourceAudit({
    graphRoot: join(root, "graph"),
    graphManifestPath: join(root, "graph-manifest.json"),
    outDir: join(root, output),
  })
}

test("skill resource audit preserves logical paths and bytes without executing scripts", () => {
  fixture((root) => {
    const audit = extract(root)
    expect(audit.gaps).toEqual([])
    expect(audit.entries.map((entry) => entry.logicalPath)).toEqual([
      "scripts/runner.mjs",
      "scripts/check.py",
      "SKILL_MD.md",
    ])
    const runner = required(audit.entries[0])
    expect(runner).toMatchObject({
      kind: "script",
      loader: 13,
      assetPath: "runner.mjs",
      runtimePath: "runner.mjs.embedded.txt",
    })
    expect(readFileSync(join(root, "audit", runner.contentFile), "utf8")).toContain("MUST_NOT_EXECUTE")
    expect(validateEmbeddedResourceAudit(join(root, "audit"), join(root, "graph"))).toEqual(audit)
    extract(root, "second")
    expect(embeddedResourceTreeSha256(join(root, "audit"))).toBe(embeddedResourceTreeSha256(join(root, "second")))
  })
})

test("resource audit rejects corrupt source bytes and sidecars", () => {
  fixture((root) => {
    writeFileSync(join(root, "graph/darwin-arm64/runner.mjs.embedded.txt"), "corrupt")
    expect(() => extract(root)).toThrow("sidecar differs")
  })
  fixture((root) => {
    writeFileSync(join(root, "graph/darwin-arm64/runner.mjs"), "corrupt")
    expect(() => extract(root)).toThrow("hash mismatch")
  })
})

test("dynamic resource mappings remain explicit blocking gaps", () => {
  fixture((root, manifest) => {
    const source = 'var f={"scripts/runner.mjs":compute()};export{f as SKILL_FILES}'
    writeFileSync(join(root, "graph/darwin-arm64/skill.js"), source)
    required(required(manifest.platforms[0]).files[0]).materialized = {
      encoding: "identity",
      bytes: Buffer.byteLength(source),
      sha256: sha256(source).hex,
    }
    writeFileSync(join(root, "graph-manifest.json"), JSON.stringify(manifest))
    expect(extract(root).gaps).toHaveLength(1)
    expect(() => validateEmbeddedResourceAudit(join(root, "audit"))).toThrow("unresolved gaps")
  })
})

test("resource audit validation detects tampering and unexpected payload files", () => {
  fixture((root) => {
    const audit = extract(root)
    writeFileSync(join(root, "audit", required(audit.entries[0]).contentFile), "corrupt")
    expect(() => validateEmbeddedResourceAudit(join(root, "audit"))).toThrow("hash mismatch")
  })
  fixture((root) => {
    extract(root)
    writeFileSync(join(root, "audit", "unlisted.txt"), "extra")
    expect(() => validateEmbeddedResourceAudit(join(root, "audit"))).toThrow("unlisted files")
  })
})

test("resource audit rejects traversal before writing outside its output", () => {
  fixture((root, manifest) => {
    required(required(manifest.platforms[0]).files[0]).path = "../escape.js"
    writeFileSync(join(root, "graph-manifest.json"), JSON.stringify(manifest))
    expect(() => extract(root)).toThrow("unsafe embedded resource path")
  })
})

test("nested skill maps, imported bindings, and Bun CommonJS text wrappers resolve statically", () => {
  fixture((root, manifest) => {
    const source =
      'import {default as imported} from "./helper.js";var wrapped=wrap(function(exports,module){module.exports=load("./runner.mjs.embedded.txt")}),r=wrapped(),f={variant:{"scripts/run.mjs":r,"scripts/check.py":imported}};export{f as SKILL_FILES}'
    writeFileSync(join(root, "graph/darwin-arm64/skill.js"), source)
    required(required(manifest.platforms[0]).files[0]).materialized = {
      encoding: "identity",
      bytes: Buffer.byteLength(source),
      sha256: sha256(source).hex,
    }
    writeFileSync(join(root, "graph-manifest.json"), JSON.stringify(manifest))
    const audit = extract(root)
    expect(audit.gaps).toEqual([])
    expect(audit.entries.map((entry) => entry.logicalPath)).toEqual([
      "variant/scripts/run.mjs",
      "variant/scripts/check.py",
    ])
  })
})

test("direct named exports are audited and manifest mappings are hash-bound", () => {
  fixture((root, manifest) => {
    const source = 'export const SKILL_FILES={"scripts/run.mjs":load("./runner.mjs.embedded.txt")}'
    writeFileSync(join(root, "graph/darwin-arm64/skill.js"), source)
    required(required(manifest.platforms[0]).files[0]).materialized = {
      encoding: "identity",
      bytes: Buffer.byteLength(source),
      sha256: sha256(source).hex,
    }
    writeFileSync(join(root, "graph-manifest.json"), JSON.stringify(manifest))
    const audit = extract(root)
    expect(audit.entries).toHaveLength(1)
    required(audit.entries[0]).logicalPath = "tampered.mjs"
    writeFileSync(join(root, "audit", "manifest.json"), JSON.stringify(audit))
    expect(() => validateEmbeddedResourceAudit(join(root, "audit"))).toThrow("manifest hash mismatch")
  })
})
