import * as TOML from "@iarna/toml"
import { loadPatchEntriesFromToml } from "./patch-files"

export type StaticPatchTest = {
  kind: "static"
  name: string
  assert_contains?: string
  assert_not_contains?: string
}

export type CliPatchTest = {
  kind: "cli"
  name: string
  args?: string[]
  expect_stdout_contains?: string
  expect_stderr_contains?: string
  expect_exit_code?: number
}

export type PtyPatchTest = {
  kind: "pty"
  name: string
  args?: string[]
  input?: string
  expect_output_contains?: string
  timeout_seconds?: number
}

export type PatchTest = StaticPatchTest | CliPatchTest | PtyPatchTest

export type PatchTestResult = {
  ok: boolean
  name: string
  message: string
}

type PatchToml = {
  tests?: PatchTest[]
  patches?: Array<{
    tests?: PatchTest[]
  }>
}

export function loadPatchTestsFromToml(rawToml: string): PatchTest[] {
  const parsed = TOML.parse(rawToml) as unknown as PatchToml
  if (parsed.patches) {
    return loadPatchEntriesFromToml(rawToml, "<inline>").flatMap((patch) => patch.tests ?? [])
  }
  return parsed.tests ?? []
}

export function evaluateStaticPatchTests(bundleText: string, tests: StaticPatchTest[]): PatchTestResult[] {
  return tests.map((patchTest) => {
    const assertions: Array<{ ok: boolean; message: string }> = []
    if (patchTest.assert_contains !== undefined) {
      const ok = bundleText.includes(patchTest.assert_contains)
      assertions.push({
        ok,
        message: ok ? "contains expected text" : `missing expected text: ${patchTest.assert_contains}`,
      })
    }
    if (patchTest.assert_not_contains !== undefined) {
      const ok = !bundleText.includes(patchTest.assert_not_contains)
      assertions.push({
        ok,
        message: ok ? "does not contain forbidden text" : `contains forbidden text: ${patchTest.assert_not_contains}`,
      })
    }
    return {
      ok: assertions.length > 0 && assertions.every((assertion) => assertion.ok),
      name: patchTest.name,
      message:
        assertions.length > 0
          ? assertions.map((assertion) => assertion.message).join("; ")
          : "static test must set assert_contains or assert_not_contains",
    }
  })
}
