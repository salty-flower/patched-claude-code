# Chunk #6 — src/cli remoteIO, structuredIO, transports

**Files lifted:** 8
**Confidence:** medium-high (4 verbatim/near-verbatim, 2 reconstructed with v112 semantic changes, 2 copied from v88 with class-body unmapped in extraction)

## Per-file notes

### src/cli/remoteIO.ts
- v88 main decl: jac=0.862, cos=1 (near-verbatim with local changes)
- Two unmatched import decls at v88 boundaries (expected — import shuffling)
- **v112 changes applied:**
  - Constructor gains 4th `sessionState` parameter
  - `super(inputStream, replayUserMessages, sessionState)` — passes sessionState to StructuredIO
  - CCR v2 lifecycle wiring changed from `setCommandLifecycleListener` / `setSessionStateChangedListener` / `setSessionMetadataChangedListener` to direct property assignment on `this.onCommandLifecycle` and `this.sessionState`
  - New `flushDeliveryAcks()` method
  - `write()` filters `transcript_mirror` messages
  - `write()` calls `this.trackWrite(q)` before writing (inherited from StructuredIO)
- **TODOs:** SessionState type import unresolved

### src/cli/structuredIO.ts
- Mixed similarity: 3 of 8 decls are jac=cos=1, 3 have cos>=0.99, 1 has cos=0.951
- Three unmatched decls (import preamble, small helpers)
- **v112 changes applied:**
  - New fields: `stallTimer`, `stallFired`, `createdAt`, `onCommandLifecycle`, `sessionState`
  - `trackWrite(q)` method added with stall detection (`tengu_sdk_stall` after 5min) and schema violation sampling (1% rate)
  - `write()` now calls `trackWrite()` before stdout write
  - `sendRequest()` logs `tengu_sdk_control_roundtrip` telemetry with duration and abort status
  - `buildRequiresActionDetails()` adds `raw_command` field (extracted from Bash/BashCommand input or MCP tools)
  - `createCanUseTool()` adds `display_name` field to can_use_tool request
  - `handleElicitation()` gains `title`, `display_name`, `description` optional params
  - New method: `requestUserDialog(dialogKind, payload, options)` — sends `request_user_dialog` control_request
  - New method: `requestOAuthTokenRefresh()` — sends `oauth_token_refresh` with 30s timeout
  - `createSandboxAskCallback()` adds `display_name` field
  - `processLine()` uses `this.onCommandLifecycle?.(uuid, 'completed')` instead of `notifyCommandLifecycle`
  - `executePermissionRequestHooksForSDK()` updated: ask-rule validation on hook-rewritten input, uses `setToolPermissionContext` instead of `setAppState`
- **TODOs:** `uz8()` display-name formatter, `y98()`/`yM6()` ask-rule validators, `aY5()` schema validator, `d()` telemetry function, `eY5()` MCP raw-command extractor

### src/cli/transports/HybridTransport.ts
- jac=0.98, cos=1 on main class decl — near-verbatim copy
- Two unmatched import decls (expected)
- Copied verbatim from v88 source; no semantic changes detected in v112 minified

### src/cli/transports/SSETransport.ts
- Import block and config constants: jac=1, cos=1 (verbatim)
- Main class decl `[11668321,11675650]` has **no v112 match** in region.json
- v112 minified file is only 988 bytes (vs ~8KB v88) — the class body was not captured in extraction
- Class IS used in v112 (referenced as `bW6` in transportUtils.ts, remoteIO.ts, replBridgeTransport.ts)
- Copied verbatim from v88 source; structure confirmed identical via constructor signature match across call sites

### src/cli/transports/WebSocketTransport.ts
- First import decl: jac=1, cos=1
- Main class decl has **no v112 match**
- v112 minified file is only 245 bytes — class body not captured
- Class IS used in v112 (referenced as `YA8` in transportUtils.ts)
- Copied verbatim from v88 source

### src/cli/transports/WorkerStateUploader.ts
- All 3 decls: jac=1, cos=1 — verbatim copy from v88
- No changes detected

### src/cli/transports/ccrClient.ts
- 6 of 9 decls: jac=1, cos=1
- Main class decl: jac=0.982, cos=1 — near-verbatim
- **v112 changes applied:**
  - `reportState()` includes `raw_command` and `tool_use_id` in `requires_action_details`
  - New method `flushDeliveryAcks()`
  - `close()` calls `O38()` instead of `z18()` for cleanup (symbol rename only)
- Copied from v88 with above deltas

### src/cli/transports/transportUtils.ts
- Main function decl: jac=1, cos=1 — verbatim
- Two unmatched import decls
- Copied verbatim from v88 source

## Cross-file observations
- v112 introduces `sessionState` as a first-class concept passed through RemoteIO → StructuredIO. Lifecycle callbacks moved from global listener registration to direct property assignment.
- Stall detection (`tengu_sdk_stall`) and schema violation sampling (`tengu_sdk_schema_violation`) are new telemetry signals in structuredIO.
- `display_name` field added to tool permission requests (can_use_tool) and elicitations — likely for UI rendering.
- `raw_command` field added to `RequiresActionDetails` — used for action telemetry.
- Transport classes (SSETransport, WebSocketTransport) appear unchanged in v112 but the extraction tool lost their body-to-file mapping. This is common when the minifier hoists large classes to the bundle top-level.

## Unresolved / TODO
- [remoteIO.ts] Import `SessionState` type from sessionState module
- [structuredIO.ts] 7 unresolved minified symbols: `uz8`, `y98`, `yM6`, `aY5`, `d`, `eY5`, and the `SessionState` class type
- [SSETransport.ts] Class body unverified against v112 — assumed unchanged based on call-site signature analysis
- [WebSocketTransport.ts] Class body unverified against v112 — assumed unchanged
