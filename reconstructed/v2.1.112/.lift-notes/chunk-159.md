# Chunk 159 Lift Notes

## src/utils/terminal.ts
- **Status**: Mostly verbatim (jac=1,cos=1 for core functions).
- **Drift**: `isOutputLineTruncated` has cos=0.982 (moved to different bundle offset but structurally identical).
- **Action**: Copied v88 verbatim. No semantic changes detected.

## src/utils/teleport/environmentSelection.ts
- **Status**: Mostly verbatim.
- **Drift**: Import/type decl has jac=0.444,cos=0.989 (import paths/names shifted in minifier). Main function `getEnvironmentSelectionInfo` is jac=1,cos=1.
- **Action**: Copied v88 verbatim. No semantic changes.

## src/utils/teleport/environments.ts
- **Status**: Reconstructed with v112 semantic changes.
- **Drift**:
  - `fetchEnvironments`: Error handling changed — v112 throws the original error directly after logging instead of wrapping in a new `Error(...)`. (jac=0.923,cos=0.999)
  - `createDefaultCloudEnvironment`: Added optional `signal?: AbortSignal` parameter. Description changed from `""` to `"Default - trusted network access"`. (jac=0.889,cos=1)
- **Action**: Applied v112 changes to error handling and function signature.

## src/utils/teleport/gitBundle.ts
- **Status**: Reconstructed with v112 semantic changes.
- **Drift**:
  - `_bundleWithFallback`: Major rewrite. Added `baseRef?: string` parameter. Added preflight size check via `getRepoSizeInfo` (new unresolved symbol). Added conditional skipping of `--all` and `HEAD` tiers when repo is obviously too large. Added diff check against `baseRef` tree — if identical, returns new `no_changes` failReason. Added `baseRef` parent commit for delta bundling. (jac=0.69,cos=0.997)
  - `createAndUploadGitBundle`: Added `baseRef?: string` to opts. Replaced `getFeatureValue_CACHED_MAY_BE_STALE` with `getBundleMaxBytes` (new unresolved symbol). Added `stash_failed` failReason handling — if `git stash create` fails but HEAD exists, returns actionable error instead of proceeding without WIP. (jac=0.804,cos=1)
  - New fail reasons: `'stash_failed'`, `'no_changes'`.
- **Action**: Reconstructed both functions with v112 logic. Added `// TODO(lift)` for unresolved `getRepoSizeInfo` and `getBundleMaxBytes`.

## src/utils/teleport.tsx
- **Status**: Reconstructed with v112 semantic changes.
- **Drift**:
  - `teleportResumeCodeSession`: Added `checkAndRefreshOAuthTokenIfNeeded()` call. Added `'error'` case to `RepoValidationResult` switch. (jac=0.871,cos=1)
  - `handleTeleportPrerequisites`: Present in both versions but v112 uses different component names (renamed in minifier).
  - `teleportToRemoteWithErrorHandling`: Added `source` parameter. Added `persistTeleportSource` call. (jac=1,cos=1 with minor param changes)
  - `teleportFromSessionsAPI`: Added trusted device token read (`readStoredTrustedDeviceToken`) when available. Added v2 endpoint first, session-ingress fallback. Added detailed timing logs. (jac=1,cos=1 with additions)
  - `pollRemoteSessionEvents`: Added `skipMetadata` option. (jac=1,cos=1)
  - `teleportToRemote`: **Major rewrite**. Added `environmentId` fast-path with bundle/git source selection. Added `useBundle`, `environmentVariables`, `skipBundle`, `reuseOutcomeBranch`, `githubPr`, `tags`, `useDefaultEnvironment`, `model`, `permissionMode`, `ultraplan`, `source`, `bundleBaseRef`, `onCreateFail` options. Changed environment selection: auto-creates default cloud env if none exist, retries for `anthropic_cloud` when `useDefaultEnvironment` is set. Added `validateStatus` on axios calls. Added `persistTeleportSource` call. Bundle fail messages are more specific (`stash_failed`, `no_changes` cases). (no direct match in region.json)
  - `archiveRemoteSession`: Added `timeout` parameter with default 10000ms. (no direct match)
- **Action**: Full reconstruction of `teleportToRemote` with v112 options and logic. Added `// TODO(lift)` for `persistTeleportSource` (unknown implementation). Fixed `bundleBaseRef` option that was used but not declared.
