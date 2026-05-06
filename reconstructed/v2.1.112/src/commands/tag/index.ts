import type { Command } from '../../commands.js'

// TODO(lift): v112 renamed command to 'advisor' with different description at byte ~11471661
const tag = {
  type: 'local-jsx',
  name: 'advisor',
  description: 'Configure the Advisor Tool to consult a stronger model for guidance at key moments during a task',
  argumentHint: `[${[/* TODO(lift): Eh6 models at byte ~11471661 */].join('|')}|off]`,
  isEnabled: () => {
    // TODO(lift): vx() at byte ~11471661
    return false
  },
  get isHidden() {
    // TODO(lift): vx() at byte ~11471661
    return true
  },
  load: () => import('./tag.js'),
} satisfies Command

export default tag
