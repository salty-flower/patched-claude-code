import "./macos-keychain"

import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, writeFileSync } from "node:fs"
import { homedir } from "node:os"
import { basename, dirname, join } from "node:path"
import { computeRuntimeBundleIntegrity, type RuntimeBundleFile, type RuntimeGraphDirectory } from "./release-integrity"

export const SYSTEM_PROMPT_BRIDGE = Symbol.for("patched-claude-code.system-prompt-overrides.v1")
export const SYSTEM_PROMPT_DIAGNOSTICS = Symbol.for("patched-claude-code.system-prompt-overrides.diagnostics.v1")
export const STRUCTURED_PROMPT_BRIDGE = Symbol.for("patched-claude-code.system-prompt-overrides.v2")
export const FINAL_PROMPT_DIAGNOSTIC = Symbol.for("patched-claude-code.system-prompt-overrides.request.v2")

const MANIFEST_SCHEMA = 1
const UPSTREAM_PLACEHOLDER = "{{upstream}}"

type ReleaseManifest = {
  upstream: { version: string }
  runtime: { graphDirectory: RuntimeGraphDirectory }
  bundle: { file: string; sha256: string; entrypointSha256: string; files: RuntimeBundleFile[] }
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

export type StructuredPromptSection = { id: string; scope: "shared" | "session"; text: string }
export type StructuredPromptRule = {
  id: string
  scope: "shared" | "session"
  action: "keep" | "replace" | "remove"
  expectedSha256?: string | string[]
  file?: string
}
type StructuredPromptConfig = { schema: 2; targetVersion: string; rules: StructuredPromptRule[] }
type StructuredPromptInput = {
  sections: StructuredPromptSection[]
  render: (sections: StructuredPromptSection[]) => string[]
}

// This contract consumes upstream identities before cache partitioning, never text heuristics.
export function createStructuredPromptHook(options: SystemPromptOverrideOptions) {
  const configPath = join(options.promptRoot, "config.json")
  let config: StructuredPromptConfig | undefined
  const replacements = new Map<StructuredPromptRule, string>()
  if (existsSync(configPath)) {
    let value: unknown
    try {
      value = JSON.parse(readUtf8(configPath))
    } catch {
      fail(configPath, "invalid configuration JSON")
    }
    if (
      !isRecord(value) ||
      value.schema !== 2 ||
      value.targetVersion !== options.targetVersion ||
      !Array.isArray(value.rules)
    ) {
      fail(configPath, `expected schema 2, targetVersion ${options.targetVersion}, and rules array`)
    }
    const seen = new Set<string>()
    const rules = value.rules.map((rule: unknown): StructuredPromptRule => {
      if (
        !isRecord(rule) ||
        typeof rule.id !== "string" ||
        !/^[\w-]+$/.test(rule.id) ||
        !["shared", "session"].includes(String(rule.scope)) ||
        !["keep", "replace", "remove"].includes(String(rule.action))
      ) {
        fail(configPath, "malformed rule identity, scope, or action")
      }
      const key = `${rule.scope}/${rule.id}`
      if (seen.has(key)) fail(configPath, `duplicate target ${key}`)
      seen.add(key)
      const hashes = typeof rule.expectedSha256 === "string" ? [rule.expectedSha256] : rule.expectedSha256
      if (
        (rule.action !== "keep" || hashes !== undefined) &&
        (!Array.isArray(hashes) ||
          hashes.length === 0 ||
          hashes.some((h) => typeof h !== "string" || !/^sha256-[A-Za-z0-9+/]{43}=$/.test(h)))
      ) {
        fail(configPath, `expectedSha256 is required for ${key}`)
      }
      if (rule.action === "replace" && typeof rule.file !== "string") fail(configPath, `file is required for ${key}`)
      const typed = rule as StructuredPromptRule
      if (typed.action === "replace") {
        const path = join(options.promptRoot, typed.file!)
        const text = readUtf8(path)
        if (countOccurrences(text, UPSTREAM_PLACEHOLDER) > 1) fail(path, "repeated {{upstream}} placeholder")
        replacements.set(typed, text)
      }
      return typed
    })
    config = { schema: 2, targetVersion: options.targetVersion, rules }
  }
  if (config && readOverrideSnapshot(options.promptRoot).files.size > 0) {
    fail(
      configPath,
      "config.json and legacy overrides cannot be active together; migrate the selected legacy overrides first",
    )
  }
  // Legacy manifests remain fail-closed and retain their original coordinate semantics.
  const legacy = createSystemPromptOverrideHook({ ...options, writeDiagnostic: undefined })
  let exported = false
  let legacyDiagnostic:
    | (Pick<SystemPromptBridgeOutput, "effectiveVectorSha256"> & {
        sectionDiff: Array<Omit<SystemPromptDiffEntry, "displayLabel" | "overrideFile">>
      })
    | undefined
  let lastSections: Array<{
    id: string
    scope: string
    source: string
    baselineSha256: string
    effectiveSha256: string | null
  }> = []
  const hook = ({ sections, render }: StructuredPromptInput): string[] => {
    // Bare composition is a separate upstream contract, not a selectable generic body.
    if (sections.some((section) => section.id === "bare")) {
      lastSections = []
      legacyDiagnostic = undefined
      return render(sections)
    }
    const keys = new Set<string>()
    for (const section of sections) {
      if (
        typeof section.id !== "string" ||
        !["shared", "session"].includes(section.scope) ||
        typeof section.text !== "string"
      ) {
        fail(configPath, "malformed upstream structured section")
      }
      const key = `${section.scope}/${section.id}`
      if (keys.has(key)) fail(configPath, `ambiguous upstream identity ${key}`)
      keys.add(key)
    }
    const byKey = new Map((config?.rules ?? []).map((rule) => [`${rule.scope}/${rule.id}`, rule]))
    for (const key of byKey.keys()) if (!keys.has(key)) fail(configPath, `selected section is absent: ${key}`)
    lastSections = []
    const effective = sections.flatMap((section) => {
      const rule = byKey.get(`${section.scope}/${section.id}`)
      const baselineSha256 = hashUtf8(section.text)
      if (rule?.expectedSha256 !== undefined) {
        const hashes = Array.isArray(rule.expectedSha256) ? rule.expectedSha256 : [rule.expectedSha256]
        if (!hashes.includes(baselineSha256))
          fail(configPath, `baseline SHA-256 mismatch for ${section.scope}/${section.id}`)
      }
      const text =
        rule?.action === "replace"
          ? replacements.get(rule)!.replace(UPSTREAM_PLACEHOLDER, () => section.text)
          : section.text
      lastSections.push({
        id: section.id,
        scope: section.scope,
        source: rule?.action === "replace" ? "user" : rule?.action === "remove" ? "removed" : "upstream",
        baselineSha256,
        effectiveSha256: rule?.action === "remove" ? null : hashUtf8(text),
      })
      return rule?.action === "remove" ? [] : [{ ...section, text }]
    })
    if (options.exportMode && !exported) {
      for (const section of sections)
        writeAtomic(
          join(options.promptRoot, "upstream", `${section.scope}-${encodeURIComponent(section.id)}.md`),
          section.text,
        )
      writeAtomic(
        join(options.promptRoot, "sections.v2.json"),
        `${JSON.stringify({ schema: 2, targetVersion: options.targetVersion, sections: lastSections.map(({ source: _source, effectiveSha256: _effective, ...section }) => section) }, null, 2)}\n`,
      )
      exported = true
    }
    const legacyHook = config ? legacy : (Reflect.get(globalThis, SYSTEM_PROMPT_BRIDGE) ?? legacy)
    const output: SystemPromptBridgeOutput = legacyHook({ orderedSections: render(config ? effective : sections) })
    legacyDiagnostic = {
      effectiveVectorSha256: output.effectiveVectorSha256,
      sectionDiff: output.sectionDiff.map(({ id, ordinal, changed, baselineSha256, effectiveSha256 }) => ({
        id,
        ordinal,
        changed,
        baselineSha256,
        effectiveSha256,
      })),
    }
    return output.effectiveSections
  }
  // Called at the main request builder's final return, after styles, steering, and body overrides.
  const recordRequest = (
    body: { system?: unknown; messages?: unknown; tools?: unknown },
    querySource: string,
  ): void => {
    if (!/^(repl_main_thread|sdk)/.test(querySource)) return
    const system = body.system
    const texts =
      typeof system === "string"
        ? [system]
        : Array.isArray(system)
          ? system.map((block: { text?: string }) => block.text ?? "")
          : []
    const diagnostic = {
      schema: 2,
      targetVersion: options.targetVersion,
      querySource,
      systemSha256: hashUtf8(JSON.stringify(system ?? null)),
      systemTextVectorSha256: hashSectionVector(texts),
      messagesSha256: hashUtf8(JSON.stringify(body.messages ?? null)),
      toolsSha256: hashUtf8(JSON.stringify(body.tools ?? null)),
      sections: lastSections,
      vector: legacyDiagnostic,
    }
    Reflect.set(globalThis, SYSTEM_PROMPT_DIAGNOSTICS, diagnostic)
    if (options.writeDiagnostic) process.stderr.write(`[system-prompt-request] ${JSON.stringify(diagnostic)}\n`)
  }
  return { hook, recordRequest }
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
  validateSnapshotCoordinates(snapshot, options.targetVersion, options.bundleSha256)
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
  } catch {
    fail(path, "invalid manifest JSON")
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
      occurrences === 0 ? override.text : override.text.replace(UPSTREAM_PLACEHOLDER, () => upstream)
  }
  return effective
}

function validateManifest(manifest: PromptManifest, baseline: PromptManifest, snapshot: OverrideSnapshot): void {
  validateManifestCoordinates(manifest, baseline.target, snapshot)
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

function validateSnapshotCoordinates(snapshot: OverrideSnapshot, targetVersion: string, bundleSha256: string): void {
  if (snapshot.files.size === 0) return
  if (!snapshot.manifest) fail(snapshot.manifestPath, "manifest is missing")
  validateManifestCoordinates(snapshot.manifest, { version: targetVersion, bundleSha256 }, snapshot)
}

function validateManifestCoordinates(
  manifest: PromptManifest,
  target: PromptManifest["target"],
  snapshot: OverrideSnapshot,
): void {
  if (manifest.target.version !== target.version) {
    fail(snapshot.manifestPath, `target version mismatch: expected ${target.version}, got ${manifest.target.version}`)
  }
  if (manifest.target.bundleSha256 !== target.bundleSha256) {
    fail(
      snapshot.manifestPath,
      `bundle SHA-256 mismatch: expected ${target.bundleSha256}, got ${manifest.target.bundleSha256}`,
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
  } catch {
    fail(manifestPath, "invalid release manifest JSON")
  }
  if (!release.upstream?.version || !release.bundle?.sha256) {
    fail(manifestPath, "release manifest lacks upstream.version or bundle.sha256")
  }
  const integrity = computeRuntimeBundleIntegrity(bundlePath, release.runtime?.graphDirectory ?? null)
  if (JSON.stringify(integrity.files) !== JSON.stringify(release.bundle.files)) {
    fail(bundlePath, "rendered bundle file inventory mismatch")
  }
  if (integrity.sha256 !== release.bundle.sha256) {
    fail(bundlePath, `rendered bundle SHA-256 mismatch: expected ${release.bundle.sha256}, got ${integrity.sha256}`)
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
            const safe = {
              effectiveVectorSha256: diagnostic.effectiveVectorSha256,
              sectionDiff: diagnostic.sectionDiff.map(({ id, ordinal, changed, baselineSha256, effectiveSha256 }) => ({
                id,
                ordinal,
                changed,
                baselineSha256,
                effectiveSha256,
              })),
            }
            process.stderr.write(`[system-prompt-overrides] ${JSON.stringify(safe)}\n`)
          },
        }
      : {}),
  })
  Reflect.set(globalThis, SYSTEM_PROMPT_BRIDGE, hook)
  const structured = createStructuredPromptHook({
    ...coordinates,
    promptRoot: process.env.PATCHED_CLAUDE_CODE_PROMPT_DIR || defaultPromptRoot(),
    ...(exportMode ? { exportMode } : {}),
    ...(truthy(process.env.PATCHED_CLAUDE_CODE_PROMPT_DIAGNOSTICS) ? { writeDiagnostic: () => {} } : {}),
  })
  Reflect.set(globalThis, STRUCTURED_PROMPT_BRIDGE, structured.hook)
  Reflect.set(globalThis, FINAL_PROMPT_DIAGNOSTIC, structured.recordRequest)
  // Native daemon re-exec drops execArgv. The repo dispatcher restores these sidecars.
  process.env.PATCHED_CLAUDE_CODE_RUNTIME_BOOTSTRAP = import.meta.url
}

installFromEnvironment()
