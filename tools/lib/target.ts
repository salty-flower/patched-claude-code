import { InvalidArgumentError } from "commander"

export const DEFAULT_TARGET_VERSION = "2.1.238"
export const TARGET_SOURCES = ["canonical", "npm", "direct"] as const

export type TargetSource = (typeof TARGET_SOURCES)[number]

export function targetVersion(env: Record<string, string | undefined> = process.env): string {
  return env.TARGET_VERSION ?? DEFAULT_TARGET_VERSION
}

export function parseTargetSource(value: string): TargetSource {
  if (TARGET_SOURCES.some((source) => source === value)) return value as TargetSource
  throw new Error(`unsupported target source ${JSON.stringify(value)}; expected one of: ${TARGET_SOURCES.join(", ")}`)
}

export function parseTargetSourceOption(value: string): TargetSource {
  try {
    return parseTargetSource(value)
  } catch {
    throw new InvalidArgumentError(`expected one of: ${TARGET_SOURCES.join(", ")}`)
  }
}
