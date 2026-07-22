import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs"
import { homedir } from "node:os"
import { basename, dirname, join } from "node:path"

export const SYSTEM_PROMPT_BRIDGE = Symbol.for("patched-claude-code.system-prompt-overrides.v1")
export const SYSTEM_PROMPT_DIAGNOSTICS = Symbol.for("patched-claude-code.system-prompt-overrides.diagnostics.v1")

const MANIFEST_SCHEMA = 1
const UPSTREAM_PLACEHOLDER = "{{upstream}}"

type ReleaseManifest = {
  upstream: { version: string }
  bundle: { file: string; sha256: string }
}

export type PromptSectionManifestEntry = {
  id: string
  ordinal: number
  baselineSha256: string
  displayLabel: string
  file: string
}

export type PromptManifest = {
  schema: 1
  target: {
    version: string
    bundleSha256: string
  }
  baselineVectorSha256: string
  sections: PromptSectionManifestEntry[]
}

export type SystemPromptDiffEntry = {
  id: string
  ordinal: number
  displayLabel: string
  changed: boolean
  baselineSha256: string
  effectiveSha256: string
  overrideFile?: string
}

export type SystemPromptBridgeInput = {
  orderedSections: string[]
}

export type SystemPromptBridgeOutput = {
  effectiveSections: string[]
  effectiveVectorSha256: string
  sectionDiff: SystemPromptDiffEntry[]
}

export type SystemPromptOverrideOptions = {
  targetVersion: string
  bundleSha256: string
  promptRoot: string
  exportMode?: "export" | "rebase"
  writeDiagnostic?: (diagnostic: SystemPromptBridgeOutput) => void
}

type OverrideSnapshot = {
  manifestPath: string
  manifest?: PromptManifest
  files: Map<string, { path: string; text: string }>
}

export function createSystemPromptOverrideHook(
  options: SystemPromptOverrideOptions,
): (input: SystemPromptBridgeInput) => SystemPromptBridgeOutput {
  let snapshot = readOverrideSnapshot(options.promptRoot)
  let invocation = 0

  return ({ orderedSections }: SystemPromptBridgeInput): SystemPromptBridgeOutput => {
    if (!Array.isArray(orderedSections) || orderedSections.some((section) => typeof section !== "string")) {
      throw new Error("[system-prompt-overrides] bridge received a non-string section vector")
    }

    const baseline = buildPromptManifest(options.targetVersion, options.bundleSha256, orderedSections)
    if (options.exportMode && invocation === 0) {
      exportBaseline(options.promptRoot, baseline, orderedSections, snapshot, options.exportMode)
      snapshot = { ...snapshot, manifest: baseline }
    }

    const effectiveSections = applyOverrides(baseline, orderedSections, snapshot)
    const sectionDiff = buildSectionDiff(baseline, effectiveSections, snapshot)
    const output = {
      effectiveSections,
      effectiveVectorSha256: hashSectionVector(effectiveSections),
      sectionDiff,
    }
    invocation += 1
    Reflect.set(globalThis, SYSTEM_PROMPT_DIAGNOSTICS, output)
    options.writeDiagnostic?.(output)
    return output
  }
}

export function buildPromptManifest(
  targetVersion: string,
  bundleSha256: string,
  orderedSections: readonly string[],
): PromptManifest {
  return {
    schema: MANIFEST_SCHEMA,
    target: { version: targetVersion, bundleSha256 },
    baselineVectorSha256: hashSectionVector(orderedSections),
    sections: orderedSections.map((text, ordinal) => {
      const id = sectionId(targetVersion, ordinal)
      return {
        id,
        ordinal,
        baselineSha256: hashUtf8(text),
        displayLabel: displayLabel(text, ordinal),
        file: `sections/${id}.md`,
      }
    }),
  }
}

export function hashSectionVector(sections: readonly string[]): string {
  const hash = createHash("sha256")
  for (const section of sections) {
    const bytes = Buffer.from(section, "utf8")
    const length = Buffer.allocUnsafe(8)
    length.writeBigUInt64BE(BigInt(bytes.byteLength))
    hash.update(length)
    hash.update(bytes)
  }
  return `sha256-${hash.digest("base64")}`
}

function readOverrideSnapshot(promptRoot: string): OverrideSnapshot {
  const manifestPath = join(promptRoot, "manifest.json")
  const overridesDir = join(promptRoot, "overrides")
  const files = new Map<string, { path: string; text: string }>()

  if (existsSync(overridesDir)) {
    for (const entry of readdirSync(overridesDir, { withFileTypes: true }).sort((left, right) =>
      left.name.localeCompare(right.name),
    )) {
      if (!entry.isFile() || !entry.name.endsWith(".md")) continue
      const path = join(overridesDir, entry.name)
      const id = entry.name.slice(0, -3)
      if (files.has(id)) fail(path, `duplicate section identity ${id}`)
      files.set(id, { path, text: readUtf8(path) })
    }
  }

  if (!existsSync(manifestPath)) {
    if (files.size > 0) fail(manifestPath, "manifest is missing for the snapshotted override files")
    return { manifestPath, files }
  }

  return { manifestPath, manifest: readPromptManifest(manifestPath), files }
}

function readPromptManifest(path: string): PromptManifest {
  let value: unknown
  try {
    value = JSON.parse(readUtf8(path))
  } catch (error) {
    fail(path, `invalid JSON: ${errorMessage(error)}`)
  }
  if (!isRecord(value) || value.schema !== MANIFEST_SCHEMA) fail(path, `schema must be ${MANIFEST_SCHEMA}`)
  if (!isRecord(value.target)) fail(path, "target must be an object")
  if (typeof value.target.version !== "string" || typeof value.target.bundleSha256 !== "string") {
    fail(path, "target version and bundleSha256 must be strings")
  }
  if (typeof value.baselineVectorSha256 !== "string" || !Array.isArray(value.sections)) {
    fail(path, "baselineVectorSha256 and sections are required")
  }

  const sections = value.sections.map((entry, index) => {
    if (!isRecord(entry)) fail(path, `sections[${index}] must be an object`)
    if (
      typeof entry.id !== "string" ||
      typeof entry.ordinal !== "number" ||
      !Number.isSafeInteger(entry.ordinal) ||
      typeof entry.baselineSha256 !== "string" ||
      typeof entry.displayLabel !== "string" ||
      typeof entry.file !== "string"
    ) {
      fail(path, `sections[${index}] has malformed fields`)
    }
    return entry as PromptSectionManifestEntry
  })

  return {
    schema: MANIFEST_SCHEMA,
    target: value.target as PromptManifest["target"],
    baselineVectorSha256: value.baselineVectorSha256,
    sections,
  }
}

function applyOverrides(baseline: PromptManifest, orderedSections: string[], snapshot: OverrideSnapshot): string[] {
  if (snapshot.files.size === 0) return orderedSections
  const manifest = snapshot.manifest
  if (!manifest) fail(snapshot.manifestPath, "manifest is missing")
  validateManifest(manifest, baseline, snapshot)

  const byId = new Map(manifest.sections.map((section) => [section.id, section]))
  const effective = [...orderedSections]
  for (const [id, override] of snapshot.files) {
    const section = byId.get(id)
    if (!section) fail(override.path, `unknown section identity ${id}`)
    const occurrences = countOccurrences(override.text, UPSTREAM_PLACEHOLDER)
    if (occurrences > 1)
      fail(override.path, `${UPSTREAM_PLACEHOLDER} occurs ${occurrences} times; expected zero or one`)
    const upstream = orderedSections[section.ordinal]
    if (upstream === undefined) fail(override.path, `ordinal ${section.ordinal} is outside the current section vector`)
    effective[section.ordinal] =
      occurrences === 0 ? override.text : override.text.replace(UPSTREAM_PLACEHOLDER, upstream)
  }
  return effective
}

function validateManifest(manifest: PromptManifest, baseline: PromptManifest, snapshot: OverrideSnapshot): void {
  if (manifest.target.version !== baseline.target.version) {
    fail(
      snapshot.manifestPath,
      `target version mismatch: expected ${baseline.target.version}, got ${manifest.target.version}`,
    )
  }
  if (manifest.target.bundleSha256 !== baseline.target.bundleSha256) {
    fail(
      snapshot.manifestPath,
      `bundle SHA-256 mismatch: expected ${baseline.target.bundleSha256}, got ${manifest.target.bundleSha256}`,
    )
  }
  if (manifest.sections.length !== baseline.sections.length) {
    fail(
      snapshot.manifestPath,
      `section count mismatch: expected ${baseline.sections.length}, got ${manifest.sections.length}`,
    )
  }

  const ids = new Set<string>()
  const ordinals = new Set<number>()
  for (const section of manifest.sections) {
    if (ids.has(section.id)) fail(snapshot.manifestPath, `duplicate section identity ${section.id}`)
    if (ordinals.has(section.ordinal)) fail(snapshot.manifestPath, `ambiguous ordinal ${section.ordinal}`)
    ids.add(section.id)
    ordinals.add(section.ordinal)

    const current = baseline.sections[section.ordinal]
    if (!current || current.id !== section.id) {
      fail(snapshot.manifestPath, `section identity ${section.id} does not match ordinal ${section.ordinal}`)
    }
    if (current.baselineSha256 !== section.baselineSha256) {
      const override = snapshot.files.get(section.id)
      fail(
        override?.path ?? snapshot.manifestPath,
        `baseline SHA-256 mismatch for ${section.id}: expected ${current.baselineSha256}, got ${section.baselineSha256}`,
      )
    }
  }
  if (manifest.baselineVectorSha256 !== baseline.baselineVectorSha256) {
    fail(
      snapshot.manifestPath,
      `baseline vector SHA-256 mismatch: expected ${baseline.baselineVectorSha256}, got ${manifest.baselineVectorSha256}`,
    )
  }
}

function buildSectionDiff(
  baseline: PromptManifest,
  effectiveSections: readonly string[],
  snapshot: OverrideSnapshot,
): SystemPromptDiffEntry[] {
  return baseline.sections.map((section) => {
    const effectiveSha256 = hashUtf8(effectiveSections[section.ordinal] ?? "")
    const override = snapshot.files.get(section.id)
    return {
      id: section.id,
      ordinal: section.ordinal,
      displayLabel: section.displayLabel,
      changed: effectiveSha256 !== section.baselineSha256,
      baselineSha256: section.baselineSha256,
      effectiveSha256,
      ...(override ? { overrideFile: override.path } : {}),
    }
  })
}

function exportBaseline(
  promptRoot: string,
  manifest: PromptManifest,
  orderedSections: readonly string[],
  snapshot: OverrideSnapshot,
  mode: "export" | "rebase",
): void {
  if (
    mode !== "rebase" &&
    snapshot.files.size > 0 &&
    snapshot.manifest?.baselineVectorSha256 !== manifest.baselineVectorSha256
  ) {
    fail(
      snapshot.manifestPath,
      "export would rebind existing overrides to a new baseline; diff the current sections, then request an explicit rebase",
    )
  }

  const sectionsDir = join(promptRoot, "sections")
  mkdirSync(sectionsDir, { recursive: true })
  mkdirSync(join(promptRoot, "overrides"), { recursive: true })
  for (const section of manifest.sections) {
    writeAtomic(join(promptRoot, section.file), orderedSections[section.ordinal] ?? "")
  }
  writeAtomic(snapshot.manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
}

function sectionId(version: string, ordinal: number): string {
  return `v${version}-${String(ordinal).padStart(3, "0")}`
}

function displayLabel(text: string, ordinal: number): string {
  const heading = text.match(/^#{1,6}\s+(.+)$/m)?.[1]?.trim()
  return (heading || `Section ${ordinal}`).slice(0, 120)
}

function hashUtf8(text: string): string {
  const digest = createHash("sha256").update(text, "utf8").digest("base64")
  return `sha256-${digest}`
}

function readUtf8(path: string): string {
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(readFileSync(path))
  } catch (error) {
    fail(path, `unreadable UTF-8: ${errorMessage(error)}`)
  }
}

function writeAtomic(path: string, content: string): void {
  mkdirSync(dirname(path), { recursive: true })
  const temporary = join(dirname(path), `.${basename(path)}.${process.pid}.tmp`)
  writeFileSync(temporary, content, { mode: 0o600 })
  renameSync(temporary, path)
}

function countOccurrences(text: string, needle: string): number {
  let count = 0
  let offset = 0
  while (true) {
    const index = text.indexOf(needle, offset)
    if (index === -1) return count
    count += 1
    offset = index + needle.length
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}

function fail(path: string, check: string): never {
  throw new Error(
    `[system-prompt-overrides] ${path}: ${check}. User content was preserved; export, diff, and explicitly rebase the override.`,
  )
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}

function truthy(value: string | undefined): boolean {
  return value !== undefined && value !== "" && value !== "0" && value !== "false"
}

function defaultPromptRoot(): string {
  const userConfig = process.env.XDG_CONFIG_HOME || join(homedir(), ".config")
  return join(userConfig, "patched-claude-code", "prompts")
}

function loadReleaseCoordinates(): { targetVersion: string; bundleSha256: string } {
  const manifestPath = process.env.PATCHED_CLAUDE_CODE_RELEASE_MANIFEST
  const bundlePath = process.env.PATCHED_CLAUDE_CODE_BUNDLE
  if (!manifestPath) throw new Error("PATCHED_CLAUDE_CODE_RELEASE_MANIFEST is required by the prompt override preload")
  if (!bundlePath) throw new Error("PATCHED_CLAUDE_CODE_BUNDLE is required by the prompt override preload")
  let release: ReleaseManifest
  try {
    release = JSON.parse(readUtf8(manifestPath)) as ReleaseManifest
  } catch (error) {
    fail(manifestPath, `invalid release manifest JSON: ${errorMessage(error)}`)
  }
  if (!release.upstream?.version || !release.bundle?.sha256) {
    fail(manifestPath, "release manifest lacks upstream.version or bundle.sha256")
  }
  const actualBundleSha256 = `sha256-${createHash("sha256").update(readFileSync(bundlePath)).digest("base64")}`
  if (actualBundleSha256 !== release.bundle.sha256) {
    fail(bundlePath, `rendered bundle SHA-256 mismatch: expected ${release.bundle.sha256}, got ${actualBundleSha256}`)
  }
  return { targetVersion: release.upstream.version, bundleSha256: release.bundle.sha256 }
}

function installFromEnvironment(): void {
  if (!process.env.PATCHED_CLAUDE_CODE_RELEASE_MANIFEST) return
  const coordinates = loadReleaseCoordinates()
  const exportValue = process.env.PATCHED_CLAUDE_CODE_PROMPT_EXPORT
  const exportMode = exportValue === "rebase" ? "rebase" : truthy(exportValue) ? "export" : undefined
  const hook = createSystemPromptOverrideHook({
    ...coordinates,
    promptRoot: process.env.PATCHED_CLAUDE_CODE_PROMPT_DIR || defaultPromptRoot(),
    ...(exportMode ? { exportMode } : {}),
    ...(truthy(process.env.PATCHED_CLAUDE_CODE_PROMPT_DIAGNOSTICS)
      ? {
          writeDiagnostic: (diagnostic: SystemPromptBridgeOutput) => {
            process.stderr.write(`[system-prompt-overrides] ${JSON.stringify(diagnostic)}\n`)
          },
        }
      : {}),
  })
  Reflect.set(globalThis, SYSTEM_PROMPT_BRIDGE, hook)
}

installFromEnvironment()
