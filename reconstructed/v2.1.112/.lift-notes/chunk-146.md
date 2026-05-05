# Chunk 146 Lift Notes

## Files

- `src/utils/plugins/refresh.ts`
- `src/utils/plugins/schemas.ts`
- `src/utils/plugins/validatePlugin.ts`
- `src/utils/plugins/walkPluginMarkdown.ts`
- `src/utils/plugins/zipCacheAdapters.ts`

---

## refresh.ts

**Drift band**: jac=1, cos=1 (verbatim) for all 3 main decls.

**Key semantic change**: v112 adds `pluginRefreshEmitter.emit()` call at the end of `refreshActivePlugins`, just before the debug log and return statement. This emits a plugin refresh event so downstream subscribers (e.g., monitor arming) can react to the updated plugin state.

**Reconstruction**: Copied v88 source verbatim, added `import { pluginRefreshEmitter } from './pluginRefreshEmitter.js'` (marked with `// TODO(lift)` for unresolved cross-chunk symbol) and inserted the `.emit()` call.

---

## schemas.ts

**Drift band**: Mostly jac=1, cos=1. One decl jac=0.833, cos=0.998 (tight drift: `validateOfficialNameSource`). Large schema decl jac=0.905, cos=1 (tight drift — new fields added).

**Key semantic changes**:

1. **`validateOfficialNameSource`** (v112 `Tg7`):
   - GitHub source validation now also checks `repo.split('/').includes('..')` to catch path traversal in owner/repo strings.
   - Git URL source validation now delegates to new `isOfficialGitUrl()` helper instead of inline string matching.

2. **New `isOfficialGitUrl()` helper**: Validates URL scheme against `ALLOWED_GIT_URL_SCHEMES` Set (new in v112), then checks hostname/path. Falls back to SSH-style matching for non-parseable URLs.

3. **New `ALLOWED_GIT_URL_SCHEMES` Set**: `['https:', 'http:', 'git:', 'git+https:', 'git+http:', 'git+ssh:', 'ssh:']` — prevents arbitrary protocol injection.

4. **New monitor schemas** (v112 `wi5`, `XO1`, `$i5`):
   - `PluginManifestMonitorSchema`: strict object with `name`, `command`, `description`, `when` fields.
   - `PluginMonitorsArraySchema`: array with unique-name validation via `refine`.
   - `PluginManifestMonitorsSchema`: `monitors` field accepting either a JSON path or inline array.
   - These are merged into `PluginManifestSchema` via `...PluginManifestMonitorsSchema().partial().shape`.

5. **`PluginSourceSchema` npm package**: v112 adds a `.refine()` with URL pattern check (`/^(?:file|https?|git(?:\+https?|\+ssh)?|ssh|github|gitlab|bitbucket):/i`) or `!s.includes('..')` for non-matching strings.

6. **`InstalledPluginSchema`**: v112 adds `resolvedVersion` field (optional string) — tag-derived semver used by verifyAndDemote.

7. **`PluginInstallationEntrySchema`**: v112 adds `resolvedVersion` field.

8. **`PluginManifestSettingsSchema` description**: v88 says "Only allowlisted keys are kept (currently: agent)"; v112 says "Only keys in PLUGIN_SETTINGS_KEYS (pluginSettingsKeys.ts) are kept".

**Reconstruction**: Applied all semantic changes inline, preserving v88 structure.

---

## validatePlugin.ts

**Drift band**: jac=0.96–1, cos=0.998–1 (tight drift across all decls).

**Key semantic changes**:

1. **New `parsePluginCommand()` exported function** (v112 `WFK`):
   - Replaces the implicit command parsing that was likely inline elsewhere.
   - v112 simplifies `@` handling: uses `split('@')` instead of `lastIndexOf('@')` for parsing `plugin@marketplace`.
   - Handles `install` with URL/file path detection, `marketplace` subcommands, `validate` with path, etc.

2. **`validateMarketplaceManifest` version cross-check** (v112 `Pw7`):
   - v88 silently `continue`s on any read/parse error during plugin.json version cross-check.
   - v112 distinguishes `ENOENT`/`ENOTDIR` (expected, skip) from other errors and surfaces them as warnings with readable messages.
   - Also catches JSON parse errors in the cross-check path and surfaces as warnings.

3. **`validateManifest` directory validation** (v112 `ci8`):
   - v88 only checked `errors[0]?.code !== 'ENOENT'` when deciding whether to fall through.
   - v112 also checks for `'ENOTDIR'` to handle cases where `.claude-plugin` exists but is not a directory.

**Reconstruction**: Added `parsePluginCommand()` with full v112 semantics. Updated version cross-check error handling. Updated directory validation fall-through logic.

---

## walkPluginMarkdown.ts

**Drift band**: jac=1, cos=1 (verbatim).

**Reconstruction**: Copied v88 source verbatim. Unmatched boundary decls are just var hoisting artifacts.

---

## zipCacheAdapters.ts

**Drift band**: jac=1, cos=1 (verbatim) for all substantive decls.

**Reconstruction**: Copied v88 source verbatim. Unmatched boundary decls are var hoisting / IIFE artifacts.

---

## Cross-file observations

- **Monitors feature**: schemas.ts adds monitor manifest schemas; refresh.ts adds `pluginRefreshEmitter.emit()`. These are likely connected — monitors arm after plugin refresh.
- **`resolvedVersion`**: Added to both `InstalledPluginSchema` and `PluginInstallationEntrySchema`, indicating v112 tracks tag-derived semver separately from manifest version for better demotion logic.
- **Security hardening**: `validateOfficialNameSource` gains path-traversal checks and URL scheme allowlisting. `PluginSourceSchema` npm package gains `..` rejection.
- **Error resilience**: `validatePlugin.ts` marketplace version cross-check now surfaces non-ENOENT errors as warnings rather than silently swallowing them.

---

## Unresolved symbols

| Symbol | File | Byte offset | Context |
|--------|------|-------------|---------|
| `To8` / `pluginRefreshEmitter` | refresh.ts | ~11417 | Event emitter imported from `./pluginRefreshEmitter.js` — not in this chunk. |
| `on5` | schemas.ts | ~10141 | `isOfficialGitUrl` helper — resolved inline in reconstructed source. |
