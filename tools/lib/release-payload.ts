import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs"
import { isAbsolute, join, relative, sep } from "node:path"
import { loadPatchEntriesFromToml, type PatchEntry } from "./patch-files"

export const RELEASE_NAME = "audited-claude-code"
export const UPSTREAM_PACKAGE = "@anthropic-ai/claude-code"

export type Patch = PatchEntry

export type PatchFile = {
  patch: Patch
  raw: string
}

export type StageManifest = {
  source?: string
  platformPackage?: string
  nativeTarball?: string
  canonical?: {
    cliPath: string
    reportPath: string
    bytes: number
    sha256: string
    structuralSha256?: string
    structuralParseErrors?: number
    mergePolicy: string
  }
  platforms?: Array<{
    platform: string
    binaryUrl: string
    binarySha256: string
    entrypointSha256: string
    entrypointBytes: number
  }>
}

export type ReleaseManifest = {
  schema: 1
  name: typeof RELEASE_NAME
  upstream: {
    package: typeof UPSTREAM_PACKAGE
    version: string
    source: string | null
    platformPackage: string | null
    nativeTarball: string | null
    canonical: StageManifest["canonical"] | null
    platforms: StageManifest["platforms"] | null
  }
  release: {
    id: string
    tag: string | null
    gitCommit: string | null
    builtAt: string | null
  }
  runtime: {
    command: "bun"
    entrypoint: "cli.js"
  }
  patchSet: {
    count: number
    sha256: string
    names: string[]
  }
  bundle: {
    file: "cli.js"
    bytes: number
    sha256: string
  }
}

export type ReleasePayload = {
  manifest: ReleaseManifest
  cliBytes: Buffer
  cliHash: {
    hex: string
    sri: string
  }
}

export type ReleasePayloadOptions = {
  root: string
  version: string
  releaseId: string
  input: string
  outDir: string
  tag?: string | null
  gitCommit?: string | null
  builtAt?: string | null
}

export function releaseTag(version: string, releaseId: string): string {
  return `claude-code-${version}-${releaseId}`
}

export function artifactBase(version: string, releaseId: string): string {
  return `${RELEASE_NAME}-${version}-${releaseId}`
}

export function sha256(buf: Buffer | Uint8Array | string): { hex: string; sri: string } {
  const digest = createHash("sha256").update(buf).digest()
  return { hex: digest.toString("hex"), sri: `sha256-${digest.toString("base64")}` }
}

export function loadPatches(root: string): PatchFile[] {
  const patchDir = join(root, "patches")
  return readdirSync(patchDir)
    .filter((file) => file.endsWith(".toml"))
    .sort()
    .map((file) => {
      const raw = readFileSync(join(patchDir, file), "utf8")
      return loadPatchEntriesFromToml(raw, join(patchDir, file)).map((patch) => ({ patch, raw }))
    })
    .flat()
}

export function loadStageManifest(root: string, version: string): StageManifest | null {
  const path = join(root, "staging", version, "stage-manifest.json")
  if (!existsSync(path)) return null
  return JSON.parse(readFileSync(path, "utf8")) as StageManifest
}

export function writeReleasePayload(options: ReleasePayloadOptions): ReleasePayload {
  const cliBytes = readFileSync(options.input)
  const cliHash = sha256(cliBytes)
  const manifest = buildReleaseManifest(options, cliBytes, cliHash)

  mkdirSync(join(options.outDir, "bin"), { recursive: true })
  writeFileSync(join(options.outDir, "cli.js"), cliBytes, { mode: 0o644 })
  writeFileSync(join(options.outDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")
  writeFileSync(
    join(options.outDir, "package.json"),
    JSON.stringify(releasePackageJson(options.version, options.releaseId), null, 2) + "\n",
  )
  writeFileSync(
    join(options.outDir, "bin", "claude-audited"),
    `#!/usr/bin/env sh
set -eu
dir="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
exec bun "$dir/cli.js" "$@"
`,
    { mode: 0o755 },
  )

  return { manifest, cliBytes, cliHash }
}

function buildReleaseManifest(
  options: ReleasePayloadOptions,
  cliBytes: Buffer,
  cliHash: { hex: string; sri: string },
): ReleaseManifest {
  const patches = loadPatches(options.root)
  const stageManifest = sanitizeStageManifest(options.root, loadStageManifest(options.root, options.version))
  const patchSetSource = patches.map(({ patch, raw }) => `${patch.name}\0${raw}`).join("\n")

  return {
    schema: 1,
    name: RELEASE_NAME,
    upstream: {
      package: UPSTREAM_PACKAGE,
      version: options.version,
      source: stageManifest?.source ?? null,
      platformPackage: stageManifest?.platformPackage ?? null,
      nativeTarball: stageManifest?.nativeTarball ?? null,
      canonical: stageManifest?.canonical ?? null,
      platforms: stageManifest?.platforms ?? null,
    },
    release: {
      id: options.releaseId,
      tag: options.tag ?? null,
      gitCommit: options.gitCommit ?? null,
      builtAt: options.builtAt ?? null,
    },
    runtime: {
      command: "bun",
      entrypoint: "cli.js",
    },
    patchSet: {
      count: patches.length,
      sha256: sha256(patchSetSource).sri,
      names: patches.map(({ patch }) => patch.name),
    },
    bundle: {
      file: "cli.js",
      bytes: cliBytes.byteLength,
      sha256: cliHash.sri,
    },
  }
}

function releasePackageJson(version: string, releaseId: string): Record<string, unknown> {
  return {
    name: RELEASE_NAME,
    version: `${version}-${releaseId}`,
    private: true,
    type: "module",
    bin: {
      "claude-audited": "bin/claude-audited",
    },
    engines: {
      bun: ">=1.3.13",
    },
  }
}

function sanitizeStageManifest(root: string, manifest: StageManifest | null): StageManifest | null {
  if (!manifest) return null
  return {
    ...manifest,
    canonical: manifest.canonical
      ? {
          ...manifest.canonical,
          cliPath: repositoryRelativePath(root, manifest.canonical.cliPath),
          reportPath: repositoryRelativePath(root, manifest.canonical.reportPath),
        }
      : undefined,
  }
}

function repositoryRelativePath(root: string, path: string): string {
  if (!isAbsolute(path)) return path
  const candidate = relative(root, path)
  if (candidate === "" || candidate.startsWith("..") || isAbsolute(candidate)) return path
  return candidate.split(sep).join("/")
}
