import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { satisfies, valid } from "semver"
import { patchApplies } from "./apply-patches"
import { loadPatchEntriesFromDirectory, type PatchEntry } from "./patch-files"
import { loadStageManifest } from "./stage-manifest"

export const OBLIGATION_PLATFORMS = ["darwin-arm64", "linux-x64"] as const

export type ObligationPlatform = (typeof OBLIGATION_PLATFORMS)[number]
export type EvidenceClass = "static" | "runtime" | "real-os-runtime"
export type Disposition = "ported" | "upstream_equivalent" | "retired"

export type PatchObligation = {
  familyId: string
  invariantId: string
  introducedVersion: string
  rationaleRefs: string[]
  requiredPlatforms: ObligationPlatform[]
  evidenceClass: EvidenceClass
  oracleIds: string[]
}

export type PatchObligationRegistry = {
  schema: 1
  baselineVersion: string
  obligations: PatchObligation[]
  maintainerAcknowledgement?: {
    approvedBy: string
    approvedAt: string
    catalogSha256: string
  }
}

type MaintainerAcknowledgement = {
  decidedBy: string
  decidedAt: string
  reason: string
  evidenceRefs: string[]
  decisionSha256: string
}

type RetirementProposal = {
  reason: string
  evidenceRefs: string[]
}

type RetirementAcknowledgement = {
  approvedBy: string
  approvedAt: string
  proposalSha256: string
}

export type PatchObligationDecision = {
  familyId: string
  invariantId: string
  disposition: Disposition
  patchEntries?: string[]
  maintainerAcknowledgement?: MaintainerAcknowledgement
}

export type PatchObligationLedger = {
  schema: 1
  targetVersion: string
  decisions: PatchObligationDecision[]
  retirementProposal?: RetirementProposal
  retirementAcknowledgement?: RetirementAcknowledgement
}

export type PatchEvidenceReceipt = {
  schema: 1
  targetVersion: string
  sourceCommit: string
  platform: ObligationPlatform
  upstreamEntrypointSha256: string
  patchedEntrypointSha256: string
  selectedPatchEntries: string[]
  executedOracleIds: string[]
  evidenceClass: EvidenceClass
  outcome: "passed" | "failed"
  skippedOracleIds: string[]
}

export type PatchObligationReport = {
  schema: 1
  scope: "patch-obligation-admission"
  mode: "coverage" | "admission"
  targetVersion: string
  sourceCommit: string | null
  registryObligations: number
  decisions: number
  dispositions: Record<Disposition, number>
  receipts: number
  status: "passed" | "blocked"
  errors: string[]
}

export type VerifyPatchObligationsOptions = {
  root: string
  version: string
  mode: "coverage" | "admission"
  evidenceDir?: string
  sourceCommit?: string
  registry?: PatchObligationRegistry
  ledger?: PatchObligationLedger
  patches?: PatchEntry[]
  receipts?: PatchEvidenceReceipt[]
}

export function obligationKey(value: Pick<PatchObligation, "familyId" | "invariantId">): string {
  return `${value.familyId}/${value.invariantId}`
}

export function selectPatchEntriesForEvidence(
  ledger: PatchObligationLedger,
  patches: PatchEntry[],
  version: string,
  platform: ObligationPlatform,
): string[] {
  const selected = new Set<string>()
  for (const decision of ledger.decisions) {
    if (decision.disposition !== "ported") continue
    for (const name of decision.patchEntries ?? []) {
      const entry = patches.find((candidate) => candidate.name === name && patchApplies(candidate, version))
      if (entry && patchPlatforms(entry).includes(platform)) selected.add(name)
    }
  }
  return [...selected].sort()
}

export function loadPatchObligationRegistry(root: string): PatchObligationRegistry {
  const path = join(root, "patch-obligations", "registry.json")
  return parseRegistry(readJson(path), path)
}

export function loadPatchObligationLedger(root: string, version: string): PatchObligationLedger {
  const path = join(root, "patch-obligations", "versions", `${version}.json`)
  return parseLedger(readJson(path), path)
}

export function loadPatchEvidenceReceipts(directory: string): PatchEvidenceReceipt[] {
  if (!existsSync(directory)) return []
  return readdirSync(directory)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .map((file) => {
      const path = join(directory, file)
      return parseReceipt(readJson(path), path)
    })
}

export function verifyPatchObligations(options: VerifyPatchObligationsOptions): PatchObligationReport {
  const registry = options.registry ?? loadPatchObligationRegistry(options.root)
  const ledger = options.ledger ?? loadPatchObligationLedger(options.root, options.version)
  const patches = options.patches ?? loadPatchEntriesFromDirectory(options.root)
  const receipts = options.receipts ?? loadPatchEvidenceReceipts(options.evidenceDir ?? "")
  const errors: string[] = []
  const sourceCommit = options.sourceCommit ?? null

  if (ledger.targetVersion !== options.version) {
    errors.push(`ledger targetVersion ${ledger.targetVersion} does not match ${options.version}`)
  }
  if (!registry.maintainerAcknowledgement) {
    errors.push("registry: missing maintainer acknowledgement")
  } else if (registry.maintainerAcknowledgement.catalogSha256 !== catalogSha256(registry)) {
    errors.push("registry: maintainer acknowledgement digest does not match the catalog")
  }

  const obligationByKey = uniqueMap(registry.obligations, obligationKey, "registry obligation", errors)
  const decisionByKey = uniqueMap(ledger.decisions, obligationKey, "target decision", errors)
  const activePatches = patches.filter((patch) => patchAppliesAtVersion(patch, options.version))
  const activeByName = uniqueMap(activePatches, ({ name }) => name, "active patch entry", errors)
  const mappedEntries = new Set<string>()
  validateRetirementBatch(ledger, errors)

  for (const [key, obligation] of obligationByKey) {
    const decision = decisionByKey.get(key)
    if (!decision) {
      errors.push(`${key}: missing target disposition`)
      continue
    }
    if (decision.disposition === "ported") {
      if (!decision.patchEntries?.length) {
        errors.push(`${key}: ported disposition requires patchEntries`)
        continue
      }
      const coveredPlatforms = new Set<ObligationPlatform>()
      for (const entryName of decision.patchEntries) {
        const entry = activeByName.get(entryName)
        if (!entry) {
          errors.push(`${key}: patch entry ${entryName} is not active at ${options.version}`)
          continue
        }
        mappedEntries.add(entryName)
        for (const platform of patchPlatforms(entry)) coveredPlatforms.add(platform)
      }
      for (const platform of obligation.requiredPlatforms) {
        if (!coveredPlatforms.has(platform)) errors.push(`${key}: ported entries do not cover ${platform}`)
      }
    } else {
      if (decision.patchEntries?.length) errors.push(`${key}: ${decision.disposition} must not name patchEntries`)
      if (decision.disposition === "upstream_equivalent" || decision.maintainerAcknowledgement) {
        validateAcknowledgement(key, decision, errors)
      }
    }
  }

  for (const key of decisionByKey.keys()) {
    if (!obligationByKey.has(key)) errors.push(`${key}: decision references an unknown obligation`)
  }
  for (const entry of activePatches) {
    if (!mappedEntries.has(entry.name)) errors.push(`${entry.name}: active patch entry is not mapped to an obligation`)
  }

  if (options.mode === "admission") {
    if (!sourceCommit) errors.push("admission requires a source commit")
    verifyEvidence(options, registry, ledger, receipts, activeByName, sourceCommit, errors)
  }

  return {
    schema: 1,
    scope: "patch-obligation-admission",
    mode: options.mode,
    targetVersion: options.version,
    sourceCommit,
    registryObligations: registry.obligations.length,
    decisions: ledger.decisions.length,
    dispositions: {
      ported: ledger.decisions.filter(({ disposition }) => disposition === "ported").length,
      upstream_equivalent: ledger.decisions.filter(({ disposition }) => disposition === "upstream_equivalent").length,
      retired: ledger.decisions.filter(({ disposition }) => disposition === "retired").length,
    },
    receipts: receipts.length,
    status: errors.length === 0 ? "passed" : "blocked",
    errors: [...new Set(errors)].sort(),
  }
}

function validateRetirementBatch(ledger: PatchObligationLedger, errors: string[]): void {
  const batchRetirements = ledger.decisions.filter(
    (decision) => decision.disposition === "retired" && !decision.maintainerAcknowledgement,
  )
  if (batchRetirements.length === 0) return
  const proposal = ledger.retirementProposal
  if (!proposal) {
    errors.push("retirements: batch retirements require retirementProposal")
    return
  }
  if (!proposal.reason || proposal.evidenceRefs.length === 0) {
    errors.push("retirements: retirementProposal requires a reason and evidenceRefs")
  }
  const acknowledgement = ledger.retirementAcknowledgement
  if (!acknowledgement) {
    errors.push("retirements: proposal awaits sole-maintainer acknowledgement")
    return
  }
  if (!acknowledgement.approvedBy || !acknowledgement.approvedAt) {
    errors.push("retirements: maintainer acknowledgement is incomplete")
  }
  if (acknowledgement.proposalSha256 !== retirementProposalSha256(ledger)) {
    errors.push("retirements: maintainer acknowledgement digest does not match the proposal")
  }
}

export function requirePatchObligationAdmission(
  root: string,
  version: string,
  sourceCommit: string,
  resultFile = join(root, "dist", `patch-obligation-admission-${version}.json`),
): PatchObligationReport {
  const report = verifyPatchObligations({
    root,
    version,
    mode: "admission",
    sourceCommit,
    evidenceDir: join(root, "dist", "patch-obligation-evidence", version),
  })
  mkdirSync(dirname(resultFile), { recursive: true })
  writeFileSync(resultFile, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o644 })
  if (report.status !== "passed") {
    throw new Error(`patch obligation admission blocked:\n${report.errors.map((error) => `- ${error}`).join("\n")}`)
  }
  return report
}

function verifyEvidence(
  options: VerifyPatchObligationsOptions,
  registry: PatchObligationRegistry,
  ledger: PatchObligationLedger,
  receipts: PatchEvidenceReceipt[],
  activeByName: Map<string, PatchEntry>,
  sourceCommit: string | null,
  errors: string[],
): void {
  const stage = loadStageManifest(options.root, options.version)
  if (!stage?.platforms?.length) {
    errors.push(`stage manifest for ${options.version} has no platform hashes`)
    return
  }
  const upstreamHashes = new Map(stage.platforms.map((platform) => [platform.platform, platform.entrypointSha256]))
  const patchedHashes = new Map<string, string>()
  for (const platform of OBLIGATION_PLATFORMS) {
    const path = join(options.root, "staging", options.version, "graph.patched", platform, "cli.js")
    if (!existsSync(path)) errors.push(`patched graph is missing for ${platform}: ${path}`)
    else patchedHashes.set(platform, sha256Hex(readFileSync(path)))
  }

  const validReceipts: PatchEvidenceReceipt[] = []
  for (const receipt of receipts) {
    const prefix = `receipt ${receipt.platform}`
    if (receipt.targetVersion !== options.version) errors.push(`${prefix}: stale target ${receipt.targetVersion}`)
    if (receipt.sourceCommit !== sourceCommit) errors.push(`${prefix}: source commit mismatch`)
    if (receipt.upstreamEntrypointSha256 !== upstreamHashes.get(receipt.platform)) {
      errors.push(`${prefix}: upstream entrypoint hash mismatch`)
    }
    if (receipt.patchedEntrypointSha256 !== patchedHashes.get(receipt.platform)) {
      errors.push(`${prefix}: patched entrypoint hash mismatch`)
    }
    if (receipt.outcome !== "passed") errors.push(`${prefix}: outcome is ${receipt.outcome}`)
    if (receipt.skippedOracleIds.length > 0) errors.push(`${prefix}: skipped oracles are not admissible`)
    for (const name of receipt.selectedPatchEntries) {
      const entry = activeByName.get(name)
      if (!entry || !patchPlatforms(entry).includes(receipt.platform)) {
        errors.push(`${prefix}: selected inactive or wrong-platform patch entry ${name}`)
      }
    }
    validReceipts.push(receipt)
  }

  const decisions = new Map(ledger.decisions.map((decision) => [obligationKey(decision), decision]))
  for (const obligation of registry.obligations) {
    const key = obligationKey(obligation)
    const decision = decisions.get(key)
    if (!decision || decision.disposition === "retired") continue
    for (const platform of obligation.requiredPlatforms) {
      const candidates = validReceipts.filter((receipt) => receipt.platform === platform)
      const satisfied = candidates.some((receipt) => {
        if (evidenceRank(receipt.evidenceClass) < evidenceRank(obligation.evidenceClass)) return false
        if (!obligation.oracleIds.every((oracle) => receipt.executedOracleIds.includes(oracle))) return false
        return (
          decision.disposition !== "ported" ||
          (decision.patchEntries ?? [])
            .filter((name) => patchPlatforms(activeByName.get(name)).includes(platform))
            .every((name) => receipt.selectedPatchEntries.includes(name))
        )
      })
      if (!satisfied) errors.push(`${key}: missing ${obligation.evidenceClass} evidence for ${platform}`)
    }
  }
}

function validateAcknowledgement(key: string, decision: PatchObligationDecision, errors: string[]): void {
  const acknowledgement = decision.maintainerAcknowledgement
  if (!acknowledgement) {
    errors.push(`${key}: non-ported disposition requires maintainerAcknowledgement`)
    return
  }
  if (!acknowledgement.decidedBy || !acknowledgement.decidedAt || !acknowledgement.reason) {
    errors.push(`${key}: maintainer acknowledgement is incomplete`)
  }
  if (acknowledgement.evidenceRefs.length === 0) errors.push(`${key}: maintainer acknowledgement needs evidenceRefs`)
  if (acknowledgement.decisionSha256 !== decisionSha256(decision)) {
    errors.push(`${key}: maintainer acknowledgement digest does not match the decision`)
  }
}

export function decisionSha256(decision: PatchObligationDecision): string {
  const canonical = JSON.stringify({
    familyId: decision.familyId,
    invariantId: decision.invariantId,
    disposition: decision.disposition,
    patchEntries: decision.patchEntries ?? [],
  })
  return sha256Hex(Buffer.from(canonical))
}

export function retirementProposalSha256(ledger: PatchObligationLedger): string {
  const retirements = ledger.decisions
    .filter((decision) => decision.disposition === "retired" && !decision.maintainerAcknowledgement)
    .map(({ familyId, invariantId }) => ({ familyId, invariantId }))
    .sort((left, right) => obligationKey(left).localeCompare(obligationKey(right)))
  return sha256Hex(
    Buffer.from(
      JSON.stringify({
        retirements,
        reason: ledger.retirementProposal?.reason ?? "",
        evidenceRefs: [...(ledger.retirementProposal?.evidenceRefs ?? [])].sort(),
      }),
    ),
  )
}

export function catalogSha256(registry: PatchObligationRegistry): string {
  return sha256Hex(
    Buffer.from(
      JSON.stringify({
        baselineVersion: registry.baselineVersion,
        obligations: registry.obligations,
      }),
    ),
  )
}

function patchAppliesAtVersion(patch: PatchEntry, version: string): boolean {
  if (!patch.enabled) return false
  const range = patch.applies_to ?? patch.target_version
  return valid(range) ? range === version : satisfies(version, range)
}

function patchPlatforms(patch: PatchEntry | undefined): ObligationPlatform[] {
  if (!patch) return []
  const platforms = patch.platforms ?? [...OBLIGATION_PLATFORMS]
  return platforms.filter((platform): platform is ObligationPlatform =>
    OBLIGATION_PLATFORMS.includes(platform as ObligationPlatform),
  )
}

function evidenceRank(value: EvidenceClass): number {
  return { static: 0, runtime: 1, "real-os-runtime": 2 }[value]
}

function uniqueMap<T>(values: T[], keyOf: (value: T) => string, label: string, errors: string[]): Map<string, T> {
  const result = new Map<string, T>()
  for (const value of values) {
    const key = keyOf(value)
    if (result.has(key)) errors.push(`${key}: duplicate ${label}`)
    else result.set(key, value)
  }
  return result
}

function parseRegistry(value: unknown, path: string): PatchObligationRegistry {
  const record = requiredRecord(value, path)
  if (record.schema !== 1) throw new Error(`${path}: schema must be 1`)
  const baselineVersion = requiredString(record.baselineVersion, `${path}.baselineVersion`)
  if (!valid(baselineVersion)) throw new Error(`${path}: invalid baselineVersion ${baselineVersion}`)
  const acknowledgement =
    record.maintainerAcknowledgement === undefined
      ? undefined
      : parseCatalogAcknowledgement(record.maintainerAcknowledgement, path)
  return {
    schema: 1,
    baselineVersion,
    obligations: requiredArray(record.obligations, `${path}.obligations`).map((item, index) =>
      parseObligation(item, `${path}.obligations[${index}]`),
    ),
    ...(acknowledgement ? { maintainerAcknowledgement: acknowledgement } : {}),
  }
}

function parseCatalogAcknowledgement(
  value: unknown,
  path: string,
): NonNullable<PatchObligationRegistry["maintainerAcknowledgement"]> {
  const record = requiredRecord(value, `${path}.maintainerAcknowledgement`)
  return {
    approvedBy: requiredString(record.approvedBy, `${path}.maintainerAcknowledgement.approvedBy`),
    approvedAt: requiredString(record.approvedAt, `${path}.maintainerAcknowledgement.approvedAt`),
    catalogSha256: sha256String(record.catalogSha256, `${path}.maintainerAcknowledgement.catalogSha256`),
  }
}

function parseObligation(value: unknown, path: string): PatchObligation {
  const record = requiredRecord(value, path)
  return {
    familyId: stableId(record.familyId, `${path}.familyId`),
    invariantId: stableId(record.invariantId, `${path}.invariantId`),
    introducedVersion: semverString(record.introducedVersion, `${path}.introducedVersion`),
    rationaleRefs: stringArray(record.rationaleRefs, `${path}.rationaleRefs`, true),
    requiredPlatforms: platformArray(record.requiredPlatforms, `${path}.requiredPlatforms`),
    evidenceClass: evidenceClass(record.evidenceClass, `${path}.evidenceClass`),
    oracleIds: stringArray(record.oracleIds, `${path}.oracleIds`, true),
  }
}

function parseLedger(value: unknown, path: string): PatchObligationLedger {
  const record = requiredRecord(value, path)
  if (record.schema !== 1) throw new Error(`${path}: schema must be 1`)
  const retirementProposal =
    record.retirementProposal === undefined ? undefined : parseRetirementProposal(record.retirementProposal, path)
  const retirementAcknowledgement =
    record.retirementAcknowledgement === undefined
      ? undefined
      : parseRetirementAcknowledgement(record.retirementAcknowledgement, path)
  return {
    schema: 1,
    targetVersion: semverString(record.targetVersion, `${path}.targetVersion`),
    decisions: requiredArray(record.decisions, `${path}.decisions`).map((item, index) =>
      parseDecision(item, `${path}.decisions[${index}]`),
    ),
    ...(retirementProposal ? { retirementProposal } : {}),
    ...(retirementAcknowledgement ? { retirementAcknowledgement } : {}),
  }
}

function parseRetirementProposal(value: unknown, path: string): RetirementProposal {
  const record = requiredRecord(value, `${path}.retirementProposal`)
  return {
    reason: requiredString(record.reason, `${path}.retirementProposal.reason`),
    evidenceRefs: stringArray(record.evidenceRefs, `${path}.retirementProposal.evidenceRefs`, true),
  }
}

function parseRetirementAcknowledgement(value: unknown, path: string): RetirementAcknowledgement {
  const record = requiredRecord(value, `${path}.retirementAcknowledgement`)
  return {
    approvedBy: requiredString(record.approvedBy, `${path}.retirementAcknowledgement.approvedBy`),
    approvedAt: requiredString(record.approvedAt, `${path}.retirementAcknowledgement.approvedAt`),
    proposalSha256: sha256String(record.proposalSha256, `${path}.retirementAcknowledgement.proposalSha256`),
  }
}

function parseDecision(value: unknown, path: string): PatchObligationDecision {
  const record = requiredRecord(value, path)
  const disposition = requiredString(record.disposition, `${path}.disposition`)
  if (!new Set<Disposition>(["ported", "upstream_equivalent", "retired"]).has(disposition as Disposition)) {
    throw new Error(`${path}.disposition: invalid disposition ${disposition}`)
  }
  return {
    familyId: stableId(record.familyId, `${path}.familyId`),
    invariantId: stableId(record.invariantId, `${path}.invariantId`),
    disposition: disposition as Disposition,
    ...(record.patchEntries === undefined
      ? {}
      : { patchEntries: stringArray(record.patchEntries, `${path}.patchEntries`, true) }),
    ...(record.maintainerAcknowledgement === undefined
      ? {}
      : { maintainerAcknowledgement: parseAcknowledgement(record.maintainerAcknowledgement, path) }),
  }
}

function parseAcknowledgement(value: unknown, path: string): MaintainerAcknowledgement {
  const record = requiredRecord(value, `${path}.maintainerAcknowledgement`)
  return {
    decidedBy: requiredString(record.decidedBy, `${path}.maintainerAcknowledgement.decidedBy`),
    decidedAt: requiredString(record.decidedAt, `${path}.maintainerAcknowledgement.decidedAt`),
    reason: requiredString(record.reason, `${path}.maintainerAcknowledgement.reason`),
    evidenceRefs: stringArray(record.evidenceRefs, `${path}.maintainerAcknowledgement.evidenceRefs`, true),
    decisionSha256: sha256String(record.decisionSha256, `${path}.maintainerAcknowledgement.decisionSha256`),
  }
}

function parseReceipt(value: unknown, path: string): PatchEvidenceReceipt {
  const record = requiredRecord(value, path)
  if (record.schema !== 1) throw new Error(`${path}: schema must be 1`)
  const outcome = requiredString(record.outcome, `${path}.outcome`)
  if (outcome !== "passed" && outcome !== "failed") throw new Error(`${path}.outcome: expected passed or failed`)
  return {
    schema: 1,
    targetVersion: semverString(record.targetVersion, `${path}.targetVersion`),
    sourceCommit: requiredString(record.sourceCommit, `${path}.sourceCommit`),
    platform: platform(record.platform, `${path}.platform`),
    upstreamEntrypointSha256: sha256String(record.upstreamEntrypointSha256, `${path}.upstreamEntrypointSha256`),
    patchedEntrypointSha256: sha256String(record.patchedEntrypointSha256, `${path}.patchedEntrypointSha256`),
    selectedPatchEntries: stringArray(record.selectedPatchEntries, `${path}.selectedPatchEntries`),
    executedOracleIds: stringArray(record.executedOracleIds, `${path}.executedOracleIds`),
    evidenceClass: evidenceClass(record.evidenceClass, `${path}.evidenceClass`),
    outcome,
    skippedOracleIds: stringArray(record.skippedOracleIds, `${path}.skippedOracleIds`),
  }
}

function readJson(path: string): unknown {
  if (!existsSync(path)) throw new Error(`missing patch obligation file: ${path}`)
  return JSON.parse(readFileSync(path, "utf8")) as unknown
}

function requiredRecord(value: unknown, path: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error(`${path}: expected object`)
  return value as Record<string, unknown>
}

function requiredArray(value: unknown, path: string): unknown[] {
  if (!Array.isArray(value)) throw new Error(`${path}: expected array`)
  return value
}

function requiredString(value: unknown, path: string): string {
  if (typeof value !== "string" || value.length === 0) throw new Error(`${path}: expected non-empty string`)
  return value
}

function stringArray(value: unknown, path: string, nonEmpty = false): string[] {
  const values = requiredArray(value, path).map((item, index) => requiredString(item, `${path}[${index}]`))
  if (nonEmpty && values.length === 0) throw new Error(`${path}: must not be empty`)
  if (new Set(values).size !== values.length) throw new Error(`${path}: duplicate values`)
  return values
}

function stableId(value: unknown, path: string): string {
  const id = requiredString(value, path)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) throw new Error(`${path}: expected stable kebab-case ID`)
  return id
}

function semverString(value: unknown, path: string): string {
  const version = requiredString(value, path)
  if (!valid(version)) throw new Error(`${path}: expected explicit semver`)
  return version
}

function platform(value: unknown, path: string): ObligationPlatform {
  const candidate = requiredString(value, path)
  if (!OBLIGATION_PLATFORMS.includes(candidate as ObligationPlatform))
    throw new Error(`${path}: unsupported platform ${candidate}`)
  return candidate as ObligationPlatform
}

function platformArray(value: unknown, path: string): ObligationPlatform[] {
  const platforms = requiredArray(value, path).map((item, index) => platform(item, `${path}[${index}]`))
  if (platforms.length === 0) throw new Error(`${path}: must not be empty`)
  if (new Set(platforms).size !== platforms.length) throw new Error(`${path}: duplicate values`)
  return platforms
}

function evidenceClass(value: unknown, path: string): EvidenceClass {
  const candidate = requiredString(value, path)
  if (candidate !== "static" && candidate !== "runtime" && candidate !== "real-os-runtime") {
    throw new Error(`${path}: unsupported evidence class ${candidate}`)
  }
  return candidate
}

function sha256String(value: unknown, path: string): string {
  const digest = requiredString(value, path)
  if (!/^[a-f0-9]{64}$/.test(digest)) throw new Error(`${path}: expected lowercase SHA-256 hex`)
  return digest
}

function sha256Hex(bytes: Uint8Array): string {
  return createHash("sha256").update(bytes).digest("hex")
}
