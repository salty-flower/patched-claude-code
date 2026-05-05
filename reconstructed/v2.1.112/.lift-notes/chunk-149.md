# Chunk 149 Lift Notes

## Files in chunk

- src/utils/proxy.ts
- src/utils/queryContext.ts
- src/utils/queryHelpers.ts
- src/utils/queryProfiler.ts
- src/utils/queueProcessor.ts
- src/utils/readEditContext.ts
- src/utils/readFileInRange.ts
- src/utils/releaseNotes.ts
- src/utils/renderOptions.ts
- src/utils/ripgrep.ts
- src/utils/sandbox/sandbox-adapter.ts
- src/utils/sandbox/sandbox-ui-utils.ts
- src/utils/sanitization.ts
- src/utils/screenshotClipboard.ts
- src/utils/sdkEventQueue.ts

---

## Per-file drift summary

### proxy.ts — moderate drift (jac 0.571–0.75, cos 0.995–0.997)
- `getProxyFetchOptions`: v112 adds `timeout: false` for AnthropicAPI under Bun; adds proxy-auth header branch (`vAq()` / getProxyAuth) for Bun proxy path.
- `disableKeepAlive()` and `_resetKeepAliveForTesting()` have no v112 match — likely removed or moved.
- `getWebSocketProxyAgent()` and `getWebSocketProxyUrl()` have no v112 match — removed.
- End-of-module init block adds `nv6` object with `{helper, fromProjectOrLocal, trustAccepted}`.

### queryContext.ts — significant drift (jac 0.589–0.7, cos 0.995–0.998)
- `fetchSystemPromptParts`: gains `excludeDynamicSections` and `cacheBreakerPhrase` params; `customSystemPrompt` widened to `string | string[] | undefined`. When `excludeDynamicSections` is true, returns merged userContext and empty systemContext.
- `buildSideQuestionFallbackParams`: `customSystemPrompt` widened. ToolUseContext gains many new fields: `setToolPermissionContext`, `taskRegistry`, `sessionHooksRegistry`, `setClassifierApprovals`, `setReplContext`, `setWebBrowserSlice`, `abortSpeculation`, `agentLifecycle`, `teammateColors`, `turnStartIndex`, `addResponseLength`, `resetResponseLength`, `getFileHistoryState`, `applyFileHistoryOp`, `applyAttributionOp`. Replaces `setResponseLength`/`updateFileHistoryState`/`updateAttributionState`.

### queryHelpers.ts — light drift (jac 0.762–0.889, cos 0.999–1)
- `normalizeMessage`: adds `origin` field propagation on user/assistant messages; adds new `repl_tool_call` progress type yielding `tool_progress` with `repl_call` payload.
- `extractReadFilesFromMessages`: FileStateCache `offset` for read-tool results changed from `undefined` to `1`.
- `handleOrphanedPermission`: uses `rK` (findToolByName) instead of `L5`.
- Unused import block removed (no v112 match for `var tm1` init).

### queryProfiler.ts — verbatim (jac 1, cos 1)
- Only minified name changes. No semantic drift.

### queueProcessor.ts — verbatim (jac 1, cos 1)
- `hasQueuedCommands()` helper has no v112 match — removed (callers likely inlined `hasCommandsInQueue()` directly).

### readEditContext.ts — verbatim (jac 1, cos 1)
- `countNewlines` function has no v112 match — likely inlined by bundler. Source preserved.

### readFileInRange.ts — light drift (jac 0.867, cos 0.999)
- `readFileInRangeFast`: gains early-return optimization for full-file reads (`offset === 0 && maxLines === undefined && truncateAtBytes === undefined`). Also receives `fileSize` param (stats.size) and accounts for BOM in size.
- `streamOnEnd`: result construction refactored to avoid spread in hot path.

### releaseNotes.ts — verbatim (jac 1, cos 0.999–1)
- Version string updated to 2.1.112 in default param.
- `parseChangelog`: version extraction uses `i5` (splitN) instead of `.split(" - ")[0]`.

### renderOptions.ts — verbatim (jac 1, cos 1)
- No semantic changes. Minified names only.

### ripgrep.ts — moderate drift (jac 0.917–0.952, cos 0.999–1)
- `ripGrepRaw`: v112 adds `cwd: b8()` (getCwdState) to spawn/execFile options. Error handler calls `tH4()` on ENOENT when argv0 is set.
- `ripGrepFileCount`: adds `cwd: b8()` to spawn options; error handler calls `tH4()` on ENOENT.
- `getRipgrepConfig` (v112 `ts6`): embedded mode now checks `rN(process.execPath)` (isReadable) and falls back to system rg if not readable.
- `countFilesRoundedRg` (v112 `yL8`): structural scoping change (`Y = null` introduced).
- `testRipgrepOnFirstUse` (v112 `sH4`): adds `cwd: b8()` to Bun.spawn.

### sandbox/sandbox-adapter.ts — moderate drift (jac 0.5–0.952, cos 0.962–1)
- `convertToSandboxRuntimeConfig` (v112 `hL8`): adds `seccomp: _J4()` to return. Network config has new CCR-on-Linux early-return path (`xP() && Js() && !lE6()` → `{allowedDomains: undefined, deniedDomains: [], allowAllUnixSockets: true}`). Adds `allowMachLookup` field.
- `isSandboxingEnabled` (v112 `CL8`): new early-return for CCR Linux container path.
- `SandboxManager` interface: adds `getAllowMachLookup`, `getEnableWeakerNetworkIsolation`, `getConfig`. `getNetworkRestrictionConfig` replaced with inline wrapper in v112 min but preserved in source.
- `permissionRuleExtractPrefix` helper added (extracts prefix from `cmd:*` patterns).

### sandbox/sandbox-ui-utils.ts — verbatim (jac 1, cos 1)
- `removeSandboxViolationTags` unchanged.
- v112 adds new `escapeRegExp` helper (`ei`) — reconstructed as private function.

### sanitization.ts — verbatim (jac 1, cos 1)
- Only minified name changes.

### screenshotClipboard.ts — verbatim (jac 0.929, cos 0.998)
- v112 uses `replaceAll` instead of `replace` for path escaping in AppleScript and PowerShell strings.

### sdkEventQueue.ts — light drift (jac 0.833, cos 1)
- `emitTaskTerminatedSdk` (v112 `I$`): adds `skip_transcript: _?.skipTranscript` field to emitted event.
- `TaskNotificationSdkEvent` type gains optional `skip_transcript?: boolean`.

---

## Cross-file observations

1. **Bun proxy auth**: `proxy.ts` v112 introduces proxy-authorization header support for Bun (`vAq()` / getProxyAuth). This is a new cross-cutting concern.

2. **CCR container sandbox**: `sandbox-adapter.ts` v112 adds CCR-on-Linux container detection (`xP`, `Js`, `lE6`) that short-circuits normal sandbox enablement. This couples to bootstrap state and platform detection.

3. **ToolUseContext expansion**: `queryContext.ts` v112 significantly expands `ToolUseContext` with registry/hooks/lifecycle fields. These are set from cross-chunk symbols (`Uk`, `OM6`, `qF`, `H06`, `P36`, `gD`, `YW6`, `AW6`).

4. **Ripgrep cwd**: `ripgrep.ts` v112 consistently passes `cwd: getCwdState()` to all spawn/execFile calls. This is a behavioral fix for cwd-relative ripgrep operations.

5. **Repl tool progress**: `queryHelpers.ts` v112 adds `repl_tool_call` as a new progress message type, emitting `tool_progress` with a `repl_call` payload.

---

## Unresolved symbols list

| Symbol | File | Byte offset | Context |
|--------|------|-------------|---------|
| `vAq` | proxy.ts | ~2063177 | getProxyAuth — Bun proxy authorization header |
| `Yl8` | queryContext.ts | ~13433860 | getCacheBreakerContext — dynamic section exclusion |
| `$2` | queryContext.ts | ~13433860 | getUserContext (verify import) |
| `fj` | queryContext.ts | ~13434332 | getSystemContext with cacheBreaker param |
| `Uk` | queryContext.ts | ~13435976 | taskRegistry |
| `OM6` | queryContext.ts | ~13435976 | sessionHooksRegistry |
| `qF` | queryContext.ts | ~13435976 | setClassifierApprovals |
| `H06` | queryContext.ts | ~13435976 | setReplContext |
| `P36` | queryContext.ts | ~13435976 | setWebBrowserSlice |
| `gD` | queryContext.ts | ~13435976 | abortSpeculation |
| `YW6` | queryContext.ts | ~13435976 | agentLifecycle |
| `AW6` | queryContext.ts | ~13435976 | teammateColors |
| `tH4` | ripgrep.ts | ~4583680 | handleEmbeddedRgNotFound — ENOENT fallback for embedded rg |
| `xP` | sandbox-adapter.ts | ~4589324 | isClaudeCodeRemote / isInContainer |
| `Js` | sandbox-adapter.ts | ~4589324 | isSandboxAvailableInContainer |
| `lE6` | sandbox-adapter.ts | ~4589324 | isSandboxEnabledInSettings |
| `_J4` | sandbox-adapter.ts | ~4589324 | getSeccompProfile |
| `rN` | ripgrep.ts | ~4719163 | isReadable — execPath readability check for embedded rg |
