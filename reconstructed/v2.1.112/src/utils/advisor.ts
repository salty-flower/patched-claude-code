import type { BetaUsage } from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs'
import { getFeatureValue_CACHED_MAY_BE_STALE } from '../services/analytics/growthbook.js'
import { getInitialSettings } from './settings/settings.js'

// The SDK does not yet have types for advisor blocks.
// TODO(hackyon): Migrate to the real anthropic SDK types when this feature ships publicly
export type AdvisorServerToolUseBlock = {
  type: 'server_tool_use'
  id: string
  name: 'advisor'
  input: { [key: string]: unknown }
}

export type AdvisorToolResultBlock = {
  type: 'advisor_tool_result'
  tool_use_id: string
  content:
    | {
        type: 'advisor_result'
        text: string
      }
    | {
        type: 'advisor_redacted_result'
        encrypted_content: string
      }
    | {
        type: 'advisor_tool_result_error'
        error_code: string
      }
}

export type AdvisorBlock = AdvisorServerToolUseBlock | AdvisorToolResultBlock

export function isAdvisorBlock(param: {
  type: string
  name?: string
}): param is AdvisorBlock {
  return (
    param.type === 'advisor_tool_result' ||
    (param.type === 'server_tool_use' && param.name === 'advisor')
  )
}

type AdvisorConfig = {
  enabled?: boolean
  canUserConfigure?: boolean
  baseModel?: string
  advisorModel?: string
}

// v112: getAdvisorConfig simplified to a direct feature value call
function getAdvisorConfig(): AdvisorConfig {
  return getFeatureValue_CACHED_MAY_BE_STALE<AdvisorConfig>(
    'tengu_sage_compass',
    {},
  )
}

// v112: isAdvisorEnabled simplified — no CLAUDE_CODE_DISABLE_ADVISOR_TOOL check,
// no shouldIncludeFirstPartyOnlyBetas() check. Just checks config.enabled === true.
export function isAdvisorEnabled(): boolean {
  return getAdvisorConfig()?.enabled === true
}

// v112: getExperimentAdvisorModels simplified — no isAdvisorEnabled/canUserConfigure gates,
// just returns advisorModel from config directly.
export function getExperimentAdvisorModels(
  config: AdvisorConfig,
): string | undefined {
  return config.advisorModel
}

// @[MODEL LAUNCH]: Add the new model if it supports the advisor tool.
// Checks whether the main loop model supports calling the advisor tool.
// v112: added opus-4-7
export function modelSupportsAdvisor(model: string): boolean {
  const m = model.toLowerCase()
  return (
    m.includes('opus-4-7') ||
    m.includes('opus-4-6') ||
    m.includes('sonnet-4-6') ||
    false
  )
}

// @[MODEL LAUNCH]: Add the new model if it can serve as an advisor model.
// v112: added opus-4-7
export function isValidAdvisorModel(model: string): boolean {
  const m = model.toLowerCase()
  return (
    m.includes('opus-4-7') ||
    m.includes('opus-4-6') ||
    m.includes('sonnet-4-6') ||
    false
  )
}

export function getInitialAdvisorSetting(): string | undefined {
  if (!isAdvisorEnabled()) {
    return undefined
  }
  return getInitialSettings().advisorModel
}

export function getAdvisorUsage(
  usage: BetaUsage,
): Array<BetaUsage & { model: string }> {
  const iterations = usage.iterations as
    | Array<{ type: string }>
    | null
    | undefined
  if (!iterations) {
    return []
  }
  return iterations.filter(
    it => it.type === 'advisor_message',
  ) as unknown as Array<BetaUsage & { model: string }>
}
