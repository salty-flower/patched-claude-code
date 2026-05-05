# Chunk #81 — src/main.tsx

**Files lifted:** 1
**Confidence:** medium
**Strategy:** v88 source copied wholesale (sourcemap stripped); targeted v112
drift edits applied inline. Large-function drifts (notably `run`, `main`)
retain v88 bodies; the only `run` edit applied is the new
`forceRemoteSettingsRefresh` policy gate.

## Per-file notes

### main.tsx
- bytes out: ~234 KB (v88_src minus the trailing inline sourcemap blob, +
  ~1.5 KB of v112 patches and TODO comments).
- v88_src.tsx total bytes: 803,924 — sourcemap blob removed at offset
  233,612, leaving 233,612 bytes of TS as the baseline.
- decls in region.json: 23 v88 decls, 21 with v112 matches; 2 unmatched are
  boundary artifacts (an empty-body `function hl8(q){}` near v88 byte
  12978250–12978267, and a 4-decl re-export `var Sq5=...,KsY=...,_sY=...,
  YsY,sA7=11` near v88 byte 12979187–12979274 — the migration-version const
  is preserved in source as `CURRENT_MIGRATION_VERSION = 11`).

### Drift inventory (v112 vs v88)

| # | jac   | cos   | v88 byte range          | v112 byte range          | owner                          | edit applied? |
| - | ----- | ----- | ----------------------- | ------------------------ | ------------------------------ | ------------- |
| 0 | 1     | 1     | 12916885 – 12916940     | 13576416 – 13576471      | export-meta header             | no — verbatim |
| 1 | 1     | 1     | 12917009 – 12917155     | 13576540 – 13576686      | `logManagedSettings`           | no — verbatim |
| 2 | 1     | 1     | 12917155 – 12917469     | 13576686 – 13577000      | `isBeingDebugged`              | no — verbatim |
| 3 | 0.5   | 0.982 | 12917469 – 12917617     | 13577000 – 13577311      | `logSessionTelemetry`          | **yes**       |
| 4 | 0.8   | 0.994 | 12917617 – 12917874     | 13577311 – 13577654      | `getCertEnvVarTelemetry`       | **yes**       |
| 5 | 1     | 1     | 12917874 – 12918311     | 13577654 – 13578091      | `logStartupTelemetry`          | no — verbatim |
| 6 | 1     | 1     | 12918311 – 12918501     | 13578091 – 13578281      | `runMigrations` (or peer)      | no — verbatim |
| 7 | 1     | 1     | 12918501 – 12918709     | 13578281 – 13578489      | `prefetchSystemContextIfSafe`  | no — verbatim |
| 8 | 0.583 | 0.999 | 12918709 – 12919106     | 13578489 – 13579112      | `startDeferredPrefetches`      | **yes**       |
| 9 | 0.75  | 0.983 | 12919106 – 12919657     | 13579112 – 13579555      | `loadSettingsFromFlag`         | no — drift is local renames + minor error-formatting tweaks; v88 body preserved |
| 10| 0.5   | 0.981 | 12919657 – 12919834     | 13579555 – 13579696      | `loadSettingSourcesFromFlag`   | no — same shape, minified rename only |
| 11| 1     | 1     | 12919834 – 12919995     | 13579696 – 13579857      | `eagerLoadSettings`            | no — verbatim |
| 12| 1     | 0.999 | 12919995 – 12920342     | **13374472 – 13374914** (note the v112 offset is far lower → v112 hoisted this decl into an earlier bundle position) | `initializeEntrypoint`         | **yes** — added cli→sdk-cli upgrade branch |
| 13| 0.978 | 1     | 12920342 – 12922454     | 13579857 – 13581918      | `main` (the export)            | **yes** — moved `NoDefaultCurrentDirectoryInExePath` set into module init; rest of body preserved |
| 14| 0.7   | 0.998 | 12922454 – 12922958     | 13581918 – 13582438      | `getInputPrompt`               | no — drift is minor stdin-encoding tweak; v88 body preserved |
| 15| 0.85  | 1     | 12922958 – 12977184     | 13582438 – 13637993      | `run` (the giant CommanderCommand setup) | **partial** — added `forceRemoteSettingsRefresh` policy gate at preAction; the rest is minifier renames + small wording diffs that do not warrant rewriting 54 KB of source |
| 16| 0.882 | 0.999 | 12977184 – 12978250     | 13637993 – 13639169      | `logTenguInit`                 | **yes** — TODO comment block recording 3 new fields (`getStartupContextTelemetry()` spread, `apiKeySource`, `noFlickerEnvVar`) since their helpers aren't in the v88 rosetta |
| 17| —     | —     | 12978250 – 12978267     | (none)                   | empty body `function hl8(q){}` | no — boundary artifact, no v112 match |
| 18| 1     | 1     | 12978267 – 12978479     | 13639186 – 13639397      | `maybeActivateProactive`       | no — verbatim |
| 19| 1     | 1     | 12978479 – 12978586     | 13639397 – 13639504      | `resetCursor`                  | no — verbatim |
| 20| 1     | 1     | 12978586 – 12979187     | 13639504 – 13640105      | `maybeActivateBrief`           | no — verbatim |
| 21| —     | —     | 12979187 – 12979274     | (none)                   | re-export var block            | no — boundary artifact (`CURRENT_MIGRATION_VERSION = 11` already in source as a top-level const) |
| 22| 0.667 | 1     | 12979274 – 12980166     | 13640845 – 13641892      | module side-effect init block  | no — bundler-emitted; not authored TS |

### Targeted v112 edits applied in source

1. **`logSessionTelemetry`** — wraps the `loadAllPluginsCacheOnly().then` callback in
   an `async` arrow and lazily hydrates `plugin.mcpServers` / `plugin.lspServers`
   for any cached plugin missing them, before logging the per-session plugin
   telemetry. Two helpers needed (`resolvePluginMcpServers`,
   `resolvePluginLspServers`) are stubbed via `declare const … : unknown` —
   replace once `src/services/plugins/*` lifts land.
2. **`getCertEnvVarTelemetry`** — return type widened to
   `Record<string, boolean | string>`; new `cert_store` field captures
   `process.env.CLAUDE_CODE_CERT_STORE`.
3. **`startDeferredPrefetches`** —
   - new `CLAUDE_CODE_USE_ANTHROPIC_AWS` / `CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH`
     branch reuses `prefetchAwsCredentialsAndBedRockInfoIfSafe`;
   - event-loop stall detector now opt-in via the
     `tengu_drift_lantern` GrowthBook flag (was `"external" === 'ant'`).
4. **`initializeEntrypoint`** — when `process.env.CLAUDE_CODE_ENTRYPOINT` is
   already set to the generic `"cli"` and the call says we're non-interactive,
   upgrade it to `"sdk-cli"` before returning.
5. **`main`** — the `NoDefaultCurrentDirectoryInExePath = '1'` assignment was
   moved out of the function body and into a module-init side effect at the
   top of the file (so MCP-serve and other entrypoints get it too).
6. **`run`** (preAction hook) — when `policySettings.forceRemoteSettingsRefresh`
   is set, await a verified `refreshRemoteManagedSettings(loadRemoteManagedSettings)`
   call and fail-closed with `exitWithError` on `!valid`. Otherwise the v88
   fail-open background load is preserved.
7. **`logTenguInit`** — TODO block flagging three v112-only payload fields
   (`...getStartupContextTelemetry()` spread, `apiKeySource`,
   `noFlickerEnvVar`) whose helper sources aren't visible in this chunk's
   rosetta.

### Unresolved / TODO

- `resolvePluginMcpServers`, `resolvePluginLspServers` — stubbed `declare const`
  pending downstream `src/services/plugins/*` lift (helpers minified as `yl`
  and `$M6` in v112 at byte ~13578602 / ~13578695).
- `getStartupContextTelemetry` — v112 `pu6()` spread at byte ~13638500,
  unknown source path.
- `getApiKey({skipRetrievingKeyFromApiKeyHelper:true}).source` — v112 `Vw`
  inside `logTenguInit`. Likely from `src/utils/auth.ts`, but signature
  unverified.
- `noFlickerEnvVar` — v112 `wK4()` near top of `logTenguInit` body. Likely
  reads `CLAUDE_CODE_NO_FLICKER` or similar.
- `refreshRemoteManagedSettings` (v112 `xa1`) — already imported from
  `./services/remoteManagedSettings/index.js` in v88; the call shape `xa1(Ia1)`
  threads `loadRemoteManagedSettings` as the loader argument and returns
  `{valid, message}`. Confirm the verified-refresh API matches.
- `forceRemoteSettingsRefresh` field on `policySettings` — confirm the type
  surfaces in `getSettingsForSource('policySettings')`.
- The two boundary artifacts (`hl8(q){}` empty body and the re-export var
  block) have no semantic content to lift.

## Cross-file observations

- v112 introduces a new policy-driven settings-refresh path
  (`forceRemoteSettingsRefresh`) that fails closed. Other call sites that
  currently use background `loadRemoteManagedSettings()` may want similar
  treatment when policy demands it — flag for downstream review.
- The `startDeferredPrefetches` switch from `"external" === 'ant'` to a
  GrowthBook flag is a cross-cutting pattern; expect similar swaps in other
  modules in this version bump.
- `logTenguInit`'s new `apiKeySource` field implies a stable accessor on the
  auth module (`src/utils/auth.ts`) — worth confirming during the auth-module
  lift.

## Lifter

`lifter-81` (opus, single-pass; v88-baseline strategy after #125 precedent).
The file is ~234 KB of TS post-trim; ~95% of decls are jac=cos=1 verbatim or
near-verbatim, and the remaining drift sites are individually small. A
ground-up lift of `run` (54 KB) wasn't attempted — that 0.85-jac change is
mostly minifier-name churn plus the `forceRemoteSettingsRefresh` patch
already applied above.
