import { cpSync, mkdirSync, readFileSync, rmSync } from "node:fs"
import { join } from "node:path"
import { applyPatchEntries } from "../../lib/apply-patches"
import { validateEmbeddedResourceAudit } from "../../lib/embedded-resource-audit"
import {
  applyPatchEntriesToGraphBundle,
  DEFAULT_GRAPH_PLATFORMS,
  dispatcherSource,
  loadGraphBundle,
  stagedGraphRoot,
} from "../../lib/graph-bundle"
import { loadPatchEntriesFromDirectory, loadPatchEntriesFromFile, type PatchEntry } from "../../lib/patch-files"

// Render a runnable patched bundle for the staged target into a temp dir.
//
// Dual-graph targets default to both graphs plus a dispatcher entrypoint.
// Pure execution tests may request the host graph only; these fixtures omit
// the packaging audit because they are deliberately not release payloads.
// Legacy single-file targets render one patched bundle. Returns the path of an
// entrypoint that can be spawned directly.
export async function renderRunnableBundle(options: {
  root: string
  version: string
  outDir: string
  patchFiles?: string[]
  platforms?: "all" | "host"
}): Promise<string> {
  const { root, version, outDir } = options
  const graphRoot = stagedGraphRoot(root, version)
  const darwinCli = join(graphRoot, "darwin-arm64", "cli.js")
  const isGraph = await Bun.file(darwinCli)
    .text()
    .then(() => true)
    .catch(() => false)

  const patches: PatchEntry[] = options.patchFiles
    ? options.patchFiles.flatMap((file) => loadPatchEntriesFromFile(join(root, "patches", file)))
    : loadPatchEntriesFromDirectory(root)

  if (!isGraph) {
    const source = await Bun.file(join(root, "staging", version, "cli.js")).text()
    const result = applyPatchEntries(source, patches, version)
    mkdirSync(outDir, { recursive: true })
    const outPath = join(outDir, "cli.patched.js")
    await Bun.write(outPath, result.source)
    return outPath
  }

  rmSync(outDir, { recursive: true, force: true })
  mkdirSync(join(outDir, "graph.patched"), { recursive: true })
  const platforms: readonly string[] = options.platforms === "host" ? [hostGraphPlatform()] : DEFAULT_GRAPH_PLATFORMS
  for (const platform of platforms) {
    const stagedPlatformDir = join(graphRoot, platform)
    const bundle = loadGraphBundle(stagedPlatformDir, platform)
    const outcome = applyPatchEntriesToGraphBundle(bundle, patches, version)
    const outGraph = join(outDir, "graph.patched", platform)
    cpSync(stagedPlatformDir, outGraph, { recursive: true })
    for (const path of outcome.changedFiles) {
      const text = outcome.texts.get(path)
      if (text === undefined) throw new Error(`changed graph file missing: ${platform}/${path}`)
      await Bun.write(join(outGraph, path), text)
    }
  }
  // Resource bytes are copied unchanged by selective JavaScript patching.
  const stagedAudit = join(root, "staging", version, "builtin-skill-resources")
  if (options.platforms === "host") {
    // Validate the existing audit, then bind only the selected runtime bytes.
    // Never publish the complete audit alongside an incomplete graph fixture.
    const audit = validateEmbeddedResourceAudit(stagedAudit)
    for (const entry of audit.entries.filter((entry) => platforms.includes(entry.platform))) {
      const bytes = readFileSync(join(stagedAudit, entry.contentFile))
      for (const path of new Set([entry.assetPath, entry.runtimePath])) {
        if (!readFileSync(join(outDir, "graph.patched", entry.platform, path)).equals(bytes)) {
          throw new Error(`embedded resource differs from runtime fixture: ${entry.platform}/${path}`)
        }
      }
    }
  } else {
    // Full fixtures retain their stage audit and remain packageable.
    validateEmbeddedResourceAudit(stagedAudit, join(outDir, "graph.patched"))
    cpSync(stagedAudit, join(outDir, "builtin-skill-resources"), { recursive: true })
  }
  const dispatcherPath = join(outDir, "cli.patched.js")
  await Bun.write(dispatcherPath, dispatcherSource("rendered"))
  return dispatcherPath
}

export function hostGraphPlatform(): "darwin-arm64" | "linux-x64" {
  if (process.platform === "darwin") return "darwin-arm64"
  if (process.platform === "linux") return "linux-x64"
  throw new Error(`unsupported runtime fixture platform: ${process.platform}`)
}
