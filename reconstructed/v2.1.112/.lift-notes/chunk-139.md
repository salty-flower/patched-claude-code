# Chunk #139 Lift Notes (v2.1.88 → v2.1.112)

## Files (17)

| # | File | Drift | Notes |
|---|------|-------|-------|
| 1 | `src/utils/messages/mappers.ts` | tight (jac=1,cos=1 for most) | Added `post_tokens`/`postTokens` + `duration_ms`/`durationMs` fields to `toSDKCompactMetadata`/`fromSDKCompactMetadata`. v112 minified shows `...q.postTokens!==void 0&&{post_tokens:q.postTokens}` etc. |
| 2 | `src/utils/messages/systemInit.ts` | tight (jac=0.846,cos=0.998) | Added `plugin_errors` field when pluginErrors.length > 0. Added `memory_paths` with auto/team paths when `x3()` (UDS_INBOX feature). v112 minified shows `...q.pluginErrors.length>0&&{plugin_errors:q.pluginErrors.map(...)}` and `z.memory_paths={auto:Nw()}` block. |
| 3 | `src/utils/model/check1mAccess.ts` | verbatim (jac=1,cos=1) | No structural changes. |
| 4 | `src/utils/model/configs.ts` | real (jac=0.82,cos=0.996) | **Added `CLAUDE_OPUS_4_7_CONFIG`** with new provider fields `anthropicAws` and `mantle`. Updated `ALL_MODEL_CONFIGS` to include `opus47`. Added `B2O`/`OMq` runtime arrays. |
| 5 | `src/utils/model/contextWindowUpgradeCheck.ts` | verbatim (jac=1,cos=1) | No structural changes. |
| 6 | `src/utils/model/deprecation.ts` | real (jac=0.444,cos=0.975 for warning fn) | `getModelDeprecationWarning` now checks if retirement date is past and uses "was retired on" vs "will be retired on". Added `anthropicAws: null, mantle: null` to all deprecation entries. |
| 7 | `src/utils/model/model.ts` | real (multiple bands) | **Added `opus47` support** throughout: `isNonCustomOpusModel`, `firstPartyNameToCanonical`, `getPublicModelDisplayName`, `getMarketingNameForModel`, `parseUserSpecifiedModel`. `getDefaultOpusModel` now returns `opus47` for firstParty. `getDefaultMainLoopModelSetting` simplified (removed ant branch). `renderModelName` simplified (removed ant codename masking). `resolveSkillModelOverride` added. `getResumeCompactModel` added (unresolved). |
| 8 | `src/utils/model/modelAllowlist.ts` | real (jac=0.75,cos=0.97) | `isModelAllowed` moved to different chunk in v112 (byte 3476261). Added `mgq` helper for additional model options cache lookup. |
| 9 | `src/utils/model/modelCapabilities.ts` | verbatim (jac=1,cos=1) | No structural changes. `getModelCapability` and `refreshModelCapabilities` unchanged. |
| 10 | `src/utils/model/modelOptions.ts` | real (multiple bands) | **Major restructuring**: v112 reorganized `getModelOptionsBase` into `L7Y` with flattened tier logic. Added `Opus 4.7` options (`pvK`, `IvK`). `getOpus46Option` renamed to `uvK` with label "Opus 4.6" (not "Opus"). `getMergedOpus1MOption` (`ne1`) now has explicit `descriptionForModel`. Custom model handling in `q_6`/`BK6` now routes `opus` → `pvK` and `opus[1m]` → `V37`/`IvK` for 1P. |
| 11 | `src/utils/model/modelStrings.ts` | tight | `getModelStrings`/`initModelStrings`/`ensureModelStringsInitialized` unchanged. v112 minified shows same structure with renamed minified identifiers. |
| 12 | `src/utils/model/modelSupportOverrides.ts` | real (jac=0.769,cos=0.999) | **Added 4th tier** for `ANTHROPIC_CUSTOM_MODEL_OPTION` + `ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES`. |
| 13 | `src/utils/model/providers.ts` | real (jac=0.636,cos=0.999) | **Added `anthropicAws` and `mantle` providers**. `getAPIProvider` now checks `CLAUDE_CODE_USE_ANTHROPIC_AWS` and `CLAUDE_CODE_USE_MANTLE` before vertex. `APIProvider` type expanded. |
| 14 | `src/utils/model/validateModel.ts` | real (jac=0.688,cos=0.999) | `get3PFallbackSuggestion` now includes `opus-4-7`/`opus_4_7` → `opus41` fallback. `validateModel` unchanged structurally. |
| 15 | `src/utils/modelCost.ts` | real (jac=0.667,cos=0.997) | **Added `CLAUDE_OPUS_4_7_CONFIG` import and cost entry** (`COST_TIER_5_25`). `getModelCosts` now checks both opus 4.6 and 4.7 for fast mode. Added fallback to `additionalModelCostsCache` for unknown models. |
| 16 | `src/utils/modifiers.ts` | verbatim (jac=1,cos=1) | No structural changes. |
| 17 | `src/utils/nativeInstaller/download.ts` | tight (jac=0.875-1,cos=0.995-1) | `getLatestVersion` now accepts `'rc'` channel but throws error for it. Otherwise unchanged. |

## Unresolved Symbols (TODOs)

- `model.ts`: `getAntModelOverrideConfig` (~2451601), `resolveAntModel` (~2452530), `getResumeCompactModel` (~2452855)
- `modelOptions.ts`: `getAntModels` (~3727255), `trackModelOptionSelected` (~9157278)

## Key Version Differences

1. **Opus 4.7**: New model `claude-opus-4-7` added across configs, model strings, costs, options, marketing names, and fallback suggestions.
2. **New providers**: `anthropicAws` and `mantle` added to `APIProvider` and all `ModelConfig` entries.
3. **Model options restructured**: v112 flattened the tiered option builder and added explicit Opus 4.7 entries.
4. **Deprecation messages**: Now past-aware ("was retired on" vs "will be retired on").
5. **modelSupportOverrides**: Added custom model option capability override tier.
6. **modelCost**: Added `additionalModelCostsCache` fallback for unknown models.
