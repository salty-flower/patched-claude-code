import type { SDKMessage } from '../../../entrypoints/agentSdkTypes.js'
import { checkGate_CACHED_OR_BLOCKING } from '../../../services/analytics/growthbook.js'
import { isPolicyAllowed } from '../../../services/policyLimits/index.js'
import { isEnvTruthy } from '../../envUtils.js'
import type { TodoList } from '../../todo/types.js'
import { getInitialSettings } from '../../settings/settings.js'
import {
  checkGithubAppInstalled,
  checkIsInGitRepo,
  checkNeedsClaudeAiLogin,
} from './preconditions.js'

/**
 * Background remote session type for managing teleport sessions
 */
export type BackgroundRemoteSession = {
  id: string
  command: string
  startTime: number
  status: 'starting' | 'running' | 'completed' | 'failed' | 'killed'
  todoList: TodoList
  title: string
  type: 'remote_session'
  log: SDKMessage[]
}

/**
 * Precondition failures for background remote sessions
 */
export type BackgroundRemoteSessionPrecondition =
  | { type: 'not_logged_in' }
  | { type: 'no_remote_environment' }
  | { type: 'not_in_git_repo' }
  | { type: 'no_git_remote' }
  | { type: 'github_app_not_installed' }
  | { type: 'policy_blocked' }

// TODO(lift): fetchEnvironments import — v112 uses oN() at byte ~6955333 for environments list;
// the exact module path is unresolved.
type RemoteEnvironment = {
  environment_id: string
  kind: string
}

// TODO(lift): fetchEnvironments_V112 at byte ~6955333 — unresolved symbol
async function fetchEnvironments_V112(): Promise<RemoteEnvironment[]> {
  // TODO(lift): oN() at byte ~6955333 — environments fetch, module unresolved
  return []
}

// TODO(lift): detectCurrentRepositoryWithHost_V112 — v112 uses md4() at byte ~6956131
async function detectCurrentRepositoryWithHost_V112(): Promise<{
  host: string
  owner: string
  name: string
} | null> {
  // TODO(lift): md4() at byte ~6956131 — detectCurrentRepositoryWithHost, module unresolved
  return null
}

/**
 * Checks eligibility for creating a background remote session
 * Returns an array of failed preconditions (empty array means all checks passed)
 *
 * v112: Significant drift (jac=0.688):
 *   - Policy check first (unchanged)
 *   - Login and environments fetched in parallel (Pu8 + oN)
 *   - BYOC default environment check added: settings.remote.defaultEnvironmentId
 *     matched against environments list
 *   - Repository detected separately (md4) after the parallel fetch
 *   - github_app_not_installed skipped if BYOC env matches
 */
export async function checkBackgroundRemoteSessionEligibility({
  skipBundle = false,
}: {
  skipBundle?: boolean
} = {}): Promise<BackgroundRemoteSessionPrecondition[]> {
  const errors: BackgroundRemoteSessionPrecondition[] = []

  // Check policy first - if blocked, no need to check other preconditions
  if (!isPolicyAllowed('allow_remote_sessions')) {
    errors.push({ type: 'policy_blocked' })
    return errors
  }

  // v112: login check and environments fetched in parallel; repository detected separately
  const [needsLogin, environments] = await Promise.all([
    checkNeedsClaudeAiLogin(),
    fetchEnvironments_V112(),
  ])

  // Detect current repo after the parallel fetch
  let repository: { host: string; owner: string; name: string } | null = null
  if (needsLogin) {
    errors.push({ type: 'not_logged_in' })
  } else {
    try {
      repository = await detectCurrentRepositoryWithHost_V112()
    } catch {
      errors.push({ type: 'not_logged_in' })
    }
  }

  // v112: BYOC environment check — if user has a defaultEnvironmentId in settings
  // that matches one of the available environments as 'byoc' kind, skip github app check
  const defaultEnvironmentId = getInitialSettings()?.remote?.defaultEnvironmentId
  const hasByocEnv =
    defaultEnvironmentId !== undefined &&
    repository !== null &&
    environments.some(
      env => env.environment_id === defaultEnvironmentId && env.kind === 'byoc',
    )

  const bundleSeedGateOn =
    !skipBundle &&
    (isEnvTruthy(process.env.CCR_FORCE_BUNDLE) ||
      isEnvTruthy(process.env.CCR_ENABLE_BUNDLE) ||
      (await checkGate_CACHED_OR_BLOCKING('tengu_ccr_bundle_seed_enabled')))

  if (!checkIsInGitRepo()) {
    errors.push({ type: 'not_in_git_repo' })
  } else if (bundleSeedGateOn) {
    // has .git/, bundle will work — skip remote+app checks
  } else if (repository === null) {
    errors.push({ type: 'no_git_remote' })
  } else if (!hasByocEnv && repository.host === 'github.com') {
    const hasGithubApp = await checkGithubAppInstalled(
      repository.owner,
      repository.name,
    )
    if (!hasGithubApp) {
      errors.push({ type: 'github_app_not_installed' })
    }
  }

  return errors
}
