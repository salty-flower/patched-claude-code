# Chunk 25 Lift Notes

## Files

### src/components/FeedbackSurvey/useDebouncedDigitInput.ts
- **v88→v112**: jac=0.692, cos=0.998
- **Drift**: Significant logic changes:
  - Added `mountDelayMs` parameter (default 250ms) with mount-time tracking via `mountTimeRef`
  - Changed from slicing last character to requiring `inputValue.length === 1`
  - Removed `trimmed` variable — now clears input to empty string (`''`) instead of slicing
  - Uses `normalizeFullWidthDigits` directly on full `inputValue` instead of `inputValue.slice(-1)`
  - Added `enabledRef` pattern to track mount time when `enabled` transitions from false→true
  - Effect dependencies now include `mountDelayMs`
- **Status**: Reconstructed with v112 semantic changes

### src/components/FeedbackSurvey/TranscriptSharePrompt.tsx
- **v88→v112**: jac=0.95, cos=1.0
- **Drift**: Input keys changed from digits (`1`, `2`, `3`) to letters (`y`, `n`, `d`):
  - `RESPONSE_INPUTS` now `['y', 'n', 'd']`
  - `inputToResponse` maps `y→yes`, `n→no`, `d→dont_ask_again`
  - `onDigit` callback now lowercases input and checks validity before mapping
  - Display labels updated: `y: Yes`, `n: No`, `d: Don't ask again`
- **Status**: Reconstructed with v112 semantic changes

### src/components/FeedbackSurvey/FeedbackSurvey.tsx
- **v88→v112**: jac=0.75/0.966, cos=0.999/1.0
- **Drift**: Major structural changes:
  - New state `'pending'` added to SurveyState union
  - New props: `handleUndo`, `memoryEvaluation`
  - New component `FeedbackSurveyPending` shows "Thanks for the feedback! [u] Undo"
  - `transcript_prompt` validation now uses `isValidTranscriptInput` (letters y/n/d) instead of digit check
  - Added `MemoryEvaluationView` branch for when `memoryEvaluation` is present
  - `FeedbackSurveyThanks` now passes `mountDelayMs: 0` to `useDebouncedDigitInput`
  - `feedbackCommand` hardcoded to `"/feedback"` (removed conditional)
- **Status**: Reconstructed with v112 semantic changes. TODO for `MemoryEvaluationView`.

### src/components/FeedbackSurvey/FeedbackSurveyView.tsx
- **v88→v112**: jac=0.52, cos=0.999
- **Drift**: Major restructure:
  - Options now defined as `OPTIONS` config array: `[{key, label}, ...]`
  - Options rendered via `.map()` instead of hardcoded JSX
  - `isValidResponseInput` and `inputToResponse` moved to separate vars (still same values)
- **Status**: Reconstructed with v112 semantic changes

### src/components/FeedbackSurvey/submitTranscriptShare.ts
- **v88→v112**: jac=0.923, cos=0.998
- **Drift**: Several changes:
  - Added early `isPolicyAllowed('allow_product_feedback')` guard at top of function
  - Added raw transcript processing: splits JSONL, parses each line, redacts, re-stringifies
  - `data` object now uses spread of `p98()` (redacted) for base fields plus `rawTranscriptJsonl`
  - `content` construction changed — now redacts the stringified data with `extraOuterFields`
- **Status**: Reconstructed with v112 semantic changes

### src/components/FeedbackSurvey/useFeedbackSurvey.tsx
- **v88→v112**: jac=0.968, cos=1.0
- **Drift**: Added `otherSurveyActive` parameter and related logic:
  - New param `otherSurveyActive: boolean = false`
  - Passed to `useSurveyState({ otherSurveyActive, ... })`
  - `shouldOpen` memo now checks `otherSurveyActive` and returns false if true
  - Return value now includes `handleUndo`
- **Status**: Reconstructed with v112 semantic changes

### src/components/FeedbackSurvey/useMemorySurvey.tsx
- **v88→v112**: jac=0.735/0.75, cos=0.998/0.991
- **Drift**: Major feature addition — judge-based evaluation:
  - New params: `otherSurveyActive`, `enabled` object shape expanded
  - Added `useMemoryEvaluation`-like hook usage (via `lastMemoryEvaluation` ref)
  - New state: `evaluation` returned from hook, managed via `useState`
  - Two `useEffect` hooks: classic keyword-based + new judge-based survey trigger
  - Judge effect checks `lastMemoryEvaluation`, validates classification, triggers survey
  - `shouldShowTranscriptPrompt` now always returns `false`
  - Analytics events include `judge_classification` and `judge_evidence_type`
  - `onOpen`/`onSelect` callbacks capture `judgeRef.current` for analytics
- **Status**: Reconstructed with v112 semantic changes. TODOs for judge helpers.

### src/components/FeedbackSurvey/usePostCompactSurvey.tsx
- **v88→v112**: jac=0.889/0.875, cos=1.0/0.99
- **Drift**: Uses updated `useSurveyState`:
  - Now destructures `handleUndo` from `useSurveyState`
  - Return object includes `handleUndo`
  - Uses `.at(-1)` instead of `[newBoundaries.length - 1]` for last element
- **Status**: Reconstructed with v112 semantic changes

### src/components/FeedbackSurvey/useSurveyState.tsx
- **v88→v112**: jac=0.84, cos=0.998
- **Drift**: Major changes:
  - New state `'pending'` added to SurveyState
  - New option `otherSurveyActive?: boolean` (default false)
  - Added `useEffect` cleanup for pending timeout
  - Added `useEffect` to close survey if `otherSurveyActive && state === 'open'`
  - New `handleUndo` callback: cancels pending timeout, restores previous response
  - `handleSelect` now sets pending timeout for non-dismissed responses (5000ms)
  - `handleTranscriptSelect` now receives `lastResponseRef.current` instead of hardcoded
  - Return value includes `handleUndo`
- **Status**: Reconstructed with v112 semantic changes

### src/components/FileEditToolDiff.tsx
- **v88→v112**: jac=1.0, cos=1.0 for all decls
- **Drift**: None — all declarations match exactly
- **Status**: Copied verbatim from v88

### src/components/FileEditToolUpdatedMessage.tsx
- **v88→v112**: jac=1.0, cos=1.0 for all decls
- **Drift**: None — all declarations match exactly
- **Status**: Copied verbatim from v88
