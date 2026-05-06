// TODO(lift): advisor.ts was heavily restructured in v112.
// v88 had a full local command implementation here; v112 minified shows
// voice command content at the matched region, suggesting advisor was
// either relocated, removed, or replaced. The call function (v88 decl
// [10898325,10899645]) has no v112 match.
// TODO(lift): reconstruct actual v112 advisor command at byte ~11534000

import type { Command } from '../commands.js'

const advisor: Command = {
  type: 'local',
  name: 'advisor',
  description: 'Configure the advisor model',
  argumentHint: '[<model>|off]',
  isEnabled: () => false,
  get isHidden() {
    return true
  },
  supportsNonInteractive: true,
  load: () => Promise.resolve({
    call: async () => ({
      type: 'text' as const,
      value: 'Advisor command is not available in this version.',
    }),
  }),
}

export default advisor
