# Chunk 10 Lift Notes — src/commands/insights.ts

## File
- **src**: `src/commands/insights.ts`
- **Status**: Reconstructed with v112 semantic changes

## Region Matching Summary

| v88 Decl Range | jac | cos | v112 Match | Action |
|---|---|---|---|---|
| 11210493-11210634 | 0.833 | 1 | 11551138-11551315 | Reconstructed (import block changed) |
| 11210778-11210805 | — | — | no match | Removed: `getAnalysisModel()` wrapper |
| 11210805-11210832 | — | — | no match | Removed: `getInsightsModel()` wrapper |
| 11210832-11210876 | 1 | 1 | 11551514-11551559 | Verbatim (getDataDir) |
| 11210876-11210917 | 1 | 1 | 11551559-11551601 | Verbatim (getFacetsDir) |
| 11210917-11210964 | 1 | 1 | 11551601-11551649 | Verbatim (getSessionMetaDir) |
| 11210964-11211027 | 1 | 1 | 11551649-11551712 | Verbatim (getLanguageFromPath) |
| 11211027-11213414 | 1 | 1 | 11551712-11554099 | Verbatim (extractToolStats) |
| 11213414-11213508 | 1 | 1 | 11554099-11554193 | Verbatim (hasValidDates) |
| 11213508-11214660 | 1 | 1 | 11554193-11555345 | Verbatim (logToSessionMeta) |
| 11214660-11214937 | 1 | 1 | 11555345-11555622 | Verbatim (deduplicateSessionBranches) |
| 11214937-11215661 | 1 | 1 | 11555622-11556346 | Verbatim (formatTranscriptForFacets) |
| 11215661-11216002 | 1 | 1 | 11556346-11556687 | Verbatim (summarizeTranscriptChunk) |
| 11216002-11216394 | 1 | 1 | 11556687-11557079 | Verbatim (formatTranscriptWithSummarization) |
| 11216394-11216570 | 1 | 1 | 11557079-11557256 | Verbatim (loadCachedFacets) |
| 11216570-11216728 | 1 | 1 | 11557256-11557415 | Verbatim (saveFacets) |
| 11216728-11216852 | 1 | 1 | 11557415-11557540 | Verbatim (loadCachedSessionMeta) |
| 11216852-11217010 | 1 | 1 | 11557256-11557415 | Verbatim (saveSessionMeta) |
| 11217010-11218369 | 1 | 1 | 11557688-11559047 | Verbatim (extractFacetsFromAPI) |
| 11218369-11219174 | 1 | 1 | 11559047-11559852 | Verbatim (detectMultiClauding) |
| 11219174-11222325 | 1 | 1 | 11559852-11562968 | Verbatim (aggregateData) |
| 11222325-11222882 | 1 | 1 | 11562968-11563525 | Verbatim (generateSectionInsight) |
| 11222882-11226668 | 1 | 1 | 11563525-11567311 | Verbatim (generateParallelInsights) |
| 11226668-11226745 | 1 | 1 | 11567311-11567388 | Verbatim (escapeHtmlWithBold) |
| 11226745-11227338 | 0.9 | 1 | 11567388-11567984 | Reconstructed (generateBarChart: replaceAll) |
| 11227338-11228188 | 1 | 1 | 11567984-11568834 | Verbatim (generateResponseTimeHistogram) |
| 11228188-11228940 | 1 | 1 | 11568834-11569586 | Verbatim (generateTimeOfDayChart) |
| 11228940-11229010 | — | — | no match | Removed: safeKeys function |
| 11229010-11269601 | 0.993 | 1 | 11569656-11610294 | Reconstructed (generateHtmlReport: replaceAll, empty arrays) |
| 11269601-11270705 | 1 | 1 | 11610294-11611399 | Verbatim (buildExportData) |
| 11270705-11271076 | 1 | 1 | 11611399-11611771 | Verbatim (scanAllSessions) |
| 11271076-11273346 | 1 | 1 | 11611771-11614042 | Verbatim (generateUsageReport body) |
| 11273346-11273392 | 1 | 1 | 11614042-11614088 | Verbatim (safeEntries) |
| 11273392-11273435 | — | — | no match | Removed: safeKeys |
| 11273435-11273809 | 1 | 1 | 11614752-11615126 | Verbatim (isValidSessionFacets) |
| 11273809-11275285 | 1 | 1 | 11615126-11616602 | Verbatim (command definition header) |
| 11275285-11284855 | 0.933 | 0.998 | 11616602-11625805 | Reconstructed (getPromptForCommand: simplified) |

## Key v112 Semantic Changes

1. **Removed remote host collection** (~185 lines): All `getRunningRemoteHosts`, `getRemoteHostSessionCount`, `collectFromRemoteHost`, `collectAllRemoteHostData` functions removed. `generateUsageReport` no longer handles remote collection.

2. **Removed model wrapper functions**: `getAnalysisModel()` and `getInsightsModel()` inlined to direct `getDefaultOpusModel()` calls.

3. **New import**: `buildInsightsResponsePrompt` extracted to external module. Added TODO marker for unresolved import path.

4. **Simplified command definition**: `getPromptForCommand` in v112:
   - No `--homespaces` flag parsing
   - No S3 upload via `ff cp`
   - No `process.env.USER_TYPE === 'ant'` branching
   - Delegates prompt text construction to `buildInsightsResponsePrompt()`

5. **Removed ant-only insight sections**: `cc_team_improvements` and `model_behavior_improvements` removed from `INSIGHT_SECTIONS` (replaced with `...[]`). Corresponding types removed from `InsightResults`.

6. **Team feedback always empty**: `generateHtmlReport` still has team feedback HTML structure but `ccImprovements` and `modelImprovements` are always empty arrays.

7. **Modernized string methods**: `replace(/_/g, ' ')` → `replaceAll('_', ' ')`; `replace(/\n/g, '<br>')` → `replaceAll('\n', '<br>')`.

8. **Timezone handler hardened**: Added `isNaN(parsed)` guard with explicit radix `10` for `parseInt`.

9. **Removed `safeKeys` function**: Replaced with direct `Object.keys()` call in `isMinimalSession`.

10. **`RemoteHostInfo` type**: No longer defined at module level; kept inline in `buildExportData` signature for compatibility.

## TODOs
- `// TODO(lift): buildInsightsResponsePrompt import path at byte ~11551138` — v112 imports this from another module; exact path unknown.
- `// TODO(lift): RemoteHostInfo type removed from v112; kept for buildExportData compat at byte ~11616602` — type was moved or inlined elsewhere.
