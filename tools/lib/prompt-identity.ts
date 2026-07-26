import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"

export const PROMPT_IDENTITY_SCHEMA_VERSION = 2 as const

const MIN_PARTIAL_TEXT_SIMILARITY = 0.2
const MAX_PARTIAL_CANDIDATES = 5

export type PromptIdentityObservation = {
  occurrenceId: string
  ordinal: number
  familyHint: string
  roleHint: "system" | "tool" | "user" | "unknown"
  classification: "static" | "contextual-gap"
  detectorSha256: string
  revisionSha256: string | null
  sourceSha256: string
  textMinHash: string
  normalizedTokenCount: number
  astContextSha256: string
}

export type PromptLineage = {
  lineageId: string
  family: string
  role: PromptIdentityObservation["roleHint"]
  catalogPath: string
  introducedIn: string
}

export type PromptLineageRegistry = {
  schema: typeof PROMPT_IDENTITY_SCHEMA_VERSION
  scope: "prompt-lineage-registry"
  lineages: PromptLineage[]
  registrySha256: string
}

export type PromptOccurrenceDecision = PromptIdentityObservation & {
  lineageId: string
  relation: "new" | "carry" | "split" | "merge"
  predecessors: string[]
  evidence: "baseline-allocation" | "unique-exact-observation" | "maintainer-rule"
  rationale?: string
}

export type PromptOccurrenceLedger = {
  schema: typeof PROMPT_IDENTITY_SCHEMA_VERSION
  scope: "prompt-occurrence-ledger"
  upstreamVersion: string
  inventorySha256: string
  lineageSetSha256: string
  occurrences: PromptOccurrenceDecision[]
  ledgerSha256: string
}

export type ResolvedPromptIdentity = {
  lineage: PromptLineage
  decision: PromptOccurrenceDecision
}

export type PromptIdentityResolution = {
  lineageSetSha256: string
  ledgerSha256: string
  byOccurrenceId: Map<string, ResolvedPromptIdentity>
}

export type PromptIdentityDraftDecision = PromptIdentityObservation & {
  relation: "carry" | "new" | "split" | "merge" | "unresolved"
  lineageId: string | null
  predecessors: string[]
  evidence: "unique-exact-observation" | "manual-resolution-required" | "maintainer-rule"
  candidateMatches: PromptPartialCandidate[]
  rationale?: string
}

export type PromptPartialCandidate = {
  rank: number
  lineageId: string
  predecessorOccurrenceId: string
  textSimilarity: number
  astContextMatch: boolean
  familyMatch: boolean
  roleMatch: boolean
  classificationMatch: boolean
}

export type PromptIdentityDraft = {
  schema: typeof PROMPT_IDENTITY_SCHEMA_VERSION
  scope: "prompt-occurrence-ledger-draft"
  upstreamVersion: string
  previousVersion: string
  inventorySha256: string
  registrySha256: string
  decisions: PromptIdentityDraftDecision[]
  summary: {
    carried: number
    unresolved: number
    unresolvedWithPartialCandidates: number
    unmatchedPriorLineages: string[]
  }
}

export function promptIdentityInventorySha256(observations: PromptIdentityObservation[]): string {
  return digest(canonicalJson(observations))
}

export function loadPromptIdentityResolution(
  identityRoot: string,
  upstreamVersion: string,
  observations: PromptIdentityObservation[],
): PromptIdentityResolution {
  const registryPath = join(identityRoot, "registry.json")
  const ledgerPath = join(identityRoot, "versions", `${upstreamVersion}.json`)
  if (!existsSync(registryPath)) throw new Error(`prompt lineage registry missing: ${registryPath}`)
  if (!existsSync(ledgerPath)) {
    throw new Error(
      `prompt occurrence ledger missing for ${upstreamVersion}: ${ledgerPath}\n` +
        `run: just prompt-identity-draft ${upstreamVersion} <previous-version>`,
    )
  }

  const registry = readRegistry(registryPath)
  const ledger = readLedger(ledgerPath)
  if (ledger.upstreamVersion !== upstreamVersion) {
    throw new Error(
      `prompt occurrence ledger version mismatch: expected ${upstreamVersion}, got ${ledger.upstreamVersion}`,
    )
  }
  const inventorySha256 = promptIdentityInventorySha256(observations)
  if (ledger.inventorySha256 !== inventorySha256) {
    throw new Error(
      `prompt occurrence ledger is stale for ${upstreamVersion}: expected inventory ${inventorySha256}, got ${ledger.inventorySha256}`,
    )
  }

  const lineageById = new Map(registry.lineages.map((lineage) => [lineage.lineageId, lineage]))
  const ledgerLineages = ledger.occurrences.map((decision) => {
    const lineage = lineageById.get(decision.lineageId)
    if (!lineage) throw new Error(`prompt occurrence ledger references unknown lineage: ${decision.lineageId}`)
    return lineage
  })
  if (ledger.lineageSetSha256 !== lineageSetSha256(ledgerLineages)) {
    throw new Error(`prompt occurrence ledger is stale for its lineage set: ${ledgerPath}`)
  }
  const observationById = new Map(observations.map((observation) => [observation.occurrenceId, observation]))
  const byOccurrenceId = new Map<string, ResolvedPromptIdentity>()
  const assignedLineages = new Set<string>()
  if (observationById.size !== observations.length) throw new Error("duplicate prompt occurrence observation")

  for (const decision of ledger.occurrences) {
    const observation = observationById.get(decision.occurrenceId)
    if (!observation)
      throw new Error(`prompt occurrence decision references unknown occurrence: ${decision.occurrenceId}`)
    assertDecisionMatchesObservation(decision, observation)
    assertDecisionShape(decision)
    const lineage = lineageById.get(decision.lineageId)
    if (!lineage) throw new Error(`prompt occurrence decision references unknown lineage: ${decision.lineageId}`)
    if (assignedLineages.has(lineage.lineageId)) {
      throw new Error(`prompt lineage is assigned more than once in ${upstreamVersion}: ${lineage.lineageId}`)
    }
    if (byOccurrenceId.has(decision.occurrenceId)) {
      throw new Error(`duplicate prompt occurrence decision: ${decision.occurrenceId}`)
    }
    assignedLineages.add(lineage.lineageId)
    byOccurrenceId.set(decision.occurrenceId, { lineage, decision })
  }
  if (byOccurrenceId.size !== observations.length) {
    const unresolved = observations
      .filter((observation) => !byOccurrenceId.has(observation.occurrenceId))
      .map(({ occurrenceId }) => occurrenceId)
    throw new Error(`prompt identity decisions incomplete for ${upstreamVersion}: ${unresolved.join(", ")}`)
  }

  return {
    lineageSetSha256: ledger.lineageSetSha256,
    ledgerSha256: ledger.ledgerSha256,
    byOccurrenceId,
  }
}

export function bootstrapPromptIdentityFiles(
  identityRoot: string,
  upstreamVersion: string,
  observations: PromptIdentityObservation[],
): { registry: PromptLineageRegistry; ledger: PromptOccurrenceLedger } {
  const registryPath = join(identityRoot, "registry.json")
  const ledgerPath = join(identityRoot, "versions", `${upstreamVersion}.json`)
  if (existsSync(registryPath) || existsSync(ledgerPath)) {
    throw new Error(`refusing to overwrite prompt identity state under ${identityRoot}`)
  }

  const lineages = observations.map((observation, index): PromptLineage => {
    const lineageId = `prompt-${String(index + 1).padStart(6, "0")}`
    return {
      lineageId,
      family: observation.familyHint,
      role: observation.roleHint,
      catalogPath: `entries/${observation.familyHint}/${observation.roleHint}/${lineageId}.md`,
      introducedIn: upstreamVersion,
    }
  })
  const registry = withSelfHash(
    {
      schema: PROMPT_IDENTITY_SCHEMA_VERSION,
      scope: "prompt-lineage-registry" as const,
      lineages,
    },
    "registrySha256",
  ) as PromptLineageRegistry
  const occurrences = observations.map(
    (observation, index): PromptOccurrenceDecision => ({
      ...observation,
      lineageId: lineages[index]!.lineageId,
      relation: "new",
      predecessors: [],
      evidence: "baseline-allocation",
    }),
  )
  const ledger = withSelfHash(
    {
      schema: PROMPT_IDENTITY_SCHEMA_VERSION,
      scope: "prompt-occurrence-ledger" as const,
      upstreamVersion,
      inventorySha256: promptIdentityInventorySha256(observations),
      lineageSetSha256: lineageSetSha256(lineages),
      occurrences,
    },
    "ledgerSha256",
  ) as PromptOccurrenceLedger

  mkdirSync(dirname(ledgerPath), { recursive: true })
  writeFileSync(registryPath, canonicalJson(registry), { mode: 0o644 })
  writeFileSync(ledgerPath, canonicalJson(ledger), { mode: 0o644 })
  return { registry, ledger }
}

export function buildPromptIdentityDraft(
  identityRoot: string,
  upstreamVersion: string,
  previousVersion: string,
  observations: PromptIdentityObservation[],
): PromptIdentityDraft {
  const registry = readRegistry(join(identityRoot, "registry.json"))
  const previous = readLedger(join(identityRoot, "versions", `${previousVersion}.json`))
  if (previous.upstreamVersion !== previousVersion) {
    throw new Error(`previous prompt occurrence ledger version mismatch: expected ${previousVersion}`)
  }
  const lineageById = new Map(registry.lineages.map((lineage) => [lineage.lineageId, lineage]))
  const previousLineages = previous.occurrences.map((occurrence) => {
    const lineage = lineageById.get(occurrence.lineageId)
    if (!lineage)
      throw new Error(`previous prompt occurrence ledger references unknown lineage: ${occurrence.lineageId}`)
    return lineage
  })
  if (previous.lineageSetSha256 !== lineageSetSha256(previousLineages)) {
    throw new Error(`previous prompt occurrence ledger is stale for its lineage set: ${previousVersion}`)
  }

  const priorByRevision = groupBy(previous.occurrences, matchFingerprint)
  const currentByRevision = groupBy(observations, matchFingerprint)
  const decisions = observations.map((observation): PromptIdentityDraftDecision => {
    const fingerprint = matchFingerprint(observation)
    const priorMatches = priorByRevision.get(fingerprint) ?? []
    const currentMatches = currentByRevision.get(fingerprint) ?? []
    if (priorMatches.length === 1 && currentMatches.length === 1) {
      const predecessor = priorMatches[0]!
      return {
        ...observation,
        relation: "carry",
        lineageId: predecessor.lineageId,
        predecessors: [predecessor.occurrenceId],
        evidence: "unique-exact-observation",
        candidateMatches: [partialCandidate(observation, predecessor, 1)],
      }
    }
    return {
      ...observation,
      relation: "unresolved",
      lineageId: null,
      predecessors: [],
      evidence: "manual-resolution-required",
      candidateMatches: rankPartialCandidates(observation, previous.occurrences),
    }
  })
  const carriedLineages = new Set(
    decisions.flatMap((decision) => (decision.relation === "carry" && decision.lineageId ? [decision.lineageId] : [])),
  )
  const previousLineageIds = new Set(previous.occurrences.map(({ lineageId }) => lineageId))
  return {
    schema: PROMPT_IDENTITY_SCHEMA_VERSION,
    scope: "prompt-occurrence-ledger-draft",
    upstreamVersion,
    previousVersion,
    inventorySha256: promptIdentityInventorySha256(observations),
    registrySha256: registry.registrySha256,
    decisions,
    summary: {
      carried: decisions.filter(({ relation }) => relation === "carry").length,
      unresolved: decisions.filter(({ relation }) => relation === "unresolved").length,
      unresolvedWithPartialCandidates: decisions.filter(
        ({ relation, candidateMatches }) => relation === "unresolved" && candidateMatches.length > 0,
      ).length,
      unmatchedPriorLineages: [...previousLineageIds].filter((lineageId) => !carriedLineages.has(lineageId)).sort(),
    },
  }
}

export function finalizePromptIdentityDraft(
  identityRoot: string,
  draftPath: string,
): { registry: PromptLineageRegistry; ledger: PromptOccurrenceLedger } {
  const draft = readJson<PromptIdentityDraft>(draftPath)
  if (
    draft.schema !== PROMPT_IDENTITY_SCHEMA_VERSION ||
    draft.scope !== "prompt-occurrence-ledger-draft" ||
    !Array.isArray(draft.decisions)
  ) {
    throw new Error(`invalid prompt identity draft: ${draftPath}`)
  }
  const registryPath = join(identityRoot, "registry.json")
  const ledgerPath = join(identityRoot, "versions", `${draft.upstreamVersion}.json`)
  if (existsSync(ledgerPath)) throw new Error(`refusing to overwrite prompt occurrence ledger: ${ledgerPath}`)
  const registry = readRegistry(registryPath)
  if (draft.registrySha256 !== registry.registrySha256) {
    throw new Error(`prompt identity draft is stale for registry: ${draftPath}`)
  }
  const previous = readLedger(join(identityRoot, "versions", `${draft.previousVersion}.json`))
  if (previous.upstreamVersion !== draft.previousVersion) {
    throw new Error(`previous prompt occurrence ledger version mismatch: expected ${draft.previousVersion}`)
  }
  const previousOccurrenceIds = new Set(previous.occurrences.map(({ occurrenceId }) => occurrenceId))
  const priorByFingerprint = groupBy(previous.occurrences, matchFingerprint)
  const currentByFingerprint = groupBy(draft.decisions, matchFingerprint)
  const existingLineageIds = new Set(registry.lineages.map(({ lineageId }) => lineageId))
  let nextLineageNumber = Math.max(
    0,
    ...registry.lineages.map(({ lineageId }) => Number.parseInt(lineageId.slice("prompt-".length), 10)),
  )
  const appendedLineages: PromptLineage[] = []
  const occurrences = draft.decisions.map((decision): PromptOccurrenceDecision => {
    if (decision.relation === "unresolved" || decision.evidence === "manual-resolution-required") {
      throw new Error(`prompt identity decision remains unresolved: ${decision.occurrenceId}`)
    }
    for (const predecessor of decision.predecessors) {
      if (!previousOccurrenceIds.has(predecessor)) {
        throw new Error(`prompt identity decision has unknown predecessor: ${decision.occurrenceId} -> ${predecessor}`)
      }
    }
    if (decision.relation === "carry") {
      if (!decision.lineageId || !existingLineageIds.has(decision.lineageId)) {
        throw new Error(`carried prompt identity requires an existing lineage: ${decision.occurrenceId}`)
      }
      if (decision.evidence === "unique-exact-observation") {
        const fingerprint = matchFingerprint(decision)
        const priorMatches = priorByFingerprint.get(fingerprint) ?? []
        const currentMatches = currentByFingerprint.get(fingerprint) ?? []
        const predecessor = priorMatches[0]
        if (
          priorMatches.length !== 1 ||
          currentMatches.length !== 1 ||
          predecessor?.lineageId !== decision.lineageId ||
          decision.predecessors.length !== 1 ||
          decision.predecessors[0] !== predecessor.occurrenceId
        ) {
          throw new Error(`automatic prompt carry evidence was edited or is ambiguous: ${decision.occurrenceId}`)
        }
      }
    } else {
      if (decision.evidence !== "maintainer-rule") {
        throw new Error(`${decision.relation} prompt identity requires a maintainer rule: ${decision.occurrenceId}`)
      }
      if (decision.lineageId !== null) {
        throw new Error(`new, split, or merged prompt identity must leave lineageId null: ${decision.occurrenceId}`)
      }
      nextLineageNumber += 1
      const lineageId = `prompt-${String(nextLineageNumber).padStart(6, "0")}`
      decision.lineageId = lineageId
      existingLineageIds.add(lineageId)
      appendedLineages.push({
        lineageId,
        family: decision.familyHint,
        role: decision.roleHint,
        catalogPath: `entries/${decision.familyHint}/${decision.roleHint}/${lineageId}.md`,
        introducedIn: draft.upstreamVersion,
      })
    }
    const normalized: PromptOccurrenceDecision = {
      ...toObservation(decision),
      lineageId: decision.lineageId,
      relation: decision.relation,
      predecessors: decision.predecessors,
      evidence: decision.evidence,
      ...(decision.rationale ? { rationale: decision.rationale } : {}),
    }
    assertDecisionShape(normalized)
    return normalized
  })
  const observations = draft.decisions.map(toObservation)
  if (draft.inventorySha256 !== promptIdentityInventorySha256(observations)) {
    throw new Error(`prompt identity draft inventory SHA-256 mismatch: ${draftPath}`)
  }
  if (new Set(occurrences.map(({ occurrenceId }) => occurrenceId)).size !== occurrences.length) {
    throw new Error(`prompt identity draft contains duplicate occurrences: ${draftPath}`)
  }

  const updatedRegistry = withSelfHash(
    { ...registry, lineages: [...registry.lineages, ...appendedLineages], registrySha256: undefined },
    "registrySha256",
  ) as PromptLineageRegistry
  const lineageById = new Map(updatedRegistry.lineages.map((lineage) => [lineage.lineageId, lineage]))
  const currentLineages = occurrences.map(({ lineageId }) => lineageById.get(lineageId)!)
  const ledger = withSelfHash(
    {
      schema: PROMPT_IDENTITY_SCHEMA_VERSION,
      scope: "prompt-occurrence-ledger" as const,
      upstreamVersion: draft.upstreamVersion,
      inventorySha256: draft.inventorySha256,
      lineageSetSha256: lineageSetSha256(currentLineages),
      occurrences,
    },
    "ledgerSha256",
  ) as PromptOccurrenceLedger
  writeFileSync(registryPath, canonicalJson(updatedRegistry), { mode: 0o644 })
  mkdirSync(dirname(ledgerPath), { recursive: true })
  writeFileSync(ledgerPath, canonicalJson(ledger), { mode: 0o644 })
  return { registry: updatedRegistry, ledger }
}

function readRegistry(path: string): PromptLineageRegistry {
  const registry = readJson<PromptLineageRegistry>(path)
  if (registry.schema !== PROMPT_IDENTITY_SCHEMA_VERSION || registry.scope !== "prompt-lineage-registry") {
    throw new Error(`invalid prompt lineage registry: ${path}`)
  }
  assertSelfHash(registry, "registrySha256", path)
  const ids = new Set<string>()
  const paths = new Set<string>()
  for (const lineage of registry.lineages) {
    if (!/^prompt-\d{6}$/.test(lineage.lineageId)) throw new Error(`invalid prompt lineage ID: ${lineage.lineageId}`)
    if (ids.has(lineage.lineageId)) throw new Error(`duplicate prompt lineage ID: ${lineage.lineageId}`)
    assertCatalogPath(lineage.catalogPath)
    const normalizedPath = lineage.catalogPath.normalize("NFC").toLocaleLowerCase("en-US")
    if (paths.has(normalizedPath)) throw new Error(`duplicate prompt catalog path: ${lineage.catalogPath}`)
    ids.add(lineage.lineageId)
    paths.add(normalizedPath)
  }
  return registry
}

function readLedger(path: string): PromptOccurrenceLedger {
  const ledger = readJson<PromptOccurrenceLedger>(path)
  if (ledger.schema !== PROMPT_IDENTITY_SCHEMA_VERSION || ledger.scope !== "prompt-occurrence-ledger") {
    throw new Error(`invalid prompt occurrence ledger: ${path}`)
  }
  assertSelfHash(ledger, "ledgerSha256", path)
  return ledger
}

export function readPromptIdentityLedger(identityRoot: string, upstreamVersion: string): PromptOccurrenceLedger {
  const path = join(identityRoot, "versions", `${upstreamVersion}.json`)
  if (!existsSync(path)) throw new Error(`prompt occurrence ledger missing: ${path}`)
  return readLedger(path)
}

function assertDecisionMatchesObservation(
  decision: PromptOccurrenceDecision,
  observation: PromptIdentityObservation,
): void {
  for (const key of [
    "ordinal",
    "familyHint",
    "roleHint",
    "classification",
    "detectorSha256",
    "revisionSha256",
    "sourceSha256",
    "textMinHash",
    "normalizedTokenCount",
    "astContextSha256",
  ] as const) {
    if (decision[key] !== observation[key]) {
      throw new Error(`prompt occurrence decision evidence mismatch for ${decision.occurrenceId}: ${key}`)
    }
  }
}

function toObservation(value: PromptIdentityObservation): PromptIdentityObservation {
  return {
    occurrenceId: value.occurrenceId,
    ordinal: value.ordinal,
    familyHint: value.familyHint,
    roleHint: value.roleHint,
    classification: value.classification,
    detectorSha256: value.detectorSha256,
    revisionSha256: value.revisionSha256,
    sourceSha256: value.sourceSha256,
    textMinHash: value.textMinHash,
    normalizedTokenCount: value.normalizedTokenCount,
    astContextSha256: value.astContextSha256,
  }
}

function assertDecisionShape(decision: PromptOccurrenceDecision): void {
  if (decision.relation === "new" && decision.predecessors.length !== 0) {
    throw new Error(`new prompt lineage must not have predecessors: ${decision.occurrenceId}`)
  }
  if ((decision.relation === "carry" || decision.relation === "split") && decision.predecessors.length !== 1) {
    throw new Error(`${decision.relation} prompt lineage requires one predecessor: ${decision.occurrenceId}`)
  }
  if (decision.relation === "merge" && decision.predecessors.length < 2) {
    throw new Error(`merged prompt lineage requires multiple predecessors: ${decision.occurrenceId}`)
  }
  if (decision.evidence === "maintainer-rule" && !decision.rationale?.trim()) {
    throw new Error(`maintainer prompt lineage rule requires a rationale: ${decision.occurrenceId}`)
  }
}

function assertCatalogPath(path: string): void {
  if (!/^entries\/[a-z0-9-]+\/(?:system|tool|user|unknown)\/prompt-\d{6}\.md$/.test(path)) {
    throw new Error(`invalid prompt catalog lineage path: ${path}`)
  }
}

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T
}

function withSelfHash<T extends object, K extends string>(value: T, key: K): T & Record<K, string> {
  return { ...value, [key]: digest(canonicalJson(value)) } as T & Record<K, string>
}

function assertSelfHash<T extends object, K extends keyof T>(value: T, key: K, path: string): void {
  const { [key]: stored, ...payload } = value
  if (stored !== digest(canonicalJson(payload))) throw new Error(`prompt identity SHA-256 mismatch: ${path}`)
}

function canonicalJson(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`
}

function digest(content: string | Buffer | Uint8Array): string {
  return `sha256-${createHash("sha256").update(content).digest("base64")}`
}

function groupBy<T>(items: T[], key: (item: T) => string): Map<string, T[]> {
  const groups = new Map<string, T[]>()
  for (const item of items) {
    const value = key(item)
    groups.set(value, [...(groups.get(value) ?? []), item])
  }
  return groups
}

function matchFingerprint(observation: PromptIdentityObservation): string {
  return `${observation.classification}\0${observation.revisionSha256 ?? observation.detectorSha256}`
}

function lineageSetSha256(lineages: PromptLineage[]): string {
  return digest(canonicalJson([...lineages].sort((left, right) => left.lineageId.localeCompare(right.lineageId))))
}

function rankPartialCandidates(
  observation: PromptIdentityObservation,
  previous: PromptOccurrenceDecision[],
): PromptPartialCandidate[] {
  return previous
    .map((candidate) => partialCandidate(observation, candidate))
    .filter(({ textSimilarity }) => textSimilarity >= MIN_PARTIAL_TEXT_SIMILARITY)
    .sort(
      (left, right) =>
        right.textSimilarity - left.textSimilarity ||
        Number(right.astContextMatch) - Number(left.astContextMatch) ||
        Number(right.familyMatch) - Number(left.familyMatch) ||
        Number(right.roleMatch) - Number(left.roleMatch) ||
        Number(right.classificationMatch) - Number(left.classificationMatch) ||
        left.lineageId.localeCompare(right.lineageId),
    )
    .slice(0, MAX_PARTIAL_CANDIDATES)
    .map((candidate, index) => ({ ...candidate, rank: index + 1 }))
}

function partialCandidate(
  observation: PromptIdentityObservation,
  predecessor: PromptOccurrenceDecision,
  rank = 0,
): PromptPartialCandidate {
  return {
    rank,
    lineageId: predecessor.lineageId,
    predecessorOccurrenceId: predecessor.occurrenceId,
    textSimilarity: minHashSimilarity(observation.textMinHash, predecessor.textMinHash),
    astContextMatch: observation.astContextSha256 === predecessor.astContextSha256,
    familyMatch: observation.familyHint === predecessor.familyHint,
    roleMatch: observation.roleHint === predecessor.roleHint,
    classificationMatch: observation.classification === predecessor.classification,
  }
}

function minHashSimilarity(leftEncoded: string, rightEncoded: string): number {
  const left = Buffer.from(leftEncoded, "base64")
  const right = Buffer.from(rightEncoded, "base64")
  if (left.byteLength !== right.byteLength || left.byteLength === 0 || left.byteLength % 4 !== 0) {
    throw new Error("invalid prompt text MinHash signature")
  }
  let equal = 0
  const components = left.byteLength / 4
  for (let offset = 0; offset < left.byteLength; offset += 4) {
    if (left.readUInt32BE(offset) === right.readUInt32BE(offset)) equal += 1
  }
  return Number((equal / components).toFixed(4))
}
