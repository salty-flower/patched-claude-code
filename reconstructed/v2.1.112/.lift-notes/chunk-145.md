# Chunk #145 Lift Notes — `src/utils/plugins/*`

## Overview

Eight files under `src/utils/plugins/`. Drift spectrum: verbatim (jac=1, cos=1) through moderate (jac~0.55) to heavy (jac~0.40). v112 theme: dependency-constraint resolution, tag-based version resolution, git auth tokens, path-traversal guards, plugin monitors, rollback on install failure.

---

## Per-File Drift Summary

### 1. `pluginDirectories.ts` — Verbatim
- **jac/cos**: 1 / 1
- **Changes**: Import rename `fileSize` -> `getFileSize`.
- **Notes**: All 5 exports unchanged.

### 2. `pluginFlagging.ts` — Light (API shrink)
- **jac/cos**: ~0.95 / ~0.99
- **Changes**: Two exported functions **removed** in v112:
  - `getFlaggedPlugins()` (sync cache accessor)
  - `removeFlaggedPlugin(name: string)`
- **Notes**: Remaining 3 functions (`loadFlaggedPlugins`, `addFlaggedPlugin`, `markFlaggedPluginsSeen`) are verbatim. Callers of removed functions likely moved to a different module or were inlined.

### 3. `pluginIdentifier.ts` — Verbatim
- **jac/cos**: 1 / 1
- **Changes**: None.
- **Notes**: `parsePluginIdentifier`, `buildPluginId`, `isOfficialMarketplaceName`, `scopeToSettingSource`, `settingSourceToScope` all identical.

### 4. `pluginPolicy.ts` — Verbatim
- **jac/cos**: 1 / 1
- **Changes**: None.
- **Notes**: `isPluginBlockedByPolicy` unchanged.

### 5. `pluginVersioning.ts` — Tight drift (one-line semantic)
- **jac/cos**: ~0.98 / ~0.999
- **Changes**: Git-subdir path normalization uses `replaceAll("\\", "/")` instead of `.replace(/\\/g, "/")`.
  ```ts
  const normPath = source.path
    .replaceAll("\\", "/")   // v112
    .replace(/^\.\//, "")
    .replace(/\/+$/, "")
  ```
- **Notes**: Behavior identical; modern API preference.

### 6. `reconciler.ts` — Verbatim
- **jac/cos**: 1 / 1
- **Changes**: None.
- **Notes**: `diffMarketplaces`, `reconcileMarketplaces`, `normalizeSource` all identical.

### 7. `pluginInstallationHelpers.ts` — Heavy drift
- **jac/cos**: ~0.40–0.52 / ~0.70–0.85
- **Key v112 additions**:
  - `tagInfo` parameter added to `cacheAndRegisterPlugin` for version-constrained git sources.
  - New `InstallCoreResult` variants: `range-conflict`, `no-matching-tag`.
  - `installResolvedPlugin` completely rewritten with:
    - Dependency constraint merging (`depConstraints`)
    - Tag resolution for git sources (`resolveTagForRange`)
    - Rollback on install failure (uninstall + cleanup)
  - New error formatters: `formatRangeConflictError`, `formatNoMatchingTagError`.
  - Analytics event renamed: `tengu_plugin_installed` -> `plugin_installed` with different field schema (`plugin_name`, `plugin_version`, `source_type`, `success`, `error_type`).
  - Stub helpers for cross-chunk symbols:
    - `resolveVersionRange`
    - `getGitSourceType`
    - `resolveTagForRange`
    - `canonicalDepId`
    - `getInstalledPluginsForScope`
    - `getAllPlugins`
    - `checkExtraDependencies`

### 8. `pluginLoader.ts` — Moderate-to-heavy drift
- **jac/cos**: ~0.55–0.96 / ~0.75–0.98
- **Key v112 additions**:
  - Git auth token support via `GIT_AUTH_ENV` environment variable and `gitAuthArgs` helper.
  - `depConstraints` extraction in `cachePlugin` return type.
  - New `loadPluginManifestWithConstraints` function replacing inline manifest loading.
  - `resolvePluginPathSafe` for path-traversal guarding (resolves + checks escape).
  - `validatePluginPaths` now returns `null` for escaped paths and emits `path-traversal` errors.
  - `createPluginFromPath` returns `{plugin, errors, hasManifest}` instead of `{plugin, errors}`.
  - `LoadedPlugin` gets `depConstraints` and `monitors` fields.
  - `loadPluginMonitors` stub for v112 monitor loading.
  - `installPluginDependencies` stub for post-cache dependency installation.
  - `loadPluginsFromMarketplaces` passes `marketplaceSource` to loaders.
  - `loadPluginFromMarketplaceEntryCacheOnly` handles local vs non-local sources differently.
  - `isLocalMarketplaceSource` stub helper.
  - Preserves `resolvedVersion` from `installed_plugins.json` onto loaded plugins.

---

## Cross-File Observations

1. **Dependency constraint system** spans `pluginInstallationHelpers.ts` and `pluginLoader.ts`. Constraints flow from marketplace entry -> install -> cache -> load. The `depConstraints` field appears in `InstallCoreResult`, `cachePlugin` return, and `LoadedPlugin`.

2. **Version resolution** is now multi-layered:
   - `pluginVersioning.ts` handles SHA/path-hash for git-subdir.
   - `pluginInstallationHelpers.ts` adds tag-based resolution (`resolveTagForRange`) for version ranges.
   - `pluginLoader.ts` preserves `resolvedVersion` from installed state.

3. **Security hardening** in v112:
   - Path-traversal guards in `pluginLoader.ts` (`resolvePluginPathSafe`, `validatePluginPaths`).
   - Git auth token injection via env var (`GIT_AUTH_ENV`).

4. **Plugin monitors** are a new v112 concept. `pluginLoader.ts` loads them via `loadPluginMonitors` stub; likely consumed by a scheduler elsewhere.

5. **Analytics unification**: `tengu_plugin_installed` -> `plugin_installed` suggests a broader event naming migration across the codebase.

6. **Removed exports in `pluginFlagging.ts`** (`getFlaggedPlugins`, `removeFlaggedPlugin`) may have been absorbed into a settings-backed store or a higher-level module. No replacement found within this chunk.

---

## Unresolved Symbols (TODO(lift))

These functions/types are referenced in the reconstructed v112 source but defined in other chunks. They are stubbed with `TODO(lift)` comments.

### From `pluginInstallationHelpers.ts`
| Symbol | Likely Home | Purpose |
|--------|-------------|---------|
| `resolveVersionRange` | `pluginVersioning.ts` or new module | Resolves semver ranges to concrete versions |
| `getGitSourceType` | `pluginVersioning.ts` or `schemas.ts` | Classifies git source (git, github, git-subdir) |
| `resolveTagForRange` | `pluginVersioning.ts` or new module | Matches git tags against semver ranges |
| `canonicalDepId` | `pluginIdentifier.ts` or new module | Normalizes dependency identifiers |
| `getInstalledPluginsForScope` | `pluginLoader.ts` or `marketplaceManager.ts` | Reads installed_plugins.json for a scope |
| `getAllPlugins` | `pluginLoader.ts` or `AppState` | Returns all loaded plugins |
| `checkExtraDependencies` | New module (dependency resolver) | Validates dependency constraints against installed set |

### From `pluginLoader.ts`
| Symbol | Likely Home | Purpose |
|--------|-------------|---------|
| `loadPluginMonitors` | New module (monitor system) | Loads plugin monitor definitions |
| `installPluginDependencies` | `pluginInstallationHelpers.ts` or new module | Installs plugin deps after cache |
| `isLocalMarketplaceSource` | `schemas.ts` or `marketplaceManager.ts` | Checks if source is directory/file |

---

## Method Notes

- All jac/cos bands estimated from minified-bundle region comparison via `region.json` decl mappings.
- Verbatim files confirmed by cos >= 0.998 with no structural changes in the mapped region.
- Heavy-drift files (`pluginInstallationHelpers.ts`, `pluginLoader.ts`) reconstructed by:
  1. Reading v88 source as baseline.
  2. Comparing v88_min vs v112_min bundle slices for API signature changes.
  3. Inferring control flow from minified variable names and call sequences.
  4. Adding stub implementations for cross-chunk symbols with `TODO(lift)`.
