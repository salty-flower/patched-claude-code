#!/usr/bin/env bun
// Extract files embedded by `bun build --compile`.
//
// Current Bun stores the standalone module graph as:
//   [payload bytes][Offsets extern struct][\n---- Bun! ----\n]
//
// On Mach-O/PE this payload lives in a section, so the trailer is not
// necessarily at EOF. We scan for valid trailer/offset pairs and extract the
// last valid graph.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"

const TRAILER = new TextEncoder().encode("\n---- Bun! ----\n")
const OFFSETS_SIZE = 32
const MODULE_SIZE = 52

export const BUN_STANDALONE_LAYOUT_CONTRACT = {
  name: "bun-standalone-module-graph-v1",
  trailer: "\\n---- Bun! ----\\n",
  offsetsSize: OFFSETS_SIZE,
  moduleRecordSize: MODULE_SIZE,
  layout: "[payload bytes][Offsets extern struct][trailer]",
  validation: [
    "scan for valid trailer/offset pairs instead of assuming EOF",
    "require module table length to be a multiple of moduleRecordSize",
    "require entrypointId to point inside the module table",
    "normalize and reject unsafe embedded paths before writing files",
  ],
} as const

export type EmbeddedFile = {
  path: string
  rawPath: string
  contents: Uint8Array
  isEntrypoint: boolean
  loader: number
  moduleFormat: number
  side: number
}

export type ExtractedStandalone = {
  files: EmbeddedFile[]
  byteCount: number
  payloadStart: number
  trailerOffset: number
  entrypointId: number
  flags: number
}

type Offsets = {
  byteCount: number
  modulesOffset: number
  modulesLength: number
  entrypointId: number
  argvOffset: number
  argvLength: number
  flags: number
  payloadStart: number
  trailerOffset: number
}

function findTrailerOffsets(bytes: Uint8Array): number[] {
  const offsets: number[] = []
  outer: for (let i = 0; i <= bytes.length - TRAILER.length; i++) {
    for (let j = 0; j < TRAILER.length; j++) {
      if (bytes[i + j] !== TRAILER[j]) continue outer
    }
    offsets.push(i)
  }
  return offsets
}

function parseOffsets(bytes: Uint8Array, trailerOffset: number): Offsets | null {
  if (trailerOffset < OFFSETS_SIZE) return null

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  const offsetsStart = trailerOffset - OFFSETS_SIZE
  const byteCount = Number(view.getBigUint64(offsetsStart, true))
  if (!Number.isSafeInteger(byteCount) || byteCount <= 0) return null

  const modulesOffset = view.getUint32(offsetsStart + 8, true)
  const modulesLength = view.getUint32(offsetsStart + 12, true)
  const entrypointId = view.getUint32(offsetsStart + 16, true)
  const argvOffset = view.getUint32(offsetsStart + 20, true)
  const argvLength = view.getUint32(offsetsStart + 24, true)
  const flags = view.getUint32(offsetsStart + 28, true)
  const payloadStart = trailerOffset - OFFSETS_SIZE - byteCount

  if (payloadStart < 0) return null
  if (payloadStart + byteCount + OFFSETS_SIZE !== trailerOffset) return null
  if (modulesLength === 0 || modulesLength % MODULE_SIZE !== 0) return null
  if (modulesOffset + modulesLength > byteCount) return null
  if (entrypointId >= modulesLength / MODULE_SIZE) return null
  if (argvOffset + argvLength > byteCount) return null

  return {
    byteCount,
    modulesOffset,
    modulesLength,
    entrypointId,
    argvOffset,
    argvLength,
    flags,
    payloadStart,
    trailerOffset,
  }
}

function normalizeEmbeddedPath(path: string): string {
  const stripped = path
    .replace(/^\/\$bunfs\/root\//, "")
    .replace(/^compiled:\/\/root\//, "")
    .replace(/^B:\/~BUN\/root\//, "")
  const normalized = stripped.replace(/^\/+/, "")
  if (!normalized || normalized.startsWith("..") || normalized.includes("\0")) {
    throw new Error(`unsafe embedded path: ${path}`)
  }
  return normalized
}

function readPointer(view: DataView, offset: number): { offset: number; length: number } {
  return {
    offset: view.getUint32(offset, true),
    length: view.getUint32(offset + 4, true),
  }
}

function slicePointer(bytes: Uint8Array, payloadStart: number, ptr: { offset: number; length: number }): Uint8Array {
  return bytes.slice(payloadStart + ptr.offset, payloadStart + ptr.offset + ptr.length)
}

function decodeString(bytes: Uint8Array): string {
  return new TextDecoder().decode(bytes).replace(/\0$/, "")
}

export function extractStandalone(binary: Uint8Array): ExtractedStandalone {
  const trailers = findTrailerOffsets(binary)
  const candidates = trailers
    .map((offset) => parseOffsets(binary, offset))
    .filter((offsets): offsets is Offsets => offsets !== null)

  const offsets = candidates.at(-1)
  if (!offsets) {
    throw new Error("No valid Bun standalone module graph found")
  }

  const view = new DataView(binary.buffer, binary.byteOffset, binary.byteLength)
  const files: EmbeddedFile[] = []
  const moduleCount = offsets.modulesLength / MODULE_SIZE

  for (let i = 0; i < moduleCount; i++) {
    const moduleOffset = offsets.payloadStart + offsets.modulesOffset + i * MODULE_SIZE
    const name = readPointer(view, moduleOffset)
    const contents = readPointer(view, moduleOffset + 8)
    const rawPath = decodeString(slicePointer(binary, offsets.payloadStart, name))

    files.push({
      path: normalizeEmbeddedPath(rawPath),
      rawPath,
      contents: slicePointer(binary, offsets.payloadStart, contents),
      isEntrypoint: i === offsets.entrypointId,
      loader: binary[moduleOffset + 49],
      moduleFormat: binary[moduleOffset + 50],
      side: binary[moduleOffset + 51],
    })
  }

  return {
    files,
    byteCount: offsets.byteCount,
    payloadStart: offsets.payloadStart,
    trailerOffset: offsets.trailerOffset,
    entrypointId: offsets.entrypointId,
    flags: offsets.flags,
  }
}

function parseArgs(argv: string[]): { binary?: string; outDir?: string; entryOut?: string; all: boolean } {
  const parsed: { binary?: string; outDir?: string; entryOut?: string; all: boolean } = {
    all: false,
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--out") {
      parsed.outDir = argv[++i]
    } else if (arg === "--entry-out") {
      parsed.entryOut = argv[++i]
    } else if (arg === "--all") {
      parsed.all = true
    } else if (!parsed.binary) {
      parsed.binary = arg
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }
  return parsed
}

function writeFile(path: string, contents: Uint8Array): void {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, contents)
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  if (!args.binary || (!args.outDir && !args.entryOut)) {
    console.error(
      "usage: bun run tools/lib/extract-bun-standalone.ts <binary> --entry-out <cli.js> [--out <dir> --all]",
    )
    return 2
  }

  const graph = extractStandalone(readFileSync(args.binary))
  const entry = graph.files.find((file) => file.isEntrypoint)
  if (!entry) throw new Error("standalone graph has no entrypoint")

  if (args.entryOut) {
    writeFile(args.entryOut, entry.contents)
  }

  if (args.outDir) {
    if (args.all) {
      for (const file of graph.files) {
        writeFile(join(args.outDir, "files", file.path), file.contents)
      }
    }
    writeFileSync(
      join(args.outDir, "manifest.json"),
      JSON.stringify(
        {
          byteCount: graph.byteCount,
          payloadStart: graph.payloadStart,
          trailerOffset: graph.trailerOffset,
          entrypointId: graph.entrypointId,
          flags: graph.flags,
          files: graph.files.map((file) => ({
            path: file.path,
            rawPath: file.rawPath,
            bytes: file.contents.byteLength,
            isEntrypoint: file.isEntrypoint,
            loader: file.loader,
            moduleFormat: file.moduleFormat,
            side: file.side,
          })),
        },
        null,
        2,
      ) + "\n",
    )
  }

  console.error(`extracted ${entry.rawPath} (${entry.contents.byteLength} bytes)`)
  return 0
}

if (import.meta.main) {
  process.exit(main())
}
