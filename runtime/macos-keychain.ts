import { isAbsolute } from "node:path"

export const CLAUDE_CODE_KEYCHAIN_PATH = "CLAUDE_CODE_KEYCHAIN_PATH"
export const MACOS_KEYCHAIN_BRIDGE = Symbol.for("patched-claude-code.macos-keychain.v1")

const SECURITY_STDIN_LINE_LIMIT = 4032
const SECURITY_TIMEOUT_MS = 30_000
const KEYCHAIN_CACHE_TTL_MS = 30_000
const ITEM_NOT_FOUND = 44

export type CredentialData = Record<string, unknown>

export type StorageUpdateResult = {
  success: boolean
  transient?: boolean
  warning?: string
}

export type CredentialStorage = {
  name: string
  read(): CredentialData | null
  readAsync(): Promise<CredentialData | null>
  readAsyncStrict?(): Promise<CredentialData | null>
  invalidateCache?(): void
  mutate(mutator: (data: CredentialData) => CredentialData): Promise<StorageUpdateResult>
  update(data: CredentialData): Promise<StorageUpdateResult>
  delete(): Promise<boolean>
}

export type AtomicCredentialMutation = (
  storage: CredentialStorage,
  mutator: (data: CredentialData) => CredentialData,
) => Promise<StorageUpdateResult>

export type MacOsKeychainBridgeInput = {
  defaultStorage: CredentialStorage
  serviceName: string
  accountName: string
  mutateWithLock: AtomicCredentialMutation
}

export type LegacyApiKeyStorage = {
  read(serviceName: string, accountName: string): string | null
  readAsync(serviceName: string, accountName: string): Promise<string | null>
  update(serviceName: string, accountName: string, apiKey: string): Promise<void>
  delete(serviceName: string, accountName: string): Promise<boolean>
}

export type MacOsKeychainBridge = {
  secureStorage(input: MacOsKeychainBridgeInput): CredentialStorage
  legacyApiKey: LegacyApiKeyStorage
}

export type SecurityResult = {
  exitCode: number
  stdout: string
}

export type SecurityRunner = {
  runSync(args: string[]): SecurityResult
  run(args: string[], input?: string): Promise<SecurityResult>
}

export class MacOsKeychainSelectionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "MacOsKeychainSelectionError"
  }
}

export function resolveExplicitKeychainPath(env: Record<string, string | undefined> = process.env): string | null {
  if (!Object.hasOwn(env, CLAUDE_CODE_KEYCHAIN_PATH)) return null

  const path = env[CLAUDE_CODE_KEYCHAIN_PATH] ?? ""
  if (/[\0\r\n]/.test(path)) {
    throw new MacOsKeychainSelectionError(`${CLAUDE_CODE_KEYCHAIN_PATH} must not contain NUL, CR, or LF characters.`)
  }
  if (!isAbsolute(path)) {
    throw new MacOsKeychainSelectionError(
      `${CLAUDE_CODE_KEYCHAIN_PATH} must be an absolute path; received ${JSON.stringify(path)}.`,
    )
  }
  return path
}

export function serializeSecurityInteractiveCommand(args: readonly string[]): string {
  const [command, ...operands] = args
  if (!command || !/^[a-z][a-z-]*$/.test(command)) {
    throw new MacOsKeychainSelectionError("Invalid security command name.")
  }
  return `${command}${operands.length === 0 ? "" : ` ${operands.map(quoteSecurityOperand).join(" ")}`}\n`
}

export function createMacOsKeychainStorage(options: {
  path: string
  serviceName: string
  accountName: string
  mutateWithLock: AtomicCredentialMutation
  runner?: SecurityRunner
  now?: () => number
}): CredentialStorage {
  const { path, serviceName, accountName, mutateWithLock } = options
  validateCredentialField("Keychain path", path)
  validateCredentialField("service name", serviceName)
  validateCredentialField("account name", accountName)
  if (!isAbsolute(path)) {
    throw new MacOsKeychainSelectionError(`${CLAUDE_CODE_KEYCHAIN_PATH} must be an absolute path.`)
  }

  const runner = options.runner ?? bunSecurityRunner
  const now = options.now ?? Date.now
  let cached: { data: CredentialData; at: number } | null = null
  let generation = 0
  let readInFlight: Promise<CredentialData> | null = null

  function accessError(operation: string): MacOsKeychainSelectionError {
    return new MacOsKeychainSelectionError(
      `Unable to ${operation} the Keychain requested by ${CLAUDE_CODE_KEYCHAIN_PATH} (${JSON.stringify(path)}). ` +
        `Ensure it exists and is unlocked, then retry. Unlock it with: security unlock-keychain ${shellQuote(path)}`,
    )
  }

  function parseLookup(result: SecurityResult): CredentialData {
    if (result.exitCode === ITEM_NOT_FOUND) return {}
    if (result.exitCode !== 0) throw accessError("read credentials from")
    try {
      const parsed: unknown = JSON.parse(result.stdout.trim())
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new Error("credential payload is not an object")
      }
      return parsed as CredentialData
    } catch {
      throw accessError("decode credentials in")
    }
  }

  function invalidateCache(): void {
    cached = null
    generation++
    readInFlight = null
  }

  function preflightSync(): void {
    if (runner.runSync(["show-keychain-info", path]).exitCode !== 0) {
      throw accessError("access")
    }
  }

  async function preflight(): Promise<void> {
    if ((await runner.run(["show-keychain-info", path])).exitCode !== 0) {
      throw accessError("access")
    }
  }

  function lookupArgs(): string[] {
    return ["find-generic-password", "-a", accountName, "-w", "-s", serviceName, path]
  }

  function readFreshSync(): CredentialData {
    preflightSync()
    const data = parseLookup(runner.runSync(lookupArgs()))
    cached = { data, at: now() }
    return data
  }

  async function readFresh(): Promise<CredentialData> {
    await preflight()
    return parseLookup(await runner.run(lookupArgs()))
  }

  async function update(data: CredentialData): Promise<StorageUpdateResult> {
    invalidateCache()
    await preflight()
    const hex = Buffer.from(JSON.stringify(data), "utf8").toString("hex")
    const args = ["add-generic-password", "-U", "-a", accountName, "-s", serviceName, "-X", hex, path]
    const input = serializeSecurityInteractiveCommand(args)
    if (Buffer.byteLength(input, "utf8") > SECURITY_STDIN_LINE_LIMIT) {
      throw new MacOsKeychainSelectionError(
        `Credential data is too large for security -i; refusing to expose it through process arguments.`,
      )
    }
    const result = await runner.run(["-i"], input)
    if (result.exitCode !== 0) throw accessError("write credentials to")
    invalidateCache()
    cached = { data, at: now() }
    return { success: true }
  }

  const storage: CredentialStorage = {
    name: "keychain-explicit",
    read() {
      if (cached && now() - cached.at < KEYCHAIN_CACHE_TTL_MS) return cached.data
      return readFreshSync()
    },
    async readAsync() {
      if (cached && now() - cached.at < KEYCHAIN_CACHE_TTL_MS) return cached.data
      if (readInFlight) return readInFlight

      const readGeneration = generation
      const promise = readFresh()
        .then((data) => {
          if (readGeneration === generation) {
            cached = { data, at: now() }
          }
          return data
        })
        .finally(() => {
          if (readInFlight === promise) readInFlight = null
        })
      readInFlight = promise
      return promise
    },
    async readAsyncStrict() {
      const readGeneration = generation
      const data = await readFresh()
      if (readGeneration === generation) cached = { data, at: now() }
      return data
    },
    invalidateCache,
    mutate(mutator) {
      return mutateWithLock(storage, mutator)
    },
    update,
    async delete() {
      invalidateCache()
      await preflight()
      const result = await runner.run(["delete-generic-password", "-a", accountName, "-s", serviceName, path])
      if (result.exitCode !== 0 && result.exitCode !== ITEM_NOT_FOUND) {
        throw accessError("delete credentials from")
      }
      invalidateCache()
      cached = { data: {}, at: now() }
      return true
    },
  }
  return storage
}

export function createMacOsKeychainBridge(
  env: Record<string, string | undefined> = process.env,
  runner: SecurityRunner = bunSecurityRunner,
): MacOsKeychainBridge {
  const path = resolveExplicitKeychainPath(env)
  if (path === null) {
    return {
      secureStorage: ({ defaultStorage }) => defaultStorage,
      legacyApiKey: unselectedLegacyApiKeyStorage,
    }
  }
  if (runner.runSync(["show-keychain-info", path]).exitCode !== 0) {
    throw new MacOsKeychainSelectionError(
      `Unable to access the Keychain requested by ${CLAUDE_CODE_KEYCHAIN_PATH} (${JSON.stringify(path)}). ` +
        `Ensure it exists and is unlocked, then retry. Unlock it with: security unlock-keychain ${shellQuote(path)}`,
    )
  }

  const stores = new Map<string, CredentialStorage>()
  return {
    secureStorage({ serviceName, accountName, mutateWithLock }) {
      const key = `${path}\0${serviceName}\0${accountName}`
      let store = stores.get(key)
      if (!store) {
        store = createMacOsKeychainStorage({
          path,
          serviceName,
          accountName,
          mutateWithLock,
          runner,
        })
        stores.set(key, store)
      }
      return store
    },
    legacyApiKey: createLegacyApiKeyStorage(path, runner),
  }
}

function createLegacyApiKeyStorage(path: string, runner: SecurityRunner): LegacyApiKeyStorage {
  function accessError(operation: string): MacOsKeychainSelectionError {
    return new MacOsKeychainSelectionError(
      `Unable to ${operation} the Keychain requested by ${CLAUDE_CODE_KEYCHAIN_PATH} (${JSON.stringify(path)}). ` +
        `Ensure it exists and is unlocked, then retry. Unlock it with: security unlock-keychain ${shellQuote(path)}`,
    )
  }

  function lookupArgs(serviceName: string, accountName: string): string[] {
    validateCredentialField("service name", serviceName)
    validateCredentialField("account name", accountName)
    return ["find-generic-password", "-a", accountName, "-w", "-s", serviceName, path]
  }

  function parseLookup(result: SecurityResult): string | null {
    if (result.exitCode === ITEM_NOT_FOUND) return null
    if (result.exitCode !== 0) throw accessError("read the legacy API key from")
    return result.stdout.trim() || null
  }

  function preflightSync(): void {
    if (runner.runSync(["show-keychain-info", path]).exitCode !== 0) throw accessError("access")
  }

  async function preflight(): Promise<void> {
    if ((await runner.run(["show-keychain-info", path])).exitCode !== 0) throw accessError("access")
  }

  return {
    read(serviceName, accountName) {
      preflightSync()
      return parseLookup(runner.runSync(lookupArgs(serviceName, accountName)))
    },
    async readAsync(serviceName, accountName) {
      await preflight()
      return parseLookup(await runner.run(lookupArgs(serviceName, accountName)))
    },
    async update(serviceName, accountName, apiKey) {
      validateCredentialField("legacy API key", apiKey)
      await preflight()
      const input = serializeSecurityInteractiveCommand([
        "add-generic-password",
        "-U",
        "-a",
        accountName,
        "-s",
        serviceName,
        "-X",
        Buffer.from(apiKey, "utf8").toString("hex"),
        path,
      ])
      if (Buffer.byteLength(input, "utf8") > SECURITY_STDIN_LINE_LIMIT) {
        throw new MacOsKeychainSelectionError(
          `Legacy API key data is too large for security -i; refusing to expose it through process arguments.`,
        )
      }
      if ((await runner.run(["-i"], input)).exitCode !== 0) {
        throw accessError("write the legacy API key to")
      }
    },
    async delete(serviceName, accountName) {
      await preflight()
      const result = await runner.run(["delete-generic-password", "-a", accountName, "-s", serviceName, path])
      if (result.exitCode !== 0 && result.exitCode !== ITEM_NOT_FOUND) {
        throw accessError("delete the legacy API key from")
      }
      return true
    },
  }
}

const unselectedLegacyApiKeyStorage: LegacyApiKeyStorage = {
  read() {
    throw new MacOsKeychainSelectionError(`${CLAUDE_CODE_KEYCHAIN_PATH} is not set.`)
  },
  async readAsync() {
    throw new MacOsKeychainSelectionError(`${CLAUDE_CODE_KEYCHAIN_PATH} is not set.`)
  },
  async update() {
    throw new MacOsKeychainSelectionError(`${CLAUDE_CODE_KEYCHAIN_PATH} is not set.`)
  },
  async delete() {
    throw new MacOsKeychainSelectionError(`${CLAUDE_CODE_KEYCHAIN_PATH} is not set.`)
  },
}

const bunSecurityRunner: SecurityRunner = {
  runSync(args) {
    const result = Bun.spawnSync({
      cmd: ["security", ...args],
      stdin: "ignore",
      stdout: "pipe",
      stderr: "pipe",
      timeout: SECURITY_TIMEOUT_MS,
    })
    return { exitCode: result.exitCode, stdout: result.stdout.toString() }
  },
  async run(args, input) {
    const subprocess = Bun.spawn({
      cmd: ["security", ...args],
      stdin: input === undefined ? "ignore" : new Blob([input]),
      stdout: "pipe",
      stderr: "pipe",
      timeout: SECURITY_TIMEOUT_MS,
    })
    const [exitCode, stdout] = await Promise.all([
      subprocess.exited,
      new Response(subprocess.stdout).text(),
      new Response(subprocess.stderr).text(),
    ])
    return { exitCode, stdout }
  },
}

function validateCredentialField(label: string, value: string): void {
  if (/[\0\r\n]/.test(value)) {
    throw new MacOsKeychainSelectionError(`${label} must not contain NUL, CR, or LF characters.`)
  }
}

function quoteSecurityOperand(value: string): string {
  validateCredentialField("security command argument", value)
  return `"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`
}

function shellQuote(value: string): string {
  return `'${value.replaceAll("'", "'\\''")}'`
}

if (process.platform === "darwin") {
  const globalWithBridge = globalThis as typeof globalThis & {
    [MACOS_KEYCHAIN_BRIDGE]?: MacOsKeychainBridge
  }
  globalWithBridge[MACOS_KEYCHAIN_BRIDGE] = createMacOsKeychainBridge()
}
