import { afterAll, afterEach, expect, test } from "bun:test"
import { createHash } from "node:crypto"
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir, userInfo } from "node:os"
import { join } from "node:path"
import { targetVersion } from "../lib/target"
import { startClaudeApiStub } from "./helpers/claude-api-stub"
import { makeScriptCommand, normalizeTuiOutput, shellEnvironment, shellQuote } from "./helpers/pty"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const tempDirs: string[] = []
const RENDER_DIR = realpathSync(mkdtempSync(join(tmpdir(), "patched-cc-keychain-render-")))
const GRAPH_TARGET = existsSync(join(ROOT, "staging", targetVersion(), "graph", "darwin-arm64", "cli.js"))
const BUNDLE = await renderRunnableBundle({
  root: ROOT,
  version: targetVersion(),
  outDir: RENDER_DIR,
  patchFiles: ["explicit-macos-keychain.toml"],
})
// These tests exercise the rendered patched bundle. The bump lane runs the
// tool-test step before render, so skip when the rendered bundle is absent;
// CI and the release lane always render before tests.
const RENDERED = existsSync(BUNDLE)
const PRELOAD = join(ROOT, "runtime", "system-prompt-overrides.ts")
const MATERIALIZED_ENV = "PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS"

function compareVersions(left: string, right: string): number {
  const parts = (value: string) => value.split(".").map((part) => Number.parseInt(part, 10))
  const leftParts = parts(left)
  const rightParts = parts(right)

  for (let index = 0; index < Math.max(leftParts.length, rightParts.length); index += 1) {
    const leftPart = leftParts[index] ?? 0
    const rightPart = rightParts[index] ?? 0
    if (leftPart > rightPart) return 1
    if (leftPart < rightPart) return -1
  }

  return 0
}

function isVersionAtLeast(version: string, floor: string): boolean {
  return compareVersions(version, floor) >= 0
}

// Every upstream bump re-minifies the bundle and renames these module-level
// identifiers; the harness must reference the names of the staged target.
// The 2.1.228 bump renamed all of them, so targets at or above 2.1.228 use the
// new symbol set while older targets keep the 2.1.221-era names.
type HarnessSymbols = {
  entrypoint: RegExp
  telemetry: string
  enableConfigs: string
  oauthSaver: string
  accessor: string
  legacyWrite: string
  legacyReadSync: string
  legacyDelete: string
  legacyReadAsync: string
  sessionStore: string
  resume: string
  cleanup: string
  pluginEvalInit: string
  pluginFs: string
  pluginEval: string
  doctor: string
}

const HARNESS_SYMBOLS_2_1_229: HarnessSymbols = {
  entrypoint: /\bC5w\(\);var __acc_linux_/,
  telemetry: "Dn",
  enableConfigs: "art",
  oauthSaver: "wxo",
  accessor: "Oa",
  legacyWrite: "OAs",
  legacyReadSync: "q5t",
  legacyDelete: "OOu",
  legacyReadAsync: "imn",
  sessionStore: "Sjf",
  resume: "pjf",
  cleanup: "nvi",
  pluginEvalInit: "Rrm",
  pluginFs: "wN",
  pluginEval: "krm",
  doctor: "xtv",
}

const HARNESS_SYMBOLS_2_1_234: HarnessSymbols = {
  entrypoint: /\bei0\(\);var __acc_linux_/,
  telemetry: "Zo",
  enableConfigs: "Act",
  oauthSaver: "bjo",
  accessor: "al",
  legacyWrite: "O6s",
  legacyReadSync: "y7t",
  legacyDelete: "tnd",
  legacyReadAsync: "FCn",
  sessionStore: "Awm",
  resume: "bwm",
  cleanup: "NNi",
  pluginEvalInit: "NBm",
  pluginFs: "KC",
  pluginEval: "MBm",
  doctor: "LZv",
}

const HARNESS_SYMBOLS_2_1_238: HarnessSymbols = {
  entrypoint: /\bDoC\(\);var __acc_linux_/,
  telemetry: "ri",
  enableConfigs: "Ift",
  oauthSaver: "dJo",
  accessor: "cl",
  legacyWrite: "Caa",
  legacyReadSync: "Ger",
  legacyDelete: "gOd",
  legacyReadAsync: "i1n",
  sessionStore: "PXm",
  resume: "wXm",
  cleanup: "iVi",
  pluginEvalInit: "fzl",
  pluginFs: "bw",
  pluginEval: "z_h",
  doctor: "e8T",
}

const HARNESS_SYMBOLS_2_1_241: HarnessSymbols = {
  entrypoint: /\bINC\(\);var __acc_linux_/,
  telemetry: "ni",
  enableConfigs: "nQe",
  oauthSaver: "Aoi",
  accessor: "sl",
  legacyWrite: "Dba",
  legacyReadSync: "Ior",
  legacyDelete: "Mqd",
  legacyReadAsync: "TBn",
  sessionStore: "tSh",
  resume: "Vbh",
  cleanup: "ers",
  pluginEvalInit: "yZl",
  pluginFs: "jb",
  pluginEval: "n$h",
  doctor: "Dkw",
}

const HARNESS_SYMBOLS_2_1_228: HarnessSymbols = {
  entrypoint: /\bpLE\(\);var __acc_linux_/,
  telemetry: "IW",
  enableConfigs: "Gat",
  oauthSaver: "Dgi",
  accessor: "La",
  legacyWrite: "u$a",
  legacyReadSync: "$Qt",
  legacyDelete: "k6p",
  legacyReadAsync: "$$n",
  sessionStore: "SFf",
  resume: "pFf",
  cleanup: "Kyi",
  pluginEvalInit: "_Yf",
  pluginFs: "rN",
  pluginEval: "yYf",
  doctor: "S8S",
}

const HARNESS_SYMBOLS_LEGACY: HarnessSymbols = {
  entrypoint: /\bQhv\(\);var __acc_linux_/,
  telemetry: "OV",
  enableConfigs: "ZJe",
  oauthSaver: "Ulr",
  accessor: "oa",
  legacyWrite: "ups",
  legacyReadSync: "qLt",
  legacyDelete: "iwu",
  legacyReadAsync: "IZr",
  sessionStore: "$Vp",
  resume: "IVp",
  cleanup: "OXo",
  pluginEvalInit: "Kuf",
  pluginFs: "rM",
  pluginEval: "Vuf",
  doctor: "h2b",
}

function harnessSymbols(): HarnessSymbols {
  if (isVersionAtLeast(targetVersion(), "2.1.241")) return HARNESS_SYMBOLS_2_1_241
  if (isVersionAtLeast(targetVersion(), "2.1.238")) return HARNESS_SYMBOLS_2_1_238
  if (isVersionAtLeast(targetVersion(), "2.1.234")) return HARNESS_SYMBOLS_2_1_234
  if (isVersionAtLeast(targetVersion(), "2.1.229")) return HARNESS_SYMBOLS_2_1_229
  return isVersionAtLeast(targetVersion(), "2.1.228") ? HARNESS_SYMBOLS_2_1_228 : HARNESS_SYMBOLS_LEGACY
}

type SecurityResult = {
  exitCode: number
  stdout: string
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) rmSync(dir, { recursive: true, force: true })
})

afterAll(() => {
  rmSync(RENDER_DIR, { recursive: true, force: true })
})

function makeTempDir(prefix: string): string {
  const dir = realpathSync(mkdtempSync(join(tmpdir(), prefix)))
  tempDirs.push(dir)
  return dir
}

function security(args: string[], input?: string): SecurityResult {
  const result = Bun.spawnSync({
    cmd: ["/usr/bin/security", ...args],
    stdin: input === undefined ? "ignore" : new Blob([input]),
    stdout: "pipe",
    stderr: "pipe",
  })
  return { exitCode: result.exitCode, stdout: result.stdout.toString().trim() }
}

function accountName(): string {
  return process.env.USER || userInfo().username
}

function serviceName(configDir: string, suffix: "" | "-credentials"): string {
  const hash = createHash("sha256").update(configDir).digest("hex").slice(0, 8)
  return `Claude Code${suffix}-${hash}`
}

function createAndUnlockKeychain(path: string): void {
  const password = `synthetic-${crypto.randomUUID()}`
  expect(security(["create-keychain", "-p", password, path]).exitCode).toBe(0)
  expect(security(["unlock-keychain", "-p", password, path]).exitCode).toBe(0)
}

function writeGenericPassword(path: string, service: string, account: string, value: string): void {
  expect(
    security([
      "add-generic-password",
      "-U",
      "-a",
      account,
      "-s",
      service,
      "-X",
      Buffer.from(value, "utf8").toString("hex"),
      path,
    ]).exitCode,
  ).toBe(0)
}

function readGenericPassword(path: string, service: string, account: string): SecurityResult {
  return security(["find-generic-password", "-a", account, "-w", "-s", service, path])
}

function deleteGenericPassword(path: string, service: string, account: string): void {
  const result = security(["delete-generic-password", "-a", account, "-s", service, path])
  expect([0, 44]).toContain(result.exitCode)
}

function prepareProfile(home: string): string {
  const configDir = join(home, ".claude")
  const state = {
    hasCompletedOnboarding: true,
    projects: { [home]: { hasTrustDialogAccepted: true } },
    theme: "dark",
  }
  mkdirSync(configDir, { recursive: true })
  writeFileSync(join(configDir, "settings.json"), `${JSON.stringify({ theme: "dark" })}\n`)
  writeFileSync(join(home, ".claude.json"), `${JSON.stringify(state)}\n`)
  writeFileSync(join(configDir, ".claude.json"), `${JSON.stringify(state)}\n`)
  return configDir
}

function preparePluginEvalFixture(home: string): string {
  const pluginDir = join(home, "selected-keychain-plugin")
  const manifestDir = join(pluginDir, ".claude-plugin")
  const caseDir = join(pluginDir, "evals", "selected-keychain")
  mkdirSync(manifestDir, { recursive: true })
  mkdirSync(caseDir, { recursive: true })
  writeFileSync(
    join(manifestDir, "plugin.json"),
    `${JSON.stringify({
      name: "selected-keychain-plugin",
      version: "0.0.1",
      description: "Synthetic local-only plugin eval fixture",
    })}\n`,
  )
  writeFileSync(
    join(caseDir, "case.yaml"),
    `${JSON.stringify({
      schema_version: "1.1",
      name: "selected Keychain child",
      execution: {
        prompt: "Reply with exactly KEYCHAIN_EVAL_OK.",
        max_turns: 1,
        timeout_seconds: 30,
        allowed_tools: [],
        env: {},
      },
      runs: 1,
      graders: [
        {
          type: "regex",
          name: "local response",
          target: "last_message",
          pattern: "^KEYCHAIN_EVAL_OK$",
        },
      ],
    })}\n`,
  )
  return pluginDir
}

async function runBundle(
  bundle: string,
  home: string,
  keychainPath: string | undefined,
  extraEnv: Record<string, string>,
  args: string[] = [],
): Promise<{ exitCode: number; stdout: string; stderr: string }> {
  const subprocess = Bun.spawn({
    cmd: [process.execPath, "--preload", PRELOAD, bundle, ...args],
    cwd: home,
    env: {
      ...process.env,
      HOME: home,
      CLAUDE_CONFIG_DIR: join(home, ".claude"),
      CLAUDE_CODE_KEYCHAIN_PATH: keychainPath,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      ...extraEnv,
    },
    stdout: "pipe",
    stderr: "pipe",
  })
  const [exitCode, stdout, stderr] = await Promise.all([
    subprocess.exited,
    new Response(subprocess.stdout).text(),
    new Response(subprocess.stderr).text(),
  ])
  return { exitCode, stdout, stderr }
}

function injectCredentialHarness(source: string): string {
  const symbols = harnessSymbols()
  const entrypoint = symbols.entrypoint
  const matches = source.match(new RegExp(entrypoint.source, "g")) ?? []
  if (matches.length !== 1) {
    throw new Error(`expected one ${targetVersion()} CLI entrypoint, found ${matches.length}`)
  }

  const harness = String.raw`${symbols.telemetry}();(async()=>{try{
    await ${symbols.enableConfigs}();
    let e=process.env.CLAUDE_KEYCHAIN_HARNESS_ACTION,t=(r)=>{process.stdout.write(JSON.stringify(r)+"\n");process.exit(0)};
    if(e==="oauth-write-refresh"){let r={accessToken:process.env.CLAUDE_KEYCHAIN_ACCESS_A,refreshToken:process.env.CLAUDE_KEYCHAIN_REFRESH_A,expiresAt:Date.now()+36e5,scopes:["user:inference","user:profile"],subscriptionType:"pro",rateLimitTier:null},n=await ${symbols.oauthSaver}(r),o=await ${symbols.oauthSaver}({...r,accessToken:process.env.CLAUDE_KEYCHAIN_ACCESS_B,refreshToken:process.env.CLAUDE_KEYCHAIN_REFRESH_B}),i=await(${symbols.accessor}().readAsyncStrict?.()??${symbols.accessor}().readAsync());return t({first:n.success,second:o.success,stored:i?.claudeAiOauth?.accessToken===process.env.CLAUDE_KEYCHAIN_ACCESS_B})}
    if(e==="oauth-read"){let r=await(${symbols.accessor}().readAsyncStrict?.()??${symbols.accessor}().readAsync());return t({empty:Object.keys(r??{}).length===0,selected:r?.claudeAiOauth?.accessToken===process.env.CLAUDE_KEYCHAIN_SELECTED_ACCESS,plaintext:r?.claudeAiOauth?.accessToken===process.env.CLAUDE_KEYCHAIN_PLAINTEXT_ACCESS})}
    if(e==="secure-delete"){let r=await ${symbols.accessor}().delete(),n=await(${symbols.accessor}().readAsyncStrict?.()??${symbols.accessor}().readAsync());return t({deleted:r,empty:Object.keys(n??{}).length===0})}
    if(e==="mutate"){let r=process.env.CLAUDE_KEYCHAIN_MUTATION_FIELD,n=process.env.CLAUDE_KEYCHAIN_MUTATION_VALUE;if(!r||!n)throw Error("missing mutation input");let o=await ${symbols.accessor}().mutate((i)=>{let s=Date.now()+250;while(Date.now()<s){}return{...i,[r]:n}});return t({success:o.success})}
    if(e==="legacy-write"){await ${symbols.legacyWrite}(process.env.CLAUDE_KEYCHAIN_LEGACY_KEY);let r=${symbols.legacyReadSync}();return t({stored:r?.key===process.env.CLAUDE_KEYCHAIN_LEGACY_KEY})}
    if(e==="legacy-delete"){await ${symbols.legacyDelete}();let r=${symbols.legacyReadSync}();return t({deleted:r===null})}
    if(e==="legacy-read"){let r=${symbols.legacyReadSync}(),n=await ${symbols.legacyReadAsync}(),o=process.env.CLAUDE_KEYCHAIN_LEGACY_KEY;return t({sync:r?.key===o,async:n?.key===o})}
    if(e==="legacy-guard"){let r=${symbols.legacyReadSync}(),n=await ${symbols.legacyReadAsync}();return t({sync:r===null,async:n===null})}
    if(e==="session-resume"){${symbols.sessionStore}();let r=await ${symbols.resume}({load:async()=>[{}]},globalThis.crypto.randomUUID(),process.cwd(),process.env);if(!r)throw Error("SessionStore resume did not materialize");let n;try{let o=JSON.parse(await Bun.file(r+"/.credentials.json").text());n={selected:o?.claudeAiOauth?.accessToken===process.env.CLAUDE_KEYCHAIN_SELECTED_ACCESS,plaintext:o?.claudeAiOauth?.accessToken===process.env.CLAUDE_KEYCHAIN_PLAINTEXT_ACCESS,refreshStripped:o?.claudeAiOauth?.refreshToken===void 0}}finally{await ${symbols.cleanup}(r)}return t(n)}
    if(e==="plugin-eval"){${symbols.pluginEvalInit}();let r=process.env.CLAUDE_KEYCHAIN_PLUGIN_CONFIG_DIR;if(!r)throw Error("missing plugin config directory");await ${symbols.pluginFs}.mkdir(r,{recursive:!0});await ${symbols.pluginEval}({configDir:r});let n=JSON.parse(await Bun.file(r+"/.credentials.json").text());return t({selected:n?.claudeAiOauth?.accessToken===process.env.CLAUDE_KEYCHAIN_SELECTED_ACCESS,plaintext:n?.claudeAiOauth?.accessToken===process.env.CLAUDE_KEYCHAIN_PLAINTEXT_ACCESS})}
    if(e==="doctor-probe"){let r=await ${symbols.doctor}();return t({healthy:r===null})}
    throw Error("unknown harness action")
  }catch(e){console.error(e?.stack??String(e));process.exit(1)}})()`
  // Function-form replacement: string replacements process `$` patterns
  // (e.g. `$$` -> `$`), which would corrupt double-dollar minified symbols
  // like `$$n` in the harness. A function return value is inserted verbatim.
  return source.replace(entrypoint, () => `${harness};var __acc_linux_`)
}

function writeHarnessBundle(dir: string): string {
  const path = join(dir, "cli.keychain-harness.js")
  writeFileSync(path, injectCredentialHarness(readFileSync(BUNDLE, "utf8")))
  return path
}

test.skipIf(process.platform !== "darwin" || !RENDERED)(
  "raw and preloaded bundles fail closed before credential lookup",
  async () => {
    const home = makeTempDir("patched-cc-keychain-raw-")
    prepareProfile(home)
    const missing = join(home, "missing.keychain-db")
    const subprocess = Bun.spawn({
      cmd: [process.execPath, BUNDLE, "auth", "status", "--json"],
      cwd: home,
      env: {
        ...process.env,
        HOME: home,
        CLAUDE_CONFIG_DIR: join(home, ".claude"),
        CLAUDE_CODE_KEYCHAIN_PATH: missing,
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      },
      stdout: "pipe",
      stderr: "pipe",
    })
    const [exitCode, stdout, stderr] = await Promise.all([
      subprocess.exited,
      new Response(subprocess.stdout).text(),
      new Response(subprocess.stderr).text(),
    ])

    expect(exitCode).not.toBe(0)
    expect(`${stdout}\n${stderr}`).toContain("requires the packaged claude-patched launcher")
    expect(stdout).not.toContain('"loggedIn": true')

    const preloaded = Bun.spawnSync({
      cmd: [process.execPath, "--preload", PRELOAD, BUNDLE, "auth", "status", "--json"],
      cwd: home,
      env: {
        ...process.env,
        HOME: home,
        CLAUDE_CONFIG_DIR: join(home, ".claude"),
        CLAUDE_CODE_KEYCHAIN_PATH: missing,
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      },
      stdout: "pipe",
      stderr: "pipe",
    })
    expect(preloaded.exitCode).not.toBe(0)
    expect(`${preloaded.stdout.toString()}\n${preloaded.stderr.toString()}`).toContain(
      "Unable to access the Keychain requested by CLAUDE_CODE_KEYCHAIN_PATH",
    )
    expect(preloaded.stdout.toString()).not.toContain('"loggedIn": true')
  },
  30_000,
)

// The injected white-box harness relies on bundle-wide lexical symbols. A
// graph target deliberately keeps those private inside separate ESM modules;
// its credential behavior is covered by the real plugin-eval and TUI tests.
test.skipIf(process.platform !== "darwin" || !RENDERED || GRAPH_TARGET)(
  "public Keychain selection outranks materialized mode for OAuth lookup",
  async () => {
    const home = makeTempDir("patched-cc-keychain-oauth-priority-")
    const configDir = prepareProfile(home)
    const keychainPath = join(home, "OAuth priority.keychain-db")
    const harness = writeHarnessBundle(home)
    const account = accountName()
    const service = serviceName(configDir, "-credentials")
    const selectedAccess = "synthetic-oauth-priority-selected"
    const plaintextAccess = "synthetic-oauth-priority-plaintext"
    createAndUnlockKeychain(keychainPath)
    writeFileSync(
      join(configDir, ".credentials.json"),
      `${JSON.stringify({ claudeAiOauth: { accessToken: plaintextAccess } })}\n`,
    )

    try {
      const extraEnv = {
        [MATERIALIZED_ENV]: "1",
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "oauth-read",
        CLAUDE_KEYCHAIN_SELECTED_ACCESS: selectedAccess,
        CLAUDE_KEYCHAIN_PLAINTEXT_ACCESS: plaintextAccess,
      }
      const empty = await runBundle(harness, home, keychainPath, extraEnv)
      expect(empty.exitCode).toBe(0)
      expect(JSON.parse(empty.stdout)).toEqual({ empty: true, selected: false, plaintext: false })

      writeGenericPassword(
        keychainPath,
        service,
        account,
        JSON.stringify({ claudeAiOauth: { accessToken: selectedAccess } }),
      )
      const selected = await runBundle(harness, home, keychainPath, extraEnv)
      expect(selected.exitCode).toBe(0)
      expect(JSON.parse(selected.stdout)).toEqual({ empty: false, selected: true, plaintext: false })
    } finally {
      security(["delete-keychain", keychainPath])
    }
  },
  60_000,
)

test.skipIf(process.platform !== "darwin" || !RENDERED || GRAPH_TARGET)(
  `rendered ${targetVersion()} OAuth saver refresh and delete use only the selected Keychain`,
  async () => {
    const home = makeTempDir("patched-cc-keychain-saver-")
    const configDir = prepareProfile(home)
    const keychainPath = join(home, "OAuth profile.keychain-db")
    const harness = writeHarnessBundle(home)
    const account = accountName()
    const service = serviceName(configDir, "-credentials")
    const defaultPath = security(["default-keychain", "-d", "user"]).stdout.replace(/^"|"$/g, "")
    const sentinel = `default-sentinel-${crypto.randomUUID()}`
    createAndUnlockKeychain(keychainPath)
    writeGenericPassword(defaultPath, service, account, sentinel)

    try {
      const env = {
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "oauth-write-refresh",
        CLAUDE_KEYCHAIN_ACCESS_A: "synthetic-bundle-access-a",
        CLAUDE_KEYCHAIN_REFRESH_A: "synthetic-bundle-refresh-a",
        CLAUDE_KEYCHAIN_ACCESS_B: "synthetic-bundle-access-b",
        CLAUDE_KEYCHAIN_REFRESH_B: "synthetic-bundle-refresh-b",
      }
      const saved = await runBundle(harness, home, keychainPath, env)
      expect(saved.exitCode).toBe(0)
      expect(JSON.parse(saved.stdout)).toEqual({ first: true, second: true, stored: true })
      expect(saved.stderr).not.toContain("synthetic-bundle")

      const selected = readGenericPassword(keychainPath, service, account)
      expect(selected.exitCode).toBe(0)
      expect(JSON.parse(selected.stdout)).toMatchObject({
        claudeAiOauth: {
          accessToken: "synthetic-bundle-access-b",
          refreshToken: "synthetic-bundle-refresh-b",
        },
      })
      expect(readGenericPassword(defaultPath, service, account).stdout).toBe(sentinel)

      const deleted = await runBundle(harness, home, keychainPath, {
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "secure-delete",
      })
      expect(deleted.exitCode).toBe(0)
      expect(JSON.parse(deleted.stdout)).toEqual({ deleted: true, empty: true })
      expect(readGenericPassword(keychainPath, service, account).exitCode).toBe(44)
      expect(readGenericPassword(defaultPath, service, account).stdout).toBe(sentinel)
    } finally {
      deleteGenericPassword(defaultPath, service, account)
      security(["delete-keychain", keychainPath])
    }
  },
  60_000,
)

test.skipIf(process.platform !== "darwin" || !RENDERED || GRAPH_TARGET)(
  `rendered ${targetVersion()} serializes concurrent secure-storage mutations across processes`,
  async () => {
    const home = makeTempDir("patched-cc-keychain-atomic-")
    const configDir = prepareProfile(home)
    const keychainPath = join(home, "atomic profile.keychain-db")
    const harness = writeHarnessBundle(home)
    const service = serviceName(configDir, "-credentials")
    createAndUnlockKeychain(keychainPath)

    try {
      const first = runBundle(harness, home, keychainPath, {
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "mutate",
        CLAUDE_KEYCHAIN_MUTATION_FIELD: "processOne",
        CLAUDE_KEYCHAIN_MUTATION_VALUE: "present",
      })
      const second = runBundle(harness, home, keychainPath, {
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "mutate",
        CLAUDE_KEYCHAIN_MUTATION_FIELD: "processTwo",
        CLAUDE_KEYCHAIN_MUTATION_VALUE: "present",
      })
      const results = await Promise.all([first, second])
      expect(results.map(({ exitCode }) => exitCode)).toEqual([0, 0])

      const selected = readGenericPassword(keychainPath, service, accountName())
      expect(selected.exitCode).toBe(0)
      expect(JSON.parse(selected.stdout)).toMatchObject({
        processOne: "present",
        processTwo: "present",
      })
    } finally {
      security(["delete-keychain", keychainPath])
    }
  },
  60_000,
)

test.skipIf(process.platform !== "darwin" || !RENDERED || GRAPH_TARGET)(
  `rendered ${targetVersion()} SessionStore resume and plugin eval materialize only selected credentials`,
  async () => {
    const home = makeTempDir("patched-cc-keychain-materialize-")
    const configDir = prepareProfile(home)
    const keychainPath = join(home, "materialize profile.keychain-db")
    const pluginConfigDir = join(home, "plugin-eval-config")
    const harness = writeHarnessBundle(home)
    const account = accountName()
    const service = serviceName(configDir, "-credentials")
    const defaultPath = security(["default-keychain", "-d", "user"]).stdout.replace(/^"|"$/g, "")
    const selectedAccess = "synthetic-selected-materialized-access"
    const plaintextAccess = "synthetic-plaintext-materialized-access"
    const selectedCredentials = JSON.stringify({
      claudeAiOauth: {
        accessToken: selectedAccess,
        refreshToken: "synthetic-selected-materialized-refresh",
        expiresAt: Date.now() + 3_600_000,
        scopes: ["user:profile", "user:inference"],
        subscriptionType: "pro",
        rateLimitTier: null,
      },
    })
    createAndUnlockKeychain(keychainPath)
    writeGenericPassword(keychainPath, service, account, selectedCredentials)
    writeGenericPassword(
      defaultPath,
      service,
      account,
      JSON.stringify({ claudeAiOauth: { accessToken: "synthetic-default-materialized-access" } }),
    )
    writeFileSync(
      join(configDir, ".credentials.json"),
      `${JSON.stringify({ claudeAiOauth: { accessToken: plaintextAccess } })}\n`,
    )

    try {
      const env = {
        CLAUDE_KEYCHAIN_SELECTED_ACCESS: selectedAccess,
        CLAUDE_KEYCHAIN_PLAINTEXT_ACCESS: plaintextAccess,
      }
      const resumed = await runBundle(harness, home, keychainPath, {
        ...env,
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "session-resume",
      })
      if (resumed.exitCode !== 0) console.error(resumed.stderr)
      expect(resumed.exitCode).toBe(0)
      expect(JSON.parse(resumed.stdout)).toEqual({
        selected: true,
        plaintext: false,
        refreshStripped: true,
      })

      const pluginEval = await runBundle(harness, home, keychainPath, {
        ...env,
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "plugin-eval",
        CLAUDE_KEYCHAIN_PLUGIN_CONFIG_DIR: pluginConfigDir,
      })
      if (pluginEval.exitCode !== 0) console.error(pluginEval.stderr)
      expect(pluginEval.exitCode).toBe(0)
      expect(JSON.parse(pluginEval.stdout)).toEqual({ selected: true, plaintext: false })
      expect(readGenericPassword(defaultPath, service, account).stdout).toContain(
        "synthetic-default-materialized-access",
      )
    } finally {
      deleteGenericPassword(defaultPath, service, account)
      security(["delete-keychain", keychainPath])
    }
  },
  60_000,
)

test.skipIf(process.platform !== "darwin" || !RENDERED)(
  "real plugin eval child uses materialized selected-Keychain credentials without preload",
  async () => {
    const home = makeTempDir("patched-cc-keychain-plugin-eval-")
    const configDir = prepareProfile(home)
    const pluginDir = preparePluginEvalFixture(home)
    const outputDir = join(home, "eval-results")
    const keychainPath = join(home, "plugin eval profile.keychain-db")
    const service = serviceName(configDir, "-credentials")
    const selectedAccess = "synthetic-plugin-eval-selected-access"
    const plaintextAccess = "synthetic-plugin-eval-plaintext-access"
    const stub = await startClaudeApiStub({ text: "KEYCHAIN_EVAL_OK" })
    createAndUnlockKeychain(keychainPath)
    writeGenericPassword(
      keychainPath,
      service,
      accountName(),
      JSON.stringify({
        claudeAiOauth: {
          accessToken: selectedAccess,
          refreshToken: "synthetic-plugin-eval-selected-refresh",
          expiresAt: Date.now() + 3_600_000,
          scopes: ["user:profile", "user:inference"],
          subscriptionType: "pro",
          rateLimitTier: null,
        },
      }),
    )
    writeFileSync(
      join(configDir, ".credentials.json"),
      `${JSON.stringify({ claudeAiOauth: { accessToken: plaintextAccess } })}\n`,
    )

    try {
      const result = await runBundle(
        BUNDLE,
        home,
        keychainPath,
        {
          ANTHROPIC_API_KEY: "synthetic-plugin-eval-env-api-key",
          ANTHROPIC_AUTH_TOKEN: "synthetic-plugin-eval-env-auth-token",
          ANTHROPIC_BASE_URL: stub.baseUrl,
          CLAUDE_CODE_WALNUT_SPIRE: "1",
        },
        [
          "plugin",
          "eval",
          "--ablation",
          "none",
          "--runs",
          "1",
          "--json",
          "--output-dir",
          outputDir,
          pluginDir,
        ],
      )
      if (result.exitCode !== 0) console.error(`${result.stdout}\n${result.stderr}`)
      expect(result.exitCode).toBe(0)
      expect(result.stderr).not.toContain("requires the packaged claude-patched launcher")
      expect(result.stdout).not.toContain("synthetic-plugin-eval")

      const report = JSON.parse(result.stdout) as {
        cases?: Array<{ arms?: { with?: Array<{ score?: number; error?: string | null }> } }>
      }
      expect(report.cases?.[0]?.arms?.with?.[0]).toMatchObject({ score: 1, error: null })

      const request = await stub.waitForRequest(({ path }) => path.endsWith("/messages"))
      expect(request.headers.authorization).toBe(`Bearer ${selectedAccess}`)
      expect(request.headers["x-api-key"]).toBeUndefined()
      expect(request.rawBody).not.toContain(selectedAccess)
      expect(request.rawBody).not.toContain("synthetic-plugin-eval")
    } finally {
      stub.stop()
      security(["delete-keychain", keychainPath])
    }
  },
  90_000,
)

test.skipIf(process.platform !== "darwin" || !RENDERED || GRAPH_TARGET)(
  `rendered ${targetVersion()} legacy API-key save lookup and delete use only the selected Keychain`,
  async () => {
    const home = makeTempDir("patched-cc-keychain-legacy-")
    const configDir = prepareProfile(home)
    const keychainPath = join(home, "legacy profile.keychain-db")
    const harness = writeHarnessBundle(home)
    const account = accountName()
    const service = serviceName(configDir, "")
    const defaultPath = security(["default-keychain", "-d", "user"]).stdout.replace(/^"|"$/g, "")
    const sentinel = `default-sentinel-${crypto.randomUUID()}`
    createAndUnlockKeychain(keychainPath)
    writeGenericPassword(defaultPath, service, account, sentinel)

    try {
      const apiKey = "sk-ant-synthetic_bundle_legacy"
      const saved = await runBundle(harness, home, keychainPath, {
        [MATERIALIZED_ENV]: "1",
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "legacy-write",
        CLAUDE_KEYCHAIN_LEGACY_KEY: apiKey,
      })
      if (saved.exitCode !== 0) console.error(saved.stderr)
      expect(saved.exitCode).toBe(0)
      expect(JSON.parse(saved.stdout)).toEqual({ stored: true })
      expect(readGenericPassword(keychainPath, service, account).stdout).toBe(apiKey)
      expect(readGenericPassword(defaultPath, service, account).stdout).toBe(sentinel)

      const read = await runBundle(harness, home, keychainPath, {
        [MATERIALIZED_ENV]: "1",
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "legacy-read",
        CLAUDE_KEYCHAIN_LEGACY_KEY: apiKey,
      })
      expect(read.exitCode).toBe(0)
      expect(JSON.parse(read.stdout)).toEqual({ sync: true, async: true })

      const guarded = await runBundle(harness, home, keychainPath, {
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "legacy-guard",
        CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST: "1",
      })
      expect(guarded.exitCode).toBe(0)
      expect(JSON.parse(guarded.stdout)).toEqual({ sync: true, async: true })

      const bare = await runBundle(harness, home, keychainPath, { CLAUDE_KEYCHAIN_HARNESS_ACTION: "legacy-guard" }, [
        "--bare",
      ])
      expect(bare.exitCode).toBe(0)
      expect(JSON.parse(bare.stdout)).toEqual({ sync: true, async: true })

      const deleted = await runBundle(harness, home, keychainPath, {
        [MATERIALIZED_ENV]: "1",
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "legacy-delete",
      })
      expect(deleted.exitCode).toBe(0)
      expect(JSON.parse(deleted.stdout)).toEqual({ deleted: true })
      expect(readGenericPassword(keychainPath, service, account).exitCode).toBe(44)
      expect(readGenericPassword(defaultPath, service, account).stdout).toBe(sentinel)
    } finally {
      deleteGenericPassword(defaultPath, service, account)
      security(["delete-keychain", keychainPath])
    }
  },
  60_000,
)

test.skipIf(process.platform !== "darwin" || !RENDERED || GRAPH_TARGET)(
  "materialized mode rejects default-Keychain legacy mutations and doctor probes",
  async () => {
    const home = makeTempDir("patched-cc-keychain-materialized-closed-")
    const configDir = prepareProfile(home)
    const harness = writeHarnessBundle(home)
    const account = accountName()
    const legacyService = serviceName(configDir, "")
    const doctorService = "Claude Code-doctor-probe"
    const defaultPath = security(["default-keychain", "-d", "user"]).stdout.replace(/^"|"$/g, "")
    const legacySentinel = `default-legacy-sentinel-${crypto.randomUUID()}`
    const doctorSentinel = `default-doctor-sentinel-${crypto.randomUUID()}`
    writeGenericPassword(defaultPath, legacyService, account, legacySentinel)
    writeGenericPassword(defaultPath, doctorService, account, doctorSentinel)

    try {
      const write = await runBundle(harness, home, undefined, {
        [MATERIALIZED_ENV]: "1",
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "legacy-write",
        CLAUDE_KEYCHAIN_LEGACY_KEY: "sk-ant-synthetic_materialized_rejected",
      })
      expect(write.exitCode).not.toBe(0)
      expect(`${write.stdout}\n${write.stderr}`).toContain(
        "Materialized credential mode refuses legacy Keychain",
      )
      expect(readGenericPassword(defaultPath, legacyService, account).stdout).toBe(legacySentinel)

      const deleted = await runBundle(harness, home, undefined, {
        [MATERIALIZED_ENV]: "1",
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "legacy-delete",
      })
      expect(deleted.exitCode).not.toBe(0)
      expect(`${deleted.stdout}\n${deleted.stderr}`).toContain(
        "Materialized credential mode refuses legacy Keychain deletion",
      )
      expect(readGenericPassword(defaultPath, legacyService, account).stdout).toBe(legacySentinel)

      const doctor = await runBundle(harness, home, undefined, {
        [MATERIALIZED_ENV]: "1",
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "doctor-probe",
      })
      expect(doctor.exitCode).toBe(0)
      expect(JSON.parse(doctor.stdout)).toEqual({ healthy: false })
      expect(readGenericPassword(defaultPath, doctorService, account).stdout).toBe(doctorSentinel)
    } finally {
      deleteGenericPassword(defaultPath, legacyService, account)
      deleteGenericPassword(defaultPath, doctorService, account)
    }
  },
  60_000,
)

test.skipIf(process.platform !== "darwin" || !RENDERED || GRAPH_TARGET)(
  `rendered ${targetVersion()} doctor probe never touches the default Keychain`,
  async () => {
    const home = makeTempDir("patched-cc-keychain-doctor-")
    prepareProfile(home)
    const keychainPath = join(home, "doctor profile.keychain-db")
    const harness = writeHarnessBundle(home)
    const account = accountName()
    const service = "Claude Code-doctor-probe"
    const defaultPath = security(["default-keychain", "-d", "user"]).stdout.replace(/^"|"$/g, "")
    const sentinel = `default-doctor-sentinel-${crypto.randomUUID()}`
    createAndUnlockKeychain(keychainPath)
    writeGenericPassword(defaultPath, service, account, sentinel)

    try {
      const probed = await runBundle(harness, home, keychainPath, {
        CLAUDE_KEYCHAIN_HARNESS_ACTION: "doctor-probe",
      })
      expect(probed.exitCode).toBe(0)
      expect(JSON.parse(probed.stdout)).toEqual({ healthy: true })
      expect(readGenericPassword(keychainPath, service, account).exitCode).toBe(44)
      expect(readGenericPassword(defaultPath, service, account).stdout).toBe(sentinel)
    } finally {
      deleteGenericPassword(defaultPath, service, account)
      security(["delete-keychain", keychainPath])
    }
  },
  60_000,
)

test.skipIf(process.platform !== "darwin" || !RENDERED)(
  `rendered ${targetVersion()} auth lookup and TUI startup use the process-selected Keychain`,
  async () => {
    const home = makeTempDir("patched-cc-keychain-tui-")
    const configDir = prepareProfile(home)
    const keychainPath = join(home, "TUI profile.keychain-db")
    const service = serviceName(configDir, "-credentials")
    createAndUnlockKeychain(keychainPath)
    writeGenericPassword(
      keychainPath,
      service,
      accountName(),
      JSON.stringify({
        claudeAiOauth: {
          accessToken: "synthetic-tui-access",
          refreshToken: "synthetic-tui-refresh",
          expiresAt: Date.now() + 3_600_000,
          scopes: ["user:profile", "user:inference"],
          subscriptionType: "pro",
          rateLimitTier: null,
        },
      }),
    )

    try {
      const status = Bun.spawnSync({
        cmd: [process.execPath, "--preload", PRELOAD, BUNDLE, "auth", "status", "--json"],
        cwd: home,
        env: {
          ...process.env,
          HOME: home,
          CLAUDE_CONFIG_DIR: configDir,
          CLAUDE_CODE_KEYCHAIN_PATH: keychainPath,
          CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
        },
        stdout: "pipe",
        stderr: "pipe",
      })
      expect(status.exitCode).toBe(0)
      // 2.1.228 includes the first-party provider in the status shape while
      // retaining the public auth method label used by older targets.
      const expectedStatusShape = isVersionAtLeast(targetVersion(), "2.1.228")
        ? { loggedIn: true, apiProvider: "firstParty", authMethod: "claude.ai" }
        : { loggedIn: true, authMethod: "claude.ai" }
      expect(JSON.parse(status.stdout.toString())).toMatchObject(expectedStatusShape)

      const env = shellEnvironment({
        HOME: home,
        CLAUDE_CONFIG_DIR: configDir,
        CLAUDE_CODE_KEYCHAIN_PATH: keychainPath,
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
        CLAUDE_CODE_SKIP_ONBOARDING: "1",
        CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
        FORCE_COLOR: "0",
        TERM: "xterm-256color",
      })
      const command = [
        "env",
        env,
        "bun",
        "--preload",
        shellQuote(PRELOAD),
        shellQuote(BUNDLE),
        "--model",
        "sonnet",
      ].join(" ")
      const input = [
        "sleep 3",
        `printf %s ${shellQuote("\x1b[13u")}`,
        "sleep 3",
        `printf %s ${shellQuote("\x1b[200~/exit\x1b[201~")}`,
        "sleep 1",
        `printf %s ${shellQuote("\x1b[13u")}`,
        "sleep 1",
        `printf %s ${shellQuote("\x1b[13u")}`,
      ].join("; ")
      const subprocess = Bun.spawn({
        cmd: ["bash", "-lc", makeScriptCommand(command, input)],
        cwd: home,
        stdout: "pipe",
        stderr: "pipe",
      })
      // Bound the TUI run in-process: GNU timeout is unavailable on macOS
      // runners, and the TUI normally exits through the pasted /exit anyway.
      const watchdog = setTimeout(() => subprocess.kill(), 20_000)
      const [exitCode, stdout, stderr] = await Promise.all([
        subprocess.exited,
        new Response(subprocess.stdout).text(),
        new Response(subprocess.stderr).text(),
      ])
      clearTimeout(watchdog)
      const output = normalizeTuiOutput(`${stdout}\n${stderr}`)
      if (exitCode !== 0) console.error(output)
      expect(exitCode).toBe(0)
      expect(output).toContain("Claude Code")
      expect(output).not.toMatch(/(?:TypeError|ReferenceError)/)
      expect(output).not.toContain("synthetic-tui")
    } finally {
      security(["delete-keychain", keychainPath])
    }
  },
  30_000,
)
