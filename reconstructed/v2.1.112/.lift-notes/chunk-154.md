# Chunk 154 Lift Notes (v2.1.88 → v2.1.112)

## Files Summary

| File | Action | Notes |
|------|--------|-------|
| `src/utils/shellConfig.ts` | verbatim | No changes |
| `src/utils/sinks.ts` | verbatim | No changes |
| `src/utils/slashCommandParsing.ts` | verbatim | No changes |
| `src/utils/sleep.ts` | verbatim | No changes |
| `src/utils/standaloneAgent.ts` | verbatim | No changes |
| `src/utils/signal.ts` | reconstructed | Added AggregateError handling in `emit()` |
| `src/utils/sideQuery.ts` | reconstructed | Added `extraBodyParams` option |
| `src/utils/sideQuestion.ts` | reconstructed | Added `parentController`, `onRetry`, `threadHistory`; `synthetic`/`aborted` in result; `skipTranscript`/`abortController` overrides |
| `src/utils/sliceAnsi.ts` | near-verbatim | Minor width calc changes |
| `src/utils/slowOperations.ts` | near-verbatim | Same logic, minified differently |
| `src/utils/skills/skillChangeDetector.ts` | reconstructed | Factory pattern (`createSkillChangeDetector()`); cleanup registration after watcher ready |
| `src/utils/staticRender.tsx` | reconstructed | Capture only first data event; added `captured` flag |
| `src/utils/stats.ts` | reconstructed | Removed SHOT_STATS feature flag and shot-related code |
| `src/utils/status.tsx` | reconstructed | New providers (`anthropicAws`, `mantle`); new env vars (`ANTHROPIC_BEDROCK_BASE_URL`, `ANTHROPIC_VERTEX_BASE_URL`, `ANTHROPIC_AWS_BASE_URL`, `ANTHROPIC_BEDROCK_MANTLE_BASE_URL`); `getSecondaryProvider()`; bedrock label → "Amazon Bedrock" |
| `src/utils/statusNoticeDefinitions.tsx` | near-verbatim | Minor JSX structure changes in `claudeAiSubscriberExternalTokenNotice` render (no `<Text>` wrapper for warning icon) |
| `src/utils/statusNoticeHelpers.ts` | verbatim | No changes |
| `src/utils/streamJsonStdoutGuard.ts` | reconstructed | `TextDecoder` instead of `Buffer.from`; `queueMicrotask` for callback; flush `textDecoder.decode()` on cleanup |

## Per-File Drift Details

### signal.ts
- **v112 change**: `emit()` now catches listener errors, collects them, and throws `AggregateError` when multiple listeners fail.
- **Rationale**: Prevents one failing listener from silently breaking the signal contract.

### sideQuery.ts
- **v112 change**: `SideQueryOptions` gains `extraBodyParams?: Record<string, unknown>` which is spread into the API request body.
- **Rationale**: Allows callers to inject additional parameters into side queries.

### sideQuestion.ts
- **v112 changes**:
  - New params: `parentController`, `onRetry`, `threadHistory`
  - Result gains `synthetic: boolean` and `aborted?: boolean`
  - `runForkedAgent` call adds `skipTranscript: true` and `overrides: { abortController }`
- **Rationale**: Better abort propagation, transcript control, and retry handling.

### skills/skillChangeDetector.ts
- **v112 change**: Major refactor from module-level state to factory function `createSkillChangeDetector()`.
  - Returns `{ initialize, dispose, subscribe, resetForTesting }`
  - Cleanup registered after `watcher.once('ready')` to avoid race
  - Default singleton `skillChangeDetector` exported for backward compatibility
- **Rationale**: Supports multiple isolated instances in test environments.

### staticRender.tsx
- **v112 change**: `renderToAnsiString` now captures only the first `data` event (with a `captured` flag) instead of concatenating all chunks.
- **Rationale**: Ink with non-TTY stdout outputs multiple frames; only the first frame is needed.

### stats.ts
- **v112 change**: Removed `SHOT_STATS` feature flag and all shot-related fields (`shotDistribution`, `oneShotRate`).
  - `extractShotCountFromMessages` kept as dead code.
  - `ClaudeCodeStats` type no longer has shot fields.
- **Rationale**: Feature flag cleanup — shot stats no longer collected.

### status.tsx
- **v112 changes**:
  - New API providers: `anthropicAws` ("Claude Platform on AWS") and `mantle` ("Amazon Bedrock (Mantle)")
  - `getSecondaryProvider()` imported and used for dual-provider display
  - Environment variable names changed:
    - `BEDROCK_BASE_URL` → `ANTHROPIC_BEDROCK_BASE_URL`
    - `VERTEX_BASE_URL` → `ANTHROPIC_VERTEX_BASE_URL`
    - New: `ANTHROPIC_AWS_BASE_URL`, `ANTHROPIC_AWS_WORKSPACE_ID`
    - New: `ANTHROPIC_BEDROCK_MANTLE_BASE_URL`
  - `bedrock` label changed from "AWS Bedrock" to "Amazon Bedrock"
  - Skip auth env vars: `CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH`, `CLAUDE_CODE_SKIP_MANTLE_AUTH`
- **Rationale**: New provider support (Mantle, Claude Platform on AWS) and standardized env var naming.

### statusNoticeDefinitions.tsx
- **v112 change**: `claudeAiSubscriberExternalTokenNotice.render` now uses a `StatusRow`-like component (`kr8`) instead of raw `<Box flexDirection="row">` with `<Text color="warning">{figures.warning}</Text>`.
- **Rationale**: Internal component refactor for consistent status row rendering.

### streamJsonStdoutGuard.ts
- **v112 changes**:
  - Uses `new TextDecoder('utf-8')` with `{ stream: true }` instead of `Buffer.from(chunk).toString('utf-8')`
  - Callback fired via `queueMicrotask(() => callback())` instead of direct call
  - Cleanup flushes remaining bytes via `textDecoder.decode()` before checking buffer
- **Rationale**: TextDecoder is more appropriate for streaming text decoding; queueMicrotask avoids synchronous callback re-entrancy.
