import { createHash } from "node:crypto"
import * as parser from "@babel/parser"

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

export type StructuralJavaScriptHash = {
  sha256: string
  tokenBytes: number
  parseErrors: number
}

function visit(node: unknown, tokens: string[]): void {
  if (!node || typeof node !== "object") return

  if (Array.isArray(node)) {
    tokens.push("[")
    for (const item of node) visit(item, tokens)
    tokens.push("]")
    return
  }

  const record = node as Record<string, unknown>
  if (typeof record.type === "string") {
    tokens.push(record.type)
    if (record.type === "StringLiteral") tokens.push(`str:${String(record.value)}`)
    else if (record.type === "NumericLiteral") tokens.push(`num:${String(record.value)}`)
    else if (record.type === "BooleanLiteral") tokens.push(`bool:${String(record.value)}`)
    else if (record.type === "NullLiteral") tokens.push("null")
    else if (record.type === "RegExpLiteral") tokens.push(`re:${String(record.pattern)}/${String(record.flags)}`)
  }

  for (const key of Object.keys(record).sort()) {
    if (key === "type" || IGNORED_KEYS.has(key)) continue
    tokens.push(key)
    visit(record[key], tokens)
  }
}

export function structuralJavaScriptHash(source: string): StructuralJavaScriptHash {
  const ast = parser.parse(source, {
    allowReturnOutsideFunction: true,
    errorRecovery: true,
    plugins: ["jsx", "typescript"],
    sourceType: "script",
  })
  const tokens: string[] = []
  visit(ast.program, tokens)
  const tokenText = tokens.join("\x1f")
  return {
    sha256: createHash("sha256").update(tokenText).digest("hex"),
    tokenBytes: Buffer.byteLength(tokenText),
    parseErrors: ast.errors?.length ?? 0,
  }
}
