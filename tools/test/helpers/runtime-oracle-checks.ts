import { recordOracleCheck } from "./oracle-evidence"

const modelEffortCheck = (name: string) => `model-effort-session-tui-smoke.ts: ${name}`
const agentsMdNativeHookCheck =
  "agents-md-tui-smoke.ts: parent, project, and child AGENTS.md markers reach the main conversation in native parent-to-child order with no CLAUDE.md"

export const MODEL_EFFORT_RUNTIME_CHECKS = {
  "model-effort-current": modelEffortCheck(
    "rendered /effort current reports the active model's effective effort and source",
  ),
  "inline-echo": modelEffortCheck(
    "rendered inline /model route reports the selected model's effective effort and source",
  ),
  "model-echo": modelEffortCheck("rendered model picker reports the selected model's effective effort and source"),
  "slider-guard": modelEffortCheck("rendered CLI-pinned effort selector shows status instead of an editable slider"),
  "slider-initial": modelEffortCheck("rendered effort slider initializes from the active model's effort"),
  "slider-scope": modelEffortCheck("rendered effort slider explains that changes apply to this model for this session"),
  "slider-workflow": modelEffortCheck("rendered model effort slider omits the global ultracode workflow choice"),
} as const

export type ModelEffortRuntimeOracle = keyof typeof MODEL_EFFORT_RUNTIME_CHECKS

export function recordModelEffortRuntimeOracle(
  invariantId: ModelEffortRuntimeOracle,
  platform: "darwin-arm64" | "linux-x64",
): void {
  recordOracleCheck({
    oracleIds: [`model-effort-ui/${invariantId}`],
    platform,
    evidenceClass: "runtime",
    check: MODEL_EFFORT_RUNTIME_CHECKS[invariantId],
    outcome: "passed",
  })
}

// Explicit callback roster: removing/filtering one check must not let a passing
// sibling claim the whole oracle. Renaming a test requires updating this binding.
export function runtimeOracleChecks(version: string): Record<string, string[]> {
  const keychain = (name: string) => `macos-keychain-bundle-runtime.test.ts: ${name}`
  const legacy = keychain(`rendered ${version} legacy API-key save lookup and delete use only the selected Keychain`)
  const materialized = keychain("materialized mode rejects default-Keychain legacy mutations and doctor probes")
  const plugin = keychain("real plugin eval child uses materialized selected-Keychain credentials without preload")
  const result: Record<string, string[]> = {
    "agent-memory-discovery/agents-md-native-hook-load": [agentsMdNativeHookCheck],
    "later-command/later-command-submit-hook": [
      "later-command-patch.test.ts: active /later schedules once, lists, and forwards pasted contents",
    ],
    "ask-user-question-unlimited/unbounded-coherent-question-batch": [
      "ask-user-question-tui-smoke.ts: rendered and submitted six questions",
    ],
    "model-effort-ui/model-effort-current": [MODEL_EFFORT_RUNTIME_CHECKS["model-effort-current"]],
    "model-effort-ui/inline-echo": [MODEL_EFFORT_RUNTIME_CHECKS["inline-echo"]],
    "model-effort-ui/model-echo": [MODEL_EFFORT_RUNTIME_CHECKS["model-echo"]],
    "model-effort-ui/slider-guard": [MODEL_EFFORT_RUNTIME_CHECKS["slider-guard"]],
    "model-effort-ui/slider-initial": [MODEL_EFFORT_RUNTIME_CHECKS["slider-initial"]],
    "model-effort-ui/slider-scope": [MODEL_EFFORT_RUNTIME_CHECKS["slider-scope"]],
    "model-effort-ui/slider-workflow": [MODEL_EFFORT_RUNTIME_CHECKS["slider-workflow"]],
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
