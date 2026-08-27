import { createHash } from "node:crypto"
import { existsSync, readdirSync, readFileSync } from "node:fs"
import { join, relative } from "node:path"
import {
  applyAstTransformPatches,
  verifyAstTransformPatch,
  verifyAstTransformPatches,
  type AstTransformPatch,
} from "./ast-transform-patches"
import { patchSkipReason } from "./apply-patches"
import type { PatchEntry } from "./patch-files"

// Dual-graph target layout support.
//
// Upstream native bundles from 2.1.246 ship a Bun standalone module graph
// instead of one self-contained entrypoint. The staged layout materializes
// every graph file under staging/<version>/graph/<platform>/ with
// `/$bunfs/root/` specifiers rewritten to graph-relative `./` specifiers,
// plus a small platform-dispatcher at staging/<version>/cli.js.

export const DUAL_GRAPH_SOURCE = "canonical-dual-graph"

export const GRAPH_DIR_NAME = "graph"
export const GRAPH_PATCHED_DIR_NAME = "graph.patched"
export const DEFAULT_GRAPH_PLATFORMS = ["darwin-arm64", "linux-x64"] as const

export function stagedGraphRoot(root: string, version: string): string {
  return join(root, "staging", version, GRAPH_DIR_NAME)
}

export function stagedPatchedGraphRoot(root: string, version: string): string {
  return join(root, "staging", version, GRAPH_PATCHED_DIR_NAME)
}

export function isDualGraphStaged(root: string, version: string): boolean {
  return existsSync(join(stagedGraphRoot(root, version), DEFAULT_GRAPH_PLATFORMS[0], "cli.js"))
}

export function isDualGraphRendered(root: string, version: string): boolean {
  return existsSync(join(stagedPatchedGraphRoot(root, version), DEFAULT_GRAPH_PLATFORMS[0], "cli.js"))
}

export function stagedGraphPlatforms(root: string, version: string): string[] {
  const graphRoot = stagedGraphRoot(root, version)
  if (!existsSync(graphRoot)) return []
  return readdirSync(graphRoot).sort()
}

export function dispatcherSource(kind: "staged" | "rendered"): string {
  const dirName = kind === "staged" ? GRAPH_DIR_NAME : GRAPH_PATCHED_DIR_NAME
  return [
    "// Generated platform dispatcher over dual upstream module graphs.",
    "// Each graph is the upstream Bun standalone module graph materialized to",
    "// disk with /$bunfs/root/ specifiers rewritten to graph-relative paths.",
    'const platformDir = process.platform === "darwin" ? "darwin-arm64" : process.platform === "linux" ? "linux-x64" : null',
    "if (!platformDir) {",
    "  console.error(`unsupported platform: ${process.platform}`)",
    "  process.exit(1)",
    "}",
    `await import(new URL(\`./${dirName}/\${platformDir}/cli.js\`, import.meta.url).href)`,
    "",
  ].join("\n")
}

const BUNFS_REF_PATTERN = /\/\$bunfs\/root\//g

function graphRelativePrefix(fromDir: string): string {
  const depth = fromDir === "" ? 0 : fromDir.split("/").filter(Boolean).length
  return depth === 0 ? "./" : "../".repeat(depth)
}

// Rewrite absolute Bun-standalone specifiers (`/$bunfs/root/<path>`) to
// paths relative to the referencing file's directory so the materialized
// graph resolves identically from any nesting depth.
export function rewriteBunfsSpecifiers(text: string, fromDir: string): string {
  const prefix = graphRelativePrefix(fromDir)
  return text.replace(BUNFS_REF_PATTERN, prefix)
}

// Every rewritten specifier must land on a file that exists in the graph;
// otherwise the staged bundle would fail at runtime instead of at stage time.
export function assertBunfsRefsResolve(text: string, knownPaths: Set<string>, label: string): void {
  for (const match of text.matchAll(/\/\$bunfs\/root\/([A-Za-z0-9_./-]+)/g)) {
    if (!knownPaths.has(match[1])) {
      throw new Error(`${label} references missing graph file: ${match[1]}`)
    }
  }
}

export function sha256HexBytes(bytes: Uint8Array): string {
  return createHash("sha256").update(bytes).digest("hex")
}

export type LoadedGraphBundle = {
  platform: string
  root: string
  files: Array<{ path: string; text: string }>
}

export function loadGraphBundle(graphPlatformDir: string, platform: string): LoadedGraphBundle {
  const files: Array<{ path: string; text: string }> = []
  const visit = (dir: string): void => {
    for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) {
        visit(full)
        continue
      }
      if (!entry.name.endsWith(".js")) continue
      files.push({ path: relative(graphPlatformDir, full).replaceAll("\\", "/"), text: readFileSync(full, "utf8") })
    }
  }
  visit(graphPlatformDir)
  return { platform, root: graphPlatformDir, files }
}

export type GraphPatchOutcome = {
  applied: number
  skipped: PatchEntry[]
  changedFiles: Set<string>
  texts: Map<string, string>
}

type MutableBundle = Map<string, string>

function countMatches(text: string, patch: PatchEntry): number {
  if (patch.locator_kind === "literal") return text.split(patch.locator_pattern ?? "").length - 1
  if (!patch.locator_pattern) return 0
  return (text.match(new RegExp(patch.locator_pattern, "g")) || []).length
}

function replaceInText(text: string, patch: PatchEntry): string {
  const replacement = patch.replacement ?? ""
  if (patch.locator_kind === "literal") return text.split(patch.locator_pattern ?? "").join(replacement)
  return text.replace(new RegExp(patch.locator_pattern ?? "", "g"), replacement)
}

// Apply the ordered patch pipeline across every file of one platform graph.
//
// Locator counts are bundle-level: the sum of matches over all files must
// equal `expected_matches`. Regex/literal replacements splice into each
// matching file. AST transforms are batched exactly like the single-file
// pipeline (flushed before the next regex patch); their expected counts are
// validated as bundle totals, then applied per file with locally pinned
// counts so the single-source planner accepts per-file subsets.
export function applyPatchEntriesToGraphBundle(
  bundle: LoadedGraphBundle,
  patches: PatchEntry[],
  version: string,
): GraphPatchOutcome {
  const current: MutableBundle = new Map(bundle.files.map((file) => [file.path, file.text]))
  const changedFiles = new Set<string>()
  const skipped: PatchEntry[] = []
  let applied = 0
  let pendingAst: PatchEntry[] = []

  const flushAst = (): void => {
    if (pendingAst.length === 0) return
    const batch: AstTransformPatch[] = pendingAst.map((patch) => ({
      name: patch.name,
      expectedMatches: undefined,
      ast: patch.ast!,
      transform: patch.transform!,
    }))
    const localCounts = new Map<string, Map<string, number>>()
    const totals = new Map<string, number>(batch.map((entry) => [entry.name, 0]))
    for (const [path, text] of current) {
      const results = verifyAstTransformPatches(text, batch)
      const here = new Map<string, number>()
      for (let i = 0; i < batch.length; i++) {
        const count = results[i].matches
        if (count > 0) {
          const localPatch = { ...batch[i], expectedMatches: count }
          const localResult = verifyAstTransformPatch(text, localPatch)
          if (!localResult.ok) {
            throw new Error(
              `[${batch[i].name}] AST transform is not applicable to ${bundle.platform}/${path}: ${localResult.message}`,
            )
          }
          here.set(batch[i].name, count)
        }
        totals.set(batch[i].name, (totals.get(batch[i].name) ?? 0) + count)
      }
      if (here.size > 0) localCounts.set(path, here)
    }
    for (const patch of pendingAst) {
      const expected = patch.expected_matches ?? 1
      const total = totals.get(patch.name) ?? 0
      if (total !== expected) {
        throw new Error(
          `[${patch.name}] expected ${expected} AST match(es) across ${bundle.platform} graph, got ${total}`,
        )
      }
    }
    for (const [path, counts] of localCounts) {
      const localBatch: AstTransformPatch[] = batch
        .filter((entry) => (counts.get(entry.name) ?? 0) > 0)
        .map((entry) => ({ ...entry, expectedMatches: counts.get(entry.name) }))
      const before = current.get(path)!
      const result = (() => {
        try {
          return applyAstTransformPatches(before, localBatch)
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error)
          const names = localBatch.map((entry) => entry.name).join(", ")
          throw new Error(`failed to apply AST patches to ${bundle.platform}/${path} (${names}): ${message}`)
        }
      })()
      if (result.source !== before) changedFiles.add(path)
      current.set(path, result.source)
    }
    applied += pendingAst.length
    pendingAst = []
  }

  for (const patch of patches) {
    const skipReason = patchSkipReason(patch, version)
    if (skipReason) {
      skipped.push(patch)
      continue
    }
    if (patch.platforms && patch.platforms.length > 0 && !patch.platforms.includes(bundle.platform)) {
      skipped.push(patch)
      continue
    }
    if (patch.locator_kind === "ast_transform") {
      pendingAst.push(patch)
      continue
    }
    flushAst()
    const expected = patch.expected_matches ?? 1
    let total = 0
    const touched: string[] = []
    for (const [path, text] of current) {
      const count = countMatches(text, patch)
      if (count > 0) {
        total += count
        touched.push(path)
      }
    }
    if (total !== expected) {
      throw new Error(`[${patch.name}] expected ${expected} locator match(es) across ${bundle.platform} graph, got ${total}`)
    }
    for (const path of touched) {
      const before = current.get(path)!
      const after = replaceInText(before, patch)
      if (after !== before) changedFiles.add(path)
      current.set(path, after)
    }
    applied++
  }
  flushAst()

  return { applied, skipped, changedFiles, texts: current }
}
