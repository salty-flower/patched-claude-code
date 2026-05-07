import { TerminalEvent } from './terminal-event.js'

type WheelModifierState = {
  ctrl?: boolean
  shift?: boolean
  meta?: boolean
}

export class WheelEvent extends TerminalEvent {
  readonly deltaY: number
  readonly ctrl: boolean
  readonly shift: boolean
  readonly meta: boolean

  constructor(deltaY: number, modifiers: WheelModifierState = {}) {
    super('scroll', { bubbles: true, cancelable: true })
    this.deltaY = deltaY
    this.ctrl = modifiers.ctrl ?? false
    this.shift = modifiers.shift ?? false
    this.meta = modifiers.meta ?? false
  }
}
