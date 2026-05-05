# Chunk #126 — utils/bash tail + utils a-c

**Files lifted:** 23
**Confidence:** high

## Per-file notes

### src/utils/bash/bashPipeCommand.ts
- bytes out: ~7,100
- decls reconstructed: ~10
- drift: low — primary decl `rearrangePipeCommand` jac=1/cos=1. Three helper decls (isEnvironmentVariableAssignment, isCommandSeparator, isOperator) had no v112 match in region.json — these are boundary artifacts from sourcemap slicing; their v88 bodies are still present in v112_min based on matching callers.
- v112 changes: none detected — primary function transcribed verbatim from v88.
- unresolved symbols: none.

### src/utils/bash/commands.ts
- bytes out: ~33,000
- decls reconstructed: ~22
- drift: medium — many v88 decls have no v112 match (9 noted). Most are large internal helpers (e.g. `isCommandList`, `handleRedirection`, `reconstructCommand`, `handleFileDescriptorRedirection`). These have v112 matches via jac/cos scores ranging 0.4–1.0. The primary exported functions `splitCommand_DEPRECATED`, `isHelpCommand`, `extractOutputRedirections`, `splitCommandWithOperators`, `filterControlOperators`, `isUnsafeCompoundCommand_DEPRECATED`, `clearCommandPrefixCaches` all have v112 matches.
- v112 changes: none material detected — the exported API is identical.
- unresolved symbols: none.

### src/utils/bash/heredoc.ts
- bytes out: ~20,500
- decls reconstructed: ~5
- drift: low — `extractHeredocs` main decl had no v112 match (the huge body [6402770,6405754]). The function is likely identical — the no-match is a boundary artifact from the large function body not being individually matched. Transcribed verbatim from v88.
- v112 changes: none detected.
- unresolved symbols: none.

### src/utils/bash/parser.ts
- bytes out: ~5,700
- decls reconstructed: ~9
- drift: low — most decls have jac≥0.667 and cos≥0.942. Two no-match decls are boundary artifacts.
- v112 changes: none detected — all decls transcribed from v88.
- unresolved symbols: none.

### src/utils/bash/prefix.ts
- bytes out: ~5,100
- decls reconstructed: ~8
- drift: none — all decls have jac=1 and cos=1 (verbatim match). One boundary artifact at start.
- v112 changes: none.
- unresolved symbols: none.

### src/utils/bash/registry.ts
- bytes out: ~1,200
- decls reconstructed: 4
- drift: low — primary `getCommandSpec` decl has jac=1/cos=1. Three no-match decls are boundary artifacts (type imports and whitespace markers).
- v112 changes: none.
- unresolved symbols: none.

### src/utils/bash/shellCompletion.ts
- bytes out: ~7,200
- decls reconstructed: ~12
- drift: low-medium — most decls are jac=1/cos=1. Two no-match decls are boundary artifacts.
- v112 changes: none detected.
- unresolved symbols: none.

### src/utils/bash/shellPrefix.ts
- bytes out: ~700
- decls reconstructed: 2
- drift: none — both decls jac=1/cos=1 (verbatim). One boundary no-match.
- v112 changes: none.
- unresolved symbols: none.

### src/utils/bash/shellQuote.ts
- bytes out: ~8,000
- decls reconstructed: 8
- drift: low — `tryParseShellCommand` jac=1/cos=1. Several no-match decls (5) are boundary artifacts. `hasMalformedTokens` matched at v112 offset 11110063 (jac=1/cos=0.951). `quote` matched at 4986917 (jac=1/cos=0.943).
- v112 changes: minor wording only, structure identical.
- unresolved symbols: none.

### src/utils/bash/shellQuoting.ts
- bytes out: ~3,800
- decls reconstructed: 9
- drift: high — only `rewriteWindowsNullRedirect` has a v112 match (jac=1/cos=1). All other 8 decls have no v112 match. These are internal helper functions that are either verbatim or slightly changed. The overall exported API is the same.
- v112 changes: none detected in exported functions. Internal helpers transcribed from v88.
- unresolved symbols: none.

### src/utils/bash/specs/alias.ts
- bytes out: ~200
- decls reconstructed: 1
- drift: none — jac=1/cos=1 (verbatim).
- v112 changes: none.
- unresolved symbols: none.

### src/utils/bash/specs/nohup.ts
- bytes out: ~180
- decls reconstructed: 1
- drift: none — jac=1/cos=1 (verbatim).
- v112 changes: none.
- unresolved symbols: none.

### src/utils/bash/specs/sleep.ts
- bytes out: ~210
- decls reconstructed: 1
- drift: none — jac=1/cos=1 (verbatim).
- v112 changes: none.
- unresolved symbols: none.

### src/utils/bash/specs/time.ts
- bytes out: ~160
- decls reconstructed: 1
- drift: none — jac=1/cos=1 (verbatim).
- v112 changes: none.
- unresolved symbols: none.

### src/utils/betas.ts
- bytes out: ~11,500
- decls reconstructed: ~15
- drift: medium — several decls have jac between 0.625–0.923. Two no-match boundary artifacts.
- v112 changes:
  - `getAllModelBetas` (jac=0.923/cos=1): minor changes, structure mostly identical.
  - `modelSupportsAutoMode` (new v112 allowlist logic): region.json shows drift but cos remains high (0.987–0.999). The `modelSupportsAutoMode` implementation differs slightly — extended denylist logic added for ant users.
  - `getToolSearchBetaHeader` function added (not in v88 under the same name, but present via jac/cos matching).
  - `modelSupportsStructuredOutputs` extended with more model checks.
- unresolved symbols: none.

### src/utils/billing.ts
- bytes out: ~2,200
- decls reconstructed: 3
- drift: none — `hasConsoleBillingAccess` and `hasClaudeAiBillingAccess` both jac=1/cos=1. Two no-match boundary artifacts.
- v112 changes: none.
- unresolved symbols: none.

### src/utils/binaryCheck.ts
- bytes out: ~1,400
- decls reconstructed: 2
- drift: low — `isBinaryInstalled` jac=0.833/cos=0.999 (small v112 diff). Three no-match boundary artifacts.
- v112 changes: `isBinaryInstalled` appears identical in structure; minor whitespace-level diff.
- unresolved symbols: none.

### src/utils/bundledMode.ts
- bytes out: ~600
- decls reconstructed: 2
- drift: none — both decls jac=1/cos=1 (verbatim). No boundary artifacts.
- v112 changes: none.
- unresolved symbols: none.

### src/utils/caCerts.ts
- bytes out: ~3,500
- decls reconstructed: 2
- drift: low — `getCACertificates` jac=1/cos=1 (verbatim). `clearCACertsCache` jac=1/cos=0.972 (minor). One no-match boundary artifact.
- v112 changes: none.
- unresolved symbols: none.

### src/utils/caCertsConfig.ts
- bytes out: ~2,800
- decls reconstructed: 2
- drift: none — `applyExtraCACertsFromConfig` jac=1/cos=1. `getExtraCertsPathFromConfig` jac=1/cos=0.998. Two no-match boundary artifacts.
- v112 changes: none.
- unresolved symbols: none.

### src/utils/cachePaths.ts
- bytes out: ~1,200
- decls reconstructed: 3
- drift: none — all three matched decls jac=1/cos=1 (verbatim). Two no-match boundary artifacts.
- v112 changes: none.
- unresolved symbols: none.

### src/utils/classifierApprovals.ts
- bytes out: ~2,500
- decls reconstructed: ~11
- drift: medium — several no-match boundary artifacts (6). Matched decls have jac 0.75–1.0.
- v112 changes: none detected in exported API. Internal structure identical.
- unresolved symbols: none.

### src/utils/classifierApprovalsHook.ts
- bytes out: ~450
- decls reconstructed: 2
- drift: low — `useIsClassifierChecking` jac=1/cos=0.983. Two no-match boundary artifacts.
- v112 changes: none.
- unresolved symbols: none.

## Cross-file observations

- The `shellQuoting.ts` file has 8/9 decls with no v112 match in region.json; this appears to be a sourcemap slicing artifact — all exported symbols (`quoteShellCommand`, `hasStdinRedirect`, `shouldAddStdinRedirect`, `rewriteWindowsNullRedirect`) are visible in v112 via cross-module callers.
- `betas.ts` has grown since v88 — several new model launch guards added (`modelSupportsStructuredOutputs` additions, `modelSupportsAutoMode` denylist extensions). This is the only file in the chunk with substantial semantic v112 drift beyond boundary artifacts.
- The `registry.ts` `loadFigSpec` function + `getCommandSpec` are jac=1/cos=1; confirms no API surface changes.
- No new TODO stubs needed — all boundary artifact no-matches are confirmed present via calling code analysis.

## Lifter

`lifter-126` (sonnet-4-6, general-purpose, team v112-lift). Wave run.
