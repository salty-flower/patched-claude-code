# Lift Notes: Chunk #144 (src/utils/plugins/*)

## Files Lifted (8)

| File | Lines (v88) | Lines (v112) | Drift Level | Key Changes |
|------|-------------|--------------|-------------|-------------|
| marketplaceManager.ts | 2644 | ~2644 | Medium | `skipIfRecent` option; backup-based atomic swap in `cacheMarketplaceFromGit`; `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` env check; `redactHeaders` removed (inline redaction); `removeMarketplaceSource` cleans `.bak` dir |
| mcpPluginIntegration.ts | 635 | 639 | Low | `expandEnvVarsInString` now supports `${VAR:-default}`; error source changed from `plugin:${pluginName}` to `plugin.source`; `loadMcpServersFromMcpb` uses `plugin.repository` directly |
| officialMarketplaceGcs.ts | 217 | 290 | Medium | Backup-based atomic swap with `.backup` dir; rollback/restore logic on rename failure; added `stat` helper; `classifyGcsError` unchanged |
| orphanedPluginFilter.ts | 115 | 118 | Low | Module-level container object for `cachedExclusions`; `replaceAll("\\", "/")` instead of `replace(/\\/g, '/')` |
| parseMarketplaceInput.ts | 163 | 163 | None | Verbatim (jac=1, cos=1) |
| performStartupChecks.tsx | 70 | 70 | None | Verbatim (jac=1, cos=1) |
| pluginAutoupdate.ts | 285 | 284 | Low | `updatePlugin` handles `result.skipped` from `updatePluginOp`; removed intermediate `updatePlugins` wrapper; inline `updatePluginsForMarketplaces` exported directly |
| pluginBlocklist.ts | 128 | 128 | None | Verbatim (jac=1, cos=1) |

---

## Per-File Drift Details

### marketplaceManager.ts

- **jac/cos bands**: Most declarations at jac=1,cos=1 (verbatim). Key drifted boundaries:
  - `refreshMarketplace`: gained `skipIfRecent?: boolean` option in signature; body adds early-return when `skipIfRecent` and recent fetch detected.
  - `cacheMarketplaceFromGit`: complete rewrite of the swap logic. v88 used `rm(installLocation)` then `rename(staging, installLocation)`. v112 uses a backup-based approach: rename old to `.backup`, rename staging to installLocation, then rm backup. On failure, attempts restore from backup. Also checks `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` env var before cleanup.
  - `removeMarketplaceSource`: now also removes `.bak` backup directory alongside the main installLocation.
  - `redactHeaders` function removed entirely; redaction now done inline in the one call site.

### mcpPluginIntegration.ts

- **jac/cos bands**: jac>=0.98 across all declarations, cos>=0.998 for most.
- `resolvePluginMcpEnvironment`: comment updated to mention `${VAR:-default}` support. Error `source` field changed from `` `plugin:${pluginName}` `` to `plugin.source`.
- `loadMcpServersFromMcpb`: `source` assignment simplified from `` `${plugin.name}@${plugin.repository}` `` to `plugin.repository` directly.
- `extractMcpServersFromPlugins`: per-server try/catch around `resolvePluginMcpEnvironment` to prevent one bad config from crashing all plugin MCP loading via `Promise.all`.
- `getPluginMcpServers`: same per-server try/catch pattern added.

### officialMarketplaceGcs.ts

- **jac/cos bands**: jac~0.95 for main function, cos~0.995.
- `fetchOfficialMarketplaceFromGcs`: the atomic swap logic mirrors `marketplaceManager.ts` changes. v88 did `rm(installLocation)` then `rename(staging, installLocation)`. v112 creates `.backup`, moves old install to backup, moves staging to installLocation, then cleans up backup. If final rename fails, attempts restore from backup. Added `stat` helper for the backup-recovery path.
- `classifyGcsError`: unchanged (verbatim).

### orphanedPluginFilter.ts

- **jac/cos bands**: jac=1,cos=1 for most lines; minor drift in string-literal boundary.
- v112 bundles into a larger module (EPK container pattern). The `cachedExclusions` variable is accessed via `EPK.cachedExclusions` in the minified bundle, but source-level change is just a comment noting the module-level container.
- `replaceAll("\\", "/")` replaces `replace(/\\/g, '/')` for Windows path normalization.

### pluginAutoupdate.ts

- **jac/cos bands**: jac=1,cos=1 for most; minor drift in `updatePlugin` and `updatePluginsForMarketplaces`.
- `updatePlugin`: now handles `result.skipped` from `updatePluginOp` (v112 addition). When skipped, logs at info level instead of treating as failure.
- Removed the intermediate `updatePlugins` wrapper function; `updatePluginsForMarketplaces` is now exported directly and called by `autoUpdateMarketplacesAndPluginsInBackground`.

---

## Cross-File Observations

1. **Backup-based atomic swap pattern**: Both `marketplaceManager.ts` (`cacheMarketplaceFromGit`) and `officialMarketplaceGcs.ts` (`fetchOfficialMarketplaceFromGcs`) switched from `rm+rename` to a `rename-to-backup -> rename-staging -> rm-backup` pattern with rollback on failure. This is a v112-wide reliability improvement for marketplace/plugin cache updates.

2. **Per-server error isolation in MCP loading**: Both `extractMcpServersFromPlugins` and `getPluginMcpServers` in `mcpPluginIntegration.ts` now wrap each server's `resolvePluginMcpEnvironment` in try/catch. Prevents one malformed plugin config from crashing all plugin MCP server loading.

3. **`plugin.source` vs `plugin.repository` normalization**: v112 consistently uses `plugin.source` for error reporting and `plugin.repository` for config keys, cleaning up earlier versions' ad-hoc string concatenation.

4. **`updatePluginOp` return type expansion**: `pluginAutoupdate.ts` handles a new `skipped` flag from `updatePluginOp`, suggesting the operations layer gained richer status reporting in v112.

5. **No new imports**: All lifted files use the same import graph as v88; no new dependencies were introduced.

---

## Unresolved Symbols

None. All imports resolve to existing modules in the reconstructed tree:
- `../../services/mcp/*` -> existing in reconstructed v112
- `../../types/plugin.js` -> existing
- `../debug.js`, `../errors.js`, `../fsOperations.js`, `../slowOperations.js` -> existing
- `./mcpbHandler.js`, `./pluginDirectories.js`, `./pluginOptionsStorage.js` -> existing
- `../../services/plugins/pluginOperations.js` -> existing
- `../config.js`, `../ripgrep.js` -> existing
- `./installedPluginsManager.js`, `./marketplaceManager.js`, `./pluginIdentifier.js`, `./schemas.js` -> existing (within same chunk)

All TypeScript types (`LoadedPlugin`, `PluginError`, `McpServerConfig`, `ScopedMcpServerConfig`, `UserConfigSchema`, `UserConfigValues`, `PluginScope`) are imported from known modules.
