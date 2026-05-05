import { initAutoDream } from '../services/autoDream/autoDream.js'
import { initExtractMemories } from '../services/extractMemories/extractMemories.js'
import { initMagicDocs } from '../services/MagicDocs/magicDocs.js'
import { ensureDeepLinkProtocolRegistered } from './deepLink/registerProtocol.js'
import { getIsInteractive, getLastInteractionTime } from '../bootstrap/state.js'
import {
  cleanupOldMessageFilesInBackground,
} from './cleanup.js'
import { cleanupOldVersions } from './nativeInstaller/index.js'
import { initSkillImprovement } from './hooks/skillImprovement.js'

// 10 minutes after start.
const DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION = 10 * 60 * 1000

/**
 * v112: Significantly simplified — feature gates removed.
 * - initExtractMemories called directly (no feature('EXTRACT_MEMORIES') gate)
 * - initAutoDream and initMagicDocs and initSkillImprovement called directly
 * - ensureDeepLinkProtocolRegistered called directly when interactive (no feature('LODESTONE') gate)
 * - autoUpdateMarketplacesAndPluginsInBackground dropped
 * - ant-only recurring cleanup interval dropped
 */
export function startBackgroundHousekeeping(): void {
  initExtractMemories()
  initAutoDream()
  initMagicDocs()
  initSkillImprovement()

  if (getIsInteractive()) {
    void ensureDeepLinkProtocolRegistered()
  }

  let needsCleanup = true
  async function runVerySlowOps(): Promise<void> {
    // If the user did something in the last minute, don't make them wait for these slow operations to run.
    if (
      getIsInteractive() &&
      getLastInteractionTime() > Date.now() - 1000 * 60
    ) {
      setTimeout(
        runVerySlowOps,
        DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION,
      ).unref()
      return
    }

    if (needsCleanup) {
      needsCleanup = false
      await cleanupOldMessageFilesInBackground()
    }

    if (
      getIsInteractive() &&
      getLastInteractionTime() > Date.now() - 1000 * 60
    ) {
      setTimeout(
        runVerySlowOps,
        DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION,
      ).unref()
      return
    }

    await cleanupOldVersions()
  }

  setTimeout(
    runVerySlowOps,
    DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION,
  ).unref()
}
