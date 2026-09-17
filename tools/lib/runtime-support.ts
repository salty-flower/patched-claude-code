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
