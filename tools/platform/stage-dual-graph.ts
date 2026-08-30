#!/usr/bin/env bun
// Stage one canonical target as dual platform module graphs.
//
// Upstream native bundles from 2.1.246 ship a Bun standalone module graph
// (entrypoint + hundreds of chunk files) instead of one self-contained
// entrypoint. Cross-platform declaration merging is impossible for that
// shape: the two platform builds chunk independently, so this stager
// materializes each platform graph verbatim and emits a tiny platform
// dispatcher as the canonical entrypoint.
//
// Layout written under staging/<version>/:
//   cli.js                    platform dispatcher (canonical entrypoint)
//   graph/<platform>/...      materialized upstream graph, /$bunfs/root/
//                             specifiers rewritten to graph-relative ./ paths
//   graph-manifest.json       per-platform file inventory + hashes
//   stage-manifest.json       source=canonical-dual-graph
//
// Exit codes:
//   0  staged successfully
//   3  upstream layout is a single self-contained entrypoint; caller should
//      fall back to the legacy canonical platform merge

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { parseSync } from "oxc-parser"
import { extractStandalone } from "../lib/extract-bun-standalone"
import {
  assertBunfsRefsResolve,
  DUAL_GRAPH_SOURCE,
  DEFAULT_GRAPH_PLATFORMS,
  dispatcherSource,
  expandZstdTextAsset,
  rewriteBunfsSpecifiers,
  sha256HexBytes,
} from "../lib/graph-bundle"
import { DIRECT_LATEST_URL, directManifestUrl, directNativeBinaryUrl } from "../lib/upstream-channels"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

const SINGLE_ENTRYPOINT_FALLBACK_EXIT = 3
// A self-contained legacy entrypoint is tens of megabytes; graph entrypoints
// are a few kilobytes. One megabyte cleanly separates the shapes.
const SINGLE_ENTRYPOINT_BYTES = 1_000_000

type Args = {
  version: string
  platforms: string[]
}

type DirectManifest = {
  version: string
  commit?: string
  buildDate?: string
  platforms: Record<string, { binary: string; checksum: string; size: number }>
}

type ExtractedFile = {
  path: string
  contents: Uint8Array
  isEntrypoint: boolean
  loader: number
}

type MaterializedFileReport = {
  path: string
  loader: number
  transformation: "identity" | "bunfs-specifier-rewrite-v1" | "zstd-decompress-v1"
  upstream: { encoding: "identity" | "zstd"; bytes: number; sha256: string }
  materialized: { encoding: "identity"; bytes: number; sha256: string }
}

function parseArgs(argv: string[]): Args {
  let version = "latest"
  const platforms: string[] = []
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--version") version = argv[++i]
    else if (arg === "--platform") platforms.push(argv[++i])
    else if (arg === "--help" || arg === "-h") {
      console.log("usage: bun run tools/platform/stage-dual-graph.ts --version <ver> [--platform darwin-arm64 --platform linux-x64]")
      process.exit(0)
    } else throw new Error(`unexpected argument: ${arg}`)
  }
  return { version, platforms: platforms.length > 0 ? platforms : [...DEFAULT_GRAPH_PLATFORMS] }
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`fetch failed for ${url}: ${response.status} ${response.statusText}`)
  return (await response.json()) as T
}

function download(url: string, path: string): void {
  mkdirSync(dirname(path), { recursive: true })
  const result = Bun.spawnSync({
    cmd: ["curl", "-fL", "--retry", "3", "--retry-delay", "2", "-o", path, url],
    cwd: ROOT,
    stdout: "inherit",
    stderr: "inherit",
  })
  if (!result.success) throw new Error(`download failed (${result.exitCode}) for ${url}`)
}

function downloadOrRead(url: string, path: string, expectedSha256: string): Uint8Array {
  if (existsSync(path)) {
    const cached = new Uint8Array(readFileSync(path))
    if (sha256HexBytes(cached) === expectedSha256) return cached
  }
  download(url, path)
  const bytes = new Uint8Array(readFileSync(path))
  if (sha256HexBytes(bytes) !== expectedSha256) {
    throw new Error(`checksum mismatch for ${path}: expected ${expectedSha256}`)
  }
  return bytes
}

function assertParses(platform: string, path: string, text: string): void {
  let ast
  try {
    ast = parseSync("staged.js", text, { astType: "js", lang: "js", sourceType: "module" })
  } catch (error) {
    throw new Error(`${platform}/${path} failed to parse: ${error instanceof Error ? error.message : String(error)}`)
  }
  const errors = ast.errors ?? []
  if (errors.length > 0) {
    throw new Error(`${platform}/${path} has ${errors.length} parse error(s): ${errors[0]?.message ?? "unknown"}`)
  }
}

function materializePlatform(
  platform: string,
  binaryPath: string,
  graphDir: string,
): {
  fileCount: number
  entrypointSha256: string
  files: MaterializedFileReport[]
} {
  const graph = extractStandalone(new Uint8Array(readFileSync(binaryPath)))
  const entrypoint = graph.files.find((file) => file.isEntrypoint)
  if (!entrypoint) throw new Error(`no entrypoint found for ${platform}`)

  // Shape gate: legacy single-entrypoint bundles must go through the
  // canonical platform merge instead.
  if (entrypoint.contents.byteLength > SINGLE_ENTRYPOINT_BYTES) {
    console.error(
      `${platform} entrypoint is ${entrypoint.contents.byteLength} bytes (single-entrypoint layout); falling back to legacy merge`,
    )
    process.exit(SINGLE_ENTRYPOINT_FALLBACK_EXIT)
  }

  mkdirSync(graphDir, { recursive: true })
  const decoder = new TextDecoder()
  const files: MaterializedFileReport[] = []
  let entrypointSha256 = ""

  // Pre-pass: the graph-relative path set every specifier must resolve to.
  const knownPaths = new Set<string>(graph.files.map((file) => (file.isEntrypoint ? "cli.js" : file.path)))

  for (const file of graph.files as ExtractedFile[]) {
    const isEntrypoint = file.isEntrypoint
    const targetName = isEntrypoint ? "cli.js" : file.path
    if (isEntrypoint && files.some((f) => f.path === "cli.js")) {
      throw new Error(`upstream graph already contains cli.js; refusing to shadow entrypoint`)
    }
    const target = join(graphDir, targetName)
    mkdirSync(dirname(target), { recursive: true })
    const upstream = {
      encoding: (file.loader === 5 ? "zstd" : "identity") as "identity" | "zstd",
      bytes: file.contents.byteLength,
      sha256: sha256HexBytes(file.contents),
    }

    if (file.loader === 1) {
      const text = decoder.decode(file.contents)
      assertBunfsRefsResolve(text, knownPaths, `${platform}/${targetName}`)
      const fromDir = targetName.includes("/") ? targetName.slice(0, targetName.lastIndexOf("/")) : ""
      const rewritten = rewriteBunfsSpecifiers(text, fromDir)
      assertParses(platform, targetName, rewritten)
      const bytes = Buffer.from(rewritten, "utf8")
      writeFileSync(target, bytes)
      files.push({
        path: targetName,
        loader: file.loader,
        transformation: rewritten === text ? "identity" : "bunfs-specifier-rewrite-v1",
        upstream,
        materialized: { encoding: "identity", bytes: bytes.byteLength, sha256: sha256HexBytes(bytes) },
      })
      if (isEntrypoint) entrypointSha256 = sha256HexBytes(file.contents)
      continue
    }

    if (file.loader === 5) {
      const expanded = expandZstdTextAsset(file.contents, `${platform}/${targetName}`)
      writeFileSync(target, expanded)
      files.push({
        path: targetName,
        loader: file.loader,
        transformation: "zstd-decompress-v1",
        upstream,
        materialized: {
          encoding: "identity",
          bytes: expanded.byteLength,
          sha256: sha256HexBytes(expanded),
        },
      })
      continue
    }

    writeFileSync(target, file.contents)
    files.push({
      path: targetName,
      loader: file.loader,
      transformation: "identity",
      upstream,
      materialized: {
        encoding: "identity",
        bytes: file.contents.byteLength,
        sha256: sha256HexBytes(file.contents),
      },
    })
  }

  return { fileCount: files.length, entrypointSha256, files }
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version === "latest" ? await (await fetch(DIRECT_LATEST_URL)).text().then((t) => t.trim()) : args.version
  const manifest = await fetchJson<DirectManifest>(directManifestUrl(version))

  const stagedDir = join(ROOT, "staging", version)
  const graphRoot = join(stagedDir, "graph")
  mkdirSync(stagedDir, { recursive: true })
  if (existsSync(graphRoot)) {
    console.error(`removing previous graph staging: ${graphRoot}`)
    rmSync(graphRoot, { recursive: true, force: true })
  }

  const platformReports: Array<Record<string, unknown>> = []
  const manifestPlatforms: Array<Record<string, unknown>> = []
  for (const platform of args.platforms) {
    const platformManifest = manifest.platforms[platform]
    if (!platformManifest) throw new Error(`platform ${platform} not found in direct manifest for ${version}`)
    const binaryUrl = directNativeBinaryUrl(version, platform, platformManifest.binary)
    const binaryPath = join(stagedDir, "platform-merge", platform, platformManifest.binary)
    const binary = downloadOrRead(binaryUrl, binaryPath, platformManifest.checksum)
    const binarySha256 = sha256HexBytes(binary)
    if (binarySha256 !== platformManifest.checksum) {
      throw new Error(`checksum mismatch for ${platform}: expected ${platformManifest.checksum}, got ${binarySha256}`)
    }
    const report = materializePlatform(platform, binaryPath, join(graphRoot, platform))
    console.error(`staged ${platform} graph: ${report.fileCount} files -> graph/${platform}`)
    const entrypointFile = report.files.find((f) => f.path === "cli.js")
    platformReports.push({
      platform,
      binaryUrl,
      binary: platformManifest.binary,
      binarySha256,
      entrypointSha256: report.entrypointSha256,
      entrypointBytes: entrypointFile?.materialized.bytes ?? 0,
      fileCount: report.fileCount,
    })
    manifestPlatforms.push({
      platform,
      binarySha256,
      entrypointPath: "cli.js",
      fileCount: report.fileCount,
      files: report.files,
    })
  }

  writeFileSync(
    join(stagedDir, "graph-manifest.json"),
    JSON.stringify(
      {
        schema: 2,
        mergePolicy: "canonical-dual-graph-v1",
        version,
        specifierRewrite: "bunfs-to-graph-relative",
        textAssetMaterialization: "zstd-decompress-v1",
        platforms: manifestPlatforms,
      },
      null,
      2,
    ) + "\n",
  )

  writeFileSync(join(stagedDir, "cli.js"), dispatcherSource("staged"))
  writeFileSync(
    join(stagedDir, "stage-manifest.json"),
    JSON.stringify(
      {
        package: "@anthropic-ai/claude-code",
        version,
        channel: "canonical",
        source: DUAL_GRAPH_SOURCE,
        directManifest: {
          version: manifest.version,
          commit: manifest.commit,
          buildDate: manifest.buildDate,
        },
        platforms: platformReports,
        basePlatform: args.platforms[0],
        dualGraph: {
          mergePolicy: "canonical-dual-graph-v1",
          graphDir: "graph",
          dispatcher: "cli.js",
          platforms: args.platforms,
        },
        cliPath: join(stagedDir, "cli.js"),
        bytes: Bun.file(join(stagedDir, "cli.js")).size,
      },
      null,
      2,
    ) + "\n",
  )

  console.error(`canonical dual-graph ${version} [${args.platforms.join("+")}] -> ${graphRoot}`)
  return 0
}

if (import.meta.main) {
  process.exit(await main())
}
