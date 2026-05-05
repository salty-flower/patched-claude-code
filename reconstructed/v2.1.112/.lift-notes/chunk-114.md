# Chunk #114 — src/tools/PowerShellTool validation (2 files)

**Files lifted:** 2
**Confidence:** high

## Per-file notes

### modeValidation.ts
- bytes out: ~9,500
- decls reconstructed: 5 (isItemTypeParamAbbrev, isSymlinkCreatingCommand, checkPermissionMode, ACCEPT_EDITS_ALLOWED_CMDLETS, LINK_ITEM_TYPES)
- drift: very low — jac=0.978/cos=1 for the large init decl; jac=1/cos=1 for all other matched decls.
- v112 changes:
  - Logic is verbatim from v88. The jac=0.978 on the large init decl reflects minor minifier symbol renames, not semantic drift.
  - Two v88 decls `[8607745,8607791]` and `[8611562,8611574]` have no v112 match — these are boundary artifacts (module init glue, no source content).
  - Module init now calls `bI6()` (pathValidation module init) before setting `LWY`/`hWY` — this reflects the v112 bundle's dependency ordering, not a logic change.
  - All string literals and logic in `checkPermissionMode`, `isSymlinkCreatingCommand`, `isAcceptEditsAllowedCmdlet`, and `isItemTypeParamAbbrev` are identical to v88.
- unresolved symbols: none.

### pathValidation.ts
- bytes out: ~29,000
- decls reconstructed: ~16
- drift: low-medium — CMDLET_PATH_CONFIG (jac=1), matchesParam/hasComplexColonValue/formatDirectoryList/expandTilde (jac=1), extractPathsFromCommand (jac=0.938), validatePath/pc8 (jac=0.926), isPathAllowed/fg1 (jac=0.855), checkPathConstraintsForStatement/IWY (jac=0.855), checkPathConstraints/lEK (jac=1).
- v112 changes:
  - `validatePath`: new `~user` guard added. When the normalized path matches `/^~[^/]/`, returns `{allowed: false, decisionReason: {type: 'other', reason: 'Paths beginning with ~user cannot be statically validated and require manual approval'}}`. v88 had no such check.
  - `isPathAllowed`: `checkPathSafetyForAutoEdit` now receives a 4th argument `isRemoteMode` from `context`. v88 called `In6(q,z)` (2 args); v112 calls `ot6(q,z,void 0,K.isRemoteMode)` (4 args). Lifted as `checkPathSafetyForAutoEdit(resolvedPath, precomputedPathsToCheck, undefined, (context as unknown as { isRemoteMode?: boolean }).isRemoteMode)` with a cast until the v112 `ToolPermissionContext` type is lifted with `isRemoteMode`.
  - `checkPathConstraintsForStatement`: new Remove-Item -Recurse guard for cwd deletion. Before the per-path loop, v112 checks whether any extracted path (resolved) equals or is an ancestor of `getCwd()` when `-Recurse` flag is present, and sets `firstAsk` with a specific message: `"Remove-Item -Recurse targeting '...' would delete the working directory including .git and .claude — requires manual approval"`.
  - `checkPathConstraintsForStatement` (suggestions): v112 only appends `{type:'setMode',mode:'acceptEdits'}` suggestion when `toolPermissionContext.mode === 'default' || toolPermissionContext.mode === 'plan'`. v88 always appended it for write/create operations. Applied consistently in both the main command loop and the nested command loop.
  - One v88 decl `[8622895,8622917]` has no v112 match — boundary artifact (module glue with no source content).
  - `CMDLET_PATH_CONFIG` (k_7 in v112_min): confirmed identical to v88 — all cmdlet entries unchanged, same pathParams/knownSwitches/knownValueParams.
- unresolved symbols:
  - `isRemoteMode` on `ToolPermissionContext` — cast via `unknown` until the v112 type definition is lifted. See inline TODO comment.

## Cross-file observations

- These two files are direct mirrors of `BashTool/modeValidation.ts` and `BashTool/pathValidation.ts` (chunk #108) for the PowerShell tool. The same `~user` guard that v112 added to PowerShellTool's `validatePath` was likely added to BashTool's `validatePath` as well — verify when chunk #108 is re-audited.
- `isRemoteMode` on `ToolPermissionContext` is a new v112 field passed to `checkPathSafetyForAutoEdit`. This same pattern likely appears in other tool path validators. **Action for a later chunk:** when the v112 `ToolPermissionContext` type is lifted, add `isRemoteMode?: boolean` and remove the cast in both `PowerShellTool/pathValidation.ts` and `BashTool/pathValidation.ts`.
- The `setMode:'acceptEdits'` suggestion gating on `mode === 'default' | 'plan'` mirrors the same change in BashTool/pathValidation.ts (chunk #108, noted as `// TODO(lift): full plan-mode guard`). In this file the guard is fully reconstructed from v112_min.
- `checkPathSafetyForAutoEdit` signature has changed in v112 to accept `(resolvedPath, precomputedPathsToCheck, unknown3, isRemoteMode)` — the 3rd argument is always `undefined` at these call sites.

## Lifter

`lifter-114` (sonnet, general-purpose, team v112-lift).
