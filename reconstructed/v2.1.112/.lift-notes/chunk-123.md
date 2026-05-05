# Chunk #123 — utils auth/auto*/background/bash entry

**Files lifted:** 10
**Confidence:** medium — most files are high-confidence transcriptions; remoteSession.ts and backgroundHousekeeping.ts have unresolved module paths.

## Per-file notes

### src/utils/attribution.ts
- bytes out: ~10,000
- decls reconstructed: ~10
- drift: low (most jac=1/cos=1, one decl jac=0.818)
- v112 changes:
  - `getAttributionTexts`: removed `isUndercover()` early-return guard (no v112 match for that decl).
  - Fallback model name updated from "Claude Opus 4.6" to "Claude Opus 4.7".
  - `getEnhancedPRAttribution`: removed `isUndercover()` guard and removed the `feature('COMMIT_ATTRIBUTION')` trailer block — the enhanced summary is always returned without trailer lines in v112.
- unresolved symbols: none.
- 3 v88 decls with no v112 match are boundary artifacts (the ant/isUndercover guards and the COMMIT_ATTRIBUTION block).

### src/utils/auth.ts
- bytes out: ~35,000
- decls reconstructed: ~55
- drift: mostly low (majority jac=1), with notable drifted decls:
  - `isAnthropicAuthEnabled` (jac=0.982): adds `CLAUDE_CODE_USE_ANTHROPIC_AWS` and `CLAUDE_CODE_USE_MANTLE` env-var checks.
  - `getAnthropicApiKeyWithSource` (jac=0.857): CI branch gated on `isEnvTruthy(false)` (always false in v112 — branch effectively dead).
  - `saveApiKey` (large jac=0.696): keychain error path now throws with error details; permission failure detection changed.
  - `installGlobalPackage` (jac=0.4): now checks EACCES/EPERM/permission denied in combined stdout/stderr to return 'no_permissions' — pre-check permission test removed.
  - `validateForceLoginOrg` (jac=0.842): `forceLoginOrgUUID` now supports `string | string[]` (array of permitted org UUIDs). Messages updated for array case.
  - `isUsing3PServices` (two decls, cos=0.951 and 0.988 mapping to same v112 range byte ~3685758): additional 3P call `GY1()` added — likely Mantle/Foundry-AWS provider.
  - `checkAndRefreshOAuthTokenIfNeeded` (jac=0.4): rewritten `_checkAndRefresh` implementation (renamed/restructured).
  - `getClaudeAIOAuthTokensAsync` (jac=0.842): async path restructured.
- unresolved symbols:
  - `GY1()` at byte ~3685758 — additional 3P provider check (Mantle/Foundry-AWS?); stubbed as `_isUsing3PServicesExtra_V112()`.
  - `PMq()` at byte ~3523000 — mock rate limit tier check in `getRateLimitTier`; omitted (same path as v88's mock subscription mock).
  - `SDK_OAUTH_REFRESH_ENTRYPOINTS` now a Set export (was not in v88; added from minified init).
  - `bz7`/`K98`/`IX` at byte ~3525354 — MCP OAuth cleanup function; reconstructed from v88 pattern.
- 16 v88 decls with no v112 match are boundary artifacts (3P-service checks collapsed into single decl, mock subs, etc.).

### src/utils/authPortable.ts
- bytes out: ~400
- decls reconstructed: 2
- drift: low (jac=0.75, cos=0.969)
- v112 changes:
  - `maybeRemoveApiKeyFromMacOSKeychainThrows`: error message now includes `result.stderr` when non-empty, e.g. `Failed to delete keychain entry: ${stderr}`.
- unresolved symbols: none.
- 2 v88 decls with no v112 match are boundary artifacts.

### src/utils/autoModeDenials.ts
- bytes out: ~500
- decls reconstructed: 2
- drift: jac=0.545 (significant)
- v112 changes:
  - `recordAutoModeDenial`: `feature('TRANSCRIPT_CLASSIFIER')` gate removed. The function now directly pushes to `DENIALS` without any feature flag guard. The v112_min.js extracted file shows only a module-init stub (update command registration) at the mapped byte range — suggesting this file's code may be inlined elsewhere in the bundle. Transcribed without the gate as the most conservative reading.
- unresolved symbols: none.
- 4 v88 decls with no v112 match are boundary artifacts.

### src/utils/autoRunIssue.tsx
- bytes out: ~2,200
- decls reconstructed: 4
- drift: low-medium (jac=0.913 for component, others jac=1)
- v112 changes:
  - `AutoRunIssueNotification`: `KeyboardShortcutHint` now uses `chord` prop instead of `shortcut` prop (v112 minified shows `chord:"escape"` vs v88's `shortcut:"Esc"`).
  - `shouldAutoRunIssue`: always returns `false` (external build — no ant gate).
  - `getAutoRunCommand`: always returns `'/issue'` (external build).
- unresolved symbols: none.
- 3 v88 decls with no v112 match are boundary artifacts.

### src/utils/autoUpdater.ts
- bytes out: ~8,500
- decls reconstructed: ~17
- drift: low (most jac=1, one jac=0.933)
- v112 changes:
  - `getMaxVersion` / `getMaxVersionMessage`: ant branch dropped — always returns `external`/`external_message` field.
  - `getLatestVersion`: returns `result.stdout.trim() || null` instead of just `result.stdout.trim()` (empty string → null).
  - `installGlobalPackage` (jac=0.933): permission check changed — EACCES/EPERM/permission-denied regex in combined stdout+stderr output replaces the pre-check `checkGlobalInstallPermissions()` call; no `hasPermissions` pre-check for permissions.
  - `getLatestVersionFromGcs`: v112 adds `isNpmFromWindowsPath()` skip guard.
- unresolved symbols: none.
- 2 v88 decls with no v112 match are boundary artifacts.

### src/utils/background/remote/preconditions.ts
- bytes out: ~3,500
- decls reconstructed: 6
- drift: low-medium (jac=0.5 for one decl, others jac=1)
- v112 changes:
  - `checkHasRemoteEnvironment`: removed — no v112 match.
  - `checkIsGitClean`: jac=1/cos=1 — verbatim.
  - `checkGithubAppInstalled` / `checkGithubTokenSynced` / `checkRepoForRemoteAccess`: jac=1/cos=1 — verbatim.
  - One drifted decl (jac=0.5, byte ~5054591): maps to a short stub that checks `getShellConfigPaths()` array length (`wS8`) — unresolved; stubbed as `checkIsInGitRepoWithShellConfig`.
- unresolved symbols:
  - `wS8` at byte ~5054591 — checks shell config paths array length; stubbed.
- 4 v88 decls with no v112 match are boundary artifacts.

### src/utils/background/remote/remoteSession.ts
- bytes out: ~3,000
- decls reconstructed: 1 (large function)
- drift: medium-high (jac=0.688, cos=0.995)
- v112 changes:
  - `checkBackgroundRemoteSessionEligibility`: restructured significantly.
    - `detectCurrentRepositoryWithHost` call moved inside try-catch after parallel fetch.
    - `checkHasRemoteEnvironment()` replaced by direct `fetchEnvironments()` call (`oN()`); not exported by this module.
    - New BYOC environment check: `settings.remote.defaultEnvironmentId` matched against environments list; if user has a BYOC env that matches, github app check is skipped.
    - Error handling: login failure now caught from repo detection try-catch.
- unresolved symbols:
  - `Pu8()` at byte ~6955333 — `checkNeedsClaudeAiLogin` equivalent; used from preconditions.
  - `oN()` at byte ~6955333 — `fetchEnvironments` (environments list fetch); module path unresolved, stubbed.
  - `md4()` at byte ~6956131 — `detectCurrentRepositoryWithHost`; module path unresolved, stubbed.
  - `Wu8()` at byte ~6953099 — `checkIsInGitRepo` equivalent; used from preconditions.
- 2 v88 decls with no v112 match are boundary artifacts.

### src/utils/backgroundHousekeeping.ts
- bytes out: ~1,200
- decls reconstructed: 1
- drift: jac=1/cos=1 (but v112_min body differs significantly)
- v112 changes:
  - `startBackgroundHousekeeping`: heavily simplified.
    - `feature('EXTRACT_MEMORIES')` conditional removed — `initExtractMemories()` called directly.
    - `feature('LODESTONE')` conditional removed — `ensureDeepLinkProtocolRegistered()` called directly when interactive.
    - `autoUpdateMarketplacesAndPluginsInBackground()` call dropped.
    - `initSkillImprovement()` added (not in v88).
    - Ant-only `setInterval` for `cleanupNpmCacheForAnthropicPackages` + `cleanupOldVersionsThrottled` dropped.
    - `cleanupOldVersionsThrottled` / `cleanupNpmCacheForAnthropicPackages` imports dropped.
- unresolved symbols:
  - `vzA.initExtractMemories` — module path for extractMemories service; used direct import.
  - `DW4()` — likely `initMagicDocs`; used direct import.
  - `IkK()` — likely `initSkillImprovement`; used direct import.
  - `KFK()` — likely `initAutoDream`; used direct import.
  - `TzA.ensureDeepLinkProtocolRegistered` — module path for deepLink registerProtocol.
  - `e95()` at byte ~12462341 — `cleanupOldMessageFilesInBackground`; used direct import.
  - `eq8()` — `cleanupOldVersions`; used direct import.
  - `vP7` / `AV()` / `wV()` — constants and helper fns (delay ms, getLastInteractionTime, getIsInteractive); used from bootstrap/state.
- 2 v88 decls with no v112 match are boundary artifacts.

### src/utils/bash/ParsedCommand.ts
- bytes out: ~5,500
- decls reconstructed: ~9
- drift: low (most jac=1, one cos=0.996)
- v112 changes:
  - `TreeSitterParsedCommand` class fields no longer `private` — minified class shows public field declarations.
  - `getTreeSitterAvailable` memoize removed — no v112 match; tree-sitter availability no longer checked.
  - `doParse` / `lastCmd` / `lastResult` / `ParsedCommand` export object: no v112 match — collapsed into a single direct async function `AkY` (= `parsedCommandParse`).
  - v112 `AkY` only handles tree-sitter path; no fallback to `RegexParsedCommand_DEPRECATED`. Returns null on failure.
  - `RegexParsedCommand_DEPRECATED` class still present in v112 (jac=1 decl boundary artifact gap in sourcemap suggests it may be at a different offset).
  - New exported function: `mSK` = `analyzeCommand` re-exported differently; the `analyzeCommand` call in `buildParsedCommandFromRoot` is unchanged.
- unresolved symbols: none.
- 4 v88 decls with no v112 match: `getTreeSitterAvailable`, `lastCmd`/`lastResult`, `ParsedCommand` object, and the `RegexParsedCommand_DEPRECATED` body block.

## Cross-file observations

- `CLAUDE_CODE_USE_ANTHROPIC_AWS` and `CLAUDE_CODE_USE_MANTLE` are new v112 env vars checked in `isAnthropicAuthEnabled` and `isUsing3PServices`. These likely relate to a new Anthropic-managed AWS/Mantle service offering.
- `SDK_OAUTH_REFRESH_ENTRYPOINTS` set is new in v112 exports from auth.ts — entrypoints that trigger OAuth refresh.
- `forceLoginOrgUUID` in policy settings now supports string arrays (multi-org policies).
- `backgroundHousekeeping.ts` drops several feature flags — suggests v112 always-enables extract memories, deep link protocol, and skill improvement in this build.
- `remoteSession.ts` adds BYOC (Bring Your Own Compute) environment matching logic — significant new product feature for v112.

## Lifter

`lifter-123` (sonnet-4-6, general-purpose, team v112-lift). Wave run.
