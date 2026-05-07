import { TerminalEvent } from './terminal-event.js'

export class PasteEvent extends TerminalEvent {
  readonly content: string

  constructor(content: string) {
    super('paste', { bubbles: true, cancelable: true })
    this.content = content
  }
}
