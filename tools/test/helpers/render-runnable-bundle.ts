import { cpSync, mkdirSync, rmSync } from "node:fs"
import { join } from "node:path"
import { applyPatchEntries } from "../../lib/apply-patches"
import {
  applyPatchEntriesToGraphBundle,
  dispatcherSource,
  loadGraphBundle,
  stagedGraphRoot,
} from "../../lib/graph-bundle"
import { loadPatchEntriesFromDirectory, loadPatchEntriesFromFile, type PatchEntry } from "../../lib/patch-files"

// Render a runnable patched bundle for the staged target into a temp dir.
//
// Dual-graph targets render both platform graphs plus a dispatcher entrypoint.
// Legacy single-file targets render one patched bundle. Returns the path of an
// entrypoint that can be spawned directly.
export async function renderRunnableBundle(options: {
  root: string
  version: string
  outDir: string
  patchFiles?: string[]
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
  for (const platform of ["darwin-arm64", "linux-x64"]) {
    const stagedPlatformDir = join(graphRoot, platform)
    const bundle = loadGraphBundle(stagedPlatformDir, platform)
    const outcome = applyPatchEntriesToGraphBundle(bundle, patches, version)
    const outGraph = join(outDir, "graph.patched", platform)
    cpSync(stagedPlatformDir, outGraph, { recursive: true })
    for (const [path, text] of outcome.texts) {
      await Bun.write(join(outGraph, path), text)
    }
  }
  const dispatcherPath = join(outDir, "cli.patched.js")
  await Bun.write(dispatcherPath, dispatcherSource("rendered"))
  return dispatcherPath
}
