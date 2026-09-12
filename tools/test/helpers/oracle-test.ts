import { test } from "bun:test"
import { recordOracleCheck } from "./oracle-evidence"

// Register skips explicitly; callbacks only record success after assertions finish.
export function keychainOracleTest(
  oracleIds: string[],
  skip: boolean,
  name: string,
  callback: () => unknown | Promise<unknown>,
  timeout: number,
): void {
  const record = (outcome: "passed" | "failed" | "skipped") =>
    recordOracleCheck({
      oracleIds: oracleIds.map((id) => `explicit-macos-keychain/${id}`),
      platform: "darwin-arm64",
      evidenceClass: "real-os-runtime",
      check: `macos-keychain-bundle-runtime.test.ts: ${name}`,
      outcome,
    })
  if (skip) record("skipped")
  test.skipIf(skip)(
    name,
    async () => {
      try {
        await callback()
        record("passed")
      } catch (error) {
        record("failed")
        throw error
      }
    },
    timeout,
  )
}
