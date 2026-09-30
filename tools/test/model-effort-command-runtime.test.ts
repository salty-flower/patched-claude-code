import { expect, test } from "bun:test"
import { resolve } from "node:path"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { activePatch, captureIdentifier } from "./helpers/patch-contract"

type Update = { value?: string; ultracode?: boolean }
type Result = { message: string; effortUpdate?: Update }
type State = {
  sessionEffort: { kind: string; value?: string }
  ultracode: boolean
  effortByModel: Map<string, string>
  effortRevision: number
}

const patches = loadPatchEntriesFromFile(resolve(import.meta.dir, "../../patches/model-effort-ui.toml"))

for (const platform of ["darwin-arm64", "linux-x64"]) {
  test(`${platform}: 2.1.285 effort command preserves independent ultracode and transactional model state`, async () => {
    const patch = activePatch(patches, "2.1.285", platform, "model-effort-command-")
    const current = activePatch(patches, "2.1.285", platform, "model-effort-current-")
    if (!patch.replacement || !current.replacement) throw new Error("command replacements missing")
    const source = patch.replacement
    const binding = (role: string, pattern: RegExp) => captureIdentifier(source, role, pattern)
    let state: State = {
      sessionEffort: { kind: "level", value: "medium" },
      ultracode: true,
      effortByModel: new Map(),
      effortRevision: 0,
    }
    let cli = false
    let remote = false
    let failure = false
    let dispatched = 0
    let persisted: boolean | undefined
    let operations = 0
    const parseToggle = (text: string): boolean | undefined => {
      if (text === "ultracode" || text === "ultracode on") return true
      if (text === "ultracode off") return false
      return undefined
    }
    const resolver = {
      session(model: string, operation?: string, value?: string) {
        if (operation) {
          operations++
          if (operation === "clear") state.effortByModel.delete(model)
          else if (value !== undefined) state.effortByModel.set(model, value)
        }
        return {
          cli,
          slug: model,
          value: state.effortByModel.get(model),
          source: "session",
          effortByModel: state.effortByModel,
        }
      },
    }
    const dispatcher = async (
      text: string,
      _context: unknown,
      persist: boolean,
      update: (change: Update) => void,
    ): Promise<Result> => {
      dispatched++
      persisted = persist
      const toggle = parseToggle(text)
      const change = toggle === undefined ? { value: text === "auto" ? undefined : text } : { ultracode: toggle }
      update(change)
      return failure ? { message: "Failed to save" } : { message: "Applied", effortUpdate: change }
    }
    const bindings: Record<string, unknown> = {
      lr: () => remote,
      [captureIdentifier(current.replacement, "active ultracode", /\+\(([\w$]+)\(n,t\)\?/)]: (enabled: boolean) =>
        enabled,
      [binding("active model", /const model=([\w$]+)\(\)/)]: () => "opus",
      [binding("session resolver", /current=([\w$]+)\.session\(model\)/)]: resolver,
      [binding("toggle parser", /\|\|([\w$]+)\(e\.trim/)]: parseToggle,
      [binding("native dispatcher", /result=await ([\w$]+)\(e,t/)]: dispatcher,
      [binding("native effort constructor", /ultracode===void 0\?([\w$]+)\(d\.value\)/)]: (value?: string) => ({
        kind: "level",
        value,
      }),
      [binding("native effort equality", /if\(([\w$]+)\(l\.sessionEffort,p\)/)]: (left: unknown, right: unknown) =>
        JSON.stringify(left) === JSON.stringify(right),
    }
    const commandName = binding("command", /^async function ([\w$]+)\(/)
    const currentName = captureIdentifier(current.replacement, "current reporter", /^function ([\w$]+)\(/)
    const runtime = new Function(
      ...Object.keys(bindings),
      `${source}\n${current.replacement}\nreturn {command:${commandName},current:${currentName}}`,
    )(...Object.values(bindings)) as {
      command: (
        text: string,
        context: object,
        set: (update: (state: State) => State) => void,
        persist: boolean,
      ) => Promise<Result>
      current: (effort: string | undefined, model: string, ultracode: boolean) => Result
    }
    const run = (text: string) =>
      runtime.command(
        text,
        { effort: "medium", ultracode: state.ultracode },
        (update) => {
          state = update(state)
        },
        true,
      )

    await run("max")
    expect(state.effortByModel.get("opus")).toBe("max")
    expect(state.effortRevision).toBe(1)
    expect(state.ultracode).toBe(true)
    expect(state.sessionEffort.value).toBe("medium")
    expect(persisted).toBe(false)
    expect(runtime.current("medium", "opus", true).message).toContain("max for opus (session)")
    expect(runtime.current("medium", "opus", true).message).toContain("Ultracode on")
    await run("auto")
    expect(state.effortByModel.has("opus")).toBe(false)
    expect(state.effortRevision).toBe(2)
    expect(state.ultracode).toBe(true)

    cli = true
    const beforePin = dispatched
    expect((await run("low")).message).toContain("CLI --effort")
    expect(dispatched).toBe(beforePin)
    await run("ultracode off")
    expect(state.ultracode).toBe(false)
    await run("ultracode on")
    expect(state.ultracode).toBe(true)
    expect(state.effortRevision).toBe(2)
    expect(operations).toBe(2)
    expect(state.sessionEffort.value).toBe("medium")

    remote = true
    await run("low")
    expect(persisted).toBe(true)
    expect(state.sessionEffort.value).toBe("low")
    expect(state.effortRevision).toBe(2)
    expect(operations).toBe(2)
    remote = false
    cli = false
    failure = true
    await run("high")
    expect(state.effortByModel.size).toBe(0)
    expect(state.effortRevision).toBe(2)
    expect(operations).toBe(2)
    expect(state.ultracode).toBe(true)
  })
}
