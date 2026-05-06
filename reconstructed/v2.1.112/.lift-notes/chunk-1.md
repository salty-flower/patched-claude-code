# Chunk 1 Lift Notes — v2.1.88 → v2.1.112

## src/bridge/bridgePermissionCallbacks.ts
- **Status**: verbatim copy (jac=1, cos=1 for matched decl)
- **Drift**: None. The single type-predicate declaration is byte-identical between v88 and v112.

## src/bridge/bridgeStatusUtil.ts
- **Status**: mostly verbatim; imports/constants reconstructed
- **Drift**:
  - Several import-only and constant declarations have no v112 match (expected — minifier may fold or reorder them).
  - All function bodies (`timestamp`, `buildBridgeConnectUrl`, `buildBridgeSessionUrl`, `computeGlimmerIndex`, `computeShimmerSegments`, `getBridgeStatus`, `buildIdleFooterText`, `buildActiveFooterText`, `wrapWithOsc8Link`) are jac=1, cos=1 — copied verbatim.
  - Constants `TOOL_DISPLAY_EXPIRY_MS`, `SHIMMER_INTERVAL_MS`, `FAILED_FOOTER_TEXT` reconstructed from v112 minified.

## src/bridge/bridgeMessaging.ts
- **Status**: reconstructed with v112 semantic additions
- **Drift**:
  - `ServerControlRequestHandlers` gains `onRenameSession?: (title: string) => { ok: true } | { ok: false; error: string }`.
  - `handleServerControlRequest` adds `rename_session` case mirroring `set_permission_mode` pattern (callback verdict → success/error control_response).
  - All other functions (`isSDKMessage`, `isSDKControlResponse`, `isSDKControlRequest`, `isEligibleBridgeMessage`, `extractTitleText`, `handleIngressMessage`, `makeResultMessage`, `BoundedUUIDSet`) are jac=1, cos=1 — copied verbatim.
  - Final var initializer has no v112 match (expected — minifier artifact).

## src/bridge/codeSessionApi.ts
- **Status**: reconstructed with v112 API changes
- **Drift**:
  - `createCodeSession` signature expands: adds optional `gitSessionContext?: { gitRepoUrl, branch, defaultBranch? }` and `model?: string`.
  - `createCodeSession` body now builds a `config` object with `cwd`, `model`, and conditional `sources`/`outcomes`/`reuse_outcome_branches` from `buildGitSessionContext` (dynamic import from `../services/gitSessionContext.js`).
  - `fetchRemoteCredentials` return type widened to `RemoteCredentialsResult | null` where `RemoteCredentialsResult = RemoteCredentials | { terminal: true; reason: string }`.
  - `fetchRemoteCredentials` adds 403 terminal-reason extraction (stubbed with `// TODO(lift)` — exact `extractTerminalReason` logic not recovered from minified).
  - `oauthHeaders` and epoch-parsing logic remain verbatim (jac=1, cos=1).

## src/bridge/bridgeMain.ts
- **Status**: heavily reconstructed — large file with many v112 changes
- **Drift**:
  - `parseArgs` gains `--remote-control-session-name-prefix` flag (sets `CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX` env var).
  - `ParsedArgs` gains `sessionNamePrefix?: string`.
  - `runBridgeLoop`:
    - `sessionWorktrees` values gain `headCommit?: string`.
    - Adds `crashedSessions: Set<string>` for tracking failed non-timeout exits.
    - `onSessionDone`: removes `wasTimedOut` status-flip logic (v88 converted timed-out+interrupted → failed; v112 keeps raw status).
    - `onSessionDone`: crashed sessions keep their worktree (logs "kept worktree … session crashed"); non-crashed use new `cleanupWorktree` helper.
    - `onSessionDone`: archive only on `status === 'completed'` in multi-session mode (v88 archived all non-interrupted).
    - Shutdown: `sessionsToArchive` skips adding `initialSessionId` if it matches a crashed session (`sameSessionId` check).
    - Shutdown: worktree cleanup uses `cleanupWorktree` helper instead of inline `removeAgentWorktree`.
    - Session spawn telemetry spreads `...projectContext()` (stubbed with `// TODO(lift)`).
    - Spawn failure worktree cleanup passes `{ force: true }` to `cleanupWorktree`.
    - Removes `USER_TYPE === 'ant'` debug glob logic (v88 had ant-specific debug path).
    - Debug file logic simplified: only `config.debugFile` or `config.verbose` triggers debug log (removed `USER_TYPE === 'ant'` branch).
  - `bridgeMain`:
    - Applies `sessionNamePrefix` to env immediately after parse.
    - Imports `redactGitRemoteCredentials` from `../utils/git.js` and uses it when logging `gitRepoUrl`.
    - Default session title: `name ?? \`${hostname()}-${randomUUID().slice(0, 8)}\`` (v88 used `name` only, defaulting to empty).
  - `runBridgeHeadless`: unchanged structurally but references same v112 patterns.
  - Added helper functions at bottom:
    - `cleanupWorktree(wt, logger, options?)` — wraps `removeAgentWorktree`.
    - `projectContext()` — telemetry stub returning `{}` (TODO).
