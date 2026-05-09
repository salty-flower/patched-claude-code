import * as parser from "@babel/parser"

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
  object_property?: string
  function_name?: string
  string?: string
}

export type AstLocator = {
  schema: 1
  anchor?: "declaration"
  match: AstMatch
}

export type AstTransform =
  | { op: "replace_node"; value: string }
  | { op: "replace_function_body"; body: string }
  | { op: "set_object_property"; property: string; value: string }
  | { op: "set_call_arg"; index: number; value: string }
  | { op: "append_call_arg"; arg: string }
  | { op: "wrap_expression"; template: string }

export type AstTransformPatch = {
  name: string
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

export function applyAstTransformPatches(source: string, patches: AstTransformPatch[]): AstTransformResult {
  let current = source
  const reports: AstTransformReport[] = []

  for (const patch of patches) {
    const ast = parseProgram(current)
    const matches = findMatches(ast.program as Record<string, unknown>, current, patch.ast.match)
    if (matches.length !== 1) {
      throw new Error(`expected 1 AST match for ${patch.name}, got ${matches.length}`)
    }
    const target = matches[0]
    const edit = editForTransform(current, target, patch.transform)
    current = applyEdit(current, edit)
    parseProgram(current)
    reports.push({
      name: patch.name,
      op: patch.transform.op,
      matches: matches.length,
      start: edit.start,
      end: edit.end,
    })
  }

  return { source: current, reports }
}

export function verifyAstTransformPatch(source: string, patch: AstTransformPatch): AstTransformVerifyResult {
  const ast = parseProgram(source)
  const matches = findMatches(ast.program as Record<string, unknown>, source, patch.ast.match)
  if (matches.length !== 1) {
    return {
      ok: false,
      matches: matches.length,
      message: `expected 1 AST match, got ${matches.length}`,
    }
  }

  try {
    const edit = editForTransform(source, matches[0], patch.transform)
    const transformed = applyEdit(source, edit)
    parseProgram(transformed)
    return {
      ok: true,
      matches: matches.length,
      message: `AST locator matches ${matches.length} node(s)`,
      start: matches[0].start,
      end: matches[0].end,
    }
  } catch (error) {
    return {
      ok: false,
      matches: matches.length,
      message: error instanceof Error ? error.message : String(error),
      start: matches[0].start,
      end: matches[0].end,
    }
  }
}

function parseProgram(source: string): parser.ParseResult<any> {
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

function findMatches(root: Record<string, unknown>, source: string, match: AstMatch): AstNode[] {
  const matches: AstNode[] = []
  visit(root, (node) => {
    if (matchesAstMatch(node, source, match)) matches.push(node)
  })
  return matches
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

function matchesAstMatch(node: AstNode, source: string, match: AstMatch): boolean {
  if (node.type !== match.node) return false
  if (match.callee_property && !hasCalleeProperty(node, match.callee_property)) return false
  if (match.string_literal && !hasStringLiteral(node, match.string_literal)) return false
  if (match.object_property && !hasObjectProperty(node, match.object_property)) return false
  if (match.function_name && !hasFunctionName(node, match.function_name)) return false
  if (match.string && !source.slice(node.start, node.end).includes(match.string)) return false
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

function hasObjectProperty(node: AstNode, property: string): boolean {
  let found = false
  visit(node, (inner) => {
    if ((inner.type === "ObjectProperty" || inner.type === "ObjectMethod") && propertyKeyName(inner) === property) {
      found = true
    }
  })
  return found
}

function hasFunctionName(node: AstNode, name: string): boolean {
  const id = node.id as Record<string, unknown> | undefined
  return typeof id?.name === "string" && id.name === name
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
    case "set_object_property":
      return setObjectPropertyEdit(target, transform.property, transform.value)
    case "set_call_arg":
      return setCallArgEdit(target, transform.index, transform.value)
    case "append_call_arg":
      return appendCallArgEdit(target, transform.arg)
    case "wrap_expression":
      return wrapExpressionEdit(source, target, transform.template)
  }
}

function replaceFunctionBodyEdit(target: AstNode, body: string): SourceEdit {
  const block = target.body as Record<string, unknown> | undefined
  if (!block || block.type !== "BlockStatement" || typeof block.start !== "number" || typeof block.end !== "number") {
    throw new Error("replace_function_body target must have a block body")
  }
  return { start: block.start, end: block.end, replacement: body }
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

function applyEdit(source: string, edit: SourceEdit): string {
  if (edit.replacement.length === 0) throw new Error("AST transform replacement is empty")
  return source.slice(0, edit.start) + edit.replacement + source.slice(edit.end)
}
