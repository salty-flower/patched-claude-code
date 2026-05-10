#!/usr/bin/env bun
// Chunk drifted + partial v112 files into subagent-sized work units.
//
// Reads extracted/<v112>/manifest.json. Produces a list of chunks where each
// chunk is a list of v88 source paths whose total v88_src + v88_min + v112_min
// byte budget stays under --cap (default 250 KiB).
//
// Each chunk groups files from the same nearest dir prefix when possible to
// keep the subagent's mental context coherent.
//
// Output (printed to stdout, one chunk per line as JSON):
//   {"id": 0, "dir": "src/tools", "files": [...], "size_bytes": 123456, "n_files": 7}
//
// Usage:
//   bun run tools/chunk-work.ts                               # all drifted+partial
//   bun run tools/chunk-work.ts --bucket drifted              # one bucket
//   bun run tools/chunk-work.ts --prefix src/tools/           # only this prefix
//   bun run tools/chunk-work.ts --cap 200000                  # byte cap per chunk
//   bun run tools/chunk-work.ts --out chunks.json             # write file
//   bun run tools/chunk-work.ts --max-chunks 8                # produce only first N

import { readFileSync, writeFileSync, statSync } from "node:fs"
import { join, dirname } from "node:path"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")
const V112 = process.env.PATCHED_CC_TARGET_VERSION ?? "2.1.112"
const EXTRACTED = join(ROOT, "extracted", V112)
const V88_SRC = join(ROOT, "reference/v2.1.88/sources")

type Args = {
  buckets: string[]
  prefix: string
  cap: number
  out?: string
  maxChunks?: number
}

function parseArgs(argv: string[]): Args {
  const out: Args = { buckets: ["drifted", "partial"], prefix: "", cap: 250000 }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === "--bucket") out.buckets = [argv[++i]]
    else if (a === "--prefix") out.prefix = argv[++i]
    else if (a === "--cap") out.cap = Number(argv[++i])
    else if (a === "--out") out.out = argv[++i]
    else if (a === "--max-chunks") out.maxChunks = Number(argv[++i])
  }
  return out
}

function fileSize(p: string): number {
  try {
    return statSync(p).size
  } catch {
    return 0
  }
}

function totalBytes(srcPath: string): number {
  const v88Src = fileSize(join(V88_SRC, srcPath))
  const slice = join(EXTRACTED, srcPath)
  const v88Min = fileSize(join(slice, "v88_min.js"))
  const v112Min = fileSize(join(slice, "v112_min.js"))
  return v88Src + v88Min + v112Min
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const manifest = JSON.parse(readFileSync(join(EXTRACTED, "manifest.json"), "utf8"))
  const paths: string[] = []
  for (const b of args.buckets) {
    const items = manifest[b] ?? []
    for (const it of items) {
      const p = typeof it === "string" ? it : it.path
      if (!args.prefix || p.startsWith(args.prefix)) paths.push(p)
    }
  }
  // sort by full path — naturally groups by dir prefix
  paths.sort()

  // common dir of two POSIX dirname strings, snapped to last "/"
  function commonDir(a: string, b: string): string {
    if (!a) return b
    let i = 0
    while (i < a.length && i < b.length && a[i] === b[i]) i++
    if (i === a.length && i === b.length) return a // identical
    const prefix = a.slice(0, i)
    const j = prefix.lastIndexOf("/")
    return j >= 0 ? prefix.slice(0, j) : prefix
  }

  type Chunk = { id: number; dir: string; files: string[]; size_bytes: number; n_files: number; oversize?: boolean }
  const chunks: Chunk[] = []
  let cur: { dir: string; files: string[]; size: number } = { dir: "", files: [], size: 0 }

  function flush() {
    if (cur.files.length > 0) {
      chunks.push({
        id: chunks.length,
        dir: cur.dir,
        files: cur.files,
        size_bytes: cur.size,
        n_files: cur.files.length,
      })
      cur = { dir: "", files: [], size: 0 }
    }
  }

  for (const p of paths) {
    const sz = totalBytes(p)
    if (sz > args.cap) {
      // oversize: dedicated singleton chunk so a subagent gets the whole budget
      flush()
      chunks.push({ id: chunks.length, dir: dirname(p), files: [p], size_bytes: sz, n_files: 1, oversize: true })
      continue
    }
    if (cur.size + sz > args.cap) flush()
    if (cur.files.length === 0) cur.dir = dirname(p)
    else cur.dir = commonDir(cur.dir, dirname(p))
    cur.files.push(p)
    cur.size += sz
  }
  flush()

  const limited = args.maxChunks ? chunks.slice(0, args.maxChunks) : chunks

  if (args.out) {
    writeFileSync(args.out, JSON.stringify({ total_chunks: chunks.length, chunks: limited }, null, 2))
    console.error(`wrote ${args.out}: ${limited.length}/${chunks.length} chunks (${paths.length} files total)`)
  } else {
    console.error(`${limited.length}/${chunks.length} chunks, ${paths.length} files, cap=${args.cap}`)
    for (const c of limited) {
      const tag = c.oversize ? "OVERSIZE" : "        "
      console.log(
        `#${c.id.toString().padStart(3, "0")} ${tag} ${c.dir.padEnd(40)} ${c.n_files.toString().padStart(3)} files  ${(c.size_bytes / 1024).toFixed(0)} KiB`,
      )
    }
  }
  return 0
}

process.exit(main())
