// Explicit callback roster: removing/filtering one check must not let a passing
// sibling claim the whole oracle. Renaming a test requires updating this binding.
export function runtimeOracleChecks(version: string): Record<string, string[]> {
  const keychain = (name: string) => `macos-keychain-bundle-runtime.test.ts: ${name}`
  const legacy = keychain(`rendered ${version} legacy API-key save lookup and delete use only the selected Keychain`)
  const materialized = keychain("materialized mode rejects default-Keychain legacy mutations and doctor probes")
  const plugin = keychain("real plugin eval child uses materialized selected-Keychain credentials without preload")
  const result: Record<string, string[]> = {
    "later-command/later-command-submit-hook": [
      "later-command-patch.test.ts: active /later schedules once, lists, and forwards pasted contents",
    ],
    "ask-user-question-unlimited/unbounded-coherent-question-batch": [
      "ask-user-question-tui-smoke.ts: rendered and submitted six questions",
    ],
  }
  for (const [invariant, checks] of Object.entries({
    "entrypoint-guard": [keychain("raw and preloaded bundles fail closed before credential lookup")],
    "disable-default-prefetch": [
      keychain("native default-Keychain prefetch runs only without explicit or materialized selection"),
    ],
    "propagate-write-failures": [
      keychain("native OAuth saver propagates selected-Keychain access failures to its caller"),
    ],
    "propagate-legacy-delete-failures": [
      keychain("native legacy-delete outer wrapper propagates explicit and materialized failures"),
    ],
    "storage-bridge": [
      keychain("public Keychain selection outranks materialized mode for OAuth lookup"),
      keychain(`rendered ${version} OAuth saver refresh and delete use only the selected Keychain`),
      keychain(`rendered ${version} serializes concurrent secure-storage mutations across processes`),
      keychain(`rendered ${version} auth lookup and TUI startup use the process-selected Keychain`),
    ],
    "session-store-resume": [
      keychain(`rendered ${version} SessionStore materializes selected credentials and plugin eval selects them`),
    ],
    "plugin-eval": [plugin],
    "plugin-eval-child": [plugin],
    "legacy-api-key-async-read": [legacy],
    "legacy-api-key-sync-read": [legacy],
    "legacy-api-key-write": [legacy, materialized],
    "legacy-api-key-delete": [legacy, materialized],
    "doctor-probe": [materialized, keychain(`rendered ${version} doctor probe never touches the default Keychain`)],
  }))
    result[`explicit-macos-keychain/explicit-macos-keychain-${invariant}`] = checks
  return result
}
