import { afterEach, expect, test } from "bun:test"
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { validateEmbeddedResourceAudit, writeEmbeddedResourceAudit } from "../lib/embedded-resource-audit"
import { DEFAULT_GRAPH_PLATFORMS, sha256HexBytes } from "../lib/graph-bundle"
import { hostGraphPlatform, renderRunnableBundle } from "./helpers/render-runnable-bundle"

const VERSION = "2.1.263"
const tempDirs: string[] = []

afterEach(() => {
  for (const path of tempDirs.splice(0)) rmSync(path, { recursive: true, force: true })
})

function fixture(): string {
  const root = mkdtempSync(join(tmpdir(), "cc-host-fixtures-"))
  tempDirs.push(root)
  mkdirSync(join(root, "patches"))
  for (const [file, locator, replacement] of [
    ["selected.toml", "selected-before", "selected-after"],
    ["unrelated.toml", "unrelated-before", "unrelated-after"],
  ]) {
    writeFileSync(
      join(root, "patches", file),
      `
name = "${file}"
enabled = true
target_version = "${VERSION}"
rationale = "Selective fixture test"
rationale_ref = "fixture#L1-L1"
locator_kind = "literal"
locator_pattern = "${locator}"
replacement = "${replacement}"
`,
    )
  }
  const stage = join(root, "staging", VERSION)
  const platforms = DEFAULT_GRAPH_PLATFORMS.map((platform) => {
    const graph = join(stage, "graph", platform)
    mkdirSync(graph, { recursive: true })
    const inputs = [
      { path: "cli.js", loader: 1, text: `console.log("${platform}:selected-before:unrelated-before")` },
      { path: "skill.js", loader: 1, text: 'var p=load("./SKILL.md.embedded.txt");export{p as SKILL_MD}' },
      { path: "SKILL.md", loader: 13, runtimePath: "SKILL.md.embedded.txt", text: `# ${platform} skill\n` },
    ]
    const files = inputs.map((file) => {
      writeFileSync(join(graph, file.path), file.text)
      if (file.runtimePath) writeFileSync(join(graph, file.runtimePath), file.text)
      const bytes = new TextEncoder().encode(file.text)
      const identity = { encoding: "identity", bytes: bytes.length, sha256: sha256HexBytes(bytes) }
      return {
        path: file.path,
        runtimePath: file.runtimePath,
        loader: file.loader,
        upstream: identity,
        materialized: identity,
      }
    })
    return { platform, files }
  })
  const graphManifestPath = join(stage, "graph-manifest.json")
  writeFileSync(graphManifestPath, JSON.stringify({ version: VERSION, platforms }))
  writeEmbeddedResourceAudit({
    graphRoot: join(stage, "graph"),
    graphManifestPath,
    outDir: join(stage, "builtin-skill-resources"),
  })
  return root
}

test("host fixtures render only selected patches for the executing platform, without a packaging audit", async () => {
  const root = fixture()
  const outDir = join(root, "rendered")
  const entrypoint = await renderRunnableBundle({
    root,
    version: VERSION,
    outDir,
    patchFiles: ["selected.toml"],
    platforms: "host",
  })
  expect(readdirSync(join(outDir, "graph.patched"))).toEqual([hostGraphPlatform()])
  expect(existsSync(join(outDir, "builtin-skill-resources"))).toBe(false)
  const result = Bun.spawnSync([process.execPath, entrypoint])
  expect(result.exitCode).toBe(0)
  expect(result.stderr.toString()).toBe("")
  expect(result.stdout.toString().trim()).toBe(`${hostGraphPlatform()}:selected-after:unrelated-before`)
  expect(readFileSync(join(outDir, "graph.patched", hostGraphPlatform(), "SKILL.md.embedded.txt"), "utf8")).toBe(
    `# ${hostGraphPlatform()} skill\n`,
  )
})

test("default fixtures retain both platform graphs and a validated packaging audit", async () => {
  const root = fixture()
  const outDir = join(root, "rendered")
  await renderRunnableBundle({ root, version: VERSION, outDir, patchFiles: ["selected.toml"] })
  expect(readdirSync(join(outDir, "graph.patched")).sort()).toEqual([...DEFAULT_GRAPH_PLATFORMS])
  const audit = validateEmbeddedResourceAudit(join(outDir, "builtin-skill-resources"), join(outDir, "graph.patched"))
  expect(audit.entries).toHaveLength(2)
  for (const platform of DEFAULT_GRAPH_PLATFORMS) {
    expect(readFileSync(join(outDir, "graph.patched", platform, "cli.js"), "utf8")).toContain(
      "selected-after:unrelated-before",
    )
  }
})

test("host fixtures do not apply locators to the other platform", async () => {
  const root = fixture()
  const otherPlatform = DEFAULT_GRAPH_PLATFORMS.find((platform) => platform !== hostGraphPlatform())
  if (!otherPlatform) throw new Error("missing second graph platform")
  writeFileSync(join(root, "staging", VERSION, "graph", otherPlatform, "cli.js"), 'console.log("no locator")')
  await renderRunnableBundle({
    root,
    version: VERSION,
    outDir: join(root, "rendered"),
    patchFiles: ["selected.toml"],
    platforms: "host",
  })
  await expect(
    renderRunnableBundle({
      root,
      version: VERSION,
      outDir: join(root, "rendered-all"),
      patchFiles: ["selected.toml"],
    }),
  ).rejects.toThrow()
})

test("host fixtures reject tampered copied resource sidecars", async () => {
  const root = fixture()
  writeFileSync(join(root, "staging", VERSION, "graph", hostGraphPlatform(), "SKILL.md.embedded.txt"), "corrupt")
  await expect(
    renderRunnableBundle({ root, version: VERSION, outDir: join(root, "rendered"), patchFiles: [], platforms: "host" }),
  ).rejects.toThrow("differs from runtime fixture")
})

test("host fixtures still reject a corrupt stage audit", async () => {
  const root = fixture()
  writeFileSync(join(root, "staging", VERSION, "builtin-skill-resources", "manifest.json"), "{}")
  await expect(
    renderRunnableBundle({ root, version: VERSION, outDir: join(root, "rendered"), patchFiles: [], platforms: "host" }),
  ).rejects.toThrow("invalid embedded resource audit")
})

test("single-file fixtures keep selective patch behavior with the host option", async () => {
  const root = fixture()
  rmSync(join(root, "staging", VERSION, "graph"), { recursive: true })
  writeFileSync(join(root, "staging", VERSION, "cli.js"), 'console.log("selected-before:unrelated-before")')
  const entrypoint = await renderRunnableBundle({
    root,
    version: VERSION,
    outDir: join(root, "rendered"),
    patchFiles: ["selected.toml"],
    platforms: "host",
  })
  expect(readFileSync(entrypoint, "utf8")).toBe('console.log("selected-after:unrelated-before")')
})
