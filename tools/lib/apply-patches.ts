import * as semver from "semver"
import { applyAstTransformPatches } from "./ast-transform-patches"
import type { AstTransformOptions, AstTransformPatch } from "./ast-transform-patches"
import type { PatchEntry } from "./patch-files"

export type ApplyPatchEntriesResult = {
  source: string
  applied: number
  skipped: PatchEntry[]
}

export type ApplyPatchEntriesOptions = {
  astTransformOptions?: AstTransformOptions
}

export function patchApplies(patch: PatchEntry, version: string): boolean {
  if (patch.gated_by_env) {
    const value = process.env[patch.gated_by_env] ?? ""
    if (!value || value === "0" || value === "false") return false
  }
  const range = patch.applies_to ?? patch.target_version
  if (semver.valid(range)) {
    return semver.eq(version, range)
  }
  return semver.satisfies(version, range)
}

export function applyPatchEntries(
  source: string,
  patches: PatchEntry[],
  version: string,
  options: ApplyPatchEntriesOptions = {},
): ApplyPatchEntriesResult {
  let current = source
  let applied = 0
  const skipped: PatchEntry[] = []
  let pendingAstTransforms: AstTransformPatch[] = []

  const flushAstTransforms = (): void => {
    if (pendingAstTransforms.length === 0) return
    current = applyAstTransformPatches(current, pendingAstTransforms, options.astTransformOptions).source
    pendingAstTransforms = []
  }

  for (const patch of patches) {
    if (!patchApplies(patch, version)) {
      skipped.push(patch)
      continue
    }
    if (patch.locator_kind === "ast_transform") {
      pendingAstTransforms.push(astTransformPatchFromEntry(patch))
      applied++
      continue
    }
    flushAstTransforms()
    current = applyOne(current, patch)
    applied++
  }

  flushAstTransforms()
  return { source: current, applied, skipped }
}

function applyOne(source: string, patch: PatchEntry): string {
  const locatorPattern = patch.locator_pattern
  const replacement = patch.replacement
  if (!locatorPattern) throw new Error(`[${patch.name}] missing locator_pattern`)
  if (!replacement) throw new Error(`[${patch.name}] missing replacement`)

  const expected = patch.expected_matches ?? 1
  if (patch.locator_kind === "literal") {
    const count = source.split(locatorPattern).length - 1
    if (count !== expected) {
      throw new Error(`[${patch.name}] expected ${expected} literal match(es), got ${count}`)
    }
    return source.split(locatorPattern).join(replacement)
  }

  const pattern = new RegExp(locatorPattern, "g")
  const matches = source.match(pattern) || []
  if (matches.length !== expected) {
    throw new Error(`[${patch.name}] expected ${expected} regex match(es), got ${matches.length}`)
  }
  return source.replace(pattern, replacement)
}

function astTransformPatchFromEntry(patch: PatchEntry): AstTransformPatch {
  if (!patch.ast || !patch.transform) throw new Error(`[${patch.name}] missing AST transform metadata`)
  return { name: patch.name, expectedMatches: patch.expected_matches, ast: patch.ast, transform: patch.transform }
}
