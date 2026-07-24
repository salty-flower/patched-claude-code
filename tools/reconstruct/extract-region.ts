#!/usr/bin/env bun
// Extract a self-contained slice bundle for one v88 source path.
//
// Inputs (resolved from PATCHED_CC_ROOT or repo root):
//   reference/v2.1.88/cli.js
//   reference/v2.1.88/cli.js.map
//   reference/v2.1.88/sources/<src_path>     (truth for v88)
//   staging/<v112_version>/cli.js            (target; default 2.1.112)
//
// For a given v88 source path:
//   1. Decode the v88 sourcemap, find every (gen_line, gen_col) sourced from
//      that path; convert to absolute byte offsets in cli.js.
//   2. Cluster offsets into spans (gap threshold = 2 KB by default).
//   3. For each span, locate the enclosing v88 top-level decl by AST parse.
//   4. Fingerprint that decl, find best match in v112 by Jaccard×cosine.
//   5. Emit a slice bundle:
//        <out>/<src_path>/v88_src.<ext>
//        <out>/<src_path>/v88_min.js
//        <out>/<src_path>/v112_min.js
//        <out>/<src_path>/region.json
//
// AST parses for v88 and v112 are cached in-memory across calls within a
// single run, so batch invocation is cheap.
//
// Usage:
//   bun run tools/reconstruct/extract-region.ts <v88_src_path> [--out <dir>]
//   bun run tools/reconstruct/extract-region.ts --batch <v88_src_dir> [--out <dir>]
//   bun run tools/reconstruct/extract-region.ts --list <v88_src_dir>
//
// Exit non-zero only on hard failures (missing files, parse errors). A source
// path with no matching gen positions or no v112 match produces region.json
// with status="unmatched" and an empty slice; the run continues.

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from "node:fs"
import { extname, join } from "node:path"
import * as parser from "@babel/parser"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")
const V88_CLI = join(ROOT, "reference/v2.1.88/cli.js")
const V88_MAP = join(ROOT, "reference/v2.1.88/cli.js.map")
const V88_SRC_ROOT = join(ROOT, "reference/v2.1.88/sources")
const V112_VERSION = process.env.PATCHED_CC_TARGET_VERSION ?? "2.1.112"
const V112_CLI = join(ROOT, "staging", V112_VERSION, "cli.js")

const SPAN_GAP_BYTES = Number(process.env.PATCHED_CC_SPAN_GAP ?? 2048)

// ---- VLQ decoder ----
const B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
const B64_INDEX: Record<string, number> = {}
for (let i = 0; i < B64.length; i++) B64_INDEX[B64[i]] = i

function decodeVlq(s: string, idx: number): [number, number] {
  let result = 0,
    shift = 0
  while (true) {
    const digit = B64_INDEX[s[idx]]
    idx++
    const cont = digit & 0x20
    result |= (digit & 0x1f) << shift
    shift += 5
    if (!cont) break
  }
  const sign = result & 1
  const value = result >>> 1
  return [sign ? -value : value, idx]
}

type GenPos = { line: number; col: number }

// Decode the entire mappings string ONCE and bucket positions by source index.
// O(total_segments) instead of O(N_files × total_segments).
function decodeMappingsAll(mappings: string): Map<number, GenPos[]> {
  const buckets = new Map<number, GenPos[]>()
  let srcIdx = 0,
    srcLine = 0,
    srcCol = 0,
    nameIdx = 0
  const lines = mappings.split(";")
  for (let gl = 0; gl < lines.length; gl++) {
    const line = lines[gl]
    if (!line) continue
    let gc = 0
    for (const seg of line.split(",")) {
      if (!seg) continue
      let i = 0
      let d: number
      ;[d, i] = decodeVlq(seg, i)
      gc += d
      if (i >= seg.length) continue
      ;[d, i] = decodeVlq(seg, i)
      srcIdx += d
      ;[d, i] = decodeVlq(seg, i)
      srcLine += d
      ;[d, i] = decodeVlq(seg, i)
      srcCol += d
      if (i < seg.length) {
        ;[d, i] = decodeVlq(seg, i)
        nameIdx += d
      }
      let arr = buckets.get(srcIdx)
      if (!arr) {
        arr = []
        buckets.set(srcIdx, arr)
      }
      arr.push({ line: gl, col: gc })
    }
  }
  return buckets
}

// ---- gen position → absolute byte offset ----
function buildLineOffsets(body: string): number[] {
  const offs = [0]
  for (let i = 0; i < body.length; i++) {
    if (body.charCodeAt(i) === 10) offs.push(i + 1)
  }
  return offs
}

// ---- top-level decl extraction ----
type Decl = {
  start: number
  end: number
  kind: string
  arity: number
  nodeCounts: Record<string, number>
  lits: Set<string>
}

function isHumanish(s: string): boolean {
  if (s.length < 4 || s.length > 400) return false
  if (s.includes("${")) return false
  let letters = 0
  for (const c of s) if (/[A-Za-z]/.test(c)) letters++
  return letters / s.length >= 0.5
}

function isUsefulIdent(s: string): boolean {
  if (s.length < 4 || s.length > 80) return false
  // skip minified-shape ids: short, all-lowercase, single-letter-then-digits
  if (/^[a-z]{1,2}\d*$/.test(s)) return false
  // require at least one letter in non-lowercase OR underscore (camelCase / snake_case markers)
  return /[A-Z_]/.test(s) || s.length >= 6
}

function fingerprintNode(node: any): {
  kind: string
  arity: number
  nodeCounts: Record<string, number>
  lits: Set<string>
} {
  const counts: Record<string, number> = {}
  const lits = new Set<string>()
  function walk(n: any, parentKey?: string) {
    if (!n || typeof n !== "object") return
    if (Array.isArray(n)) {
      for (const x of n) walk(x, parentKey)
      return
    }
    if (typeof n.type === "string") {
      counts[n.type] = (counts[n.type] ?? 0) + 1
      if (n.type === "StringLiteral" && typeof n.value === "string" && isHumanish(n.value)) lits.add(n.value)
      if (n.type === "TemplateElement" && n.value && typeof n.value.cooked === "string" && isHumanish(n.value.cooked))
        lits.add(n.value.cooked)
      // Property names on MemberExpression (.foo) and ObjectProperty / ObjectMethod
      // ({foo: ...}) survive minification (Bun preserves observable property
      // names by default). Capture them — they distinguish renames like
      // setAppState → setToolPermissionContext.
      if (n.type === "Identifier" && typeof n.name === "string" && isUsefulIdent(n.name)) {
        if (parentKey === "property" || parentKey === "key") lits.add("@" + n.name)
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
      )
        continue
      walk(n[k], k)
    }
  }
  walk(node)
  let arity = 0
  if (Array.isArray(node.params)) arity = node.params.length
  return { kind: node.type, arity, nodeCounts: counts, lits }
}

function topLevelDecls(src: string, label: string): Decl[] {
  console.error(`parsing ${label} (${(src.length / 1024 / 1024).toFixed(1)} MiB)…`)
  const ast = parser.parse(src, {
    sourceType: "script",
    errorRecovery: true,
    allowReturnOutsideFunction: true,
    plugins: ["jsx", "typescript"],
  })
  const decls: Decl[] = []
  for (const s of ast.program.body) {
    if (s.start == null || s.end == null) continue
    if (
      s.type === "FunctionDeclaration" ||
      s.type === "ClassDeclaration" ||
      s.type === "VariableDeclaration" ||
      s.type === "ExpressionStatement"
    ) {
      const fp = fingerprintNode(s)
      decls.push({ start: s.start, end: s.end, ...fp })
    }
  }
  console.error(`  top-level decls: ${decls.length}, parse errors: ${ast.errors?.length ?? 0}`)
  return decls
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0
  let inter = 0
  for (const x of a) if (b.has(x)) inter++
  return inter / (a.size + b.size - inter)
}

function cosine(a: Record<string, number>, b: Record<string, number>): number {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)])
  let dot = 0,
    na = 0,
    nb = 0
  for (const k of keys) {
    const x = a[k] ?? 0,
      y = b[k] ?? 0
    dot += x * y
    na += x * x
    nb += y * y
  }
  return dot === 0 ? 0 : dot / Math.sqrt(na * nb)
}

function bestV112Match(
  target: Decl,
  pool: Decl[],
  litIndex?: Map<string, number[]>,
): { idx: number; jac: number; cos: number } {
  let best = { idx: -1, jac: 0, cos: 0 }
  // candidate gating: if target has any literals, only consider v112 decls
  // that share at least one of them. Cuts the pool from ~18k to typically <100.
  let candidates: Iterable<number>
  if (litIndex && target.lits.size > 0) {
    const set = new Set<number>()
    for (const lit of target.lits) {
      const arr = litIndex.get(lit)
      if (arr) for (const i of arr) set.add(i)
    }
    candidates = set
  } else {
    candidates = (function* () {
      for (let i = 0; i < pool.length; i++) yield i
    })()
  }
  for (const i of candidates) {
    const p = pool[i]
    if (p.kind !== target.kind) continue
    const j = jaccard(target.lits, p.lits)
    if (j < 0.4) continue
    const c = cosine(target.nodeCounts, p.nodeCounts)
    if (j * c > best.jac * best.cos) best = { idx: i, jac: j, cos: c }
  }
  return best
}

// ---- module-level cache ----
let _v88Body: string | null = null
let _v112Body: string | null = null
let _v88Decls: Decl[] | null = null
let _v112Decls: Decl[] | null = null
let _v88LineOffs: number[] | null = null
let _v88Map: any = null
let _v88MapBuckets: Map<number, GenPos[]> | null = null
// v112 decl literal index — for each humanish literal, list of v112 decl indices
// containing that literal. Used to narrow best-match candidate set.
let _v112LitIndex: Map<string, number[]> | null = null

function v88Body(): string {
  return (_v88Body ??= readFileSync(V88_CLI, "utf8"))
}
function v112Body(): string {
  return (_v112Body ??= readFileSync(V112_CLI, "utf8"))
}
function v88Decls(): Decl[] {
  return (_v88Decls ??= topLevelDecls(v88Body(), "v2.1.88"))
}
function v112Decls(): Decl[] {
  return (_v112Decls ??= topLevelDecls(v112Body(), `v${V112_VERSION}`))
}
function v88LineOffs(): number[] {
  return (_v88LineOffs ??= buildLineOffsets(v88Body()))
}
function v88Map(): any {
  return (_v88Map ??= JSON.parse(readFileSync(V88_MAP, "utf8")))
}

function v88MapBuckets(): Map<number, GenPos[]> {
  if (_v88MapBuckets) return _v88MapBuckets
  const t0 = Date.now()
  console.error("decoding v88 sourcemap mappings (one-time)…")
  _v88MapBuckets = decodeMappingsAll(v88Map().mappings)
  console.error(`  ${_v88MapBuckets.size} sources indexed in ${((Date.now() - t0) / 1000).toFixed(1)}s`)
  return _v88MapBuckets
}

function v112LitIndex(): Map<string, number[]> {
  if (_v112LitIndex) return _v112LitIndex
  const t0 = Date.now()
  console.error("indexing v112 decls by literal (one-time)…")
  _v112LitIndex = new Map()
  const decls = v112Decls()
  for (let i = 0; i < decls.length; i++) {
    for (const lit of decls[i].lits) {
      let arr = _v112LitIndex.get(lit)
      if (!arr) {
        arr = []
        _v112LitIndex.set(lit, arr)
      }
      arr.push(i)
    }
  }
  console.error(`  ${_v112LitIndex.size} unique literals indexed in ${((Date.now() - t0) / 1000).toFixed(1)}s`)
  return _v112LitIndex
}

// ---- core extract logic ----
type Region = {
  src_path: string
  status: "ok" | "no-mapping" | "no-v88-decl" | "no-v112-match"
  v88_spans: { gen_offset: [number, number] }[]
  v88_decls: { start: number; end: number; jac?: number; cos?: number; v112_decl?: { start: number; end: number } }[]
  notes: string[]
}

function extract(srcPath: string, outRoot: string): Region {
  const region: Region = { src_path: srcPath, status: "ok", v88_spans: [], v88_decls: [], notes: [] }

  // 1. find src_idx in sourcemap
  const sm = v88Map()
  const sources: string[] = sm.sources
  // sourcemap source paths are like "src/tools/X/Y.tsx" — match suffix.
  const srcIdx = sources.findIndex((s) => s === srcPath || s.endsWith("/" + srcPath))
  if (srcIdx < 0) {
    region.status = "no-mapping"
    region.notes.push(`source path not in sourcemap.sources (looked for ${srcPath})`)
    return region
  }

  // 2. fetch positions from pre-decoded buckets
  const positions = v88MapBuckets().get(srcIdx) ?? []
  if (positions.length === 0) {
    region.status = "no-mapping"
    region.notes.push(`source idx ${srcIdx} has zero mappings`)
    return region
  }

  // 3. convert to absolute offsets and sort
  const offs = v88LineOffs()
  const absOffsets = positions.map((p) => offs[p.line] + p.col).sort((a, b) => a - b)

  // 4. cluster into spans (gap > SPAN_GAP_BYTES splits)
  const spans: { start: number; end: number }[] = []
  let cur = { start: absOffsets[0], end: absOffsets[0] + 1 }
  for (let i = 1; i < absOffsets.length; i++) {
    if (absOffsets[i] - cur.end > SPAN_GAP_BYTES) {
      spans.push(cur)
      cur = { start: absOffsets[i], end: absOffsets[i] + 1 }
    } else {
      cur.end = absOffsets[i] + 1
    }
  }
  spans.push(cur)
  region.v88_spans = spans.map((s) => ({ gen_offset: [s.start, s.end] }))

  // 5. find enclosing v88 top-level decls for each span
  const v88d = v88Decls()
  const matchedV88: Decl[] = []
  for (const s of spans) {
    // find any v88 decl whose [start,end] overlaps [s.start, s.end]
    for (const d of v88d) {
      if (d.start <= s.end && d.end >= s.start) {
        if (!matchedV88.includes(d)) matchedV88.push(d)
      }
    }
  }
  if (matchedV88.length === 0) {
    region.status = "no-v88-decl"
    region.notes.push(`spans don't overlap any v88 top-level decl (spans=${spans.length})`)
    return region
  }

  // 6. for each v88 decl, find best v112 match (gated by shared literals)
  const v112d = v112Decls()
  const litIdx = v112LitIndex()
  const v88MinChunks: string[] = []
  const v112MinChunks: string[] = []
  for (const d of matchedV88) {
    const m = bestV112Match(d, v112d, litIdx)
    const entry: Region["v88_decls"][number] = { start: d.start, end: d.end }
    v88MinChunks.push(v88Body().slice(d.start, d.end))
    if (m.idx >= 0) {
      entry.jac = +m.jac.toFixed(3)
      entry.cos = +m.cos.toFixed(3)
      entry.v112_decl = { start: v112d[m.idx].start, end: v112d[m.idx].end }
      v112MinChunks.push(v112Body().slice(v112d[m.idx].start, v112d[m.idx].end))
    } else {
      region.notes.push(`v88 decl [${d.start},${d.end}] has no v112 match`)
    }
    region.v88_decls.push(entry)
  }
  if (v112MinChunks.length === 0) {
    region.status = "no-v112-match"
  }

  // 7. write outputs
  const outDir = join(outRoot, srcPath)
  mkdirSync(outDir, { recursive: true })

  // v88 src — copy from disk
  const fullSrcPath = join(V88_SRC_ROOT, srcPath)
  if (existsSync(fullSrcPath)) {
    const ext = extname(srcPath) || ".ts"
    writeFileSync(join(outDir, "v88_src" + ext), readFileSync(fullSrcPath, "utf8"))
  } else {
    region.notes.push(`v88 source file not on disk: ${fullSrcPath}`)
  }

  writeFileSync(join(outDir, "v88_min.js"), v88MinChunks.join("\n\n/* --- decl boundary --- */\n\n"))
  writeFileSync(join(outDir, "v112_min.js"), v112MinChunks.join("\n\n/* --- decl boundary --- */\n\n"))
  writeFileSync(join(outDir, "region.json"), JSON.stringify(region, null, 2))
  return region
}

// ---- batch / list mode ----
function listFiles(dirAbs: string, baseRel: string): string[] {
  const out: string[] = []
  for (const entry of readdirSync(dirAbs)) {
    const p = join(dirAbs, entry)
    const st = statSync(p)
    if (st.isDirectory()) {
      out.push(...listFiles(p, join(baseRel, entry)))
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry)) {
      out.push(join(baseRel, entry))
    }
  }
  return out
}

function main(): number {
  const argv = process.argv.slice(2)
  let mode: "single" | "batch" | "list" = "single"
  let arg = ""
  let outDir = process.env.PATCHED_CC_EXTRACT_OUT ?? join(ROOT, "extracted", V112_VERSION)
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === "--batch") {
      mode = "batch"
      arg = argv[++i]
    } else if (a === "--list") {
      mode = "list"
      arg = argv[++i]
    } else if (a === "--out") {
      outDir = argv[++i]
    } else if (!arg) {
      arg = a
    }
  }
  if (!arg) {
    console.error("usage: bun run tools/extract-region.ts <v88_src_path>")
    console.error("       bun run tools/extract-region.ts --batch <v88_src_dir> [--out <dir>]")
    console.error("       bun run tools/extract-region.ts --list <v88_src_dir>")
    return 2
  }

  if (mode === "list") {
    const dirAbs = join(V88_SRC_ROOT, arg)
    if (!existsSync(dirAbs)) {
      console.error(`dir not found: ${dirAbs}`)
      return 1
    }
    for (const f of listFiles(dirAbs, arg)) console.log(f)
    return 0
  }

  if (mode === "batch") {
    const dirAbs = join(V88_SRC_ROOT, arg)
    if (!existsSync(dirAbs)) {
      console.error(`dir not found: ${dirAbs}`)
      return 1
    }
    const files = listFiles(dirAbs, arg)
    console.error(`batch: ${files.length} files in ${arg}`)
    let ok = 0,
      miss = 0
    for (const f of files) {
      const r = extract(f, outDir)
      if (r.status === "ok") ok++
      else miss++
      console.log(`[${r.status}] ${f}`)
    }
    console.error(`done: ${ok} ok, ${miss} other (no-mapping / no-v88-decl / no-v112-match)`)
    return 0
  }

  const r = extract(arg, outDir)
  console.log(JSON.stringify(r, null, 2))
  return r.status === "ok" ? 0 : 1
}

process.exit(main())
