import type { GrowthBook } from '@growthbook/growthbook'
import { getOrCreateUserID } from '../../utils/config.js'
import { getClaudeConfigHomeDir } from '../../utils/envUtils.js'
import { logError } from '../../utils/log.js'
import { getCoreUserData } from '../../utils/user.js'

// GrowthBook client instance
let growthBook: GrowthBook | null = null
let growthBookConfig: Record<string, unknown> = {}

export type GrowthBookUserAttributes = {
  id: string
  deviceID: string
  sessionId: string
  platform: string
  email?: string
  organizationUUID?: string
  accountUUID?: string
  userType?: string
  subscriptionType?: string
  rateLimitTier?: string
  firstTokenTime?: string
  appVersion?: string
  githubActionsMetadata?: unknown
  apiBaseUrlHost?: string
}

function getApiBaseUrlHost(): string | undefined {
  const baseUrl = process.env.ANTHROPIC_BASE_URL
  if (!baseUrl) return undefined
  try {
    const host = new URL(baseUrl).host
    if (host === 'api.anthropic.com') return undefined
    return host
  } catch {
    return undefined
  }
}

export function getGrowthBookUserAttributes(): GrowthBookUserAttributes {
  const userData = getCoreUserData(true)
  return {
    id: getOrCreateUserID(),
    deviceID: getOrCreateUserID(),
    sessionId: process.env.CLAUDE_CODE_SESSION_ID || '',
    platform: process.platform,
    ...(userData.email ? { email: userData.email } : {}),
    ...(userData.organizationUuid
      ? { organizationUUID: userData.organizationUuid }
      : {}),
    ...(userData.accountUuid ? { accountUUID: userData.accountUuid } : {}),
    ...(process.env.USER_TYPE ? { userType: process.env.USER_TYPE } : {}),
    ...(userData.subscriptionType
      ? { subscriptionType: userData.subscriptionType }
      : {}),
    ...(process.env.CLAUDE_CODE_RATE_LIMIT_TIER
      ? { rateLimitTier: process.env.CLAUDE_CODE_RATE_LIMIT_TIER }
      : {}),
    ...(process.env.CLAUDE_CODE_FIRST_TOKEN_TIME
      ? { firstTokenTime: process.env.CLAUDE_CODE_FIRST_TOKEN_TIME }
      : {}),
    ...(process.env.CLAUDE_CODE_APP_VERSION
      ? { appVersion: process.env.CLAUDE_CODE_APP_VERSION }
      : {}),
    ...(process.env.GITHUB_ACTIONS
      ? { githubActionsMetadata: { isGitHubActions: true } }
      : {}),
    ...(getApiBaseUrlHost()
      ? { apiBaseUrlHost: getApiBaseUrlHost()! }
      : {}),
  }
}

export function getGrowthBookConfigOverrides(): Record<string, unknown> {
  return growthBookConfig
}

export function setGrowthBookConfigOverride(
  key: string,
  value: unknown,
): void {
  growthBookConfig[key] = value
}

export function clearGrowthBookConfigOverrides(): void {
  growthBookConfig = {}
}

export function hasGrowthBookEnvOverride(): boolean {
  return Object.keys(growthBookConfig).length > 0
}

// Feature flag cache
const featureCache = new Map<string, unknown>()
const experimentTracked = new Set<string>()

export function getFeatureValue_CACHED_MAY_BE_STALE<T>(
  key: string,
  defaultValue: T,
): T {
  const cached = featureCache.get(key)
  if (cached !== undefined) return cached as T
  return defaultValue
}

export function getFeatureValue_CACHED_WITH_REFRESH<T>(
  key: string,
  defaultValue: T,
): T {
  return getFeatureValue_CACHED_MAY_BE_STALE(key, defaultValue)
}

export function getFeatureValue_DEPRECATED<T>(
  key: string,
  defaultValue: T,
): T {
  return getFeatureValue_CACHED_MAY_BE_STALE(key, defaultValue)
}

export function getDynamicConfig_CACHED_MAY_BE_STALE<T>(
  key: string,
  defaultValue: T,
): T {
  return getFeatureValue_CACHED_MAY_BE_STALE(key, defaultValue)
}

export function getDynamicConfig_BLOCKS_ON_INIT<T>(
  key: string,
  defaultValue: T,
): T {
  return getFeatureValue_CACHED_MAY_BE_STALE(key, defaultValue)
}

export function checkStatsigFeatureGate_CACHED_MAY_BE_STALE(
  key: string,
): boolean {
  return Boolean(getFeatureValue_CACHED_MAY_BE_STALE(key, false))
}

export async function checkSecurityRestrictionGate(key: string): Promise<boolean> {
  return Boolean(getFeatureValue_CACHED_MAY_BE_STALE(key, false))
}

export async function checkGate_CACHED_OR_BLOCKING(key: string): Promise<boolean> {
  return Boolean(getFeatureValue_CACHED_MAY_BE_STALE(key, false))
}

export function getAllGrowthBookFeatures(): Record<string, unknown> {
  return Object.fromEntries(featureCache)
}

function trackExperiment(key: string): void {
  if (experimentTracked.has(key)) return
  experimentTracked.add(key)
  // Analytics logging would go here
}

export async function initializeGrowthBook(): Promise<GrowthBook | null> {
  if (growthBook) return growthBook
  // Stub implementation - v112 may have removed or changed GrowthBook integration
  return null
}

export function refreshGrowthBookFeatures(): Promise<void> {
  // Stub - v112 may have changed refresh behavior
  return Promise.resolve()
}

export function refreshGrowthBookAfterAuthChange(): void {
  // Stub - v112 may have changed refresh behavior
}

export function onGrowthBookRefresh(callback: () => void): () => void {
  // Stub - v112 may have changed subscription behavior
  callback()
  return () => {}
}

export function resetGrowthBook(): void {
  growthBook = null
  featureCache.clear()
  experimentTracked.clear()
  growthBookConfig = {}
}

export function setupPeriodicGrowthBookRefresh(): void {
  // Stub - v112 may have removed periodic refresh
}

export function stopPeriodicGrowthBookRefresh(): void {
  // Stub
}
