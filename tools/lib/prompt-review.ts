import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { captureChecked, runChecked } from "./process"
import {
  type PromptCatalogEntry,
  type PromptCatalogGap,
  type PromptCatalogManifest,
  readPromptCatalogManifest,
  validateCatalogContents,
} from "./prompt-catalog"
import { type PromptOccurrenceDecision, readPromptIdentityLedger } from "./prompt-identity"
import { latestPreviousLedgerVersion } from "./prompt-identity-bump"

export type PromptReviewOptions = {
  catalogDir: string
  identityRoot: string
  upstreamVersion: string
  previousCatalogDir?: string
}

export type PromptReviewSummary = {
  upstreamVersion: string
  previousVersion: string | null
  candidates: number
  unchanged: number
  changedAndTraced: number
  newOrSplit: number
  previousCatalogAvailable: boolean
}

export type MaterializedPromptCatalog = {
  version: string
  path: string
  cleanup: () => void
}

type CatalogItem = { kind: "entry"; value: PromptCatalogEntry; text: string } | { kind: "gap"; value: PromptCatalogGap }

type ReviewChange = {
  id: string
  family: string
  role: PromptOccurrenceDecision["roleHint"]
  relation: PromptOccurrenceDecision["relation"]
  currentOccurrenceId: string
  predecessorOccurrenceId: string
  currentDecision: PromptOccurrenceDecision
  previousDecision: PromptOccurrenceDecision
  currentItem: CatalogItem | undefined
  previousItem: CatalogItem | undefined
}

type DiffLine = {
  number: number
  text: string
}

type DiffOperation =
  | { kind: "equal"; text: string }
  | { kind: "delete"; text: string }
  | { kind: "insert"; text: string }

export function renderPromptReviewMarkdown(options: PromptReviewOptions): {
  markdown: string
  summary: PromptReviewSummary
} {
  const currentManifest = readPromptCatalogManifest(options.catalogDir)
  validateCatalogContents(options.catalogDir, currentManifest)
  if (currentManifest.target.upstreamVersion !== options.upstreamVersion) {
    throw new Error(
      `prompt review catalog version mismatch: expected ${options.upstreamVersion}, got ${currentManifest.target.upstreamVersion}`,
    )
  }

  const currentLedger = readPromptIdentityLedger(options.identityRoot, options.upstreamVersion)
  const previousVersion = latestPreviousLedgerVersion(options.identityRoot, options.upstreamVersion)
  const previousLedger = previousVersion ? readPromptIdentityLedger(options.identityRoot, previousVersion) : null
  const currentItems = readCatalogItems(options.catalogDir, currentManifest)
  const previousCatalogPath = options.previousCatalogDir
  const previousCatalog = previousCatalogPath ? readOptionalCatalog(previousCatalogPath, previousVersion) : null
  const previousItems =
    previousCatalogPath && previousCatalog ? readCatalogItems(previousCatalogPath, previousCatalog) : new Map()
  const previousByOccurrence = new Map(previousLedger?.occurrences.map((item) => [item.occurrenceId, item]) ?? [])

  const unchanged: string[] = []
  const changes: ReviewChange[] = []
  const additions: PromptOccurrenceDecision[] = []
  for (const decision of currentLedger.occurrences) {
    if (decision.relation !== "carry" || previousLedger === null) {
      additions.push(decision)
      continue
    }
    const predecessorOccurrenceId = decision.predecessors[0]
    if (!predecessorOccurrenceId) throw new Error(`carried prompt has no predecessor: ${decision.occurrenceId}`)
    const previousDecision = previousByOccurrence.get(predecessorOccurrenceId)
    if (!previousDecision) {
      throw new Error(`prompt review predecessor missing: ${predecessorOccurrenceId}`)
    }
    if (decision.revisionSha256 === previousDecision.revisionSha256) {
      unchanged.push(decision.lineageId)
      continue
    }
    changes.push({
      id: decision.lineageId,
      family: decision.familyHint,
      role: decision.roleHint,
      relation: decision.relation,
      currentOccurrenceId: decision.occurrenceId,
      predecessorOccurrenceId,
      currentDecision: decision,
      previousDecision,
      currentItem: currentItems.get(decision.lineageId),
      previousItem: previousItems.get(previousDecision.lineageId),
    })
  }

  const summary: PromptReviewSummary = {
    upstreamVersion: options.upstreamVersion,
    previousVersion,
    candidates: currentManifest.summary.candidates,
    unchanged: unchanged.length,
    changedAndTraced: changes.length,
    newOrSplit: additions.length,
    previousCatalogAvailable: previousCatalog !== null,
  }
  return { markdown: renderMarkdown(summary, unchanged, changes, additions), summary }
}

export function materializePreviousPromptCatalog(
  root: string,
  identityRoot: string,
  upstreamVersion: string,
): MaterializedPromptCatalog | null {
  const previousVersion = latestPreviousLedgerVersion(identityRoot, upstreamVersion)
  if (!previousVersion) return null

  let tags: string[]
  try {
    tags = captureChecked(
      ["git", "for-each-ref", "--format=%(refname:short)", `refs/tags/claude-code-${previousVersion}-patch.*`],
      { cwd: root },
    )
      .split("\n")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)
  } catch {
    return null
  }
  const tag = tags.sort(comparePatchTags).at(-1)
  if (!tag) return null

  const tempRoot = mkdtempSync(join(tmpdir(), "patched-cc-prompt-review-"))
  const archive = join(tempRoot, "catalog.tar")
  const extractRoot = join(tempRoot, "extract")
  mkdirSync(extractRoot, { recursive: true })
  try {
    runChecked(["git", "archive", "--format=tar", `--output=${archive}`, tag, "prompts/catalog"], { cwd: root })
    runChecked(["tar", "-xf", archive, "-C", extractRoot], { cwd: root })
    const path = join(extractRoot, "prompts", "catalog")
    if (!existsSync(join(path, "manifest.json"))) {
      rmSync(tempRoot, { recursive: true, force: true })
      return null
    }
    return {
      version: previousVersion,
      path,
      cleanup: () => rmSync(tempRoot, { recursive: true, force: true }),
    }
  } catch {
    rmSync(tempRoot, { recursive: true, force: true })
    return null
  }
}

function renderMarkdown(
  summary: PromptReviewSummary,
  unchanged: string[],
  changes: ReviewChange[],
  additions: PromptOccurrenceDecision[],
): string {
  const lines = [
    "## Prompt review",
    "",
    "Generated from the patched bundle's version-bound prompt catalog and the checked-in identity ledger.",
    "",
    `- Candidates: **${summary.candidates}**`,
    `- Previous ledger: **${summary.previousVersion ?? "baseline"}**`,
    `- Unchanged: **${summary.unchanged}**`,
    `- Changed and traced: **${summary.changedAndTraced}**`,
    `- New or split: **${summary.newOrSplit}**`,
    ...(summary.previousVersion && !summary.previousCatalogAvailable
      ? ["- Previous catalog: **unavailable; changed entries include trace metadata only**"]
      : []),
    "",
    `### Unchanged (${summary.unchanged})`,
    "",
    inlineIds(unchanged),
    "",
    `### Changed and traced (${summary.changedAndTraced})`,
    "",
    inlineIds(changes.map(({ id }) => id)),
    "",
  ]

  for (const change of changes) lines.push(renderChange(change), "")

  lines.push(`### New and split (${summary.newOrSplit})`, "")
  if (additions.length === 0) {
    lines.push("_None._", "")
  } else {
    for (const decision of additions) {
      const rationale = decision.rationale ? ` — ${escapeInline(decision.rationale)}` : ""
      lines.push(
        `- \`${decision.lineageId}\` · ${decision.relation} · ${decision.familyHint}/${decision.roleHint} · \`${decision.occurrenceId}\`${rationale}`,
      )
    }
    lines.push("")
  }
  return `${lines.join("\n")}\n`
}

function renderChange(change: ReviewChange): string {
  const title = `<details>\n<summary><code>${change.id}</code> · ${change.family}/${change.role} · predecessor <code>${change.predecessorOccurrenceId}</code></summary>`
  const trace = `Trace: \`${change.currentOccurrenceId}\` ← \`${change.predecessorOccurrenceId}\` · relation \`${change.relation}\``
  const currentText = change.currentItem?.kind === "entry" ? change.currentItem.text : null
  const previousText = change.previousItem?.kind === "entry" ? change.previousItem.text : null
  if (currentText !== null && previousText !== null) {
    return [
      title,
      "",
      trace,
      "",
      renderSideBySide(
        previousText,
        currentText,
        occurrenceVersion(change.previousDecision.occurrenceId),
        occurrenceVersion(change.currentDecision.occurrenceId),
      ),
      "",
      "</details>",
    ].join("\n")
  }

  const previousLabel =
    change.previousItem?.kind === "gap" ? `contextual gap (${change.previousItem.value.reasonCode})` : "static entry"
  const currentLabel =
    change.currentItem?.kind === "gap" ? `contextual gap (${change.currentItem.value.reasonCode})` : "static entry"
  return [
    title,
    "",
    trace,
    "",
    `<table><thead><tr><th>${escapeHtml(change.previousDecision.occurrenceId.split("-")[0] ?? "previous")}</th><th>${escapeHtml(change.currentDecision.occurrenceId.split("-")[0] ?? "current")}</th></tr></thead>`,
    `<tbody><tr><td><pre>${escapeHtml(previousLabel)}</pre></td><td><pre>${escapeHtml(currentLabel)}</pre></td></tr></tbody></table>`,
    "",
    "No canonical side-by-side text is available for this transition.",
    "",
    "</details>",
  ].join("\n")
}

function renderSideBySide(
  previousText: string,
  currentText: string,
  previousVersion: string,
  currentVersion: string,
): string {
  const previousLines = splitLines(previousText)
  const currentLines = splitLines(currentText)
  const operations = diffLines(previousLines, currentLines)
  const groups: Array<{ deletes: DiffLine[]; inserts: DiffLine[] }> = []
  let previousNumber = 1
  let currentNumber = 1
  let group: { deletes: DiffLine[]; inserts: DiffLine[] } | null = null
  const flush = (): void => {
    if (group && (group.deletes.length > 0 || group.inserts.length > 0)) groups.push(group)
    group = null
  }

  for (const operation of operations) {
    if (operation.kind === "equal") {
      flush()
      previousNumber += 1
      currentNumber += 1
    } else if (operation.kind === "delete") {
      group ??= { deletes: [], inserts: [] }
      group.deletes.push({ number: previousNumber, text: operation.text })
      previousNumber += 1
    } else {
      group ??= { deletes: [], inserts: [] }
      group.inserts.push({ number: currentNumber, text: operation.text })
      currentNumber += 1
    }
  }
  flush()

  const rows = [
    "<table>",
    `<thead><tr><th>${escapeHtml(previousVersion)}</th><th>${escapeHtml(currentVersion)}</th></tr></thead>`,
    "<tbody>",
  ]
  for (const item of groups) {
    const count = Math.max(item.deletes.length, item.inserts.length)
    for (let index = 0; index < count; index += 1) {
      const previous = item.deletes[index]
      const current = item.inserts[index]
      rows.push(
        `<tr><td><pre>${escapeHtml(previous ? `L${previous.number}\n${previous.text}` : "—")}</pre></td><td><pre>${escapeHtml(current ? `L${current.number}\n${current.text}` : "—")}</pre></td></tr>`,
      )
    }
  }
  rows.push("</tbody>", "</table>")
  return rows.join("\n")
}

function diffLines(previous: string[], current: string[]): DiffOperation[] {
  const max = previous.length + current.length
  const traces: Map<number, number>[] = []
  const frontier = new Map<number, number>([[1, 0]])
  for (let distance = 0; distance <= max; distance += 1) {
    for (let diagonal = -distance; diagonal <= distance; diagonal += 2) {
      const down = frontier.get(diagonal + 1) ?? 0
      const right = (frontier.get(diagonal - 1) ?? 0) + 1
      let previousIndex = diagonal === -distance || (diagonal !== distance && down > right) ? down : right
      let currentIndex = previousIndex - diagonal
      while (
        previousIndex < previous.length &&
        currentIndex < current.length &&
        previous[previousIndex] === current[currentIndex]
      ) {
        previousIndex += 1
        currentIndex += 1
      }
      frontier.set(diagonal, previousIndex)
      if (previousIndex >= previous.length && currentIndex >= current.length) {
        return backtrackDiff(traces, previous, current, distance)
      }
    }
    traces.push(new Map(frontier))
  }
  throw new Error("prompt review diff did not converge")
}

function backtrackDiff(
  traces: Map<number, number>[],
  previous: string[],
  current: string[],
  distance: number,
): DiffOperation[] {
  const operations: DiffOperation[] = []
  let previousIndex = previous.length
  let currentIndex = current.length
  for (let step = distance; step > 0; step -= 1) {
    const frontier = traces[step - 1]
    if (!frontier) throw new Error(`prompt review diff trace missing at distance ${step}`)
    const diagonal = previousIndex - currentIndex
    const down = frontier.get(diagonal + 1) ?? 0
    const right = (frontier.get(diagonal - 1) ?? 0) + 1
    const previousDiagonal = diagonal === -step || (diagonal !== step && down > right) ? diagonal + 1 : diagonal - 1
    const previousIndexBeforeSnake = frontier.get(previousDiagonal) ?? 0
    const currentIndexBeforeSnake = previousIndexBeforeSnake - previousDiagonal
    while (previousIndex > previousIndexBeforeSnake && currentIndex > currentIndexBeforeSnake) {
      const text = previous[previousIndex - 1]
      if (text === undefined) throw new Error("prompt review diff referenced a missing previous line")
      operations.push({ kind: "equal", text })
      previousIndex -= 1
      currentIndex -= 1
    }
    if (previousIndex === previousIndexBeforeSnake) {
      operations.push({ kind: "insert", text: requiredLine(current, currentIndex - 1, "current") })
      currentIndex -= 1
    } else {
      operations.push({ kind: "delete", text: requiredLine(previous, previousIndex - 1, "previous") })
      previousIndex -= 1
    }
  }
  while (previousIndex > 0 && currentIndex > 0) {
    operations.push({ kind: "equal", text: requiredLine(previous, previousIndex - 1, "previous") })
    previousIndex -= 1
    currentIndex -= 1
  }
  while (previousIndex > 0) {
    operations.push({ kind: "delete", text: requiredLine(previous, previousIndex - 1, "previous") })
    previousIndex -= 1
  }
  while (currentIndex > 0) {
    operations.push({ kind: "insert", text: requiredLine(current, currentIndex - 1, "current") })
    currentIndex -= 1
  }
  return operations.reverse()
}

function requiredLine(lines: string[], index: number, side: string): string {
  const line = lines[index]
  if (line === undefined) throw new Error(`prompt review diff referenced a missing ${side} line`)
  return line
}

function readCatalogItems(root: string, manifest: PromptCatalogManifest): Map<string, CatalogItem> {
  const gaps = JSON.parse(readFileSync(join(root, manifest.gapsFile), "utf8")) as PromptCatalogGap[]
  const items = new Map<string, CatalogItem>()
  for (const entry of manifest.entries) {
    items.set(entry.lineageId, {
      kind: "entry",
      value: entry,
      text: readFileSync(join(root, entry.contentFile), "utf8"),
    })
  }
  for (const gap of gaps) items.set(gap.lineageId ?? gap.id, { kind: "gap", value: gap })
  return items
}

function readOptionalCatalog(root: string, expectedVersion: string | null): PromptCatalogManifest | null {
  if (!expectedVersion || !existsSync(join(root, "manifest.json"))) return null
  const manifest = readPromptCatalogManifest(root)
  if (manifest.target.upstreamVersion !== expectedVersion) {
    throw new Error(
      `previous prompt catalog version mismatch: expected ${expectedVersion}, got ${manifest.target.upstreamVersion}`,
    )
  }
  validateCatalogContents(root, manifest)
  return manifest
}

function splitLines(value: string): string[] {
  const lines = value.replace(/\r\n/g, "\n").split("\n")
  if (lines.at(-1) === "") lines.pop()
  return lines
}

function inlineIds(ids: string[]): string {
  return ids.length === 0 ? "_None._" : ids.map((id) => `\`${id}\``).join(", ")
}

function escapeInline(value: string): string {
  return value.replaceAll("`", "\\`").replaceAll("\n", " ")
}

function escapeHtml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;")
}

function comparePatchTags(left: string, right: string): number {
  const leftPatch = Number(left.match(/-patch\.(\d+)$/)?.[1] ?? 0)
  const rightPatch = Number(right.match(/-patch\.(\d+)$/)?.[1] ?? 0)
  return leftPatch - rightPatch || left.localeCompare(right)
}

function occurrenceVersion(occurrenceId: string): string {
  const separator = occurrenceId.lastIndexOf("-")
  return separator > 0 ? occurrenceId.slice(0, separator) : occurrenceId
}
