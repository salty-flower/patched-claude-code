# Chunk 7 Lift Notes

## src/cli/update.ts
- **Status**: Reconstructed (jac=0.903)
- **Changes from v88**:
  - Version bumped to 2.1.112, build date updated
  - Added `minimumVersion` setting check before native update
  - Added `lt()` semver comparison for channel minimum version guard
  - Native update flow restructured: `wasUpdated` flag on result, signals daemon restart on success
  - Homebrew path now uses `getLatestVersion` with null check and explicit brew command
  - Added transcript size limit check (`MAX_BRANCH_TRANSCRIPT_SIZE` pattern from elsewhere)
  - Added `signalDaemonRestart` TODO for post-update daemon signaling
  - v112 uses `Dp8()` for channel override detection (not present in v88)
- **TODOs**: 2 unresolved symbols (signalDaemonRestart)

## src/commands.ts
- **Status**: Mostly copied with adjustments (jac=0.933-0.966)
- **Changes from v88**:
  - `usageReport` shim gained `disableModelInvocation: true`
  - `getSkillToolCommands` filter: `loadedFrom === 'commands_DEPRECATED'` instead of `'skills'`
  - `getSlashCommandToolSkills` filter simplified (removed `co8()` check)
  - `BRIDGE_SAFE_COMMANDS` set unchanged
  - `REMOTE_SAFE_COMMANDS` unchanged
  - Several internal function renames in minified (no semantic changes)
  - Removed `clearSkillCaches` call pattern changed slightly
- **TODOs**: None

## src/commands/add-dir/add-dir.tsx
- **Status**: Mostly copied with adjustments (jac=0.935)
- **Changes from v88**:
  - React compiler cache changed from `z6(10)` to `s(10)` (minified rename)
  - `call` function uses `context.setToolPermissionContext()` instead of manual get/set/appState update
  - Bootstrap state accessors renamed: `tG()`/`Ap6` instead of `NZ()`/`qx6`
  - Sandbox manager renamed: `Z7` instead of `M7`
  - Validation helpers renamed: `KE6`/`_E6` instead of `iT6`/`rT6`
  - Component renamed: `Fs6` instead of `Y78`
  - Chalk/text helpers renamed: `Y8` instead of `$8`, `cd` instead of `jd`
- **TODOs**: 1 (setToolPermissionContext apply helper)

## src/commands/add-dir/index.ts
- **Status**: Copied verbatim (jac=1, cos=1)
- **Changes**: None

## src/commands/advisor.ts
- **Status**: Stub with TODOs (jac=0.5 for command object, no match for call function)
- **Changes from v88**:
  - v88 had full `call` implementation with model validation, advisor set/unset logic
  - v112 minified shows voice command content at matched region, suggesting advisor was relocated/removed
  - The entire call function decl [10898325,10899645] has no v112 match
  - Written as minimal stub returning unavailable message
- **TODOs**: 2 (full reconstruction needed)

## src/commands/agents/agents.tsx
- **Status**: Mostly copied with adjustments (jac=0.8)
- **Changes from v88**:
  - `getTools` wrapper renamed: `YZ(z)` instead of `gD(z)`
  - React import renamed: `vj7` instead of `g37`
  - Component renamed: `IoK` instead of `fIK`
  - Added `toolUseContext:K` prop to AgentsMenu
- **TODOs**: None

## src/commands/agents/index.ts
- **Status**: Copied verbatim (jac=1, cos=1)
- **Changes**: None

## src/commands/ant-trace/index.js
- **Status**: Copied verbatim (jac=1, cos=1)
- **Changes**: None (stub)

## src/commands/autofix-pr/index.js
- **Status**: Copied verbatim (jac=1, cos=1)
- **Changes**: None (stub)

## src/commands/backfill-sessions/index.js
- **Status**: Copied verbatim (jac=1, cos=1)
- **Changes**: None (stub)

## src/commands/branch/branch.ts
- **Status**: Reconstructed (jac=0.704-0.882)
- **Changes from v88**:
  - Added `MAX_BRANCH_TRANSCRIPT_SIZE` (50MB) check before reading transcript
  - `createFork` now takes `extraMessages` parameter for /btw fork integration
  - Extra messages are enriched with cwd/userType/entrypoint/version/gitBranch from last original message
  - `getUniqueForkName` unchanged
  - `call` function: options destructured as `{customTitle, extraMessages}`
  - Date formatting uses `truncateAt` helper (ISO split) instead of direct `split('T')[0]`
  - Resume hint message changed: "To return to the original: /resume {id}" instead of "To resume the original: claude -r {id}"
  - Return type changed from `null` to `boolean`
  - `saveCustomTitle` uses effective title directly
- **TODOs**: 2 (truncateAt helper import)

## src/commands/branch/index.ts
- **Status**: Copied verbatim (jac=1, cos=1)
- **Changes**: None (feature flag alias logic preserved)

## src/commands/break-cache/index.js
- **Status**: Copied verbatim (jac=1, cos=1)
- **Changes**: None (stub)

## src/commands/bridge/bridge.tsx
- **Status**: Reconstructed (jac=0.872)
- **Changes from v88**:
  - React compiler cache `s(10)` instead of `z6(10)`
  - Hook imports renamed: `Hz6`/`useState` instead of `c56`/`useState`
  - Component library renamed: `lz`/`cd` instead of `$A`/`jd`
  - State hooks renamed: `R7()` instead of `s7()`, `M8` instead of `P8`
  - Bridge check functions renamed: `vtK()` instead of `kpK()`, `jaY` instead of `YLY`
  - State selectors renamed: `toY`/`soY`/`aoY` instead of `iEY`/`nEY`/`lEY`
  - Dialog component renamed: `eoY` instead of `rEY`
  - URL selectors renamed: `$aY`/`waY`/`OaY` instead of `zLY`/`_LY`/`KLY`
  - Disconnect state reducer renamed: `AaY` instead of `qLY`
  - Message constants renamed: `Q_8` instead of `Hq8`
  - Focus helpers renamed: `YaY`/`zaY`/`_aY` instead of `eEY`/`tEY`/`sEY`
  - QR filter/map helpers renamed: `KaY`/`qaY` instead of `aEY`/`oEY`
  - ListItem component renamed: `TR` instead of `mU`
  - Keybinding hint uses `z1`/`A8` components instead of plain text
  - QR line element renamed: `xJ` instead of `$A`
  - Added `useV2` check with `mH6()`/`Rq8()` for env-less bridge v2 prerequisite
  - v112 preflight checks assistant mode for env-less bridge disable
- **TODOs**: None (all symbols mapped)

## src/commands/bridge/index.ts
- **Status**: Copied verbatim (jac=1, cos=1)
- **Changes**: None

## src/commands/btw/btw.tsx
- **Status**: Reconstructed (jac=0.565-0.727)
- **Changes from v88**:
  - Major rewrite with history support, forking, retry logic
  - Added `M` state for btw history, `P` state for current history buffer, `W` ref
  - Added `Z`/`G` states for fork-in-progress UI
  - Added `f` ref for ScrollBox
  - Terminal size hook renamed: `Fd(s1())` instead of `vE8(t1())`
  - Interval hook renamed: `fD` instead of `eW`
  - React hook import renamed: `jL` instead of `j56`
  - React element factory renamed: `h5` instead of `MO`
  - Text component renamed: `T` instead of `k`
  - ScrollBox component renamed: `Px6` instead of `xh6`
  - Spinner component renamed: `_yY` instead of `Ae6`
  - Markdown component renamed: `xw` instead of `AO`
  - Main component renamed: `KyY` instead of `YOY`
  - Strip function renamed: `YyY` instead of `AOY`
  - Cache params builder renamed: `AyY` instead of `OOY`
  - Call function renamed: `OyY` instead of `wOY`
  - Added message builder imports: `t8`/`yj` for user/assistant messages
  - Added truncation helper: `vA7`
  - Added constants: `gbK`/`qyY`/`tEY`/`eEY`
  - Added history persistence: `ubK`/`xbK`
  - Added fork integration with `branchAndResume`
  - Added retry support with `onRetry` callback and `synthetic` flag
  - Added `b6` error message helper
- **TODOs**: 5 (branchAndResume, history helpers, truncate, message builders, retry state)

## src/commands/bughunter/index.js
- **Status**: Copied verbatim (jac=1, cos=1)
- **Changes**: None (stub)
