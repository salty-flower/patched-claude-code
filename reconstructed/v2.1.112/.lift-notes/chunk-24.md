# Chunk 24 Lift Notes

## src/components/CustomSelect/use-select-state.ts
- **Status**: Verbatim copy (jac=1, cos=1 for main declaration)
- **Drift**: None. Import hoisting and React runtime wrapper changed in minified but source is unchanged.

## src/components/DesktopHandoff.tsx
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - v112 replaces `useInput` with `useKeyDown` (keyboard event handler on Box elements)
  - Error and prompt-download states now render `<Box tabIndex={0} autoFocus={true} onKeyDown={handleKeyDown}>` instead of plain Box
  - Added `input.preventDefault()` calls before `onDone` in key handlers
  - Added `MIN_DESKTOP_VERSION` constant (replaced hardcoded `v1.1.2396+` in v88)
  - Cache size increased from 20 to 22 slots

## src/components/DevChannelsDialog.tsx
- **Status**: Verbatim copy (jac=1, cos=1 for all matched declarations)
- **Drift**: None. Minified wrapper names changed but source is identical.

## src/components/EffortCallout.tsx
- **Status**: Reconstructed (main component decl had no v112 match, but sub-functions matched)
- **Drift**:
  - `shouldShowEffortCallout` and `markV2Dismissed` functions moved to different byte locations in v112 bundle (indicates possible module split)
  - Source structure unchanged from v88; the no-match is due to module boundary shifts in the bundle

## src/components/EffortIndicator.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - v112 added new `case "xhigh"` to `effortLevelToSymbol` switch statement
  - TODO(lift) marker left for the xhigh symbol constant (unknown in v88)

## src/components/ExitFlow.tsx
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - v112 added `backgroundItems` prop to Props type
  - New conditional branch: when `backgroundItems` is non-empty, renders a `BackgroundItemsDialog` component
  - Cache size increased from 5 to 11 slots
  - TODO(lift) marker for `BackgroundItemsDialog` component (not present in v88)

## src/components/ExportDialog.tsx
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - `handleFilenameSubmit` is now `async` and uses `saveConversationToFile(filename, content)` instead of `writeFileSync_DEPRECATED`
  - `KeyboardShortcutHint` prop changed from `shortcut="Enter"` to `chord="enter"`
  - Removed `join(getCwd(), finalFilename)` path construction (now handled inside `saveConversationToFile`)

## src/components/FallbackToolUseErrorMessage.tsx
- **Status**: Verbatim copy (jac=1, cos=1 for all matched declarations)
- **Drift**: None. Minified wrapper names changed but source is identical.

## src/components/FallbackToolUseRejectedMessage.tsx
- **Status**: Verbatim copy (jac=1, cos=1 for main component declaration)
- **Drift**: None. Minified wrapper names changed but source is identical.

## src/components/FastIcon.tsx
- **Status**: Verbatim copy (jac=1, cos=1 for both declarations)
- **Drift**: None. Source identical to v88.

## src/components/Feedback.tsx
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - v112 `submitFeedback` function significantly enhanced:
    - Added `payloadTooLarge` precheck using `jsonStringify` length vs `MAX_PAYLOAD_SIZE` (8388608)
    - Added `failureReason` field to all error return paths
    - Added `statusCode` field to HTTP error returns
    - Added `RangeError` catch -> `payload_too_large_range_error`
    - Added 413 status handling -> `payload_too_large_413`
    - Added `ECONNABORTED` timeout with payload size check -> `payload_too_large_timeout`
    - Added `firstAttemptSuccess` tracking in return type
  - `Feedback` component:
    - Added `retried_after_too_large` telemetry field to `tengu_bug_report_submitted` event
    - Added `failureReason`, `status_code`, `first_attempt_too_large` to `tengu_bug_report_failed` event
    - Added `isCancelDisabled` logic for dialog state
    - Replaced `useInput` with `handleKeyDown` function (key event handler)
    - `KeyboardShortcutHint` prop changed from `shortcut="Enter"` to `chord="enter"`
    - Added `backgroundTasks` parameter support in report data construction
    - Version string updated from `2.1.88` to `2.1.112` in inline metadata
    - Build time updated from `2026-03-30T21:59:52Z` to `2026-04-16T18:33:19Z`
