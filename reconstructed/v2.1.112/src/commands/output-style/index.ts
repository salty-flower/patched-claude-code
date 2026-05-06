import type { Command } from '../../commands.js'

const rateLimitOptions = {
  type: 'local-jsx',
  name: 'rate-limit-options',
  description: 'Show options when rate limit is reached',
  isEnabled: () => false,
  isHidden: true,
  load: () =>> import('./rate-limit-options.js'),
} satisfies Command

export default rateLimitOptions
