# Chunk #28 — UI components (miscellaneous)

**Files lifted:** 17
**Strategy:** v88_src.tsx copied as baseline; verbatim for cos=1.0 declarations,
targeted edits for drifted declarations (cos < 1.0). All files are React
components or component utilities. Most drift is additive (new props, new
effects, new helper functions) rather than structural rewrites.

## Per-file notes

### src/components/AnimatedAsterisk.tsx
- **Alignment:** cos=1.0 (verbatim)
- **Lift method:** Copied verbatim from v88. No drift.

### src/components/AnimatedClawd.tsx
- **Alignment:** cos=0.999 (minor drift)
- **v112 changes:**
  - New props: `autoplay?: boolean`, `sequence?: string`, `onComplete?: () => void`
  - New `CELEBRATE` animation sequence added to `Sequence` union type
  - New `AUTOPLAY_SEQUENCES` record mapping sequence names to their frame arrays
  - `useClawdAnimation` hook signature expanded to accept `autoplay`, `sequence`, `onComplete`
  - Hook body updated to handle autoplay logic and sequence selection
- **Lift method:** Copied v88 source; added new props and `AUTOPLAY_SEQUENCES`; updated hook signature and body.

### src/components/CondensedLogo.tsx
- **Alignment:** cos=0.999 (minor drift)
- **v112 changes:**
  - Added 4 new `useEffect` slots for additional upsell components (beyond v88's GuestPassesUpsell and OverageCreditUpsell)
  - Added `tuiJustSwitched` environment check (`process.env.TUI_JUST_SWITCHED`)
  - React Compiler cache size expanded from `_c(29)` to `_c(55)` to accommodate new effect slots and conditional rendering branches
  - TODO placeholders for unlifted upsell components
- **Lift method:** Copied v88 source; expanded effect slots and cache size; added TODO markers for unresolved upsell symbols.

### src/components/EmergencyTip.tsx
- **Alignment:** cos=1.0 (verbatim)
- **Lift method:** Copied verbatim from v88. No drift.

### src/components/FeedColumn.tsx
- **Alignment:** cos=1.0 (verbatim)
- **Lift method:** Copied verbatim from v88. No drift.

### src/components/GuestPassesUpsell.tsx
- **Alignment:** cos=1.0 (verbatim)
- **Lift method:** Copied verbatim from v88. No drift.

### src/components/OverageCreditUpsell.tsx
- **Alignment:** cos=1.0 (verbatim)
- **Lift method:** Copied verbatim from v88. No drift.

### src/components/VoiceModeNotice.tsx
- **Alignment:** cos=0.994 (drifted)
- **v112 changes:**
  - Removed `feature("VOICE_MODE")` gate — voice mode is now unconditionally available
  - Replaced `AnimatedAsterisk` spinner component with inline `SPINNER_FRAMES` array (`['◐', '◓', '◑', '◒']`) and `setInterval`-based rotation
  - Changed dialog color from "info" to "warning"
  - Simplified imports (removed `AnimatedAsterisk` import)
- **Lift method:** Copied v88 source; removed feature gate; replaced spinner with inline interval-based animation; updated color prop.

### src/components/feedConfigs.tsx
- **Alignment:** cos=1.0 (verbatim)
- **Lift method:** Copied verbatim from v88. No drift.

### src/components/LspRecommendation/LspRecommendationMenu.tsx
- **Alignment:** cos=0.933 (drifted — React Compiler Runtime added)
- **v112 changes:**
  - Full React Compiler Runtime memoization added (`_c(36)` cache slots)
  - Restructured with labeled switch blocks (`q: switch`)
  - All JSX nodes and callbacks memoized with cache slot checks
  - No semantic changes to props or behavior
- **Lift method:** Copied v88 source; applied React Compiler Runtime pattern throughout.

### src/components/MCPServerApprovalDialog.tsx
- **Alignment:** cos=1.0 (verbatim)
- **Lift method:** Copied verbatim from v88. No drift.

### src/components/MCPServerDesktopImportDialog.tsx
- **Alignment:** cos=1.0 (verbatim)
- **v112 changes:**
  - Added explicit type parameter to `useState`: `useState<Record<string, ScopedMcpServerConfig>>`
- **Lift method:** Copied v88 source; added type parameter to `useState` call.

### src/components/MCPServerDialogCopy.tsx
- **Alignment:** cos=1.0 (verbatim)
- **Lift method:** Copied verbatim from v88. No drift.

### src/components/MCPServerMultiselectDialog.tsx
- **Alignment:** cos=1.0 (verbatim)
- **Lift method:** Copied verbatim from v88. No drift.

### src/components/ManagedSettingsSecurityDialog/ManagedSettingsSecurityDialog.tsx
- **Alignment:** cos=1.0 (verbatim)
- **Lift method:** Copied verbatim from v88. No drift.

### src/components/ManagedSettingsSecurityDialog/utils.ts
- **Alignment:** cos=0.997 (minor drift)
- **v112 changes:**
  - `extractDangerousSettings` updated to handle shell settings that are objects with a `command` field instead of plain strings
  - Added type guard logic:
    ```ts
    if (typeof value === 'string') {
      extractedValue = value
    } else if (
      value !== null &&
      typeof value === 'object' &&
      'command' in value &&
      typeof (value as Record<string, unknown>).command === 'string'
    ) {
      extractedValue = (value as { command: string }).command
    }
    ```
- **Lift method:** Copied v88 source; updated extraction logic to handle object-shaped shell settings.

### src/components/Opus1mMergeNotice.tsx
- **Alignment:** cos=0.994 (drifted)
- **v112 changes:**
  - Added `migrateNoticeCounts` helper function to merge old notice counters into new unified counters
  - Function removes deprecated keys (`opus1mMergeNoticeSeenCount`, `voiceNoticeSeenCount`) from config
  - Added to export surface
- **Lift method:** Copied v88 source; added `migrateNoticeCounts` function.

## Cross-file observations
- `CondensedLogo.tsx` gained multiple new upsell effect slots, suggesting v112 added more promotional surfaces. The unlifted upsell components will need resolution when their respective chunks are lifted.
- `VoiceModeNotice.tsx` removing the `feature("VOICE_MODE")` gate indicates voice mode graduated from feature-flagged to generally available in v112.
- `ManagedSettingsSecurityDialog/utils.ts` handling object-shaped shell settings suggests the settings schema evolved to support structured command objects (not just string paths) for dangerous shell settings.
- `AnimatedClawd.tsx` gaining autoplay/sequence/onComplete props suggests it is now used in more contexts (e.g., celebratory animations on task completion).
- `LspRecommendationMenu.tsx` and the MCP dialogs show React Compiler Runtime adoption across the UI surface in v112 — these are purely mechanical transformations with no semantic drift.

## Unresolved / TODO
- [ ] CondensedLogo.tsx: Resolve TODO placeholders for 4 unlifted upsell components (need their chunk lifts)
- [ ] CondensedLogo.tsx: Verify `tuiJustSwitched` env check behavior matches v112 runtime
- [ ] AnimatedClawd.tsx: Verify `CELEBRATE` sequence frame array completeness against v112 minified
- [ ] Opus1mMergeNotice.tsx: Verify `migrateNoticeCounts` is called at the correct config load site
- [ ] VoiceModeNotice.tsx: Confirm spinner frame interval timing (150ms) matches v112 behavior

## Lifter

`lifter-28` (kimi-for-coding, single-shot). Strategy: verbatim copy for
stable/cos=1.0 components; targeted edits for drifted components based on
v112_min.js structural changes. All drift was additive or mechanical
(React Compiler Runtime).
