import { expect, test } from "bun:test"
import { join } from "node:path"

const root = join(import.meta.dir, "..", "..")
const document = Bun.TOML.parse(await Bun.file(join(root, "patches/model-effort-capabilities.toml")).text()) as {
  patches: { name: string; platforms: string[]; locator_pattern: string; replacement: string }[]
}

const variants = [
  {
    platform: "darwin-arm64",
    capabilityFile: "chunk-419zdfz3.js",
    effortFile: "chunk-t3b7pg2x.js",
    capability: "Fre",
    table: "zre",
    capEnd: "class aor",
    effortEnd: "function KH",
    normalize: "Z$",
    valid: "$C",
    retry: "zZ",
    classifier: "PIe",
    options: "p",
    drain: "XZ",
    warning: "lV",
  },
  {
    platform: "linux-x64",
    capabilityFile: "chunk-32f2qmtc.js",
    effortFile: "chunk-gyshxw4p.js",
    capability: "xre",
    table: "Nre",
    capEnd: "class Err",
    effortEnd: "function OI",
    normalize: "GB",
    valid: "Ov",
    retry: "KZ",
    classifier: "VPe",
    options: "f",
    drain: "ZZ",
    warning: "t5",
  },
] as const

for (const v of variants) {
  const path = join(root, "staging/2.1.263/graph", v.platform)
  const present = await Bun.file(join(path, v.capabilityFile)).exists()
  test.skipIf(!present)(
    `${v.platform}: actual capability resolver accepts normalized firstParty declarations`,
    async () => {
      const source = await Bun.file(join(path, v.capabilityFile)).text()
      let body = source.slice(source.indexOf(`function ${v.capability}(e,t){`), source.indexOf(v.capEnd))
      const patch = document.patches.find((p) => p.name === `explicit-capabilities-first-party-${v.platform}`)
      if (!patch) throw new Error(`missing capability patch for ${v.platform}`)
      expect(body.split(patch.locator_pattern)).toHaveLength(2)
      body = body.replace(patch.locator_pattern, patch.replacement)
      const env: Record<string, string> = { MODEL: " GPT-5.6-Astra[1m] ", CAPS: "effort, MAX_EFFORT" }
      const run = new Function("process", v.table, `${body};return ${v.capability};`)({ env }, [
        { modelEnvVar: "MODEL", capabilitiesEnvVar: "CAPS" },
      ]) as (model: string, capability: string) => boolean | undefined
      expect(run("gpt-5.6-astra", "max_effort")).toBe(true)
      expect(run("gpt-5.6-astra[1m]", "effort")).toBe(true)
      expect(run("gpt-5.6-astra", "xhigh_effort")).toBe(false)
      expect(run("other-model", "effort")).toBeUndefined()
      env.ANTHROPIC_CUSTOM_MODEL_OPTION = " GPT-5.6-Luna[1m] "
      env.ANTHROPIC_CUSTOM_MODEL_OPTION_EFFORT_LEVEL = " MAX "
      env.ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES = "effort"
      expect(run("gpt-5.6-luna", "effort")).toBe(true)
      expect(run("gpt-5.6-luna", "max_effort")).toBe(true)
      expect(run("gpt-5.6-luna", "xhigh_effort")).toBe(false)
      env.ANTHROPIC_CUSTOM_MODEL_OPTION_2 = " GPT-5.6-Spark[1m] "
      env.ANTHROPIC_CUSTOM_MODEL_OPTION_2_EFFORT_LEVEL = " XHIGH "
      expect(run("gpt-5.6-spark[1m]", "effort")).toBe(true)
      expect(run("gpt-5.6-spark", "xhigh_effort")).toBe(true)
      delete env.ANTHROPIC_CUSTOM_MODEL_OPTION_2_EFFORT_LEVEL
      env.ANTHROPIC_CUSTOM_MODEL_OPTION_2_SUPPORTED_CAPABILITIES = " effort, MAX_EFFORT "
      expect(run("gpt-5.6-spark", "max_effort")).toBe(true)
      expect(run("gpt-5.6-spark", "xhigh_effort")).toBe(false)
      env.ANTHROPIC_CUSTOM_MODEL_OPTION_2_SUPPORTED_CAPABILITIES = ""
      expect(run("gpt-5.6-spark", "effort")).toBe(false)
    },
  )

  test.skipIf(!present)(
    `${v.platform}: actual normalization preserves selected effort and organization policy`,
    async () => {
      const source = await Bun.file(join(path, v.effortFile)).text()
      let body = source.slice(source.indexOf("function P(e,t){"), source.indexOf(v.effortEnd))
      const patch = document.patches.find((p) => p.name === `effort-reactive-capability-${v.platform}`)
      if (!patch) throw new Error(`missing effort normalization patch for ${v.platform}`)
      expect(body.split(patch.locator_pattern)).toHaveLength(2)
      body = body.replace(patch.locator_pattern, patch.replacement)
      const make = (limit: boolean) =>
        new Function(v.valid, v.normalize, `${body};return P;`)(
          () => true,
          (effort: string) => (limit ? "medium" : effort),
        ) as (effort: string, model: string) => string
      expect(make(false)("max", "custom")).toBe("max")
      expect(make(false)("xhigh", "custom")).toBe("xhigh")
      expect(make(true)("max", "custom")).toBe("medium")
    },
  )

  test.skipIf(!present)(`${v.platform}: native rejection recovery queues one visible warning`, async () => {
    const darwin = v.platform === "darwin-arm64"
    const source = await Bun.file(join(path, darwin ? "chunk-wmzgeczq.js" : "chunk-9wa0ka8p.js")).text()
    const start = source.indexOf(`${v.retry}=(et)=>{if(!${v.classifier}(et))`)
    let callback = source.slice(start, source.indexOf(darwin ? ",qZ=(et)=>" : ",YZ=(et)=>", start))
    const drainStart = source.indexOf(`function*${v.drain}(){`)
    let drain = source.slice(drainStart, source.indexOf(darwin ? "let Yge=" : "let the=", drainStart))
    for (const patch of document.patches.filter((p) => p.platforms.includes(v.platform))) {
      callback = callback.replace(patch.locator_pattern, patch.replacement)
      drain = drain.replace(patch.locator_pattern, patch.replacement)
    }
    const latched: string[] = []
    const native = {
      [v.options]: { model: "alias" },
      F: "resolved-model",
      [v.classifier]: (error: string) => error === "unsupported",
      [darwin ? "vYt" : "nJt"]: (model: string) => latched.push(model),
      [darwin ? "bt" : "St"]: (model: string) => model,
      [v.warning]: (text: string, level: string) => ({ text, level }),
      [darwin ? "YZ" : "JZ"]: undefined,
      n: () => {},
      i: () => {},
    }
    const run = new Function(
      ...Object.keys(native),
      `let ${callback};${drain};return {retry:${v.retry},drain:${v.drain}};`,
    )(...Object.values(native)) as {
      retry: (error: string) => string | null
      drain: () => Generator<{ text: string; level: string }>
    }
    expect(run.retry("unrelated")).toBeNull()
    expect([...run.drain()]).toEqual([])
    expect(run.retry("unsupported")).toBe("retry:effort-unsupported")
    expect(latched).toEqual(["alias", "resolved-model"])
    const messages = [...run.drain()]
    expect(messages).toHaveLength(1)
    expect(messages[0]?.level).toBe("warning")
    expect(messages[0]?.text).toContain("backend default is unknown")
    expect([...run.drain()]).toEqual([])
  })
}
