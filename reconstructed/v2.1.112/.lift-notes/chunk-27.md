# Chunk #27 — src/components/LogSelector.tsx

**File lifted:** 1 (single file, 241KB v88 source)
**Strategy:** v88 source used as structural baseline; major rewrite for v112 because the
React Compiler runtime (`_c` / `$[]` memoization) was replaced with standard React hooks
(useMemo, useCallback, useState, useRef, useEffect). Helper functions were reordered and
some removed (tag tabs, Fuse deep search) while new ones added (worktree scope grouping,
agentic search mapping).

## region.json analysis

| v88 decl | jac | cos | v112 match | Notes |
|----------|-----|-----|------------|-------|
| [0] import preamble | — | — | none | Boundary artifact |
| [1] `wSK` (normalizeAndTruncate) | 1.0 | 1.0 | `dcK` | Verbatim, renamed |
| [2] `y57` (formatSnippet) | 1.0 | 1.0 | `Y$7` | Verbatim, renamed |
| [3] `tZY` (extractSnippet) | 1.0 | 1.0 | `VQY` | Verbatim, renamed |
| [4] `E57` (buildLogLabel) | 1.0 | 1.0 | `A$7` | Verbatim, renamed |
| [5] `L57` (buildLogMetadata) | 1.0 | 1.0 | `O$7` | Verbatim, renamed |
| [6] `KU8` (LogSelector component) | 0.678 | 0.973 | `Er8` | **Major drift** — see below |
| [7] JSX tail | — | — | none | Boundary artifact |
| [8] JSX cache tail | 1.0 | 0.963 | `5689055` | Partial match, different bundle loc |
| [9] cache assignments | 0.5 | 0.974 | `10110387` | Partial match, different bundle loc |
| [10] final return | — | — | none | Boundary artifact |
| [11] `eZY`, `qGY`, `KGY` | 0.667 | 0.984 | `869433` | Partial — KGY differs (Fuse removed) |
| [12] `_GY`, `zGY` | — | — | none | Boundary artifact (Fuse helpers) |
| [13] `YGY` start | — | — | none | Boundary artifact |
| [14] `YGY`, `$GY`, `AGY` | 1.0 | 1.0 | `11096302` | Verbatim, renamed |
| [15] `OGY` (buildSearchableText) | 1.0 | 1.0 | `11096632` | Verbatim, renamed |
| [16] `wGY`, `jGY` | 1.0 | 1.0 | `11096973` | Verbatim, renamed |
| [17] constants | 1.0 | 0.996 | `10667853` | Almost verbatim |
| [18] constants cont | — | — | none | Boundary artifact |
| [19] module init | — | — | none | Boundary artifact |

## Key v112 changes (from v112_min.js)

### 1. React Compiler runtime removed
- v88 used `import { c as _c } from "react/compiler-runtime"` with `$[n]` memo arrays
- v112 uses standard `React.useMemo`, `React.useCallback`, `React.useState`, `React.useRef`, `React.useEffect`
- This is the single largest structural change, affecting every reactive computation in the component

### 2. New props
- `isLoading?: boolean` (default `false`) — shows "· Refreshing…" in header
- `reloadGeneration?: number` (default `0`) — triggers state reset via useEffect when incremented

### 3. Removed features
- **Tag tabs** (`TagTabs` component, `getUniqueTags` function, `selectedTagIndex` state, tab navigation) — completely removed
- **Fuse.js deep search** (`Fuse` import, `_temp5` deep search effect, `fuseIndex` computation) — replaced with no-op stubs
- `isDeepSearchEnabled` flag (was always `false` in v88, now fully removed)

### 4. Reworked worktree detection
- v88: `getWorktreePaths(currentCwd).then(paths => setHasMultipleWorktrees(paths.length > 1))`
- v112: `getWorktreePathsAsync(currentCwd)` with analytics (`tengu_worktree_detection` event), finds best-matching worktree, sets `worktreePaths`, `currentWorktree`, `worktreesReady`
- Worktree filter logic now matches against the most specific worktree prefix

### 5. Branch filter default changed
- v88: `const [branchFilterEnabled, setBranchFilterEnabled] = React.useState(false)`
- v112: `const [branchFilterEnabled, setBranchFilterEnabled] = React.useState(true)`
- The filter logic is inverted: when `branchFilterEnabled` is `true`, the branch filter is **active** (shows only current branch). Wait — looking more carefully at v112 minified: `[h,C]=m7.default.useState(!0)` means `h` starts as `true`, and the filter `if(!h&&N)C1=C1.filter(...)` means filtering happens when `h` is `false`. So the state name semantics flipped: v88 `branchFilterEnabled=true` meant "filter is on", v112 `branchFilterEnabled` (stored in `h`) being `true` means "show all branches" (filter off). **This is a semantic inversion.**

### 6. Preview shortcut changed
- v88: `Ctrl+V` for preview
- v112: `Space` (or `Ctrl+V` as fallback) for preview

### 7. New paste handler
- v112 adds `onPaste` handler on the root `Box` that extracts first line of pasted text and enters search mode

### 8. Keyboard shortcut component changes
- v112 uses `A8` (KeyboardShortcutHint) with `format={{modCase:"title",charCase:"upper"}}` prop for some shortcuts
- v112 uses `v1` (ConfigurableShortcutHint) instead of `W1`
- Footer uses `z1` (Byline) instead of `I1`

### 9. Search input changes
- v112 `useSearchInput` (`bS`) returns `{query, setQuery, cursorOffset, handleKeyDown, handlePaste}`
- v88 `useSearchInput` (`XR`) returned `{query, setQuery, cursorOffset}`

### 10. Helper function changes
- **Removed:** `eZY` (extract log), `qGY` (get uuid), `KGY`/`_GY`/`zGY` (Fuse search/sort), `jGY` (getUniqueTags)
- **Added:**
  - `getSessionIdFromLog` (`WR4`) — gets session ID from message slug
  - `mapAgenticSearchResults` (`byY`) — maps Fuse-like results to agentic search results
  - `sortLogsByDate` (`Vf6`) — sorts by modified then created date
  - `groupLogsByScope` (`HIY`) — groups logs by scope (new, unused in component?)
- **Renamed:** `AGY`→`kQY`, `OGY`→`NQY`, `wGY`→`EQY`

### 11. Filter indicator changes
- v112 shows worktree path indicator using `FcK` formatter
- v112 shows "no matching worktree" placeholder when worktree detection is pending
- Removed tag filter indicator

### 12. Component reference changes (minified symbols)
| v88 | v112 | Component |
|-----|------|-----------|
| `R$` | `zA` | Divider |
| `k` | `T` | Text |
| `Tp` | `wg` | SearchBox |
| `I1` | `z1` | Byline |
| `t8` | `A8` | KeyboardShortcutHint |
| `W1` | `v1` | ConfigurableShortcutHint |
| `IK` | `Y5` | Spinner |
| `ohK` | `ucK` | SessionPreview |
| `YSK` | `BcK` | TreeSelect |
| `H1` | `A1` | Select |
| `r3` | `l4` | TextInput |
| `P1` | `G1` | useKeybinding |

## Lift method

1. Copied v88 import block, removed React Compiler runtime import, added `getWorktreePathsAsync`
2. Added new props (`isLoading`, `reloadGeneration`) to `LogSelectorProps`
3. Rewrote `LogSelector` component body from `_c(247)` memoization to standard hooks
4. Applied v112 semantic changes:
   - Branch filter default inverted
   - Worktree detection with async + analytics
   - Removed tag tabs and deep search
   - Added paste handler
   - Changed preview shortcut to Space
   - Added reloadGeneration effect
5. Kept helper functions with v112 additions (`getSessionIdFromLog`, `mapAgenticSearchResults`, `sortLogsByDate`, `groupLogsByScope`)
6. Added TODO markers for unresolved symbol mappings and semantic questions

## Unresolved / TODO

- [ ] Verify `getWorktreePathsAsync` is the correct v112 import (was `getWorktreePaths` in v88)
- [ ] Verify `useSearchInput` v112 return type includes `handleKeyDown` and `handlePaste`
- [ ] Confirm branch filter semantic inversion (v112 `h=true` means "show all branches")
- [ ] Implement or verify `FcK` (worktree path formatter) behavior
- [ ] `groupLogsByScope` (`HIY`) is defined but not used in the component — verify if it should be exported
- [ ] `mapAgenticSearchResults` (`byY`) and `sortLogsByDate` (`Vf6`) are defined but may be unused in component body
- [ ] Verify `getSessionIdFromLog` v112 behavior: v88 used `getSessionIdFromLog` from sessionStorage utils, v112 has a local `WR4` that reads `.messages.find(msg=>msg.slug)?.slug` — these may be different functions
- [ ] The v112 `LogSelector` uses `K66()` for `isCustomTitleEnabled` check — verify this maps correctly

## Lifter

`lifter-27` (kimi-for-coding, single-shot). Strategy: structural rewrite from v88 baseline
to match v112's standard-hooks architecture, with targeted edits for removed/added features.
