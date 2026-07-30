import { afterEach, expect, test } from "bun:test"
import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  type AtomicCredentialMutation,
  CLAUDE_CODE_KEYCHAIN_PATH,
  type CredentialData,
  type CredentialStorage,
  createMacOsKeychainBridge,
  createMacOsKeychainStorage,
  MacOsKeychainSelectionError,
  resolveExplicitKeychainPath,
  type SecurityResult,
  type SecurityRunner,
  serializeSecurityInteractiveCommand,
} from "../../runtime/macos-keychain"

const tempDirs: string[] = []

const mutateWithLock: AtomicCredentialMutation = async (storage, mutator) => {
  storage.invalidateCache?.()
  const current = (await (storage.readAsyncStrict?.() ?? storage.readAsync())) ?? {}
  const next = mutator(current)
  return next === current ? { success: true } : storage.update(next)
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) rmSync(dir, { recursive: true, force: true })
})

function defaultStorage(): CredentialStorage {
  return {
    name: "default",
    read: () => ({ default: true }),
    readAsync: async () => ({ default: true }),
    mutate: async () => ({ success: true }),
    update: async () => ({ success: true }),
    delete: async () => true,
  }
}

class MemorySecurityRunner implements SecurityRunner {
  data: CredentialData | null = null
  accessible = true
  calls: Array<{ args: string[]; input?: string }> = []

  runSync(args: string[]): SecurityResult {
    this.calls.push({ args })
    return this.result(args)
  }

  async run(args: string[], input?: string): Promise<SecurityResult> {
    this.calls.push({ args, input })
    if (args[0] === "-i" && input) {
      const hex = / "-X" "([0-9a-f]+)"/.exec(input)?.[1]
      if (!hex) return { exitCode: 1, stdout: "" }
      this.data = JSON.parse(Buffer.from(hex, "hex").toString("utf8")) as CredentialData
      return { exitCode: this.accessible ? 0 : 36, stdout: "" }
    }
    if (args[0] === "delete-generic-password") {
      this.data = null
      return { exitCode: this.accessible ? 0 : 36, stdout: "" }
    }
    return this.result(args)
  }

  private result(args: string[]): SecurityResult {
    if (!this.accessible) return { exitCode: 36, stdout: "" }
    if (args[0] === "show-keychain-info") return { exitCode: 0, stdout: "" }
    if (args[0] === "find-generic-password") {
      return this.data ? { exitCode: 0, stdout: JSON.stringify(this.data) } : { exitCode: 44, stdout: "" }
    }
    return { exitCode: 1, stdout: "" }
  }
}

test("unset selection preserves the existing credential store exactly", () => {
  const existing = defaultStorage()
  const runner = new MemorySecurityRunner()
  const bridge = createMacOsKeychainBridge({}, runner)

  expect(
    bridge.secureStorage({
      defaultStorage: existing,
      serviceName: "Claude Code-credentials",
      accountName: "user",
      mutateWithLock,
    }),
  ).toBe(existing)
  expect(runner.calls).toHaveLength(0)
})

test("selection rejects relative, empty, and control-character paths", () => {
  for (const path of ["", "relative.keychain-db", "/tmp/nul\0path", "/tmp/cr\rpath", "/tmp/lf\npath"]) {
    expect(() => resolveExplicitKeychainPath({ [CLAUDE_CODE_KEYCHAIN_PATH]: path })).toThrow(
      MacOsKeychainSelectionError,
    )
  }
})

test("explicit lookup never consults default storage when the item is absent", async () => {
  const runner = new MemorySecurityRunner()
  let defaultReads = 0
  const existing = defaultStorage()
  existing.read = () => {
    defaultReads++
    return { default: true }
  }
  const path = "/tmp/isolated profile.keychain-db"
  const storage = createMacOsKeychainBridge({ [CLAUDE_CODE_KEYCHAIN_PATH]: path }, runner).secureStorage({
    defaultStorage: existing,
    serviceName: "Claude Code-credentials",
    accountName: "user",
    mutateWithLock,
  })

  expect(await storage.readAsyncStrict?.()).toEqual({})
  expect(defaultReads).toBe(0)
  expect(runner.calls.at(-1)?.args).toEqual([
    "find-generic-password",
    "-a",
    "user",
    "-w",
    "-s",
    "Claude Code-credentials",
    path,
  ])
})

test("login write and refresh update stay in one security -i command", async () => {
  const runner = new MemorySecurityRunner()
  const path = `/tmp/profile $;'"() [].keychain-db`
  let atomicMutations = 0
  const storage = createMacOsKeychainStorage({
    path,
    serviceName: "Claude Code-credentials",
    accountName: "test user",
    mutateWithLock: async (selectedStorage, mutator) => {
      atomicMutations++
      return mutateWithLock(selectedStorage, mutator)
    },
    runner,
  })
  const login = { claudeAiOauth: { accessToken: "synthetic-a", refreshToken: "refresh-a" } }
  const refresh = { claudeAiOauth: { accessToken: "synthetic-b", refreshToken: "refresh-b" } }

  expect(await storage.update(login)).toEqual({ success: true })
  expect(await storage.mutate(() => refresh)).toEqual({ success: true })
  expect(await storage.readAsyncStrict?.()).toEqual(refresh)
  expect(atomicMutations).toBe(1)

  const writes = runner.calls.filter(({ args }) => args[0] === "-i")
  expect(writes).toHaveLength(2)
  for (const write of writes) {
    expect(write.args).toEqual(["-i"])
    expect(write.input?.match(/\n/g)).toHaveLength(1)
    expect(write.input?.endsWith(`"${path.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"\n`)).toBe(true)
    expect(write.input).not.toContain("synthetic-")
    expect(write.input).not.toMatch(/\n[^\n]+keychain-db/)
  }
})

test("explicit deletion targets only the requested Keychain", async () => {
  const runner = new MemorySecurityRunner()
  const path = "/tmp/delete-only-here.keychain-db"
  const storage = createMacOsKeychainStorage({
    path,
    serviceName: "Claude Code-credentials",
    accountName: "user",
    mutateWithLock,
    runner,
  })
  await storage.update({ claudeAiOauth: { accessToken: "synthetic" } })

  expect(await storage.delete()).toBe(true)
  expect(runner.calls.at(-1)?.args).toEqual([
    "delete-generic-password",
    "-a",
    "user",
    "-s",
    "Claude Code-credentials",
    path,
  ])
  expect(runner.data).toBeNull()
})

test("an inaccessible explicit Keychain fails without default fallback", () => {
  const runner = new MemorySecurityRunner()
  runner.accessible = false
  let defaultWrites = 0
  const existing = defaultStorage()
  existing.update = async () => {
    defaultWrites++
    return { success: true }
  }
  expect(() =>
    createMacOsKeychainBridge({ [CLAUDE_CODE_KEYCHAIN_PATH]: "/tmp/locked.keychain-db" }, runner).secureStorage({
      defaultStorage: existing,
      serviceName: "Claude Code-credentials",
      accountName: "user",
      mutateWithLock,
    }),
  ).toThrow("Ensure it exists and is unlocked")
  expect(defaultWrites).toBe(0)
})

test("security serializer places every operand before its sole terminating newline", () => {
  const command = serializeSecurityInteractiveCommand([
    "add-generic-password",
    "-U",
    "-a",
    "user",
    "-s",
    "Claude Code-credentials",
    "-X",
    "00ff",
    `/tmp/profile $;'"() [].keychain-db`,
  ])

  expect(command.match(/\n/g)).toHaveLength(1)
  expect(command.endsWith(`"/tmp/profile $;'\\"() [].keychain-db"\n`)).toBe(true)
  expect(command).not.toMatch(/\n.+keychain-db/)
})

test("security stdin limit is enforced in UTF-8 bytes", async () => {
  const runner = new MemorySecurityRunner()
  let repeats = 1_200
  let path = ""
  let command = ""
  do {
    repeats++
    path = `/tmp/${"界".repeat(repeats)}.keychain-db`
    command = serializeSecurityInteractiveCommand([
      "add-generic-password",
      "-U",
      "-a",
      "user",
      "-s",
      "Claude Code-credentials",
      "-X",
      Buffer.from(JSON.stringify({ ok: true }), "utf8").toString("hex"),
      path,
    ])
  } while (Buffer.byteLength(command, "utf8") <= 4_032)

  expect(command.length).toBeLessThanOrEqual(4_032)
  expect(Buffer.byteLength(command, "utf8")).toBeGreaterThan(4_032)

  const storage = createMacOsKeychainStorage({
    path,
    serviceName: "Claude Code-credentials",
    accountName: "user",
    mutateWithLock,
    runner,
  })
  await expect(storage.update({ ok: true })).rejects.toThrow("too large for security -i")
  expect(runner.calls.some(({ args }) => args[0] === "-i")).toBe(false)
})

class DeferredLookupRunner implements SecurityRunner {
  data: CredentialData = { version: "old" }
  readonly lookupStarted: Promise<void>
  private startLookup!: () => void
  private releaseLookup!: () => void
  private readonly lookupReleased: Promise<void>

  constructor() {
    this.lookupStarted = new Promise((resolve) => {
      this.startLookup = resolve
    })
    this.lookupReleased = new Promise((resolve) => {
      this.releaseLookup = resolve
    })
  }

  runSync(): SecurityResult {
    return { exitCode: 1, stdout: "" }
  }

  async run(args: string[], input?: string): Promise<SecurityResult> {
    if (args[0] === "show-keychain-info") return { exitCode: 0, stdout: "" }
    if (args[0] === "find-generic-password") {
      const captured = JSON.stringify(this.data)
      this.startLookup()
      await this.lookupReleased
      return { exitCode: 0, stdout: captured }
    }
    if (args[0] === "-i" && input) {
      const hex = / "-X" "([0-9a-f]+)"/.exec(input)?.[1]
      if (!hex) return { exitCode: 1, stdout: "" }
      this.data = JSON.parse(Buffer.from(hex, "hex").toString("utf8")) as CredentialData
      return { exitCode: 0, stdout: "" }
    }
    return { exitCode: 1, stdout: "" }
  }

  release(): void {
    this.releaseLookup()
  }
}

test("an older in-flight read cannot overwrite the post-update cache", async () => {
  const runner = new DeferredLookupRunner()
  const storage = createMacOsKeychainStorage({
    path: "/tmp/generation.keychain-db",
    serviceName: "Claude Code-credentials",
    accountName: "user",
    mutateWithLock,
    runner,
  })

  const staleRead = storage.readAsync()
  await runner.lookupStarted
  await storage.update({ version: "new" })
  runner.release()

  expect(await staleRead).toEqual({ version: "old" })
  expect(storage.read()).toEqual({ version: "new" })
})

class InterleavedWriteRunner implements SecurityRunner {
  data: CredentialData = { version: "old" }
  readonly readStarted: Promise<void>
  readonly writeStarted: Promise<void>
  private startRead!: () => void
  private startWrite!: () => void
  private releaseRead!: () => void
  private releaseWrite!: () => void
  private readonly readReleased: Promise<void>
  private readonly writeReleased: Promise<void>

  constructor() {
    this.readStarted = new Promise((resolve) => {
      this.startRead = resolve
    })
    this.writeStarted = new Promise((resolve) => {
      this.startWrite = resolve
    })
    this.readReleased = new Promise((resolve) => {
      this.releaseRead = resolve
    })
    this.writeReleased = new Promise((resolve) => {
      this.releaseWrite = resolve
    })
  }

  runSync(): SecurityResult {
    return { exitCode: 1, stdout: "" }
  }

  async run(args: string[], input?: string): Promise<SecurityResult> {
    if (args[0] === "show-keychain-info") return { exitCode: 0, stdout: "" }
    if (args[0] === "find-generic-password") {
      const captured = JSON.stringify(this.data)
      this.startRead()
      await this.readReleased
      return { exitCode: 0, stdout: captured }
    }
    if (args[0] === "-i" && input) {
      const hex = / "-X" "([0-9a-f]+)"/.exec(input)?.[1]
      if (!hex) return { exitCode: 1, stdout: "" }
      this.startWrite()
      await this.writeReleased
      this.data = JSON.parse(Buffer.from(hex, "hex").toString("utf8")) as CredentialData
      return { exitCode: 0, stdout: "" }
    }
    return { exitCode: 1, stdout: "" }
  }

  finishRead(): void {
    this.releaseRead()
  }

  finishWrite(): void {
    this.releaseWrite()
  }
}

test("a read started during an async write cannot replace the completed write cache", async () => {
  const runner = new InterleavedWriteRunner()
  const storage = createMacOsKeychainStorage({
    path: "/tmp/interleaved.keychain-db",
    serviceName: "Claude Code-credentials",
    accountName: "user",
    mutateWithLock,
    runner,
  })

  const update = storage.update({ version: "new" })
  await runner.writeStarted
  const staleRead = storage.readAsync()
  await runner.readStarted
  runner.finishWrite()
  await update
  runner.finishRead()

  expect(await staleRead).toEqual({ version: "old" })
  expect(storage.read()).toEqual({ version: "new" })
})

function security(args: string[]): SecurityResult {
  const result = Bun.spawnSync({
    cmd: ["/usr/bin/security", ...args],
    stdin: "ignore",
    stdout: "pipe",
    stderr: "pipe",
  })
  return { exitCode: result.exitCode, stdout: result.stdout.toString().trim() }
}

test.skipIf(process.platform !== "darwin")(
  "temporary Keychain receives synthetic credentials without touching the default Keychain",
  async () => {
    const dir = mkdtempSync(join(tmpdir(), `patched-cc keychain $;'"()-`))
    tempDirs.push(dir)
    const path = join(dir, `isolated $;'"() profile.keychain-db`)
    const password = `synthetic-${crypto.randomUUID()}`
    const serviceName = `patched-cc-test-${crypto.randomUUID()}`
    const accountName = `account ${crypto.randomUUID()}`
    const defaultPath = security(["default-keychain", "-d", "user"]).stdout.replace(/^"|"$/g, "")

    expect(security(["create-keychain", "-p", password, path]).exitCode).toBe(0)
    expect(security(["unlock-keychain", "-p", password, path]).exitCode).toBe(0)

    try {
      const storage = createMacOsKeychainStorage({ path, serviceName, accountName, mutateWithLock })
      const data = { claudeAiOauth: { accessToken: "synthetic-black-box", refreshToken: "non-secret" } }
      expect(await storage.update(data)).toEqual({ success: true })
      expect(await storage.readAsyncStrict?.()).toEqual(data)

      const explicit = security(["find-generic-password", "-a", accountName, "-w", "-s", serviceName, path])
      expect(explicit.exitCode).toBe(0)
      expect(JSON.parse(explicit.stdout)).toEqual(data)

      const normalDefault = security(["find-generic-password", "-a", accountName, "-w", "-s", serviceName, defaultPath])
      expect(normalDefault.exitCode).toBe(44)

      expect(await storage.delete()).toBe(true)
      expect(security(["find-generic-password", "-a", accountName, "-w", "-s", serviceName, path]).exitCode).toBe(44)
    } finally {
      security(["delete-keychain", path])
    }
  },
  30_000,
)
