# Chunk #119 — generated types + upstreamproxy + 2 utils

**Files lifted:** 12
**Confidence:** medium-high

## Per-file notes

### src/types/generated/google/protobuf/timestamp.ts
- bytes out: ~5 KiB
- decls reconstructed: 1 (MessageFns shape + helpers)
- drift: verbatim transcription — jac=1/cos=1 on matching decls; 3 v88 decls have no v112 match (boundary artifacts from sourcemap slicing, not real removals)
- v112 changes: none detected — generated code is stable
- unresolved symbols: none

### src/types/generated/events_mono/claude_code/v1/claude_code_internal_event.ts
- bytes out: ~25 KiB
- decls reconstructed: ~10 (4 interfaces + 4 MessageFns objects + helpers)
- drift: low — jac range 0.958–1.0 on all matched decls (cos=1 throughout); 2 v88 decls have no v112 match (boundary artifacts)
- v112 changes: none detected — protobuf-generated code is structurally identical
- unresolved symbols: none

### src/types/generated/events_mono/growthbook/v1/growthbook_experiment_event.ts
- bytes out: ~7 KiB
- decls reconstructed: 1 interface + 1 MessageFns + helpers
- drift: verbatim — jac=1/cos=1 on matched decl; 2 v88 decls have no v112 match (boundary artifacts)
- v112 changes: none detected — generated code stable
- unresolved symbols: none

### src/types/hooks.ts
- bytes out: ~11 KiB
- decls reconstructed: ~10 (functions + schemas + types)
- drift: medium — jac=0.955, cos=1 on main schema decl
- v112 changes:
  - `syncHookResponseSchema` → `UserPromptSubmit` branch gained `sessionTitle: z.string().describe('Set the session title (same effect as /rename)').optional()` field
  - `permissionBehaviorSchema` in v112_min now includes `'defer'` in the enum (seen as `ZeY=C6(()=>y.enum(["allow","deny","ask","defer"]))`) — this is the permissionBehaviorSchema from PermissionRule.js, not defined here, but the change surfaces in this schema's output
- unresolved symbols: none

### src/types/ids.ts
- bytes out: ~1 KiB
- decls reconstructed: 4 (2 types + 3 functions)
- drift: jac=1/cos=1 on the matched decl; remaining 5 v88 decls have no v112 match (pure type-level decls produce no minified output)
- v112 changes: none — pure types file, identical
- unresolved symbols: none

### src/types/permissions.ts
- bytes out: ~14 KiB
- decls reconstructed: many types + 1 const
- drift: jac=1/cos=1 on matched decl
- v112 changes:
  - `INTERNAL_PERMISSION_MODES` now always includes `'auto'` — the `feature('TRANSCRIPT_CLASSIFIER')` conditional gate is removed. v112_min: `p16=["acceptEdits","auto","bypassPermissions","default","dontAsk","plan"]`
  - The v88 `import { feature } from 'bun:bundle'` is dropped (no longer needed)
- unresolved symbols: none

### src/types/plugin.ts
- bytes out: ~12 KiB
- decls reconstructed: many types + `getPluginErrorMessage`
- drift: moderate — jac=0.967 (first decl), jac=0.919 (second decl); cos=1 throughout
- v112 changes:
  - `PluginComponent` gained `'workflows'` and `'routines'` variants (seen as `VCK=["commands","agents","output-styles","skills","workflows","routines"]`)
  - `PluginError` gained new `'path-traversal'` variant (seen in `getPluginErrorMessage` switch: `case"path-traversal":return\`Path escapes plugin directory: ${q.path} (${q.component})\``)
  - `PluginError` gained new `'dependency-version-unsatisfied'` variant (seen in switch: `case"dependency-version-unsatisfied":return\`Requires "${q.dependency}" ${q.required}, installed ${q.installed??"version unknown"}\``)
  - The duplicate `lsp-config-invalid` in v88_src is cleaned up (was a copy-paste artifact)
- unresolved symbols: none

### src/types/textInputTypes.ts
- bytes out: ~13 KiB
- decls reconstructed: many types + 2 functions
- drift: low — jac=0.949, cos=1 on main decl; 2 function decls are jac=1/cos=1
- v112 changes: none observed — structure matches v88_src exactly
- unresolved symbols: none

### src/upstreamproxy/relay.ts
- bytes out: ~14 KiB
- decls reconstructed: 13 functions/types
- drift: low-medium — most decls jac=1; `startBunRelay` is jac=0.833/cos=0.999
- v112 changes:
  - `startBunRelay` (BunState type and `data` handler): added `endAfterDrain: boolean` field to BunState; `end()` in the adapter now checks `writeBuf.length > 0` and sets `endAfterDrain = true` instead of calling `sock.end()` immediately; `drain()` handler now calls `sock.end()` when `endAfterDrain` is set after the buffer drains
  - `data` handler gained early return `if (st.closed) return` guard
  - `handleData` first-line match changed from `m = firstLine.match(...)` to direct `if (!firstLine.match(...))` (no capture group variable)
- unresolved symbols: none

### src/upstreamproxy/upstreamproxy.ts
- bytes out: ~10 KiB
- decls reconstructed: 6 functions + 1 const
- drift: high — jac range 0.667–0.742 on key decls
- v112 changes:
  - `initUpstreamProxy` now falls back to `getSessionIngressAuthToken()` (minified as `qW()`) when no token file exists; logs which path the token came from; only unlinks token file if it existed
  - `initUpstreamProxy` calls new `configureAwsProxy()` (minified as `E7A`) after CA bundle download
  - `readToken` split into `readTokenFile` returning `{existed: boolean, token: string|null}` (v88 returned `string | null`)
  - `getUpstreamProxyEnv` passthrough list gains `'AWS_ACCESS_KEY_ID'`, `'AWS_SECRET_ACCESS_KEY'`, `'GH_TOKEN'`, `'GITHUB_TOKEN'`
  - `getUpstreamProxyEnv` enabled path adds `AWS_ACCESS_KEY_ID: 'proxy-injected'`, `AWS_SECRET_ACCESS_KEY: 'proxy-injected'`, `GH_TOKEN: 'proxy-injected'`, `GITHUB_TOKEN: 'proxy-injected'`
  - `NO_PROXY_LIST` dropped: `github.com`, `api.github.com`, `*.github.com`, `*.githubusercontent.com` (those now route through proxy for credential injection)
  - `setNonDumpable` no longer uses `import('bun:ffi')` — uses `require('bun:ffi')` directly (matches minified `d6("bun:ffi")`)
- unresolved symbols:
  - `getSessionIngressAuthToken` (minified as `qW` at byte ~11986000) — imported from `../utils/sessionIngressAuth.js`; exact signature inferred from call site
  - `configureAwsProxy` body (minified as `E7A` at bytes 11987986–11988476) — writes AWS proxy config; body not fully recoverable; marked with TODO in file

### src/utils/CircularBuffer.ts
- bytes out: ~2 KiB
- decls reconstructed: 1 class
- drift: jac=1/cos=1 — verbatim
- v112 changes: none
- unresolved symbols: none

### src/utils/QueryGuard.ts
- bytes out: ~2.5 KiB
- decls reconstructed: 1 class
- drift: jac=1/cos=1 — verbatim
- v112 changes: none
- unresolved symbols: none

## Cross-file observations

- `INTERNAL_PERMISSION_MODES` in `permissions.ts` now includes `'auto'` unconditionally — the `feature('TRANSCRIPT_CLASSIFIER')` gate is removed. Any downstream code that gated on feature flag can now assume auto mode is always available.
- `PluginComponent` in `plugin.ts` gained `'workflows'` and `'routines'` — expect new plugin loading paths for these component types elsewhere in the codebase.
- The upstreamproxy gained credential injection for AWS and GitHub (tokens set to `'proxy-injected'`). This implies the CCR proxy now MITMs and injects real credentials server-side for those services.
- `configureAwsProxy` in upstreamproxy.ts is a new function whose body is not recoverable from v112_min without further byte-range analysis. Left as a TODO stub.
- `getSessionIngressAuthToken` is referenced from upstreamproxy but its module (`sessionIngressAuth.ts`) must already exist; lifted as an import.
- hooks.ts `permissionBehaviorSchema` gains `'defer'` — this originates in `PermissionRule.ts` (not in this chunk) but surfaces here via the schema output.

## Lifter

`lifter-119` (sonnet-4-6, general-purpose, team v112-lift).
