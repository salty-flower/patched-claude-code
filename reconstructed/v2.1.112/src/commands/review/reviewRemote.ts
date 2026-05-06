/**
 * Teleported /ultrareview execution. Creates a CCR session with the current repo,
 * sends the review prompt as the initial message, and registers a
 * RemoteAgentTask so the polling loop pipes results back into the local
 * session via task-notification. Mirrors the /ultraplan → CCR flow.
 *
 * TODO(#22051): pass useBundleMode once landed so local-only / uncommitted
 * repo state is captured. The GitHub-clone path (current) only works for
 * pushed branches on repos with the Claude GitHub app installed.
 */

import type { ContentBlockParam } from '@anthropic-ai/sdk/resources/messages.js'
import { getFeatureValue_CACHED_MAY_BE_STALE } from '../../services/analytics/growthbook.js'
import {
  type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  logEvent,
} from '../../services/analytics/index.js'
import { fetchUltrareviewQuota } from '../../services/api/ultrareviewQuota.js'
import { fetchUtilization } from '../../services/api/usage.js'
import type { ToolUseContext } from '../../Tool.js'
import {
  checkRemoteAgentEligibility,
  formatPreconditionError,
  getRemoteTaskSessionUrl,
  registerRemoteAgentTask,
} from '../../tasks/RemoteAgentTask/RemoteAgentTask.js'
import { isEnterpriseSubscriber, isTeamSubscriber } from '../../utils/auth.js'
import { detectCurrentRepositoryWithHost } from '../../utils/detectRepository.js'
import { execFileNoThrow } from '../../utils/execFileNoThrow.js'
import { getDefaultBranch, gitExe } from '../../utils/git.js'
import { teleportToRemote } from '../../utils/teleport.js'

// One-time session flag: once the user confirms overage billing via the
// dialog, all subsequent /ultrareview invocations in this session proceed
// without re-prompting.
let sessionOverageConfirmed = false

export function confirmOverage(): void {
  sessionOverageConfirmed = true
}

export type OverageGate =
  | { kind: 'proceed'; billingNote: string }
  | { kind: 'not-enabled' }
  | { kind: 'low-balance'; available: number }
  | { kind: 'needs-confirm' }

/**
 * Determine whether the user can launch an ultrareview and under what
 * billing terms. Fetches quota and utilization in parallel.
 */
export async function checkOverageGate(): Promise<OverageGate> {
  // Team and Enterprise plans include ultrareview — no free-review quota
  // or Extra Usage dialog. The quota endpoint is scoped to consumer plans
  // (pro/max); hitting it on team/ent would surface a confusing dialog.
  if (isTeamSubscriber() || isEnterpriseSubscriber()) {
    return { kind: 'proceed', billingNote: '' }
  }

  const [quota, utilization] = await Promise.all([
    fetchUltrareviewQuota(),
    fetchUtilization().catch(() => null),
  ])

  // No quota info (non-subscriber or endpoint down) — let it through,
  // server-side billing will handle it.
  if (!quota) {
    return { kind: 'proceed', billingNote: '' }
  }

  if (quota.reviews_remaining > 0) {
    return {
      kind: 'proceed',
      billingNote: ` This is free ultrareview ${quota.reviews_used + 1} of ${quota.reviews_limit}.`,
    }
  }

  // Utilization fetch failed (transient network error, timeout, etc.) —
  // let it through, same rationale as the quota fallback above.
  if (!utilization) {
    return { kind: 'proceed', billingNote: '' }
  }

  // Free reviews exhausted — check Extra Usage setup.
  const extraUsage = utilization.extra_usage
  if (!extraUsage?.is_enabled) {
    logEvent('tengu_review_overage_not_enabled', {})
    return { kind: 'not-enabled' }
  }

  // Check available balance (null monthly_limit = unlimited).
  const monthlyLimit = extraUsage.monthly_limit
  const usedCredits = extraUsage.used_credits ?? 0
  const available =
    monthlyLimit === null || monthlyLimit === undefined
      ? Infinity
      : monthlyLimit - usedCredits

  if (available < 10) {
    logEvent('tengu_review_overage_low_balance', { available })
    return { kind: 'low-balance', available }
  }

  if (!sessionOverageConfirmed) {
    logEvent('tengu_review_overage_dialog_shown', {})
    return { kind: 'needs-confirm' }
  }

  return {
    kind: 'proceed',
    billingNote: ' This review bills as Extra Usage.',
  }
}

// TODO(lift): v112 launchRemoteReview has major structural changes at byte ~11113038
// It now takes an object with mode/prNumber/baseBranch/mergeBaseSha/diffStat
// and returns { launched, sessionId, sessionUrl, blocks } instead of ContentBlockParam[] | null
export async function launchRemoteReview(
  args: string,
  context: ToolUseContext,
  billingNote?: string,
): Promise<ContentBlockParam[] | null> {
  // TODO(lift): v112 refactored to use structured args object at byte ~11113038
  const eligibility = await checkRemoteAgentEligibility()
  if (!eligibility.eligible) {
    const blockers = eligibility.errors.filter(
      e => e.type !== 'no_remote_environment',
    )
    if (blockers.length > 0) {
      logEvent('tengu_review_remote_precondition_failed', {
        precondition_errors: blockers
          .map(e => e.type)
          .join(
            ',',
          ) as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      })
      const reasons = blockers.map(formatPreconditionError).join('\n')
      return [
        {
          type: 'text',
          text: `Ultrareview cannot launch:\n${reasons}`,
        },
      ]
    }
  }

  const resolvedBillingNote = billingNote ?? ''

  const prNumber = args.trim()
  const isPrNumber = /^\d+$/.test(prNumber)
  const CODE_REVIEW_ENV_ID = 'env_011111111111111111111113'

  const raw = getFeatureValue_CACHED_MAY_BE_STALE<Record<
    string,
    unknown
  > | null>('tengu_review_bughunter_config', null)
  const posInt = (v: unknown, fallback: number, max?: number): number => {
    if (typeof v !== 'number' || !Number.isFinite(v)) return fallback
    const n = Math.floor(v)
    if (n <= 0) return fallback
    return max !== undefined && n > max ? fallback : n
  }
  const commonEnvVars = {
    BUGHUNTER_DRY_RUN: '1',
    BUGHUNTER_FLEET_SIZE: String(posInt(raw?.fleet_size, 5, 20)),
    BUGHUNTER_MAX_DURATION: String(posInt(raw?.max_duration_minutes, 10, 25)),
    BUGHUNTER_AGENT_TIMEOUT: String(
      posInt(raw?.agent_timeout_seconds, 600, 1800),
    ),
    BUGHUNTER_TOTAL_WALLCLOCK: String(
      posInt(raw?.total_wallclock_minutes, 22, 27),
    ),
    // TODO(lift): v112 adds BUGHUNTER_MODEL from OlK() at byte ~11113038
    ...(process.env.BUGHUNTER_DEV_BUNDLE_B64 && {
      BUGHUNTER_DEV_BUNDLE_B64: process.env.BUGHUNTER_DEV_BUNDLE_B64,
    }),
  }

  let session
  let command
  let target
  if (isPrNumber) {
    const repo = await detectCurrentRepositoryWithHost()
    if (!repo || repo.host !== 'github.com') {
      logEvent('tengu_review_remote_precondition_failed', {})
      return null
    }
    // TODO(lift): v112 uses CF() with source="ultrareview", tags=["ultrareview"] at byte ~11113038
    session = await teleportToRemote({
      initialMessage: null,
      description: `ultrareview: ${repo.owner}/${repo.name}#${prNumber}`,
      signal: context.abortController.signal,
      branchName: `refs/pull/${prNumber}/head`,
      environmentId: CODE_REVIEW_ENV_ID,
      environmentVariables: {
        BUGHUNTER_PR_NUMBER: prNumber,
        BUGHUNTER_REPOSITORY: `${repo.owner}/${repo.name}`,
        ...commonEnvVars,
      },
    })
    command = `/ultrareview ${prNumber}`
    target = `${repo.owner}/${repo.name}#${prNumber}`
  } else {
    const baseBranch = (await getDefaultBranch()) || 'main'
    const { stdout: mbOut, code: mbCode } = await execFileNoThrow(
      gitExe(),
      ['merge-base', baseBranch, 'HEAD'],
      { preserveOutputOnError: false },
    )
    const mergeBaseSha = mbOut.trim()
    if (mbCode !== 0 || !mergeBaseSha) {
      logEvent('tengu_review_remote_precondition_failed', {})
      return [
        {
          type: 'text',
          text: `Could not find merge-base with ${baseBranch}. Make sure you're in a git repo with a ${baseBranch} branch.`,
        },
      ]
    }

    const { stdout: diffStat, code: diffCode } = await execFileNoThrow(
      gitExe(),
      ['diff', '--shortstat', mergeBaseSha],
      { preserveOutputOnError: false },
    )
    if (diffCode === 0 && !diffStat.trim()) {
      logEvent('tengu_review_remote_precondition_failed', {})
      return [
        {
          type: 'text',
          text: `No changes against the ${baseBranch} fork point. Make some commits or stage files first.`,
        },
      ]
    }

    // TODO(lift): v112 uses CF() with useBundle, bundleBaseRef, tags, onBundleFail at byte ~11113038
    session = await teleportToRemote({
      initialMessage: null,
      description: `ultrareview: ${baseBranch}`,
      signal: context.abortController.signal,
      useBundle: true,
      environmentId: CODE_REVIEW_ENV_ID,
      environmentVariables: {
        BUGHUNTER_BASE_BRANCH: mergeBaseSha,
        ...commonEnvVars,
      },
    })
    if (!session) {
      logEvent('tengu_review_remote_teleport_failed', {})
      return [
        {
          type: 'text',
          text: 'Repo is too large. Push a PR and use `/ultrareview <PR#>` instead.',
        },
      ]
    }
    command = '/ultrareview'
    target = baseBranch
  }

  if (!session) {
    logEvent('tengu_review_remote_teleport_failed', {})
    return null
  }
  // TODO(lift): v112 uses D96() registerRemoteAgentTask at byte ~11113038
  registerRemoteAgentTask({
    remoteTaskType: 'ultrareview',
    session,
    command,
    context,
    isRemoteReview: true,
  })
  logEvent('tengu_review_remote_launched', {})
  const sessionUrl = getRemoteTaskSessionUrl(session.id)
  // TODO(lift): v112 adds billingNote prefix and diffStat suffix at byte ~11113038
  return [
    {
      type: 'text',
      text: `Ultrareview launched for ${target} (~10–20 min, runs in the cloud). Track: ${sessionUrl}${resolvedBillingNote} Findings arrive via task-notification. Briefly acknowledge the launch to the user without repeating the target or URL — both are already visible in the tool output above.`,
    },
  ]
}
