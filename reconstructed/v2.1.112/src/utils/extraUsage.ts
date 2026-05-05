import { isClaudeAISubscriber } from './auth.js'
import { has1mContext } from './context.js'
import { getDefaultModel } from './model.js'

export function isBilledAsExtraUsage(
  model: string | null,
  isFastMode: boolean,
  isOpus1mMerged: boolean,
): boolean {
  if (!isClaudeAISubscriber()) return false
  if (isFastMode) return true

  const m = (model ?? getDefaultModel())
    .toLowerCase()
    .replace(/\[1m\]$/, '')
    .trim()
  if (!has1mContext(m)) return false

  const isOpus46 = m.includes('opus-4-6')
  const isOpus47 = m.includes('opus-4-7')
  const isSonnet46 = m.includes('sonnet-4-6')

  if (isOpus46 && isOpus1mMerged) return false
  if (isOpus47 && isOpus1mMerged) return false

  return isOpus46 || isOpus47 || isSonnet46
}
