#!/usr/bin/env bun
// Report function-level alignment coverage for a target bundle against a
// reference minified bundle.
//
// The original POC used this to validate v2.1.112 against v2.1.88. Keep this
// as the maintained drift check for future reference-version decisions.
//
// Fingerprint per top-level decl:
//   - kind (Function/Var/Class/...)
//   - count of nested AST nodes by type (FunctionExpression, ArrowFunction,
//     CallExpression, MemberExpression, IfStatement, ReturnStatement, ...)
//   - bag of *human-authored* string literals (StringLiteral, length>=4,
//     letter-density>=0.5 — drops minified-id template tails)
//   - param arity for fn declarations
//
// Identifiers are deliberately excluded — they get reminified per release.
//
// Match strategy: for each v112 decl, build candidate set in v88 by literal
// bag intersection (Jaccard >= 0.6). Among candidates, pick the one with
// closest AST-node-count vector (cosine sim). Report match-rate buckets.

import * as parser from "@babel/parser"
import { existsSync, readFileSync } from "node:fs"
import { basename, join } from "node:path"

type Fp = {
  kind: string
  arity: number
  nodeCounts: Record<string, number>
  lits: Set<string>
  loc: { line: number; col: number }
  size: number
}

type Args = {
  reference: string
  target: string
  referenceLabel: string
  targetLabel: string
}

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")

function parseArgs(argv: string[]): Args {
  const args: Args = {
    reference: join(ROOT, "reference/v2.1.88/cli.js"),
    target: process.env.AUDITED_CC_TARGET ?? join(ROOT, "staging/2.1.133/cli.js"),
    referenceLabel: "v2.1.88",
    targetLabel: process.env.AUDITED_CC_TARGET_VERSION ?? "target",
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--reference") {
      args.reference = argv[++i]
    } else if (arg === "--target") {
      args.target = argv[++i]
    } else if (arg === "--reference-label") {
      args.referenceLabel = argv[++i]
    } else if (arg === "--target-label") {
      args.targetLabel = argv[++i]
    } else if (arg === "--help" || arg === "-h") {
      console.log(
        "usage: bun run tools/reconstruct/alignment-report.ts [--target <cli.js>] [--reference <cli.js>] [--target-label <label>] [--reference-label <label>]",
      )
      process.exit(0)
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }
  return args
}

function isHumanish(s: string): boolean {
  if (s.length < 4 || s.length > 400) return false
  if (s.includes("${")) return false
  let letters = 0
  for (const c of s) if (/[A-Za-z]/.test(c)) letters++
  return letters / s.length >= 0.5
}

function fingerprintAt(node: any, src: string): Fp {
  const counts: Record<string, number> = {}
  const lits = new Set<string>()
  let arity = 0

  function walk(n: any) {
    if (!n || typeof n !== "object") return
    if (Array.isArray(n)) {
      for (const x of n) walk(x)
      return
    }
    if (typeof n.type === "string") {
      counts[n.type] = (counts[n.type] ?? 0) + 1
      if (n.type === "StringLiteral" && typeof n.value === "string" && isHumanish(n.value)) {
        lits.add(n.value)
      }
      if (n.type === "TemplateElement" && n.value && typeof n.value.cooked === "string" && isHumanish(n.value.cooked)) {
        lits.add(n.value.cooked)
      }
    }
    for (const k of Object.keys(n)) {
      if (
        k === "loc" ||
        k === "range" ||
        k === "leadingComments" ||
        k === "trailingComments" ||
        k === "comments" ||
        k === "tokens"
      ) {
        continue
      }
      walk((n as any)[k])
    }
  }

  if (node.params && Array.isArray(node.params)) arity = node.params.length
  walk(node)

  return {
    kind: node.type,
    arity,
    nodeCounts: counts,
    lits,
    loc: { line: node.loc?.start?.line ?? -1, col: node.loc?.start?.column ?? -1 },
    size: (node.end ?? 0) - (node.start ?? 0),
  }
}

function topLevelFingerprints(src: string, label: string): Fp[] {
  console.error(`parsing ${label}...`)
  const ast = parser.parse(src, {
    sourceType: "script",
    errorRecovery: true,
    allowReturnOutsideFunction: true,
    plugins: ["jsx", "typescript"],
  })
  console.error(`  parse ok: ${ast.errors?.length ?? 0} recovered errors`)
  const moduleBody = unwrapCompiledModuleBody(ast.program.body)
  const out: Fp[] = []
  for (const s of moduleBody) {
    if (s.type === "FunctionDeclaration" || s.type === "ClassDeclaration" || s.type === "VariableDeclaration") {
      out.push(fingerprintAt(s, src))
    } else if (s.type === "ExpressionStatement") {
      // bundle-level wrappers: var X = function(){...} commas etc; treat as a unit
      out.push(fingerprintAt(s, src))
    }
  }
  console.error(`  top-level decls: ${out.length}`)
  return out
}

function unwrapCompiledModuleBody(body: any[]): any[] {
  if (body.length !== 1) return body
  const only = body[0]
  const expression = only?.type === "ExpressionStatement" ? only.expression : undefined
  const wrapper = expression?.type === "CallExpression" ? expression.callee : expression
  if (wrapper?.type !== "FunctionExpression" && wrapper?.type !== "ArrowFunctionExpression") return body
  return wrapper.body?.type === "BlockStatement" && Array.isArray(wrapper.body.body) ? wrapper.body.body : body
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0
  let inter = 0
  for (const x of a) if (b.has(x)) inter++
  return inter / (a.size + b.size - inter)
}

function cosine(a: Record<string, number>, b: Record<string, number>): number {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)])
  let dot = 0
  let na = 0
  let nb = 0
  for (const k of keys) {
    const x = a[k] ?? 0
    const y = b[k] ?? 0
    dot += x * y
    na += x * x
    nb += y * y
  }
  return dot === 0 ? 0 : dot / Math.sqrt(na * nb)
}

function bestMatch(target: Fp, pool: Fp[]): { jac: number; cos: number; idx: number } {
  let best = { jac: 0, cos: 0, idx: -1 }
  for (let i = 0; i < pool.length; i++) {
    const p = pool[i]
    if (!p || p.kind !== target.kind) continue
    const jac = jaccard(target.lits, p.lits)
    if (jac < 0.4) continue
    const cos = cosine(target.nodeCounts, p.nodeCounts)
    if (jac * cos > best.jac * best.cos) {
      best = { jac, cos, idx: i }
    }
  }
  return best
}

function requireFile(path: string, label: string): void {
  if (!existsSync(path)) throw new Error(`${label} bundle missing: ${path}`)
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  requireFile(args.reference, "reference")
  requireFile(args.target, "target")

  const referenceSrc = readFileSync(args.reference, "utf8")
  const targetSrc = readFileSync(args.target, "utf8")
  const reference = topLevelFingerprints(referenceSrc, args.referenceLabel)
  const target = topLevelFingerprints(targetSrc, args.targetLabel)

  console.error(`matching ${args.targetLabel} -> ${args.referenceLabel}...`)
  const buckets = { strong: 0, weak: 0, none: 0 }
  const sizeStrong: number[] = []
  const sizeNone: number[] = []
  for (const t of target) {
    const m = bestMatch(t, reference)
    if (m.idx < 0) {
      buckets.none++
      sizeNone.push(t.size)
    } else if (m.jac >= 0.7 && m.cos >= 0.85) {
      buckets.strong++
      sizeStrong.push(t.size)
    } else {
      buckets.weak++
    }
  }

  const total = target.length
  const totalSize = target.reduce((a, b) => a + b.size, 0)
  const sumStrong = sizeStrong.reduce((a, b) => a + b, 0)
  const sumNone = sizeNone.reduce((a, b) => a + b, 0)
  console.log(`reference: ${args.referenceLabel} (${basename(args.reference)})`)
  console.log(`target: ${args.targetLabel} (${basename(args.target)})`)
  console.log(`reference top-level: ${reference.length}`)
  console.log(`target top-level: ${target.length}`)
  console.log("")
  console.log(
    `strong match (jac>=0.7, cos>=0.85): ${buckets.strong}  (${((buckets.strong * 100) / total).toFixed(1)}%)`,
  )
  console.log(`weak match (jac>=0.4, lower cos):   ${buckets.weak}  (${((buckets.weak * 100) / total).toFixed(1)}%)`)
  console.log(`no match (jac<0.4):                 ${buckets.none}  (${((buckets.none * 100) / total).toFixed(1)}%)`)
  console.log("")
  console.log(
    `bytes covered by strong: ${(sumStrong / 1024 / 1024).toFixed(1)} MiB / ${(totalSize / 1024 / 1024).toFixed(1)} MiB (${((sumStrong * 100) / totalSize).toFixed(1)}%)`,
  )
  console.log(
    `bytes uncovered (no match): ${(sumNone / 1024 / 1024).toFixed(1)} MiB (${((sumNone * 100) / totalSize).toFixed(1)}%)`,
  )
  return 0
}

if (import.meta.main) {
  process.exit(main())
}
