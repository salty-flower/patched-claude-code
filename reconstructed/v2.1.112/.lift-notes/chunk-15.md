# Chunk 15 Lift Notes

## File: `src/commands/plugin/ManageMarketplaces.tsx`

### Region Matching (from region.json)
- v88 decl [10301932, 10313354] → v112 [10778026, 10790318]: jac=0.954, cos=1
- v88 decl [10313354, 10314550] → v112 [10790318, 10791507]: jac=0.962, cos=1
- Unmatched v88 decls: [10301869,10301932] (import/runtime preamble), [10314550,10314560], [10314560,10314691] (trailing runtime)

### Drift Summary

1. **React Compiler Runtime Removed**
   - v88: Uses `_c` memoization from `react/compiler-runtime` in `ManageMarketplacesKeyHints`
   - v112: No compiler runtime; `ManageMarketplacesKeyHints` is a plain component
   - Removed `import { c as _c } from "react/compiler-runtime";`

2. **Unmount Safety (`isMountedRef`)**
   - v112 adds `isMountedRef = useRef(true)` and a cleanup effect that sets it to `false` on unmount
   - Guards inserted after every `await` in `applyChanges`: `if (!isMountedRef.current) return;`
   - `finally` block only clears processing state if still mounted

3. **Timeout Management (`menuTimeoutRef`)**
   - v112 adds `menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)`
   - `clearTimeout(menuTimeoutRef.current)` called before most state transitions (escape, accept, u/r, y/n)
   - `setTimeout` for menu navigation stored in ref: `menuTimeoutRef.current = setTimeout(...)`

4. **Keyboard Handling Refactored**
   - v88: `useInput` hook for `u`/`r` shortcuts and `y`/`n` confirmation
   - v112: Raw `onKeyDown` handlers on focused `Box` elements (`tabIndex={0}` `autoFocus={true}`)
   - New `handleListKeyDown` function with `event.preventDefault()` for `u`/`r`
   - New `handleConfirmRemoveKeyDown` function with `event.preventDefault()` for `y`/`n`
   - Checks `event.ctrlKey || event.metaKey || isProcessing` before handling

5. **Auto-action State Construction**
   - v88: `const newStates = [...states]; newStates[targetIndex]!.pendingUpdate = true`
   - v112: Uses `.map()` with conditional spread: `states.map((s, idx) => idx === targetIndex ? { ...s, pendingUpdate: action === 'update', pendingRemove: action === 'remove' } : s)`

6. **Key Hint Prop Change**
   - v88: `<KeyboardShortcutHint shortcut="u" action="update" />`
   - v112: `<KeyboardShortcutHint chord="u" action="update" />` (prop renamed from `shortcut` to `chord`)

7. **Pending Changes Hint**
   - v88: Plain text `<Text dimColor>Enter to apply</Text>`
   - v112: Uses `<ConfigurableShortcutHint action="select:accept" context="Select" fallback="Enter" description="apply" />`

8. **Removed `useInput` import**
   - v88 imports `useInput` from `../../ink.js` (with eslint-disable comment)
   - v112 no longer uses `useInput`; import removed

### Verification
- File compiles syntactically (TSX)
- All v112 semantic changes incorporated
- No TODO(lift) markers needed — all symbols resolved from v88 source context
