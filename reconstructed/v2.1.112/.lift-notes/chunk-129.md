# Chunk #129 — src/utils/* (config, context, cron, conversationRecovery, etc.)

**Files lifted:** 12
**Confidence:** medium-high

## Per-file notes

### config.ts
- bytes out: ~63,500
- decls reconstructed: ~40
- drift: low-medium — most decls jac≥0.875, cos≥0.997; a few at jac=0.667
- v112 changes:
  - `createDefaultGlobalConfig`: adds `autoScrollEnabled`, `externalEditorContext`, `briefTranscript`, `unpinOpus47LaunchEffort` fields.
  - `GLOBAL_CONFIG_KEYS`: adds `autoScrollEnabled`, `externalEditorContext`, `briefTranscript`, `unpinOpus47LaunchEffort`, `loopAutoEnabled`.
  - `getRemoteControlAtStartup`: drops `feature('CCR_AUTO_CONNECT')` gate — always returns false when not explicitly set.
  - `getAutoUpdaterDisabledReason`: drops `process.env.NODE_ENV === 'development'` check.
  - `formatAutoUpdaterDisabledReason`: env case wording changed to `` `set by env: ${envVar}` `` (was `` `${envVar} set` ``).
  - `getMemoryPath`: drops `TeamMem` case (feature('TEAMMEM') removed).
  - `getGlobalConfigWriteCount` / `CONFIG_WRITE_DISPLAY_THRESHOLD` — v88 decls [3710314,3710384] and [3710804,3710923] have no v112 match; these were helper/constant decls.
- unresolved symbols: none critical.

### configConstants.ts
- bytes out: ~700
- decls reconstructed: 1 (EDITOR_MODES + NOTIFICATION_CHANNELS export)
- drift: verbatim (jac=1, cos=1 for matched decl).
- v112 changes: none — identical to v88.
- unresolved symbols: none.
- note: One v88 decl [3698227,3698243] has no v112 match (boundary init artifact).

### contentArray.ts
- bytes out: ~1,600
- decls reconstructed: 1
- drift: verbatim (jac=1, cos=1 for matched decl).
- v112 changes: none — identical to v88.
- unresolved symbols: none.
- note: One v88 decl [11478027,11478117] has no v112 match (boundary init artifact).

### context.ts
- bytes out: ~6,900
- decls reconstructed: ~8
- drift: low — most decls jac=1, cos=1; two drifted (jac=0.75, jac=0.5)
- v112 changes:
  - `modelSupports1M`: adds `'opus-4-7'` to the supported model list.
  - `getModelMaxOutputTokens`: adds `opus-4-7` branch (64k default, 128k upperLimit).
- unresolved symbols: none.

### contextAnalysis.ts
- bytes out: ~7,700
- decls reconstructed: ~4
- drift: medium — one decl jac=0.91, rest jac=1
- v112 changes:
  - New `ToolSearchTool` registration at top of file (not present in v88). Minified shows fd8 = P1(async...) with zvK/YvK schemas, deferred tool search, and renderToolResult mapping.
  - `analyzeContext` (qx8), `processBlock` ($0z), `tokenStatsToStatsigMetrics` (Kx8) are structurally unchanged.
- unresolved symbols:
  - `fd8` / ToolSearchTool implementation at byte ~5033493 — new decl, full body unresolved.

### contextSuggestions.ts
- bytes out: ~7,300
- decls reconstructed: ~6
- drift: low-medium — most jac≥0.875, one at jac=0.818
- v112 changes:
  - `checkNearCapacity`: adds `DISABLE_COMPACT` env-var branch in detail message.
  - `checkAutoCompactDisabled`: adds `!isEnvTruthy(process.env.DISABLE_COMPACT)` guard.
  - `getLargeToolSuggestion` uses minified tool name constants (S7, xq, a5, PH) instead of imported BASH_TOOL_NAME etc. — same semantics.
- unresolved symbols: none.

### controlMessageCompat.ts
- bytes out: ~1,200
- decls reconstructed: 1
- drift: verbatim (jac=1, cos=1 for matched decl).
- v112 changes: none — identical to v88.
- unresolved symbols: none.
- note: One v88 decl [11636029,11636081] has no v112 match (boundary init artifact).

### conversationRecovery.ts
- bytes out: ~21,000
- decls reconstructed: ~8
- drift: medium — several decls jac=0.864–0.875, one at jac=0.5
- v112 changes:
  - `migrateLegacyAttachmentTypes` (d1Y): simplified — unknown types filtered to null via Q1Y set; no generic displayPath backfill.
  - `loadConversationForResume` (Ft): BG_SESSIONS live-session skip removed (skip set always empty); `copyFileHistoryForResume` and `copyPlanForResume` no longer called; `checkResumeConsistency` no longer called; returns new `deferredToolUse` and `permissionMode` fields.
  - `deserializeMessagesWithInterruptDetection` (K77): takes optional second param for deferred tool use size.
- unresolved symbols:
  - `Q1Y` at byte ~8399643 — set of known attachment types in migrateLegacyAttachmentTypes.
  - `F1Y`, `g1Y`, `U1Y` at byte ~8401841 — brief tool name constants in isTerminalToolResult.
  - `z77` at byte ~8403205 — deferred tool use resolver from fullPath.

### cron.ts
- bytes out: ~9,500
- decls reconstructed: ~6
- drift: low — one v88 decl removed (6498151–6498770, expandField), but function still exists in v112 at different byte
- v112 changes:
  - `cronToHuman`: reorganized every-minute handling — `* * * * *` now returns "Every minute" directly before checking `*/N` patterns.
- unresolved symbols: none.

### cronJitterConfig.ts
- bytes out: ~3,400
- decls reconstructed: 1
- drift: verbatim (jac=1, cos=1 for matched decl).
- v112 changes: none — identical to v88.
- unresolved symbols: none.
- note: One v88 decl [12292383,12292428] has no v112 match (boundary init artifact).

### cronScheduler.ts
- bytes out: ~21,500
- decls reconstructed: ~3
- drift: low-medium — main decl jac=0.929
- v112 changes:
  - `createCronScheduler`: adds `getExtraTasks` option for daemon callers; processes extra tasks in check() loop; auto-enables scheduler when getExtraTasks is provided.
  - Fire log event adds loop-default-sentinel tracking (P2A.isLoopDefaultSentinel).
- unresolved symbols: none.

### cronTasks.ts
- bytes out: ~17,300
- decls reconstructed: ~10
- drift: low-medium — one decl jac=0.667, one jac=0.889
- v112 changes:
  - `DEFAULT_CRON_JITTER_CONFIG`: `recurringFrac` increased from 0.1 to 0.5; adds `cacheLeadMs: 15000`.
  - `jitteredNextCronRunMs`: adds cache-lead optimization for step crons (`*/N * * * *`) — fires slightly before next interval when within threshold.
- unresolved symbols: none.

## Cross-file observations

- **TEAMMEM fully excised**: `config.ts` `getMemoryPath` drops TeamMem case; no `feature('TEAMMEM')` require() block. Confirms pattern seen in chunk-127 claudemd.ts.
- **CCR_AUTO_CONNECT removed**: `config.ts` `getRemoteControlAtStartup` no longer checks the feature gate; always false by default.
- **Development build check removed**: `config.ts` `getAutoUpdaterDisabledReason` no longer checks `NODE_ENV === 'development'`.
- **Cron jitter defaults changed**: `cronTasks.ts` `recurringFrac` 0.1→0.5 and new `cacheLeadMs: 15s` are the most significant behavioral changes in this chunk.
- **Conversation recovery simplified**: `conversationRecovery.ts` drops BG_SESSIONS live-session skip, copyPlanForResume, copyFileHistoryForResume, and checkResumeConsistency calls — a notable simplification of the resume path.
- **ToolSearchTool relocated**: `contextAnalysis.ts` gains a ToolSearchTool registration that wasn't in v88's version of this file; likely moved from elsewhere or newly added.

## Lifter

`lifter-129` (kimi-for-coding). Chunk #129.
