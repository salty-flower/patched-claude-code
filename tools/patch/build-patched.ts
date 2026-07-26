#!/usr/bin/env bun
// Apply every patch in patches/*.toml to a given input bundle, write the
// patched bytes to the given output. Intended to be invoked via
// `bun run tools/patch/build-patched.ts`.
//
// Disabled patches, patches whose `applies_to` excludes the input version, and
// `gated_by_env` patches without a truthy env var are skipped.
//
// Each patch is verified to match exactly once before substitution; if any
// patch fails to verify, the script exits non-zero without writing.

import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { applyPatchEntries, patchSkipReason } from "../lib/apply-patches"
import { runWithHeavyLock } from "../lib/heavy-lock"
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
    const skipReason = patchSkipReason(p, version)
    if (skipReason) {
      console.error(`[skip ] ${p.name} (${skipReason})`)
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

if (import.meta.main) await runWithHeavyLock(ROOT, main)
