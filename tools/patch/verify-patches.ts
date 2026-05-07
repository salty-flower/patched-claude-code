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
import * as TOML from "@iarna/toml"
import { loadPatchTestsFromToml } from "../lib/patch-tests"

type Patch = {
  name: string
  target_version: string
  applies_to?: string
  rationale: string
  rationale_ref: string
  locator_pattern: string
  locator_kind: "regex" | "literal"
  expected_matches?: number
  replacement: string
  gated_by_env?: string
}

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")

function parseArgs(argv: string[]): { patches: string[]; target?: string } {
  const out: { patches: string[]; target?: string } = { patches: [] }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === "--against") {
      out.target = argv[++i]
    } else {
      out.patches.push(a)
    }
  }
  if (out.patches.length === 0) {
    const dir = join(ROOT, "patches")
    out.patches = readdirSync(dir)
      .filter((f) => f.endsWith(".toml"))
      .map((f) => join(dir, f))
  }
  return out
}

function loadPatch(file: string): Patch & { tests?: unknown[] } {
  const raw = readFileSync(file, "utf8")
  return TOML.parse(raw) as unknown as Patch
}

function defaultTarget(p: Patch): string {
  return join(ROOT, "staging", p.target_version, "cli.js")
}

function verifyLocator(p: Patch, target: string): { ok: boolean; msg: string; matches: number } {
  const body = readFileSync(target, "utf8")
  let matches: number
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
  for (const file of files) {
    const p = loadPatch(file)
    const tgt = target ?? defaultTarget(p)
    if (!existsSync(tgt)) {
      console.error(`[${p.name}] target bundle missing: ${tgt}`)
      allOk = false
      continue
    }

    const lr = verifyLocator(p, tgt)
    const rr = verifyRationaleRef(p)
    const replOk = p.replacement.length > 0
    const tests = loadPatchTestsFromToml(readFileSync(file, "utf8"))
    const testsOk = tests.length > 0
    const ok = lr.ok && rr.ok && replOk && testsOk
    allOk &&= ok

    const tag = ok ? "ok" : "FAIL"
    console.log(`[${tag}] ${p.name}`)
    console.log(`     target=${tgt}`)
    console.log(`     ${lr.msg}`)
    console.log(`     ${rr.msg}`)
    if (!replOk) console.log(`     replacement is empty`)
    if (!testsOk) console.log(`     no [[tests]] entries`)
  }

  return allOk ? 0 : 1
}

process.exit(main())
