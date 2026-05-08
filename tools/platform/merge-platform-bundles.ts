#!/usr/bin/env bun
// Build one canonical JS bundle from Darwin and Linux GCS native bundles.

import { createHash } from "node:crypto"
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { extractStandalone } from "../lib/extract-bun-standalone"
import { mergePlatformJavaScript } from "../lib/platform-merge"
import { structuralJavaScriptHash } from "../lib/js-structure"
import { GCS_STABLE_URL, gcsManifestUrl, gcsNativeBinaryUrl } from "../lib/upstream-channels"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")
const DEFAULT_PLATFORMS = ["darwin-arm64", "linux-x64"]

type Args = {
  version: string
  platforms: string[]
  basePlatform: string
  generalizeUnknownStringLiterals: boolean
}

type GcsManifest = {
  version: string
  commit?: string
  buildDate?: string
  platforms: Record<string, { binary: string; checksum: string; size: number }>
}

type ExtractedPlatform = {
  platform: string
  binary: string
  binaryUrl: string
  binaryPath: string
  binarySha256: string
  entrypointSha256: string
  entrypointBytes: number
  cliPath: string
  source: string
}

function parseArgs(argv: string[]): Args {
  const args: Args = {
    version: "latest",
    platforms: [],
    basePlatform: "darwin-arm64",
    generalizeUnknownStringLiterals: false,
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--version") {
      args.version = argv[++i]
    } else if (arg === "--platform") {
      args.platforms.push(argv[++i])
    } else if (arg === "--base") {
      args.basePlatform = argv[++i]
    } else if (arg === "--generalize-unknown-string-literals") {
      args.generalizeUnknownStringLiterals = true
    } else if (arg === "--help" || arg === "-h") {
      console.log(
        "usage: bun run tools/platform/merge-platform-bundles.ts --version <ver> [--platform darwin-arm64 --platform linux-x64] [--base darwin-arm64] [--generalize-unknown-string-literals]",
      )
      process.exit(0)
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }
  if (args.platforms.length === 0) args.platforms = DEFAULT_PLATFORMS
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

async function extractPlatform(version: string, manifest: GcsManifest, platform: string): Promise<ExtractedPlatform> {
  const platformManifest = manifest.platforms[platform]
  if (!platformManifest) throw new Error(`platform ${platform} not found in GCS manifest for ${version}`)

  const platformDir = join(ROOT, "staging", version, "platform-merge", platform)
  const binaryUrl = gcsNativeBinaryUrl(version, platform, platformManifest.binary)
  const binaryPath = join(platformDir, platformManifest.binary)
  const binary = await downloadOrRead(binaryUrl, binaryPath, platformManifest.checksum)
  const binarySha256 = sha256Hex(binary)
  if (binarySha256 !== platformManifest.checksum) {
    throw new Error(`checksum mismatch for ${platform}: expected ${platformManifest.checksum}, got ${binarySha256}`)
  }

  const graph = extractStandalone(binary)
  const entrypoint = graph.files.find((file) => file.isEntrypoint)
  if (!entrypoint) throw new Error(`no entrypoint found in ${platform}`)
  const cliPath = join(platformDir, "cli.js")
  await Bun.write(cliPath, entrypoint.contents)

  writeFileSync(
    join(platformDir, "bun-standalone-manifest.json"),
    JSON.stringify(
      {
        byteCount: graph.byteCount,
        payloadStart: graph.payloadStart,
        trailerOffset: graph.trailerOffset,
        entrypointId: graph.entrypointId,
        flags: graph.flags,
        files: graph.files.map((file) => ({
          path: file.path,
          rawPath: file.rawPath,
          bytes: file.contents.byteLength,
          isEntrypoint: file.isEntrypoint,
          loader: file.loader,
          moduleFormat: file.moduleFormat,
          side: file.side,
        })),
      },
      null,
      2,
    ) + "\n",
  )

  return {
    platform,
    binary: platformManifest.binary,
    binaryUrl,
    binaryPath,
    binarySha256,
    entrypointSha256: sha256Hex(entrypoint.contents),
    entrypointBytes: entrypoint.contents.byteLength,
    cliPath,
    source: new TextDecoder().decode(entrypoint.contents),
  }
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version === "latest" ? await fetchText(GCS_STABLE_URL) : args.version
  const manifest = await fetchJson<GcsManifest>(gcsManifestUrl(version))
  const platforms = await Promise.all(args.platforms.map((platform) => extractPlatform(version, manifest, platform)))
  const base = platforms.find((platform) => platform.platform === args.basePlatform)
  if (!base) throw new Error(`base platform ${args.basePlatform} was not extracted`)
  const others = platforms.filter((platform) => platform.platform !== args.basePlatform)
  if (others.length !== 1) {
    throw new Error(`canonical merge currently requires exactly one non-base platform, got ${others.length}`)
  }

  const merged = mergePlatformJavaScript({
    version,
    basePlatform: base.platform,
    baseSource: base.source,
    otherPlatform: others[0].platform,
    otherSource: others[0].source,
    generalizeUnknownStringLiterals: args.generalizeUnknownStringLiterals,
  })

  const canonicalDir = join(ROOT, "staging", version, "canonical")
  const canonicalPath = join(canonicalDir, "cli.js")
  const reportPath = join(canonicalDir, "platform-merge-report.json")
  mkdirSync(canonicalDir, { recursive: true })
  await Bun.write(canonicalPath, merged.canonicalSource)
  const canonicalBytes = new Uint8Array(readFileSync(canonicalPath))
  const canonicalStructure = structuralJavaScriptHash(merged.canonicalSource)
  writeFileSync(
    reportPath,
    JSON.stringify(
      {
        ...merged.report,
        sourcePlatforms: platforms.map(({ source: _source, ...platform }) => platform),
        output: {
          cliPath: canonicalPath,
          bytes: Bun.file(canonicalPath).size,
          sha256: sha256Hex(canonicalBytes),
          structuralSha256: canonicalStructure.sha256,
          structuralTokenBytes: canonicalStructure.tokenBytes,
          structuralParseErrors: canonicalStructure.parseErrors,
        },
      },
      null,
      2,
    ) + "\n",
  )

  const stagedCliPath = join(ROOT, "staging", version, "cli.js")
  copyFileSync(canonicalPath, stagedCliPath)
  writeFileSync(
    join(ROOT, "staging", version, "stage-manifest.json"),
    JSON.stringify(
      {
        package: "@anthropic-ai/claude-code",
        version,
        channel: "canonical",
        source: "canonical-platform-merge",
        gcsManifest: {
          version: manifest.version,
          commit: manifest.commit,
          buildDate: manifest.buildDate,
        },
        platforms: platforms.map(({ source: _source, ...platform }) => platform),
        basePlatform: base.platform,
        canonical: {
          cliPath: canonicalPath,
          reportPath,
          bytes: Bun.file(canonicalPath).size,
          sha256: sha256Hex(canonicalBytes),
          structuralSha256: canonicalStructure.sha256,
          structuralParseErrors: canonicalStructure.parseErrors,
          mergePolicy: merged.report.mergePolicy,
        },
        cliPath: stagedCliPath,
        bytes: Bun.file(stagedCliPath).size,
      },
      null,
      2,
    ) + "\n",
  )

  console.error(`canonical ${version} ${base.platform}+${others[0].platform} -> ${canonicalPath}`)
  if (!merged.ok) {
    console.error(`platform merge has ${merged.report.unclassifiedDrift.length} unclassified drift item(s): ${reportPath}`)
    return 1
  }
  if (canonicalStructure.parseErrors > 0) {
    console.error(`canonical output has ${canonicalStructure.parseErrors} parse error(s): ${reportPath}`)
    return 1
  }
  return 0
}

if (import.meta.main) {
  process.exit(await main())
}
