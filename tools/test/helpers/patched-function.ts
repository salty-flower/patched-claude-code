import { parseSync } from "oxc-parser"
import type { PatchEntry } from "../../lib/patch-files"

// Preserve the native function around the patch; only its external dependencies are stubbed.
export function patchedFunction(source: string, patch: PatchEntry): { original: string; patched: string } {
  const locator = patch.locator_pattern
  const replacement = patch.replacement
  if (patch.locator_kind !== "literal" || !locator || replacement === undefined) {
    throw new Error(`${patch.name}: expected a literal replacement`)
  }
  const start = source.indexOf(locator)
  if (start < 0 || source.indexOf(locator, start + 1) !== -1) {
    throw new Error(`${patch.name}: expected one locator in source`)
  }
  const end = start + locator.length
  const ast = parseSync("patch-contract.js", source, { lang: "js", sourceType: "module" })
  if (ast.errors.length) throw new Error(`${patch.name}: cannot parse target source`)
  const candidates: Array<{ start: number; end: number }> = []
  function visit(value: unknown): void {
    if (!value || typeof value !== "object") return
    if (Array.isArray(value)) {
      for (const item of value) visit(item)
      return
    }
    const node = value as Record<string, unknown>
    if (typeof node.start !== "number" || typeof node.end !== "number") return
    if (node.start > start || node.end < end) return
    const init = node.init as { type?: string } | undefined
    if (
      node.type === "FunctionDeclaration" ||
      (node.type === "VariableDeclarator" && init?.type === "ArrowFunctionExpression")
    )
      candidates.push({ start: node.start, end: node.end })
    for (const child of Object.values(node)) visit(child)
  }
  visit(ast.program)
  candidates.sort((a, b) => a.end - a.start - (b.end - b.start))
  const boundary = candidates[0]
  if (!boundary) throw new Error(`${patch.name}: no enclosing function for locator`)
  const original = source.slice(boundary.start, boundary.end)
  // Function replacer keeps literal dollar signs in minified identifiers intact.
  return { original, patched: original.replace(locator, () => replacement) }
}
