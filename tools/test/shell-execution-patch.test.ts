import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { afterEach, expect, test } from "bun:test"
import { applyPatchEntries } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.181"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")
const PATCH_FILE = join(ROOT, "patches", "shell-execution-real-shell.toml")

const tempDirs: string[] = []

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true })
  }
})

test("shell execution patch is disabled by default", () => {
  const source = readFileSync(TARGET_BUNDLE, "utf8")
  const result = applyPatchEntries(source, loadPatchEntriesFromFile(PATCH_FILE), TARGET_VERSION)

  expect(source).toContain('"unalias find 2>/dev/null || true"')
  expect(source).toContain('"unalias grep 2>/dev/null || true"')
  expect(result.source).toBe(source)
  expect(result.applied).toBe(0)
  expect(result.skipped.map((patch) => patch.name)).toEqual(["disable-native-find-grep-shell-shims"])
}, 20_000)

test("shell execution patch locator remains valid when enabled", () => {
  const source = readFileSync(TARGET_BUNDLE, "utf8")
  const patches = loadPatchEntriesFromFile(PATCH_FILE).map((patch) => ({ ...patch, enabled: true }))
  const result = applyPatchEntries(source, patches, TARGET_VERSION)

  expect(result.applied).toBe(1)
  expect(result.source).not.toContain('"unalias find 2>/dev/null || true"')
  expect(result.source).not.toContain('"unalias grep 2>/dev/null || true"')
}, 60_000)

test("real bash preserves pipeline stdin and PATH command resolution", () => {
  const dir = mkdtempSync(join(tmpdir(), "patched-cc-shell-"))
  tempDirs.push(dir)

  const fakeBin = join(dir, "bin")
  const logPath = join(dir, "grep.log")
  const stdinPath = join(dir, "grep.stdin")
  mkdirSync(fakeBin)
  writeFileSync(
    join(fakeBin, "grep"),
    `#!/bin/sh
printf 'argv:%s\\n' "$*" >> "${logPath}"
while IFS= read -r line; do
  printf 'stdin:%s\\n' "$line" >> "${stdinPath}"
  case "$line" in *"$1"*) printf '%s\\n' "$line";; esac
done
`,
    { mode: 0o755 },
  )

  const loop = "for i in $(seq 1 2); do out=$(printf 'hello\\n' | grep hello); echo \"poll $i $out\"; done"
  const result = Bun.spawnSync({
    cmd: ["/bin/bash", "--noprofile", "--norc", "-c", loop],
    env: { ...process.env, PATH: `${fakeBin}:${process.env.PATH ?? ""}` },
    stdout: "pipe",
    stderr: "pipe",
  })

  expect(result.exitCode).toBe(0)
  expect(result.stdout.toString()).toBe("poll 1 hello\npoll 2 hello\n")
  expect(result.stderr.toString()).toBe("")
  expect(readFileSync(logPath, "utf8")).toBe("argv:hello\nargv:hello\n")
  expect(readFileSync(stdinPath, "utf8")).toBe("stdin:hello\nstdin:hello\n")
})
