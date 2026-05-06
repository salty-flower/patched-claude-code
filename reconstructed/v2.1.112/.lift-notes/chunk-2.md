# Chunk 2 Lift Notes — src/bridge/*.ts (9 files)

## Summary

All 9 files in chunk 2 have been reconstructed for v2.1.112. Most files are
structural copies with minor drift; `createSession.ts`, `initReplBridge.ts`, and
`remoteBridgeCore.ts` contain significant semantic changes.

---

## Per-File Drift

### src/bridge/createSession.ts
**Region match:** decl 1 (export block) jac=1/cos=1; decls 2-5 jac=1/cos=1 except
decl 2 (createBridgeSession body) jac=0.725/cos=0.996.

**Changes:**
- Git context building extracted into new `buildGitContext()` helper (v112
  minified shows `E27` call replacing inline git logic).
- `createBridgeSession` now passes `cwd` and `reuse_outcome_branches: true` in
  `session_context`.
- Dynamic imports of `parseGitRemote`/`parseGitHubRepository` and
  `getDefaultBranch` moved into `buildGitContext`.
- `getBridgeSession` now uses `toCompatSessionId(sessionId)` (compat retagging)
  before fetching.
- `getOriginalCwd` dynamically imported (new in v112 body).

**TODOs:**
- `buildGitContext` helper name inferred from minified; actual source name may
  differ.

### src/bridge/debugUtils.ts
**Region match:** Most decls jac=1/cos=1. Decl 2 (redactSecrets) jac=0.667/cos=0.992
(moved var init). Decl 6 (describeAxiosError) jac=0.4/cos=0.961 (v112 moved this
decl to a different module — the v112 match is at byte 11893002, far from the
other decls).

**Changes:**
- `describeAxiosError` moved out of this file in v112 (matched to distant
  region). The v112 version of `debugUtils.ts` no longer contains this function.
- Var init block (`IF8=2000`, `rfY`, `ofY`, `afY=16`) moved from bottom to top
  in v112 minified ordering.

**TODOs:**
- `describeAxiosError` import/reference may need updating in callers if they
  still expect it from this module.

### src/bridge/envLessBridgeConfig.ts
**Region match:** decls 1,2,4,5 jac=1/cos=1. Decl 3 (checkEnvLessBridgeMinVersion)
jac=1/cos=0.886 (VERSION string changed 2.1.88 → 2.1.112).

**Changes:**
- MACRO.VERSION updated from "2.1.88" to "2.1.112" in the inline version check.
- No other semantic changes.

### src/bridge/flushGate.ts
**Region match:** jac=1/cos=1 for the class decl. No unmatched decls.

**Changes:** None — verbatim copy.

### src/bridge/inboundAttachments.ts
**Region match:** All decls jac=1/cos=1 except last init block jac=0.571/cos=0.998
(var ordering changed).

**Changes:**
- `attachmentSchema` gains `is_image: z.boolean().nullish()` field (v112
  minified shows `CqA=C6(()=>y.object({file_uuid:y.string(),file_name:y.string(),is_image:y.boolean().nullish()}))`).
- Var init block ordering changed in minified.

### src/bridge/inboundMessages.ts
**Region match:** All decls jac=1/cos=1. Two small unmatched decls (import block
and var init).

**Changes:** None — verbatim copy.

### src/bridge/initReplBridge.ts
**Region match:** Single large decl jac=0.643/cos=0.997 (significant drift).
Trailing decls unmatched.

**Changes (major):**
- **v1 env-based path removed entirely.** `initBridgeCore`, `checkBridgeMinVersion`,
  `perpetual`, `previouslyFlushedUUIDs` all gone. Only v2 (env-less) path remains.
- New `enableSessionPersistence` option with `onTransportPersistenceReady` /
  `onTransportPersistenceTeardown` callbacks.
- Default title changed from `remote-control-${slug}` to
  `${getOriginalCwd()}-${slug}` (U58 inferred as `getOriginalCwd`).
- `onRenameSession` callback added (validates non-empty, writes to sessionStorage).
- `generateAndPatch` now fetches existing session title via `getBridgeSession`
  before patching; skips if server already has an unseen title.
- `initialHistoryCap` hardcoded to 200 (GrowthBook flag removed).
- `checkEnvLessBridgeMinVersion` now unconditional (no v1/v2 branch).
- Git params (`gitRepoUrl`, `branch`) passed to `initEnvLessBridgeCore`.
- New `onSessionEstablished` callback with unresolved symbols (`Yq5`, `wU1`,
  `I18`, `o3`, `hxK`).
- Return value wrapped through unresolved `EqA` function.

**TODOs:**
- `U58` title prefix function (byte ~12057560) — inferred as `getOriginalCwd()`
  but could be basename variant.
- `to8`, `wq5`, `Xz8`, `NH7` persistence symbols (bytes ~12057600–12057750).
- `Yq5`, `wU1`, `I18`, `o3`, `hxK` in `onSessionEstablished` (bytes ~12061100–12061200).
- `EqA` return wrapper (byte ~12061300).

### src/bridge/jwtUtils.ts
**Region match:** decls 1,3,4,5 jac=1/cos=1. Decl 2 unmatched (formatDuration moved
out). Two trailing decls unmatched.

**Changes:**
- `formatDuration` helper moved out of this file in v112 (unmatched decl).
- `decodeJwtPayload` renamed from `VCY` → `k8A` in minified but semantics
  unchanged.
- `decodeJwtExpiry` renamed from `h_7` → `SJ7` in minified but semantics
  unchanged.
- `createTokenRefreshScheduler` renamed from `pQ8` → `Ea8` but semantics
  unchanged.

**TODOs:**
- `formatDuration` now lives elsewhere; callers may need import updates.

### src/bridge/remoteBridgeCore.ts
**Region match:** decl 1 (oauthHeaders) jac=1/cos=1; decl 2 (initEnvLessBridgeCore)
jac=0.823/cos=1 (large body drift); decl 3 (withRetry) jac=1/cos=1. Several
unmatched decls.

**Changes (major):**
- `EnvLessBridgeParams` expanded with 6 new optional fields:
  `onSessionEstablished`, `onRenameSession`, `gitRepoUrl`, `branch`,
  `onTransportPersistenceReady`, `onTransportPersistenceTeardown`.
- `createCodeSession` call now passes git context, cwd, and model.
- `fetchRemoteCredentials` returns discriminated union
  (`RemoteCredentials | RemoteCredentialsError | null`) in v112;
  `isRemoteCredentialsError` type guard added.
- **Git branch watching:** New async setup that parses repo URL, watches branch
  changes, and reports `current_branches` metadata via transport.
- `reportState` now takes optional metadata arg; new `reportStateWithMetadata`
  helper manages pending-action tracking.
- Handle gains `reportMetadata()` method and `[Symbol.asyncDispose]`.
- `sendControlRequest` enhanced with detailed `can_use_tool` metadata
  (tool_name, action_description, raw_command, etc.) behind feature flag.
- `getTrustedDeviceToken` import removed (no longer used in credential flow).
- `fetchRemoteCredentials` wrapper removed; raw function called directly.
- Telemetry includes unresolved `...pu6()` spread.
- `rebuildTransport` now calls `triggerBranchWatch?.()` after reconnect.
- `teardown` now calls `branchWatchUnsubscribe?.()` and
  `onTransportPersistenceTeardown?.()`.

**TODOs:**
- `au6` / `xX7` credential error handling (bytes ~12045900–12046000).
- `pu6` telemetry spread (byte ~12055950).
- `tengu_bridge_requires_action_details` feature flag (byte ~12055700).
- `S7`, `I5` tool name constants for raw_command (byte ~12055750).
- Repo watcher module path (`sC`/`zF7` at byte ~12056000) — inferred as
  `../utils/repoWatcher.js`.
- `getInternalEventWriter` / `getInternalEventReaders` transport methods
  (byte ~12056050).
