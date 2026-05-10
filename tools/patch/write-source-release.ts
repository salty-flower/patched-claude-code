#!/usr/bin/env bun
// Write the flake-consumable release payload into the repository root.

import { existsSync } from "node:fs"
import { join } from "node:path"
import { createCommand } from "../lib/cli"
import { releaseTag, writeReleasePayload } from "../lib/release-payload"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  releaseId?: string
  input?: string
  outDir: string
}

export function parseArgs(argv: string[]): Args {
  const args = createCommand("write-source-release")
    .requiredOption("--version <ver>")
    .option("--release-id <id>", "patch release id", "patch.local")
    .option("--input <cli.patched.js>")
    .option("--out-dir <repo-root>", "payload output directory", ROOT)
    .parse(argv, { from: "user" })
    .opts<Args>()
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
