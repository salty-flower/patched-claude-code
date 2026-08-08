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
    if (record.type === "StringLiteral" || (record.type === "Literal" && typeof record.value === "string"))
      tokens.push(`str:${String(record.value)}`)
    else if (record.type === "NumericLiteral" || (record.type === "Literal" && typeof record.value === "number"))
      tokens.push(`num:${String(record.value)}`)
    else if (record.type === "BooleanLiteral" || (record.type === "Literal" && typeof record.value === "boolean"))
      tokens.push(`bool:${String(record.value)}`)
    else if (record.type === "NullLiteral" || (record.type === "Literal" && record.value === null)) tokens.push("null")
    else if (record.type === "RegExpLiteral") tokens.push(`re:${String(record.pattern)}/${String(record.flags)}`)
  }

  for (const key of Object.keys(record).sort()) {
    if (key === "type" || IGNORED_KEYS.has(key)) continue
    tokens.push(key)
    visit(record[key], tokens)
  }
}

export function structuralJavaScriptHash(source: string): StructuralJavaScriptHash {
  const ast = parseSync("structural-hash.js", source, {
    astType: "js",
    lang: "js",
    preserveParens: true,
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
