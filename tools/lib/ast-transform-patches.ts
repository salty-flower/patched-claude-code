import * as parser from "@babel/parser"
import { parseSync as parseWithOxc } from "oxc-parser"

const IGNORED_KEYS = new Set([
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

export type AstMatch = {
  node: string
  callee_property?: string
  string_literal?: string
  direct_string_literal?: string
  object_property?: string
  object_property_direct?: string
  function_name?: string
  method_name?: string
  body_statement_count?: number
  source?: string
  source_regex?: string
  string?: string
  strings?: string[]
  parent_node?: string
}

export type AstLocator = {
  schema: 1
  anchor?: "declaration"
  match: AstMatch
}

export type AstTransform =
  | { op: "replace_node"; value: string }
  | { op: "replace_function_body"; body: string }
  | { op: "replace_function_body_with_first_var_initializer_return" }
  | { op: "set_object_property"; property: string; value: string }
  | { op: "append_object_property"; code: string }
  | { op: "set_call_arg"; index: number; value: string }
  | { op: "append_call_arg"; arg: string }
  | { op: "wrap_expression"; template: string }
  | { op: "replace_with_consequent" }
  | { op: "prepend_function_body"; code: string }
  | { op: "insert_before_node"; code: string }
  | { op: "insert_after_node"; code: string }
  | { op: "replace_substring"; find: string; value: string }
  | { op: "replace_substring_regex"; find: string; value: string }

export type AstTransformPatch = {
  name: string
  expectedMatches?: number
  ast: AstLocator
  transform: AstTransform
}

export type AstTransformReport = {
  name: string
  op: AstTransform["op"]
  matches: number
  start: number
  end: number
}

export type AstTransformResult = {
  source: string
  reports: AstTransformReport[]
}

export type AstTransformVerifyResult = {
  ok: boolean
  matches: number
  message: string
  start?: number
  end?: number
}

export type AstTransformParsePhase = "initial" | "final"

export type AstTransformOptions = {
  onParse?: (phase: AstTransformParsePhase) => void
}

type AstNode = Record<string, unknown> & {
  type: string
  start: number
  end: number
}

type SourceEdit = {
  start: number
  end: number
  replacement: string
}

type PlannedAstTransform = {
  patch: AstTransformPatch
  matches: AstNode[]
  edits: SourceEdit[]
}

export function applyAstTransformPatches(
  source: string,
  patches: AstTransformPatch[],
  options: AstTransformOptions = {},
): AstTransformResult {
  if (patches.length === 0) return { source, reports: [] }

  const ast = parseProgram(source, options, "initial")
  const planned = planAstTransformPatches(source, ast.program as Record<string, unknown>, patches)
  const edits = planned.flatMap((item) => item.edits)
  rejectOverlappingEdits(edits)

  const current = applyEdits(source, edits)
  validateFinalProgram(current, options)

  return {
    source: current,
    reports: planned.map(({ patch, matches, edits }) => ({
      name: patch.name,
      op: patch.transform.op,
      matches: matches.length,
      ...rangeForEdits(edits),
    })),
  }
}

export function verifyAstTransformPatch(
  source: string,
  patch: AstTransformPatch,
  options: AstTransformOptions = {},
): AstTransformVerifyResult {
  return verifyAstTransformPatches(source, [patch], options)[0]
}

export function verifyAstTransformPatches(
  source: string,
  patches: AstTransformPatch[],
  options: AstTransformOptions = {},
): AstTransformVerifyResult[] {
  if (patches.length === 0) return []

  let ast: parser.ParseResult<any>
  try {
    ast = parseProgram(source, options, "initial")
  } catch (error) {
    return patches.map(() => ({
      ok: false,
      matches: 0,
      message: error instanceof Error ? error.message : String(error),
    }))
  }

  const results: AstTransformVerifyResult[] = []
  const successfulEdits: SourceEdit[] = []
  const parentMap = buildParentMap(ast.program as Record<string, unknown>)

  for (const patch of patches) {
    const matches = findMatches(ast.program as Record<string, unknown>, source, patch.ast.match, parentMap)
    const expected = patch.expectedMatches ?? 1
    if (matches.length !== expected) {
      results.push({
        ok: false,
        matches: matches.length,
        message: `expected ${expected} AST match(es), got ${matches.length}`,
      })
      continue
    }

    try {
      const edits = matches.map((target) => editForTransform(source, target, patch.transform))
      rejectOverlappingEdits(edits)
      successfulEdits.push(...edits)
      results.push({
        ok: true,
        matches: matches.length,
        message: `AST locator matches ${matches.length} node(s)`,
        ...rangeForMatches(matches),
      })
    } catch (error) {
      results.push({
        ok: false,
        matches: matches.length,
        message: error instanceof Error ? error.message : String(error),
        ...rangeForMatches(matches),
      })
    }
  }

  try {
    rejectOverlappingEdits(successfulEdits)
    const transformed = applyEdits(source, successfulEdits)
    validateFinalProgram(transformed, options)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return results.map((result) => (result.ok ? { ...result, ok: false, message } : result))
  }

  return results
}

function planAstTransformPatches(
  source: string,
  root: Record<string, unknown>,
  patches: AstTransformPatch[],
): PlannedAstTransform[] {
  const parentMap = buildParentMap(root)
  return patches.map((patch) => {
    const matches = findMatches(root, source, patch.ast.match, parentMap)
    const expected = patch.expectedMatches ?? 1
    if (matches.length !== expected) {
      throw new Error(`expected ${expected} AST match(es) for ${patch.name}, got ${matches.length}`)
    }
    const edits = matches.map((target) => editForTransform(source, target, patch.transform))
    rejectOverlappingEdits(edits)
    return { patch, matches, edits }
  })
}

function validateFinalProgram(source: string, options: AstTransformOptions): void {
  options.onParse?.("final")
  const ast = parseWithOxc("patched-bundle.js", source, {
    astType: "js",
    lang: "js",
    preserveParens: true,
    sourceType: "script",
  })
  const errors = ast.errors.filter((error) => !error.message.includes("A 'return' statement can only be used within a function body"))
  if (errors.length > 0) {
    throw new Error(`JavaScript parse failed with ${errors.length} error(s)`)
  }
}

function parseProgram(
  source: string,
  options: AstTransformOptions = {},
  phase: AstTransformParsePhase = "initial",
): parser.ParseResult<any> {
  options.onParse?.(phase)
  const ast = parser.parse(source, {
    allowReturnOutsideFunction: true,
    errorRecovery: true,
    plugins: ["jsx", "typescript"],
    sourceType: "script",
  })
  if ((ast.errors?.length ?? 0) > 0) {
    throw new Error(`JavaScript parse failed with ${ast.errors?.length ?? 0} error(s)`)
  }
  return ast
}

function rangeForEdits(edits: SourceEdit[]): { start: number; end: number } {
  if (edits.length === 0) return { start: 0, end: 0 }
  return {
    start: Math.min(...edits.map((edit) => edit.start)),
    end: Math.max(...edits.map((edit) => edit.end)),
  }
}

function rangeForMatches(matches: AstNode[]): { start?: number; end?: number } {
  if (matches.length === 0) return {}
  return {
    start: Math.min(...matches.map((match) => match.start)),
    end: Math.max(...matches.map((match) => match.end)),
  }
}

function findMatches(
  root: Record<string, unknown>,
  source: string,
  match: AstMatch,
  parentMap: Map<AstNode, AstNode>,
): AstNode[] {
  const matches: AstNode[] = []
  visit(root, (node) => {
    if (matchesAstMatch(node, source, match, parentMap)) matches.push(node)
  })
  return matches
}

function buildParentMap(root: Record<string, unknown>): Map<AstNode, AstNode> {
  const map = new Map<AstNode, AstNode>()
  visitWithParent(root, null, map)
  return map
}

function visitWithParent(node: unknown, parent: AstNode | null, map: Map<AstNode, AstNode>): void {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const item of node) visitWithParent(item, parent, map)
    return
  }
  const record = node as Record<string, unknown>
  if (typeof record.type === "string" && typeof record.start === "number" && typeof record.end === "number") {
    const astNode = record as AstNode
    if (parent) map.set(astNode, parent)
    parent = astNode
  }
  for (const key of Object.keys(record)) {
    if (IGNORED_KEYS.has(key)) continue
    visitWithParent(record[key], parent, map)
  }
}

function visit(node: unknown, onNode: (node: AstNode) => void): void {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const item of node) visit(item, onNode)
    return
  }

  const record = node as Record<string, unknown>
  if (typeof record.type === "string" && typeof record.start === "number" && typeof record.end === "number") {
    onNode(record as AstNode)
  }
  for (const key of Object.keys(record)) {
    if (IGNORED_KEYS.has(key)) continue
    visit(record[key], onNode)
  }
}

function matchesAstMatch(node: AstNode, source: string, match: AstMatch, parentMap?: Map<AstNode, AstNode>): boolean {
  if (node.type !== match.node) return false
  if (match.callee_property && !hasCalleeProperty(node, match.callee_property)) return false
  if (match.string_literal && !hasStringLiteral(node, match.string_literal)) return false
  if (match.direct_string_literal && !hasDirectStringLiteral(node, match.direct_string_literal)) return false
  if (match.object_property && !hasObjectProperty(node, match.object_property)) return false
  if (match.object_property_direct && !hasDirectObjectProperty(node, match.object_property_direct)) return false
  if (match.function_name && !hasFunctionName(node, match.function_name)) return false
  if (match.method_name && propertyKeyName(node) !== match.method_name) return false
  if (match.body_statement_count !== undefined && bodyStatementCount(node) !== match.body_statement_count) return false
  const nodeSource = source.slice(node.start, node.end)
  if (match.source && nodeSource !== match.source) return false
  if (match.source_regex && !new RegExp(match.source_regex).test(nodeSource)) return false
  if (match.string && !nodeSource.includes(match.string)) return false
  if (match.strings && match.strings.length > 0) {
    for (const s of match.strings) {
      if (!nodeSource.includes(s)) return false
    }
  }
  if (match.parent_node) {
    const parent = parentMap?.get(node)
    if (!parent || parent.type !== match.parent_node) return false
  }
  return true
}

function hasCalleeProperty(node: AstNode, property: string): boolean {
  if (node.type !== "CallExpression" && node.type !== "OptionalCallExpression") return false
  const callee = node.callee as Record<string, unknown> | undefined
  if (!callee) return false
  if (callee.type === "Identifier") return callee.name === property
  const memberProperty = callee.property as Record<string, unknown> | undefined
  return memberProperty?.type === "Identifier" && memberProperty.name === property
}

function hasStringLiteral(node: AstNode, value: string): boolean {
  let found = false
  visit(node, (inner) => {
    if (inner.type === "StringLiteral" && inner.value === value) found = true
  })
  return found
}

function hasDirectStringLiteral(node: AstNode, value: string): boolean {
  const args = Array.isArray(node.arguments) ? (node.arguments as Array<Record<string, unknown>>) : []
  return args.some((arg) => arg.type === "StringLiteral" && arg.value === value)
}

function hasObjectProperty(node: AstNode, property: string): boolean {
  let found = false
  visit(node, (inner) => {
    if ((inner.type === "ObjectProperty" || inner.type === "ObjectMethod") && propertyKeyName(inner) === property) {
      found = true
    }
  })
  return found
}

function hasDirectObjectProperty(node: AstNode, property: string): boolean {
  const properties = Array.isArray(node.properties) ? (node.properties as Array<Record<string, unknown>>) : []
  return properties.some((item) => (item.type === "ObjectProperty" || item.type === "ObjectMethod") && propertyKeyName(item) === property)
}

function hasFunctionName(node: AstNode, name: string): boolean {
  const id = node.id as Record<string, unknown> | undefined
  return typeof id?.name === "string" && id.name === name
}

function bodyStatementCount(node: AstNode): number | null {
  const body = node.body as Record<string, unknown> | undefined
  if (!body || body.type !== "BlockStatement" || !Array.isArray(body.body)) return null
  return body.body.length
}

function propertyKeyName(node: Record<string, unknown>): string | null {
  const key = node.key as Record<string, unknown> | undefined
  if (!key) return null
  if (key.type === "Identifier" && typeof key.name === "string") return key.name
  if (key.type === "StringLiteral" && typeof key.value === "string") return key.value
  return null
}

function editForTransform(source: string, target: AstNode, transform: AstTransform): SourceEdit {
  switch (transform.op) {
    case "replace_node":
      return { start: target.start, end: target.end, replacement: transform.value }
    case "replace_function_body":
      return replaceFunctionBodyEdit(target, transform.body)
    case "replace_function_body_with_first_var_initializer_return":
      return replaceFunctionBodyWithFirstVarInitializerReturnEdit(source, target)
    case "set_object_property":
      return setObjectPropertyEdit(target, transform.property, transform.value)
    case "append_object_property":
      return appendObjectPropertyEdit(target, transform.code)
    case "set_call_arg":
      return setCallArgEdit(target, transform.index, transform.value)
    case "append_call_arg":
      return appendCallArgEdit(target, transform.arg)
    case "wrap_expression":
      return wrapExpressionEdit(source, target, transform.template)
    case "replace_with_consequent":
      return replaceWithConsequentEdit(source, target)
    case "prepend_function_body":
      return prependFunctionBodyEdit(target, transform.code)
    case "insert_before_node":
      return { start: target.start, end: target.start, replacement: transform.code }
    case "insert_after_node":
      return { start: target.end, end: target.end, replacement: transform.code }
    case "replace_substring":
      return replaceSubstringEdit(source, target, transform.find, transform.value)
    case "replace_substring_regex":
      return replaceSubstringRegexEdit(source, target, transform.find, transform.value)
  }
}

function replaceFunctionBodyEdit(target: AstNode, body: string): SourceEdit {
  const block = target.body as Record<string, unknown> | undefined
  if (!block || block.type !== "BlockStatement" || typeof block.start !== "number" || typeof block.end !== "number") {
    throw new Error("replace_function_body target must have a block body")
  }
  return { start: block.start, end: block.end, replacement: body }
}

function replaceFunctionBodyWithFirstVarInitializerReturnEdit(source: string, target: AstNode): SourceEdit {
  const block = target.body as Record<string, unknown> | undefined
  if (!block || block.type !== "BlockStatement" || typeof block.start !== "number" || typeof block.end !== "number") {
    throw new Error("replace_function_body_with_first_var_initializer_return target must have a block body")
  }
  const statements = Array.isArray(block.body) ? (block.body as Array<Record<string, unknown>>) : []
  const first = statements[0]
  if (first?.type !== "VariableDeclaration") {
    throw new Error("replace_function_body_with_first_var_initializer_return first statement must be a variable declaration")
  }
  const declarations = Array.isArray(first.declarations) ? (first.declarations as Array<Record<string, unknown>>) : []
  const init = declarations[0]?.init as Record<string, unknown> | undefined
  if (!init || typeof init.start !== "number" || typeof init.end !== "number") {
    throw new Error("replace_function_body_with_first_var_initializer_return first variable must have an initializer")
  }
  return { start: block.start, end: block.end, replacement: `{return ${source.slice(init.start, init.end)}}` }
}

function setObjectPropertyEdit(target: AstNode, property: string, value: string): SourceEdit {
  if (target.type !== "ObjectExpression") throw new Error("set_object_property target must be an ObjectExpression")
  const properties = Array.isArray(target.properties) ? (target.properties as Array<Record<string, unknown>>) : []
  for (const item of properties) {
    if (propertyKeyName(item) !== property) continue
    if (item.type !== "ObjectProperty") throw new Error(`cannot replace method property ${property}`)
    const valueNode = item.value as Record<string, unknown> | undefined
    if (!valueNode || typeof valueNode.start !== "number" || typeof valueNode.end !== "number") {
      throw new Error(`property ${property} has no replaceable value range`)
    }
    return { start: valueNode.start, end: valueNode.end, replacement: value }
  }

  const prefix = properties.length === 0 ? "" : ","
  return { start: target.end - 1, end: target.end - 1, replacement: `${prefix}${property}:${value}` }
}

function appendObjectPropertyEdit(target: AstNode, code: string): SourceEdit {
  if (target.type !== "ObjectExpression") throw new Error("append_object_property target must be an ObjectExpression")
  const properties = Array.isArray(target.properties) ? (target.properties as Array<Record<string, unknown>>) : []
  const prefix = properties.length === 0 ? "" : ","
  return { start: target.end - 1, end: target.end - 1, replacement: `${prefix}${code}` }
}

function setCallArgEdit(target: AstNode, index: number, value: string): SourceEdit {
  if (target.type !== "CallExpression" && target.type !== "OptionalCallExpression") {
    throw new Error("set_call_arg target must be a CallExpression")
  }
  const args = Array.isArray(target.arguments) ? (target.arguments as Array<Record<string, unknown>>) : []
  const arg = args[index]
  if (!arg || typeof arg.start !== "number" || typeof arg.end !== "number") {
    throw new Error(`call argument ${index} is missing`)
  }
  return { start: arg.start, end: arg.end, replacement: value }
}

function appendCallArgEdit(target: AstNode, arg: string): SourceEdit {
  if (target.type !== "CallExpression" && target.type !== "OptionalCallExpression") {
    throw new Error("append_call_arg target must be a CallExpression")
  }
  const args = Array.isArray(target.arguments) ? (target.arguments as Array<Record<string, unknown>>) : []
  if (args.length === 0) {
    return { start: target.end - 1, end: target.end - 1, replacement: arg }
  }
  const lastArg = args.at(-1)
  if (!lastArg || typeof lastArg.end !== "number") throw new Error("last call argument has no range")
  return { start: lastArg.end, end: lastArg.end, replacement: `,${arg}` }
}

function wrapExpressionEdit(source: string, target: AstNode, template: string): SourceEdit {
  const pieces = template.split("%%EXPR%%")
  if (pieces.length !== 2) throw new Error("wrap_expression template must contain exactly one %%EXPR%% placeholder")
  return {
    start: target.start,
    end: target.end,
    replacement: `${pieces[0]}${source.slice(target.start, target.end)}${pieces[1]}`,
  }
}

function replaceWithConsequentEdit(source: string, target: AstNode): SourceEdit {
  if (target.type !== "IfStatement") throw new Error("replace_with_consequent target must be an IfStatement")
  const consequent = target.consequent as AstNode | undefined
  if (!consequent || typeof consequent.start !== "number" || typeof consequent.end !== "number") {
    throw new Error("replace_with_consequent target must have a consequent")
  }
  if (consequent.type === "BlockStatement") {
    return {
      start: target.start,
      end: target.end,
      replacement: source.slice(consequent.start + 1, consequent.end - 1),
    }
  }
  return { start: target.start, end: target.end, replacement: source.slice(consequent.start, consequent.end) }
}

function prependFunctionBodyEdit(target: AstNode, code: string): SourceEdit {
  const block = target.body as Record<string, unknown> | undefined
  if (!block || block.type !== "BlockStatement" || typeof block.start !== "number") {
    throw new Error("prepend_function_body target must have a block body")
  }
  return { start: block.start + 1, end: block.start + 1, replacement: code }
}

function replaceSubstringEdit(source: string, target: AstNode, find: string, value: string): SourceEdit {
  const text = source.slice(target.start, target.end)
  const first = text.indexOf(find)
  if (first < 0) throw new Error("replace_substring find text was not found in target node")
  const second = text.indexOf(find, first + find.length)
  if (second >= 0) throw new Error("replace_substring find text matched more than once in target node")
  return {
    start: target.start + first,
    end: target.start + first + find.length,
    replacement: value,
  }
}

function replaceSubstringRegexEdit(source: string, target: AstNode, find: string, value: string): SourceEdit {
  const text = source.slice(target.start, target.end)
  const regex = new RegExp(find)
  const match = regex.exec(text)
  if (!match) throw new Error("replace_substring_regex find pattern was not found in target node")
  const secondMatch = regex.exec(text.slice(match.index + Math.max(match[0].length, 1)))
  if (secondMatch) throw new Error("replace_substring_regex find pattern matched more than once in target node")
  let replacement = value
  for (let i = 1; i < match.length; i++) {
    replacement = replacement.replaceAll(`$${i}`, match[i] ?? "")
  }
  return {
    start: target.start + match.index,
    end: target.start + match.index + match[0].length,
    replacement,
  }
}

function applyEdits(source: string, edits: SourceEdit[]): string {
  let out = source
  for (const edit of edits.slice().sort((a, b) => b.start - a.start || b.end - a.end)) {
    out = out.slice(0, edit.start) + edit.replacement + out.slice(edit.end)
  }
  return out
}

function rejectOverlappingEdits(edits: SourceEdit[]): void {
  const sorted = edits.slice().sort((a, b) => a.start - b.start || a.end - b.end)
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1].end > sorted[i].start) throw new Error("AST transform edits overlap")
  }
}
