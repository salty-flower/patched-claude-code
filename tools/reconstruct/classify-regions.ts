#!/usr/bin/env bun
// Walk extracted/<v112>/<src_path>/region.json files and bucket each source
// path by alignment quality:
//
//   identical:  every v88 decl matched a v112 decl with jac=1 and cos=1
//   drifted:    at least one matched decl has jac<1 or cos<1
//   partial:    some v88 decls have no v112 match (split/removed)
//   unmatched:  region.status != "ok" (no sourcemap entry, no v88 decl,
//               nothing in v112)
//
// Optionally, copy all "identical" files from reference/v2.1.88/sources/ to
// reconstructed/<v112>/ verbatim. They need no LLM work.
//
// Usage:
//   bun run tools/classify-regions.ts [--copy-identical] [--summary]

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, copyFileSync } from "node:fs"
import { join, dirname } from "node:path"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")
const V112 = process.env.AUDITED_CC_TARGET_VERSION ?? "2.1.112"
const EXTRACTED = join(ROOT, "extracted", V112)
const V88_SRC = join(ROOT, "reference/v2.1.88/sources")
const RECONSTRUCTED = join(ROOT, "reconstructed", `v${V112}`)

type Region = {
  src_path: string
  status: string
  v88_decls: { start: number; end: number; jac?: number; cos?: number; v112_decl?: any }[]
  notes: string[]
}

function walk(dir: string, out: string[]) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, out)
    else if (e === "region.json") out.push(p)
  }
}

// Byte-weighted classification. A 39-byte stub decl that fails to match
// shouldn't drag a 9 KiB module into "partial" — what matters is whether the
// dominant byte mass is verbatim.
function classify(r: Region): "identical" | "drifted" | "partial" | "unmatched" {
  if (r.status !== "ok") return "unmatched"
  if (r.v88_decls.length === 0) return "unmatched"
  let total = 0,
    matched = 0,
    perfect = 0,
    drifted = 0
  let worstJac = 1,
    worstCos = 1
  for (const d of r.v88_decls) {
    const size = Math.max(1, d.end - d.start)
    total += size
    if (!d.v112_decl) continue
    matched += size
    const j = d.jac ?? 0,
      c = d.cos ?? 0
    if (j >= 0.999 && c >= 0.999) perfect += size
    else {
      drifted += size
      if (j < worstJac) worstJac = j
      if (c < worstCos) worstCos = c
    }
  }
  const matchedFrac = matched / total
  const perfectFrac = perfect / total
  if (matchedFrac >= 0.95 && perfectFrac >= 0.95) return "identical"
  if (matchedFrac >= 0.8 && worstJac >= 0.6) return "drifted"
  return "partial"
}

function main(): number {
  const argv = process.argv.slice(2)
  const copyIdentical = argv.includes("--copy-identical")
  const summary = argv.includes("--summary") || !copyIdentical

  if (!existsSync(EXTRACTED)) {
    console.error(`extracted dir missing: ${EXTRACTED}`)
    console.error(`run: bun run tools/extract-region.ts --batch src`)
    return 1
  }

  const regions: string[] = []
  walk(EXTRACTED, regions)
  console.error(`found ${regions.length} region.json files`)

  const buckets: Record<string, Region[]> = { identical: [], drifted: [], partial: [], unmatched: [] }
  for (const f of regions) {
    const r = JSON.parse(readFileSync(f, "utf8")) as Region
    buckets[classify(r)].push(r)
  }

  if (summary) {
    console.log(`identical: ${buckets.identical.length}`)
    console.log(`drifted:   ${buckets.drifted.length}`)
    console.log(`partial:   ${buckets.partial.length}`)
    console.log(`unmatched: ${buckets.unmatched.length}`)
    console.log(`total:     ${regions.length}`)
  }

  // write manifest with each bucket's files
  const manifest = {
    extracted_root: EXTRACTED,
    counts: Object.fromEntries(Object.entries(buckets).map(([k, v]) => [k, v.length])),
    identical: buckets.identical.map((r) => r.src_path),
    drifted: buckets.drifted.map((r) => ({
      path: r.src_path,
      decls: r.v88_decls.length,
      worst_jac: Math.min(...r.v88_decls.map((d) => d.jac ?? 0)),
      worst_cos: Math.min(...r.v88_decls.map((d) => d.cos ?? 0)),
    })),
    partial: buckets.partial.map((r) => ({
      path: r.src_path,
      total_decls: r.v88_decls.length,
      unmatched_decls: r.v88_decls.filter((d) => !d.v112_decl).length,
      notes: r.notes,
    })),
    unmatched: buckets.unmatched.map((r) => ({
      path: r.src_path,
      status: r.status,
      notes: r.notes,
    })),
  }
  writeFileSync(join(EXTRACTED, "manifest.json"), JSON.stringify(manifest, null, 2))
  console.error(`wrote manifest: ${join(EXTRACTED, "manifest.json")}`)

  if (copyIdentical) {
    let copied = 0,
      missing = 0
    for (const r of buckets.identical) {
      const srcAbs = join(V88_SRC, r.src_path)
      const dstAbs = join(RECONSTRUCTED, r.src_path)
      if (!existsSync(srcAbs)) {
        missing++
        continue
      }
      mkdirSync(dirname(dstAbs), { recursive: true })
      copyFileSync(srcAbs, dstAbs)
      copied++
    }
    console.error(`copied ${copied} identical files to ${RECONSTRUCTED}, ${missing} missing on disk`)
  }

  return 0
}

process.exit(main())
