import type { Command } from '../../commands.js'

const exitJsx = {
  type: 'local-jsx',
  name: 'exit',
  aliases: ['quit'],
  description: 'Exit the REPL',
  immediate: true,
  load: () => import('./exit.js'),
} satisfies Command

// TODO(lift): v112 also exports a non-interactive variant at byte ~11482000
const exitLocal = {
  type: 'local',
  name: 'exit',
  supportsNonInteractive: true,
  description: 'Exit the REPL',
  load: () => import('./exit.js'),
} satisfies Command

export default exitJsx
