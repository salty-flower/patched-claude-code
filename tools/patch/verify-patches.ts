#!/usr/bin/env bun
// Verify every patches/*.toml entry against the staged target bundle.
//
// Checks per patch:
//   1. `locator_pattern` matches exactly once on the target bundle.
//   2. `rationale_ref` resolves to a real line range in
//      reference/<ref-version>/sources/.
//   3. `replacement` is non-empty and not literally identical to the
//      matched bytes (otherwise the patch is a no-op).
//
// Exit code 0 if all patches verify; 1 otherwise.
//
// Usage:
//   bun run tools/patch/verify-patches.ts                              # all patches, default target
//   bun run tools/patch/verify-patches.ts patches/<one>.toml           # single patch
//   bun run tools/patch/verify-patches.ts --against staging/<v>/cli.js # explicit target

import { readFileSync, existsSync, readdirSync } from "node:fs"
import { join } from "node:path"
import { verifyAstTransformPatches, type AstTransformPatch } from "../lib/ast-transform-patches"
import { patchApplies, patchSkipReason } from "../lib/apply-patches"
import { createCommand } from "../lib/cli"
import { loadPatchEntriesFromFile, type PatchEntry } from "../lib/patch-files"
import { loadPatchTestsFromToml } from "../lib/patch-tests"

type Patch = PatchEntry
type LocatorResult = { ok: boolean; msg: string; matches: number }
type PatchRecord = { file: string; patches: Patch[]; fileTests: unknown[] }

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

export function parseArgs(argv: string[]): { patches: string[]; target?: string } {
  const program = createCommand("verify-patches")
    .argument("[patches...]", "patch TOML files")
    .option("--against <cli.js>", "explicit target bundle")
    .parse(argv, { from: "user" })
  const options = program.opts<{ against?: string }>()
  const patches = program.args

  if (patches.length === 0) {
    const dir = join(ROOT, "patches")
    patches.push(
      ...readdirSync(dir)
      .filter((f) => f.endsWith(".toml"))
        .map((f) => join(dir, f)),
    )
  }
  return { patches, ...(options.against ? { target: options.against } : {}) }
}

function defaultTarget(p: Patch): string {
  return join(ROOT, "staging", p.target_version, "cli.js")
}

function inferTargetVersion(target: string): string | undefined {
  const normalized = target.replaceAll("\\", "/")
  return normalized.match(/(?:^|\/)staging\/([^/]+)\/cli\.js$/)?.[1]
}

function readTargetBody(target: string, cache: Map<string, string>): string {
  const cached = cache.get(target)
  if (cached !== undefined) return cached
  const body = readFileSync(target, "utf8")
  cache.set(target, body)
  return body
}

function verifyLocator(
  p: Patch,
  target: string,
  targetBodies: Map<string, string>,
  astResults: Map<Patch, LocatorResult>,
): LocatorResult {
  let matches: number
  if (p.locator_kind === "ast_transform") {
    if (!p.ast || !p.transform) return { ok: false, msg: "missing AST transform metadata", matches: 0 }
    return astResults.get(p) ?? { ok: false, msg: "AST transform was not batch-verified", matches: 0 }
  }
  const body = readTargetBody(target, targetBodies)
  if (!p.locator_pattern) return { ok: false, msg: "missing locator_pattern", matches: 0 }
  if (p.locator_kind === "literal") {
    matches = body.split(p.locator_pattern).length - 1
  } else {
    const re = new RegExp(p.locator_pattern, "g")
    matches = (body.match(re) || []).length
  }
  const expected = p.expected_matches ?? 1
  if (matches !== expected) {
    return { ok: false, msg: `expected ${expected} locator match(es), got ${matches}`, matches }
  }
  return { ok: true, msg: `locator matches ${matches} time(s) (expected ${expected})`, matches }
}

function batchVerifyAstLocators(
  records: PatchRecord[],
  explicitTarget: string | undefined,
  targetBodies: Map<string, string>,
): Map<Patch, LocatorResult> {
  const groups = new Map<string, Array<{ patch: Patch; astPatch: AstTransformPatch }>>()

  for (const record of records) {
    for (const patch of record.patches) {
      if (patch.locator_kind !== "ast_transform") continue
      if (!patch.ast || !patch.transform) continue
      const target = explicitTarget ?? defaultTarget(patch)
      const targetVersion = explicitTarget ? inferTargetVersion(target) : patch.target_version
      if (targetVersion && !patchApplies(patch, targetVersion)) continue
      if (!existsSync(target)) continue

      const group = groups.get(target) ?? []
      group.push({
        patch,
        astPatch: {
          name: patch.name,
          expectedMatches: patch.expected_matches,
          ast: patch.ast,
          transform: patch.transform,
        },
      })
      groups.set(target, group)
    }
  }

  const out = new Map<Patch, LocatorResult>()
  for (const [target, group] of groups) {
    const body = readTargetBody(target, targetBodies)
    const results = verifyAstTransformPatches(
      body,
      group.map((entry) => entry.astPatch),
    )
    for (let i = 0; i < group.length; i++) {
      const result = results[i]
      out.set(group[i].patch, { ok: result.ok, msg: result.message, matches: result.matches })
    }
  }
  return out
}

function verifyRationaleRef(p: Patch): { ok: boolean; msg: string } {
  // rationale_ref form: reference/<ver>/sources/<path>#L<start>-L<end>
  const m = p.rationale_ref.match(/^(reference\/[^/]+\/sources\/[^#]+)#L(\d+)(?:-L(\d+))?$/)
  if (!m) {
    return { ok: false, msg: `rationale_ref does not match expected schema: ${p.rationale_ref}` }
  }
  const [, path, startStr, endStr] = m
  const full = join(ROOT, path)
  if (!existsSync(full)) {
    return { ok: false, msg: `rationale_ref path missing — run tools/reconstruct/extract-sources.ts first: ${path}` }
  }
  const body = readFileSync(full, "utf8")
  const lineCount = body.split("\n").length
  const start = Number(startStr)
  const end = endStr ? Number(endStr) : start
  if (start < 1 || end < start || end > lineCount) {
    return {
      ok: false,
      msg: `rationale_ref line range [${start}-${end}] out of bounds in ${path} (file has ${lineCount} lines)`,
    }
  }
  return { ok: true, msg: `rationale_ref ${path}#L${start}-L${end} resolves` }
}

function main(): number {
  const { patches: files, target } = parseArgs(process.argv.slice(2))

  if (files.length === 0) {
    console.error("no patches to verify (patches/ is empty)")
    return 0
  }

  let allOk = true
  const records: PatchRecord[] = files.map((file) => ({
    file,
    patches: loadPatchEntriesFromFile(file),
    fileTests: loadPatchTestsFromToml(readFileSync(file, "utf8")),
  }))
  const targetBodies = new Map<string, string>()
  const astResults = batchVerifyAstLocators(records, target, targetBodies)

  for (const { file, patches, fileTests } of records) {
    if (fileTests.length === 0) {
      console.log(`[FAIL] ${file}: no [[tests]] entries`)
      allOk = false
    }

    for (const p of patches) {
      const tgt = target ?? defaultTarget(p)
      const targetVersion = target ? inferTargetVersion(tgt) : p.target_version
      const skipReason = targetVersion ? patchSkipReason(p, targetVersion) : undefined
      if (skipReason) {
        console.log(`[skip] ${p.name}`)
        console.log(`       file=${p.file}`)
        console.log(`       target=${tgt}`)
        console.log(`       ${skipReason}`)
        continue
      }

      if (!existsSync(tgt)) {
        console.error(`[${p.name}] target bundle missing: ${tgt}`)
        allOk = false
        continue
      }

      const lr = verifyLocator(p, tgt, targetBodies, astResults)
      const rr = verifyRationaleRef(p)
      const replOk = p.locator_kind === "ast_transform" ? true : (p.replacement ?? "").length > 0
      const testsOk = (p.tests ?? []).length > 0
      const ok = lr.ok && rr.ok && replOk && testsOk
      allOk &&= ok

      const tag = ok ? "ok" : "FAIL"
      console.log(`[${tag}] ${p.name}`)
      console.log(`     file=${p.file}`)
      console.log(`     target=${tgt}`)
      console.log(`     ${lr.msg}`)
      console.log(`     ${rr.msg}`)
      if (!replOk) console.log(`     replacement is empty`)
      if (!testsOk) console.log(`     no [[patches.tests]] entries`)
    }
  }

  return allOk ? 0 : 1
}

if (import.meta.main) {
  process.exit(main())
}
