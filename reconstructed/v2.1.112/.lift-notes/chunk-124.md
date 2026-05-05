# Chunk #124 — src/utils/bash ShellSnapshot+ast

**Files lifted:** 2
**Confidence:** medium-high

## Per-file notes

### ShellSnapshot.ts

- bytes out: ~9,500 (v112_min region 8713873–8722212)
- decls reconstructed: ~9
- drift: medium (jac=0.429 on `createAndSaveSnapshot`; jac=1 on several helpers)
- v112 changes:
  - `createArgv0ShellFunction` signature changes completely: drops `binaryPath` parameter.
    The shell function now reads `CLAUDE_CODE_EXECPATH` env var at runtime, falling
    back to `command -v claude`. Falls back to `command <funcName> "$@"` if no binary found.
    This allows the embedded-tool dispatch to work when the binary path changes.
  - `createRipgrepShellIntegration` (jac=0.429): uses new `createArgv0ShellFunction`
    without `binaryPath` arg. The embedded-rg branch no longer passes `rgCommand.rgPath`.
  - `createFindGrepShellIntegration` (jac=0.429): same — no `binaryPath`; uses
    `createArgv0ShellFunction('find','bfs',...)` and `createArgv0ShellFunction('grep','ugrep',...)`.
    The `embeddedSearchToolsBinaryPath()` call is gone (binary resolved at runtime).
  - `getClaudeCodeSnapshotContent` (jac=0.429 → significant drift): now takes `shell` param
    for Windows PATH extraction. Windows PATH reads via `execa(shell,['-lc','echo "$PATH"'],...)`
    instead of `execa('echo $PATH',{shell:true})`. Extra PATH entries prepended from
    `getExtraPathEntries()` (ant-native, unresolved). BigQuery integration block added.
    PATH is written via heredoc with a random end-marker instead of `echo "export PATH=..."`.
  - `getSnapshotScript` calls `getClaudeCodeSnapshotContent(shellPath)` instead of just
    `getClaudeCodeSnapshotContent()`.
  - `getUserSnapshotContent`: alias escape uses `.replaceAll("'","'\\''")` (v88 used
    `/'/g` regex). Otherwise identical.
  - `createAndSaveSnapshot` (`UPK`): jac=0.986. No structural changes; env spread uses
    `process.env.CLAUDE_CODE_DONT_INHERIT_ENV` gate (same as v88).
  - Init thunk (`QPK`): v112 adds `t_Y` (createBqShellIntegration) to the lazy-init set.
- unresolved symbols:
  - `RG4` (getExtraPathEntries) at byte ~8714100 — returns `Promise<string[]>` of extra
    PATH entries to prepend (ant-native runtime injection). Left as `[]` stub.
  - `t_Y` (createBqShellIntegration) at byte ~8714960 — returns `string | null`. Adds
    BigQuery shell integration when available. Left as `null` stub.
  - `sX` at byte ~8715020 — Windows path converter (likely `windowsPathToPosixPath`).
    Used to convert `extraPaths` entries for Windows. Left as identity stub.

### ast.ts

- bytes out: ~30,100 (v112_min region 4807500–4838006)
- decls reconstructed: ~27
- drift: varies — most decls jac=1, three at jac=0.7–0.98, two at jac=0.667–0.875
- v112 changes:
  - `parseForSecurity` (jac=0.667): when `parseCommandRaw` returns `null` (WASM not
    loaded), v112 returns `{kind:'simple',commands:[]}` instead of
    `{kind:'parse-unavailable'}`. Behavioral change: callers that previously fell back
    to conservative behavior on `parse-unavailable` now see an empty-simple result.
  - `parseForSecurityFromAst` / `dt6` (jac=0.857): "Parser aborted" reason text changed
    to `"Parser aborted (timeout, resource limit, or over-length)"` — drops the
    `"— possible adversarial input"` suffix.
  - `collectCommands` / `ad` (jac=0.98): major scope-tracking upgrade.
    - New "poisonedVars" tracking: when a `||` separator is encountered, records which
      vars were in scope before it; after the RHS processes with a snapshot scope, those
      vars are poisoned (set to VAR_PLACEHOLDER) in the outer scope. Prevents
      `A=safe || A=poison && cmd $A` from leaking the 'safe' value.
    - `for_statement` and `while_statement` (while only) are guarded by `xP()` feature
      flag. When the flag is off, they return tooComplex immediately.
    - `applyVarToScope` now takes an `afterFirstCommand` boolean for declaration commands.
      When true, the var is set to VAR_PLACEHOLDER immediately (conditional-scope guard).
    - `if_statement`: when processing the condition scope, applies a richer merge-back
      logic — poisons vars that were set in condition but not present in outer scope, and
      propagates conditional-modification errors more precisely.
    - `mergeBodyScope` helper extracted: shared by do_group, elif_clause, else_clause,
      and then-body merges.
  - `walkFileRedirect` / `ZP4` (jac=0.7): adds explicit target-content checks:
    `containsAnyPlaceholder`, newline, and `!`-prefix guards. The word/number branch
    now also rejects `(?:^|[^\\])(?:\\\\)*[`$]`.
  - `walkHeredocRedirect` / `_N4` (jac=1 in v88, new check in v112): adds a check for
    backslash in quoted heredoc delimiter body.
  - `walkCommand` / `R7z` (jac=0.857): `command_name` branch loses the `xP()` guard
    that v88 had (guard on `simple_expansion`/`expansion` children removed from
    command_name). Text rebuild uses `.replaceAll` instead of `/'/g` regex.
  - `applyVarToScope` / `Og1` (jac=0.684): v112 adds `afterFirstCommand` param; the
    existing-value check is simplified (just checks isAppend mismatch vs prior value
    rather than the full containsAnyPlaceholder logic on the combined value).
  - `checkSemantics` / `VP4` (jac=0.98): `/proc/*/environ` check now also covers
    `cmd.argv` items (not just `cmd.redirects`). `jq` checks reordered to appear before
    ZSH_DANGEROUS_BUILTINS check (not after EVAL_LIKE_BUILTINS). Newline+# check now
    uses `.replaceAll` in text rebuild.
  - One v88 decl `[6363359,6363396]` has no v112 match — boundary artifact.
  - Init thunk `Wy6`: unchanged structure. `TK6=Symbol("parse-aborted")` becomes `kj6`
    in v112 (same `PARSE_ABORTED` symbol).
- unresolved symbols:
  - `xP` at byte ~4813974 — feature flag predicate (e.g. `feature('AST_FOR_WHILE')` or
    similar). Guards `for_statement` and `while_statement` branches in `collectCommands`.
    Inline TODO comments left; both branches currently behave as if `xP()=false`
    (returns tooComplex for for/while), which is the safe/conservative path.
  - v112_min also references `Qh8` (appears in `collectCommands` for_statement body
    merge and if_statement merges) — this is `mergeBodyScope`. Named and implemented
    inline in the lift.

## Cross-chunk resolutions

The bashPermissions.ts wave-1 lift (chunk #105) left four `_V112` stubs with byte-range
hypotheses. All four are confirmed in this chunk:

| Stub | Hypothesized name | Confirmed location |
|------|-------------------|-------------------|
| `gt6` ~byte 9918304 | `parseCommandRaw` | `parseCommandRaw` imported from `./parser.js` (re-exported) |
| `dt6` ~byte 9918447 | `parseForSecurity` | **`parseForSecurityFromAst`** (exact) — note: `parseForSecurity` is the async wrapper; `dt6` is the sync AST-taking form |
| `VP4` ~byte 9919705 | `checkSemantics` | **`checkSemantics`** (confirmed exact) |
| `WP4` ~byte 9918382 | `nodeTypeId` | **`nodeTypeId`** (confirmed exact) |

All four can be imported from `../../utils/bash/ast.js` in bashPermissions.ts, replacing
the `_V112` stubs.

## Lifter

`lifter-124` (sonnet-4-6, general-purpose, team v112-lift).
