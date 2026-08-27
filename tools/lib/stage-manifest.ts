import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { parseTargetSource, type TargetSource } from "./target"

type CanonicalStage = {
  cliPath: string
  reportPath: string
  bytes: number
  sha256: string
  structuralSha256?: string
  structuralParseErrors?: number
  mergePolicy: string
}

type DualGraphStage = {
  mergePolicy: string
  graphDir: string
  dispatcher: string
  platforms: string[]
}

type StagePlatform = {
  platform: string
  binaryUrl: string
  binarySha256: string
  entrypointSha256: string
  entrypointBytes: number
}

export type StageManifest = {
  version?: string
  channel?: TargetSource
  source?: string
  basePlatform?: string
  platformPackage?: string
  directPlatform?: string
  nativeTarball?: string
  canonical?: CanonicalStage
  dualGraph?: DualGraphStage
  platforms?: StagePlatform[]
}

export function loadStageManifest(root: string, version: string): StageManifest | null {
  const path = join(root, "staging", version, "stage-manifest.json")
  if (!existsSync(path)) return null
  return parseStageManifest(JSON.parse(readFileSync(path, "utf8")) as unknown, path)
}

export function parseStageManifest(value: unknown, path = "stage-manifest.json"): StageManifest {
  const manifest = record(value, path)
  const channel = optionalString(manifest.channel, `${path}.channel`)
  const canonical = manifest.canonical === undefined ? undefined : parseCanonicalStage(manifest.canonical, path)
  const dualGraph = manifest.dualGraph === undefined ? undefined : parseDualGraphStage(manifest.dualGraph, path)
  const platforms =
    manifest.platforms === undefined
      ? undefined
      : array(manifest.platforms, `${path}.platforms`).map((platform, index) =>
          parseStagePlatform(platform, `${path}.platforms[${index}]`),
        )

  return {
    version: optionalString(manifest.version, `${path}.version`),
    channel: channel === undefined ? undefined : parseTargetSource(channel),
    source: optionalString(manifest.source, `${path}.source`),
    basePlatform: optionalString(manifest.basePlatform, `${path}.basePlatform`),
    platformPackage: optionalString(manifest.platformPackage, `${path}.platformPackage`),
    directPlatform: optionalString(manifest.directPlatform, `${path}.directPlatform`),
    nativeTarball: optionalString(manifest.nativeTarball, `${path}.nativeTarball`),
    canonical,
    dualGraph,
    platforms,
  }
}

function parseDualGraphStage(value: unknown, path: string): DualGraphStage {
  const dualGraph = record(value, `${path}.dualGraph`)
  return {
    mergePolicy: string(dualGraph.mergePolicy, `${path}.dualGraph.mergePolicy`),
    graphDir: string(dualGraph.graphDir, `${path}.dualGraph.graphDir`),
    dispatcher: string(dualGraph.dispatcher, `${path}.dualGraph.dispatcher`),
    platforms: array(dualGraph.platforms, `${path}.dualGraph.platforms`).map(
      (platform, index) => string(platform, `${path}.dualGraph.platforms[${index}]`),
    ),
  }
}

function parseCanonicalStage(value: unknown, path: string): CanonicalStage {
  const canonical = record(value, `${path}.canonical`)
  return {
    cliPath: string(canonical.cliPath, `${path}.canonical.cliPath`),
    reportPath: string(canonical.reportPath, `${path}.canonical.reportPath`),
    bytes: number(canonical.bytes, `${path}.canonical.bytes`),
    sha256: string(canonical.sha256, `${path}.canonical.sha256`),
    structuralSha256: optionalString(canonical.structuralSha256, `${path}.canonical.structuralSha256`),
    structuralParseErrors: optionalNumber(
      canonical.structuralParseErrors,
      `${path}.canonical.structuralParseErrors`,
    ),
    mergePolicy: string(canonical.mergePolicy, `${path}.canonical.mergePolicy`),
  }
}

function parseStagePlatform(value: unknown, path: string): StagePlatform {
  const platform = record(value, path)
  return {
    platform: string(platform.platform, `${path}.platform`),
    binaryUrl: string(platform.binaryUrl, `${path}.binaryUrl`),
    binarySha256: string(platform.binarySha256, `${path}.binarySha256`),
    entrypointSha256: string(platform.entrypointSha256, `${path}.entrypointSha256`),
    entrypointBytes: number(platform.entrypointBytes, `${path}.entrypointBytes`),
  }
}

function record(value: unknown, path: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) throw new Error(`${path} must be an object`)
  return value as Record<string, unknown>
}

function array(value: unknown, path: string): unknown[] {
  if (!Array.isArray(value)) throw new Error(`${path} must be an array`)
  return value
}

function string(value: unknown, path: string): string {
  if (typeof value !== "string") throw new Error(`${path} must be a string`)
  return value
}

function number(value: unknown, path: string): number {
  if (typeof value !== "number" || !Number.isFinite(value)) throw new Error(`${path} must be a finite number`)
  return value
}

function optionalString(value: unknown, path: string): string | undefined {
  return value === undefined ? undefined : string(value, path)
}

function optionalNumber(value: unknown, path: string): number | undefined {
  return value === undefined ? undefined : number(value, path)
}
