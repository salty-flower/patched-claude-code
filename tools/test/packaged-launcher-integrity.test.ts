import { afterEach, expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { writeEmbeddedResourceAudit } from "../lib/embedded-resource-audit"
import { inspectPromptIdentityObservations } from "../lib/prompt-catalog"
import { bootstrapPromptIdentityFiles } from "../lib/prompt-identity"
import { sha256, writeReleasePayload } from "../lib/release-payload"
import { targetVersion } from "../lib/target"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()
const tempDirs: string[] = []

afterEach(() => {
  for (const dir of tempDirs.splice(0)) rmSync(dir, { recursive: true, force: true })
})

function makeTempDir(prefix: string): string {
  const dir = mkdtempSync(join(tmpdir(), prefix))
  tempDirs.push(dir)
  return dir
}

async function runPrint(
  command: string[],
  cwd: string,
  env: Record<string, string>,
): Promise<{ exitCode: number; stdout: string; stderr: string }> {
  const process = Bun.spawn({
    cmd: [...command, "--print", "--model", "sonnet", "--max-turns", "1", "prompt override runtime test"],
    cwd,
    env: { ...globalThis.process.env, ...env },
    stdout: "pipe",
    stderr: "pipe",
  })
  const [exitCode, stdout, stderr] = await Promise.all([
    process.exited,
    new Response(process.stdout).text(),
    new Response(process.stderr).text(),
  ])
  return { exitCode, stdout, stderr }
}

test("packaged launcher rejects a bundle that no longer matches its release manifest", async () => {
  const work = makeTempDir("patched-cc-prompt-bundle-hash-")
  const input = join(work, "input.js")
  const payload = join(work, "payload")
  const source = 'process.stdout.write("bundle ran\\n")\n'
  writeFileSync(input, source)
  const identityRoot = join(work, "prompt-identities")
  bootstrapPromptIdentityFiles(identityRoot, TARGET_VERSION, inspectPromptIdentityObservations(source, TARGET_VERSION))
  writeReleasePayload({
    root: ROOT,
    version: TARGET_VERSION,
    releaseId: "bundle-hash.test",
    input,
    upstreamInput: input,
    promptIdentityRoot: identityRoot,
    outDir: payload,
  })
  const packagedBundle = join(payload, "cli.js")
  writeFileSync(packagedBundle, `${readFileSync(packagedBundle, "utf8")}/* tampered */\n`)

  const result = await runPrint([join(payload, "bin", "claude-patched")], work, { HOME: work })
  expect(result.exitCode).not.toBe(0)
  expect(`${result.stdout}\n${result.stderr}`).toContain("rendered bundle file inventory mismatch")
  expect(result.stdout).not.toContain("bundle ran")
})

test("packaged launcher rejects a graph that no longer matches its release manifest", async () => {
  const work = makeTempDir("patched-cc-prompt-graph-hash-")
  const rendered = join(work, "rendered")
  const input = join(rendered, "cli.patched.js")
  const payload = join(work, "payload")
  const source =
    // biome-ignore lint/suspicious/noTemplateCurlyInString: Exercise the literal dispatcher interpolation.
    'const platformDir = process.platform === "darwin" ? "darwin-arm64" : "linux-x64"; await import(`./graph.patched/${platformDir}/cli.js`)\n'
  mkdirSync(rendered, { recursive: true })
  writeFileSync(input, source)
  for (const platform of ["darwin-arm64", "linux-x64"]) {
    const graphDir = join(rendered, "graph.patched", platform)
    mkdirSync(graphDir, { recursive: true })
    writeFileSync(join(graphDir, "cli.js"), 'process.stdout.write("graph ran\\n")\n')
  }
  const graphManifestPath = join(rendered, "graph-manifest.json")
  writeFileSync(
    graphManifestPath,
    JSON.stringify({
      version: TARGET_VERSION,
      platforms: ["darwin-arm64", "linux-x64"].map((platform) => {
        const bytes = readFileSync(join(rendered, "graph.patched", platform, "cli.js"))
        const identity = { encoding: "identity", bytes: bytes.length, sha256: sha256(bytes).hex }
        return { platform, files: [{ path: "cli.js", loader: 1, upstream: identity, materialized: identity }] }
      }),
    }),
  )
  const resourceAudit = writeEmbeddedResourceAudit({
    graphRoot: join(rendered, "graph.patched"),
    graphManifestPath,
    outDir: join(rendered, "builtin-skill-resources"),
  })
  expect(resourceAudit.entries).toHaveLength(0)
  expect(resourceAudit.gaps).toHaveLength(0)
  const identityRoot = join(work, "prompt-identities")
  bootstrapPromptIdentityFiles(identityRoot, TARGET_VERSION, inspectPromptIdentityObservations(source, TARGET_VERSION))
  writeReleasePayload({
    root: ROOT,
    version: TARGET_VERSION,
    releaseId: "graph-hash.test",
    input,
    upstreamInput: input,
    promptIdentityRoot: identityRoot,
    outDir: payload,
  })
  const packagedGraph = join(payload, "graph.patched", "darwin-arm64", "cli.js")
  writeFileSync(packagedGraph, `${readFileSync(packagedGraph, "utf8")}/* tampered */\n`)

  const result = await runPrint([join(payload, "bin", "claude-patched")], work, { HOME: work })
  expect(result.exitCode).not.toBe(0)
  expect(`${result.stdout}\n${result.stderr}`).toContain("rendered bundle file inventory mismatch")
  expect(result.stdout).not.toContain("graph ran")
})
