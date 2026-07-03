#!/usr/bin/env bun
// Download a Claude Code release and stage its JS bundle at staging/<version>/cli.js.
//
// Supports both old npm packages that ship package/cli.js and current native
// wrapper packages that ship platform optional Bun standalone binaries.

import { createHash } from "node:crypto"
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { createCommand } from "../lib/cli"
import { BUN_STANDALONE_LAYOUT_CONTRACT, extractStandalone } from "../lib/extract-bun-standalone"
import {
  DIRECT_LATEST_URL,
  DIRECT_RELEASE_BASE,
  directManifestUrl,
  directNativeBinaryUrl,
} from "../lib/upstream-channels"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")
const REGISTRY = "https://registry.npmjs.org"
const PACKAGE = "@anthropic-ai/claude-code"

export const STAGING_SUPPORT_CONTRACT = {
  legacyWrapperCli: {
    knownGoodVersions: ["2.1.112"],
    condition: "package/cli.js exists in @anthropic-ai/claude-code tarball",
  },
  nativeBunStandalone: {
    knownGoodVersions: ["2.1.132", "2.1.133", "2.1.181", "2.1.197", "2.1.199"],
    provisionalRange: ">=2.1.132 <2.2.0",
    condition: "wrapper package declares a platform optional dependency with a Bun standalone binary",
    layoutContract: BUN_STANDALONE_LAYOUT_CONTRACT.name,
  },
  nativeDownloadsManifest: {
    knownGoodVersions: ["2.1.132", "2.1.133", "2.1.181", "2.1.197", "2.1.199"],
    condition: "Claude direct-download manifest exposes platform Bun standalone binaries",
    layoutContract: BUN_STANDALONE_LAYOUT_CONTRACT.name,
  },
} as const

type PackageMeta = {
  "dist-tags": Record<string, string>
  versions: Record<
    string,
    {
      version: string
      dist: { tarball: string }
      optionalDependencies?: Record<string, string>
    }
  >
}

type Args = {
  version: string
  platformPackage?: string
  source: "npm" | "direct"
  platform: string
  keepAll: boolean
}

type DirectManifest = {
  version: string
  commit?: string
  buildDate?: string
  platforms: Record<
    string,
    {
      binary: string
      checksum: string
      size: number
    }
  >
}

export function parseArgs(argv: string[]): Args {
  const program = createCommand("stage-claude-code")
    .argument("[version]", "version to stage", "latest")
    .option("--platform-package <package>")
    .option("--source <source>", "npm or direct", "npm")
    .option("--platform <direct-platform>", "direct release platform", "darwin-arm64")
    .option("--all", "keep all extracted package files")
    .parse(argv, { from: "user" })
  const options = program.opts<{ platformPackage?: string; source: string; platform: string; all?: boolean }>()
  if (options.source !== "npm" && options.source !== "direct") throw new Error(`unsupported source: ${options.source}`)

  return {
    version: program.args[0] ?? "latest",
    source: options.source,
    platform: options.platform,
    keepAll: options.all ?? false,
    ...(options.platformPackage ? { platformPackage: options.platformPackage } : {}),
  }
}

async function registryJson<T>(packageName: string): Promise<T> {
  const encoded = packageName.replace("/", "%2f")
  const response = await fetch(`${REGISTRY}/${encoded}`)
  if (!response.ok) {
    throw new Error(`registry fetch failed for ${packageName}: ${response.status} ${response.statusText}`)
  }
  return (await response.json()) as T
}

async function download(url: string, output: string): Promise<void> {
  mkdirSync(dirname(output), { recursive: true })
  const result = Bun.spawnSync({
    cmd: ["curl", "-fL", "--retry", "3", "--retry-delay", "2", "-o", output, url],
    cwd: ROOT,
    stdout: "inherit",
    stderr: "inherit",
  })
  if (!result.success) {
    throw new Error(`download failed (${result.exitCode}) for ${url}`)
  }
}

function sha256Hex(bytes: Uint8Array): string {
  return createHash("sha256").update(bytes).digest("hex")
}

function run(cmd: string[], cwd: string): void {
  const result = Bun.spawnSync({ cmd, cwd, stdout: "inherit", stderr: "inherit" })
  if (!result.success) {
    throw new Error(`command failed (${result.exitCode}): ${cmd.join(" ")}`)
  }
}

function currentPlatformPackage(optionalDependencies: Record<string, string> = {}): string {
  const cpu = process.arch === "x64" ? "x64" : process.arch === "arm64" ? "arm64" : process.arch
  const key = `${process.platform}-${cpu}`
  const muslKey = `${key}-musl`
  const candidates =
    process.platform === "linux" ? [`${PACKAGE}-${muslKey}`, `${PACKAGE}-${key}`] : [`${PACKAGE}-${key}`]

  for (const candidate of candidates) {
    if (optionalDependencies[candidate]) return candidate
  }
  throw new Error(`no native Claude Code package listed for ${key}`)
}

function findNativeBinary(extractedPackageDir: string): string {
  const candidates = [
    join(extractedPackageDir, "package", "claude"),
    join(extractedPackageDir, "package", "claude.exe"),
    join(extractedPackageDir, "package", "bin", "claude"),
    join(extractedPackageDir, "package", "bin", "claude.exe"),
  ]
  const found = candidates.find((candidate) => existsSync(candidate))
  if (!found) throw new Error(`native binary not found under ${extractedPackageDir}/package`)
  return found
}

async function resolveDirectVersion(version: string): Promise<string> {
  if (version !== "latest") return version
  const response = await fetch(DIRECT_LATEST_URL)
  if (!response.ok) {
    throw new Error(`direct latest fetch failed: ${response.status} ${response.statusText}`)
  }
  return (await response.text()).trim()
}

async function fetchDirectManifest(version: string): Promise<DirectManifest> {
  const response = await fetch(directManifestUrl(version))
  if (!response.ok) {
    throw new Error(`direct manifest fetch failed for ${version}: ${response.status} ${response.statusText}`)
  }
  return (await response.json()) as DirectManifest
}

async function extractNativeBinaryToCli(args: {
  binaryPath: string
  stageDir: string
  cliPath: string
  keepAll: boolean
}): Promise<{ nativeBinarySha256: string; entrypointSha256: string }> {
  const binaryBytes = new Uint8Array(readFileSync(args.binaryPath))
  const nativeBinarySha256 = sha256Hex(binaryBytes)
  const graph = extractStandalone(binaryBytes)
  const entry = graph.files.find((file) => file.isEntrypoint)
  if (!entry) throw new Error("native standalone graph has no entrypoint")
  await Bun.write(args.cliPath, entry.contents)

  writeFileSync(
    join(args.stageDir, "bun-standalone-manifest.json"),
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

  if (args.keepAll) {
    for (const file of graph.files) {
      const out = join(args.stageDir, "files", file.path)
      mkdirSync(dirname(out), { recursive: true })
      await Bun.write(out, file.contents)
    }
  }

  return { nativeBinarySha256, entrypointSha256: sha256Hex(entry.contents) }
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  const meta = args.source === "npm" ? await registryJson<PackageMeta>(PACKAGE) : undefined
  const version =
    args.source === "npm"
      ? args.version === "latest"
        ? meta!["dist-tags"].latest
        : args.version
      : await resolveDirectVersion(args.version)
  const wrapper = meta?.versions[version]
  if (args.source === "npm" && !wrapper) throw new Error(`${PACKAGE}@${version} not found`)

  const stageDir = join(ROOT, "staging", version)
  const downloadsDir = join(stageDir, "downloads")
  const wrapperDir = join(stageDir, "wrapper")
  const nativeDir = join(stageDir, "native")
  const cliPath = join(stageDir, "cli.js")
  mkdirSync(stageDir, { recursive: true })
  rmSync(wrapperDir, { recursive: true, force: true })
  rmSync(nativeDir, { recursive: true, force: true })
  mkdirSync(downloadsDir, { recursive: true })

  if (args.source === "npm") {
    const wrapperTgz = join(downloadsDir, "claude-code.tgz")
    await download(wrapper!.dist.tarball, wrapperTgz)
    mkdirSync(wrapperDir, { recursive: true })
    run(["tar", "-xzf", wrapperTgz, "-C", wrapperDir], ROOT)
  }

  const wrapperCli = join(wrapperDir, "package", "cli.js")
  let source: "wrapper-cli" | "native-bun-standalone"
  let platformPackage: string | undefined
  let directPlatform: string | undefined
  let nativeTarball: string | undefined
  let nativeBinary: string | undefined
  let nativeBinaryUrl: string | undefined
  let nativeBinarySha256: string | undefined
  let entrypointSha256: string | undefined
  let directManifest: DirectManifest | undefined

  if (args.source === "direct") {
    directManifest = await fetchDirectManifest(version)
    directPlatform = args.platform
    const platformManifest = directManifest.platforms[directPlatform]
    if (!platformManifest) throw new Error(`direct platform ${directPlatform} not found for ${version}`)

    nativeBinaryUrl = directNativeBinaryUrl(version, directPlatform, platformManifest.binary)
    nativeBinary = join(
      downloadsDir,
      `claude-${version}-${directPlatform}${platformManifest.binary.endsWith(".exe") ? ".exe" : ""}`,
    )
    await download(nativeBinaryUrl, nativeBinary)
    const extracted = await extractNativeBinaryToCli({
      binaryPath: nativeBinary,
      stageDir,
      cliPath,
      keepAll: args.keepAll,
    })
    nativeBinarySha256 = extracted.nativeBinarySha256
    entrypointSha256 = extracted.entrypointSha256

    if (nativeBinarySha256 !== platformManifest.checksum) {
      throw new Error(
        `direct checksum mismatch for ${directPlatform}: expected ${platformManifest.checksum}, got ${nativeBinarySha256}`,
      )
    }
    source = "native-bun-standalone"
  } else if (existsSync(wrapperCli)) {
    copyFileSync(wrapperCli, cliPath)
    source = "wrapper-cli"
  } else {
    platformPackage = args.platformPackage ?? currentPlatformPackage(wrapper!.optionalDependencies)
    const platformMeta = await registryJson<PackageMeta>(platformPackage)
    const platformVersion = platformMeta.versions[version]
    if (!platformVersion) throw new Error(`${platformPackage}@${version} not found`)

    nativeTarball = platformVersion.dist.tarball
    const nativeTgz = join(downloadsDir, `${platformPackage.split("/").pop()}.tgz`)
    await download(nativeTarball, nativeTgz)
    mkdirSync(nativeDir, { recursive: true })
    run(["tar", "-xzf", nativeTgz, "-C", nativeDir], ROOT)

    nativeBinary = findNativeBinary(nativeDir)
    const extracted = await extractNativeBinaryToCli({
      binaryPath: nativeBinary,
      stageDir,
      cliPath,
      keepAll: args.keepAll,
    })
    nativeBinarySha256 = extracted.nativeBinarySha256
    entrypointSha256 = extracted.entrypointSha256
    source = "native-bun-standalone"
  }

  const knownGoodVersions =
    source === "wrapper-cli"
      ? STAGING_SUPPORT_CONTRACT.legacyWrapperCli.knownGoodVersions
      : STAGING_SUPPORT_CONTRACT.nativeBunStandalone.knownGoodVersions
  const knownGoodExtraction = (knownGoodVersions as readonly string[]).includes(version)
  if (!knownGoodExtraction) {
    console.error(`warning: staged ${version} is not listed as known-good in the extraction support contract`)
  }

  writeFileSync(
    join(stageDir, "stage-manifest.json"),
    JSON.stringify(
      {
        package: PACKAGE,
        version,
        channel: args.source,
        source,
        wrapperTarball: wrapper?.dist.tarball,
        platformPackage,
        directPlatform,
        nativeTarball,
        nativeBinary,
        nativeBinaryUrl,
        nativeBinarySha256,
        entrypointSha256,
        directManifest: directManifest
          ? {
              version: directManifest.version,
              commit: directManifest.commit,
              buildDate: directManifest.buildDate,
              platformChecksum: directPlatform ? directManifest.platforms[directPlatform]?.checksum : undefined,
              platformSize: directPlatform ? directManifest.platforms[directPlatform]?.size : undefined,
            }
          : undefined,
        cliPath,
        bytes: Bun.file(cliPath).size,
        extractionSupport: {
          knownGood: knownGoodExtraction,
          contract: STAGING_SUPPORT_CONTRACT,
          bunStandaloneLayout: source === "native-bun-standalone" ? BUN_STANDALONE_LAYOUT_CONTRACT : undefined,
        },
      },
      null,
      2,
    ) + "\n",
  )

  const channelLabel =
    args.source === "direct"
      ? (nativeBinaryUrl ?? `${DIRECT_RELEASE_BASE}/${version}/${args.platform}`)
      : `${PACKAGE}@${version}`
  console.error(`staged ${channelLabel} -> ${cliPath}`)
  return 0
}

if (import.meta.main) {
  process.exit(await main())
}
