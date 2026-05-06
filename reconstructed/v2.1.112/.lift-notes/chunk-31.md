# Chunk 31 Lift Notes — v2.1.88 → v2.1.112

## src/components/Messages.tsx

### Region Matching Summary

| v88 Decl Range | jac | cos | v112 Match | Action |
|---|---|---|---|---|
| 10542039-10542160 | — | — | no match | Removed: import/feature preamble (reordered in v112) |
| 10542160-10542717 | 1 | 0.999 | 11063293-11063882 | Verbatim (filterForBriefTool with minor origin check additions) |
| 10542717-10543106 | 1 | 1 | 11063882-11064271 | Verbatim (dropTextInBriefTurns) |
| 10543106-10543391 | 1 | 0.999 | 11064319-11064613 | Reconstructed (computeSliceStart: idx fast-path) |
| 10543391-10543472 | 1 | 1 | 11064613-11064694 | Verbatim (Props type, expanded) |
| 10543472-10543564 | — | — | no match | Removed: constant declarations reordered |
| 10543564-10544163 | 1 | 1 | 11065225-11065824 | Reconstructed (MessagesImpl body: significant v112 drift) |
| 10544163-10550471 | 0.937 | 1 | 11065824-11072928 | Reconstructed (main component body: row-based cap, dual anchors, brief stats) |
| 10550471-10551887 | 1 | 1 | 11072928-11074353 | Reconstructed (render section + shouldRenderStatically) |

### Key v112 Semantic Changes

1. **filterForBriefTool origin checks**: v112 adds `isMatchingOrigin()` (GP6 in minified) checks for user messages and attachments, allowing meta messages with matching origin to pass through.

2. **computeSliceStart fast-path**: v112 checks `collapsed[anchor.idx]?.uuid === anchor.uuid` before falling back to `findIndex`, optimizing the common case where the anchor hasn't shifted.

3. **New `showThinkingHint` prop**: Added to Props type. Renders a `ShowThinkingHint` component (JcK in minified) when true.

4. **Row-based render cap**: v112 replaces constant `MAX_MESSAGES_WITHOUT_VIRTUALIZATION=200` with `jQY(rows)` — a function of terminal rows. Exact formula not recovered.

5. **Dual anchor refs**: v112 uses two refs (`$6` for input messages, `H6` for collapsed) instead of v88's single `sliceAnchorRef`. The collapsed anchor is used for the render cap slice.

6. **Streaming tool use deduplication**: v112 adds a `seen` Set to deduplicate streaming tool uses by `contentBlock.id`, preventing duplicate synthetic messages.

7. **Brief transcript tool stats**: v112 adds `rRK` overlay for brief transcript mode when `briefTranscript` state is true and not in transcript mode. Injects tool stats from Redux store tasks.

8. **hiddenMessageCount bugfix**: v112 computes from `messagesToShowNotTruncated.length` instead of `briefFiltered.length`, fixing an undercount when brief filtering is active.

9. **isResultTruncated columns arg**: v112 passes `{ columns: columnsRef.current }` to `tool.isResultTruncated()`, adding a context parameter.

10. **isBriefOnly guards on streaming**: v112 adds `!isBriefOnly` checks before rendering `streamingText` and `streamingThinking` blocks.

11. **Null memo workaround**: v112 includes `zz.useMemo(()=>null,[q,!1])` and `zz.useMemo(()=>null,[Z8,i])` — likely React Compiler workarounds or unused variable suppression.

### TODOs
- `// TODO(lift): isMatchingOrigin — GP6 predicate semantics not recovered`
- `// TODO(lift): jQY(rows) row-based cap formula not recovered`
- `// TODO(lift): rRK brief transcript stats overlay not recovered`
- `// TODO(lift): JcK / ShowThinkingHint component not recovered`
- `// TODO(lift): M8 briefTranscript store selector — verify import`
- `// TODO(lift): H9() store hook — likely useStore()`
- `// TODO(lift): feature() import pattern changed in v112`

---

## src/components/ModelPicker.tsx

### Region Matching Summary

| v88 Decl Range | jac | cos | v112 Match | Action |
|---|---|---|---|---|
| 9960691-9960718 | — | — | no match | Removed: import preamble (reordered) |
| 9960718-9966063 | 0.829 | 1 | 10163616-10169314 | Reconstructed (ModelPicker: xhigh effort, opus-4-7 pinning) |
| 9966063-9966079 | — | — | no match | Removed: _temp4 reordered |
| 9966079-9966141 | — | — | no match | Removed: _temp3 reordered |
| 9966141-9966178 | 1 | 1 | 10169477-10169514 | Verbatim (_temp2) |
| 9966178-9966220 | 1 | 1 | 10169514-10169556 | Verbatim (_temp) |
| 9966220-9966275 | — | — | no match | Removed: resolveOptionModel reordered |
| 9966275-9966502 | 1 | 1 | 10169611-10169837 | Verbatim (EffortLevelIndicator) |
| 9966502-9966707 | 0.833 | 0.987 | 10169837-10170056 | Reconstructed (cycleEffortLevel: xhigh support) |
| 9966707-9966783 | 1 | 0.98 | 4723658-4723713 | Near-verbatim (getDefaultEffortLevelForOption) |
| 9966783-9966818 | 1 | 1 | 10170110-10170145 | Verbatim (var initializer) |
| 9966818-9966957 | — | — | no match | Removed: module init reordered |

### Key v112 Semantic Changes

1. **xhigh effort level**: New effort level `'xhigh'` added between `'high'` and `'max'`. `cycleEffortLevel` now takes 4 args (`includeMax`, `includeXhigh`).

2. **modelSupportsXhighEffort**: New import from effort utils. Checked alongside `modelSupportsMaxEffort`.

3. **Opus-4-7 launch pinning**: When the focused model is `opus-4-7` and the user hasn't toggled effort or unpinned via config, effort is pinned to `'xhigh'`.

4. **unpinOpus47LaunchEffort config**: v112 checks `getGlobalConfig().unpinOpus47LaunchEffort` to disable the pinning behavior.

5. **Conditional settings write**: v112 only writes effort to userSettings when `hasToggledEffort` is true (was unconditional in v88). This prevents persisting the pinned xhigh default.

6. **Display effort clamping**: v112 clamps `effort === 'xhigh'` to `'high'` when the focused model doesn't support xhigh, mirroring the existing max→high clamp.

7. **KeyboardShortcutHint chord prop**: v112 uses `chord={['left','right']}` with `format={{arrowSep:' '}}` instead of the literal `← →` text.

### TODOs
- `// TODO(lift): getGlobalConfig() import path — verify from '../utils/config.js'`
- `// TODO(lift): modelSupportsXhighEffort import — verify from '../utils/effort.js'`
