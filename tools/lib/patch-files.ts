import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import * as TOML from "@iarna/toml"
import type { AstCapture, AstLocator, AstTransform } from "./ast-transform-patches"
import type { PatchTest } from "./patch-tests"

export type LocatorKind = "regex" | "literal" | "ast_transform"

export type PatchEntry = {
  file: string
  featureName: string
  name: string
  enabled: boolean
  target_version: string
  applies_to?: string
  platforms?: string[]
  rationale: string
  rationale_ref: string
  locator_pattern?: string
  locator_kind: LocatorKind
  expected_matches?: number
  replacement?: string
  ast?: AstLocator
  transform?: AstTransform
  gated_by_env?: string
  tests?: PatchTest[]
}

type PatchFields = {
  name?: unknown
  enabled?: unknown
  target_version?: unknown
  applies_to?: unknown
  platforms?: unknown
  rationale?: unknown
  rationale_ref?: unknown
  locator_pattern?: unknown
  locator_kind?: unknown
  expected_matches?: unknown
  replacement?: unknown
  ast?: unknown
  transform?: unknown
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

  return entries.map((entry, index) => {
    const kind = locatorKind(requiredString(entry.locator_kind, `patches[${index}].locator_kind`, file), file)
    return {
      file,
      featureName,
      name: requiredString(entry.name, `patches[${index}].name`, file),
      enabled: inheritedBoolean(entry.enabled, parsed.enabled, `patches[${index}].enabled`, file),
      target_version: inheritedString(entry.target_version, parsed.target_version, "target_version", file),
      applies_to: optionalInheritedString(entry.applies_to, parsed.applies_to, "applies_to", file),
      platforms: optionalInheritedStringArray(entry.platforms, parsed.platforms, "platforms", file),
      rationale: inheritedString(entry.rationale, parsed.rationale, `patches[${index}].rationale`, file),
      rationale_ref: requiredString(entry.rationale_ref, `patches[${index}].rationale_ref`, file),
      locator_kind: kind,
      locator_pattern:
        kind === "ast_transform"
          ? undefined
          : requiredString(entry.locator_pattern, `patches[${index}].locator_pattern`, file),
      expected_matches: optionalNumber(entry.expected_matches, `patches[${index}].expected_matches`, file),
      replacement:
        kind === "ast_transform" ? undefined : requiredString(entry.replacement, `patches[${index}].replacement`, file),
      ast: kind === "ast_transform" ? astLocator(entry.ast, `patches[${index}].ast`, file) : undefined,
      transform:
        kind === "ast_transform" ? astTransform(entry.transform, `patches[${index}].transform`, file) : undefined,
      gated_by_env: optionalInheritedString(entry.gated_by_env, parsed.gated_by_env, "gated_by_env", file),
      tests: Array.isArray(entry.tests) ? (entry.tests as PatchTest[]) : undefined,
    }
  })
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

function optionalInheritedStringArray(
  value: unknown,
  inherited: unknown,
  field: string,
  file: string,
): string[] | undefined {
  const resolved = value ?? inherited
  if (resolved === undefined || resolved === null) return undefined
  if (Array.isArray(resolved) && resolved.every((v) => typeof v === "string")) return resolved as string[]
  throw new Error(`${file}: expected string array field ${field}`)
}

function inheritedBoolean(value: unknown, inherited: unknown, field: string, file: string): boolean {
  const resolved = value ?? inherited
  if (resolved === undefined || resolved === null) return true
  if (typeof resolved === "boolean") return resolved
  throw new Error(`${file}: expected boolean field ${field}`)
}

function locatorKind(value: string, file: string): LocatorKind {
  if (value === "regex" || value === "literal" || value === "ast_transform") return value
  throw new Error(`${file}: locator_kind must be "regex", "literal", or "ast_transform"`)
}

function astLocator(value: unknown, field: string, file: string): AstLocator {
  const record = requiredRecord(value, field, file)
  if (record.schema !== 1) throw new Error(`${file}: ${field}.schema must be 1`)
  return {
    schema: 1,
    anchor: optionalAstAnchor(record.anchor, `${field}.anchor`, file),
    captures: optionalAstCaptures(record.captures, `${field}.captures`, file),
    match: astMatch(record.match, `${field}.match`, file),
  }
}

function astMatch(value: unknown, field: string, file: string): AstLocator["match"] {
  const match = requiredRecord(value, field, file)
  return {
    node: requiredString(match.node, `${field}.node`, file),
    callee_property: optionalString(match.callee_property, `${field}.callee_property`, file),
    string_literal: optionalString(match.string_literal, `${field}.string_literal`, file),
    direct_string_literal: optionalString(match.direct_string_literal, `${field}.direct_string_literal`, file),
    object_property: optionalString(match.object_property, `${field}.object_property`, file),
    object_property_direct: optionalString(match.object_property_direct, `${field}.object_property_direct`, file),
    member_property: optionalString(match.member_property, `${field}.member_property`, file),
    function_name: optionalString(match.function_name, `${field}.function_name`, file),
    method_name: optionalString(match.method_name, `${field}.method_name`, file),
    body_statement_count: optionalNumber(match.body_statement_count, `${field}.body_statement_count`, file),
    source: optionalString(match.source, `${field}.source`, file),
    source_regex: optionalString(match.source_regex, `${field}.source_regex`, file),
    string: optionalString(match.string, `${field}.string`, file),
    strings: optionalStrings(match.strings, `${field}.strings`, file),
    parent_node: optionalString(match.parent_node, `${field}.parent_node`, file),
  }
}

function optionalAstCaptures(value: unknown, field: string, file: string): Record<string, AstCapture> | undefined {
  if (value === undefined || value === null) return undefined
  const captures = requiredRecord(value, field, file)
  return Object.fromEntries(
    Object.entries(captures).map(([name, capture]) => {
      if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) throw new Error(`${file}: invalid AST capture name ${field}.${name}`)
      const record = requiredRecord(capture, `${field}.${name}`, file)
      const kind = requiredString(record.kind, `${field}.${name}.kind`, file)
      if (kind !== "identifier") throw new Error(`${file}: ${field}.${name}.kind must be "identifier"`)
      return [
        name,
        {
          kind,
          path: requiredString(record.path, `${field}.${name}.path`, file),
          select: record.select === undefined ? undefined : astMatch(record.select, `${field}.${name}.select`, file),
        },
      ]
    }),
  )
}

function astTransform(value: unknown, field: string, file: string): AstTransform {
  const record = requiredRecord(value, field, file)
  const op = requiredString(record.op, `${field}.op`, file)
  if (op === "replace_node") return { op, value: requiredString(record.value, `${field}.value`, file) }
  if (op === "replace_function_body") return { op, body: requiredString(record.body, `${field}.body`, file) }
  if (op === "replace_function_body_with_first_var_initializer_return") return { op }
  if (op === "set_object_property") {
    return {
      op,
      property: requiredString(record.property, `${field}.property`, file),
      value: requiredString(record.value, `${field}.value`, file),
    }
  }
  if (op === "append_object_property") return { op, code: requiredString(record.code, `${field}.code`, file) }
  if (op === "set_call_arg") {
    return {
      op,
      index: optionalNumber(record.index, `${field}.index`, file) ?? missingNumber(`${field}.index`, file),
      value: requiredString(record.value, `${field}.value`, file),
    }
  }
  if (op === "append_call_arg") return { op, arg: requiredString(record.arg, `${field}.arg`, file) }
  if (op === "wrap_expression") return { op, template: requiredString(record.template, `${field}.template`, file) }
  if (op === "replace_with_consequent") return { op }
  if (op === "prepend_function_body") return { op, code: requiredString(record.code, `${field}.code`, file) }
  if (op === "insert_before_node") return { op, code: requiredString(record.code, `${field}.code`, file) }
  if (op === "insert_after_node") return { op, code: requiredString(record.code, `${field}.code`, file) }
  if (op === "replace_substring") {
    return {
      op,
      find: requiredString(record.find, `${field}.find`, file),
      value: requiredString(record.value, `${field}.value`, file),
    }
  }
  if (op === "replace_substring_regex") {
    return {
      op,
      find: requiredString(record.find, `${field}.find`, file),
      value: requiredString(record.value, `${field}.value`, file),
    }
  }
  throw new Error(`${file}: unsupported AST transform op ${op}`)
}

function requiredRecord(value: unknown, field: string, file: string): Record<string, unknown> {
  if (value && typeof value === "object" && !Array.isArray(value)) return value as Record<string, unknown>
  throw new Error(`${file}: missing required table ${field}`)
}

function optionalString(value: unknown, field: string, file: string): string | undefined {
  if (value === undefined || value === null) return undefined
  if (typeof value === "string") return value
  throw new Error(`${file}: expected string field ${field}`)
}

function optionalStrings(value: unknown, field: string, file: string): string[] | undefined {
  if (value === undefined || value === null) return undefined
  if (Array.isArray(value) && value.every((v) => typeof v === "string")) return value as string[]
  throw new Error(`${file}: expected string array field ${field}`)
}

function optionalAstAnchor(value: unknown, field: string, file: string): AstLocator["anchor"] {
  if (value === undefined || value === null) return undefined
  if (value === "declaration") return value
  throw new Error(`${file}: ${field} must be "declaration"`)
}

function missingNumber(field: string, file: string): never {
  throw new Error(`${file}: missing required number field ${field}`)
}
