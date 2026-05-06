# Chunk #23 — CustomSelect components

**Files lifted:** 5
**Strategy:** Mix of verbatim copy (select-option), copy+edit (select-input-option), and
significant reconstruction (select, use-multi-select-state, use-select-input) to match
v112's Ink 5 focus-management and keyboard handling changes.

## Per-file notes

### src/components/CustomSelect/select-option.tsx
- **region.json:** jac=1, cos=1 for main decl.
- **Lift method:** Verbatim copy from v88 with compiler-runtime import removed.
- **v112 changes:** None semantic — minified names changed but logic identical.

### src/components/CustomSelect/select-input-option.tsx
- **region.json:** jac=0.942, cos=1.
- **Lift method:** Copied from v88, removed compiler-runtime, kept all logic.
- **v112 changes:**
  - Compiler cache size changed from 100 to 96 (non-semantic).
  - The `useInput` for UP-arrow image-selection exit was removed in v112;
    this is now handled by the `useSelectInput` hook's `handleKeyDown`.
  - The `imagesSelected ? "(↓ to select)" : null` hint text in v88 was
    replaced in v112 by a `A8` component call (`chord="down", action="select", parens=true`).
    This appears to be a new `KeybindingChord` component in v112. Marked as TODO.
  - Import names minified differently but same source modules.

### src/components/CustomSelect/select.tsx
- **region.json:** jac=0.927, cos=1 for main Select component decl.
- **Lift method:** Major reconstruction from v88 baseline.
- **Key v112 changes:**
  - **Ink 5 focus management:** Added `hasInkFocus` state, `containerRef`, and
    `tabIndex`/`onKeyDown`/`onFocus`/`onBlur` handlers on the container Box.
  - `useSelectInput` now returns `{handleKeyDown}` instead of self-registering
    keybindings. The `handleKeyDown` is attached to the container's `onKeyDown`.
  - Added `onExitImageSelection` callback passed to `useSelectInput`.
  - Added `useEffect` for auto-focus on mount (calls `getFocusManager` / `cE` in minified).
    Marked as TODO since the exact focus manager API needs verification.
  - `TwoColumnRow` uses `useDeclaredCursor` with `flexShrink={0}` added in v112.
  - Checkmark in two-column layout: v88 used `figures.tick` directly; v112 minified
    uses a `D4` component with `status="success"` (likely `StatusIcon`). Kept
    `figures.tick` for reconstruction since behavior is identical.
  - The `getTextContent` helper and all layout logic (compact, expanded,
    compact-vertical) are structurally unchanged.

### src/components/CustomSelect/use-multi-select-state.ts
- **region.json:** jac=0.72, cos=0.998.
- **Lift method:** Reconstructed from v88 baseline with v112 structural changes.
- **Key v112 changes:**
  - **Removed `useInput` hook** — keyboard handling is now returned as a
    `handleKeyDown(event: InputEvent)` function. This aligns with Ink 5's
    focus-managed event system where the parent component attaches the handler.
  - All keyboard logic (Tab, arrows, Enter, Space, page up/down, numeric keys,
    Escape) is preserved but now uses `event.key` / `event.ctrl` / `event.shift`
    instead of the `useInput` callback signature.
  - Added `preventDefault()` calls for Tab, arrows, page keys, Enter, and numeric
    keys (matching v112 behavior).
  - Numeric key regex changed from `/^[0-9]+$/` to `/^[0-9]$/` (single digit only).
  - `handleKeyDown` added to the `MultiSelectState` return type.

### src/components/CustomSelect/use-select-input.ts
- **region.json:** jac=0.745, cos=0.999.
- **Lift method:** Reconstructed from v88 baseline with v112 structural changes.
- **Key v112 changes:**
  - **Removed `useInput` hook** — returns `{handleKeyDown}` function instead.
  - **Removed `useKeybinding` for individual bindings** — uses `useKeybindings`
    for the navigation set but the main input handling is now in `handleKeyDown`.
  - Added `hasInkFocus` parameter (default true) for Ink 5 focus integration.
  - Added `onExitImageSelection` parameter.
  - Added `focusDirection` dependency from `oN6()` context (marked as TODO).
  - Key normalization: v112 uses `eH8` (key normalization) instead of raw `input`.
    Reconstructed to use `event.key` directly with TODO marker.
  - All navigation handlers now call `preventDefault()` / `stopImmediatePropagation()`
    matching v112 behavior.
  - Tab handler now calls `preventDefault()` before toggling input mode.
  - Numeric key regex changed from `/^[0-9]+$/` to `/^[0-9]$/` (single digit only).
  - Image selection: UP arrow now exits via `onExitImageSelection` with `preventDefault`.

## Cross-file observations
- All three files (select.tsx, use-multi-select-state.ts, use-select-input.ts)
  underwent the same architectural shift in v112: **from `useInput`/`useKeybinding`
  self-registration to returned `handleKeyDown` functions**. This is consistent
  with Ink 5's focus-managed event system where keyboard handlers are attached
  to DOM nodes rather than globally registered.
- The `Select` component now owns the container ref and attaches `handleKeyDown`
  to it, while `useSelectInput` provides the handler. This is a cleaner separation
  of concerns than v88's global keybinding registration.
- `useMultiSelectState` follows the same pattern, returning `handleKeyDown` for
  the `SelectMulti` component to attach.

## Unresolved / TODO
- [ ] select-input-option.tsx: Replace `'(↓ to select)'` string with the v112
  `A8` / `KeybindingChord` component once its source is lifted.
- [ ] select.tsx: Implement auto-focus `getFocusManager` call in the mount effect.
- [ ] use-select-input.ts: Add `focusDirection` from `useFocusDirection()` context
  (dependency of keybinding handlers in v112).
- [ ] use-select-input.ts: Verify `eH8` key normalization behavior — currently
  using `event.key` directly.
- [ ] select.tsx: Verify `D4` / `StatusIcon` replacement for `figures.tick` in
  two-column layout.

## Lifter

`lifter-23` (kimi-for-coding, single-shot). Strategy: verbatim copy for stable
file (select-option); copy+edit for minor drift (select-input-option); major
reconstruction for Ink 5 focus-management refactor (select, use-multi-select-state,
use-select-input).
