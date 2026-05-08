import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import * as TOML from "@iarna/toml"
import type { PatchTest } from "./patch-tests"

export type LocatorKind = "regex" | "literal"

export type PatchEntry = {
  file: string
  featureName: string
  name: string
  target_version: string
  applies_to?: string
  rationale: string
  rationale_ref: string
  locator_pattern: string
  locator_kind: LocatorKind
  expected_matches?: number
  replacement: string
  gated_by_env?: string
  tests?: PatchTest[]
}

type PatchFields = {
  name?: unknown
  target_version?: unknown
  applies_to?: unknown
  rationale?: unknown
  rationale_ref?: unknown
  locator_pattern?: unknown
  locator_kind?: unknown
  expected_matches?: unknown
  replacement?: unknown
  gated_by_env?: unknown
  tests?: unknown
}

type PatchToml = PatchFields & {
  patches?: unknown
}

export function loadPatchEntriesFromToml(rawToml: string, file: string): PatchEntry[] {
  const parsed = TOML.parse(rawToml) as unknown as PatchToml
  const featureName = requiredString(parsed.name, "name", file)
  const entries = Array.isArray(parsed.patches) ? (parsed.patches as PatchFields[]) : [parsed]

  return entries.map((entry, index) => ({
    file,
    featureName,
    name: requiredString(entry.name, `patches[${index}].name`, file),
    target_version: inheritedString(entry.target_version, parsed.target_version, "target_version", file),
    applies_to: optionalInheritedString(entry.applies_to, parsed.applies_to, "applies_to", file),
    rationale: inheritedString(entry.rationale, parsed.rationale, `patches[${index}].rationale`, file),
    rationale_ref: requiredString(entry.rationale_ref, `patches[${index}].rationale_ref`, file),
    locator_pattern: requiredString(entry.locator_pattern, `patches[${index}].locator_pattern`, file),
    locator_kind: locatorKind(requiredString(entry.locator_kind, `patches[${index}].locator_kind`, file), file),
    expected_matches: optionalNumber(entry.expected_matches, `patches[${index}].expected_matches`, file),
    replacement: requiredString(entry.replacement, `patches[${index}].replacement`, file),
    gated_by_env: optionalInheritedString(entry.gated_by_env, parsed.gated_by_env, "gated_by_env", file),
    tests: Array.isArray(entry.tests) ? (entry.tests as PatchTest[]) : undefined,
  }))
}

export function loadPatchEntriesFromFile(file: string): PatchEntry[] {
  return loadPatchEntriesFromToml(readFileSync(file, "utf8"), file)
}

export function loadPatchEntriesFromDirectory(root: string): PatchEntry[] {
  const patchDir = join(root, "patches")
  return readdirSync(patchDir)
    .filter((file) => file.endsWith(".toml"))
    .sort()
    .flatMap((file) => loadPatchEntriesFromFile(join(patchDir, file)))
}

function requiredString(value: unknown, field: string, file: string): string {
  if (typeof value === "string" && value.length > 0) return value
  throw new Error(`${file}: missing required string field ${field}`)
}

function inheritedString(value: unknown, inherited: unknown, field: string, file: string): string {
  return requiredString(value ?? inherited, field, file)
}

function optionalInheritedString(value: unknown, inherited: unknown, field: string, file: string): string | undefined {
  const resolved = value ?? inherited
  if (resolved === undefined || resolved === null || resolved === "") return undefined
  if (typeof resolved === "string") return resolved
  throw new Error(`${file}: expected string field ${field}`)
}

function optionalNumber(value: unknown, field: string, file: string): number | undefined {
  if (value === undefined || value === null) return undefined
  if (typeof value === "number") return value
  throw new Error(`${file}: expected number field ${field}`)
}

function locatorKind(value: string, file: string): LocatorKind {
  if (value === "regex" || value === "literal") return value
  throw new Error(`${file}: locator_kind must be "regex" or "literal"`)
}
