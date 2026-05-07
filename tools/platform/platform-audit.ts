#!/usr/bin/env bun
// Compare native-channel embedded JS across Linux and Darwin builds.

import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { extractStandalone } from "../lib/extract-bun-standalone"
import { structuralJavaScriptHash } from "../lib/js-structure"
import { GCS_STABLE_URL, gcsManifestUrl, gcsNativeBinaryUrl } from "../lib/upstream-channels"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version: string
  platforms: string[]
}

type GcsManifest = {
  version: string
  platforms: Record<string, { binary: string; checksum: string; size: number }>
}

type PlatformReport = {
  platform: string
  binaryUrl: string
  binarySha256: string
  entrypointSha256: string
  structuralSha256: string
  structuralTokenBytes: number
  structuralParseErrors: number
  entrypointBytes: number
}

function parseArgs(argv: string[]): Args {
  const args: Args = { version: "latest", platforms: ["linux-x64", "darwin-arm64"] }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--version") {
      args.version = argv[++i]
    } else if (arg === "--platform") {
      args.platforms.push(argv[++i])
    } else if (arg === "--help" || arg === "-h") {
      console.log(
        "usage: bun run tools/platform/platform-audit.ts --version <ver> [--platform linux-x64 --platform darwin-arm64]",
      )
      process.exit(0)
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }
  return args
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`fetch failed for ${url}: ${response.status} ${response.statusText}`)
  return (await response.text()).trim()
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`fetch failed for ${url}: ${response.status} ${response.statusText}`)
  return (await response.json()) as T
}

function sha256Hex(bytes: Uint8Array): string {
  return createHash("sha256").update(bytes).digest("hex")
}

async function download(url: string, path: string): Promise<Uint8Array> {
  mkdirSync(dirname(path), { recursive: true })
  const result = Bun.spawnSync({
    cmd: ["curl", "-fL", "--retry", "3", "--retry-delay", "2", "-o", path, url],
    cwd: ROOT,
    stdout: "inherit",
    stderr: "inherit",
  })
  if (!result.success) throw new Error(`download failed (${result.exitCode}) for ${url}`)
  return new Uint8Array(readFileSync(path))
}

async function downloadOrRead(url: string, path: string, expectedSha256: string): Promise<Uint8Array> {
  if (existsSync(path)) {
    const cached = new Uint8Array(readFileSync(path))
    if (sha256Hex(cached) === expectedSha256) return cached
  }
  return download(url, path)
}

function platformConstantHints(a: string, b: string): string[] {
  const hints = ["process.platform", "process.arch", "darwin", "linux", "win32", "x64", "arm64", "musl"]
  return hints.filter((hint) => {
    const pattern = new RegExp(hint.replaceAll(".", "\\."), "g")
    return [...a.matchAll(pattern)].length !== [...b.matchAll(pattern)].length
  })
}

async function auditPlatform(
  version: string,
  manifest: GcsManifest,
  platform: string,
): Promise<PlatformReport & { entrypointText: string }> {
  const platformManifest = manifest.platforms[platform]
  if (!platformManifest) throw new Error(`platform ${platform} not found in GCS manifest for ${version}`)
  const binaryUrl = gcsNativeBinaryUrl(version, platform, platformManifest.binary)
  const binaryPath = join(ROOT, "staging", version, "platform-audit", platform, platformManifest.binary)
  const binary = await downloadOrRead(binaryUrl, binaryPath, platformManifest.checksum)
  const binarySha256 = sha256Hex(binary)
  if (binarySha256 !== platformManifest.checksum) {
    throw new Error(`checksum mismatch for ${platform}: expected ${platformManifest.checksum}, got ${binarySha256}`)
  }
  const graph = extractStandalone(binary)
  const entrypoint = graph.files.find((file) => file.isEntrypoint)
  if (!entrypoint) throw new Error(`no entrypoint found in ${platform}`)
  const entrypointPath = join(ROOT, "staging", version, "platform-audit", platform, "cli.js")
  await Bun.write(entrypointPath, entrypoint.contents)
  const entrypointText = new TextDecoder().decode(entrypoint.contents)
  const structural = structuralJavaScriptHash(entrypointText)
  return {
    platform,
    binaryUrl,
    binarySha256,
    entrypointSha256: sha256Hex(entrypoint.contents),
    structuralSha256: structural.sha256,
    structuralTokenBytes: structural.tokenBytes,
    structuralParseErrors: structural.parseErrors,
    entrypointBytes: entrypoint.contents.byteLength,
    entrypointText,
  }
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version === "latest" ? await fetchText(GCS_STABLE_URL) : args.version
  const manifest = await fetchJson<GcsManifest>(gcsManifestUrl(version))
  const reports = await Promise.all(args.platforms.map((platform) => auditPlatform(version, manifest, platform)))
  const rawHashes = new Set(reports.map((report) => report.entrypointSha256))
  const structuralHashes = new Set(reports.map((report) => report.structuralSha256))
  const hints = reports.length >= 2 ? platformConstantHints(reports[0].entrypointText, reports[1].entrypointText) : []
  const body = {
    version,
    platforms: reports.map(({ entrypointText: _entrypointText, ...report }) => report),
    rawEntrypointByteDrift: rawHashes.size > 1,
    drift: structuralHashes.size > 1,
    platformConstantHints: hints,
  }
  console.log(JSON.stringify(body, null, 2))
  return body.drift ? 1 : 0
}

if (import.meta.main) {
  process.exit(await main())
}
