import { join } from "node:path"

export const RUNTIME_SUPPORT_FILES = [
  "runtime/bun-ant-cell-segmenter.ts",
  "runtime/macos-keychain.ts",
  "runtime/release-integrity.ts",
  "runtime/system-prompt-overrides.ts",
] as const

export const RUNTIME_PRELOAD_FILES = [
  "runtime/system-prompt-overrides.ts",
  "runtime/bun-ant-cell-segmenter.ts",
] as const

export function runtimePreloadArguments(root: string): string[] {
  return RUNTIME_PRELOAD_FILES.flatMap((file) => ["--preload", join(root, file)])
}
