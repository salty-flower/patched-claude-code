import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import { parseSync } from "oxc-parser"
import { applyAstTransformPatches } from "../../lib/ast-transform-patches"
import { patchApplies } from "../../lib/apply-patches"
import type { PatchEntry } from "../../lib/patch-files"

type Range = { start: number; end: number; name?: string }

// Preserve the native function around one patch; only its external dependencies are stubbed.
export function patchedFunction(source: string, patch: PatchEntry): { original: string; patched: string } {
  if (patch.locator_kind === "ast_transform") {
    if (!patch.ast || !patch.transform) throw new Error(`${patch.name}: missing AST transform metadata`)
    const result = applyAstTransformPatches(source, [
      { name: patch.name, expectedMatches: patch.expected_matches, ast: patch.ast, transform: patch.transform },
    ])
    const report = result.reports[0]
    if (!report || report.matches === 0) throw new Error(`${patch.name}: locator matched no node`)
    const boundary = enclosingFunction(source, report.start, patch.name)
    const after = enclosingFunction(result.source, report.start, patch.name)
    return {
      original: source.slice(boundary.start, boundary.end),
      patched: result.source.slice(after.start, after.end),
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
  const boundary = enclosingFunction(source, start, patch.name)
  const original = source.slice(boundary.start, boundary.end)
  // Function replacer keeps literal dollar signs in minified identifiers intact.
  return { original, patched: original.replace(locator, () => replacement) }
}

// Apply every active entry that anchors inside one function, then return that
// function's text before and after. Entries sharing a function compose in file
// order even when their locator kinds differ.
export function patchedEntryFunction(options: {
  graph: string
  entries: PatchEntry[]
  version: string
  platform: string
  patch: PatchEntry
}): { original: string; patched: string } {
  const { graph, entries, version, platform, patch } = options
  const needle = entryNeedle(patch)
  const candidates = readdirSync(graph)
    .filter((file) => file.endsWith(".js"))
    .map((file) => ({ file, text: readFileSync(join(graph, file), "utf8") }))
    .filter(({ text }) => needle === undefined || text.includes(needle))

  const located = candidates
    .map(({ file, text }) => ({ file, text, offset: anchorOffset(text, patch) }))
    .filter((candidate): candidate is { file: string; text: string; offset: number } => candidate.offset !== undefined)
  if (located.length !== 1) throw new Error(`${patch.name}: expected one graph file, found ${located.length}`)

  const { text } = located[0]!
  const offset = located[0]!.offset
  const boundary = enclosingFunction(text, offset, patch.name)
  const original = text.slice(boundary.start, boundary.end)

  // Cheap in-slice test: an entry anchors here only if its own anchor text is in
  // the slice. This avoids re-parsing the whole chunk once per candidate entry.
  const sameFunction = entries
    .filter((entry) => patchApplies(entry, version))
    .filter((entry) => (entry.platforms?.includes(platform) ?? true))
    .filter((entry) => sliceHoldsEntry(original, entry))

  let patched = original
  for (const entry of sameFunction) {
    if (entry.locator_kind === "ast_transform") {
      if (!entry.ast || !entry.transform) throw new Error(`${entry.name}: missing AST transform metadata`)
      patched = applyAstTransformPatches(patched, [
        { name: entry.name, expectedMatches: entry.expected_matches, ast: entry.ast, transform: entry.transform },
      ]).source
    } else {
      const locator = entry.locator_pattern
      const replacement = entry.replacement
      if (locator === undefined || replacement === undefined) throw new Error(`${entry.name}: missing replacement`)
      if (!patched.includes(locator)) continue
      patched = patched.split(locator).join(replacement)
    }
  }
  return { original, patched }
}

// Whether a patch's anchor appears inside a function slice, judged without parsing.
function sliceHoldsEntry(slice: string, patch: PatchEntry): boolean {
  if (patch.locator_kind === "literal") return slice.includes(patch.locator_pattern ?? "\u0000")
  const match = patch.ast?.match
  if (match?.function_name) {
    // Minified generators are declared as `function*name(`; plain ones as `function name(`.
    return new RegExp(`function\\*?\\s*${match.function_name}\\(`).test(slice)
  }
  if (match?.source_regex) {
    const literal = regexLiteral(match.source_regex)
    if (literal !== undefined) return slice.includes(literal)
  }
  if (match?.string) return slice.includes(match.string)
  if (match?.strings?.length) return match.strings.every((value) => slice.includes(value))
  return false
}

// The longest literal prefix a source regex requires, or undefined when it has none.
function regexLiteral(source: string): string | undefined {
  const literal = source
    .replace(/^\^/, "")
    .replace(/\$$/, "")
    .replace(/\\([()[\]{}.+*?^$|\\])/g, "$1")
  return literal.length >= 8 ? literal : undefined
}

// A cheap literal that must appear in the file holding a patch, or undefined when
// the match is too generic to narrow the search.
function entryNeedle(patch: PatchEntry): string | undefined {
  if (patch.locator_kind === "literal") return undefined
  const match = patch.ast?.match
  if (match?.function_name) return match.function_name
  if (match?.source_regex) return regexLiteral(match.source_regex)
  if (match?.string) return match.string
  if (match?.strings?.[0]) return match.strings[0]
  return undefined
}

// The byte offset a patch anchors on, without applying it.
export function anchorOffset(source: string, patch: PatchEntry): number | undefined {
  if (patch.locator_kind === "literal") {
    const at = source.indexOf(patch.locator_pattern ?? "")
    return at < 0 ? undefined : at
  }
  if (patch.locator_kind === "ast_transform") {
    if (!patch.ast || !patch.transform) return undefined
    try {
      const report = applyAstTransformPatches(source, [
        { name: patch.name, expectedMatches: patch.expected_matches, ast: patch.ast, transform: patch.transform },
      ]).reports[0]
      return report && report.matches > 0 ? report.start : undefined
    } catch {
      return undefined
    }
  }
  const pattern = patch.locator_pattern ? new RegExp(patch.locator_pattern) : undefined
  const match = pattern?.exec(source)
  return match ? match.index : undefined
}

function enclosingFunction(source: string, offset: number, name: string): Range {
  const ast = parseSync("patch-contract.js", source, { lang: "js", sourceType: "module" })
  if (ast.errors.length) throw new Error(`${name}: cannot parse target source`)
  const candidates: Range[] = []
  function visit(value: unknown): void {
    if (!value || typeof value !== "object") return
    if (Array.isArray(value)) {
      for (const item of value) visit(item)
      return
    }
    const node = value as Record<string, unknown>
    if (typeof node.start !== "number" || typeof node.end !== "number") return
    // Half-open containment: a preceding function ending exactly at the offset
    // must not win over the one that starts there.
    if (node.start > offset || node.end <= offset) return
    const init = node.init as { type?: string } | undefined
    const id = node.id as { name?: string } | undefined
    if (node.type === "FunctionDeclaration") {
      candidates.push({ start: node.start, end: node.end, name: id?.name })
    } else if (node.type === "VariableDeclarator" && init?.type === "ArrowFunctionExpression") {
      candidates.push({ start: node.start, end: node.end, name: id?.name })
    }
    for (const child of Object.values(node)) visit(child)
  }
  visit(ast.program)
  candidates.sort((a, b) => a.end - a.start - (b.end - b.start))
  const boundary = candidates[0]
  if (!boundary) throw new Error(`${name}: no enclosing function for locator`)
  return boundary
}
