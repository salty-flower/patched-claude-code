# Chunk 8 Lift Notes

## src/commands/chrome/chrome.tsx
- **Status**: Copied verbatim (jac=1,cos=1 for main declarations)
- **Notes**: Unmatched declarations are import lines and small fragments. No semantic changes.

## src/commands/chrome/index.ts
- **Status**: Copied verbatim (jac=1,cos=1)
- **Notes**: Unmatched import line only.

## src/commands/clear/caches.ts
- **Status**: Copied verbatim (jac=0.75,cos=0.994 for main function)
- **Notes**: Minor structural drift in minified but source-level identical.

## src/commands/clear/clear.ts
- **Status**: Copied verbatim (jac=1,cos=1)
- **Notes**: Unmatched trailing fragment only.

## src/commands/clear/conversation.ts
- **Status**: Reconstructed
- **Drift**: v112 adds new parameters to `clearConversation`: `discoveredRemoteSkills`, `sessionEnvVars`, `memorySelector`, `resultDedupState`. Also removes `setContextBlocked` PROACTIVE/KAIROS logic (moved elsewhere), adds `cacheBreakerPhrase: undefined` to setAppState reset, adds `resourceTemplates: {}` to MCP reset, removes COORDINATOR_MODE saveMode block (moved elsewhere). Re-pointed symlinks use `getAgentTranscriptPath(asAgentId(...))`.
- **TODOs**: 3 unresolved symbols with byte offsets.

## src/commands/clear/index.ts
- **Status**: Reconstructed
- **Drift**: Description changed from "Clear conversation history and free up context" to "Start a new session with empty context; previous session stays on disk (resumable with /resume)".

## src/commands/color/index.ts
- **Status**: Copied verbatim (jac=1,cos=1)
- **Notes**: Unmatched import line only.

## src/commands/commit-push-pr.ts
- **Status**: Reconstructed
- **Drift**: ALLOWED_TOOLS simplified (removed `git checkout --branch:*`, changed wildcards from `:*` to ` *`). Added `getEnhancedPRAttribution` import and usage. Description and command metadata unchanged.

## src/commands/commit.ts
- **Status**: Reconstructed
- **Drift**: ALLOWED_TOOLS simplified (removed `git checkout --branch:*`, changed wildcards from `:*` to ` *`).

## src/commands/compact/compact.ts
- **Status**: Reconstructed
- **Drift**: Major changes in reactive compact path. v112 adds `performance.now()` telemetry, `preTokens`/`postTokens` tracking, `be` error class for exhausted/media_unstrippable cases, `setSDKStatus` with compactResult metadata. `compactViaReactive` now runs `executePreCompactHooks` concurrently with `getCacheSharingParams`, extracts post-compact tokens from boundary marker. Error handling now re-throws `be` instances directly. Added `getMessagesTokenCount` helper usage.
- **TODOs**: 3 unresolved symbols with byte offsets.

## src/commands/config/config.tsx
- **Status**: Copied verbatim (jac=1,cos=1)
- **Notes**: Unmatched trailing fragment only.

## src/commands/config/index.ts
- **Status**: Copied verbatim (jac=1,cos=1)
- **Notes**: Unmatched import line only.

## src/commands/context/context-noninteractive.ts
- **Status**: Reconstructed
- **Drift**: Removed CONTEXT_COLLAPSE feature-gated projectView logic (v112 minified shows no collapse handling). Added `excludeDynamicSections` parameter to `CollectContextDataInput.options` and `analyzeContextUsage` call. Added `appState.autoCompactWindow` and `excludeDynamicSections` as new args to `analyzeContextUsage`. Removed context-collapse status output from `formatContextAsMarkdownTable`.

## src/commands/context/context.tsx
- **Status**: Copied verbatim (jac=0.9,cos=1 for main function)
- **Notes**: Unmatched declarations are import lines and small fragments. Source-level identical.

## src/commands/copy/copy.tsx
- **Status**: Copied verbatim (jac=1,cos=1 for most declarations)
- **Notes**: One unmatched fragment [9928487,9928637] — likely a small helper. No semantic changes.

## src/commands/copy/index.ts
- **Status**: Copied verbatim (jac=1,cos=1)
- **Notes**: Unmatched import line only.

## src/commands/cost/cost.ts
- **Status**: Reconstructed
- **Drift**: v112 adds `u8("tengu_amber_lark",!1)` feature flag check and `GS4()` overage details for ant users. Source structure unchanged but minified shows new conditional branch.
- **TODOs**: 2 unresolved symbols with byte offsets.

## src/commands/createMovedToPluginCommand.ts
- **Status**: Reconstructed
- **Drift**: v112 adds `disableModelInvocation: false` field to returned Command object. Also removes the ant-only branch entirely — v112 always calls `getPromptWhileMarketplaceIsPrivate`.

## src/commands/ctx_viz/index.js
- **Status**: Copied verbatim (jac=1,cos=1)

## src/commands/debug-tool-call/index.js
- **Status**: Copied verbatim (jac=1,cos=1)

## src/commands/desktop/desktop.tsx
- **Status**: Copied verbatim (jac=1,cos=1)
- **Notes**: Unmatched small fragments only.

## src/commands/desktop/index.ts
- **Status**: Copied verbatim (jac=1,cos=1)
- **Notes**: Unmatched import lines and small fragments.

## src/commands/diff/diff.tsx
- **Status**: Copied verbatim (jac=1,cos=1)
- **Notes**: Unmatched trailing fragment only.

## src/commands/doctor/doctor.tsx
- **Status**: Copied verbatim (jac=1,cos=1)
- **Notes**: Unmatched trailing fragment only.

## src/commands/effort/effort.tsx
- **Status**: Reconstructed
- **Drift**: v112 adds `xhigh` effort level to help text and validation. Adds `unpinOpus47LaunchEffort` AppState mutation in `setEffortValue` and `unsetEffortLevel`. Adds exported `SLIDER_LEVELS` constant. Interactive mode now shows `IoY` slider component when no args provided (byte ~11506383). `getEffortEnvOverride` renamed to `Zj6` in minified.
- **TODOs**: 3 unresolved symbols with byte offsets.

## src/commands/effort/index.ts
- **Status**: Reconstructed
- **Drift**: `argumentHint` changed from `[low|medium|high|max|auto]` to `[low|medium|high|xhigh|max|auto]`.

## src/commands/env/index.js
- **Status**: Copied verbatim (jac=1,cos=1)

## src/commands/exit/exit.tsx
- **Status**: Reconstructed
- **Drift**: v112 adds `backgroundItems` from `Ro8()` to ExitFlow props. ExitFlow now shown when either worktree exists OR backgroundItems non-empty. Goodbye message selection uses `LJ(crY)` (lodash sample) instead of direct `sample()` call.
- **TODOs**: 2 unresolved symbols with byte offsets.

## src/commands/exit/index.ts
- **Status**: Reconstructed
- **Drift**: v112 exports TWO commands: the original `local-jsx` variant AND a new `local` variant with `supportsNonInteractive: true` for non-interactive sessions.
