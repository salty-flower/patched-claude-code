import { expect, spyOn, test } from "bun:test"
import { createHash } from "node:crypto"
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  createStructuredPromptHook,
  SYSTEM_PROMPT_DIAGNOSTICS,
  SYSTEM_PROMPT_BRIDGE,
  type StructuredPromptSection,
  type StructuredPromptRule,
} from "../../runtime/system-prompt-overrides"

const version = "2.1.301"
const hash = (text: string) => `sha256-${createHash("sha256").update(text).digest("base64")}`
const sections: StructuredPromptSection[] = [
  { id: "intro", scope: "shared", text: "original static rules" },
  { id: "memory", scope: "session", text: "complete memory rules and /project-a/memory" },
  { id: "future_section", scope: "session", text: "unknown upstream content" },
]
function fixture(run: (root: string) => void) {
  const root = mkdtempSync(join(tmpdir(), "structured-prompt-"))
  try {
    run(root)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
}
function config(root: string, rules: StructuredPromptRule[], targetVersion = version) {
  writeFileSync(join(root, "config.json"), JSON.stringify({ schema: 2, targetVersion, rules }))
}
const rule: StructuredPromptRule = {
  id: "intro",
  scope: "shared",
  action: "replace",
  expectedSha256: hash(sections[0]!.text),
  file: "body.md",
}
const render = (input: StructuredPromptSection[]) => input.map((section) => section.text)
const options = (promptRoot: string) => ({ targetVersion: version, bundleSha256: "sha256-fixture", promptRoot })

test("bare context bypasses custom selections and legacy consumers remain available without structured config", () =>
  fixture((root) => {
    config(root, [rule])
    writeFileSync(join(root, "body.md"), "user rules")
    const bare: StructuredPromptSection[] = [{ id: "bare", scope: "session", text: "runtime bare context" }]
    expect(createStructuredPromptHook(options(root)).hook({ sections: bare, render })).toEqual([bare[0]!.text])
    rmSync(join(root, "config.json"))
    const previous = Reflect.get(globalThis, SYSTEM_PROMPT_BRIDGE)
    Reflect.set(globalThis, SYSTEM_PROMPT_BRIDGE, () => ({
      effectiveSections: ["legacy consumer"],
      effectiveVectorSha256: hash("legacy"),
      sectionDiff: [],
    }))
    try {
      expect(createStructuredPromptHook(options(root)).hook({ sections, render })).toEqual(["legacy consumer"])
    } finally {
      if (previous === undefined) Reflect.deleteProperty(globalThis, SYSTEM_PROMPT_BRIDGE)
      else Reflect.set(globalThis, SYSTEM_PROMPT_BRIDGE, previous)
    }
  }))

test("structured selectors survive dynamic context and cache layout changes and retain unknown sections", () =>
  fixture((root) => {
    config(root, [rule, { id: "memory", scope: "session", action: "keep" }])
    writeFileSync(join(root, "body.md"), "user rules")
    const { hook } = createStructuredPromptHook(options(root))
    expect(hook({ sections, render })).toEqual(["user rules", sections[1]!.text, sections[2]!.text])
    const projectB = sections.map((section) =>
      section.id === "memory" ? { ...section, text: "complete memory rules and /project-b/memory" } : section,
    )
    expect(hook({ sections: projectB, render: (input) => ["cache boundary", ...render(input)] })).toEqual([
      "cache boundary",
      "user rules",
      projectB[1]!.text,
      sections[2]!.text,
    ])
  }))

test("unreviewed variants retain native text and absence while independent replacements continue", () =>
  fixture((root) => {
    config(root, [
      rule,
      {
        id: "future_section",
        scope: "session",
        action: "replace",
        expectedSha256: hash(sections[2]!.text),
        file: "body.md",
      },
    ])
    writeFileSync(join(root, "body.md"), "user rules")
    const originalConfig = readFileSync(join(root, "config.json"), "utf8")
    const stderr = spyOn(process.stderr, "write").mockReturnValue(true)
    try {
      const { hook, recordRequest } = createStructuredPromptHook(options(root))
      const changed = [{ ...sections[0]!, text: "unreviewed native model variant" }, ...sections.slice(1)]
      const expected = [changed[0]!.text, sections[1]!.text, "user rules"]
      expect(hook({ sections, render })).toEqual(["user rules", sections[1]!.text, "user rules"])
      expect(hook({ sections: changed, render })).toEqual(expected)
      expect(hook({ sections: changed, render })).toEqual(expected)
      expect(stderr).toHaveBeenCalledTimes(1)
      expect(stderr.mock.calls[0]![0]).toContain("shared/intro hash_mismatch")
      recordRequest({ system: expected, tools: [], messages: [] }, "sdk")
      expect(Reflect.get(globalThis, SYSTEM_PROMPT_DIAGNOSTICS)).toMatchObject({
        recoveries: [{ id: "intro", scope: "shared", reason: "hash_mismatch" }],
        sections: [
          {
            id: "intro",
            source: "upstream",
            baselineSha256: hash(changed[0]!.text),
            effectiveSha256: hash(changed[0]!.text),
          },
          { id: "memory", source: "upstream" },
          { id: "future_section", source: "user" },
        ],
      })
      expect(hook({ sections: sections.slice(1), render })).toEqual([sections[1]!.text, "user rules"])
      recordRequest({}, "sdk")
      expect(Reflect.get(globalThis, SYSTEM_PROMPT_DIAGNOSTICS).recoveries).toEqual([
        { id: "intro", scope: "shared", reason: "absent" },
      ])
      expect(stderr).toHaveBeenCalledTimes(2)
      expect(hook({ sections, render })).toEqual(["user rules", sections[1]!.text, "user rules"])
      recordRequest({}, "sdk")
      expect(Reflect.get(globalThis, SYSTEM_PROMPT_DIAGNOSTICS).recoveries).toEqual([])
      expect(readFileSync(join(root, "config.json"), "utf8")).toBe(originalConfig)
      expect(stderr.mock.calls.flat().join("")).not.toContain(changed[0]!.text)
      expect(stderr.mock.calls.flat().join("")).not.toContain(sections[1]!.text)
      expect(() => hook({ sections: [...sections, sections[0]!], render })).toThrow("ambiguous upstream identity")
    } finally {
      stderr.mockRestore()
    }
  }))

test("stale removal and checked keep rules preserve native text and export the actual variant", () =>
  fixture((root) => {
    config(root, [
      { ...rule, action: "remove", file: undefined },
      { id: "memory", scope: "session", action: "keep", expectedSha256: hash("old memory") },
    ])
    const stderr = spyOn(process.stderr, "write").mockReturnValue(true)
    try {
      const { hook } = createStructuredPromptHook({ ...options(root), exportMode: "export" })
      const changed = [{ ...sections[0]!, text: "new upstream rules" }, ...sections.slice(1)]
      expect(hook({ sections: changed, render })).toEqual(render(changed))
      expect(readFileSync(join(root, "upstream/shared-intro.md"), "utf8")).toBe(changed[0]!.text)
      expect(JSON.parse(readFileSync(join(root, "sections.v2.json"), "utf8")).sections[0].baselineSha256).toBe(
        hash(changed[0]!.text),
      )
      expect(stderr).toHaveBeenCalledTimes(2)
    } finally {
      stderr.mockRestore()
    }
  }))

test("removal, literal upstream substitution, and immutable file snapshots", () =>
  fixture((root) => {
    config(root, [
      { ...rule, action: "remove", file: undefined },
      {
        id: "memory",
        scope: "session",
        action: "replace",
        file: "body.md",
        expectedSha256: hash("$& $` $' memory rules"),
      },
    ])
    writeFileSync(join(root, "body.md"), "prefix {{upstream}} suffix")
    const { hook } = createStructuredPromptHook(options(root))
    writeFileSync(join(root, "body.md"), "changed file")
    const input = sections.map((section) =>
      section.id === "memory" ? { ...section, text: "$& $` $' memory rules" } : section,
    )
    expect(hook({ sections: input, render })).toEqual(["prefix $& $` $' memory rules suffix", sections[2]!.text])
  }))

test("configuration validates version, duplicate selectors, hashes, files and placeholders", () =>
  fixture((root) => {
    config(root, [], "2.1.302")
    expect(() => createStructuredPromptHook(options(root))).toThrow("targetVersion 2.1.301")
    config(root, [rule, rule])
    writeFileSync(join(root, "body.md"), "rules")
    expect(() => createStructuredPromptHook(options(root))).toThrow("duplicate target")
    config(root, [{ ...rule, expectedSha256: undefined }])
    expect(() => createStructuredPromptHook(options(root))).toThrow("expectedSha256 is required")
    config(root, [rule])
    writeFileSync(join(root, "body.md"), "{{upstream}} {{upstream}}")
    expect(() => createStructuredPromptHook(options(root))).toThrow("repeated {{upstream}}")
    writeFileSync(join(root, "body.md"), new Uint8Array([0xc3, 0x28]))
    expect(() => createStructuredPromptHook(options(root))).toThrow("unreadable UTF-8")
  }))

test("no configuration preserves renderer input and final diagnostics contain only identifiers and hashes", () =>
  fixture((root) => {
    const originalWrite = process.stderr.write
    let stderr = ""
    process.stderr.write = ((text: string) => {
      stderr += text
      return true
    }) as typeof process.stderr.write
    try {
      const { hook, recordRequest } = createStructuredPromptHook({
        ...options(root),
        exportMode: "export",
        writeDiagnostic: () => {},
      })
      hook({
        sections,
        render: (input) => {
          expect(input).toBe(sections)
          return render(input)
        },
      })
      const finalSystem = [{ type: "text", text: "final user and memory content with output style and steering" }]
      recordRequest({ system: finalSystem }, "repl_main_thread")
      const diagnostic = JSON.parse(stderr.slice("[system-prompt-request] ".length))
      expect(diagnostic.systemSha256).toBe(hash(JSON.stringify(finalSystem)))
      expect(stderr).not.toContain("/project-a")
      expect(stderr).not.toContain("original static rules")
      expect(stderr).not.toContain("final user")
      expect(diagnostic.sections.every((section: { source: string }) => section.source === "upstream")).toBe(true)
      expect(JSON.parse(readFileSync(join(root, "sections.v2.json"), "utf8")).sections[0].id).toBe("intro")
      stderr = ""
      recordRequest({ system: finalSystem }, "compact")
      expect(stderr).toBe("")
      hook({ sections: [{ id: "bare", scope: "session", text: "bare runtime context" }], render })
      recordRequest({ system: [{ type: "text", text: "bare runtime context" }] }, "sdk")
      const bareDiagnostic = JSON.parse(stderr.slice("[system-prompt-request] ".length))
      expect(bareDiagnostic.sections).toEqual([])
      expect(bareDiagnostic.vector).toBeUndefined()
    } finally {
      process.stderr.write = originalWrite
    }
  }))
