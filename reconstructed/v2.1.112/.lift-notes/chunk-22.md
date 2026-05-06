# Chunk 22 Lift Notes

## src/components/ContextSuggestions.tsx
- **Status**: Verbatim copy from v88 (jac=1, cos=1 for all matched decls)
- **Drift**: None. All declarations match perfectly between v88 and v112.
- **Notes**: Only unmatched decls are trailing var assignments (sP, QvK) which are bundle-specific.

## src/components/ContextVisualization.tsx
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - Cache size increased from 87 to 98 (new `autocompactSource` field + model display changes)
  - New `autocompactSource` destructured from `data` (v112 addition)
  - Model display section changed: v112 uses `_q6(model)` to render a model display name before the raw model string
  - Token count line no longer prefixed with model name (moved to separate lines)
  - New "Auto-compact window" section shown when `autocompactSource !== "model"`
  - Memory files and skills now wrapped in `<Tree>` / `<Tree.Node>` components instead of plain Box/Text
  - MCP tool lists also wrapped in `<Tree>` when rendering loaded/available sections
  - Helper functions `_temp23`, `_temp24`, `_temp25` updated to use `Tree.Node`
  - Added TODO for unresolved `_q6` symbol (likely `getModelDisplayName` or similar)

## src/components/CoordinatorAgentStatus.tsx
- **Status**: Partial reconstruction — only `getVisibleAgentTasks` retained
- **Drift**:
  - Only `getVisibleAgentTasks` has a v112 match (jac=1, cos=1)
  - `CoordinatorTaskPanel`, `useCoordinatorTaskCount`, `MainLine`, `AgentLine` all have NO v112 match
  - These components were either removed or moved to a different file in v112
  - File reduced from ~360 lines to ~15 lines
  - Added TODOs for all removed functions

## src/components/CostThresholdDialog.tsx
- **Status**: Verbatim copy from v88 (jac=1, cos=1 for main function)
- **Drift**: None. The main function matches perfectly.
- **Notes**: Unmatched decls are imports/var assignments which are bundle-specific.

## src/components/CtrlOToExpand.tsx
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - `CtrlOToExpand` component changed from using `KeyboardShortcutHint` to `KeyboardChordHint`
  - New `format={{keyCase:"lower"}}` prop passed to the hint component
  - Cache size increased from 2 to 3 (to hold the format object)
  - Import name changed from `KeyboardShortcutHint` to `KeyboardChordHint`
  - `SubAgentProvider` and `ctrlOToExpand` unchanged (jac=1, cos=1)

## src/components/CustomSelect/SelectMulti.tsx
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - Cache size increased from 44 to 54 (focus management additions)
  - Added `React.useRef(null)` for focus management
  - Added `React.useEffect` that focuses the ref when `isDisabled` changes to false
  - Added keyboard handling: outer Box gets `tabIndex={0}` and `onKeyDown={state.handleKeyDown}` when not disabled
  - Outer wrapper Box now receives `ref={focusRef}` and spreads keyboard props
  - Inner/outer Box cache slots reorganized to accommodate new props
  - Added TODO for unresolved focus manager call (`cE(x.current).focus(...)` pattern)
