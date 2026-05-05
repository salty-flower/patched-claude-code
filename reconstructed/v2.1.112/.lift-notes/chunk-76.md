# Chunk #76 — src/ink/ink.tsx

**Files lifted:** 1
**Confidence:** medium
**Strategy:** v88 src baseline + targeted v112 drift patches inside the
big `Ink` class body (jac=0.924, cos=1).

## Per-file notes

### ink.tsx
- bytes out: ~70 KiB (TSX)
- decls in region.json: 6 v88 entries; 5 with v112 matches:
  - `XY4` `makeAltScreenParkPatch` (jac=1, cos=0.998) — verbatim.
  - `Os6.options=...` class field declaration block (jac=1, cos=1) — verbatim.
  - `Os6` Ink class body (jac=0.924, cos=1) — **drifted** (new methods, new fields, new constructor flow).
  - `MY4` `drainStdin` (jac=1, cos=1) — verbatim.
  - `Gd=L(()=>{...})` import init wrapper (jac=1, cos=1) — verbatim.
  - 1 unmatched span (4099364–4099392) — boundary artefact (28 bytes), no v112 decl.

### v88 → v112 drift inventory (all inside the Ink class)

Compared `v88_min.js` against `v112_min.js` line-by-line:

1. **New instance fields** (after `hoveredNodes`):
   - `hasRendered = false`
   - `renderCalled = false`
   - `isExiting = false`
2. **Constructor**:
   - TTY handler attachment moved OUT of constructor into a new
     `ensureInteractive()` method, deferred until first render.
   - `onComputeLayout` callback gained:
     - When stdout has no TTY/columns, calls `yogaNode.setWidthAuto()`
       then `calculateLayout()`, and clamps to `yu1` (`MAX_AUTO_WIDTH`)
       if computed width exceeds it.
   - `injectIntoDevTools` block removed (was dead `"production" === 'development'`).
3. **New method: `ensureInteractive`**
   - Wraps the resize/SIGCONT subscription previously in constructor.
   - Also writes a per-call sentinel (`CN6`, currently unresolved — looks
     like an iTerm2/terminal capability probe sequence) when
     `CLAUDE_CODE_ACCESSIBILITY` env var is unset.
4. **New method: `skipSyncMarkers`**
   - Returns `true` when stdout is non-TTY, `IN6()` is false, or
     `unsubscribeTTYHandlers` is unset; `false` otherwise.
   - Used inside `onRender`'s `writeDiffToTerminal` call instead of the
     literal `SYNC_OUTPUT_SUPPORTED` constant.
5. **`onRender` changes**:
   - At top, calls `this.ensureInteractive()` when `hasRendered && !isExiting`
     (so we wait until the first frame lands before subscribing to
     resize/SIGCONT and writing the iTerm2 probe).
   - Sets `hasRendered = true` after that.
   - Removes the `flushInteractionTime()` standalone call — replaced by
     `I61()` which is the same import (likely a renamed export). Confirmed
     — both call into bootstrap state.
   - Selection overlay sig added: builds `O = "${z?.row},${z?.col},..."`
     to compare against `prevOverlaySig`. New behaviour: `prevOverlaySig`
     is now stored on the instance and used to force a full repaint when
     selection/search query changes between frames (replaces the simpler
     `prevFrameContaminated` short-circuit).
   - `prevFrameContaminated` flag at end is no longer
     `selActive || hlActive` — instead always set to `false` (the new
     overlay-sig check makes it redundant).
   - `writeDiffToTerminal` now passes `this.skipSyncMarkers()` instead
     of `SYNC_OUTPUT_SUPPORTED`.
6. **`detachForShutdown` changes** (substantial):
   - Now restores cursor to frame.cursor before unmounting (`P$6` cursorMove).
   - Clears displayCursor.
   - Now iterates over `new Set([stdin, process.stdin])`, removing all
     `'readable'`, `'data'`, `'keypress'` listeners; pauses; calls `unref?.()`.
7. **`render` method** (the `Lu1.default.createElement(vE8, ...)` call):
   - Adds props: `focusManager`, `rootNode`, `dispatchPasteEvent`,
     `dispatchWheelEvent`, `onRawModeEnter` (= `ensureInteractive`).
8. **New methods**:
   - `dispatchPasteEvent(content)`: dispatches `zu1` (likely
     `PasteEvent`) to focused element.
   - `dispatchWheelEvent(parsedKey)`: dispatches `Yu1` (likely
     `WheelEvent`) with delta from `name === 'wheeldown' ? 1 : -1`.
9. **`unmount` changes**:
   - Sets `isExiting = true` early, calls `onRender()`.
   - Wraps the deprecated final-frame render in
     `if (this.renderCalled)` guard so non-rendered Ink instances don't
     emit a stray output on unmount.
   - Adds a new `sB(1, RN6)` write inside the TTY block (after `aB`),
     looks like an additional cleanup sequence (possibly resetting
     scrolling region or DEC private mode).

### Unresolved / TODO

- `CN6` — probe sequence written in `ensureInteractive`. Likely an
  iTerm2 capability query / focus-events enable. **TODO(lift):** identify
  by content; v88 had no such write.
- `IN6` — predicate inside `skipSyncMarkers`. **TODO(lift):** v88 had
  the literal `SYNC_OUTPUT_SUPPORTED` constant from `terminal.ts`;
  v112's predicate likely takes terminal type into account at runtime.
- `RN6` — extra TTY-cleanup write in `unmount`. **TODO(lift):** identify.
- `aa6` — predicate gating reassertTerminalModes' kitty/xterm extended
  keys block (replaces `supportsExtendedKeys`).
- `vE8` — the `<App>` component (renamed from v88's `App`).
- `ja6`, `Ha6` — the kitty / modifyOtherKeys enable strings. v88 had
  `DISABLE_KITTY_KEYBOARD + ENABLE_KITTY_KEYBOARD + ENABLE_MODIFY_OTHER_KEYS`,
  v112 splits into 2 strings (`ja6`, `Ha6`). Locally still kitty + modifyOtherKeys.
- `ON8` — extra writeSync sequence in unmount cleanup. **TODO(lift):** identify.
- `KY4` — selection follow-scroll consumer (renamed from `consumeFollowScroll`).
- `yu1` — MAX_AUTO_WIDTH constant for non-TTY rendering.

### Lift method
- v88_src.tsx wholesale baseline: 1722 lines.
- Targeted edits applied to the Ink class to incorporate v112-specific
  fields/methods/flow described above.
- Imports unchanged (no new imports needed; new methods reuse existing imports
  for `cursorMove`, `cursorPosition`).
- Where v112-only constants/predicates are unidentified (CN6, IN6, RN6, ON8),
  they are inlined as `// TODO(lift)` placeholders and noted here.

## Cross-file observations

- App.tsx (chunk #?, separate file) gained 4 new props in v112:
  `focusManager`, `rootNode`, `dispatchPasteEvent`, `dispatchWheelEvent`,
  `onRawModeEnter`. The App lift will need updates.
- `events/keyboard-event.ts`, `events/paste-event.ts`,
  `events/wheel-event.ts` — `PasteEvent` and `WheelEvent` are new
  classes used by `dispatchPasteEvent`/`dispatchWheelEvent`. These
  almost certainly live in `src/ink/events/` and need separate lifts.

## Lifter

`lifter-76` (opus, single oversize file). Strategy: v88 baseline + 11
inline drift patches to the Ink class body.
