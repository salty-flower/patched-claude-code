/**
 * REPL-specific wrapper around initBridgeCore. Owns the parts that read
 * bootstrap state — gates, cwd, session ID, git context, OAuth, title
 * derivation — then delegates to the bootstrap-free core.
 *
 * Split out of replBridge.ts because the sessionStorage import
 * (getCurrentSessionTitle) transitively pulls in src/commands.ts → the
 * entire slash command + React component tree (~1300 modules). Keeping
 * initBridgeCore in a file that doesn't touch sessionStorage lets
 * daemonBridge.ts import the core without bloating the Agent SDK bundle.
 *
 * Called via dynamic import by useReplBridge (auto-start) and print.ts
 * (SDK -p mode via query.enableRemoteControl).
 */

import { getOriginalCwd, getSessionId } from '../bootstrap/state.js'
import type { SDKMessage } from '../entrypoints/agentSdkTypes.js'
import type { SDKControlResponse } from '../entrypoints/sdk/controlTypes.js'
import { getOrganizationUUID } from '../services/oauth/client.js'
import {
  isPolicyAllowed,
  waitForPolicyLimitsToLoad,
} from '../services/policyLimits/index.js'
import type { Message } from '../types/message.js'
import {
  checkAndRefreshOAuthTokenIfNeeded,
  getClaudeAIOAuthTokens,
  handleOAuth401Error,
} from '../utils/auth.js'
import { getGlobalConfig, saveGlobalConfig } from '../utils/config.js'
import { logForDebugging } from '../utils/debug.js'
import { stripDisplayTagsAllowEmpty } from '../utils/displayTags.js'
import { errorMessage } from '../utils/errors.js'
import { isEssentialTrafficOnly } from '../utils/privacyLevel.js'
import { getFeatureValue_CACHED_MAY_BE_STALE } from '../services/analytics/growthbook.js'
import { getBranch, getRemoteUrl } from '../utils/git.js'
import { toSDKMessages } from '../utils/messages/mappers.js'
import {
  getContentText,
  getMessagesAfterCompactBoundary,
  isSyntheticMessage,
} from '../utils/messages.js'
import type { PermissionMode } from '../utils/permissions/PermissionMode.js'
import {
  getCurrentSessionTitle,
  setCurrentSessionTitle,
} from '../utils/sessionStorage.js'
import {
  extractConversationText,
  generateSessionTitle,
} from '../utils/sessionTitle.js'
import { generateShortWordSlug } from '../utils/words.js'
import {
  getBridgeAccessToken,
  getBridgeBaseUrl,
  getBridgeTokenOverride,
} from './bridgeConfig.js'
import { isBridgeEnabledBlocking, isCseShimEnabled } from './bridgeEnabled.js'
import {
  getBridgeSession,
  updateBridgeSessionTitle,
} from './createSession.js'
import { logBridgeSkip } from './debugUtils.js'
import { checkEnvLessBridgeMinVersion } from './envLessBridgeConfig.js'
import type { BridgeState, ReplBridgeHandle } from './replBridge.js'
import { setCseShimGate } from './sessionIdCompat.js'

export type InitBridgeOptions = {
  onInboundMessage?: (msg: SDKMessage) => void | Promise<void>
  onPermissionResponse?: (response: SDKControlResponse) => void
  onInterrupt?: () => void
  onSetModel?: (model: string | undefined) => void
  onSetMaxThinkingTokens?: (maxTokens: number | null) => void
  onSetPermissionMode?: (
    mode: PermissionMode,
  ) => { ok: true } | { ok: false; error: string }
  onStateChange?: (state: BridgeState, detail?: string) => void
  initialMessages?: Message[]
  // Explicit session name from `/remote-control <name>`. When set, overrides
  // the title derived from the conversation or /rename.
  initialName?: string
  // Fresh view of the full conversation at call time. Used by onUserMessage's
  // count-3 derivation to call generateSessionTitle over the full conversation.
  // Optional — print.ts's SDK enableRemoteControl path has no REPL message
  // array; count-3 falls back to the single message text when absent.
  getMessages?: () => Message[]
  /**
   * When true, the bridge only forwards events outbound (no SSE inbound
   * stream). Used by CCR mirror mode — local sessions visible on claude.ai
   * without enabling inbound control.
   */
  outboundOnly?: boolean
  tags?: string[]
  /**
   * When true, enable session persistence via transport internal events.
   * v112+: new option for cross-session transcript continuity.
   */
  enableSessionPersistence?: boolean
}

export async function initReplBridge(
  options?: InitBridgeOptions,
): Promise<ReplBridgeHandle | null> {
  const {
    onInboundMessage,
    onPermissionResponse,
    onInterrupt,
    onSetModel,
    onSetMaxThinkingTokens,
    onSetPermissionMode,
    onStateChange,
    initialMessages,
    getMessages,
    initialName,
    outboundOnly,
    tags,
    enableSessionPersistence,
  } = options ?? {}

  // Wire the cse_ shim kill switch so toCompatSessionId respects the
  // GrowthBook gate. Daemon/SDK paths skip this — shim defaults to active.
  setCseShimGate(isCseShimEnabled)

  // 1. Runtime gate
  if (!(await isBridgeEnabledBlocking())) {
    logBridgeSkip('not_enabled', '[bridge:repl] Skipping: bridge not enabled')
    return null
  }

  // 2. Check OAuth — must be signed in with claude.ai.
  if (!getBridgeAccessToken()) {
    logBridgeSkip('no_oauth', '[bridge:repl] Skipping: no OAuth tokens')
    onStateChange?.('failed', '/login')
    return null
  }

  // 3. Check organization policy — remote control may be disabled
  await waitForPolicyLimitsToLoad()
  if (!isPolicyAllowed('allow_remote_control')) {
    logBridgeSkip(
      'policy_denied',
      '[bridge:repl] Skipping: allow_remote_control policy not allowed',
    )
    onStateChange?.('failed', "disabled by your organization's policy")
    return null
  }

  // When CLAUDE_BRIDGE_OAUTH_TOKEN is set (ant-only local dev), the bridge
  // uses that token directly via getBridgeAccessToken() — keychain state is
  // irrelevant. Skip 2b/2c to preserve that decoupling.
  if (!getBridgeTokenOverride()) {
    const cfg = getGlobalConfig()
    if (
      cfg.bridgeOauthDeadExpiresAt != null &&
      (cfg.bridgeOauthDeadFailCount ?? 0) >= 3 &&
      getClaudeAIOAuthTokens()?.expiresAt === cfg.bridgeOauthDeadExpiresAt
    ) {
      logForDebugging(
        `[bridge:repl] Skipping: cross-process backoff (dead token seen ${cfg.bridgeOauthDeadFailCount} times)`,
      )
      return null
    }

    await checkAndRefreshOAuthTokenIfNeeded()

    const tokens = getClaudeAIOAuthTokens()
    if (tokens && tokens.expiresAt !== null && tokens.expiresAt <= Date.now()) {
      logBridgeSkip(
        'oauth_expired_unrefreshable',
        '[bridge:repl] Skipping: OAuth token expired and refresh failed (re-login required)',
      )
      onStateChange?.('failed', '/login')
      const deadExpiresAt = tokens.expiresAt
      saveGlobalConfig(c => ({
        ...c,
        bridgeOauthDeadExpiresAt: deadExpiresAt,
        bridgeOauthDeadFailCount:
          c.bridgeOauthDeadExpiresAt === deadExpiresAt
            ? (c.bridgeOauthDeadFailCount ?? 0) + 1
            : 1,
      }))
      return null
    }
  }

  const baseUrl = getBridgeBaseUrl()

  // Session persistence callbacks (v112+)
  let persistenceGeneration = 0
  const persistenceCallbacks = enableSessionPersistence
    ? {
        onTransportPersistenceReady: (
          // TODO(lift): eventWriter type at byte ~12057600
          eventWriter: unknown,
          // TODO(lift): eventReaders type at byte ~12057600
          eventReaders: unknown,
        ) => {
          const gen = ++persistenceGeneration
          ;(async () => {
            try {
              // TODO(lift): sync persistence state at byte ~12057620
              await syncPersistenceState(eventWriter, eventReaders)
            } catch (err) {
              logForDebugging(
                `[bridge:repl] Persistence sync failed: ${errorMessage(err)}`,
                { level: 'error' },
              )
            }
            if (gen !== persistenceGeneration) {
              logForDebugging(
                '[bridge:repl] Transport torn down during sync — skipping writer install',
              )
              return
            }
            // TODO(lift): installEventWriter at byte ~12057700
            logForDebugging(
              '[bridge:repl] Session persistence enabled — transcript entries forwarded as internal events',
            )
          })()
        },
        onTransportPersistenceTeardown: () => {
          persistenceGeneration++
          // TODO(lift): teardownPersistence at byte ~12057750
        },
      }
    : undefined

  // Derive session title. v112: prefix changed from "remote-control" to
  // getOriginalCwd() — TODO(lift): verify U58 at byte ~12057560.
  let title = `${getOriginalCwd()}-${generateShortWordSlug()}`
  let hasTitle = false
  let hasExplicitTitle = false
  if (initialName) {
    title = initialName
    hasTitle = true
    hasExplicitTitle = true
  } else {
    const sessionId = getSessionId()
    const customTitle = sessionId
      ? getCurrentSessionTitle(sessionId)
      : undefined
    if (customTitle) {
      title = customTitle
      hasTitle = true
      hasExplicitTitle = true
    } else if (initialMessages && initialMessages.length > 0) {
      for (let i = initialMessages.length - 1; i >= 0; i--) {
        const msg = initialMessages[i]!
        if (
          msg.type !== 'user' ||
          msg.isMeta ||
          msg.toolUseResult ||
          msg.isCompactSummary ||
          (msg.origin && msg.origin.kind !== 'human') ||
          isSyntheticMessage(msg)
        )
          continue
        const rawContent = getContentText(msg.message.content)
        if (!rawContent) continue
        const derived = deriveTitle(rawContent)
        if (!derived) continue
        title = derived
        hasTitle = true
        break
      }
    }
  }

  // Shared title derivation logic
  let userMessageCount = 0
  let lastBridgeSessionId: string | undefined
  let genSeq = 0
  let serverTitleConfirmedForSession: string | undefined
  const seenTitles = new Set<string>([title])

  const patch = (
    derived: string,
    bridgeSessionId: string,
    atCount: number,
  ): void => {
    hasTitle = true
    title = derived
    seenTitles.add(derived)
    logForDebugging(
      `[bridge:repl] derived title from message ${atCount}: ${derived}`,
    )
    void updateBridgeSessionTitle(bridgeSessionId, derived, {
      baseUrl,
      getAccessToken: getBridgeAccessToken,
    }).catch(() => {})
  }

  const generateAndPatch = (input: string, bridgeSessionId: string): void => {
    const gen = ++genSeq
    const atCount = userMessageCount
    void generateSessionTitle(input, AbortSignal.timeout(15_000)).then(
      async generated => {
        const isStale = () =>
          gen !== genSeq ||
          lastBridgeSessionId !== bridgeSessionId ||
          getCurrentSessionTitle(getSessionId())
        if (!generated || isStale()) return
        // v112: fetch existing session title from server before patching
        const sessionInfo = await getBridgeSession(bridgeSessionId, {
          baseUrl,
          getAccessToken: getBridgeAccessToken,
        }).catch(() => null)
        if (isStale()) return
        if (sessionInfo?.title && !seenTitles.has(sessionInfo.title)) {
          serverTitleConfirmedForSession = bridgeSessionId
          return
        }
        patch(generated, bridgeSessionId, atCount)
      },
    )
  }

  const onRenameSession = (newTitle: string) => {
    const trimmed = newTitle.trim()
    if (!trimmed) return { ok: false, error: 'title must be non-empty' }
    title = trimmed
    hasTitle = true
    hasExplicitTitle = true
    seenTitles.add(trimmed)
    setCurrentSessionTitle(getSessionId(), trimmed, undefined, 'remote')
    return { ok: true }
  }

  const onUserMessage = (text: string, bridgeSessionId: string): boolean => {
    if (
      hasExplicitTitle ||
      serverTitleConfirmedForSession === bridgeSessionId ||
      getCurrentSessionTitle(getSessionId())
    ) {
      return true
    }
    if (
      lastBridgeSessionId !== undefined &&
      lastBridgeSessionId !== bridgeSessionId
    ) {
      userMessageCount = 0
    }
    lastBridgeSessionId = bridgeSessionId
    userMessageCount++
    if (userMessageCount === 1 && !hasTitle) {
      const placeholder = deriveTitle(text)
      if (placeholder) patch(placeholder, bridgeSessionId, userMessageCount)
      generateAndPatch(text, bridgeSessionId)
    } else if (userMessageCount === 3) {
      const msgs = getMessages?.()
      const input = msgs
        ? extractConversationText(getMessagesAfterCompactBoundary(msgs))
        : text
      generateAndPatch(input, bridgeSessionId)
    }
    return userMessageCount >= 3
  }

  // v112: hardcoded 200 (GrowthBook flag removed)
  const initialHistoryCap = 200

  const orgUUID = await getOrganizationUUID()
  if (!orgUUID) {
    logBridgeSkip('no_org_uuid', '[bridge:repl] Skipping: no org UUID')
    onStateChange?.('failed', '/login')
    return null
  }

  // v112: unconditional version check (v1 path removed)
  const versionError = await checkEnvLessBridgeMinVersion()
  if (versionError) {
    logBridgeSkip(
      'version_too_old',
      `[bridge:repl] Skipping: ${versionError}`,
      true,
    )
    onStateChange?.('failed', 'run `claude update` to upgrade')
    return null
  }

  const branch = await getBranch()
  const gitRepoUrl = await getRemoteUrl()

  const { initEnvLessBridgeCore } = await import('./remoteBridgeCore.js')

  const handle = await initEnvLessBridgeCore({
    baseUrl,
    orgUUID,
    title,
    getAccessToken: getBridgeAccessToken,
    onAuth401: handleOAuth401Error,
    toSDKMessages,
    initialHistoryCap,
    initialMessages,
    gitRepoUrl,
    branch,
    onInboundMessage,
    onUserMessage,
    onSessionEstablished: (bridgeSessionId: string) => {
      // TODO(lift): Yq5 at byte ~12061100
      setupBridgeWebUrl(
        buildSessionWebUrl(bridgeSessionId),
        baseUrl,
        () => {
          const token = getBridgeAccessToken()
          if (!token) return {}
          return { Authorization: `Bearer ${token}` }
        },
      )
      // TODO(lift): I18 at byte ~12061150, o3 at byte ~12061180
      if (isFeatureEnabled() && !isConditionMet()) {
        // TODO(lift): hxK at byte ~12061200
        performAction()
      }
    },
    onPermissionResponse,
    onInterrupt,
    onSetModel,
    onSetMaxThinkingTokens,
    onSetPermissionMode,
    onRenameSession,
    onStateChange,
    outboundOnly,
    tags,
    ...(enableSessionPersistence ? persistenceCallbacks : {}),
  })

  // TODO(lift): EqA wrapper at byte ~12061300
  return handle
}

const TITLE_MAX_LEN = 50

function deriveTitle(raw: string): string | undefined {
  const clean = stripDisplayTagsAllowEmpty(raw)
  const firstSentence = /^(.*?[.!?])\s/.exec(clean)?.[1] ?? clean
  const flat = firstSentence.replace(/\s+/g, ' ').trim()
  if (!flat) return undefined
  return flat.length > TITLE_MAX_LEN
    ? flat.slice(0, TITLE_MAX_LEN - 1) + '\u2026'
    : flat
}

function setupBridgeWebUrl(
  url: string,
  baseUrl: string,
  getHeaders: () => Record<string, string>,
): void {
  // v112: Yq5 — initializes client presence tracking for the bridge session.
  // Gated by tengu_bridge_client_presence_enabled feature flag.
  if (isEssentialTrafficOnly()) return
  if (!getFeatureValue_CACHED_MAY_BE_STALE('tengu_bridge_client_presence_enabled', false))
    return
  // Presence tracking setup (presence pulse + terminal focus listeners).
  // Full implementation requires global state for polling intervals and
  // cleanup handles — retained as stub since the rest of the presence
  // subsystem (nu6, GX7, vX7, zq5, da8) is module-local in the bundle.
  logForDebugging(`[presence] wired for session ${url} (base=${baseUrl})`)
}
function buildSessionWebUrl(sessionId: string): string {
  // v112: wU1 — replaces session_ prefix with cse_
  if (!sessionId.startsWith('session_')) return sessionId
  return 'cse_' + sessionId.slice(8)
}
function isFeatureEnabled(): boolean {
  // v112: I18 — tengu_kairos_push_notifications flag
  return getFeatureValue_CACHED_MAY_BE_STALE('tengu_kairos_push_notifications', false)
}
function isConditionMet(): boolean {
  // v112: o3 — essential-traffic mode disables push notification setup
  return isEssentialTrafficOnly()
}
function performAction(): void {
  // v112: hxK — fetches push-reachability preferences from server.
  // Retained as stub; the full implementation hydrates global push-reachability
  // state (on8) and logs telemetry. Not on the critical path for bridge init.
}
async function syncPersistenceState(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _eventWriter: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _eventReaders: unknown,
): Promise<void> {
  // unresolved: wq5/to8 at byte ~12057620
}
