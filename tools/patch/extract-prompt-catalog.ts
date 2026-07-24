#!/usr/bin/env bun
// Extract a deterministic static prompt catalog from exact release bundle bytes.

import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { writePromptCatalog } from "../lib/prompt-catalog"
import { sha256 } from "../lib/release-payload"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  releaseId: string
  upstream?: string
  patched?: string
  patchSetSha256?: string
  outDir?: string
  identityRoot?: string
}

export function parseArgs(argv: string[]): Args {
  return createCommand("extract-prompt-catalog")
    .description("Extract a deterministic static prompt audit catalog from rendered release bundles")
    .requiredOption("--version <ver>")
    .option("--release-id <id>", "release identity", "patch.local")
    .option("--upstream <cli.js>", "upstream bundle input")
    .option("--patched <cli.patched.js>", "patched bundle input")
    .option("--patch-set-sha256 <sri>", "patch-set identity for local extraction")
    .option("-o, --out-dir <directory>", "catalog output directory")
    .option("--identity-root <directory>", "checked-in prompt identity registry")
    .parse(argv, { from: "user" })
    .opts<Args>()
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version
  if (!version) throw new Error("missing version")
  const upstream = args.upstream ?? join(ROOT, "staging", version, "cli.js")
  const patched = args.patched ?? join(ROOT, "staging", version, "cli.patched.js")
  const outDir = args.outDir ?? join(ROOT, "dist", `prompt-catalog-${version}`, "catalog")
  if (!existsSync(upstream)) throw new Error(`upstream bundle missing: ${upstream}`)
  if (!existsSync(patched)) throw new Error(`patched bundle missing: ${patched}`)

  const result = writePromptCatalog({
    upstreamVersion: version,
    releaseId: args.releaseId,
    upstreamBundlePath: upstream,
    upstreamBundleSha256: sha256(readFileSync(upstream)).sri,
    patchedBundlePath: patched,
    patchedBundleSha256: sha256(readFileSync(patched)).sri,
    patchSetSha256: args.patchSetSha256 ?? "sha256-unspecified-local-extraction",
    outDir,
    identityRoot: args.identityRoot ?? join(ROOT, "prompt-identities"),
  })
  console.error(
    `wrote ${outDir} (${result.manifest.summary.staticEntries} entries, ${result.manifest.summary.contextualGaps} contextual gaps, ${result.treeSha256})`,
  )
  return 0
}

if (import.meta.main) await runCli(main)
