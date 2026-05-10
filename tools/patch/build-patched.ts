#!/usr/bin/env bun
// Apply every patch in patches/*.toml to a given input bundle, write the
// patched bytes to the given output. Intended to be invoked via
// `bun run tools/patch/build-patched.ts`.
//
// Patches whose `applies_to` excludes the input version are skipped.
// `gated_by_env` patches are skipped unless the named env var is truthy.
//
// Each patch is verified to match exactly once before substitution; if any
// patch fails to verify, the script exits non-zero without writing.

import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { applyPatchEntries, patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromDirectory } from "../lib/patch-files"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

function main(): number {
  const [inputPath, outputPath, versionArg] = process.argv.slice(2)
  if (!inputPath || !outputPath) {
    console.error("usage: bun run tools/patch/build-patched.ts <input-cli.js> <output-cli.js> [version]")
    return 2
  }
  const version = versionArg ?? process.env.PATCHED_CC_TARGET_VERSION ?? "0.0.0"

  const patches = loadPatchEntriesFromDirectory(ROOT)
  console.error(`loaded ${patches.length} patch entries from patches/`)

  for (const p of patches) {
    if (!patchApplies(p, version)) {
      console.error(`[skip ] ${p.name} (does not apply to ${version})`)
      continue
    }
    console.error(`[apply] ${p.name}`)
  }

  const body = readFileSync(inputPath, "utf8")
  const result = applyPatchEntries(body, patches, version)
  writeFileSync(outputPath, result.source)
  console.error(`wrote ${outputPath} (${result.applied}/${patches.length} patch entries applied)`)
  return 0
}

process.exit(main())
