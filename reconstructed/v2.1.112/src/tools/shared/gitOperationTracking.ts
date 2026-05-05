/**
 * Shell-agnostic git operation tracking for usage metrics.
 *
 * Detects `git commit`, `git push`, `gh pr create`, `glab mr create`, and
 * curl-based PR creation in command strings, then increments OTLP counters
 * and fires analytics events. The regexes operate on raw command text so they
 * work identically for Bash and PowerShell (both invoke git/gh/glab/curl as
 * external binaries with the same argv syntax).
 */

import { getCommitCounter, getPrCounter } from '../../bootstrap/state.js'
import {
  type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  logEvent,
} from '../../services/analytics/index.js'

/**
 * Build a regex that matches `git <subcmd>` while tolerating git's global
 * options between `git` and the subcommand.
 */
function gitCmdRe(subcmd: string, suffix = ''): RegExp {
  return new RegExp(
    `\\bgit(?:\\s+-[cC]\\s+\\S+|\\s+--\\S+=\\S+)*\\s+${subcmd}\\b${suffix}`,
  )
}

// v112: these constants are module-level (init block), same regex values.
const GIT_COMMIT_RE = gitCmdRe('commit')
const GIT_PUSH_RE = gitCmdRe('push')
const GIT_CHERRY_PICK_RE = gitCmdRe('cherry-pick')
const GIT_MERGE_RE = gitCmdRe('merge', '(?!-)')
const GIT_REBASE_RE = gitCmdRe('rebase')

// v112 new: regex to detect `gh pr checkout <number>` for branch-switch tracking.
// RNz = /\bgh\s+pr\s+checkout\b[^&|;]*\s(\d+)(?=\s|$|[&|;])/
const GH_PR_CHECKOUT_RE =
  /\bgh\s+pr\s+checkout\b[^&|;]*\s(\d+)(?=\s|$|[&|;])/

export type CommitKind = 'committed' | 'amended' | 'cherry-picked'
export type BranchAction = 'merged' | 'rebased'
export type PrAction =
  | 'created'
  | 'edited'
  | 'merged'
  | 'commented'
  | 'closed'
  | 'ready'

const GH_PR_ACTIONS: readonly { re: RegExp; action: PrAction; op: string }[] = [
  { re: /\bgh\s+pr\s+create\b/, action: 'created', op: 'pr_create' },
  { re: /\bgh\s+pr\s+edit\b/, action: 'edited', op: 'pr_edit' },
  { re: /\bgh\s+pr\s+merge\b/, action: 'merged', op: 'pr_merge' },
  { re: /\bgh\s+pr\s+comment\b/, action: 'commented', op: 'pr_comment' },
  { re: /\bgh\s+pr\s+close\b/, action: 'closed', op: 'pr_close' },
  { re: /\bgh\s+pr\s+ready\b/, action: 'ready', op: 'pr_ready' },
]

/**
 * Parse PR info from a GitHub PR URL.
 */
function parsePrUrl(
  url: string,
): { prNumber: number; prUrl: string; prRepository: string } | null {
  const match = url.match(/https:\/\/github\.com\/([^/]+\/[^/]+)\/pull\/(\d+)/)
  if (match?.[1] && match?.[2]) {
    return {
      prNumber: parseInt(match[2], 10),
      prUrl: url,
      prRepository: match[1],
    }
  }
  return null
}

/** Find a GitHub PR URL embedded anywhere in stdout and parse it. */
function findPrInStdout(stdout: string): ReturnType<typeof parsePrUrl> {
  const m = stdout.match(/https:\/\/github\.com\/[^/\s]+\/[^/\s]+\/pull\/\d+/)
  return m ? parsePrUrl(m[0]) : null
}

// Exported for testing purposes
export function parseGitCommitId(stdout: string): string | undefined {
  const match = stdout.match(/\[[\w./-]+(?: \(root-commit\))? ([0-9a-f]+)\]/)
  return match?.[1]
}

/**
 * Parse branch name from git push output.
 */
function parseGitPushBranch(output: string): string | undefined {
  const match = output.match(
    /^\s*[+\-*!= ]?\s*(?:\[new branch\]|\S+\.\.+\S+)\s+\S+\s*->\s*(\S+)/m,
  )
  return match?.[1]
}

/**
 * gh pr merge/close/ready print "✓ <Verb> pull request owner/repo#1234" with
 * no URL. Extract the PR number from the text.
 */
function parsePrNumberFromText(stdout: string): number | undefined {
  const match = stdout.match(/[Pp]ull request (?:\S+#)?#?(\d+)/)
  return match?.[1] ? parseInt(match[1], 10) : undefined
}

/**
 * Extract target ref from `git merge <ref>` / `git rebase <ref>` command.
 */
function parseRefFromCommand(
  command: string,
  verb: string,
): string | undefined {
  const after = command.split(gitCmdRe(verb))[1]
  if (!after) return undefined
  for (const t of after.trim().split(/\s+/)) {
    if (/^[&|;><]/.test(t)) break
    if (t.startsWith('-')) continue
    return t
  }
  return undefined
}

/**
 * v112 new: link a session to a PR by checked-out PR number.
 * Called when `gh pr checkout <number>` is detected.
 * TODO(lift): Rd4 at byte ~6932613 — links session to PR via sessionStorage.
 */
async function _linkSessionToCheckedOutPr_V112(prNumber: number): Promise<void> {
  // TODO(lift): Rd4 implementation at byte ~6932613
  void prNumber
}

/**
 * v112 new: track push/branch activity via an unresolved helper.
 * Called on git push and on push without a PR action.
 * TODO(lift): kd4 at byte ~6933107 — likely records branch push telemetry.
 */
async function _trackPushBranchTelemetry_V112(branch?: string): Promise<void> {
  // TODO(lift): kd4 implementation at byte ~6933107
  void branch
}

/**
 * Scan bash command + output for git operations worth surfacing in the
 * collapsed tool-use summary.
 */
export function detectGitOperation(
  command: string,
  output: string,
): {
  commit?: { sha: string; kind: CommitKind }
  push?: { branch: string }
  branch?: { ref: string; action: BranchAction }
  pr?: { number: number; url?: string; action: PrAction }
} {
  const result: ReturnType<typeof detectGitOperation> = {}
  const isCherryPick = GIT_CHERRY_PICK_RE.test(command)
  if (GIT_COMMIT_RE.test(command) || isCherryPick) {
    const sha = parseGitCommitId(output)
    if (sha) {
      result.commit = {
        sha: sha.slice(0, 6),
        kind: isCherryPick
          ? 'cherry-picked'
          : /--amend\b/.test(command)
            ? 'amended'
            : 'committed',
      }
    }
  }
  if (GIT_PUSH_RE.test(command)) {
    const branch = parseGitPushBranch(output)
    if (branch) result.push = { branch }
  }
  if (
    GIT_MERGE_RE.test(command) &&
    /(Fast-forward|Merge made by)/.test(output)
  ) {
    const ref = parseRefFromCommand(command, 'merge')
    if (ref) result.branch = { ref, action: 'merged' }
  }
  if (GIT_REBASE_RE.test(command) && /Successfully rebased/.test(output)) {
    const ref = parseRefFromCommand(command, 'rebase')
    if (ref) result.branch = { ref, action: 'rebased' }
  }
  const prAction = GH_PR_ACTIONS.find(a => a.re.test(command))?.action
  if (prAction) {
    const pr = findPrInStdout(output)
    if (pr) {
      result.pr = { number: pr.prNumber, url: pr.prUrl, action: prAction }
    } else {
      const num = parsePrNumberFromText(output)
      if (num) result.pr = { number: num, action: prAction }
    }
  }
  return result
}

// Exported for testing purposes
// v112 changes (jac=0.571):
// - New: gh pr checkout detection fires Rd4(_linkSessionToCheckedOutPr_V112).
// - New: git push fires kd4 when there is no matching PR action.
// - PR creation auto-link (linkSessionToPR) is now factored into Rd4.
// - glab mr create still tracked.
// - curl POST PR detection unchanged.
export function trackGitOperations(
  command: string,
  exitCode: number,
  stdout?: string,
): void {
  const success = exitCode === 0
  if (!success) {
    return
  }

  if (GIT_COMMIT_RE.test(command)) {
    logEvent('tengu_git_operation', {
      operation:
        'commit' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    })
    if (command.match(/--amend\b/)) {
      logEvent('tengu_git_operation', {
        operation:
          'commit_amend' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      })
    }
    getCommitCounter()?.add(1)
  }

  if (GIT_PUSH_RE.test(command)) {
    logEvent('tengu_git_operation', {
      operation:
        'push' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    })
  }

  const prHit = GH_PR_ACTIONS.find(a => a.re.test(command))
  if (prHit) {
    logEvent('tengu_git_operation', {
      operation:
        prHit.op as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    })
  }

  if (prHit?.action === 'created') {
    getPrCounter()?.add(1)
    // v112: PR URL auto-link is now handled via Rd4 (factored out of inline).
    if (stdout) {
      const prInfo = findPrInStdout(stdout)
      if (prInfo) {
        void _linkSessionToCheckedOutPr_V112(prInfo.prNumber)
      }
    }
  }

  // v112 new: detect `gh pr checkout <number>` and call kd4 with PR number.
  const checkoutMatch = command.match(GH_PR_CHECKOUT_RE)
  if (checkoutMatch?.[1]) {
    void _trackPushBranchTelemetry_V112(checkoutMatch[1]).catch(() => {})
  } else if (GIT_PUSH_RE.test(command) && !prHit) {
    // v112 new: on plain push (no PR action), call kd4 for branch telemetry.
    void _trackPushBranchTelemetry_V112().catch(() => {})
  }

  if (command.match(/\bglab\s+mr\s+create\b/)) {
    logEvent('tengu_git_operation', {
      operation:
        'pr_create' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    })
    getPrCounter()?.add(1)
  }

  const isCurlPost =
    command.match(/\bcurl\b/) &&
    (command.match(/-X\s*POST\b/i) ||
      command.match(/--request\s*=?\s*POST\b/i) ||
      command.match(/\s-d\s/))
  const isPrEndpoint = command.match(
    /https?:\/\/[^\s'"]*\/(pulls|pull-requests|merge[-_]requests)(?!\/\d)/i,
  )
  if (isCurlPost && isPrEndpoint) {
    logEvent('tengu_git_operation', {
      operation:
        'pr_create' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    })
    getPrCounter()?.add(1)
  }
}
