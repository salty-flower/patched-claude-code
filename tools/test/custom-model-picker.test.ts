import { describe, expect, test } from "bun:test"
import { resolve } from "node:path"
import { applyAstTransformPatches } from "../lib/ast-transform-patches"
import { loadPatchEntriesFromFile, type PatchEntry } from "../lib/patch-files"

type Row = { value: string; label?: string; description?: string }
type Environment = Record<string, string | undefined>
const entries = loadPatchEntriesFromFile(resolve(import.meta.dir, "../../patches/custom-model-slots.toml"))
const pickerPatches = entries.filter((entry) => entry.name.startsWith("append-second-custom-model-option"))

function picker(patch: PatchEntry): (rows: Row[], environment: Environment) => Row[] {
  const source = patch.ast?.match.source
  if (typeof source !== "string" || !patch.ast || !patch.transform)
    throw new Error(`${patch.name}: expected source locator`)
  const rowsName = source.match(/([\w$]+)\.push\(/)?.[1]
  const slotName = source.match(/if\(([\w$]+)&&/)?.[1]
  if (!rowsName || !slotName) throw new Error(`${patch.name}: cannot derive upstream fixture bindings`)
  const namespaces = [
    ...new Set([...source.matchAll(/([\w$]+)\.ANTHROPIC_CUSTOM_MODEL_OPTION/g)].map((match) => match[1])),
  ]
  const helpers = [...new Set([...source.matchAll(/\?\?([\w$]+)\(/g)].map((match) => match[1]))]
  const declarations = [
    `const ${rowsName}=inputRows,${slotName}=process.env.ANTHROPIC_CUSTOM_MODEL_OPTION;`,
    ...namespaces.map(
      (name) =>
        `const ${name}=Object.freeze({ANTHROPIC_CUSTOM_MODEL_OPTION_NAME:process.env.ANTHROPIC_CUSTOM_MODEL_OPTION_NAME,ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION:process.env.ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION});`,
    ),
    ...helpers.map((name) => `const ${name}=(value)=>value;`),
  ].join("")
  const fixture = `function fixture(inputRows){${declarations}${source}return ${rowsName}}`
  // Apply the real locator, captures and transform. A copied predicate would miss
  // changes to insertion order, upstream slot 1 wrapping or namespace accessors.
  const transformed = applyAstTransformPatches(fixture, [
    {
      name: patch.name,
      ast: patch.ast,
      transform: patch.transform,
      expectedMatches: 1,
    },
  ]).source
  const execute = new Function("process", "inputRows", `${transformed};return fixture(inputRows);`) as (
    process: { env: Environment },
    inputRows: Row[],
  ) => Row[]
  return (rows, environment) => execute({ env: environment }, structuredClone(rows))
}

test("every historical picker variant participates in the behavior regression", () => {
  expect(pickerPatches).toHaveLength(13)
})

for (const patch of pickerPatches) {
  describe(patch.name, () => {
    test("reads slot 2 name, description and slug without a registered namespace getter", () => {
      const result = picker(patch)([{ value: "default" }], {
        ANTHROPIC_CUSTOM_MODEL_OPTION: "provider/one",
        ANTHROPIC_CUSTOM_MODEL_OPTION_NAME: "First slot",
        ANTHROPIC_CUSTOM_MODEL_OPTION_2: " provider/two ",
        ANTHROPIC_CUSTOM_MODEL_OPTION_2_NAME: "Second slot",
        ANTHROPIC_CUSTOM_MODEL_OPTION_2_DESCRIPTION: "Second description",
      })
      expect(result).toEqual([
        { value: "default" },
        { value: "provider/one", label: "First slot", description: "Custom model (provider/one)" },
        { value: "provider/two", label: "Second slot", description: "Second description" },
      ])
    })

    test("deduplicates both slots against real tier aliases with case, whitespace and [1m]", () => {
      const rows = ["default", "fable", "opus", "sonnet", "haiku"].map((value) => ({ value }))
      for (const tier of ["FABLE", "OPUS", "SONNET", "HAIKU"]) {
        expect(
          picker(patch)(rows, {
            [`ANTHROPIC_DEFAULT_${tier}_MODEL`]: " Provider/Pinned[1M] ",
            ANTHROPIC_CUSTOM_MODEL_OPTION: "provider/pinned",
            ANTHROPIC_CUSTOM_MODEL_OPTION_2: " PROVIDER/PINNED[1m] ",
          }),
        ).toEqual(rows)
      }
    })

    test("a gated-out tier cannot hide either slot merely because its env pin exists", () => {
      for (const slot of ["ANTHROPIC_CUSTOM_MODEL_OPTION", "ANTHROPIC_CUSTOM_MODEL_OPTION_2"]) {
        const result = picker(patch)([{ value: "default" }, { value: "opus" }], {
          ANTHROPIC_DEFAULT_SONNET_MODEL: "provider/hidden-tier[1m]",
          [slot]: "provider/hidden-tier",
        })
        expect(result.map((row) => row.value)).toEqual(["default", "opus", "provider/hidden-tier"])
      }
    })

    test("unrelated slots survive missing tier pins and absent custom metadata", () => {
      const result = picker(patch)([{ value: "sonnet" }], {
        ANTHROPIC_CUSTOM_MODEL_OPTION: "provider/one",
        ANTHROPIC_CUSTOM_MODEL_OPTION_2: "provider/two",
      })
      expect(result.map((row) => row.value)).toEqual(["sonnet", "provider/one", "provider/two"])
      expect(result[2]).toEqual({
        value: "provider/two",
        label: "provider/two",
        description: "Custom model 2 (provider/two)",
      })
    })

    test("normalizes existing direct rows, annotated aliases and the first custom slot", () => {
      const run = picker(patch)
      expect(
        run([{ value: " Provider/Direct[1M] " }], {
          ANTHROPIC_CUSTOM_MODEL_OPTION: "provider/direct",
          ANTHROPIC_CUSTOM_MODEL_OPTION_2: "PROVIDER/DIRECT",
        }),
      ).toHaveLength(1)
      expect(
        run([{ value: "sonnet[1m]" }], {
          ANTHROPIC_DEFAULT_SONNET_MODEL: "provider/pinned",
          ANTHROPIC_CUSTOM_MODEL_OPTION_2: "provider/pinned",
        }),
      ).toHaveLength(1)
      const duplicateSlots = run([], {
        ANTHROPIC_CUSTOM_MODEL_OPTION: "provider/same",
        ANTHROPIC_CUSTOM_MODEL_OPTION_2: " PROVIDER/SAME[1m] ",
      })
      expect(duplicateSlots.map((row) => row.value)).toEqual(["provider/same"])
    })

    test("unset slot 1 and whitespace-only slot 2 add no row", () => {
      expect(
        picker(patch)([{ value: "default" }], {
          ANTHROPIC_CUSTOM_MODEL_OPTION_2: " ",
        }),
      ).toEqual([{ value: "default" }])
    })

    test("preserves upstream slot 1 raw value when it is distinct", () => {
      expect(picker(patch)([], { ANTHROPIC_CUSTOM_MODEL_OPTION: " Provider/Raw " })[0]?.value).toBe(" Provider/Raw ")
    })
  })
}

for (const patch of entries.filter((entry) => /^(recognize|validate)-second-custom-model-option/.test(entry.name))) {
  test(`${patch.name}: slot 2 is preconfigured without a namespace getter`, () => {
    if (!patch.ast || !patch.transform) throw new Error(`${patch.name}: missing AST transform`)
    const source =
      typeof patch.ast.match.source === "string"
        ? patch.ast.match.source
        : `if(firstModel(${patch.name.endsWith("2-1-263") ? "t" : "n"}))return{recognized:!0};`
    const candidate = source.match(/if\(([\w$]+)===/)?.[1] ?? source.match(/firstModel\(([\w$]+)\)/)?.[1]
    const namespace = source.match(/===([\w$]+)\.ANTHROPIC_CUSTOM_MODEL_OPTION/)?.[1]
    if (!candidate) throw new Error(`${patch.name}: unsupported fixture binding`)
    const declarations = namespace
      ? `const ${namespace}=Object.freeze({ANTHROPIC_CUSTOM_MODEL_OPTION:"provider/first"});`
      : 'const firstModel=(model)=>model==="provider/first";'
    const fixture = `function fixture(${candidate}){${declarations}${source}return false}`
    const transformed = applyAstTransformPatches(fixture, [
      {
        name: patch.name,
        ast: patch.ast,
        transform: patch.transform,
        expectedMatches: 1,
      },
    ]).source
    const execute = new Function("process", "candidate", `${transformed};return fixture(candidate);`) as (
      process: { env: Environment },
      candidate: string,
    ) => unknown
    const process = { env: { ANTHROPIC_CUSTOM_MODEL_OPTION_2: " provider/second " } }
    const field = patch.name.startsWith("validate") ? "valid" : "recognized"
    expect(execute(process, "provider/second")).toEqual({ [field]: true })
    expect(execute(process, "provider/first")).toEqual({ [field]: true })
    expect(execute(process, "provider/unconfigured")).toBe(false)
  })
}
