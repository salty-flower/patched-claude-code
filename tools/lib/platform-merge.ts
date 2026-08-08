import { createHash } from "node:crypto"
import { parseSync } from "oxc-parser"

const IGNORED_KEYS = new Set([
  "comments",
  "end",
  "extra",
  "innerComments",
  "leadingComments",
  "loc",
  "name",
  "range",
  "raw",
  "rawValue",
  "start",
  "trailingComments",
])

const BASE_GLOBALS = new Set([
  "AbortController",
  "AbortSignal",
  "Array",
  "BigInt",
  "Boolean",
  "Buffer",
  "Bun",
  "DataView",
  "Date",
  "Error",
  "EvalError",
  "Float32Array",
  "Float64Array",
  "Infinity",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Intl",
  "JSON",
  "Map",
  "Math",
  "NaN",
  "Number",
  "Object",
  "Promise",
  "RangeError",
  "ReferenceError",
  "Reflect",
  "RegExp",
  "Set",
  "String",
  "Symbol",
  "SyntaxError",
  "TextDecoder",
  "TextEncoder",
  "TypeError",
  "URL",
  "URLSearchParams",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "WeakMap",
  "WeakSet",
  "WebSocket",
  "__dirname",
  "__filename",
  "atob",
  "btoa",
  "clearInterval",
  "clearTimeout",
  "console",
  "crypto",
  "exports",
  "fetch",
  "globalThis",
  "module",
  "parseFloat",
  "parseInt",
  "performance",
  "process",
  "queueMicrotask",
  "require",
  "setInterval",
  "setTimeout",
])

export type PlatformMergeReport = {
  schema: 1
  mergePolicy: "canonical-platform-merge-v1"
  version: string
  basePlatform: string
  otherPlatform: string
  counts: {
    baseTopLevelDeclarations: number
    otherTopLevelDeclarations: number
    identical: number
    literalOnlyPlatformConstants: number
    structuralDrift: number
    baseOnlyIslands: number
    otherOnlyIslands: number
    accepted: number
  }
  replacements: LiteralReplacementReport[]
  semanticUnions: SemanticUnionReport[]
  acceptedDrift: []
  unclassifiedDrift: UnclassifiedDrift[]
}

export type LiteralReplacementReport = {
  baseIndex: number
  otherIndex: number
  baseLiteral: string
  otherLiteral: string
  expression: string
  start: number
  end: number
}

export type UnclassifiedDrift =
  | {
      kind: "unknown-literal-pair"
      baseIndex: number
      otherIndex: number
      baseLiteral: string
      otherLiteral: string
      start: number
      end: number
    }
  | {
      kind: "structural-drift"
      baseIndex: number
      otherIndex: number
      baseStart: number
      otherStart: number
    }
  | {
      kind: "base-only-island" | "other-only-island"
      index: number
      start: number
      end: number
    }
  | {
      kind: "unresolved-free-identifier"
      name: string
      owner: string
    }

export type SemanticUnionReport =
  | {
      kind: "structural-drift"
      baseIndex: number
      otherIndex: number
      names: string[]
    }
  | {
      kind: "other-only-island"
      index: number
      names: string[]
    }

export type PlatformMergeResult = {
  ok: boolean
  canonicalSource: string
  report: PlatformMergeReport
}

type TopLevelDeclaration = {
  node?: Record<string, unknown>
  source: string
  index: number
  start: number
  end: number
  structuralHash: string
  literalHash: string
  declaredNames?: string[]
  freeIdentifierList?: string[]
}

type LiteralReplacement = LiteralReplacementReport & {
  replacement: string
}

type SourceEdit = {
  start: number
  end: number
  replacement: string
}

type MergeArgs = {
  version: string
  basePlatform: string
  baseSource: string
  basePath?: string
  otherPlatform: string
  otherSource: string
  otherPath?: string
  generalizeUnknownStringLiterals?: boolean
}

export function mergePlatformJavaScript(args: MergeArgs): PlatformMergeResult {
  const base = topLevelDeclarations(args.baseSource, args.basePath)
  const other = topLevelDeclarations(args.otherSource, args.otherPath)
  const report: PlatformMergeReport = {
    schema: 1,
    mergePolicy: "canonical-platform-merge-v1",
    version: args.version,
    basePlatform: args.basePlatform,
    otherPlatform: args.otherPlatform,
    counts: {
      baseTopLevelDeclarations: base.length,
      otherTopLevelDeclarations: other.length,
      identical: 0,
      literalOnlyPlatformConstants: 0,
      structuralDrift: 0,
      baseOnlyIslands: 0,
      otherOnlyIslands: 0,
      accepted: 0,
    },
    replacements: [],
    semanticUnions: [],
    acceptedDrift: [],
    unclassifiedDrift: [],
  }
  const replacements: LiteralReplacement[] = []
  const declarationEdits: SourceEdit[] = []
  const insertionEdits: SourceEdit[] = []
  const pairs = alignTopLevelDeclarations(base, other)
  const otherToCanonical = buildOtherToCanonicalNameMap(pairs)
  const availableNames = canonicalAvailableNames(base, otherToCanonical)

  for (const pair of pairs) {
    if (pair.base && pair.other) {
      if (pair.base.structuralHash === pair.other.structuralHash) {
        if (pair.base.literalHash === pair.other.literalHash) {
          report.counts.identical++
          continue
        }

        const drift = literalDrift(pair.base, pair.other)
        if (drift.structuralMismatch) {
          report.counts.structuralDrift++
          unionStructuralPair(args, pair.base, pair.other, otherToCanonical, availableNames, declarationEdits, report)
          continue
        }

        let blocked = false
        for (const literal of drift.literals) {
          const expression = canonicalExpression(literal.baseLiteral, literal.otherLiteral)
          if (!expression) {
            const generalized = args.generalizeUnknownStringLiterals
              ? generalizedStringExpression(args.basePlatform, literal.baseLiteral, literal.otherLiteral)
              : null
            if (!generalized) {
              blocked = true
              report.unclassifiedDrift.push({
                kind: "unknown-literal-pair",
                baseIndex: pair.base.index,
                otherIndex: pair.other.index,
                baseLiteral: literal.baseLiteral,
                otherLiteral: literal.otherLiteral,
                start: literal.start,
                end: literal.end,
              })
              continue
            }
            replacements.push({
              baseIndex: pair.base.index,
              otherIndex: pair.other.index,
              baseLiteral: literal.baseLiteral,
              otherLiteral: literal.otherLiteral,
              expression: generalized,
              replacement: generalized,
              start: literal.start,
              end: literal.end,
            })
            continue
          }
          replacements.push({
            baseIndex: pair.base.index,
            otherIndex: pair.other.index,
            baseLiteral: literal.baseLiteral,
            otherLiteral: literal.otherLiteral,
            expression,
            replacement: expression,
            start: literal.start,
            end: literal.end,
          })
        }

        if (blocked) continue
        report.counts.literalOnlyPlatformConstants++
      } else {
        report.counts.structuralDrift++
        unionStructuralPair(args, pair.base, pair.other, otherToCanonical, availableNames, declarationEdits, report)
      }
    } else if (pair.base) {
      report.counts.baseOnlyIslands++
    } else if (pair.other) {
      report.counts.otherOnlyIslands++
      insertOtherOnlyDeclaration(args, pair.other, otherToCanonical, availableNames, insertionEdits, report)
    }
  }

  const sourceEdits: SourceEdit[] = [
    ...declarationEdits,
    ...insertionEdits,
    ...replacements
      .filter(({ start, end }) => !overlapsAnyEdit(start, end, declarationEdits))
      .map(({ replacement, start, end }) => ({ start, end, replacement })),
  ]
  let canonicalSource = args.baseSource
  for (const edit of sourceEdits.sort((a, b) => b.start - a.start || b.end - a.end)) {
    canonicalSource = canonicalSource.slice(0, edit.start) + edit.replacement + canonicalSource.slice(edit.end)
  }
  report.replacements = replacements
    .slice()
    .reverse()
    .map(({ replacement: _replacement, ...item }) => item)

  return {
    ok: report.unclassifiedDrift.length === 0,
    canonicalSource,
    report,
  }
}

function overlapsAnyEdit(start: number, end: number, edits: SourceEdit[]): boolean {
  return edits.some((edit) => start < edit.end && end > edit.start)
}

type ParsedProgram = {
  program: { body: unknown[] }
  errors: unknown[]
}

export function parseProgram(source: string): ParsedProgram {
  return parseSync("platform-merge.js", source, {
    astType: "js",
    lang: "js",
    preserveParens: true,
    sourceType: "script",
  }) as unknown as ParsedProgram
}

function topLevelDeclarations(source: string, sourcePath?: string): TopLevelDeclaration[] {
  if (sourcePath) return analyzeWithNativeParser(source, sourcePath)
  const ast = parseProgram(source)
  const body = unwrapCompiledModuleBody(ast.program.body)
  const result = body
    .filter(
      (node): node is Record<string, unknown> =>
        isRecord(node) && typeof node.start === "number" && typeof node.end === "number",
    )
    .map((node, index) => ({
      node,
      source,
      index,
      start: node.start as number,
      end: node.end as number,
      structuralHash: fingerprint(node, false),
      literalHash: fingerprint(node, true),
    }))
  return result
}

function isRecord(node: unknown): node is Record<string, unknown> {
  return Boolean(node && typeof node === "object" && !Array.isArray(node))
}

export function unwrapCompiledModuleBody(body: unknown[]): unknown[] {
  if (body.length !== 1) return body
  const only = body[0] as Record<string, unknown> | undefined
  const expression = only?.type === "ExpressionStatement" ? only.expression : undefined
  const unparenthesized = (node: unknown): Record<string, unknown> | undefined => {
    if (!node || typeof node !== "object") return undefined
    const record = node as Record<string, unknown>
    return record.type === "ParenthesizedExpression" ? unparenthesized(record.expression) : record
  }
  const unwrappedExpression = unparenthesized(expression)
  const wrapper =
    unwrappedExpression?.type === "CallExpression" ? unparenthesized(unwrappedExpression.callee) : unwrappedExpression
  if (wrapper?.type !== "FunctionExpression" && wrapper?.type !== "ArrowFunctionExpression") return body
  const wrapperBody = wrapper.body as Record<string, unknown> | undefined
  return wrapperBody?.type === "BlockStatement" && Array.isArray(wrapperBody.body) ? wrapperBody.body : body
}

function analyzeWithNativeParser(source: string, sourcePath: string): TopLevelDeclaration[] {
  const helper = new URL("../platform/analyze-bundle.ts", import.meta.url).pathname
  const result = Bun.spawnSync({
    cmd: [process.execPath, helper, sourcePath],
    stdout: "pipe",
    stderr: "inherit",
  })
  if (!result.success) throw new Error(`native platform analysis failed for ${sourcePath} (${result.exitCode})`)
  const payload = JSON.parse(new TextDecoder().decode(result.stdout)) as {
    declarations: Array<{
      index: number
      start: number
      end: number
      structuralHash: string
      literalHash: string
      declaredNames: string[]
      freeIdentifierList: string[]
    }>
  }
  return payload.declarations.map((declaration) => ({ ...declaration, source }))
}

function declarationNode(declaration: TopLevelDeclaration): Record<string, unknown> {
  if (declaration.node) return declaration.node
  const parsed = parseProgram(declaration.source.slice(declaration.start, declaration.end))
  const node = parsed.program.body[0]
  if (!node || typeof node !== "object") throw new Error(`failed to parse declaration ${declaration.index}`)
  shiftAstOffsets(node, declaration.start)
  declaration.node = node as Record<string, unknown>
  return declaration.node
}

function shiftAstOffsets(node: unknown, offset: number): void {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const item of node) shiftAstOffsets(item, offset)
    return
  }
  const record = node as Record<string, unknown>
  for (const key of ["start", "end"]) {
    if (typeof record[key] === "number") record[key] = (record[key] as number) + offset
  }
  for (const value of Object.values(record)) shiftAstOffsets(value, offset)
}

function declaredNamesFor(declaration: TopLevelDeclaration): string[] {
  return declaration.declaredNames ?? declaredNames(declarationNode(declaration))
}

function freeIdentifierListFor(declaration: TopLevelDeclaration): string[] {
  return declaration.freeIdentifierList ?? freeIdentifierList(declarationNode(declaration))
}

export function fingerprint(node: unknown, includeLiterals: boolean): string {
  const tokens: string[] = []
  visitFingerprint(node, tokens, includeLiterals)
  return createHash("sha256").update(tokens.join("\x1f")).digest("hex")
}

function visitFingerprint(node: unknown, tokens: string[], includeLiterals: boolean): void {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    tokens.push("[")
    for (const item of node) visitFingerprint(item, tokens, includeLiterals)
    tokens.push("]")
    return
  }

  const record = node as Record<string, unknown>
  if (typeof record.type === "string") {
    tokens.push(record.type)
    if (includeLiterals) {
      if (record.type === "StringLiteral" || (record.type === "Literal" && typeof record.value === "string"))
        tokens.push(`str:${String(record.value)}`)
      else if (record.type === "NumericLiteral" || (record.type === "Literal" && typeof record.value === "number"))
        tokens.push(`num:${String(record.value)}`)
      else if (record.type === "BooleanLiteral" || (record.type === "Literal" && typeof record.value === "boolean"))
        tokens.push(`bool:${String(record.value)}`)
      else if (record.type === "NullLiteral" || (record.type === "Literal" && record.value === null))
        tokens.push("null")
      else if (record.type === "RegExpLiteral") tokens.push(`re:${String(record.pattern)}/${String(record.flags)}`)
    }
  }

  for (const key of Object.keys(record).sort()) {
    if (key === "type" || IGNORED_KEYS.has(key)) continue
    tokens.push(key)
    visitFingerprint(record[key], tokens, includeLiterals)
  }
}

function alignTopLevelDeclarations(base: TopLevelDeclaration[], other: TopLevelDeclaration[]) {
  const pairs: Array<{ base?: TopLevelDeclaration; other?: TopLevelDeclaration }> = []
  alignRange(base, other, 0, base.length, 0, other.length, pairs)
  return pairs
}

function alignRange(
  base: TopLevelDeclaration[],
  other: TopLevelDeclaration[],
  baseStart: number,
  baseEnd: number,
  otherStart: number,
  otherEnd: number,
  pairs: Array<{ base?: TopLevelDeclaration; other?: TopLevelDeclaration }>,
): void {
  if (baseStart >= baseEnd) {
    for (let j = otherStart; j < otherEnd; j++) pairs.push({ other: other[j] })
    return
  }
  if (otherStart >= otherEnd) {
    for (let i = baseStart; i < baseEnd; i++) pairs.push({ base: base[i] })
    return
  }

  const anchors = uniqueLiteralAnchors(base, other, baseStart, baseEnd, otherStart, otherEnd)
  if (anchors.length > 0) {
    let i = baseStart
    let j = otherStart
    for (const anchor of anchors) {
      alignRange(base, other, i, anchor.baseIndex, j, anchor.otherIndex, pairs)
      pairs.push({ base: base[anchor.baseIndex], other: other[anchor.otherIndex] })
      i = anchor.baseIndex + 1
      j = anchor.otherIndex + 1
    }
    alignRange(base, other, i, baseEnd, j, otherEnd, pairs)
    return
  }

  const literalMatches = lcsAnchors(base, other, baseStart, baseEnd, otherStart, otherEnd, "literalHash")
  if (literalMatches.length > 0) {
    alignByAnchors(base, other, baseStart, baseEnd, otherStart, otherEnd, literalMatches, pairs)
    return
  }

  const structuralMatches = lcsAnchors(base, other, baseStart, baseEnd, otherStart, otherEnd, "structuralHash")
  if (structuralMatches.length > 0) {
    alignByAnchors(base, other, baseStart, baseEnd, otherStart, otherEnd, structuralMatches, pairs)
    return
  }

  const common = Math.min(baseEnd - baseStart, otherEnd - otherStart)
  for (let offset = 0; offset < common; offset++) {
    pairs.push({ base: base[baseStart + offset], other: other[otherStart + offset] })
  }
  for (let i = baseStart + common; i < baseEnd; i++) pairs.push({ base: base[i] })
  for (let j = otherStart + common; j < otherEnd; j++) pairs.push({ other: other[j] })
}

function uniqueLiteralAnchors(
  base: TopLevelDeclaration[],
  other: TopLevelDeclaration[],
  baseStart: number,
  baseEnd: number,
  otherStart: number,
  otherEnd: number,
): Array<{ baseIndex: number; otherIndex: number }> {
  const baseCounts = new Map<string, number>()
  const otherCounts = new Map<string, number>()
  const otherIndexByHash = new Map<string, number>()
  for (let i = baseStart; i < baseEnd; i++) {
    baseCounts.set(base[i].literalHash, (baseCounts.get(base[i].literalHash) ?? 0) + 1)
  }
  for (let j = otherStart; j < otherEnd; j++) {
    otherCounts.set(other[j].literalHash, (otherCounts.get(other[j].literalHash) ?? 0) + 1)
    otherIndexByHash.set(other[j].literalHash, j)
  }

  const candidates: Array<{ baseIndex: number; otherIndex: number }> = []
  for (let i = baseStart; i < baseEnd; i++) {
    const hash = base[i].literalHash
    if (baseCounts.get(hash) === 1 && otherCounts.get(hash) === 1) {
      const otherIndex = otherIndexByHash.get(hash)
      if (otherIndex !== undefined) candidates.push({ baseIndex: i, otherIndex })
    }
  }
  return increasingByOtherIndex(candidates)
}

function increasingByOtherIndex(candidates: Array<{ baseIndex: number; otherIndex: number }>) {
  const tails: Array<{ baseIndex: number; otherIndex: number }> = []
  const tailIndexes: number[] = []
  const previous = new Array<number>(candidates.length).fill(-1)

  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i]
    let lo = 0
    let hi = tails.length
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2)
      if (tails[mid].otherIndex < candidate.otherIndex) lo = mid + 1
      else hi = mid
    }
    if (lo > 0) previous[i] = tailIndexes[lo - 1]
    tails[lo] = candidate
    tailIndexes[lo] = i
  }

  const out: Array<{ baseIndex: number; otherIndex: number }> = []
  for (let i = tailIndexes[tails.length - 1] ?? -1; i >= 0; i = previous[i]) out.push(candidates[i])
  return out.reverse()
}

function lcsAnchors(
  base: TopLevelDeclaration[],
  other: TopLevelDeclaration[],
  baseStart: number,
  baseEnd: number,
  otherStart: number,
  otherEnd: number,
  key: "literalHash" | "structuralHash",
): Array<{ baseIndex: number; otherIndex: number }> {
  const baseLength = baseEnd - baseStart
  const otherLength = otherEnd - otherStart
  if (baseLength === 0 || otherLength === 0 || baseLength * otherLength > 250_000) return []

  const width = otherLength + 1
  const table = new Uint16Array((baseLength + 1) * (otherLength + 1))
  for (let i = baseLength - 1; i >= 0; i--) {
    for (let j = otherLength - 1; j >= 0; j--) {
      const index = i * width + j
      if (base[baseStart + i][key] === other[otherStart + j][key]) {
        table[index] = table[(i + 1) * width + j + 1] + 1
      } else {
        table[index] = Math.max(table[(i + 1) * width + j], table[i * width + j + 1])
      }
    }
  }

  const anchors: Array<{ baseIndex: number; otherIndex: number }> = []
  let i = 0
  let j = 0
  while (i < baseLength && j < otherLength) {
    if (base[baseStart + i][key] === other[otherStart + j][key]) {
      anchors.push({ baseIndex: baseStart + i, otherIndex: otherStart + j })
      i++
      j++
    } else if (table[(i + 1) * width + j] >= table[i * width + j + 1]) {
      i++
    } else {
      j++
    }
  }
  return anchors
}

function alignByAnchors(
  base: TopLevelDeclaration[],
  other: TopLevelDeclaration[],
  baseStart: number,
  baseEnd: number,
  otherStart: number,
  otherEnd: number,
  anchors: Array<{ baseIndex: number; otherIndex: number }>,
  pairs: Array<{ base?: TopLevelDeclaration; other?: TopLevelDeclaration }>,
): void {
  let i = baseStart
  let j = otherStart
  for (const anchor of anchors) {
    alignRange(base, other, i, anchor.baseIndex, j, anchor.otherIndex, pairs)
    pairs.push({ base: base[anchor.baseIndex], other: other[anchor.otherIndex] })
    i = anchor.baseIndex + 1
    j = anchor.otherIndex + 1
  }
  alignRange(base, other, i, baseEnd, j, otherEnd, pairs)
}

function buildOtherToCanonicalNameMap(
  pairs: Array<{ base?: TopLevelDeclaration; other?: TopLevelDeclaration }>,
): Map<string, string> {
  const map = new Map<string, string>()
  const baseTopLevelNames = new Set<string>()
  const otherTopLevelNames = new Set<string>()
  for (const pair of pairs) {
    if (pair.base) for (const name of declaredNamesFor(pair.base)) baseTopLevelNames.add(name)
    if (pair.other) for (const name of declaredNamesFor(pair.other)) otherTopLevelNames.add(name)
  }

  for (const pair of pairs) {
    if (!pair.other) continue
    const otherNames = declaredNamesFor(pair.other)
    if (!pair.base) {
      for (const name of otherNames) map.set(name, semanticName("linux", name))
      continue
    }
    const baseNames = declaredNamesFor(pair.base)
    if (baseNames.length === otherNames.length) {
      for (let i = 0; i < baseNames.length; i++) {
        map.set(otherNames[i], baseNames[i])
      }
    } else {
      for (const name of otherNames) map.set(name, semanticName("linux", name))
    }
  }

  for (const pair of pairs) {
    if (!pair.base || !pair.other || pair.base.structuralHash !== pair.other.structuralHash) continue
    const baseReferences = freeIdentifierListFor(pair.base)
    const otherReferences = freeIdentifierListFor(pair.other)
    const count = Math.min(baseReferences.length, otherReferences.length)
    for (let i = 0; i < count; i++) {
      const baseName = baseReferences[i]
      const otherName = otherReferences[i]
      if (baseName === otherName) continue
      if (!baseTopLevelNames.has(baseName) || !otherTopLevelNames.has(otherName)) continue
      const current = map.get(otherName)
      if (current !== undefined && current !== semanticName("linux", otherName)) continue
      map.set(otherName, baseName)
    }
  }

  return map
}

function canonicalAvailableNames(base: TopLevelDeclaration[], otherToCanonical: Map<string, string>): Set<string> {
  return new Set([
    ...BASE_GLOBALS,
    ...base.flatMap((declaration) => declaredNamesFor(declaration)),
    ...otherToCanonical.values(),
  ])
}

function unionStructuralPair(
  args: MergeArgs,
  base: TopLevelDeclaration,
  other: TopLevelDeclaration,
  otherToCanonical: Map<string, string>,
  availableNames: Set<string>,
  edits: SourceEdit[],
  report: PlatformMergeReport,
): void {
  const baseNode = declarationNode(base)
  const otherNode = declarationNode(other)
  const baseNames = declaredNamesFor(base)
  const otherNames = declaredNamesFor(other)
  if (baseNames.length === 0 || baseNames.length !== otherNames.length) {
    if (otherNames.length === 0) {
      report.unclassifiedDrift.push({
        kind: "structural-drift",
        baseIndex: base.index,
        otherIndex: other.index,
        baseStart: base.start,
        otherStart: other.start,
      })
      return
    }
    const rename = new Map(otherToCanonical)
    const canonicalNames = otherNames.map((name) => semanticName("linux", name))
    for (let i = 0; i < otherNames.length; i++) rename.set(otherNames[i], canonicalNames[i])
    if (!validateFreeIdentifiers(otherNode, rename, availableNames, canonicalNames.join(","), report)) return
    edits.push({
      start: base.end,
      end: base.end,
      replacement: rewriteDeclaration(args.otherSource, otherNode, rename),
    })
    report.semanticUnions.push({ kind: "other-only-island", index: other.index, names: canonicalNames })
    return
  }

  const baseRename = new Map<string, string>()
  const otherRename = new Map(otherToCanonical)
  const linuxNames: string[] = []
  for (let i = 0; i < baseNames.length; i++) {
    const darwinName = semanticName("darwin", baseNames[i])
    const linuxName = semanticName("linux", baseNames[i])
    baseRename.set(baseNames[i], darwinName)
    otherRename.set(otherNames[i], linuxName)
    linuxNames.push(linuxName)
  }
  const unionAvailableNames = new Set([
    ...availableNames,
    ...baseNames,
    ...baseRename.values(),
    ...otherRename.values(),
  ])
  if (!validateFreeIdentifiers(baseNode, baseRename, unionAvailableNames, baseNames.join(","), report)) return
  if (!validateFreeIdentifiers(otherNode, otherRename, unionAvailableNames, baseNames.join(","), report)) return

  const baseImpl = rewriteDeclaration(args.baseSource, baseNode, baseRename)
  const otherImpl = rewriteDeclaration(args.otherSource, otherNode, otherRename)
  const dispatch = baseNames
    .map(
      (name, index) => `var ${name}=process.platform==="darwin"?${semanticName("darwin", name)}:${linuxNames[index]};`,
    )
    .join("")
  edits.push({ start: base.start, end: base.end, replacement: `${baseImpl}${otherImpl}${dispatch}` })
  report.semanticUnions.push({
    kind: "structural-drift",
    baseIndex: base.index,
    otherIndex: other.index,
    names: baseNames,
  })
}

function insertOtherOnlyDeclaration(
  args: MergeArgs,
  other: TopLevelDeclaration,
  otherToCanonical: Map<string, string>,
  availableNames: Set<string>,
  edits: SourceEdit[],
  report: PlatformMergeReport,
): void {
  const otherNode = declarationNode(other)
  const names = declaredNamesFor(other)
  if (names.length === 0) {
    report.unclassifiedDrift.push({
      kind: "other-only-island",
      index: other.index,
      start: other.start,
      end: other.end,
    })
    return
  }
  const rename = new Map(otherToCanonical)
  const canonicalNames = names.map((name) => semanticName("linux", name))
  for (let i = 0; i < names.length; i++) rename.set(names[i], canonicalNames[i])
  if (!validateFreeIdentifiers(otherNode, rename, availableNames, canonicalNames.join(","), report)) return
  const insertionPoint = canonicalInsertionPoint(args.baseSource)
  edits.push({
    start: insertionPoint,
    end: insertionPoint,
    replacement: rewriteDeclaration(args.otherSource, otherNode, rename),
  })
  report.semanticUnions.push({ kind: "other-only-island", index: other.index, names: canonicalNames })
}

function validateFreeIdentifiers(
  node: Record<string, unknown>,
  rename: Map<string, string>,
  availableNames: Set<string>,
  owner: string,
  report: PlatformMergeReport,
): boolean {
  let ok = true
  const locallyAvailableNames = new Set(availableNames)
  for (const name of declaredNames(node)) locallyAvailableNames.add(rename.get(name) ?? name)
  for (const name of freeIdentifiers(node, rename)) {
    if (!locallyAvailableNames.has(name)) {
      report.unclassifiedDrift.push({ kind: "unresolved-free-identifier", name, owner })
      ok = false
    }
  }
  return ok
}

function canonicalInsertionPoint(source: string): number {
  const end = source.search(/\s*$/)
  return source.slice(0, end).endsWith("})") ? end - 2 : end
}

function semanticName(platform: "darwin" | "linux", name: string): string {
  return `__acc_${platform}_${name}`
}

export function declaredNames(node: Record<string, unknown>): string[] {
  if (node.type === "FunctionDeclaration" || node.type === "ClassDeclaration") {
    const id = node.id as { name?: unknown } | undefined
    return typeof id?.name === "string" ? [id.name] : []
  }
  if (node.type !== "VariableDeclaration" || !Array.isArray(node.declarations)) return []
  const names: string[] = []
  for (const declaration of node.declarations as Array<{ id?: { type?: unknown; name?: unknown } }>) {
    if (declaration.id?.type === "Identifier" && typeof declaration.id.name === "string")
      names.push(declaration.id.name)
    else return []
  }
  return names
}

function rewriteDeclaration(source: string, node: Record<string, unknown>, rename: Map<string, string>): string {
  const edits: SourceEdit[] = []
  collectIdentifierEdits(node, rename, edits)
  let out = source.slice(node.start as number, node.end as number)
  for (const edit of edits.sort((a, b) => b.start - a.start)) {
    const localStart = edit.start - (node.start as number)
    const localEnd = edit.end - (node.start as number)
    out = out.slice(0, localStart) + edit.replacement + out.slice(localEnd)
  }
  return out
}

function collectIdentifierEdits(node: Record<string, unknown>, rename: Map<string, string>, edits: SourceEdit[]): void {
  walkScoped(node, rename, (identifier, name, kind) => {
    const replacement = rename.get(name)
    if (replacement && (kind === "binding" || replacement !== name)) {
      edits.push({ start: identifier.start as number, end: identifier.end as number, replacement })
    }
  })
}

function freeIdentifiers(node: Record<string, unknown>, rename: Map<string, string>): Set<string> {
  const names = new Set<string>()
  walkScoped(node, rename, (_identifier, name, kind) => {
    if (kind === "reference") names.add(rename.get(name) ?? name)
  })
  return names
}

export function freeIdentifierList(node: Record<string, unknown>): string[] {
  const names: string[] = []
  walkScoped(node, new Map(), (_identifier, name, kind) => {
    if (kind === "reference") names.push(name)
  })
  return names
}

function walkScoped(
  node: Record<string, unknown>,
  rename: Map<string, string>,
  onIdentifier: (identifier: Record<string, unknown>, name: string, kind: "binding" | "reference") => void,
): void {
  visitScoped(node, null, rename, [new Set()], onIdentifier, true)
}

function visitScoped(
  node: unknown,
  parent: Record<string, unknown> | null,
  rename: Map<string, string>,
  scopes: Array<Set<string>>,
  onIdentifier: (identifier: Record<string, unknown>, name: string, kind: "binding" | "reference") => void,
  allowBindingRewrite = false,
): void {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const item of node) visitScoped(item, parent, rename, scopes, onIdentifier)
    return
  }

  const record = node as Record<string, unknown>
  if (isFunctionLike(record)) {
    visitFunctionLike(record, rename, scopes, onIdentifier, allowBindingRewrite)
    return
  }
  if (record.type === "BlockStatement" && Array.isArray(record.body)) {
    const blockScope = new Set<string>()
    collectBlockScopeBindings(record.body, blockScope)
    const nestedScopes = [...scopes, blockScope]
    for (const statement of record.body as unknown[]) visitScoped(statement, record, rename, nestedScopes, onIdentifier)
    return
  }
  if (record.type === "VariableDeclaration" && Array.isArray(record.declarations)) {
    for (const declaration of record.declarations as Array<Record<string, unknown>>) {
      visitBindingPattern(declaration.id, rename, scopes, onIdentifier, allowBindingRewrite)
      visitScoped(declaration.init, declaration, rename, scopes, onIdentifier)
    }
    return
  }
  if (record.type === "ForStatement" || record.type === "ForInStatement" || record.type === "ForOfStatement") {
    const forScope = new Set<string>()
    collectForScopeBindings(record, forScope)
    const nestedScopes = forScope.size > 0 ? [...scopes, forScope] : scopes
    for (const key of Object.keys(record)) {
      if (IGNORED_KEYS.has(key)) continue
      visitScoped(record[key], record, rename, nestedScopes, onIdentifier)
    }
    return
  }
  if (record.type === "ClassDeclaration") {
    visitBindingPattern(record.id, rename, scopes, onIdentifier, allowBindingRewrite)
    for (const key of Object.keys(record)) {
      if (IGNORED_KEYS.has(key) || key === "id") continue
      visitScoped(record[key], record, rename, scopes, onIdentifier)
    }
    return
  }
  if (record.type === "CatchClause") {
    const catchScope = new Set<string>()
    collectPatternNames(record.param, catchScope)
    const nestedScopes = [...scopes, catchScope]
    visitBindingPattern(record.param, rename, nestedScopes, onIdentifier, false)
    visitScoped(record.body, record, rename, nestedScopes, onIdentifier)
    return
  }
  if (record.type === "Identifier" && typeof record.name === "string") {
    if (!shouldRewriteIdentifier(record, parent)) return
    if (isBound(record.name, scopes)) return
    onIdentifier(record, record.name, "reference")
    return
  }

  for (const key of Object.keys(record)) {
    if (IGNORED_KEYS.has(key)) continue
    visitScoped(record[key], record, rename, scopes, onIdentifier)
  }
}

function visitFunctionLike(
  node: Record<string, unknown>,
  rename: Map<string, string>,
  scopes: Array<Set<string>>,
  onIdentifier: (identifier: Record<string, unknown>, name: string, kind: "binding" | "reference") => void,
  allowBindingRewrite: boolean,
): void {
  if ((node.type === "FunctionDeclaration" || node.type === "ClassDeclaration") && node.id) {
    visitBindingPattern(node.id, rename, scopes, onIdentifier, allowBindingRewrite)
  } else if (node.type === "FunctionExpression" && node.id) {
    const id = node.id as Record<string, unknown>
    if (typeof id.name === "string") {
      const functionNameScope = new Set<string>([id.name])
      scopes = [...scopes, functionNameScope]
    }
  }

  const functionScope = new Set<string>()
  for (const param of Array.isArray(node.params) ? node.params : []) collectPatternNames(param, functionScope)
  collectFunctionScopeBindings(node.body, functionScope)
  const nestedScopes = [...scopes, functionScope]
  for (const param of Array.isArray(node.params) ? node.params : []) {
    visitBindingPattern(param, rename, nestedScopes, onIdentifier, false)
  }
  visitScoped(node.body, node, rename, nestedScopes, onIdentifier)
}

function visitBindingPattern(
  node: unknown,
  rename: Map<string, string>,
  scopes: Array<Set<string>>,
  onIdentifier: (identifier: Record<string, unknown>, name: string, kind: "binding" | "reference") => void,
  allowBindingRewrite: boolean,
): void {
  if (!node || typeof node !== "object") return
  const record = node as Record<string, unknown>
  if (record.type === "Identifier" && typeof record.name === "string") {
    if (allowBindingRewrite) {
      onIdentifier(record, record.name, "binding")
    } else {
      scopes.at(-1)?.add(record.name)
    }
    return
  }
  if (record.type === "AssignmentPattern") {
    visitBindingPattern(record.left, rename, scopes, onIdentifier, allowBindingRewrite)
    visitScoped(record.right, record, rename, scopes, onIdentifier)
    return
  }
  if (record.type === "RestElement") {
    visitBindingPattern(record.argument, rename, scopes, onIdentifier, allowBindingRewrite)
    return
  }
  if (record.type === "ObjectPattern" && Array.isArray(record.properties)) {
    for (const property of record.properties) {
      const prop = property as Record<string, unknown>
      if (prop.type === "ObjectProperty" || prop.type === "Property")
        visitBindingPattern(prop.value, rename, scopes, onIdentifier, allowBindingRewrite)
      else visitBindingPattern(prop.argument, rename, scopes, onIdentifier, allowBindingRewrite)
    }
    return
  }
  if (record.type === "ArrayPattern" && Array.isArray(record.elements)) {
    for (const element of record.elements)
      visitBindingPattern(element, rename, scopes, onIdentifier, allowBindingRewrite)
  }
}

function isFunctionLike(node: Record<string, unknown>): boolean {
  return (
    node.type === "FunctionDeclaration" ||
    node.type === "FunctionExpression" ||
    node.type === "ArrowFunctionExpression" ||
    node.type === "ObjectMethod" ||
    node.type === "ClassMethod" ||
    node.type === "ClassPrivateMethod"
  )
}

function shouldRewriteIdentifier(node: Record<string, unknown>, parent: Record<string, unknown> | null): boolean {
  if (!parent) return true
  if (parent.type === "MemberExpression" && parent.property === node && parent.computed !== true) return false
  if (parent.type === "OptionalMemberExpression" && parent.property === node && parent.computed !== true) return false
  if (
    (parent.type === "ObjectProperty" ||
      parent.type === "Property" ||
      parent.type === "ObjectMethod" ||
      parent.type === "ClassMethod" ||
      parent.type === "MethodDefinition" ||
      parent.type === "ClassPrivateMethod" ||
      parent.type === "ClassProperty" ||
      parent.type === "ClassPrivateProperty" ||
      parent.type === "PropertyDefinition") &&
    parent.key === node &&
    parent.computed !== true
  ) {
    return false
  }
  if (parent.type === "LabeledStatement" && parent.label === node) return false
  if ((parent.type === "BreakStatement" || parent.type === "ContinueStatement") && parent.label === node) return false
  return true
}

function isBound(name: string, scopes: Array<Set<string>>): boolean {
  return scopes.some((scope) => scope.has(name))
}

function collectFunctionScopeBindings(body: unknown, bindings: Set<string>): void {
  if (!body || typeof body !== "object") return
  const record = body as Record<string, unknown>
  if (record.type === "BlockStatement" && Array.isArray(record.body)) {
    for (const statement of record.body) collectFunctionScopeStatementBindings(statement, bindings)
  }
}

function collectFunctionScopeStatementBindings(node: unknown, bindings: Set<string>): void {
  if (!node || typeof node !== "object") return
  const record = node as Record<string, unknown>
  if (isFunctionLike(record) && record.type !== "FunctionDeclaration") return
  if (record.type === "FunctionDeclaration") {
    collectPatternNames(record.id, bindings)
    return
  }
  if (record.type === "VariableDeclaration" && record.kind === "var" && Array.isArray(record.declarations)) {
    for (const declaration of record.declarations as Array<Record<string, unknown>>)
      collectPatternNames(declaration.id, bindings)
  }
  for (const key of Object.keys(record)) {
    if (IGNORED_KEYS.has(key) || key === "id" || key === "params") continue
    collectFunctionScopeStatementBindings(record[key], bindings)
  }
}

function collectBlockScopeBindings(statements: unknown[], bindings: Set<string>): void {
  for (const statement of statements) {
    if (!statement || typeof statement !== "object") continue
    const record = statement as Record<string, unknown>
    if (record.type === "FunctionDeclaration" || record.type === "ClassDeclaration") {
      collectPatternNames(record.id, bindings)
    } else if (record.type === "VariableDeclaration" && record.kind !== "var" && Array.isArray(record.declarations)) {
      for (const declaration of record.declarations as Array<Record<string, unknown>>)
        collectPatternNames(declaration.id, bindings)
    }
  }
}

function collectForScopeBindings(node: Record<string, unknown>, bindings: Set<string>): void {
  const init = node.type === "ForStatement" ? node.init : node.left
  if (!init || typeof init !== "object") return
  const record = init as Record<string, unknown>
  if (record.type === "VariableDeclaration" && record.kind !== "var" && Array.isArray(record.declarations)) {
    for (const declaration of record.declarations as Array<Record<string, unknown>>) {
      collectPatternNames(declaration.id, bindings)
    }
  }
}

function collectPatternNames(node: unknown, names: Set<string>): void {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const item of node) collectPatternNames(item, names)
    return
  }
  const record = node as Record<string, unknown>
  if (record.type === "Identifier" && typeof record.name === "string") {
    names.add(record.name)
    return
  }
  if (record.type === "AssignmentPattern") {
    collectPatternNames(record.left, names)
    return
  }
  if (record.type === "RestElement") {
    collectPatternNames(record.argument, names)
    return
  }
  if (record.type === "ObjectPattern" && Array.isArray(record.properties)) {
    for (const property of record.properties) {
      const prop = property as Record<string, unknown>
      collectPatternNames(
        prop.type === "ObjectProperty" || prop.type === "Property" ? prop.value : prop.argument,
        names,
      )
    }
    return
  }
  if (record.type === "ArrayPattern" && Array.isArray(record.elements)) {
    for (const element of record.elements) collectPatternNames(element, names)
  }
}

function literalDrift(
  base: TopLevelDeclaration,
  other: TopLevelDeclaration,
): {
  structuralMismatch: boolean
  literals: Array<{ baseLiteral: string; otherLiteral: string; start: number; end: number }>
} {
  const literals: Array<{ baseLiteral: string; otherLiteral: string; start: number; end: number }> = []
  const structuralMismatch = !walkLiteralDrift(declarationNode(base), declarationNode(other), literals)
  return { structuralMismatch, literals }
}

function walkLiteralDrift(
  base: unknown,
  other: unknown,
  literals: Array<{ baseLiteral: string; otherLiteral: string; start: number; end: number }>,
): boolean {
  if (!base || !other || typeof base !== "object" || typeof other !== "object") return base === other
  if (Array.isArray(base) || Array.isArray(other)) {
    if (!Array.isArray(base) || !Array.isArray(other) || base.length !== other.length) return false
    for (let i = 0; i < base.length; i++) {
      if (!walkLiteralDrift(base[i], other[i], literals)) return false
    }
    return true
  }

  const baseRecord = base as Record<string, unknown>
  const otherRecord = other as Record<string, unknown>
  if (baseRecord.type !== otherRecord.type) return false
  if (
    (baseRecord.type === "StringLiteral" || baseRecord.type === "Literal") &&
    (otherRecord.type === "StringLiteral" || otherRecord.type === "Literal") &&
    typeof baseRecord.value === "string" &&
    typeof otherRecord.value === "string"
  ) {
    if (baseRecord.value !== otherRecord.value) {
      literals.push({
        baseLiteral: baseRecord.value,
        otherLiteral: otherRecord.value,
        start: baseRecord.start as number,
        end: baseRecord.end as number,
      })
    }
    return true
  }

  const keys = new Set([...Object.keys(baseRecord), ...Object.keys(otherRecord)])
  for (const key of [...keys].sort()) {
    if (key === "type" || IGNORED_KEYS.has(key)) continue
    if (!walkLiteralDrift(baseRecord[key], otherRecord[key], literals)) return false
  }
  return true
}

function canonicalExpression(baseLiteral: string, otherLiteral: string): string | null {
  const pair = new Set([baseLiteral, otherLiteral])
  if (pair.has("darwin") && pair.has("linux")) return 'process.platform==="darwin"?"darwin":"linux"'
  if (pair.has("macOS") && pair.has("Linux")) return 'process.platform==="darwin"?"macOS":"Linux"'
  if (pair.has("arm64") && pair.has("x64")) return 'process.arch==="arm64"?"arm64":"x64"'
  return null
}

function generalizedStringExpression(basePlatform: string, baseLiteral: string, otherLiteral: string): string {
  const darwinLiteral = basePlatform.startsWith("darwin") ? baseLiteral : otherLiteral
  const linuxLiteral = basePlatform.startsWith("darwin") ? otherLiteral : baseLiteral
  return `process.platform==="darwin"?${JSON.stringify(darwinLiteral)}:${JSON.stringify(linuxLiteral)}`
}
