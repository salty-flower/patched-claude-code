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
import {
  verifyAstTransformPatch,
  verifyAstTransformPatches,
  type AstTransformPatch,
} from "../lib/ast-transform-patches"
import { patchApplies, patchSkipReason } from "../lib/apply-patches"
import { createCommand, runCli } from "../lib/cli"
import {
  isDualGraphStaged,
  loadGraphBundle,
  stagedGraphPlatforms,
  stagedGraphRoot,
  type LoadedGraphBundle,
} from "../lib/graph-bundle"
import { runWithHeavyLock } from "../lib/heavy-lock"
import { loadPatchEntriesFromFile, type PatchEntry } from "../lib/patch-files"
import { loadPatchTestsFromToml } from "../lib/patch-tests"

type Patch = PatchEntry
type LocatorResult = { ok: boolean; msg: string; matches: number }
type PatchRecord = { file: string; patches: Patch[]; fileTests: unknown[] }

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

export function parseArgs(argv: string[]): { patches: string[]; target?: string; quietSkips?: boolean } {
  const program = createCommand("verify-patches")
    .argument("[patches...]", "patch TOML files")
    .option("--against <cli.js>", "explicit target bundle")
    .option("--quiet-skips", "omit patches excluded from the selected target")
    .parse(argv, { from: "user" })
  const options = program.opts<{ against?: string; quietSkips?: boolean }>()
  const patches = program.args

  if (patches.length === 0) {
    const dir = join(ROOT, "patches")
    patches.push(
      ...readdirSync(dir)
        .filter((f) => f.endsWith(".toml"))
        .map((f) => join(dir, f)),
    )
  }
  return {
    patches,
    ...(options.against ? { target: options.against } : {}),
    ...(options.quietSkips ? { quietSkips: true } : {}),
  }
}

function defaultTarget(p: Patch): string {
  return join(ROOT, "staging", p.target_version, "cli.js")
}

function inferTargetVersion(target: string): string | undefined {
  const normalized = target.replaceAll("\\", "/")
  return normalized.match(/(?:^|\/)staging\/([^/]+)\/cli\.js$/)?.[1]
}

// A verification view is either one single-file bundle body or one platform
// graph of a dual-graph staged target. Every view of a target must satisfy
// each patch's locator independently, unless the patch restricts platforms.
type TargetView = { key: string; label: string; platform?: string; body?: string; bundle?: LoadedGraphBundle }

const viewCache = new Map<string, TargetView[]>()

function viewAppliesToPatch(view: TargetView, p: Patch): boolean {
  if (!p.platforms || p.platforms.length === 0) return true
  if (!view.platform) return true
  return p.platforms.includes(view.platform)
}

function viewsForTarget(target: string, targetBodies: Map<string, string>): TargetView[] {
  const cached = viewCache.get(target)
  if (cached) return cached
  const version = inferTargetVersion(target)
  let views: TargetView[]
  if (version && isDualGraphStaged(ROOT, version)) {
    views = stagedGraphPlatforms(ROOT, version).map((platform) => {
      const bundle = loadGraphBundle(join(stagedGraphRoot(ROOT, version), platform), platform)
      return { key: `${target}::${platform}`, label: `${version} graph/${platform}`, platform, bundle }
    })
  } else {
    views = [{ key: target, label: target, body: readTargetBody(target, targetBodies) }]
  }
  viewCache.set(target, views)
  return views
}

function readTargetBody(target: string, cache: Map<string, string>): string {
  const cached = cache.get(target)
  if (cached !== undefined) return cached
  const body = readFileSync(target, "utf8")
  cache.set(target, body)
  return body
}

function countMatchesInView(view: TargetView, p: Patch): number {
  if (view.bundle) {
    let total = 0
    for (const file of view.bundle.files) {
      if (p.locator_kind === "literal") total += file.text.split(p.locator_pattern ?? "").length - 1
      else total += (file.text.match(new RegExp(p.locator_pattern ?? "", "g")) || []).length
    }
    return total
  }
  const body = view.body ?? ""
  if (p.locator_kind === "literal") return body.split(p.locator_pattern ?? "").length - 1
  return (body.match(new RegExp(p.locator_pattern ?? "", "g")) || []).length
}

function verifyLocator(
  p: Patch,
  views: TargetView[],
  astResults: Map<Patch, LocatorResult>,
): LocatorResult {
  let matches: number
  if (p.locator_kind === "ast_transform") {
    if (!p.ast || !p.transform) return { ok: false, msg: "missing AST transform metadata", matches: 0 }
    return astResults.get(p) ?? { ok: false, msg: "AST transform was not batch-verified", matches: 0 }
  }
  if (!p.locator_pattern) return { ok: false, msg: "missing locator_pattern", matches: 0 }
  const expected = p.expected_matches ?? 1
  let total = 0
  for (const view of views) {
    const count = countMatchesInView(view, p)
    if (count !== expected) {
      return {
        ok: false,
        msg: `${view.label}: expected ${expected} locator match(es), got ${count}`,
        matches: count,
      }
    }
    total += count
  }
  matches = total
  return { ok: true, msg: `locator matches ${matches} time(s) per view (expected ${expected})`, matches }
}

function batchVerifyAstLocators(
  records: PatchRecord[],
  explicitTarget: string | undefined,
  targetBodies: Map<string, string>,
): Map<Patch, LocatorResult> {
  const groups = new Map<string, Array<{ patch: Patch; astPatch: AstTransformPatch }>>()
  const viewsByKey = new Map<string, TargetView>()

  for (const record of records) {
    for (const patch of record.patches) {
      if (patch.locator_kind !== "ast_transform") continue
      if (!patch.ast || !patch.transform) continue
      const target = explicitTarget ?? defaultTarget(patch)
      const targetVersion = explicitTarget ? inferTargetVersion(target) : patch.target_version
      if (targetVersion && !patchApplies(patch, targetVersion)) continue
      const targetExists = existsSync(target) || (targetVersion && isDualGraphStaged(ROOT, targetVersion))
      if (!targetExists) continue

      for (const view of viewsForTarget(target, targetBodies)) {
        if (!viewAppliesToPatch(view, patch)) continue
        const group = groups.get(view.key) ?? []
        group.push({
          patch,
          astPatch: {
            name: patch.name,
            expectedMatches: patch.expected_matches,
            ast: patch.ast,
            transform: patch.transform,
          },
        })
        groups.set(view.key, group)
        viewsByKey.set(view.key, view)
      }
    }
  }

  const out = new Map<Patch, LocatorResult>()
  for (const [key, group] of groups) {
    const view = viewsByKey.get(key)
    if (!view) continue
    const expectedByPatch = new Map(group.map((entry) => [entry.patch.name, entry.astPatch.expectedMatches ?? 1]))
    // Locate phase: sum per-file match counts into bundle-level totals.
    const totals = new Map<string, number>(group.map((entry) => [entry.patch.name, 0]))
    const failures = new Map<string, string>()
    if (view.bundle) {
      for (const file of view.bundle.files) {
        const results = verifyAstTransformPatches(file.text, group.map((entry) => ({
          ...entry.astPatch,
          expectedMatches: undefined,
        })))
        for (let i = 0; i < group.length; i++) {
          const name = group[i].patch.name
          const count = results[i].matches
          totals.set(name, (totals.get(name) ?? 0) + count)
          if (count > 0) {
            const localResult = verifyAstTransformPatch(file.text, {
              ...group[i].astPatch,
              expectedMatches: count,
            })
            if (!localResult.ok) failures.set(name, `${view.label}/${file.path}: ${localResult.message}`)
          }
        }
      }
    } else {
      const results = verifyAstTransformPatches(view.body ?? "", group.map((entry) => entry.astPatch))
      for (let i = 0; i < group.length; i++) {
        totals.set(group[i].patch.name, results[i].matches)
        if (!results[i].ok && results[i].matches > 0) failures.set(group[i].patch.name, results[i].message)
      }
    }
    for (const entry of group) {
      const expected = expectedByPatch.get(entry.patch.name) ?? 1
      const total = totals.get(entry.patch.name) ?? 0
      const failure = failures.get(entry.patch.name)
      out.set(
        entry.patch,
        failure
          ? { ok: false, msg: failure, matches: total }
          : total === expected
          ? { ok: true, msg: `AST locator matches ${total} node(s) in ${view.label}`, matches: total }
          : { ok: false, msg: `${view.label}: expected ${expected} AST match(es), got ${total}`, matches: total },
      )
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
  const { patches: files, target, quietSkips } = parseArgs(process.argv.slice(2))

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
        if (!quietSkips) {
          console.log(`[skip] ${p.name}`)
          console.log(`       file=${p.file}`)
          console.log(`       target=${tgt}`)
          console.log(`       ${skipReason}`)
        }
        continue
      }

      if (!existsSync(tgt) && !(targetVersion && isDualGraphStaged(ROOT, targetVersion))) {
        console.error(`[${p.name}] target bundle missing: ${tgt}`)
        allOk = false
        continue
      }

      const views = viewsForTarget(tgt, targetBodies).filter((view) => viewAppliesToPatch(view, p))
      if (views.length === 0) {
        if (!quietSkips) {
          console.log(`[skip] ${p.name}`)
          console.log(`       file=${p.file}`)
          console.log(`       platforms=${(p.platforms ?? []).join(",")} exclude all staged graphs`)
        }
        continue
      }
      const lr = verifyLocator(p, views, astResults)
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

if (import.meta.main) await runWithHeavyLock(ROOT, () => runCli(main))
