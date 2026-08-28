import { createHash } from "node:crypto"
import { cpSync, existsSync, lstatSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { basename, dirname, join, relative, resolve, sep } from "node:path"
import * as parser from "@babel/parser"
import { loadPromptIdentityResolution, type PromptIdentityObservation } from "./prompt-identity"

const IGNORED_AST_KEYS = new Set([
  "comments",
  "end",
  "extra",
  "innerComments",
  "leadingComments",
  "loc",
  "range",
  "start",
  "trailingComments",
])

const PROMPT_SIGNALS = [
  { id: "you-are", pattern: /\byou are\b/i },
  { id: "your-task", pattern: /\byour task\b/i },
  { id: "use-this-tool", pattern: /\buse this tool\b/i },
  { id: "you-must", pattern: /\byou must\b/i },
  { id: "do-not", pattern: /\bdo not\b/i },
  { id: "respond", pattern: /\brespond\b/i },
  { id: "instruction", pattern: /\binstructions?\b/i },
  { id: "generate", pattern: /\bgenerate\b/i },
  { id: "write", pattern: /\bwrite\b/i },
  { id: "return", pattern: /\breturn\b/i },
  { id: "output", pattern: /\boutput\b/i },
  { id: "xml-tag", pattern: /<[a-z][^>]*>/i },
] as const

const PROMPT_MINHASH_COMPONENTS = 32

const RULESET = {
  schema: 3,
  candidateNodes: ["StringLiteral", "TemplateLiteral"],
  minimumCharacters: 160,
  minimumSignals: 2,
  signals: PROMPT_SIGNALS.map(({ id, pattern }) => ({ id, source: pattern.source, flags: pattern.flags })),
  contextualTemplatePolicy: "gap",
  identity: "checked-in-lineage-with-non-authoritative-partial-ranking",
} as const

export const PROMPT_CATALOG_RULESET_SHA256 = digest(JSON.stringify(RULESET))

type AstNode = Record<string, unknown> & {
  type: string
  start: number
  end: number
}

type PromptCandidate = {
  node: AstNode
  detectorText: string
  signals: string[]
  staticText?: string
  expressionCount: number
  astContextSha256: string
  sourcePath?: string
}

export type { PromptCandidate }

export type PromptCatalogEntry = {
  id: string
  lineageId: string
  occurrenceId: string
  familyId: string
  callsiteId: string
  role: "system" | "tool" | "user" | "unknown"
  ordinal: number
  classification: "static"
  kind: "template" | "fragment"
  provenance: "upstream" | "repo-patch" | "unknown"
  contentFile: string
  contentBytes: number
  contentSha256: string
  source: {
    bundle: "patched"
    startCodeUnit: number
    endCodeUnit: number
    sourceSha256: string
  }
  detectorSignals: string[]
}

export type PromptCatalogGap = {
  id: string
  lineageId?: string
  occurrenceId?: string
  catalogPath?: string
  familyId: string
  callsiteId: string
  role: "system" | "tool" | "user" | "unknown"
  ordinal: number
  classification: "contextual-gap" | "opaque-gap"
  provenance: "upstream" | "repo-patch" | "unknown"
  reasonCode: "runtime-expressions" | "outside-static-literal-ruleset"
  detail: string
  expressionCount?: number
  source?: {
    bundle: "patched"
    startCodeUnit: number
    endCodeUnit: number
    sourceSha256: string
  }
  detectorSignals?: string[]
}

export type PromptCatalogManifest = {
  schema: 2
  scope: "static-prompt-catalog"
  completeness: "partial"
  target: {
    upstreamVersion: string
    releaseId: string
    upstreamBundleSha256: string
    patchedBundleSha256: string
    patchedEntrypointSha256: string
    patchSetSha256: string
  }
  extractor: {
    schemaVersion: 3
    rulesetSha256: string
    method: typeof RULESET
  }
  identity: {
    schemaVersion: 2
    lineageSetSha256: string
    ledgerSha256: string
  }
  entries: PromptCatalogEntry[]
  gapsFile: "gaps.json"
  gapsSha256: string
  contentTreeSha256: string
  summary: {
    candidates: number
    staticEntries: number
    contextualGaps: number
    opaqueGaps: number
  }
  limitations: string[]
  manifestSha256: string
}

export type PromptCatalogCoordinates = {
  upstreamVersion: string
  releaseId: string
  upstreamBundleSha256: string
  patchedBundleSha256: string
  patchedEntrypointSha256?: string
  patchSetSha256: string
}

export type WritePromptCatalogOptions = PromptCatalogCoordinates & {
  upstreamBundlePath: string
  patchedBundlePath: string
  outDir: string
  identityRoot: string
}

export type PromptCatalogResult = {
  manifest: PromptCatalogManifest
  treeSha256: string
}

export function writePromptCatalog(options: WritePromptCatalogOptions): PromptCatalogResult {
  const upstreamBytes = readFileSync(options.upstreamBundlePath)
  const patchedBytes = readFileSync(options.patchedBundlePath)
  assertDigest("upstream bundle", upstreamBytes, options.upstreamBundleSha256)
  const patchedEntrypointSha256 = options.patchedEntrypointSha256 ?? options.patchedBundleSha256
  assertDigest("patched bundle entrypoint", patchedBytes, patchedEntrypointSha256)
  const upstreamCorpus = promptCorpus(options.upstreamBundlePath, upstreamBytes)
  const patchedCorpus = promptCorpus(options.patchedBundlePath, patchedBytes)
  const upstreamSource = upstreamCorpus.source
  const patchedSource = patchedCorpus.source

  const candidates = patchedCorpus.candidates
  const observations = promptIdentityObservations(candidates, patchedSource, options.upstreamVersion)
  const identity = loadPromptIdentityResolution(options.identityRoot, options.upstreamVersion, observations)
  const entries: PromptCatalogEntry[] = []
  const gaps: PromptCatalogGap[] = []
  prepareOutputDirectory(options.outDir)
  mkdirSync(join(options.outDir, "entries"), { recursive: true })

  candidates.forEach((candidate, ordinal) => {
    const observation = observations[ordinal]!
    const resolvedIdentity = identity.byOccurrenceId.get(observation.occurrenceId)
    if (!resolvedIdentity) throw new Error(`prompt identity missing after validation: ${observation.occurrenceId}`)
    const { lineage } = resolvedIdentity
    const id = lineage.lineageId
    const sourceText = patchedSource.slice(candidate.node.start, candidate.node.end)
    const provenance = inferProvenance(candidate, sourceText, upstreamSource)
    const familyId = lineage.family
    const role = lineage.role
    const callsiteId = `patched:${candidate.node.start}-${candidate.node.end}`
    const source = {
      bundle: "patched" as const,
      startCodeUnit: candidate.node.start,
      endCodeUnit: candidate.node.end,
      sourceSha256: digest(sourceText),
    }

    if (candidate.staticText !== undefined) {
      assertNoRuntimeLeak(candidate.staticText, options)
      const contentFile = lineage.catalogPath
      const content = Buffer.from(candidate.staticText, "utf8")
      mkdirSync(dirname(join(options.outDir, contentFile)), { recursive: true })
      writeFileSync(join(options.outDir, contentFile), content, { mode: 0o644 })
      entries.push({
        id,
        lineageId: lineage.lineageId,
        occurrenceId: observation.occurrenceId,
        familyId,
        callsiteId,
        role,
        ordinal,
        classification: "static",
        kind: candidate.node.type === "TemplateLiteral" ? "template" : "fragment",
        provenance,
        contentFile,
        contentBytes: content.byteLength,
        contentSha256: digest(content),
        source,
        detectorSignals: candidate.signals,
      })
      return
    }

    gaps.push({
      id,
      lineageId: lineage.lineageId,
      occurrenceId: observation.occurrenceId,
      catalogPath: lineage.catalogPath,
      familyId,
      callsiteId,
      role,
      ordinal,
      classification: "contextual-gap",
      provenance,
      reasonCode: "runtime-expressions",
      detail: "Template contains runtime expressions; no canonical effective value exists at release time.",
      expressionCount: candidate.expressionCount,
      source,
      detectorSignals: candidate.signals,
    })
  })

  gaps.push({
    id: "catalog-scope",
    familyId: "catalog-scope",
    callsiteId: "ruleset:outside-static-literal-candidates",
    role: "unknown",
    ordinal: candidates.length,
    classification: "opaque-gap",
    provenance: "unknown",
    reasonCode: "outside-static-literal-ruleset",
    detail:
      "Computed concatenations, short literals, encrypted/encoded data, and strings below the declared signal threshold are outside this catalog's candidate inventory.",
  })

  const gapsBytes = Buffer.from(`${JSON.stringify(gaps, null, 2)}\n`, "utf8")
  writeFileSync(join(options.outDir, "gaps.json"), gapsBytes, { mode: 0o644 })
  const contentTreeSha256 = hashCatalogTree(options.outDir)
  const manifestWithoutHash = {
    schema: 2 as const,
    scope: "static-prompt-catalog" as const,
    completeness: "partial" as const,
    target: {
      upstreamVersion: options.upstreamVersion,
      releaseId: options.releaseId,
      upstreamBundleSha256: options.upstreamBundleSha256,
      patchedBundleSha256: options.patchedBundleSha256,
      patchedEntrypointSha256,
      patchSetSha256: options.patchSetSha256,
    },
    extractor: {
      schemaVersion: 3 as const,
      rulesetSha256: PROMPT_CATALOG_RULESET_SHA256,
      method: RULESET,
    },
    identity: {
      schemaVersion: 2 as const,
      lineageSetSha256: identity.lineageSetSha256,
      ledgerSha256: identity.ledgerSha256,
    },
    entries,
    gapsFile: "gaps.json" as const,
    gapsSha256: digest(gapsBytes),
    contentTreeSha256,
    summary: {
      candidates: candidates.length,
      staticEntries: entries.length,
      contextualGaps: gaps.filter((gap) => gap.classification === "contextual-gap").length,
      opaqueGaps: gaps.filter((gap) => gap.classification === "opaque-gap").length,
    },
    limitations: [
      "The catalog covers only candidates selected by the declared static literal ruleset.",
      "Contextual gaps do not represent effective requests or canonical sample prompts.",
      "Lineage identities are stable across versions but remain separate from runtime override section identities.",
    ],
  }
  const manifest: PromptCatalogManifest = {
    ...manifestWithoutHash,
    manifestSha256: digest(canonicalJson(manifestWithoutHash)),
  }
  writeFileSync(join(options.outDir, "manifest.json"), canonicalJson(manifest), { mode: 0o644 })
  return { manifest, treeSha256: hashCatalogTree(options.outDir) }
}

export function rebindPromptCatalog(
  sourceDir: string,
  outDir: string,
  coordinates: PromptCatalogCoordinates,
): PromptCatalogResult {
  const existing = readPromptCatalogManifest(sourceDir)
  validateCatalogContents(sourceDir, existing)
  if (existing.target.upstreamVersion !== coordinates.upstreamVersion) {
    throw new Error(
      `prompt catalog version mismatch: expected ${coordinates.upstreamVersion}, got ${existing.target.upstreamVersion}`,
    )
  }
  if (existing.target.patchedBundleSha256 !== coordinates.patchedBundleSha256) {
    throw new Error("prompt catalog patched bundle SHA-256 mismatch")
  }
  const patchedEntrypointSha256 = coordinates.patchedEntrypointSha256 ?? coordinates.patchedBundleSha256
  if (existing.target.patchedEntrypointSha256 !== patchedEntrypointSha256) {
    throw new Error("prompt catalog patched entrypoint SHA-256 mismatch")
  }
  if (existing.target.patchSetSha256 !== coordinates.patchSetSha256) {
    throw new Error("prompt catalog patch-set SHA-256 mismatch")
  }
  if (existing.extractor.rulesetSha256 !== PROMPT_CATALOG_RULESET_SHA256) {
    throw new Error("prompt catalog extraction ruleset SHA-256 mismatch")
  }

  if (resolve(sourceDir) !== resolve(outDir)) {
    prepareOutputDirectory(outDir)
    cpSync(sourceDir, outDir, { recursive: true, errorOnExist: true })
  }
  const reboundWithoutHash = {
    ...existing,
    target: { ...coordinates, patchedEntrypointSha256 },
    manifestSha256: undefined,
  }
  const { manifestSha256: _discarded, ...manifestPayload } = reboundWithoutHash
  const manifest: PromptCatalogManifest = {
    ...manifestPayload,
    manifestSha256: digest(canonicalJson(manifestPayload)),
  }
  writeFileSync(join(outDir, "manifest.json"), canonicalJson(manifest), { mode: 0o644 })
  validateCatalogContents(outDir, manifest)
  return { manifest, treeSha256: hashCatalogTree(outDir) }
}

export function readPromptCatalogManifest(root: string): PromptCatalogManifest {
  const path = join(root, "manifest.json")
  const value = JSON.parse(decodeUtf8(readFileSync(path), path)) as PromptCatalogManifest
  if (
    value.schema !== 2 ||
    value.scope !== "static-prompt-catalog" ||
    value.completeness !== "partial" ||
    !Array.isArray(value.entries) ||
    value.identity?.schemaVersion !== 2 ||
    value.extractor?.rulesetSha256 !== PROMPT_CATALOG_RULESET_SHA256
  ) {
    throw new Error(`invalid prompt catalog manifest: ${path}`)
  }
  const { manifestSha256, ...payload } = value
  if (manifestSha256 !== digest(canonicalJson(payload))) {
    throw new Error(`prompt catalog manifest SHA-256 mismatch: ${path}`)
  }
  return value
}

export function validateCatalogContents(root: string, manifest = readPromptCatalogManifest(root)): void {
  const expectedPaths = new Set(["gaps.json", ...manifest.entries.map((entry) => entry.contentFile)])
  const gapsPath = resolveCatalogPath(root, manifest.gapsFile)
  const gapsBytes = readFileSync(gapsPath)
  const gaps = JSON.parse(decodeUtf8(gapsBytes, gapsPath)) as PromptCatalogGap[]
  if (!Array.isArray(gaps)) throw new Error(`invalid prompt catalog gaps: ${gapsPath}`)
  const identities = new Set<string>()
  const ordinals = new Set<number>()
  const callsites = new Set<string>()
  const contentFiles = new Set<string>()
  for (const item of [...manifest.entries, ...gaps]) {
    if (identities.has(item.id)) throw new Error(`duplicate prompt catalog identity: ${item.id}`)
    if (ordinals.has(item.ordinal)) throw new Error(`duplicate prompt catalog ordinal: ${item.ordinal}`)
    if (callsites.has(item.callsiteId)) throw new Error(`duplicate prompt catalog callsite: ${item.callsiteId}`)
    identities.add(item.id)
    ordinals.add(item.ordinal)
    callsites.add(item.callsiteId)
  }
  for (const entry of manifest.entries) {
    if (entry.id !== entry.lineageId) throw new Error(`prompt catalog entry identity mismatch: ${entry.id}`)
    if (contentFiles.has(entry.contentFile))
      throw new Error(`duplicate prompt catalog content path: ${entry.contentFile}`)
    contentFiles.add(entry.contentFile)
    const contentPath = resolveCatalogPath(root, entry.contentFile)
    const content = readFileSync(contentPath)
    decodeUtf8(content, contentPath)
    if (content.byteLength !== entry.contentBytes || digest(content) !== entry.contentSha256) {
      throw new Error(`prompt catalog content mismatch: ${contentPath}`)
    }
  }
  if (digest(gapsBytes) !== manifest.gapsSha256) {
    throw new Error(`prompt catalog gaps SHA-256 mismatch: ${gapsPath}`)
  }
  const contextualGaps = gaps.filter((gap) => gap.classification === "contextual-gap").length
  const opaqueGaps = gaps.filter((gap) => gap.classification === "opaque-gap").length
  if (
    manifest.summary.candidates !== manifest.entries.length + contextualGaps ||
    manifest.summary.staticEntries !== manifest.entries.length ||
    manifest.summary.contextualGaps !== contextualGaps ||
    manifest.summary.opaqueGaps !== opaqueGaps
  ) {
    throw new Error(`prompt catalog summary mismatch: ${join(root, "manifest.json")}`)
  }
  const actualPaths = listCatalogFiles(root).filter((path) => path !== "manifest.json")
  if (actualPaths.some((path) => !expectedPaths.has(path)) || expectedPaths.size !== actualPaths.length) {
    throw new Error(`prompt catalog contains an unexpected or missing content file: ${root}`)
  }
  if (hashCatalogTree(root, new Set(["manifest.json"])) !== manifest.contentTreeSha256) {
    throw new Error(`prompt catalog content tree SHA-256 mismatch: ${root}`)
  }
}

export function hashCatalogTree(root: string, excluded = new Set<string>()): string {
  const hash = createHash("sha256")
  for (const path of listCatalogFiles(root)) {
    if (excluded.has(path)) continue
    const bytes = readFileSync(join(root, ...path.split("/")))
    updateLengthPrefixed(hash, Buffer.from(path, "utf8"))
    updateLengthPrefixed(hash, bytes)
  }
  return `sha256-${hash.digest("base64")}`
}

export function inspectPromptIdentityObservations(
  source: string,
  upstreamVersion: string,
): PromptIdentityObservation[] {
  const candidates = discoverPromptCandidates(source)
  return promptIdentityObservations(candidates, source, upstreamVersion)
}

export function inspectPromptIdentityObservationsFromPath(
  path: string,
  upstreamVersion: string,
): PromptIdentityObservation[] {
  const corpus = promptCorpus(path, readFileSync(path))
  return promptIdentityObservations(corpus.candidates, corpus.source, upstreamVersion)
}

export function discoverPromptCandidatesFromPath(path: string): PromptCandidate[] {
  return promptCorpus(path, readFileSync(path)).candidates
}

function promptIdentityObservations(
  candidates: PromptCandidate[],
  source: string,
  upstreamVersion: string,
): PromptIdentityObservation[] {
  return candidates.map((candidate, ordinal) => {
    const occurrenceId = `v${upstreamVersion}-${String(ordinal).padStart(4, "0")}`
    const familyHint = inferFamily(candidate.detectorText)
    const normalizedTokens = normalizedPromptTokens(candidate.staticText ?? candidate.detectorText)
    return {
      occurrenceId,
      ordinal,
      familyHint,
      roleHint: inferRole(candidate.detectorText, familyHint),
      classification: candidate.staticText === undefined ? "contextual-gap" : "static",
      detectorSha256: digest(candidate.detectorText),
      revisionSha256: candidate.staticText === undefined ? null : digest(candidate.staticText),
      sourceSha256: digest(source.slice(candidate.node.start, candidate.node.end)),
      textMinHash: promptTextMinHash(normalizedTokens),
      normalizedTokenCount: normalizedTokens.length,
      astContextSha256: candidate.astContextSha256,
    }
  })
}

export function discoverPromptCandidates(source: string): PromptCandidate[] {
  const ast = parser.parse(source, {
    allowReturnOutsideFunction: true,
    errorRecovery: false,
    plugins: ["jsx", "typescript"],
    sourceType: "unambiguous",
  })
  const candidates: PromptCandidate[] = []
  visit(ast.program, (node, astPath) => {
    const material = candidateMaterial(node)
    if (!material || material.detectorText.length < RULESET.minimumCharacters) return
    const signals = PROMPT_SIGNALS.filter(({ pattern }) => pattern.test(material.detectorText)).map(({ id }) => id)
    if (signals.length < RULESET.minimumSignals) return
    candidates.push({ node, signals, astContextSha256: digest([...astPath, node.type].join("/")), ...material })
  })
  return candidates.sort((left, right) => left.node.start - right.node.start)
}

function promptCorpus(
  path: string,
  entrypointBytes: Buffer | Uint8Array,
): { source: string; candidates: PromptCandidate[] } {
  const entrypointSource = decodeUtf8(entrypointBytes, path)
  // biome-ignore lint/suspicious/noTemplateCurlyInString: Match the dispatcher's literal platform interpolation.
  const graphDirectoryName = entrypointSource.includes("./graph.patched/${platformDir}/cli.js")
    ? "graph.patched"
    : // biome-ignore lint/suspicious/noTemplateCurlyInString: Match the dispatcher's literal platform interpolation.
      entrypointSource.includes("./graph/${platformDir}/cli.js")
      ? "graph"
      : null
  if (graphDirectoryName === null) {
    return { source: entrypointSource, candidates: discoverPromptCandidates(entrypointSource) }
  }

  const graphRoot = join(dirname(path), graphDirectoryName, "darwin-arm64")
  if (!existsSync(join(graphRoot, "cli.js"))) {
    throw new Error(`prompt catalog graph is missing its Darwin entrypoint: ${graphRoot}`)
  }
  let source = ""
  const candidates: PromptCandidate[] = []
  for (const file of listJavaScriptFiles(graphRoot)) {
    const graphPath = relative(graphRoot, file).replaceAll("\\", "/")
    const prefix = `/* prompt-corpus:${graphPath} */\n`
    const fileSource = decodeUtf8(readFileSync(file), file)
    const sourceOffset = source.length + prefix.length
    source += `${prefix}${fileSource}\n`
    for (const candidate of discoverPromptCandidates(fileSource)) {
      candidates.push({
        ...candidate,
        sourcePath: graphPath,
        node: {
          ...candidate.node,
          start: candidate.node.start + sourceOffset,
          end: candidate.node.end + sourceOffset,
        },
        astContextSha256: digest(`${graphPath}\0${candidate.astContextSha256}`),
      })
    }
  }
  return { source, candidates }
}

function listJavaScriptFiles(root: string): string[] {
  const files: string[] = []
  const visitDirectory = (directory: string): void => {
    for (const entry of readdirSync(directory, { withFileTypes: true }).sort((left, right) =>
      left.name.localeCompare(right.name),
    )) {
      const fullPath = join(directory, entry.name)
      if (entry.isDirectory()) visitDirectory(fullPath)
      else if (entry.isFile() && entry.name.endsWith(".js")) files.push(fullPath)
    }
  }
  visitDirectory(root)
  return files
}

function candidateMaterial(
  node: AstNode,
): { detectorText: string; staticText?: string; expressionCount: number } | null {
  if (node.type === "StringLiteral") {
    const value = node.value
    if (typeof value !== "string") return null
    return { detectorText: value, staticText: value, expressionCount: 0 }
  }
  if (node.type !== "TemplateLiteral") return null
  const quasis = Array.isArray(node.quasis) ? node.quasis : []
  const expressions = Array.isArray(node.expressions) ? node.expressions : []
  const values = quasis.map((quasi) => {
    if (!isRecord(quasi) || !isRecord(quasi.value)) return ""
    const cooked = quasi.value.cooked
    return typeof cooked === "string" ? cooked : String(quasi.value.raw ?? "")
  })
  const detectorText = values.join(" ")
  return {
    detectorText,
    ...(expressions.length === 0 ? { staticText: values.join("") } : {}),
    expressionCount: expressions.length,
  }
}

function normalizedPromptTokens(text: string): string[] {
  return (
    text
      .normalize("NFKC")
      .toLocaleLowerCase("en-US")
      .match(/[\p{L}\p{N}_-]+|[^\s]/gu) ?? []
  )
}

function promptTextMinHash(tokens: string[]): string {
  const shingles = new Set<string>()
  if (tokens.length < 3) {
    for (const token of tokens) shingles.add(token)
  } else {
    for (let index = 0; index <= tokens.length - 3; index += 1) {
      shingles.add(`${tokens[index]}\u001f${tokens[index + 1]}\u001f${tokens[index + 2]}`)
    }
  }
  const minima = new Uint32Array(PROMPT_MINHASH_COMPONENTS)
  minima.fill(0xffffffff)
  for (const shingle of shingles) {
    const hash = createHash("sha256").update(shingle).digest()
    const first = hash.readUInt32BE(0)
    const step = hash.readUInt32BE(4) | 1
    for (let component = 0; component < PROMPT_MINHASH_COMPONENTS; component += 1) {
      const value = (first + Math.imul(component, step)) >>> 0
      if (value < (minima[component] ?? 0xffffffff)) minima[component] = value
    }
  }
  const signature = Buffer.alloc(PROMPT_MINHASH_COMPONENTS * 4)
  minima.forEach((value, index) => {
    signature.writeUInt32BE(value, index * 4)
  })
  return signature.toString("base64")
}

function inferFamily(text: string): string {
  const value = text.toLowerCase()
  if (value.includes("summary of the conversation") || value.includes("compact")) return "compact"
  if (value.includes("session title") || (value.includes("title") && value.includes("branch"))) return "title"
  if (value.includes("memory") || value.includes("remember")) return "memory"
  if (value.includes("permission") || value.includes("security")) return "permission-security"
  if (value.includes("browser") || value.includes("web search") || value.includes("web fetch")) return "web-browser"
  if (value.includes("subagent") || value.includes("worker agent") || value.includes("agent for claude code")) {
    return "agent"
  }
  if (value.includes("suggest what the user") || value.includes("suggestion mode")) return "prompt-suggestion"
  if (value.includes("hook")) return "hook"
  if (value.includes("use this tool") || value.includes("this tool")) return "tool-description"
  return "auxiliary"
}

function inferRole(text: string, familyId: string): PromptCatalogEntry["role"] {
  if (familyId === "tool-description") return "tool"
  if (/\byou are\b|\byour task\b|\binstructions?\b/i.test(text)) return "system"
  if (/\bthe user\b|\buser's\b/i.test(text)) return "user"
  return "unknown"
}

function inferProvenance(
  candidate: PromptCandidate,
  sourceText: string,
  upstreamSource: string,
): PromptCatalogEntry["provenance"] {
  if (upstreamSource === "") return "unknown"
  if (upstreamSource.includes(sourceText)) return "upstream"
  const probe = (candidate.staticText ?? candidate.detectorText).trim().slice(0, 96)
  return probe.length >= 32 && upstreamSource.includes(probe) ? "upstream" : "repo-patch"
}

function assertNoRuntimeLeak(content: string, options: WritePromptCatalogOptions): void {
  const forbidden = [
    resolve(options.upstreamBundlePath),
    resolve(options.patchedBundlePath),
    dirname(resolve(options.outDir)),
  ]
  for (const value of forbidden) {
    if (value.length >= 8 && content.includes(value)) {
      throw new Error(`prompt catalog candidate contains a release-host path: ${value}`)
    }
  }
  if (/\b(?:sk-ant-[A-Za-z0-9_-]{16,}|gh[opsu]_[A-Za-z0-9]{20,})\b/.test(content)) {
    throw new Error("prompt catalog candidate contains a token-shaped secret")
  }
}

function validateCatalogPath(path: string): void {
  if (path === "" || path.startsWith("/") || path.split(/[\\/]/).includes("..")) {
    throw new Error(`unsafe prompt catalog path: ${path}`)
  }
}

function resolveCatalogPath(root: string, path: string): string {
  validateCatalogPath(path)
  const resolvedRoot = resolve(root)
  const candidate = resolve(resolvedRoot, path)
  if (candidate !== resolvedRoot && !candidate.startsWith(`${resolvedRoot}${sep}`)) {
    throw new Error(`prompt catalog path escapes root: ${path}`)
  }
  if (lstatSync(candidate).isSymbolicLink()) throw new Error(`prompt catalog symlink is forbidden: ${candidate}`)
  return candidate
}

function listCatalogFiles(root: string, current = ""): string[] {
  const directory = current === "" ? root : join(root, ...current.split("/"))
  const files: string[] = []
  for (const entry of readdirSync(directory, { withFileTypes: true }).sort((left, right) =>
    left.name < right.name ? -1 : left.name > right.name ? 1 : 0,
  )) {
    const path = current === "" ? entry.name : `${current}/${entry.name}`
    validateCatalogPath(path)
    if (entry.isSymbolicLink()) throw new Error(`prompt catalog symlink is forbidden: ${join(root, path)}`)
    if (entry.isDirectory()) files.push(...listCatalogFiles(root, path))
    else if (entry.isFile()) files.push(path)
    else throw new Error(`unsupported prompt catalog entry: ${join(root, path)}`)
  }
  return files.sort()
}

function prepareOutputDirectory(path: string): void {
  const resolved = resolve(path)
  if (resolved === resolve("/") || basename(resolved) !== "catalog") {
    throw new Error(`refusing to replace unsafe prompt catalog path: ${resolved}`)
  }
  if (existsSync(resolved)) rmSync(resolved, { recursive: true, force: true })
  mkdirSync(resolved, { recursive: true })
}

function assertDigest(label: string, content: string | Buffer | Uint8Array, expected: string): void {
  const actual = digest(content)
  if (actual !== expected) throw new Error(`${label} SHA-256 mismatch: expected ${expected}, got ${actual}`)
}

function canonicalJson(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`
}

function digest(content: string | Buffer | Uint8Array): string {
  return `sha256-${createHash("sha256").update(content).digest("base64")}`
}

function decodeUtf8(bytes: Buffer | Uint8Array, path: string): string {
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes)
  } catch {
    throw new Error(`prompt catalog input is not valid UTF-8: ${path}`)
  }
}

function updateLengthPrefixed(hash: ReturnType<typeof createHash>, bytes: Buffer): void {
  const length = Buffer.alloc(8)
  length.writeBigUInt64BE(BigInt(bytes.byteLength))
  hash.update(length)
  hash.update(bytes)
}

function visit(node: unknown, onNode: (node: AstNode, astPath: string[]) => void, astPath: string[] = []): void {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const item of node) visit(item, onNode, astPath)
    return
  }
  const record = node as Record<string, unknown>
  if (typeof record.type === "string" && typeof record.start === "number" && typeof record.end === "number") {
    onNode(record as AstNode, astPath)
  }
  for (const key of Object.keys(record)) {
    if (IGNORED_AST_KEYS.has(key)) continue
    astPath.push(`${String(record.type ?? "Object")}.${key}`)
    visit(record[key], onNode, astPath)
    astPath.pop()
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}
