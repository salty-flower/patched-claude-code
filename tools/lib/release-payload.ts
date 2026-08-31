import { createHash } from "node:crypto"
import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path"
import {
  computeRuntimeBundleIntegrity,
  type RuntimeBundleFile,
  type RuntimeGraphDirectory,
} from "../../runtime/release-integrity"
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
    graphDirectory: "graph.patched" | "graph" | null
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
    entrypointSha256: string
    files: RuntimeBundleFile[]
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
  patchObligations?: {
    path: "patch-obligations"
    schema: 1
    status: "passed"
    obligations: number
    decisions: number
    dispositions: {
      ported: number
      upstream_equivalent: number
      retired: number
    }
    receipts: number
    registrySha256: string
    ledgerSha256: string
    admissionSha256: string
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

export function graphDirectoryNameForEntrypoint(source: string): RuntimeGraphDirectory {
  // biome-ignore lint/suspicious/noTemplateCurlyInString: Match the dispatcher's literal platform interpolation.
  if (source.includes("./graph.patched/${platformDir}/cli.js")) return "graph.patched"
  // biome-ignore lint/suspicious/noTemplateCurlyInString: Match the dispatcher's literal platform interpolation.
  if (source.includes("./graph/${platformDir}/cli.js")) return "graph"
  return null
}

export function loadPatches(root: string): PatchFile[] {
  const patchDir = join(root, "patches")
  return readdirSync(patchDir)
    .filter((file) => file.endsWith(".toml"))
    .sort()
    .flatMap((file) => {
      const raw = readFileSync(join(patchDir, file), "utf8")
      return loadPatchEntriesFromToml(raw, join(patchDir, file)).map((patch) => ({ patch, raw }))
    })
}

export function writeReleasePayload(options: ReleasePayloadOptions): ReleasePayload {
  const cliBytes = readFileSync(options.input)
  const cliHash = sha256(cliBytes)
  const graphDirectoryName = graphDirectoryNameForEntrypoint(cliBytes.toString("utf8"))
  if (graphDirectoryName !== null) {
    const graphSource = join(dirname(options.input), graphDirectoryName)
    for (const platform of ["darwin-arm64", "linux-x64"]) {
      if (!existsSync(join(graphSource, platform, "cli.js"))) {
        throw new Error(`rendered ${platform} graph is missing beside release entrypoint: ${graphSource}`)
      }
    }
  }
  const bundleIntegrity = computeRuntimeBundleIntegrity(options.input, graphDirectoryName)
  const baseManifest = buildReleaseManifest(options, cliBytes, cliHash, graphDirectoryName, bundleIntegrity)
  const catalogOutput = join(options.outDir, "prompts", "catalog")
  const upstreamInput = options.upstreamInput ?? join(options.root, "staging", options.version, "cli.js")
  const existingCatalog = options.promptCatalogInput ?? join(options.root, "prompts", "catalog")
  const coordinates = {
    upstreamVersion: options.version,
    releaseId: options.releaseId,
    upstreamBundleSha256: "",
    patchedBundleSha256: bundleIntegrity.sha256,
    patchedEntrypointSha256: cliHash.sri,
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
  const runtimeFiles = ["macos-keychain.ts", "release-integrity.ts", "system-prompt-overrides.ts"]
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
  if (graphDirectoryName !== null) {
    const graphSource = join(dirname(options.input), graphDirectoryName)
    cpSync(graphSource, join(options.outDir, graphDirectoryName), { recursive: true, force: true })
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

export function attachPatchObligationPayload(
  root: string,
  version: string,
  outDir: string,
  manifest: ReleaseManifest,
): ReleaseManifest {
  const registry = join(root, "patch-obligations", "registry.json")
  const ledger = join(root, "patch-obligations", "versions", `${version}.json`)
  const evidence = join(root, "dist", "patch-obligation-evidence", version)
  const admission = join(root, "dist", `patch-obligation-admission-${version}.json`)
  for (const path of [registry, ledger, evidence, admission]) {
    if (!existsSync(path)) throw new Error(`patch obligation release evidence missing: ${path}`)
  }
  const report = JSON.parse(readFileSync(admission, "utf8")) as {
    schema?: unknown
    status?: unknown
    registryObligations?: unknown
    decisions?: unknown
    dispositions?: unknown
    receipts?: unknown
  }
  if (report.schema !== 1 || report.status !== "passed") {
    throw new Error(`patch obligation admission report is not passed: ${admission}`)
  }
  if (
    typeof report.registryObligations !== "number" ||
    typeof report.decisions !== "number" ||
    !isDispositionSummary(report.dispositions) ||
    typeof report.receipts !== "number"
  ) {
    throw new Error(`patch obligation admission report summary is invalid: ${admission}`)
  }

  const destination = join(outDir, "patch-obligations")
  mkdirSync(join(destination, "versions"), { recursive: true })
  mkdirSync(join(destination, "evidence"), { recursive: true })
  copyUnlessSame(registry, join(destination, "registry.json"))
  copyUnlessSame(ledger, join(destination, "versions", `${version}.json`))
  if (resolve(evidence) !== resolve(join(destination, "evidence", version))) {
    cpSync(evidence, join(destination, "evidence", version), { recursive: true, force: true })
  }
  copyUnlessSame(admission, join(destination, "admission.json"))

  const updated: ReleaseManifest = {
    ...manifest,
    patchObligations: {
      path: "patch-obligations",
      schema: 1,
      status: "passed",
      obligations: report.registryObligations,
      decisions: report.decisions,
      dispositions: report.dispositions,
      receipts: report.receipts,
      registrySha256: sha256(readFileSync(registry)).sri,
      ledgerSha256: sha256(readFileSync(ledger)).sri,
      admissionSha256: sha256(readFileSync(admission)).sri,
    },
  }
  writeFileSync(join(outDir, "manifest.json"), `${JSON.stringify(updated, null, 2)}\n`)
  return updated
}

function isDispositionSummary(value: unknown): value is {
  ported: number
  upstream_equivalent: number
  retired: number
} {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false
  const summary = value as Record<string, unknown>
  return (
    typeof summary.ported === "number" &&
    typeof summary.upstream_equivalent === "number" &&
    typeof summary.retired === "number"
  )
}

function copyUnlessSame(source: string, destination: string): void {
  if (resolve(source) !== resolve(destination)) copyFileSync(source, destination)
}

function buildReleaseManifest(
  options: ReleasePayloadOptions,
  cliBytes: Buffer,
  cliHash: { hex: string; sri: string },
  graphDirectoryName: RuntimeGraphDirectory,
  bundleIntegrity: { sha256: string; files: RuntimeBundleFile[] },
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
      graphDirectory: graphDirectoryName,
    },
    patchSet: {
      count: patches.length,
      sha256: sha256(patchSetSource).sri,
      names: patches.map(({ patch }) => patch.name),
    },
    bundle: {
      file: "cli.js",
      bytes: cliBytes.byteLength,
      sha256: bundleIntegrity.sha256,
      entrypointSha256: cliHash.sri,
      files: bundleIntegrity.files,
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
