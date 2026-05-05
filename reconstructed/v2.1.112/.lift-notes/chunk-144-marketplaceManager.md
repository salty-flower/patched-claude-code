# chunk-144-marketplaceManager.md

## Drift level

Medium. Most declarations are byte-identical (jac=1, cos=1), but several have
structural changes and 4 declarations were removed.

## v112 changes summary

### Removed declarations (v88-only, no v112 match)
1. `clearMarketplacesCache()` — memoization cache clearing helper removed.
2. `loadKnownMarketplacesConfigSafe()` — safe variant removed; callers now use
the throwing variant directly or handle errors locally.
3. `extractSshHost()` — moved to cross-chunk helper (wEK at byte ~5047856).
4. Hoisted var declarations `b18, czY=120000, r0` — minifier no longer hoists
these separately; they remain in the module init.

### Modified declarations
1. **`cacheMarketplaceFromGit`** (major rewrite):
   - Added `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` env check: when set,
     a failed git pull is logged but the existing clone is preserved (no re-clone).
   - Changed stale directory cleanup from `rm` to `rename(cachePath, backupPath)`
     for atomicity. On clone failure, the backup is restored.
   - Added `.bak` directory removal on success and defensive error handling.

2. **`redactHeaders` → `objectFromEntries`** (position replaced):
   - The local `redactHeaders` function was removed; header redaction moved to a
     cross-chunk function (`bPY` at byte ~9451494).
   - A new helper `pe6(q){return Object.fromEntries(q.entries())}` occupies the
     same position. Named `objectFromEntries` in reconstruction with a TODO.

3. **`removeMarketplaceSource`**:
   - Also removes `${cachePath}.bak` backup directory.
   - Settings source iteration now uses cross-chunk `$v` (byte ~9458192) instead
     of hardcoded `['userSettings', 'projectSettings', 'localSettings']`.

4. **`refreshMarketplace`**:
   - Added `skipIfRecent` option (30-second throttle). When set and the
     marketplace was refreshed within 30s, the call returns early.

5. **`gitClone`**:
   - SSH authentication error message now specifically mentions GitHub.

6. **Module init**:
   - Different cross-chunk import set ( GrowthBook, analytics, etc. changed).
   - Added `kc8 = new Map` at end — purpose unknown, marked with TODO.

## Cross-chunk TODOs
- `redactHeaders` at byte ~9451494 (was local, now cross-chunk `bPY`)
- `extractSshHost` at byte ~5047856 (was local, now cross-chunk `wEK`)
- `$v` (settings sources array) at byte ~9458192
- `kc8 = new Map` at byte ~9465756
- `pe6` / `objectFromEntries` name verification at byte ~9445875
