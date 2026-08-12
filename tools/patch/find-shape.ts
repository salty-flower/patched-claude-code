#!/usr/bin/env bun
// Find the minified equivalent of a version-local code pattern in a target
// bundle, so a version-capped patch variant can be re-anchored.
//
// A minified pattern like
//   let q=B.recurring?jdn(B.cron,B.lastFiredAt??B.createdAt,B.id,Y):Sxo(B.cron,B.createdAt,B.id,Y);
// is turned into a shape regex where every variable/function identifier
// becomes a wildcard, while member property names, object keys, strings, and
// numbers stay literal. The bundle is scanned with that regex and each match
// is printed with context plus the containing statement, so the operator can
// confirm the site and copy out the version-local identifiers.
//
// Usage:
//   bun run tools/patch/find-shape.ts --bundle staging/2.1.228/cli.js --pattern '<code>' [--max N]
//   bun run tools/patch/find-shape.ts --bundle staging/2.1.228/cli.js --literal '<text>' [--max N]

import { readFileSync } from "node:fs"
import * as parser from "@babel/parser"

const IGNORED_KEYS = new Set([
  "comments", "end", "extra", "innerComments", "leadingComments", "loc",
  "range", "start", "trailingComments",
])

function parsePattern(pattern: string): parser.ParseResult<any> {
  for (const wrapped of [pattern, `(${pattern})`]) {
    try {
      return parser.parse(wrapped, {
        allowReturnOutsideFunction: true,
        errorRecovery: true,
        plugins: ["jsx", "typescript"],
        sourceType: "script",
      })
    } catch {
      // try the next wrapper
    }
  }
  throw new Error(`cannot parse pattern: ${pattern.slice(0, 80)}`)
}

// Collect identifier spans in the pattern that must stay literal: member
// property names, object keys, shorthand property names, and property
// definition keys. Everything else identifier-shaped is a wildcard.
function literalIdentifierSpans(pattern: string): Array<{ start: number; end: number }> {
  const ast = parsePattern(pattern)
  const spans: Array<{ start: number; end: number }> = []

  const visit = (node: unknown, parent: unknown): void => {
    if (!node || typeof node !== "object") return
    if (Array.isArray(node)) {
      for (const item of node) visit(item, node)
      return
    }
    const record = node as Record<string, unknown>
    if (typeof record.type !== "string") {
      for (const key of Object.keys(record)) visit(record[key], node)
      return
    }

    if (record.type === "Identifier" && typeof record.start === "number" && typeof record.end === "number") {
      const p = parent as Record<string, unknown> | null
      const parentType = p?.type
      if (parentType === "MemberExpression") {
        // keep only non-computed property names; the object expression is a wildcard
        if (p?.computed !== true && p?.property === node) spans.push({ start: record.start, end: record.end })
      } else if (parentType === "ObjectProperty" || parentType === "ObjectMethod" || parentType === "Property") {
        if (p?.key === node) spans.push({ start: record.start, end: record.end })
      } else if (parentType === "ObjectProperty" && p?.shorthand === true) {
        // shorthand `{q}` — both key and value; treat as literal
        spans.push({ start: record.start, end: record.end })
      }
    }

    for (const key of Object.keys(record)) {
      if (IGNORED_KEYS.has(key)) continue
      visit(record[key], node)
    }
  }

  visit(ast.program, null)
  return spans
}

function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function shapeRegexFor(pattern: string): RegExp {
  const literal = literalIdentifierSpans(pattern).sort((a, b) => a.start - b.start)
  const IDENT = "[A-Za-z_$][A-Za-z0-9_$]*"
  const placeholders: string[] = []
  let out = ""
  let cursor = 0
  let marker = 0
  for (const span of literal) {
    if (span.start > cursor) out += escapeRegex(pattern.slice(cursor, span.start))
    out += `${marker++}` // non-identifier-shaped placeholder, not wildcarded
    placeholders.push(pattern.slice(span.start, span.end))
    cursor = span.end
  }
  out += escapeRegex(pattern.slice(cursor))
  // wildcard every identifier-shaped run in the pattern text
  out = out.replace(/(?<![A-Za-z0-9_$])[A-Za-z_$][A-Za-z0-9_$]*(?![A-Za-z0-9_$])/g, IDENT)
  for (let i = 0; i < placeholders.length; i++) {
    out = out.replace(`${i}`, escapeRegex(placeholders[i]))
  }
  return new RegExp(out, "g")
}

function printMatch(bundle: string, start: number, end: number, index: number): void {
  const contextBefore = bundle.slice(Math.max(0, start - 160), start)
  const matched = bundle.slice(start, end)
  const contextAfter = bundle.slice(end, end + 160)
  console.log(`--- match ${index} at ${start} (len ${end - start}) ---`)
  console.log(`...${contextBefore}|MATCH|${matched}|MATCH|${contextAfter}...`)
  // containing statement, bounded by statement terminators
  const stmtStart = Math.max(bundle.lastIndexOf(";", start - 1), bundle.lastIndexOf("{", start - 1), bundle.lastIndexOf("}", start - 1)) + 1
  let stmtEnd = bundle.indexOf(";", end)
  if (stmtEnd < 0) stmtEnd = bundle.length
  console.log(`statement: ${bundle.slice(stmtStart, stmtEnd + 1)}`)
  console.log("")
}

function main(argv: string[]): void {
  let bundlePath = ""
  let pattern: string | undefined
  let literal: string | undefined
  let max = 5
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--bundle") bundlePath = argv[++i]
    else if (arg === "--pattern") pattern = argv[++i]
    else if (arg === "--literal") literal = argv[++i]
    else if (arg === "--max") max = Number(argv[++i])
  }
  if (!bundlePath || (!pattern && !literal)) {
    console.error("usage: find-shape.ts --bundle <cli.js> (--pattern <code> | --literal <text>) [--max N]")
    process.exit(2)
  }
  const bundle = readFileSync(bundlePath, "utf8")

  if (literal) {
    let found = 0
    let from = 0
    for (;;) {
      const at = bundle.indexOf(literal, from)
      if (at < 0) break
      printMatch(bundle, at, at + literal.length, found + 1)
      found += 1
      if (found >= max) break
      from = at + literal.length
    }
    if (found === 0) console.log("no literal occurrences found")
    return
  }

  const regex = shapeRegexFor(pattern!)
  let found = 0
  for (const match of bundle.matchAll(regex)) {
    printMatch(bundle, match.index!, match.index! + match[0].length, found + 1)
    found += 1
    if (found >= max) break
  }
  if (found === 0) {
    console.log("no shape matches found")
    console.log(`shape regex: ${regex}`)
  }
}

main(process.argv.slice(2))
