import { createHash } from "node:crypto"
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs"
import { isAbsolute, join, relative, resolve, sep } from "node:path"
import { loadPatchEntriesFromToml, type PatchEntry } from "./patch-files"
import {
  PROMPT_CATALOG_RULESET_SHA256,
  readPromptCatalogManifest,
  rebindPromptCatalog,
  writePromptCatalog,
} from "./prompt-catalog"
import { loadStageManifest, type StageManifest } from "./stage-manifest"

export const RELEASE_NAME = "patched-claude-code"
export const UPSTREAM_PACKAGE = "@anthropic-ai/claude-code"

export type Patch = PatchEntry

export type PatchFile = {
  patch: Patch
  raw: string
}

export type ReleaseManifest = {
  schema: 2
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
    preload: "runtime/system-prompt-overrides.ts"
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
  promptCatalog: {
    path: "prompts/catalog"
    schema: 2
    completeness: "partial"
    rulesetSha256: string
    entries: number
    contextualGaps: number
    opaqueGaps: number
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
  upstreamInput?: string
  promptCatalogInput?: string
  promptIdentityRoot?: string
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

export function writeReleasePayload(options: ReleasePayloadOptions): ReleasePayload {
  const cliBytes = readFileSync(options.input)
  const cliHash = sha256(cliBytes)
  const baseManifest = buildReleaseManifest(options, cliBytes, cliHash)
  const catalogOutput = join(options.outDir, "prompts", "catalog")
  const upstreamInput = options.upstreamInput ?? join(options.root, "staging", options.version, "cli.js")
  const existingCatalog = options.promptCatalogInput ?? join(options.root, "prompts", "catalog")
  const coordinates = {
    upstreamVersion: options.version,
    releaseId: options.releaseId,
    upstreamBundleSha256: "",
    patchedBundleSha256: cliHash.sri,
    patchSetSha256: baseManifest.patchSet.sha256,
  }
  const catalog = existsSync(upstreamInput)
    ? writePromptCatalog({
        ...coordinates,
        upstreamBundlePath: upstreamInput,
        upstreamBundleSha256: sha256(readFileSync(upstreamInput)).sri,
        patchedBundlePath: options.input,
        outDir: catalogOutput,
        identityRoot: options.promptIdentityRoot ?? join(options.root, "prompt-identities"),
      })
    : existsSync(join(existingCatalog, "manifest.json"))
      ? rebindPromptCatalog(existingCatalog, catalogOutput, {
          ...coordinates,
          upstreamBundleSha256: readPromptCatalogManifest(existingCatalog).target.upstreamBundleSha256,
        })
      : (() => {
          throw new Error(`upstream bundle and reusable prompt catalog are both missing: ${upstreamInput}`)
        })()
  const manifest: ReleaseManifest = {
    ...baseManifest,
    promptCatalog: {
      path: "prompts/catalog",
      schema: catalog.manifest.schema,
      completeness: catalog.manifest.completeness,
      rulesetSha256: PROMPT_CATALOG_RULESET_SHA256,
      entries: catalog.manifest.summary.staticEntries,
      contextualGaps: catalog.manifest.summary.contextualGaps,
      opaqueGaps: catalog.manifest.summary.opaqueGaps,
      sha256: catalog.treeSha256,
    },
  }
  const runtimeFiles = ["macos-keychain.ts", "system-prompt-overrides.ts"]
  for (const file of runtimeFiles) {
    const source = join(options.root, "runtime", file)
    if (!existsSync(source)) throw new Error(`runtime helper missing: ${source}`)
  }

  mkdirSync(join(options.outDir, "bin"), { recursive: true })
  mkdirSync(join(options.outDir, "runtime"), { recursive: true })
  for (const file of runtimeFiles) {
    const source = join(options.root, "runtime", file)
    const output = join(options.outDir, "runtime", file)
    if (resolve(source) !== resolve(output)) copyFileSync(source, output)
  }
  writeFileSync(join(options.outDir, "cli.js"), cliBytes, { mode: 0o644 })
  writeFileSync(join(options.outDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")
  writeFileSync(
    join(options.outDir, "package.json"),
    JSON.stringify(releasePackageJson(options.version, options.releaseId), null, 2) + "\n",
  )
  writeFileSync(
    join(options.outDir, "bin", "claude-patched"),
    `#!/usr/bin/env sh
set -eu
dir="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
export PATCHED_CLAUDE_CODE_RELEASE_MANIFEST="$dir/manifest.json"
export PATCHED_CLAUDE_CODE_BUNDLE="$dir/cli.js"
exec bun --preload "$dir/runtime/system-prompt-overrides.ts" "$dir/cli.js" "$@"
`,
    { mode: 0o755 },
  )

  return { manifest, cliBytes, cliHash }
}

function buildReleaseManifest(
  options: ReleasePayloadOptions,
  cliBytes: Buffer,
  cliHash: { hex: string; sri: string },
): Omit<ReleaseManifest, "promptCatalog"> {
  const patches = loadPatches(options.root)
  const stageManifest = sanitizeStageManifest(options.root, loadStageManifest(options.root, options.version))
  const patchSetSource = patches.map(({ patch, raw }) => `${patch.name}\0${raw}`).join("\n")

  return {
    schema: 2,
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
      preload: "runtime/system-prompt-overrides.ts",
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
      "claude-patched": "bin/claude-patched",
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
