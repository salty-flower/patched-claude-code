import { getOrCreateUserID } from '../../utils/config.js'
import { getPlatform, getWslVersion } from '../../utils/platform.js'
import { getCoreUserData } from '../../utils/user.js'
import { getAPIProviderForStatsig } from '../../utils/model/providers.js'
import { getDynamicConfig_CACHED_MAY_BE_STALE } from './growthbook.js'

export type EventMetadata = {
  model?: string
  betas?: string[]
  envContext: {
    platform: string
    arch: string
    version: string
    versionBase: string
    nodeVersion: string
    userType: string
    subscriptionType: string
    skillMode: string
    kairosActive: boolean
    wslVersion?: string
  }
}

export function getEventMetadata({
  model,
  betas,
}: {
  model?: string | boolean
  betas?: string[] | boolean
} = {}): EventMetadata {
  const platform = getPlatform()
  const envContext = {
    platform,
    arch: process.arch,
    version: MACRO.VERSION,
    versionBase: MACRO.VERSION_BASE,
    nodeVersion: process.version,
    userType: process.env.USER_TYPE || 'unknown',
    subscriptionType: getCoreUserData(true).subscriptionType || 'unknown',
    skillMode: process.env.CLAUDE_CODE_SKILL_MODE || 'default',
    kairosActive: false,
    ...(platform === 'wsl' && getWslVersion()
      ? { wslVersion: getWslVersion()! }
      : {}),
  }

  return {
    ...(typeof model === 'string' ? { model } : {}),
    ...(Array.isArray(betas) ? { betas } : {}),
    envContext,
  }
}

export function to1PEventFormat(
  coreMetadata: EventMetadata,
  userMetadata: ReturnType<typeof getCoreUserData>,
  eventMetadata: Record<string, unknown>,
): {
  core: Record<string, unknown>
  env: Record<string, unknown>
  process: Record<string, unknown>
  auth: Record<string, unknown>
  additional: Record<string, unknown>
} {
  return {
    core: {
      model: coreMetadata.model,
      betas: coreMetadata.betas,
    },
    env: coreMetadata.envContext,
    process: {
      pid: process.pid,
      ppid: process.ppid,
    },
    auth: {
      device_id: getOrCreateUserID(),
      ...(userMetadata.email ? { email: userMetadata.email } : {}),
      ...(userMetadata.accountUuid
        ? { account_uuid: userMetadata.accountUuid }
        : {}),
      ...(userMetadata.organizationUuid
        ? { organization_uuid: userMetadata.organizationUuid }
        : {}),
    },
    additional: eventMetadata,
  }
}

export function sanitizeToolNameForAnalytics(name: string): string {
  // Normalize MCP tool names for analytics cardinality reduction
  if (name.startsWith('mcp__')) {
    return 'mcp'
  }
  return name
}
