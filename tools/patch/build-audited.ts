#!/usr/bin/env bun
// Apply every patch in patches/*.toml to a given input bundle, write the
// patched bytes to the given output. Intended to be invoked via
// `bun run tools/patch/build-audited.ts`.
//
// Patches whose `applies_to` excludes the input version are skipped.
// `gated_by_env` patches are skipped unless the named env var is truthy.
//
// Each patch is verified to match exactly once before substitution; if any
// patch fails to verify, the script exits non-zero without writing.

import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import * as semver from "semver"
import { loadPatchEntriesFromDirectory, type PatchEntry } from "../lib/patch-files"

type Patch = PatchEntry

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")

function loadPatches(): Patch[] {
  return loadPatchEntriesFromDirectory(ROOT)
}

function applies(p: Patch, version: string): boolean {
  if (p.gated_by_env) {
    const v = process.env[p.gated_by_env] ?? ""
    if (!v || v === "0" || v === "false") return false
  }
  const range = p.applies_to ?? p.target_version
  if (semver.valid(range)) {
    return semver.eq(version, range)
  }
  return semver.satisfies(version, range)
}

function applyOne(body: string, p: Patch): string {
  const expected = p.expected_matches ?? 1
  if (p.locator_kind === "literal") {
    const count = body.split(p.locator_pattern).length - 1
    if (count !== expected) {
      throw new Error(`[${p.name}] expected ${expected} literal match(es), got ${count}`)
    }
    return body.split(p.locator_pattern).join(p.replacement)
  }
  const re = new RegExp(p.locator_pattern, "g")
  const matches = body.match(re) || []
  if (matches.length !== expected) {
    throw new Error(`[${p.name}] expected ${expected} regex match(es), got ${matches.length}`)
  }
  return body.replace(re, p.replacement)
}

function main(): number {
  const [inputPath, outputPath, versionArg] = process.argv.slice(2)
  if (!inputPath || !outputPath) {
    console.error("usage: bun run tools/patch/build-audited.ts <input-cli.js> <output-cli.js> [version]")
    return 2
  }
  const version = versionArg ?? process.env.AUDITED_CC_TARGET_VERSION ?? "0.0.0"

  const patches = loadPatches()
  console.error(`loaded ${patches.length} patch entries from patches/`)

  let body = readFileSync(inputPath, "utf8")
  let applied = 0
  for (const p of patches) {
    if (!applies(p, version)) {
      console.error(`[skip ] ${p.name} (does not apply to ${version})`)
      continue
    }
    body = applyOne(body, p)
    applied++
    console.error(`[apply] ${p.name}`)
  }

  writeFileSync(outputPath, body)
  console.error(`wrote ${outputPath} (${applied}/${patches.length} patch entries applied)`)
  return 0
}

process.exit(main())
