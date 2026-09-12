import { mkdirSync, readdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs"
import { join, relative } from "node:path"
import { parseSync } from "oxc-parser"
import { loadPatchEntriesFromFile } from "../../lib/patch-files"
import { activePatch, captureIdentifier } from "./patch-contract"

type Node = { type: string; start: number; end: number; [key: string]: unknown }
type Binding = { file: string; name: string; source: string }
const cache = new Map<string, Record<string, Binding>>()

function walk(value: unknown, visit: (node: Node) => void): void {
  if (!value || typeof value !== "object") return
  if (Array.isArray(value)) {
    for (const item of value) walk(item, visit)
    return
  }
  const node = value as Node
  if (typeof node.type === "string") visit(node)
  for (const child of Object.values(value)) if (typeof child === "object") walk(child, visit)
}

// Only the private rendered fixture is instrumented. Alias exports retain the
// native function body, lexical dependencies, and normal graph initialization.
export function writeGraphCredentialHarness(options: {
  root: string
  version: string
  renderDir: string
  outDir: string
}): string {
  const graph = realpathSync(join(options.renderDir, "graph.patched", "darwin-arm64"))
  const staging = realpathSync(join(options.root, "staging"))
  if (!relative(staging, graph).startsWith("..")) throw new Error("Refusing to instrument staged graph")
  let bindings = cache.get(graph)
  if (!bindings) {
    const files = readdirSync(graph).filter((file) => file.endsWith(".js") && file !== "cli.js")
    const texts = new Map(files.map((file) => [file, readFileSync(join(graph, file), "utf8")]))
    const parsed = new Map<string, Node[]>()
    const nodes = (file: string): Node[] => {
      let result = parsed.get(file)
      if (!result) {
        const text = texts.get(file)
        if (text === undefined) throw new Error(`Missing Keychain graph owner ${file}`)
        const ast = parseSync(file, text, { lang: "js", sourceType: "module" })
        if (ast.errors.length) throw new Error(`Cannot parse Keychain graph owner ${file}`)
        const collected: Node[] = []
        walk(ast.program, (node) => collected.push(node))
        result = collected
        parsed.set(file, result)
      }
      return result
    }
    const findFunction = (role: string, markers: string[], name?: string, owner?: string): Binding => {
      const found: Binding[] = []
      for (const [file, text] of texts) {
        if ((owner && file !== owner) || !markers.every((marker) => text.includes(marker))) continue
        for (const node of nodes(file)) {
          if (node.type !== "FunctionDeclaration") continue
          const id = node.id as { name?: string } | undefined
          const source = text.slice(node.start, node.end)
          if (id?.name && (!name || id.name === name) && markers.every((marker) => source.includes(marker))) {
            found.push({ file, name: id.name, source })
          }
        }
      }
      const binding = found[0]
      if (found.length !== 1 || !binding) throw new Error(`Expected one native ${role}, found ${found.length}`)
      return binding
    }
    const entries = loadPatchEntriesFromFile(join(options.root, "patches", "explicit-macos-keychain.toml"))
    const fromPatch = (role: string): Binding => {
      const patch = activePatch(entries, options.version, "darwin-arm64", `explicit-macos-keychain-${role}-`)
      const match = patch.ast?.match
      if (!match || match.node !== "FunctionDeclaration" || !match.function_name) {
        throw new Error(`${patch.name}: expected native function locator`)
      }
      return findFunction(role, match.strings ?? (match.string ? [match.string] : []), match.function_name)
    }
    const namedExport = (name: string): Binding => {
      const found: Binding[] = []
      for (const [file, text] of texts) {
        if (!text.includes(name)) continue
        for (const node of nodes(file)) {
          if (node.type !== "ExportSpecifier") continue
          if ((node.exported as { name?: string }).name === name) {
            found.push({ file, name, source: "" })
          }
        }
      }
      const binding = found[0]
      if (found.length !== 1 || !binding) throw new Error(`Expected one native ${name} export, found ${found.length}`)
      return binding
    }
    bindings = {
      oauthSaver: fromPatch("propagate-write-failures"),
      accessor: findFunction("secure storage accessor", ["r.secureStorage({defaultStorage:e"]),
      legacyWrite: fromPatch("legacy-api-key-write"),
      legacyReadSync: fromPatch("legacy-api-key-sync-read"),
      legacyReadAsync: fromPatch("legacy-api-key-async-read"),
      legacyDelete: fromPatch("legacy-api-key-delete"),
      legacyDeleteOuter: fromPatch("propagate-legacy-delete-failures"),
      resume: fromPatch("session-store-resume"),
      doctor: fromPatch("doctor-probe"),
      pluginEval: fromPatch("plugin-eval"),
      prefetch: fromPatch("disable-default-prefetch"),
      enableConfigs: namedExport("enableConfigs"),
      initSinks: namedExport("initSinks"),
    }
    const resume = bindings.resume
    if (!resume) throw new Error("Missing resume binding")
    const cleanupName = captureIdentifier(resume.source, "resume cleanup", /throw await ([\w$]+)\(/)
    bindings.cleanup = findFunction("resume cleanup", [], cleanupName, resume.file)
    const prefetch = bindings.prefetch
    if (!prefetch) throw new Error("Missing prefetch binding")
    const pending = captureIdentifier(prefetch.source, "prefetch promise", /([\w$]+)=Promise\.all\(/)
    bindings.prefetchDone = findFunction(
      "prefetch completion",
      [`if(!${pending})return;await`],
      undefined,
      prefetch.file,
    )
    for (const [role, binding] of Object.entries(bindings)) {
      if (role === "enableConfigs" || role === "initSinks") continue
      const path = join(graph, binding.file)
      writeFileSync(path, `${readFileSync(path, "utf8")}\nexport {${binding.name} as __pcc_${role}};\n`)
    }
    cache.set(graph, bindings)
  }
  const importBinding = ([role, binding]: [string, Binding]) => {
    const exported = role === "enableConfigs" || role === "initSinks" ? role : `__pcc_${role}`
    return `const {${exported}:${role}}=await import(${JSON.stringify(join(graph, binding.file))});`
  }
  const prefetchImports = Object.entries(bindings)
    .filter(([role]) => role.startsWith("prefetch"))
    .map(importBinding)
    .join("\n")
  const imports = Object.entries(bindings)
    .filter(([role]) => !role.startsWith("prefetch"))
    .map(importBinding)
    .join("\n")
  const source = `
const action=process.env.CLAUDE_KEYCHAIN_HARNESS_ACTION;
const finish=(value)=>{process.stdout.write(JSON.stringify(value)+"\\n");process.exit(0)};
try {
  const calls=[];
  if(action==="prefetch") {
    const {mock}=await import("bun:test");
    const native=await import("node:child_process");
    mock.module("node:child_process",()=>({...native,execFile:(file,args,options,callback)=>{
      if(file!=="security"||args[0]!=="find-generic-password")throw Error("Unexpected subprocess in native prefetch observer");
      calls.push({file,args});
      const cb=typeof options==="function"?options:callback;
      queueMicrotask(()=>cb(Object.assign(new Error("synthetic missing credential"),{code:44}),"",""));
      return {kill(){}};
    }}));
    ${prefetchImports}
    prefetch();await prefetchDone();finish({calls});
  }
  ${imports}
  await enableConfigs();
  initSinks();
  if(process.env.CLAUDE_KEYCHAIN_REMOVE_BEFORE_ACTION==="1"){
    const path=process.env.CLAUDE_CODE_KEYCHAIN_PATH;
    if(!path||!path.startsWith(process.cwd()+"/"))throw Error("Keychain removal requires a fixture-local path");
    const removed=Bun.spawnSync(["/usr/bin/security","delete-keychain",path]);
    if(removed.exitCode!==0)throw Error("Unable to remove fixture Keychain");
    console.error("Keychain fixture removed before native action");
  }
  const env=process.env;
  const read=()=>accessor().readAsyncStrict?.()??accessor().readAsync();
  if(action==="oauth-write-refresh"){
    const token={accessToken:env.CLAUDE_KEYCHAIN_ACCESS_A,refreshToken:env.CLAUDE_KEYCHAIN_REFRESH_A,expiresAt:Date.now()+36e5,scopes:["user:inference","user:profile"],subscriptionType:"pro",rateLimitTier:null};
    const first=await oauthSaver(token),second=await oauthSaver({...token,accessToken:env.CLAUDE_KEYCHAIN_ACCESS_B,refreshToken:env.CLAUDE_KEYCHAIN_REFRESH_B});
    const stored=await read();finish({first:first.success,second:second.success,stored:stored?.claudeAiOauth?.accessToken===env.CLAUDE_KEYCHAIN_ACCESS_B});
  }
  if(action==="oauth-read"){const value=await read();finish({empty:Object.keys(value??{}).length===0,selected:value?.claudeAiOauth?.accessToken===env.CLAUDE_KEYCHAIN_SELECTED_ACCESS,plaintext:value?.claudeAiOauth?.accessToken===env.CLAUDE_KEYCHAIN_PLAINTEXT_ACCESS})}
  if(action==="secure-delete"){const deleted=await accessor().delete();finish({deleted,empty:Object.keys(await read()??{}).length===0})}
  if(action==="mutate"){
    const field=env.CLAUDE_KEYCHAIN_MUTATION_FIELD,value=env.CLAUDE_KEYCHAIN_MUTATION_VALUE;
    if(!field||!value)throw Error("missing mutation input");
    const result=await accessor().mutate((previous)=>{const until=Date.now()+250;while(Date.now()<until){}return {...previous,[field]:value}});finish({success:result.success});
  }
  if(action==="legacy-write"){await legacyWrite(env.CLAUDE_KEYCHAIN_LEGACY_KEY);finish({stored:legacyReadSync()?.key===env.CLAUDE_KEYCHAIN_LEGACY_KEY})}
  if(action==="legacy-delete"){await legacyDelete();finish({deleted:legacyReadSync()===null})}
  if(action==="legacy-delete-outer"){await legacyDeleteOuter();finish({deleted:true})}
  if(action==="legacy-read"){finish({sync:legacyReadSync()?.key===env.CLAUDE_KEYCHAIN_LEGACY_KEY,async:(await legacyReadAsync())?.key===env.CLAUDE_KEYCHAIN_LEGACY_KEY})}
  if(action==="legacy-guard"){finish({sync:legacyReadSync()===null,async:await legacyReadAsync()===null})}
  if(action==="session-resume"){
    const dir=await resume({load:async()=>[{}]},crypto.randomUUID(),process.cwd(),process.env);
    if(!dir)throw Error("SessionStore resume did not materialize");
    let result;try{const value=await Bun.file(dir+"/.credentials.json").json();result={selected:value?.claudeAiOauth?.accessToken===env.CLAUDE_KEYCHAIN_SELECTED_ACCESS,plaintext:value?.claudeAiOauth?.accessToken===env.CLAUDE_KEYCHAIN_PLAINTEXT_ACCESS,refreshStripped:value?.claudeAiOauth?.refreshToken===undefined}}finally{await cleanup(dir)}finish(result);
  }
  if(action==="doctor-probe")finish({healthy:await doctor()===null});
  if(action==="plugin-eval"){
    const value=await pluginEval(undefined,60);
    finish({selected:value?.kind==="oauth"&&value.accessToken===env.CLAUDE_KEYCHAIN_SELECTED_ACCESS,plaintext:value?.accessToken===env.CLAUDE_KEYCHAIN_PLAINTEXT_ACCESS});
  }
  throw Error("unknown harness action");
}catch(error){console.error(error?.stack??String(error));process.exit(1)}
`
  mkdirSync(options.outDir, { recursive: true })
  const path = join(options.outDir, "cli.keychain-harness.js")
  writeFileSync(path, source)
  return path
}
