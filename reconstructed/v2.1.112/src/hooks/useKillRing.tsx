import * as React from 'react'

const KILL_RING_MAX_SIZE = 10

type KillRingMode =
  | { type: 'idle' }
  | { type: 'killing' }
  | { type: 'yanked'; start: number; length: number; index: number }

type KillRingState = {
  ring: string[]
  mode: KillRingMode
}

type KillRingAction =
  | { type: 'kill'; text: string; direction: 'prepend' | 'append' }
  | { type: 'yank'; start: number; length: number }
  | { type: 'yankPop' }
  | { type: 'updateYankLength'; length: number }
  | { type: 'interrupt' }

const initialState: KillRingState = {
  ring: [],
  mode: { type: 'idle' },
}

function killRingReducer(
  state: KillRingState,
  action: KillRingAction,
): KillRingState {
  switch (action.type) {
    case 'kill': {
      if (action.text.length === 0) return state
      const newRing =
        state.mode.type === 'killing' && state.ring.length > 0
          ? [
              action.direction === 'prepend'
                ? action.text + state.ring[0]
                : state.ring[0] + action.text,
              ...state.ring.slice(1),
            ]
          : [action.text, ...state.ring]
      return {
        ring: newRing.slice(0, KILL_RING_MAX_SIZE),
        mode: { type: 'killing' },
      }
    }
    case 'yank':
      return {
        ...state,
        mode: { type: 'yanked', start: action.start, length: action.length, index: 0 },
      }
    case 'yankPop': {
      if (state.mode.type !== 'yanked' || state.ring.length <= 1) {
        return state
      }
      const nextIndex = (state.mode.index + 1) % state.ring.length
      return {
        ...state,
        mode: { ...state.mode, index: nextIndex },
      }
    }
    case 'updateYankLength': {
      if (state.mode.type !== 'yanked') return state
      return {
        ...state,
        mode: { ...state.mode, length: action.length },
      }
    }
    case 'interrupt': {
      if (state.mode.type === 'idle') return state
      return { ...state, mode: { type: 'idle' } }
    }
    default:
      return state
  }
}

/** Get the most recently killed text. */
export function getLastKill(state: KillRingState): string {
  return state.ring[0] ?? ''
}

/** Get the next yank-pop result, or null if not available. */
export function getYankPopResult(state: KillRingState): {
  text: string
  start: number
  length: number
} | null {
  if (state.mode.type !== 'yanked' || state.ring.length <= 1) {
    return null
  }
  const nextIndex = (state.mode.index + 1) % state.ring.length
  const { start, length } = state.mode
  return { text: state.ring[nextIndex] ?? '', start, length }
}

type KillRingStore = {
  get state(): KillRingState
  dispatch(action: KillRingAction): void
}

function createKillRingStore(): KillRingStore {
  let state = initialState
  return {
    get state() {
      return state
    },
    dispatch(action: KillRingAction) {
      state = killRingReducer(state, action)
    },
  }
}

const KillRingContext = React.createContext<KillRingStore>(createKillRingStore())

/**
 * Provider that creates a single kill-ring store for the subtree.
 * Multiple input fields under the same provider share one kill ring
 * (emacs-style global kill ring).
 */
export function KillRingProvider({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  const storeRef = React.useRef<KillRingStore | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createKillRingStore()
  }
  return (
    <KillRingContext.Provider value={storeRef.current}>
      {children}
    </KillRingContext.Provider>
  )
}

/** Hook to access the shared kill ring. */
export function useKillRing(): KillRingStore {
  return React.useContext(KillRingContext)
}
