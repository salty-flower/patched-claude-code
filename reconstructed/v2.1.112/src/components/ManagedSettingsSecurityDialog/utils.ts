import {
  DANGEROUS_SHELL_SETTINGS,
  SAFE_ENV_VARS,
} from '../../utils/managedEnvConstants.js'
import type { SettingsJson } from '../../utils/settings/types.js'
import { jsonStringify } from '../../utils/slowOperations.js'

type DangerousShellSetting = (typeof DANGEROUS_SHELL_SETTINGS)[number]

export type DangerousSettings = {
  shellSettings: Partial<Record<DangerousShellSetting, string>>
  envVars: Record<string, string>
  hasHooks: boolean
  hooks?: unknown
}

/**
 * Extract dangerous settings from a settings object.
 *
 * Dangerous env vars are determined by checking against SAFE_ENV_VARS -
 * any env var NOT in SAFE_ENV_VARS is considered dangerous.
 * See managedEnv.ts for the authoritative list and threat categories.
 *
 * v112 changes:
 * - DANGEROUS_SHELL_SETTINGS is now a Set-like structure with command objects
 *   (some entries have { command: string } shape instead of plain string)
 * - SAFE_ENV_VARS expanded with new provider-related env vars
 */
export function extractDangerousSettings(
  settings: SettingsJson | null | undefined,
): DangerousSettings {
  if (!settings) {
    return {
      shellSettings: {},
      envVars: {},
      hasHooks: false,
    }
  }

  // Extract dangerous shell settings
  // v112: DANGEROUS_SHELL_SETTINGS entries may be objects with `command` field
  const shellSettings: Partial<Record<DangerousShellSetting, string>> = {}
  for (const key of DANGEROUS_SHELL_SETTINGS) {
    const value = settings[key]
    let extractedValue: string | undefined
    if (typeof value === 'string') {
      extractedValue = value
    } else if (
      value !== null &&
      typeof value === 'object' &&
      'command' in value &&
      typeof (value as Record<string, unknown>).command === 'string'
    ) {
      extractedValue = (value as { command: string }).command
    }
    if (extractedValue !== undefined && extractedValue.length > 0) {
      shellSettings[key] = extractedValue
    }
  }

  // Extract dangerous env vars - any var NOT in SAFE_ENV_VARS is dangerous
  const envVars: Record<string, string> = {}
  if (settings.env && typeof settings.env === 'object') {
    for (const [key, value] of Object.entries(settings.env)) {
      if (typeof value === 'string' && value.length > 0) {
        // Check if this env var is NOT in the safe list
        if (!SAFE_ENV_VARS.has(key.toUpperCase())) {
          envVars[key] = value
        }
      }
    }
  }

  // Check for hooks
  const hasHooks =
    settings.hooks !== undefined &&
    settings.hooks !== null &&
    typeof settings.hooks === 'object' &&
    Object.keys(settings.hooks).length > 0

  return {
    shellSettings,
    envVars,
    hasHooks,
    hooks: hasHooks ? settings.hooks : undefined,
  }
}

/**
 * Check if settings contain any dangerous settings
 */
export function hasDangerousSettings(dangerous: DangerousSettings): boolean {
  return (
    Object.keys(dangerous.shellSettings).length > 0 ||
    Object.keys(dangerous.envVars).length > 0 ||
    dangerous.hasHooks
  )
}

/**
 * Compare two sets of dangerous settings to see if the new settings
 * have changed or added dangerous settings compared to the old settings
 */
export function hasDangerousSettingsChanged(
  oldSettings: SettingsJson | null | undefined,
  newSettings: SettingsJson | null | undefined,
): boolean {
  const oldDangerous = extractDangerousSettings(oldSettings)
  const newDangerous = extractDangerousSettings(newSettings)

  // If new settings don't have any dangerous settings, no prompt needed
  if (!hasDangerousSettings(newDangerous)) {
    return false
  }

  // If old settings didn't have dangerous settings but new does, prompt needed
  if (!hasDangerousSettings(oldDangerous)) {
    return true
  }

  // Compare the dangerous settings - any change triggers a prompt
  const oldJson = jsonStringify({
    shellSettings: oldDangerous.shellSettings,
    envVars: oldDangerous.envVars,
    hooks: oldDangerous.hooks,
  })
  const newJson = jsonStringify({
    shellSettings: newDangerous.shellSettings,
    envVars: newDangerous.envVars,
    hooks: newDangerous.hooks,
  })

  return oldJson !== newJson
}

/**
 * Format dangerous settings as a human-readable list for the UI
 * Only returns setting names, not values
 */
export function formatDangerousSettingsList(
  dangerous: DangerousSettings,
): string[] {
  const items: string[] = []

  // Shell settings (names only)
  for (const key of Object.keys(dangerous.shellSettings)) {
    items.push(key)
  }

  // Env vars (names only)
  for (const key of Object.keys(dangerous.envVars)) {
    items.push(key)
  }

  // Hooks
  if (dangerous.hasHooks) {
    items.push('hooks')
  }

  return items
}
