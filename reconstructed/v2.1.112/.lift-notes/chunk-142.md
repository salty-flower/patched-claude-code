# Chunk 142 Lift Notes (v2.1.88 → v2.1.112)

## Files (8)

| File | Drift | Notes |
|------|-------|-------|
| `src/utils/permissions/permissions.ts` | Moderate | Multiple real-drift decls; see details below |
| `src/utils/permissions/permissionsLoader.ts` | Minor | `deletePermissionRuleFromSettings` uses roundtrip normalization |
| `src/utils/permissions/shadowedRuleDetection.ts` | None | Verbatim |
| `src/utils/permissions/shellRuleMatching.ts` | Minor | `matchWildcardPattern` gains `collapseWhitespace` param |
| `src/utils/permissions/yoloClassifier.ts` | Moderate | `buildYoloSystemPrompt` adds PowerShell guidance; sideQuery gets `extraBodyParams` |
| `src/utils/platform.ts` | Minor | Adds `getDarwinMajorVersion` |
| `src/utils/plugins/addDirPluginSettings.ts` | None | Verbatim |
| `src/utils/plugins/cacheUtils.ts` | None | Verbatim |

---

## permissions.ts

### Decl-level drift summary

| v88 decl range | jac | cos | v112 decl | Change |
|---------------|-----|-----|-----------|--------|
| 9794739–9795588 | 0.80 | 0.999 | 9937784–9938795 | `runPermissionRequestHooksForHeadlessAgent`: adds re-validation of hook-rewritten input via `checkRuleBasedPermissions` |
| 9796712–9797525 | 0.875 | 0.998 | 9940122–9940864 | `handleDenialLimitExceeded`: minor telemetry/logging changes |
| 9797525–9799052 | 0.929 | 0.999 | 9940864–9942320 | `hasPermissionsToUseTool`: adds `stripAllBashFlag` telemetry; REPL_TOOL_NAME removed from acceptEdits fast-path exclusion (now only AGENT_TOOL_NAME); transcriptTooLong for Bash returns allow |
| 9799806–9800251 | 0.70 | 0.992 | 9943074–9943420 | `checkRuleBasedPermissions`: extracted `isAskRuleDecision` and `isSafetyCheckDecision` helpers |
| 9800321–9806435 | 0.958 | 1.0 | 9943691–9949942 | `hasPermissionsToUseToolInner`: minor changes |

### Key semantic changes

1. **Hook-rewritten input re-validation** (`runPermissionRequestHooksForHeadlessAgent`):
   - When a PermissionRequest hook returns `allow` with `updatedInput`, v112 re-runs `checkRuleBasedPermissions` on the rewritten input.
   - If the rewritten input triggers an ask/deny rule, the hook's allow is converted to deny with an explanatory reason.

2. **acceptEdits fast-path** (`hasPermissionsToUseTool`):
   - v88 excluded both `AGENT_TOOL_NAME` and `REPL_TOOL_NAME` from the acceptEdits fast-path.
   - v112 only excludes `AGENT_TOOL_NAME`. REPL now flows through the acceptEdits check.

3. **transcriptTooLong for Bash** (`hasPermissionsToUseTool`):
   - When the classifier hits transcriptTooLong, v112 allows Bash tool to proceed (returns `{behavior: 'allow', mode: 'auto'}`) instead of falling back to prompting.
   - Other tools still fall back to prompting or deny in headless mode.

4. **Telemetry additions**:
   - `stripAllBashFlag`: logs the value of `tengu_bash_allowlist_strip_all` GrowthBook flag.
   - `originalDecisionReasonType`: logs the pre-classifier decision reason type.

5. **Helper extraction** (`checkRuleBasedPermissions`):
   - Inline checks for ask-rule and safety-check decisions extracted to `isAskRuleDecision()` and `isSafetyCheckDecision()` type guards.

---

## permissionsLoader.ts

### Decl-level drift

| v88 decl range | jac | cos | v112 decl | Change |
|---------------|-----|-----|-----------|--------|
| 6374728–6374861 | 0.40 | 0.982 | 4499188–4499273 | `deletePermissionRuleFromSettings`: uses `I9`/`h2` roundtrip instead of `permissionRuleValueToString`/`permissionRuleValueFromString` |

The semantic is identical — both normalize legacy tool names via parse→serialize roundtrip. The minified uses shorter helper names in v112.

---

## shellRuleMatching.ts

### Decl-level drift

| v88 decl range | jac | cos | v112 decl | Change |
|---------------|-----|-----|-----------|--------|
| 6379016–6379504 | 0.833 | 0.999 | 4863136–4863692 | `matchWildcardPattern`: gains `collapseWhitespace` (4th) param |

### Key semantic changes

- `matchWildcardPattern` now accepts a 4th parameter `collapseWhitespace = false`.
- When true, multiple whitespace characters (space/tab) in both pattern and command are collapsed to a single space before matching.
- This aligns wildcard matching with the behavior expected by some shell command normalizers.

---

## yoloClassifier.ts

### Decl-level drift summary

| v88 decl range | jac | cos | v112 decl | Change |
|---------------|-----|-----|-----------|--------|
| 6978306–6978681 | 0.60 | 0.998 | 8368516–8369106 | `buildYoloSystemPrompt`: adds PowerShell deny guidance |
| 6970528–6973862 | 0.985 | 1.0 | 8360233–8363618 | `classifyYoloActionXml`: adds `extraBodyParams: getExtraBodyParams()` to sideQuery calls |
| 6973862–6977508 | 0.988 | 1.0 | 8363618–8367285 | `classifyYoloAction`: adds `extraBodyParams: getExtraBodyParams()` to sideQuery calls |

### Key semantic changes

1. **PowerShell auto mode guidance** (`buildYoloSystemPrompt`):
   - When `POWERSHELL_AUTO_MODE` feature is on and using internal (non-external) permissions, appends `POWERSHELL_DENY_GUIDANCE` to the deny list.
   - This teaches the classifier to recognize PowerShell-specific dangerous patterns (iex/iwr, Remove-Item -Recurse, $PROFILE modification, etc.).

2. **Extra body params** (`classifyYoloActionXml` / `classifyYoloAction`):
   - Both sideQuery calls now include `extraBodyParams: getExtraBodyParams()`.
   - The exact implementation of `getExtraBodyParams` is not visible in the slice; it likely returns ant-specific request parameters.
   - Added as `// TODO(lift)` in the reconstructed file.

3. **Stage 1 suffix change** (in module-level constants):
   - v88: `XML_S1_SUFFIX = "\nErr on the side of blocking. <block> immediately."`
   - v112: Same text but the minified shows a slightly different constant arrangement. The semantic is unchanged.

4. **Excluded tool set** (`buildTranscriptEntries`):
   - v112 adds a `KqY` Set of excluded tool names (minified: `new Set([xq,a5,T9,dC6,Zj,py6,D2K])`).
   - These tools are skipped when building transcript entries for the classifier.
   - Added as `// TODO(lift)` in the reconstructed file since the exact tool names are minified.

---

## platform.ts

### Decl-level drift

| v88 decl range | jac | cos | v112 decl | Change |
|---------------|-----|-----|-----------|--------|
| 909488–910617 | 1.0 | 0.998 | 881950–883208 | Main module body: adds `getDarwinMajorVersion` |

### Key semantic changes

- Added `getDarwinMajorVersion()` memoized function that returns the macOS major version number (e.g., 15 for macOS 15.x Sequoia).
- Computes `parseInt(osRelease().match(/^(\d+)\./)[1], 10) - 9`.
- Returns `undefined` on non-macOS platforms.

---

## shadowedRuleDetection.ts

- All declarations: jac=1, cos=1 — verbatim copy from v88.

---

## addDirPluginSettings.ts

- All declarations: jac=1, cos=1 — verbatim copy from v88.

---

## cacheUtils.ts

- All declarations: jac=1, cos=1 — verbatim copy from v88.

---

## TODOs

- `yoloClassifier.ts` line ~1486: `getExtraBodyParams()` — implementation not visible in slice, returns ant-specific sideQuery extra params.
- `yoloClassifier.ts` module-level `KqY` Set — excluded tool names for transcript building, exact names minified.
