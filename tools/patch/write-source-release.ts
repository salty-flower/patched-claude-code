#!/usr/bin/env bun
// Write the flake-consumable release payload into the repository root.

import { existsSync } from "node:fs"
import { join } from "node:path"
import { releaseTag, writeReleasePayload } from "../lib/release-payload"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  releaseId?: string
  input?: string
  outDir: string
}

function parseArgs(argv: string[]): Args {
  const args: Args = { outDir: ROOT }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--version") {
      args.version = argv[++i]
    } else if (arg === "--release-id") {
      args.releaseId = argv[++i]
    } else if (arg === "--input") {
      args.input = argv[++i]
    } else if (arg === "--out-dir") {
      args.outDir = argv[++i]
    } else if (arg === "--help" || arg === "-h") {
      console.log(
        "usage: bun run tools/patch/write-source-release.ts --version <ver> --release-id <patch.N> [--input <cli.patched.js>] [--out-dir <repo-root>]",
      )
      process.exit(0)
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }

  if (!args.version) throw new Error("missing --version")
  args.releaseId ??= "patch.local"
  return args
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version
  if (!version) throw new Error("missing version")
  const releaseId = args.releaseId ?? "patch.local"
  const input = args.input ?? join(ROOT, "staging", version, "cli.patched.js")
  if (!existsSync(input)) throw new Error(`patched bundle missing: ${input}`)

  const payload = writeReleasePayload({
    root: ROOT,
    version,
    releaseId,
    input,
    outDir: args.outDir,
    tag: releaseTag(version, releaseId),
    gitCommit: null,
    builtAt: null,
  })

  console.error(`wrote ${join(args.outDir, "cli.js")} (${payload.cliBytes.byteLength} bytes)`)
  console.error(`wrote ${join(args.outDir, "manifest.json")} (${payload.cliHash.sri})`)
  console.error(`wrote ${join(args.outDir, "package.json")}`)
  console.error(`wrote ${join(args.outDir, "bin", "claude-audited")}`)
  return 0
}

if (import.meta.main) {
  process.exit(main())
}
