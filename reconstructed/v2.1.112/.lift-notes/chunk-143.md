# Chunk 143 Lift Notes — src/utils/plugins/

## Per-File Drift Summary

### dependencyResolver.ts — MODERATE DRIFT
- **jac/cos bands**: Most decls jac=1/cos=1. Key exceptions:
  - `verifyAndDemote`: jac=0.652, cos=0.998 (real drift)
  - `formatDependencyCountSuffix`: jac=0.768, cos=1 (real drift)
  - Trailing var decl: jac=1, cos=0.768 (new constants added)
- **Key semantic changes**:
  1. `verifyAndDemote` now checks version constraints via `depConstraints` map on plugins. If a dependency has a version constraint and the installed version doesn't satisfy it (via semver `qx`), the plugin is demoted with `type: 'dependency-version-unsatisfied'`.
  2. `formatDependencyCountSuffix` now lists dependency names (up to 5) instead of just the count: `(+ 3 dependencies: foo, bar, baz)`.
  3. New trailing constants in v112 min: `DS8=1024`, `Yf4=4096`, `GQ1=200`, `S3z` — likely related to constraint validation thresholds.
- **Unresolved**: `qx` (semver) symbol at byte ~5088084.

### gitAvailability.ts — VERBATIM
- **jac/cos bands**: jac=1, cos=1 for mapped decls.
- **Key semantic changes**: None. Unmapped trailing decls are just var hoisting.
- **Action**: Copied verbatim from v88.

### headlessPluginInstall.ts — TIGHT DRIFT
- **jac/cos bands**: jac=0.963, cos=0.999 (single main function)
- **Key semantic changes**:
  1. `installPluginsForHeadless` now accepts optional `progress` callback parameter: `(event: HeadlessInstallProgress) => void`.
  2. `onProgress` handler reports `status: 'installed' | 'failed'` with name/error to the callback before logging.
  3. New exported type `HeadlessInstallProgress`.
- **Action**: Added progress callback parameter and type.

### hintRecommendation.ts — VERBATIM
- **jac/cos bands**: jac=1, cos=1 for all mapped decls.
- **Key semantic changes**: None.
- **Action**: Copied verbatim from v88.

### installCounts.ts — VERBATIM
- **jac/cos bands**: jac=1, cos=1 for all mapped decls.
- **Key semantic changes**: None.
- **Action**: Copied verbatim from v88.

### installedPluginsManager.ts — SIGNIFICANT DRIFT
- **jac/cos bands**: Mixed. Many jac=1, but several jac=0.895-0.938.
- **Key semantic changes**:
  1. `updateInstallationPathOnDisk` now deletes `resolvedVersion` when updating path (v112: `delete $.resolvedVersion`).
  2. `addInstalledPlugin` now includes `resolvedVersion` in the entry if present on input metadata.
  3. `migrateFromEnabledPlugins` heavily rewritten:
     - Now handles managed-scope plugins from `policySettings`.
     - Cleans up orphaned managed entries (plugins no longer policy-required).
     - Collapses multi-entry managed plugins to single entry.
     - Deduplicates non-managed entries by scope+projectPath.
     - Early-skip check is more comprehensive (checks managed entries too).
  4. `isPluginInstalled` / `isPluginGloballyInstalled` unchanged in v112 min (still use `getSettings_DEPRECATED()` / `y7()`), but v112 min shows `y7()` which is the renamed `getSettings_DEPRECATED`.
  5. `getGitCommitSha` removed from v112 exports (still used internally via `lS8` alias for `getHeadForDir`).
- **Unresolved**: `lS8` alias for `getHeadForDir` at byte ~9470365.

### loadPluginCommands.ts — SIGNIFICANT DRIFT
- **jac/cos bands**: `getCommandNameFromFile` jac=0.615/cos=0.999; `createPluginCommand` jac=0.875-0.882/cos=0.999; `getPluginCommands` jac=1/cos=1.
- **Key semantic changes**:
  1. `getCommandNameFromFile`: Windows path separator normalization — uses `split(/[\/\\]/)` and `replace(/^[\/\\]/, '')` instead of `split('/')` and `replace(/^\//, '')`.
  2. `createPluginCommand`:
     - Frontmatter coercion: `name`, `argument-hint`, `when_to_use`, `version`, `agent` now wrapped with `String()` when present.
     - Model parsing: now trims and checks non-empty before parsing (was direct pass-through).
     - New fields on Command: `context` ("fork" support), `agent`, `hooks` (with zod validation), `skillRoot`.
     - `getPromptForCommand`: shell execution has a pre-processed path using `Wc8()`/`Dc8` instead of always awaiting `executeShellCommandsInPrompt`.
  3. `loadSkillsFromDirectory`: skill names sanitized with `.replace(/[^a-zA-Z0-9_-]/g, '-')`.
- **Unresolved**: `sN()` (hooks zod schema) at byte ~9425891; `Wc8()`/`Dc8` at byte ~9428221.

### loadPluginOutputStyles.ts — TIGHT DRIFT
- **jac/cos bands**: `loadOutputStylesFromDirectory` jac=0.75/cos=0.999; `loadOutputStyleFromFile` jac=0.789/cos=0.992.
- **Key semantic changes**:
  1. `loadOutputStyleFromFile`: `frontmatter.name` coerced with `String()` when present.
  2. `forceForPlugin` parsing now uses `ht6()` utility (tri-state boolean parser).
  3. New field `keepCodingInstructions` on OutputStyleConfig, also parsed with `ht6()`.
- **Unresolved**: `ht6` (tri-state boolean parser) at byte ~9433994.

### lspPluginIntegration.ts — TIGHT DRIFT
- **jac/cos bands**: `loadPluginLspServers` jac=0.913/cos=1; `loadLspServersFromManifest` jac=0.931/cos=0.997.
- **Key semantic changes**:
  1. `loadPluginLspServers`: error `source` field changed from `'plugin'` string literal to `plugin.repository`.
  2. `loadLspServersFromManifest`: signature changed from `(declaration, pluginPath, pluginName, errors)` to `(declaration, plugin, errors)` — takes `LoadedPlugin` directly.
  3. `resolvePluginLspEnvironment`: deduplicates missing vars using `F4()` utility instead of `[...new Set(Y)]`.
  4. `getPluginLspServers`: uses `uH6(plugin)` instead of `getPluginStorageId(plugin)` for loading plugin options.
  5. `extractLspServersFromPlugins` removed from v112 bundle (not present in v112 decls).
- **Unresolved**: `F4` (array dedupe) at byte ~8570957; `uH6` (storage id) at byte ~8571089.

### managedPlugins.ts — TIGHT DRIFT
- **jac/cos bands**: jac=1, cos=0.997.
- **Key semantic changes**:
  1. `_.split('@')[0]` changed to `i5(_, "@")` — uses `splitOnce` utility instead of native split.
- **Unresolved**: `i5` (splitOnce) at byte ~5090180.

### marketplaceHelpers.ts — MOSTLY VERBATIM (minified name changes)
- **jac/cos bands**: jac=1, cos=1 for all mapped decls.
- **Key semantic changes**:
  1. `areSourcesEqual` for `settings` type: v112 uses `f$` instead of `isEqual` for plugins array comparison (semantic equivalent).
  2. `areSourcesEquivalentForBlocklist`: v112 inlines `blockedConstraintMatches` as `oK6` and `extractGitHubRepoFromGitUrl` as `Pf4` — semantics identical.
  3. `isSourceAllowedByPolicy`: v112 uses `_H6` instead of `NH6` (same function, renamed).
  4. `detectEmptyMarketplaceReason`: v112 uses `KH6` instead of `mA6` for `checkGitAvailable` (same function, renamed).
- **Action**: Copied verbatim from v88 (semantic equivalent, only minified names changed).

## Cross-File Observations

1. **Windows path normalization**: `loadPluginCommands.ts` now normalizes Windows path separators (`\`) in namespace building. This is a v112 cross-cutting improvement.

2. **Tri-state boolean parsing**: `loadPluginOutputStyles.ts` uses `ht6()` for parsing `force-for-plugin` and `keep-coding-instructions`. This utility likely exists in `frontmatterParser.ts` or a shared utils file.

3. **Plugin repository vs source**: `lspPluginIntegration.ts` changed error source from `'plugin'` to `plugin.repository`. This suggests v112 distinguishes between `source` (plugin ID) and `repository` (marketplace name) on `LoadedPlugin`.

4. **Version constraint system**: `dependencyResolver.ts` added semver constraint checking. This is a major v112 feature — plugins can now declare version constraints on dependencies. The `LoadedPlugin` type likely gained `depConstraints` and `resolvedVersion` fields.

5. **Managed plugin cleanup**: `installedPluginsManager.ts` `migrateFromEnabledPlugins` now actively cleans up managed entries, suggesting v112 has better enterprise policy lifecycle management.

6. **Skill hooks**: `loadPluginCommands.ts` added `hooks` field with zod validation for skills. This is a new v112 plugin capability.

## Unresolved Symbols List

| Symbol | File | Byte Offset | Description |
|--------|------|-------------|-------------|
| `qx` | dependencyResolver.ts | ~5088084 | Semver library (valid/coerce/satisfies) |
| `ht6` | loadPluginOutputStyles.ts | ~9433994 | Tri-state boolean parser (true/false/undefined) |
| `sN` | loadPluginCommands.ts | ~9425891 | Hooks zod schema |
| `Wc8` / `Dc8` | loadPluginCommands.ts | ~9428221 | Pre-processed shell execution path |
| `F4` | lspPluginIntegration.ts | ~8570957 | Array deduplication utility |
| `uH6` | lspPluginIntegration.ts | ~8571089 | Plugin storage ID resolver |
| `i5` | managedPlugins.ts | ~5090180 | splitOnce utility |
| `lS8` | installedPluginsManager.ts | ~9470365 | Alias for getHeadForDir (git SHA) |
