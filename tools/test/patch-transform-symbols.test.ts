import { expect, test } from "bun:test"
import { join } from "node:path"
import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import { inc, satisfies, subset, valid } from "semver"
import { loadPatchEntriesFromDirectory, type PatchEntry } from "../lib/patch-files"
import { targetVersion } from "../lib/target"

const ROOT = join(import.meta.dir, "..", "..")

/**
 * `just verify` proves a transform's locator still matches. It cannot prove the
 * code that transform injects still means what its author meant: an injected
 * snippet that reads a bare minified name keeps matching and keeps compiling
 * after upstream rebinds that name to something else, and then it silently does
 * nothing (or does the wrong thing) in every shipped bundle.
 *
 * The teammate in-process effort transform did exactly that. Authored at 2.1.263
 * when the runner parameter was `s`, it injected `...s.effort!==void 0&&{...}`;
 * from 2.1.268 the parameter is `n` and `s` is the destructured `taskId`, so
 * `s.effort` has been `undefined` ever since. The entry's static assertion
 * pinned the injected text, which of course was present — the assertion proved
 * the text was inserted, not that it referred to anything real.
 *
 * These tests enforce the invariant that would have caught it: injected code may
 * only reference bindings whose meaning this repo controls — a declared
 * `%%CAPTURE:...%%`, a repo-owned name, a JS builtin, or a binding the snippet
 * declares itself. Anything else is an upstream minified name that must be
 * routed through a capture.
 */

// `__expr__` stands in for the expression a `wrap_expression` template wraps;
// the placeholder is ours, so the template itself references no upstream name.
const REPO_OWNED = /^(?:__acc_\w+|patched[A-Z]\w*|_acc_\w+|__capture_\w+|__expr__)$/

// Language keywords and JS/Web globals. Babel does not report noncomputed
// property names as references, so ordinary member names do not belong here.
const ALLOWED_NAMES = new Set([
  // keywords and operators
  "true",
  "false",
  "null",
  "undefined",
  "this",
  "arguments",
  "typeof",
  "instanceof",
  "void",
  "new",
  "delete",
  "in",
  "of",
  "return",
  "if",
  "else",
  "for",
  "while",
  "do",
  "try",
  "catch",
  "finally",
  "throw",
  "switch",
  "case",
  "default",
  "break",
  "continue",
  "let",
  "const",
  "var",
  "function",
  "class",
  "extends",
  "super",
  "yield",
  "await",
  "async",
  "static",
  "get",
  "set",
  "import",
  "export",
  "from",
  "as",
  // global objects and functions
  "globalThis",
  "process",
  "console",
  "window",
  "document",
  "global",
  "module",
  "require",
  "exports",
  "String",
  "Number",
  "Boolean",
  "Object",
  "Array",
  "Math",
  "JSON",
  "Symbol",
  "Promise",
  "Map",
  "Set",
  "WeakMap",
  "WeakSet",
  "Date",
  "RegExp",
  "Error",
  "TypeError",
  "RangeError",
  "SyntaxError",
  "Function",
  "Proxy",
  "Reflect",
  "BigInt",
  "Intl",
  "URL",
  "URLSearchParams",
  "TextEncoder",
  "TextDecoder",
  "Buffer",
  "setTimeout",
  "clearTimeout",
  "setInterval",
  "clearInterval",
  "queueMicrotask",
  "structuredClone",
  "encodeURIComponent",
  "decodeURIComponent",
  "isNaN",
  "isFinite",
  "parseInt",
  "parseFloat",
  "fetch",
  "AbortController",
  "AbortSignal",
  "crypto",
])

function isActiveAt(patch: PatchEntry, version: string): boolean {
  if (!patch.enabled) return false
  const range = patch.applies_to ?? patch.target_version
  return valid(range) ? range === version : satisfies(version, range)
}

/** The JavaScript an operation injects and the syntactic shape it uses. */
type Fragment = {
  code: string
  shape: "statements" | "expression" | "objectMember"
}

export function injectedFragment(patch: PatchEntry): Fragment | undefined {
  if (patch.locator_kind !== "ast_transform") {
    if (patch.replacement === undefined || patch.locator_pattern === undefined) return undefined
    rejectBackreferences(patch.replacement)
    return { code: patch.replacement, shape: "statements" }
  }

  const transform = patch.transform as
    | { op?: string; code?: string; value?: string; body?: string; arg?: string; template?: string; find?: string }
    | undefined
  if (!transform?.op) return undefined
  const statements = transform.code ?? transform.body
  switch (transform.op) {
    case "prepend_function_body":
    case "insert_before_node":
    case "insert_after_node":
    case "replace_function_body":
      return statements === undefined ? undefined : { code: statements, shape: "statements" }
    case "append_object_property":
      return statements === undefined ? undefined : { code: statements, shape: "objectMember" }
    case "replace_node":
    case "set_object_property":
    case "set_call_arg":
    case "append_call_arg":
    case "wrap_expression": {
      const expression = transform.value ?? transform.arg ?? transform.template
      return expression === undefined ? undefined : { code: expression, shape: "expression" }
    }
    case "replace_substring":
      return transform.value === undefined ? undefined : { code: transform.value, shape: "statements" }
    case "replace_substring_regex":
      if (transform.value === undefined) return undefined
      rejectBackreferences(transform.value)
      return { code: transform.value, shape: "statements" }
    default:
      return undefined
  }
}

function rejectBackreferences(code: string): void {
  const backreferences = [...code.matchAll(/\$(?:&|`|'|\d{1,2})/g)].map((match) => match[0])
  if (backreferences.length > 0) {
    throw new Error(`replacement contains forbidden backreference(s): ${[...new Set(backreferences)].join(",")}`)
  }
}

/**
 * Identifiers the snippet references but does not define. Capture placeholders
 * are substituted with a legal identifier first so the parse cannot fail on the
 * `%%` delimiters.
 */
export function externalIdentifiers(code: string, shape: Fragment["shape"] = "statements"): string[] {
  const substituted = code
    .replace(/%%CAPTURE:(\w+)%%/g, "__capture_$1")
    // `wrap_expression` templates carry a placeholder for the expression they
    // wrap, which is not valid JS on its own.
    .replace(/%%EXPR%%/g, "__expr__")
  // An injected fragment is not a program. Try the shapes the op implies first,
  // then fall back to the others: ops are loosely typed (a `replace_node` value
  // may be a statement), and the raw parse stays first so a genuinely malformed
  // snippet reports its own error rather than a wrapper's.
  const statements = [
    (body: string) => body,
    (body: string) => `async function __probe(){${body}}`,
    (body: string) => `function __probe(){${body}}`,
    (body: string) => `class __Probe{#t;async __probe(){${body}}}`,
  ]
  const expressions = [
    (body: string) => body,
    (body: string) => `(${body})`,
    (body: string) => `void (${body})`,
    (body: string) => `class __Probe{#t;__probe(){return (${body})}}`,
  ]
  const objectMembers = [(b: string) => `({${b}})`, (b: string) => `({${b}}) && 0`]
  const byShape: Record<Fragment["shape"], Array<(body: string) => string>> = {
    statements: [...statements, ...objectMembers, ...expressions],
    expression: [...expressions, ...statements, ...objectMembers],
    objectMember: [...objectMembers, ...statements, ...expressions],
  }
  let ast: ReturnType<typeof parse> | undefined
  let firstError = ""
  for (const wrap of byShape[shape]) {
    try {
      ast = parse(wrap(substituted), { sourceType: "module", errorRecovery: false })
      break
    } catch (error) {
      if (!firstError) firstError = (error as Error).message
    }
  }
  if (!ast) throw new Error(`injected transform code does not parse: ${firstError}`)

  const references = new Set<string>()
  traverse(ast, {
    ReferencedIdentifier(path) {
      const name = path.node.name
      if (!path.scope.hasBinding(name)) references.add(name)
    },
  })

  return [...references].filter((name) => !ALLOWED_NAMES.has(name) && !REPO_OWNED.test(name)).sort()
}

function analysableIdentifiers(code: string, shape: Fragment["shape"]): string[] {
  try {
    return externalIdentifiers(code, shape)
  } catch {
    return looseBareIdentifiers(code)
  }
}

/** Conservative fallback for intentionally partial replacement fragments. */
function looseBareIdentifiers(code: string): string[] {
  const substituted = code.replace(/%%CAPTURE:(\w+)%%/g, "__capture_$1").replace(/%%EXPR%%/g, "__expr__")
  if (
    !/(?:\$\{|=>|\b(?:if|for|while|switch|catch|with)\s*\(|\b(?:let|const|var|function|class)\s+[A-Za-z_$]|[A-Za-z_$][A-Za-z0-9_$]*\s*(?:\.|\?\.)[A-Za-z_$]|(?:^|[;,(])\s*[A-Za-z_$][A-Za-z0-9_$]*\s*=)/u.test(
      substituted,
    )
  )
    return []
  const executable = substituted
    .replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/gs, " ")
    .replace(/`(?:\\.|[^`\\])*`/gs, " ")
  const names = new Set<string>()
  for (const match of executable.matchAll(/[A-Za-z_$][A-Za-z0-9_$]*/g)) {
    const name = match[0]
    const start = match.index
    const before = executable.slice(0, start).trimEnd().at(-1)
    const after = executable
      .slice(start + name.length)
      .trimStart()
      .at(0)
    if (name === "$" || before === "." || before === "#" || after === ":") continue
    if (ALLOWED_NAMES.has(name) || REPO_OWNED.test(name)) continue
    names.add(name)
  }
  return [...names].sort()
}

test("the detector catches the historical silent no-op", () => {
  // The exact snippet the 2.1.263 teammate entry injected and kept injecting.
  const historical = "...s.effort!==void 0&&{effort:s.effort}"
  expect(externalIdentifiers(historical, "objectMember")).toEqual(["s"])

  // The 2.1.273 form names the config binding directly and is capped to one
  // release, so it is reported the same way — the gate is about noticing, and
  // the entry's scope is what makes a bare name acceptable.
  expect(externalIdentifiers("...n.effort!==void 0&&{effort:n.effort}", "objectMember")).toEqual(["n"])
})

test("the detector ignores self-declared bindings, captures, and builtins", () => {
  expect(
    externalIdentifiers(
      'let P=arguments[2]?.input?.file_path,Z=P?` \xB7 ${String(P).split(/[\\\\/]/).pop()||String(P)}`:"";',
      "statements",
    ),
  ).toEqual([])
  expect(externalIdentifiers("effort:patchedAgentEffort??%%CAPTURE:agent%%?.effort", "objectMember")).toEqual([])
  expect(externalIdentifiers("agentOverride:%%CAPTURE:options%%.agentEffortValue", "objectMember")).toEqual([])
  expect(
    externalIdentifiers(
      "agentEffortValue:%%CAPTURE:context%%.permissionLayers?.reduce((value,layer)=>layer.patchedAgentOverride===true?layer.effort:value,void 0)",
      "objectMember",
    ),
  ).toEqual([])
  expect(
    externalIdentifiers(
      'for(let [__acc_a,__acc_b]of[["X","Y"]]){let __acc_c=process.env[__acc_a]?.trim();if(__acc_c&&e===__acc_c)return!0}',
      "statements",
    ),
  ).toEqual(["e"])
})

test("the detector catches computed, shorthand, out-of-scope, and misleadingly named references", () => {
  expect(externalIdentifiers("captured[s]", "expression")).toEqual(["captured", "s"])
  expect(externalIdentifiers("captured[value]", "expression")).toEqual(["captured", "value"])
  expect(externalIdentifiers("({s})", "expression")).toEqual(["s"])
  expect(externalIdentifiers("s.effort;(()=>{let s})()", "statements")).toEqual(["s"])
})

test("malformed fragments fail closed through the conservative fallback", () => {
  expect(() => externalIdentifiers("if(x){", "statements")).toThrow("injected transform code does not parse")
  expect(analysableIdentifiers("if(x){", "statements")).toEqual(["x"])
})

test("replacement backreferences are rejected rather than treated as captures", () => {
  expect(() =>
    injectedFragment({
      locator_kind: "regex",
      locator_pattern: "return ([A-Za-z_$][A-Za-z0-9_$]*)",
      replacement: "return $1",
    } as PatchEntry),
  ).toThrow("forbidden backreference")
})

test("target-release bounds exclude the next patch release", () => {
  expect(boundedBeforeNextRelease("2.1.273", ">=2.1.273 <2.1.274")).toBeTrue()
  expect(boundedBeforeNextRelease("2.1.273", "2.1.273")).toBeTrue()
  expect(boundedBeforeNextRelease("2.1.273", ">=2.1.263 <2.1.274")).toBeTrue()
  expect(boundedBeforeNextRelease("2.1.273", ">=2.1.273 <2.2.0")).toBeFalse()
})

test("substring and literal replacements expose retained locator names too", () => {
  const substring = injectedFragment({
    locator_kind: "ast_transform",
    transform: { op: "replace_substring", find: "return n.value", value: "return n.value+s.effort" },
  } as PatchEntry)
  expect(substring && externalIdentifiers(substring.code, substring.shape)).toEqual(["n", "s"])

  const literal = injectedFragment({
    locator_kind: "literal",
    locator_pattern: "return n.value",
    replacement: "return n.value+s.effort",
  } as PatchEntry)
  expect(literal && externalIdentifiers(literal.code, literal.shape)).toEqual(["n", "s"])
})

test("no patch active at the current target injects an unanchored bare name", () => {
  const version = targetVersion()
  const violations: string[] = []
  for (const patch of loadPatchEntriesFromDirectory(ROOT)) {
    if (!isActiveAt(patch, version)) continue
    let fragment: Fragment | undefined
    let external: string[]
    try {
      fragment = injectedFragment(patch)
      if (fragment === undefined) continue
      external = analysableIdentifiers(fragment.code, fragment.shape)
    } catch (error) {
      violations.push(`${patch.name}: injected code could not be analysed (${(error as Error).message})`)
      continue
    }
    if (external.length === 0) continue
    // Directly named upstream locals are acceptable only when this range ends
    // before the next patch release. The next target must re-anchor them.
    if (!boundedBeforeNextRelease(version, patch.applies_to ?? patch.target_version)) {
      violations.push(
        `${patch.name}: injects bare [${external.join(",")}] with range ${patch.applies_to ?? "(file default)"}`,
      )
    }
  }
  expect(violations).toEqual([])
})

function boundedBeforeNextRelease(version: string, range: string | undefined): boolean {
  if (!range || !valid(version)) return false
  const next = inc(version, "patch")
  if (!next || !satisfies(version, range)) return false
  return subset(range, `<${next}`)
}
