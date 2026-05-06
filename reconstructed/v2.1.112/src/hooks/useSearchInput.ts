import { useCallback, useRef, useState } from 'react'
import { KeyboardEvent } from '../ink/events/keyboard-event.js'
// eslint-disable-next-line custom-rules/prefer-use-keybindings -- backward-compat bridge until consumers wire handleKeyDown to <Box onKeyDown>
import { useInput } from '../ink.js'
import {
  Cursor,
  getLastKill,
  pushToKillRing,
  recordYank,
  resetKillAccumulation,
  resetYankState,
  updateYankLength,
  yankPop,
} from '../utils/Cursor.js'
import { useKillRing } from './useKillRing.js'
import { useTerminalSize } from './useTerminalSize.js'

type UseSearchInputOptions = {
  isActive: boolean
  onExit: () => void
  /** Esc + Ctrl+C abandon (distinct from onExit = Enter commit). When
   *  provided: single-Esc calls this directly (no clear-first-then-exit
   *  two-press). When absent: current behavior — Esc clears non-empty
   *  query, exits on empty; Ctrl+C silently swallowed (no switch case). */
  onCancel?: () => void
  onExitUp?: () => void
  columns?: number
  passthroughCtrlKeys?: string[]
  initialQuery?: string
  /** Backspace (and ctrl+h) on empty query calls onCancel ?? onExit — the
   *  less/vim "delete past the /" convention. Dialogs that want Esc-only
   *  cancel set this false so a held backspace doesn't eject the user. */
  backspaceExitsOnEmpty?: boolean
  /** Allow multiline input (Shift+Enter inserts newline). */
  multiline?: boolean
  /** Called when space is pressed on empty query. */
  onSpaceOnEmpty?: () => void
  /** External kill ring to use instead of the default. */
  killRing?: ReturnType<typeof useKillRing>
}

type UseSearchInputReturn = {
  query: string
  queryRef: React.MutableRefObject<string>
  setQuery: (q: string) => void
  cursorOffset: number
  handleKeyDown: (e: KeyboardEvent) => void
  handlePaste: (event: { text: string; preventDefault: () => void }) => void
}

function isKillKey(e: KeyboardEvent): boolean {
  if (e.ctrl && (e.key === 'k' || e.key === 'u' || e.key === 'w')) {
    return true
  }
  if (e.meta && e.key === 'backspace') {
    return true
  }
  return false
}

function isYankKey(e: KeyboardEvent): boolean {
  return (e.ctrl || e.meta) && e.key === 'y'
}

// Special key names that fall through the explicit handlers above the
// text-input branch (return/escape/arrows/home/end/tab/backspace/delete
// all early-return). Reject these so e.g. PageUp doesn't leak 'pageup'
// as literal text. The length>=1 check below is intentionally loose —
// batched input like stdin.write('abc') arrives as one multi-char e.key,
// matching the old useInput(input) behavior where cursor.insert(input)
// inserted the full chunk.
const UNHANDLED_SPECIAL_KEYS = new Set([
  'pageup',
  'pagedown',
  'insert',
  'wheelup',
  'wheeldown',
  'mouse',
  'clear',
  'enter',
  'f1',
  'f2',
  'f3',
  'f4',
  'f5',
  'f6',
  'f7',
  'f8',
  'f9',
  'f10',
  'f11',
  'f12',
])

export function useSearchInput({
  isActive,
  onExit,
  onCancel,
  onExitUp,
  columns,
  passthroughCtrlKeys = [],
  initialQuery = '',
  backspaceExitsOnEmpty = true,
  multiline = false,
  onSpaceOnEmpty,
  killRing: externalKillRing,
}: UseSearchInputOptions): UseSearchInputReturn {
  const defaultKillRing = useKillRing()
  const killRing = externalKillRing ?? defaultKillRing
  const { columns: terminalColumns } = useTerminalSize()
  const effectiveColumns = columns ?? terminalColumns
  const [query, setQueryState] = useState(initialQuery)
  const [cursorOffset, setCursorOffset] = useState(initialQuery.length)
  const queryRef = useRef(query)
  const cursorOffsetRef = useRef(cursorOffset)

  const setQuery = useCallback((q: string) => {
    queryRef.current = q
    setQueryState(q)
    cursorOffsetRef.current = q.length
    setCursorOffset(q.length)
  }, [])

  const updateQuery = useCallback((q: string, offset: number) => {
    queryRef.current = q
    setQueryState(q)
    cursorOffsetRef.current = offset
    setCursorOffset(offset)
  }, [])

  const handleKeyDown = useCallback((e: KeyboardEvent): void => {
    if (!isActive) return

    const currentQuery = queryRef.current
    const currentOffset = cursorOffsetRef.current
    const cursor = Cursor.fromText(currentQuery, effectiveColumns, currentOffset)

    // Check passthrough ctrl keys
    if (e.ctrl && passthroughCtrlKeys.includes(e.key.toLowerCase())) {
      return
    }

    // Reset kill accumulation for non-kill keys
    if (!isKillKey(e)) {
      resetKillAccumulation()
    }

    // Reset yank state for non-yank keys
    if (!isYankKey(e)) {
      resetYankState()
    }

    // Exit conditions
    if (e.key === 'return') {
      e.preventDefault()
      if (multiline) {
        // In multiline mode: backslash+Enter inserts literal newline,
        // Shift+Enter or Meta+Enter inserts newline, plain Enter exits
        if (currentOffset > 0 && currentQuery[currentOffset - 1] === '\\') {
          const newCursor = cursor.insert('\n')
          updateQuery(newCursor.text, newCursor.offset)
          return
        }
        if (e.shift || e.meta) {
          const newCursor = cursor.insert('\n')
          updateQuery(newCursor.text, newCursor.offset)
          return
        }
      }
      onExit()
      return
    }

    if (e.key === 'down') {
      e.preventDefault()
      if (!multiline) {
        onExit()
      }
      return
    }

    if (e.key === 'up') {
      e.preventDefault()
      if (onExitUp) {
        onExitUp()
      }
      return
    }

    if (e.key === 'escape') {
      e.preventDefault()
      if (onCancel) {
        onCancel()
      } else if (currentQuery.length > 0) {
        updateQuery('', 0)
      } else {
        onExit()
      }
      return
    }

    // Backspace/Delete
    if (e.key === 'backspace') {
      e.preventDefault()
      if (e.meta) {
        // Meta+Backspace: kill word before
        const { cursor: newCursor, killed } = cursor.deleteWordBefore()
        killRing.dispatch({ type: 'kill', text: killed, direction: 'prepend' })
        updateQuery(newCursor.text, newCursor.offset)
        return
      }
      if (currentQuery.length === 0) {
        // Backspace past the / — cancel (clear + snap back), not commit.
        // less: same. vim: deletes the / and exits command mode.
        if (backspaceExitsOnEmpty) (onCancel ?? onExit)()
        return
      }
      const newCursor = cursor.backspace()
      updateQuery(newCursor.text, newCursor.offset)
      return
    }

    if (e.key === 'delete') {
      e.preventDefault()
      const newCursor = cursor.del()
      updateQuery(newCursor.text, newCursor.offset)
      return
    }

    // Arrow keys with modifiers (word jump)
    if (e.key === 'left' && (e.ctrl || e.meta || e.fn)) {
      e.preventDefault()
      const newCursor = cursor.prevWord()
      cursorOffsetRef.current = newCursor.offset
      setCursorOffset(newCursor.offset)
      return
    }
    if (e.key === 'right' && (e.ctrl || e.meta || e.fn)) {
      e.preventDefault()
      const newCursor = cursor.nextWord()
      cursorOffsetRef.current = newCursor.offset
      setCursorOffset(newCursor.offset)
      return
    }

    // Plain arrow keys
    if (e.key === 'left') {
      e.preventDefault()
      const newCursor = cursor.left()
      cursorOffsetRef.current = newCursor.offset
      setCursorOffset(newCursor.offset)
      return
    }
    if (e.key === 'right') {
      e.preventDefault()
      const newCursor = cursor.right()
      cursorOffsetRef.current = newCursor.offset
      setCursorOffset(newCursor.offset)
      return
    }

    // Home/End
    if (e.key === 'home') {
      e.preventDefault()
      cursorOffsetRef.current = 0
      setCursorOffset(0)
      return
    }
    if (e.key === 'end') {
      e.preventDefault()
      cursorOffsetRef.current = currentQuery.length
      setCursorOffset(currentQuery.length)
      return
    }

    // Ctrl key bindings
    if (e.ctrl) {
      e.preventDefault()
      switch (e.key.toLowerCase()) {
        case 'a':
          cursorOffsetRef.current = 0
          setCursorOffset(0)
          return
        case 'e':
          cursorOffsetRef.current = currentQuery.length
          setCursorOffset(currentQuery.length)
          return
        case 'b':
          cursorOffsetRef.current = cursor.left().offset
          setCursorOffset(cursor.left().offset)
          return
        case 'f':
          cursorOffsetRef.current = cursor.right().offset
          setCursorOffset(cursor.right().offset)
          return
        case 'd': {
          if (currentQuery.length === 0) {
            ;(onCancel ?? onExit)()
            return
          }
          const newCursor = cursor.del()
          updateQuery(newCursor.text, newCursor.offset)
          return
        }
        case 'h': {
          if (currentQuery.length === 0) {
            if (backspaceExitsOnEmpty) (onCancel ?? onExit)()
            return
          }
          const newCursor = cursor.backspace()
          updateQuery(newCursor.text, newCursor.offset)
          return
        }
        case 'k': {
          const { cursor: newCursor, killed } = cursor.deleteToLineEnd()
          killRing.dispatch({ type: 'kill', text: killed, direction: 'append' })
          updateQuery(newCursor.text, newCursor.offset)
          return
        }
        case 'u': {
          if (cursor.text !== '') {
            killRing.dispatch({ type: 'kill', text: cursor.text, direction: 'prepend' })
          }
          updateQuery('', 0)
          return
        }
        case 'w': {
          const { cursor: newCursor, killed } = cursor.deleteWordBefore()
          killRing.dispatch({ type: 'kill', text: killed, direction: 'prepend' })
          updateQuery(newCursor.text, newCursor.offset)
          return
        }
        case 'y': {
          const text = getLastKill()
          if (text.length > 0) {
            const startOffset = cursor.offset
            const newCursor = cursor.insert(text)
            killRing.dispatch({ type: 'yank', start: startOffset, length: text.length })
            updateQuery(newCursor.text, newCursor.offset)
          }
          return
        }
        case 'g':
        case 'c':
          // Cancel (abandon search). ctrl+g is less's cancel key. Only
          // fires if onCancel provided — otherwise falls through and
          // returns silently (11 call sites, most expect ctrl+c to no-op).
          if (onCancel) {
            onCancel()
            return
          }
      }
      return
    }

    // Meta key bindings
    if (e.meta) {
      e.preventDefault()
      switch (e.key.toLowerCase()) {
        case 'b':
          cursorOffsetRef.current = cursor.prevWord().offset
          setCursorOffset(cursor.prevWord().offset)
          return
        case 'f':
          cursorOffsetRef.current = cursor.nextWord().offset
          setCursorOffset(cursor.nextWord().offset)
          return
        case 'd': {
          const newCursor = cursor.deleteWordAfter()
          updateQuery(newCursor.text, newCursor.offset)
          return
        }
        case 'y': {
          const popResult = yankPop()
          if (popResult) {
            const { text, start, length } = popResult
            const before = currentQuery.slice(0, start)
            const after = currentQuery.slice(start + length)
            const newText = before + text + after
            const newOffset = start + text.length
            updateYankLength(text.length)
            updateQuery(newText, newOffset)
          }
          return
        }
      }
      return
    }

    // Tab: ignore
    if (e.key === 'tab') {
      e.preventDefault()
      return
    }

    // Space on empty query
    if (onSpaceOnEmpty && e.key === ' ' && currentQuery === '') {
      e.preventDefault()
      onSpaceOnEmpty()
      return
    }

    // Regular character input. Accepts multi-char e.key so batched writes
    // (stdin.write('abc') in tests, or paste outside bracketed-paste mode)
    // insert the full chunk — matching the old useInput behavior.
    if (e.key.length >= 1 && !UNHANDLED_SPECIAL_KEYS.has(e.key)) {
      e.preventDefault()
      const newCursor = cursor.insert(e.key)
      updateQuery(newCursor.text, newCursor.offset)
    }
  }, [isActive, effectiveColumns, onExit, onCancel, onExitUp, backspaceExitsOnEmpty, multiline, onSpaceOnEmpty, killRing, updateQuery])

  const handlePaste = useCallback((event: { text: string; preventDefault: () => void }): void => {
    if (!isActive || event.text.length === 0) return
    event.preventDefault()

    const currentQuery = queryRef.current
    const currentOffset = cursorOffsetRef.current
    const cursor = Cursor.fromText(currentQuery, effectiveColumns, currentOffset)

    // In multiline mode, normalize line endings to \n; otherwise take first line only
    const text = multiline
      ? event.text.replace(/\r\n|\r/g, '\n')
      : event.text.split(/\r\n|\r|\n/, 2)[0] ?? ''

    if (text.length === 0) return

    const newCursor = cursor.insert(text)
    updateQuery(newCursor.text, newCursor.offset)
  }, [isActive, effectiveColumns, multiline, updateQuery])

  // Backward-compat bridge: existing consumers don't yet wire handleKeyDown
  // to <Box onKeyDown>. Subscribe via useInput and adapt InputEvent →
  // KeyboardEvent until all 11 call sites are migrated (separate PRs).
  // TODO(onKeyDown-migration): remove once all consumers pass handleKeyDown.
  useInput(
    (_input, _key, event) => {
      handleKeyDown(new KeyboardEvent(event.keypress))
    },
    { isActive },
  )

  return { query, queryRef, setQuery, cursorOffset, handleKeyDown, handlePaste }
}
