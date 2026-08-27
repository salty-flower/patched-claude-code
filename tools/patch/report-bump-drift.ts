#!/usr/bin/env bun
// Drift report: count patch locator matches inside staged platform graphs.
//
// Selects entries active on --select version and counts their locators inside
// the staged graphs of --bundle version, one bundle-level total per graph.
//
// Usage:
//   bun run tools/patch/report-bump-drift.ts --select 2.1.241 --bundle 2.1.246 [--file <substring>]
//   bun run tools/patch/report-bump-drift.ts --select 2.1.246 --bundle 2.1.246 --file later-command

import { join } from "node:path"
import * as semver from "semver"
import { verifyAstTransformPatches } from "../lib/ast-transform-patches"
import { loadGraphBundle, stagedGraphRoot } from "../lib/graph-bundle"
import { loadPatchEntriesFromDirectory, type PatchEntry } from "../lib/patch-files"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

function parseArgs(): { select: string; bundle: string; file?: string } {
  const args = process.argv.slice(2)
  const get = (flag: string): string | undefined => {
    const index = args.indexOf(flag)
    if (index === -1) return undefined
    return args[index + 1]
  }
  const select = get("--select") ?? get("--from") ?? "2.1.241"
  const bundle = get("--bundle") ?? get("--to") ?? select
  return { select, bundle, file: get("--file") }
}

function activeOn(patch: PatchEntry, version: string): boolean {
  if (!patch.enabled) return false
  const range = patch.applies_to ?? patch.target_version
  try {
    return semver.satisfies(version, range) || semver.eq(version, range)
  } catch {
    return false
  }
}

type Graph = Array<{ path: string; text: string }>

function countText(text: string, patch: PatchEntry): number | null {
  if (patch.locator_kind === "ast_transform") return null // handled separately
  if (patch.locator_kind === "literal") return text.split(patch.locator_pattern ?? "").length - 1
  try {
    return (text.match(new RegExp(patch.locator_pattern ?? "", "g")) || []).length
  } catch {
    return -1
  }
}

function graphTotal(files: Graph, patch: PatchEntry): number | null {
  let total = 0
  for (const f of files) {
    const c = countText(f.text, patch)
    if (c === null || c < 0) return null
    total += c
  }
  return total
}

const { select, bundle, file: fileFilter } = parseArgs()
const patches = loadPatchEntriesFromDirectory(ROOT)

const graphs = new Map<string, Graph>()
for (const platform of ["darwin-arm64", "linux-x64"]) {
  graphs.set(platform, loadGraphBundle(join(stagedGraphRoot(ROOT, bundle), platform), platform).files)
}

type Row = {
  file: string
  name: string
  kind: string
  expected: number
  darwin: number | null
  linux: number | null
  status: string
  symbolRisk?: string[]
}

// Identifiers that are safe regardless of bundle-local minification.
const GLOBAL_IDENTIFIERS = new Set([
  "process", "console", "require", "module", "exports", "globalThis", "Bun", "import", "await", "async",
  "return", "function", "const", "let", "var", "if", "else", "throw", "new", "typeof", "void", "true", "false",
  "null", "undefined", "try", "catch", "finally", "for", "while", "do", "switch", "case", "break", "continue",
  "delete", "in", "of", "instanceof", "this", "class", "extends", "super", "yield", "static", "get", "set",
])

// AST transform DSL keywords are not bundle symbols.
const TRANSFORM_DSL = new Set([
  "replace_node", "replace_function_body", "replace_function_body_with_first_var_initializer_return",
  "set_object_property", "append_object_property", "set_call_arg", "append_call_arg", "wrap_expression",
  "replace_with_consequent", "prepend_function_body", "insert_before_node", "insert_after_node",
  "replace_substring", "replace_substring_regex", "value", "body", "code", "property", "index", "arg",
  "template", "find", "op",
])

function replacementIdentifiers(patch: PatchEntry): string[] {
  const sources: string[] = []
  if (patch.replacement) sources.push(patch.replacement)
  const transform = patch.transform as Record<string, unknown> | undefined
  if (transform) {
    for (const value of Object.values(transform)) {
      if (typeof value === "string") sources.push(value)
      else if (value && typeof value === "object") {
        for (const nested of Object.values(value as Record<string, unknown>)) {
          if (typeof nested === "string") sources.push(nested)
        }
      }
    }
  }
  const ids = new Set<string>()
  const selfDeclared = new Set<string>()
  for (const source of sources) {
    for (const match of source.matchAll(/\b(?:let|var|const)\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=/g)) {
      selfDeclared.add(match[1])
    }
    // Comma-separated declarators: let a=1,b=2,c=3
    for (const match of source.matchAll(/,\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*=/g)) {
      selfDeclared.add(match[1])
    }
    // Strip string/template literals and comments: quoted content is data,
    // not bundle-local symbol references.
    const code = source
      .replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/g, '""')
      .replace(/\/(?:[^/\\\n]|\\.)+\/[a-z]*/g, "/re/")
      .replace(/\/\/[^\n]*/g, "")
    for (const match of code.matchAll(/[$A-Za-z_][$A-Za-z0-9_]*/g)) {
      const id = match[0]
      if (/^\$\d/.test(id)) continue // regex replacement backreferences ($1, $2let...)
      if (TRANSFORM_DSL.has(id)) continue
      if (!GLOBAL_IDENTIFIERS.has(id)) ids.add(id)
    }
  }
  return [...ids].filter((id) => !selfDeclared.has(id))
}

// Flag replacement identifiers that appear nowhere in the file containing the
// locator match — strong evidence the replacement references stale symbols.
function symbolRiskInGraphs(patch: PatchEntry): string[] {
  const risks = new Set<string>()
  const ids = replacementIdentifiers(patch)
  if (ids.length === 0) return []
  for (const files of graphs.values()) {
    for (const f of files) {
      const count = countText(f.text, patch)
      if (count === null || count === 0) continue
      for (const id of ids) {
        if (!f.text.includes(id)) risks.add(id)
      }
    }
  }
  return [...risks]
}

const rows: Row[] = []
const astBatches = new Map<string, PatchEntry>()

for (const patch of patches) {
  if (fileFilter && !patch.file.includes(fileFilter)) continue
  if (!activeOn(patch, select)) continue
  const expected = patch.expected_matches ?? 1

  if (patch.locator_kind === "ast_transform") {
    astBatches.set(patch.name, patch)
    rows.push({ file: patch.file, name: patch.name, kind: "ast", expected, darwin: null, linux: null, status: "pending-ast" })
    continue
  }

  const platforms = patch.platforms && patch.platforms.length > 0 ? patch.platforms : [...graphs.keys()]
  const counts = platforms.map((platform) => graphTotal(graphs.get(platform) ?? [], patch))
  const broken = counts.some((c) => c === null)
  const okAll = !broken && counts.every((c) => c === expected)
  const zeroAll = !broken && counts.every((c) => c === 0)
  let status: string
  let symbolRisk: string[] | undefined
  if (broken) status = "regex-error"
  else if (okAll) {
    symbolRisk = symbolRiskInGraphs(patch)
    status = symbolRisk.length > 0 ? "SYMBOL-RISK" : "OK"
  } else if (zeroAll) status = "MISSING"
  else status = "DRIFT"
  rows.push({
    file: patch.file,
    name: patch.name,
    kind: patch.locator_kind,
    expected,
    darwin: counts[0] ?? null,
    linux: counts[1] ?? null,
    status,
    symbolRisk,
  })
}

// AST pass: run every pending AST locator against each graph file and sum
// bundle-level match counts.
if (astBatches.size > 0) {
  const batch = [...astBatches.values()].map((patch) => ({
    name: patch.name,
    expectedMatches: undefined as number | undefined,
    ast: patch.ast!,
    transform: patch.transform!,
  }))
  const totals = new Map<string, Map<string, number>>(
    batch.map((entry) => [entry.name, new Map([...graphs.keys()].map((platform) => [platform, 0]))]),
  )
  const astPlatforms = new Map<string, string[]>(
    [...astBatches.values()].map((patch) => [
      patch.name,
      patch.platforms && patch.platforms.length > 0 ? patch.platforms : [...graphs.keys()],
    ]),
  )
  for (const [platform, files] of graphs) {
    const scoped = batch.filter((entry) => (astPlatforms.get(entry.name) ?? []).includes(platform))
    if (scoped.length === 0) continue
    for (const file of files) {
      const results = verifyAstTransformPatches(file.text, scoped)
      for (let i = 0; i < scoped.length; i++) {
        const entry = totals.get(scoped[i].name)!
        entry.set(platform, (entry.get(platform) ?? 0) + results[i].matches)
      }
    }
  }
  for (const row of rows) {
    if (row.status !== "pending-ast") continue
    const counts = totals.get(row.name)
    if (!counts) continue
    const platforms = astPlatforms.get(row.name) ?? []
    row.darwin = platforms.includes("darwin-arm64") ? counts.get("darwin-arm64") ?? null : null
    row.linux = platforms.includes("linux-x64") ? counts.get("linux-x64") ?? null : null
    const values = platforms.map((p) => counts.get(p) ?? 0)
    const patch = astBatches.get(row.name)!
    if (values.length === 0) {
      row.status = "MISSING"
      continue
    }
    if (values.every((v) => v === row.expected)) {
      const risks = symbolRiskInGraphs(patch)
      row.status = risks.length > 0 ? "SYMBOL-RISK" : "OK"
      row.symbolRisk = risks
    } else if (values.every((v) => v === 0)) row.status = "MISSING"
    else row.status = "DRIFT"
  }
}

const byStatus = (status: string): Row[] => rows.filter((r) => r.status === status)
console.log(
  `active-on-${select} counted-in-${bundle}${fileFilter ? ` file~${fileFilter}` : ""}: ${rows.length} entries`,
)
console.log(`  OK (port verbatim): ${byStatus("OK").length}`)
console.log(`  SYMBOL-RISK:        ${byStatus("SYMBOL-RISK").length}`)
console.log(`  MISSING (0 hits):   ${byStatus("MISSING").length}`)
console.log(`  DRIFT (wrong count):${byStatus("DRIFT").length}`)
console.log(`  REGEX-ERROR:        ${byStatus("regex-error").length}`)
for (const row of byStatus("SYMBOL-RISK")) {
  console.log(`[SYMBOL-RISK] ${row.file} :: ${row.name} stale-identifiers=${row.symbolRisk?.join(",")}`)
}
for (const row of [...byStatus("regex-error"), ...byStatus("DRIFT"), ...byStatus("MISSING")]) {
  console.log(`[${row.status}] ${row.file} :: ${row.name} expected=${row.expected} darwin=${row.darwin} linux=${row.linux}`)
}
for (const row of byStatus("OK")) {
  console.log(`[OK] ${row.file} :: ${row.name} expected=${row.expected} darwin=${row.darwin} linux=${row.linux}`)
}
