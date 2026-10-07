import { parseSync } from "oxc-parser"
import { patchApplies } from "../../lib/apply-patches"
import { applyAstTransformPatches, prepareAstTransformPatches } from "../../lib/ast-transform-patches"
import type { AstTransformPatch } from "../../lib/ast-transform-patches"
import { applyPatchEntriesToGraphBundle, loadGraphBundle } from "../../lib/graph-bundle"
import type { PatchEntry } from "../../lib/patch-files"

type Range = { start: number; end: number; name?: string; kind: string; attachedEnd?: number }
type MatchRange = { matches: number; start?: number; end?: number }
type LocatedRange = { file: string; matches: number; start: number; end: number }
type ContractGraph = {
  originals: Map<string, string>
  patched: Map<string, string>
  anchors: Map<PatchEntry, LocatedRange[]>
  functions: Map<string, Range[]>
}

// Staged graphs and entry arrays are immutable during one test run. Cache the
// production render and native anchors, not a separately implemented patch pipe.
const graphs = new WeakMap<PatchEntry[], Map<string, ContractGraph>>()

// Preserve the native function around one patch; only its external dependencies are stubbed.
export function patchedFunction(source: string, patch: PatchEntry): { original: string; patched: string } {
  if (patch.locator_kind === "ast_transform") {
    const anchor = nativeMatchRange(source, patch)
    if (!anchor.matches || anchor.start === undefined || anchor.end === undefined) {
      throw new Error(`${patch.name}: locator matched no node`)
    }
    const boundary = enclosingFunction(functionRanges(source, patch.name), anchor.start, anchor.end, patch.name)
    const result = applyAstTransformPatches(source, [astPatch(patch)])
    return {
      original: source.slice(boundary.start, boundary.end),
      patched: extractPatchedFunction(result.source, functionRanges(result.source, patch.name), boundary, patch.name),
    }
  }

  const locator = patch.locator_pattern
  const replacement = patch.replacement
  if (patch.locator_kind !== "literal" || !locator || replacement === undefined) {
    throw new Error(`${patch.name}: expected a literal replacement`)
  }
  const start = source.indexOf(locator)
  if (start < 0 || source.indexOf(locator, start + 1) !== -1) {
    throw new Error(`${patch.name}: expected one locator in source`)
  }
  const boundary = enclosingFunction(functionRanges(source, patch.name), start, start + locator.length, patch.name)
  const original = source.slice(boundary.start, boundary.end)
  // Function replacer keeps literal dollar signs in minified identifiers intact.
  return { original, patched: original.replace(locator, () => replacement) }
}

// Run the production graph pipeline, then extract the named native target from
// its output. AST transforms therefore share the production batch/count rules.
export function patchedEntryFunction(options: {
  graph: string
  entries: PatchEntry[]
  version: string
  platform: string
  patch: PatchEntry
}): { original: string; patched: string } {
  const { graph, entries, version, platform, patch } = options
  const active = entries.filter(
    (entry) => patchApplies(entry, version) && (!entry.platforms?.length || entry.platforms.includes(platform)),
  )
  if (!active.includes(patch)) throw new Error(`${patch.name}: inactive or absent graph entry`)
  const key = JSON.stringify([graph, version, platform, active.map((entry) => entry.name)])
  let cache = graphs.get(entries)
  if (!cache) {
    cache = new Map()
    graphs.set(entries, cache)
  }
  let contract = cache.get(key)
  if (!contract) {
    const bundle = loadGraphBundle(graph, platform)
    const outcome = applyPatchEntriesToGraphBundle(bundle, entries, version)
    const anchors = new Map(active.map((entry) => [entry, [] as LocatedRange[]]))
    const astEntries = active.filter((entry) => entry.locator_kind === "ast_transform")
    const batch = astEntries.map(astPatch)
    for (const { path, text } of bundle.files) {
      const prepared = prepareAstTransformPatches(text, batch, { collectMatches: true, independent: true })
      for (let i = 0; i < astEntries.length; i++) {
        const result = prepared.results[i]!
        if (!result.ok) throw new Error(`${astEntries[i]!.name}: ${path}: ${result.message}`)
        rememberAnchor(anchors, astEntries[i]!, path, result)
      }
      for (const entry of active) {
        if (entry.locator_kind !== "ast_transform") rememberAnchor(anchors, entry, path, nativeMatchRange(text, entry))
      }
    }
    contract = {
      originals: new Map(bundle.files.map(({ path, text }) => [path, text])),
      patched: outcome.texts,
      anchors,
      functions: new Map(),
    }
    cache.set(key, contract)
  }
  const located = contract.anchors.get(patch) ?? []
  const total = located.reduce((sum, anchor) => sum + anchor.matches, 0)
  if (located.length !== 1 || total !== (patch.expected_matches ?? 1)) {
    throw new Error(`${patch.name}: expected one native graph target, found ${located.length} files / ${total} matches`)
  }
  const anchor = located[0]!
  const original = contract.originals.get(anchor.file)!
  const patched = contract.patched.get(anchor.file)!
  const ranges = (text: string, stage: string): Range[] => {
    const rangeKey = `${stage}:${anchor.file}`
    let found = contract.functions.get(rangeKey)
    if (!found) {
      found = functionRanges(text, patch.name)
      contract.functions.set(rangeKey, found)
    }
    return found
  }
  const boundary = enclosingFunction(ranges(original, "native"), anchor.start, anchor.end, patch.name)
  return {
    original: original.slice(boundary.start, boundary.end),
    patched: extractPatchedFunction(patched, ranges(patched, "patched"), boundary, patch.name),
  }
}

function rememberAnchor(
  anchors: Map<PatchEntry, LocatedRange[]>,
  entry: PatchEntry,
  file: string,
  result: MatchRange,
): void {
  if (!result.matches) return
  if (result.start === undefined || result.end === undefined)
    throw new Error(`${entry.name}: missing native match range`)
  anchors.get(entry)!.push({ file, matches: result.matches, start: result.start, end: result.end })
}

function astPatch(patch: PatchEntry): AstTransformPatch {
  if (!patch.ast || !patch.transform) throw new Error(`${patch.name}: missing AST transform metadata`)
  return { name: patch.name, expectedMatches: patch.expected_matches, ast: patch.ast, transform: patch.transform }
}

// Locate actual native matches. Missing anchors return undefined; AST errors do
// not become missing anchors, and a transform's edit offset is not its target.
export function anchorOffset(source: string, patch: PatchEntry): number | undefined {
  return nativeMatchRange(source, patch).start
}

function nativeMatchRange(source: string, patch: PatchEntry): MatchRange {
  if (patch.locator_kind === "ast_transform") {
    const result = prepareAstTransformPatches(source, [astPatch(patch)], { collectMatches: true, independent: true })
      .results[0]!
    if (!result.ok) throw new Error(`${patch.name}: ${result.message}`)
    return result
  }
  const locator = patch.locator_pattern
  if (!locator) throw new Error(`${patch.name}: missing locator`)
  const matches =
    patch.locator_kind === "literal"
      ? [...source.matchAll(new RegExp(locator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"))]
      : [...source.matchAll(new RegExp(locator, "g"))]
  const first = matches[0]
  const last = matches.at(-1)
  return { matches: matches.length, start: first?.index, end: last ? last.index + last[0].length : undefined }
}

function extractPatchedFunction(source: string, ranges: Range[], native: Range, name: string): string {
  if (!native.name) throw new Error(`${name}: native target has no function name`)
  const matches = ranges.filter((range) => range.name === native.name && range.kind === native.kind)
  if (matches.length !== 1)
    throw new Error(`${name}: expected one patched function ${native.name}, found ${matches.length}`)
  const boundary = matches[0]!
  return source.slice(boundary.start, boundary.attachedEnd ?? boundary.end)
}

function enclosingFunction(ranges: Range[], start: number, end: number, name: string): Range {
  const candidates = ranges.filter((range) => range.start <= start && range.end > start && range.end >= end)
  candidates.sort((a, b) => a.end - a.start - (b.end - b.start))
  if (!candidates[0]) throw new Error(`${name}: no enclosing function for locator`)
  return candidates[0]
}

function functionRanges(source: string, name: string): Range[] {
  const ast = parseSync("patch-contract.js", source, { lang: "js", sourceType: "module" })
  if (ast.errors.length) throw new Error(`${name}: cannot parse target source`)
  const ranges: Range[] = []
  const attachment = (value: unknown, functionName: string | undefined): boolean => {
    const node = value as {
      type?: string
      expression?: {
        type?: string
        operator?: string
        left?: {
          type?: string
          object?: { type?: string; name?: string }
        }
        right?: { type?: string }
      }
    }
    const expression = node?.expression
    return (
      functionName !== undefined &&
      node?.type === "ExpressionStatement" &&
      expression?.type === "AssignmentExpression" &&
      expression.operator === "=" &&
      expression.left?.type === "MemberExpression" &&
      expression.left.object?.type === "Identifier" &&
      expression.left.object.name === functionName &&
      (expression.right?.type === "FunctionExpression" || expression.right?.type === "ArrowFunctionExpression")
    )
  }
  function visit(value: unknown): void {
    if (!value || typeof value !== "object") return
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const node = value[i] as { type?: string; start?: number; end?: number; id?: { name?: string } }
        if (node?.type === "FunctionDeclaration" && typeof node.start === "number" && typeof node.end === "number") {
          let attachedEnd = node.end
          for (let j = i + 1; j < value.length && attachment(value[j], node.id?.name); j++) {
            attachedEnd = (value[j] as { end: number }).end
          }
          ranges.push({ start: node.start, end: node.end, name: node.id?.name, kind: node.type, attachedEnd })
        }
        visit(value[i])
      }
      return
    }
    const node = value as Record<string, unknown>
    const init = node.init as { type?: string } | undefined
    const id = node.id as { name?: string } | undefined
    if (
      node.type === "VariableDeclarator" &&
      init?.type === "ArrowFunctionExpression" &&
      typeof node.start === "number" &&
      typeof node.end === "number"
    ) {
      ranges.push({ start: node.start, end: node.end, name: id?.name, kind: node.type })
    }
    for (const child of Object.values(node)) visit(child)
  }
  visit(ast.program)
  return ranges
}
