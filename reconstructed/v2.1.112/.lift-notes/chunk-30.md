# Chunk 30 Lift Notes

## Files
- `src/components/MessageSelector.tsx`
- `src/components/MessageTimestamp.tsx`

## MessageTimestamp.tsx
- **Status**: verbatim lift (jac=1, cos=1)
- No structural changes between v88 and v112.
- Minified names differ (`vUY` vs `_temp`, `a27.default` vs `W57.default`) but source is identical.

## MessageSelector.tsx
- **Status**: diff-and-patch (most decls jac=1, cos=1; main component jac=0.946; UserMessageOption jac=0.96; selectableUserMessagesFilter jac=0.909)

### Changes from v88 to v112

1. **Removed `summarize_up_to` option from UI** (`getRestoreOptions`):
   - v88 had `"external" === 'ant'` conditional that added `summarize_up_to` option (always false in production).
   - v112 removed this dead conditional entirely. The option is no longer presented.
   - The handler (`onSelectRestoreOption`) still contains the dead `summarize_up_to` branch — this is retained in reconstruction as it exists in v112 minified.

2. **Use `.at(-1)` instead of `[length - 1]`** (two locations):
   - `UserMessageOption`: `content[content.length - 1]` → `content.at(-1)`
   - `selectableUserMessagesFilter`: same change
   - This also removes `lastBlock` as a separate React compiler cache dependency in `UserMessageOption` (v88: _c(31), v112: _c(30)).

3. **Minor style differences** (no semantic change):
   - `void Promise.all(...)` → `Promise.all(...)` in `loadFileHistoryMetadata` (removed unnecessary `void`)

### Unresolved symbols / TODOs
- `be` in v112 minified (`if(!(t instanceof be))`) — likely `AbortError` or similar error class used in the summarize handler. Not defined in this file; imported from elsewhere. Left as-is in reconstruction since the source pattern is `catch (error) { ... }` and the `instanceof` check is compiler-generated.
- `z1` in v112 minified (used as `l1.createElement(z1, null, ...)` for Fragment shorthand) — corresponds to `React.Fragment`. The v88 source uses `<>`/`</>` fragments; the minified uses `z1` which is `React.Fragment`. No source-level change needed.

### Decls with no v112 match
- v88 decl `[11737826,11737842]` and `[11737842,11737973]`: module-level variable declarations (`var S1,s2,Lz7=7;` and `var Md8=y(()=>{...});`). These are bundle setup code that moved/deduplicated in v112. Not part of source-level reconstruction.
