// biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
/**
 * Env-less Remote Control bridge core.
 *
 * "Env-less" = no Environments API layer. Distinct from "CCR v2" (the
 * /worker/* transport protocol) — the env-based path (replBridge.ts) can also
 * use CCR v2 transport via CLAUDE_CODE_USE_CCR_V2. This file is about removing
 * the poll/dispatch layer, not about which transport protocol is underneath.
 *
 * Unlike initBridgeCore (env-based, ~2400 lines), this connects directly
 * to the session-ingress layer without the Environments API work-dispatch
 * layer:
 *
 *   1. POST /v1/code/sessions              (OAuth, no env_id)  → session.id
 *   2. POST /v1/code/sessions/{id}/bridge  (OAuth)             → {worker_jwt, expires_in, api_base_url, worker_epoch}
 *      Each /bridge call bumps epoch — it IS the register. No separate /worker/register.
 *   3. createV2ReplTransport(worker_jwt, worker_epoch)         → SSE + CCRClient
 *   4. createTokenRefreshScheduler                             → proactive /bridge re-call (new JWT + new epoch)
 *   5. 401 on SSE → rebuild transport with fresh /bridge credentials (same seq-num)
 *
 * No register/poll/ack/stop/heartbeat/deregister environment lifecycle.
 * The Environments API historically existed because CCR's /worker/*
 * endpoints required a session_id+role=worker JWT that only the work-dispatch
 * layer could mint. Server PR #292605 (renamed in #293280) adds the /bridge endpoint as a direct
 * OAuth→worker_jwt exchange, making the env layer optional for REPL sessions.
 *
 * Gated by `tengu_bridge_repl_v2` GrowthBook flag in initReplBridge.ts.
 * REPL-only — daemon/print stay on env-based.
 */

import { feature } from 'bun:bundle'
import axios from 'axios'
import { getFeatureValue_CACHED_MAY_BE_STALE } from '../services/analytics/growthbook.js'
import {
  createV2ReplTransport,
  type ReplBridgeTransport,
} from './replBridgeTransport.js'
import { buildCCRv2SdkUrl } from './workSecret.js'
import { toCompatSessionId } from './sessionIdCompat.js'
import { FlushGate } from './flushGate.js'
import { createTokenRefreshScheduler } from './jwtUtils.js'
import {
  getEnvLessBridgeConfig,
  type EnvLessBridgeConfig,
} from './envLessBridgeConfig.js'
import {
  handleIngressMessage,
  handleServerControlRequest,
  makeResultMessage,
  isEligibleBridgeMessage,
  extractTitleText,
  BoundedUUIDSet,
} from './bridgeMessaging.js'
import { logBridgeSkip } from './debugUtils.js'
import { logForDebugging } from '../utils/debug.js'
import { logForDiagnosticsNoPII } from '../utils/diagLogs.js'
import { isInProtectedNamespace } from '../utils/envUtils.js'
import { errorMessage } from '../utils/errors.js'
import { sleep } from '../utils/sleep.js'
import { registerCleanup } from '../utils/cleanupRegistry.js'
import {
  type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  logEvent,
} from '../services/analytics/index.js'
import type { ReplBridgeHandle, BridgeState } from './replBridge.js'
import type { Message } from '../types/message.js'
import type { SDKMessage } from '../entrypoints/agentSdkTypes.js'
import type {
  SDKControlRequest,
  SDKControlResponse,
} from '../entrypoints/sdk/controlTypes.js'
import type { PermissionMode } from '../utils/permissions/PermissionMode.js'

const ANTHROPIC_VERSION = '2023-06-01'

// Telemetry discriminator for ws_connected. 'initial' is the default and
// never passed to rebuildTransport (which can only be called post-init);
// Exclude<> makes that constraint explicit at both signatures.
type ConnectCause = 'initial' | 'proactive_refresh' | 'auth_401_recovery'

function oauthHeaders(accessToken: string): Record<string, string> {
  return {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'anthropic-version': ANTHROPIC_VERSION,
  }
}

export type EnvLessBridgeParams = {
  baseUrl: string
  orgUUID: string
  title: string
  getAccessToken: () => string | undefined
  onAuth401?: (staleAccessToken: string) => Promise<boolean>
  /**
   * Converts internal Message[] → SDKMessage[] for writeMessages() and the
   * initial-flush/drain paths. Injected rather than imported — mappers.ts
   * transitively pulls in src/commands.ts (entire command registry + React
   * tree) which would bloat bundles that don't already have it.
   */
  toSDKMessages: (messages: Message[]) => SDKMessage[]
  initialHistoryCap: number
  initialMessages?: Message[]
  onInboundMessage?: (msg: SDKMessage) => void | Promise<void>
  /**
   * Fired on each title-worthy user message seen in writeMessages() until
   * the callback returns true (done). Mirrors replBridge.ts's onUserMessage —
   * caller derives a title and PATCHes /v1/sessions/{id} so auto-started
   * sessions don't stay at the generic fallback. The caller owns the
   * derive-at-count-1-and-3 policy; the transport just keeps calling until
   * told to stop. sessionId is the raw cse_* — updateBridgeSessionTitle
   * retags internally.
   */
  onUserMessage?: (text: string, sessionId: string) => boolean
  onPermissionResponse?: (response: SDKControlResponse) => void
  onInterrupt?: () => void
  onSetModel?: (model: string | undefined) => void
  onSetMaxThinkingTokens?: (maxTokens: number | null) => void
  onSetPermissionMode?: (
    mode: PermissionMode,
  ) => { ok: true } | { ok: false; error: string }
  onStateChange?: (state: BridgeState, detail?: string) => void
  /**
   * When true, skip opening the SSE read stream — only the CCRClient write
   * path is activated. Threaded to createV2ReplTransport and
   * handleServerControlRequest.
   */
  outboundOnly?: boolean
  /** Free-form tags for session categorization (e.g. ['ccr-mirror']). */
  tags?: string[]
  /** v112: called when the session is created and credentials fetched. */
  onSessionEstablished?: (sessionId: string) => void
  /** v112: called when the server requests a session rename. */
  onRenameSession?: (
    title: string,
  ) => { ok: true } | { ok: false; error: string }
  /** v112: git context for session creation. */
  gitRepoUrl?: string | null
  /** v112: git branch for session creation. */
  branch?: string
  /** v112: session persistence callbacks. */
  onTransportPersistenceReady?: (
    eventWriter: unknown,
    eventReaders: unknown,
  ) => void
  /** v112: session persistence teardown. */
  onTransportPersistenceTeardown?: () => void
}

type RemoteCredentialsError = {
  reason: string
  message?: string
}

function isRemoteCredentialsError(v: unknown): v is RemoteCredentialsError {
  return v !== null && typeof v === 'object' && 'reason' in v
}

function getRemoteCredentialsErrorMessage(v: RemoteCredentialsError): string {
  return v.message ?? v.reason
}

/**
 * Create a session, fetch a worker JWT, connect the v2 transport.
 *
 * Returns null on any pre-flight failure (session create failed, /bridge
 * failed, transport setup failed). Caller (initReplBridge) surfaces this
 * as a generic "initialization failed" state.
 */
export async function initEnvLessBridgeCore(
  params: EnvLessBridgeParams,
): Promise<ReplBridgeHandle | null> {
  const {
    baseUrl,
    orgUUID,
    title,
    getAccessToken,
    onAuth401,
    toSDKMessages,
    initialHistoryCap,
    initialMessages,
    onInboundMessage,
    onUserMessage,
    onPermissionResponse,
    onInterrupt,
    onSetModel,
    onSetMaxThinkingTokens,
    onSetPermissionMode,
    onStateChange,
    outboundOnly,
    tags,
    onSessionEstablished,
    onRenameSession,
    gitRepoUrl,
    branch,
    onTransportPersistenceReady,
    onTransportPersistenceTeardown,
  } = params

  const cfg = await getEnvLessBridgeConfig()

  // ── 1. Create session (POST /v1/code/sessions, no env_id) ───────────────
  const accessToken = getAccessToken()
  if (!accessToken) {
    logForDebugging('[remote-bridge] No OAuth token')
    return null
  }

  const { getOriginalCwd } = await import('../bootstrap/state.js')
  const { getMainLoopModel } = await import('../utils/model/model.js')

  const createdSessionId = await withRetry(
    () =>
      createCodeSession(
        baseUrl,
        accessToken,
        title,
        cfg.http_timeout_ms,
        tags,
        gitRepoUrl ? { gitRepoUrl, branch } : undefined,
        getOriginalCwd(),
        getMainLoopModel(),
      ),
    'createCodeSession',
    cfg,
  )
  if (!createdSessionId) {
    onStateChange?.('failed', 'Session creation failed — see debug log')
    logBridgeSkip('v2_session_create_failed', undefined, true)
    return null
  }
  const sessionId: string = createdSessionId
  logForDebugging(`[remote-bridge] Created session ${sessionId}`)
  logForDiagnosticsNoPII('info', 'bridge_repl_v2_session_created')

  // ── 2. Fetch bridge credentials (POST /bridge → worker_jwt, expires_in, api_base_url) ──
  const credentialsResult = await withRetry(
    () =>
      fetchRemoteCredentialsRaw(
        sessionId,
        baseUrl,
        accessToken,
        cfg.http_timeout_ms,
      ),
    'fetchRemoteCredentials',
    cfg,
  )
  if (!credentialsResult || isRemoteCredentialsError(credentialsResult)) {
    const msg = credentialsResult
      ? getRemoteCredentialsErrorMessage(credentialsResult)
      : 'Remote credentials fetch failed — see debug log'
    logForDebugging(
      `[remote-bridge] Creds failed; onStateChange ${onStateChange ? 'set' : 'UNSET'}, msg="${msg}"`,
    )
    onStateChange?.('failed', msg)
    logBridgeSkip(
      credentialsResult
        ? `v2_remote_creds_${credentialsResult.reason}`
        : 'v2_remote_creds_failed',
      undefined,
      true,
    )
    void archiveSession(
      sessionId,
      baseUrl,
      accessToken,
      orgUUID,
      cfg.http_timeout_ms,
    )
    return null
  }
  const credentials = credentialsResult
  logForDebugging(
    `[remote-bridge] Fetched bridge credentials (expires_in=${credentials.expires_in}s)`,
  )
  onSessionEstablished?.(sessionId)

  // ── 3. Build v2 transport (SSETransport + CCRClient) ────────────────────
  const sessionUrl = buildCCRv2SdkUrl(credentials.api_base_url, sessionId)
  logForDebugging(`[remote-bridge] v2 session URL: ${sessionUrl}`)

  let transport: ReplBridgeTransport
  try {
    transport = await createV2ReplTransport({
      sessionUrl,
      ingressToken: credentials.worker_jwt,
      sessionId,
      epoch: credentials.worker_epoch,
      heartbeatIntervalMs: cfg.heartbeat_interval_ms,
      heartbeatJitterFraction: cfg.heartbeat_jitter_fraction,
      getAuthToken: () => credentials.worker_jwt,
      outboundOnly,
    })
  } catch (err) {
    logForDebugging(
      `[remote-bridge] v2 transport setup failed: ${errorMessage(err)}`,
      { level: 'error' },
    )
    onStateChange?.('failed', `Transport setup failed: ${errorMessage(err)}`)
    logBridgeSkip('v2_transport_setup_failed', undefined, true)
    void archiveSession(
      sessionId,
      baseUrl,
      accessToken,
      orgUUID,
      cfg.http_timeout_ms,
    )
    return null
  }
  logForDebugging(
    `[remote-bridge] v2 transport created (epoch=${credentials.worker_epoch})`,
  )
  onStateChange?.('ready')

  // ── 4. State ────────────────────────────────────────────────────────────
  const recentPostedUUIDs = new BoundedUUIDSet(cfg.uuid_dedup_buffer_size)
  const initialMessageUUIDs = new Set<string>()
  if (initialMessages) {
    for (const msg of initialMessages) {
      initialMessageUUIDs.add(msg.uuid)
      recentPostedUUIDs.add(msg.uuid)
    }
  }

  const recentInboundUUIDs = new BoundedUUIDSet(cfg.uuid_dedup_buffer_size)
  const flushGate = new FlushGate<Message>()

  let initialFlushDone = false
  let tornDown = false
  let authRecoveryInFlight = false
  let userMessageCallbackDone = !onUserMessage
  let connectCause: ConnectCause = 'initial'
  let connectDeadline: ReturnType<typeof setTimeout> | undefined

  // v112: pending action metadata tracking
  let pendingActionReported = false

  function reportStateWithMetadata(
    state: BridgeState,
    metadata?: Record<string, unknown>,
  ): void {
    transport.reportState(state, metadata)
    if (state === 'requires_action' && metadata) {
      pendingActionReported = true
      transport.reportMetadata({ pending_action: metadata })
    } else if (pendingActionReported) {
      pendingActionReported = false
      transport.reportMetadata({ pending_action: null })
    }
  }

  function onConnectTimeout(cause: ConnectCause): void {
    if (tornDown) return
    logEvent('tengu_bridge_repl_connect_timeout', {
      v2: true,
      elapsed_ms: cfg.connect_timeout_ms,
      cause:
        cause as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    })
  }

  // ── 5. JWT refresh scheduler ────────────────────────────────────────────
  const refresh = createTokenRefreshScheduler({
    refreshBufferMs: cfg.token_refresh_buffer_ms,
    getAccessToken: async () => {
      const stale = getAccessToken()
      if (onAuth401) await onAuth401(stale ?? '')
      return getAccessToken() ?? stale
    },
    onRefresh: (sid, oauthToken) => {
      void (async () => {
        if (authRecoveryInFlight || tornDown) {
          logForDebugging(
            '[remote-bridge] Recovery already in flight, skipping proactive refresh',
          )
          return
        }
        authRecoveryInFlight = true
        try {
          const fresh = await withRetry(
            () =>
              fetchRemoteCredentialsRaw(
                sid,
                baseUrl,
                oauthToken,
                cfg.http_timeout_ms,
              ),
            'fetchRemoteCredentials (proactive)',
            cfg,
          )
          if (!fresh || tornDown) return
          if (isRemoteCredentialsError(fresh)) {
            if (!tornDown) onStateChange?.('failed', getRemoteCredentialsErrorMessage(fresh))
            return
          }
          await rebuildTransport(fresh, 'proactive_refresh')
          logForDebugging(
            '[remote-bridge] Transport rebuilt (proactive refresh)',
          )
        } catch (err) {
          logForDebugging(
            `[remote-bridge] Proactive refresh rebuild failed: ${errorMessage(err)}`,
            { level: 'error' },
          )
          logForDiagnosticsNoPII(
            'error',
            'bridge_repl_v2_proactive_refresh_failed',
          )
          if (!tornDown) {
            onStateChange?.('failed', `Refresh failed: ${errorMessage(err)}`)
          }
        } finally {
          authRecoveryInFlight = false
        }
      })()
    },
    label: 'remote',
  })
  refresh.scheduleFromExpiresIn(sessionId, credentials.expires_in)

  // ── 6. Wire callbacks ───────────────────────────────────────────────────
  function wireTransportCallbacks(): void {
    transport.setOnConnect(() => {
      clearTimeout(connectDeadline)
      logForDebugging('[remote-bridge] v2 transport connected')
      logForDiagnosticsNoPII('info', 'bridge_repl_v2_transport_connected')

      // v112: session persistence hook
      if (onTransportPersistenceReady) {
        const writer = transport.getInternalEventWriter?.()
        const readers = transport.getInternalEventReaders?.()
        if (writer && readers) {
          onTransportPersistenceReady(writer, readers)
        }
      }

      logEvent('tengu_bridge_repl_ws_connected', {
        v2: true,
        cause:
          connectCause as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      })

      if (!initialFlushDone && initialMessages && initialMessages.length > 0) {
        initialFlushDone = true
        const flushTransport = transport
        void flushHistory(initialMessages)
          .catch(e =>
            logForDebugging(`[remote-bridge] flushHistory failed: ${e}`),
          )
          .finally(() => {
            if (
              transport !== flushTransport ||
              tornDown ||
              authRecoveryInFlight
            ) {
              return
            }
            drainFlushGate()
            onStateChange?.('connected')
          })
      } else if (!flushGate.active) {
        onStateChange?.('connected')
      }
    })

    transport.setOnData((data: string) => {
      handleIngressMessage(
        data,
        recentPostedUUIDs,
        recentInboundUUIDs,
        onInboundMessage,
        onPermissionResponse
          ? res => {
              reportStateWithMetadata('running')
              onPermissionResponse(res)
            }
          : undefined,
        req =>
          handleServerControlRequest(req, {
            transport,
            sessionId,
            onInterrupt,
            onSetModel,
            onSetMaxThinkingTokens,
            onSetPermissionMode,
            onRenameSession,
            outboundOnly,
          }),
      )
    })

    transport.setOnClose((code?: number) => {
      clearTimeout(connectDeadline)
      if (tornDown) return
      logForDebugging(`[remote-bridge] v2 transport closed (code=${code})`)
      logEvent('tengu_bridge_repl_ws_closed', { code, v2: true })
      if (code === 401 && !authRecoveryInFlight) {
        void recoverFromAuthFailure()
        return
      }
      onStateChange?.('failed', `Transport closed (code ${code})`)
    })
  }

  // ── 7. Transport rebuild ────────────────────────────────────────────────
  async function rebuildTransport(
    fresh: RemoteCredentials,
    cause: Exclude<ConnectCause, 'initial'>,
  ): Promise<void> {
    connectCause = cause
    flushGate.start()
    try {
      const seq = transport.getLastSequenceNum()
      transport.close()
      transport = await createV2ReplTransport({
        sessionUrl: buildCCRv2SdkUrl(fresh.api_base_url, sessionId),
        ingressToken: fresh.worker_jwt,
        sessionId,
        epoch: fresh.worker_epoch,
        heartbeatIntervalMs: cfg.heartbeat_interval_ms,
        heartbeatJitterFraction: cfg.heartbeat_jitter_fraction,
        initialSequenceNum: seq,
        getAuthToken: () => fresh.worker_jwt,
        outboundOnly,
      })
      if (tornDown) {
        transport.close()
        return
      }
      wireTransportCallbacks()
      transport.connect()
      // v112: re-trigger branch watch after reconnect
      triggerBranchWatch?.()
      connectDeadline = setTimeout(
        onConnectTimeout,
        cfg.connect_timeout_ms,
        connectCause,
      )
      refresh.scheduleFromExpiresIn(sessionId, fresh.expires_in)
      drainFlushGate()
    } finally {
      flushGate.drop()
    }
  }

  // ── 8. 401 recovery ─────────────────────────────────────────────────────
  async function recoverFromAuthFailure(): Promise<void> {
    if (authRecoveryInFlight) return
    authRecoveryInFlight = true
    onStateChange?.('reconnecting', 'JWT expired — refreshing')
    logForDebugging('[remote-bridge] 401 on SSE — attempting JWT refresh')
    try {
      const stale = getAccessToken()
      if (onAuth401) await onAuth401(stale ?? '')
      const oauthToken = getAccessToken() ?? stale
      if (!oauthToken || tornDown) {
        if (!tornDown) {
          onStateChange?.('failed', 'JWT refresh failed: no OAuth token')
        }
        return
      }

      const fresh = await withRetry(
        () =>
          fetchRemoteCredentialsRaw(
            sessionId,
            baseUrl,
            oauthToken,
            cfg.http_timeout_ms,
          ),
        'fetchRemoteCredentials (recovery)',
        cfg,
      )
      if (!fresh || tornDown) {
        if (!tornDown) {
          onStateChange?.('failed', 'JWT refresh failed after 401')
        }
        return
      }
      if (isRemoteCredentialsError(fresh)) {
        if (!tornDown) onStateChange?.('failed', getRemoteCredentialsErrorMessage(fresh))
        return
      }
      initialFlushDone = false
      await rebuildTransport(fresh, 'auth_401_recovery')
      logForDebugging('[remote-bridge] Transport rebuilt after 401')
    } catch (err) {
      logForDebugging(
        `[remote-bridge] 401 recovery failed: ${errorMessage(err)}`,
        { level: 'error' },
      )
      logForDiagnosticsNoPII('error', 'bridge_repl_v2_jwt_refresh_failed')
      if (!tornDown) {
        onStateChange?.('failed', `JWT refresh failed: ${errorMessage(err)}`)
      }
    } finally {
      authRecoveryInFlight = false
    }
  }

  wireTransportCallbacks()

  if (initialMessages && initialMessages.length > 0) {
    flushGate.start()
  }
  transport.connect()
  connectDeadline = setTimeout(
    onConnectTimeout,
    cfg.connect_timeout_ms,
    connectCause,
  )

  // ── v112: Git branch watching ───────────────────────────────────────────
  let branchWatchUnsubscribe: (() => void) | undefined
  let resetBranchCache: (() => void) | undefined
  let triggerBranchWatch: (() => void) | undefined

  if (gitRepoUrl) {
    void (async () => {
      try {
        const { parseGitRemote, parseGitHubRepository } = await import(
          '../utils/detectRepository.js'
        )
        // TODO(lift): repo watch module at byte ~12056000
        const { addWatchedRepo, getCachedBranchForRepo, onRepoBranchChange } =
          await import('../utils/repoWatcher.js')
        const parsed = parseGitRemote(gitRepoUrl)
        const repoName = parsed
          ? `${parsed.owner}/${parsed.name}`
          : parseGitHubRepository(gitRepoUrl)
        if (!repoName) return
        const cwd = getOriginalCwd()
        await addWatchedRepo(cwd)
        if (tornDown) return
        let lastBranch: string | undefined
        const checkBranch = async () => {
          if (tornDown) return
          const branch = await getCachedBranchForRepo(cwd)
          if (branch === undefined || branch === lastBranch) return
          lastBranch = branch
          transport.reportMetadata({
            current_branches: { [repoName]: branch },
          })
        }
        resetBranchCache = () => {
          lastBranch = undefined
        }
        triggerBranchWatch = () => void checkBranch()
        branchWatchUnsubscribe = onRepoBranchChange(triggerBranchWatch)
        await checkBranch()
      } catch (err) {
        logForDebugging(
          `[remote-bridge] current_branches setup failed: ${errorMessage(err)}`,
        )
      }
    })()
  }

  // ── 9. History flush + drain helpers ────────────────────────────────────
  function drainFlushGate(): void {
    const msgs = flushGate.end()
    if (msgs.length === 0) return
    for (const msg of msgs) recentPostedUUIDs.add(msg.uuid)
    const events = toSDKMessages(msgs).map(m => ({
      ...m,
      session_id: sessionId,
    }))
    if (msgs.some(m => m.type === 'user')) {
      reportStateWithMetadata('running')
    }
    logForDebugging(
      `[remote-bridge] Drained ${msgs.length} queued message(s) after flush`,
    )
    void transport.writeBatch(events)
  }

  async function flushHistory(msgs: Message[]): Promise<void> {
    const eligible = msgs.filter(isEligibleBridgeMessage)
    const capped =
      initialHistoryCap > 0 && eligible.length > initialHistoryCap
        ? eligible.slice(-initialHistoryCap)
        : eligible
    if (capped.length < eligible.length) {
      logForDebugging(
        `[remote-bridge] Capped initial flush: ${eligible.length} -> ${capped.length} (cap=${initialHistoryCap})`,
      )
    }
    const events = toSDKMessages(capped).map(m => ({
      ...m,
      session_id: sessionId,
    }))
    if (events.length === 0) return
    if (eligible.at(-1)?.type === 'user') {
      reportStateWithMetadata('running')
    }
    logForDebugging(`[remote-bridge] Flushing ${events.length} history events`)
    await transport.writeBatch(events)
  }

  // ── 10. Teardown ────────────────────────────────────────────────────────
  async function teardown(): Promise<void> {
    if (tornDown) return
    tornDown = true
    refresh.cancelAll()
    clearTimeout(connectDeadline)
    flushGate.drop()
    branchWatchUnsubscribe?.()
    onTransportPersistenceTeardown?.()

    transport.reportState('idle')
    void transport.write(makeResultMessage(sessionId))

    let token = getAccessToken()
    let status = await archiveSession(
      sessionId,
      baseUrl,
      token,
      orgUUID,
      cfg.teardown_archive_timeout_ms,
    )

    if (status === 401 && onAuth401) {
      try {
        await onAuth401(token ?? '')
        token = getAccessToken()
        status = await archiveSession(
          sessionId,
          baseUrl,
          token,
          orgUUID,
          cfg.teardown_archive_timeout_ms,
        )
      } catch (err) {
        logForDebugging(
          `[remote-bridge] Teardown 401 retry threw: ${errorMessage(err)}`,
          { level: 'error' },
        )
      }
    }

    transport.close()

    const archiveStatus: ArchiveTelemetryStatus =
      status === 'no_token'
        ? 'skipped_no_token'
        : status === 'timeout' || status === 'error'
          ? 'network_error'
          : status >= 500
            ? 'server_5xx'
            : status >= 400
              ? 'server_4xx'
              : 'ok'

    logForDebugging(`[remote-bridge] Torn down (archive=${status})`)
    logForDiagnosticsNoPII('info', 'bridge_repl_v2_teardown')
    logEvent(
      feature('CCR_MIRROR') && outboundOnly
        ? 'tengu_ccr_mirror_teardown'
        : 'tengu_bridge_repl_teardown',
      {
        v2: true,
        archive_status:
          archiveStatus as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
        archive_ok: typeof status === 'number' && status < 400,
        archive_http_status: typeof status === 'number' ? status : undefined,
        archive_timeout: status === 'timeout',
        archive_no_token: status === 'no_token',
      },
    )
  }
  const unregister = registerCleanup(teardown)

  if (feature('CCR_MIRROR') && outboundOnly) {
    logEvent('tengu_ccr_mirror_started', {
      v2: true,
      expires_in_s: credentials.expires_in,
    })
  } else {
    logEvent('tengu_bridge_repl_started', {
      has_initial_messages: !!(initialMessages && initialMessages.length > 0),
      v2: true,
      expires_in_s: credentials.expires_in,
      inProtectedNamespace: isInProtectedNamespace(),
      // TODO(lift): pu6 telemetry at byte ~12055950
    })
  }

  // ── 11. Handle ──────────────────────────────────────────────────────────
  const handle: ReplBridgeHandle = {
    bridgeSessionId: sessionId,
    environmentId: '',
    sessionIngressUrl: credentials.api_base_url,
    writeMessages(messages) {
      const filtered = messages.filter(
        m =>
          isEligibleBridgeMessage(m) &&
          !initialMessageUUIDs.has(m.uuid) &&
          !recentPostedUUIDs.has(m.uuid),
      )
      if (filtered.length === 0) return

      if (!userMessageCallbackDone) {
        for (const m of filtered) {
          const text = extractTitleText(m)
          if (text !== undefined && onUserMessage?.(text, sessionId)) {
            userMessageCallbackDone = true
            break
          }
        }
      }

      if (flushGate.enqueue(...filtered)) {
        logForDebugging(
          `[remote-bridge] Queued ${filtered.length} message(s) during flush`,
        )
        return
      }

      for (const msg of filtered) recentPostedUUIDs.add(msg.uuid)
      const events = toSDKMessages(filtered).map(m => ({
        ...m,
        session_id: sessionId,
      }))
      if (filtered.some(m => m.type === 'user')) {
        reportStateWithMetadata('running')
      }
      logForDebugging(`[remote-bridge] Sending ${filtered.length} message(s)`)
      void transport.writeBatch(events)
    },
    // v112: new method
    reportMetadata(metadata) {
      transport.reportMetadata(metadata)
    },
    writeSdkMessages(messages: SDKMessage[]) {
      const filtered = messages.filter(
        m => !m.uuid || !recentPostedUUIDs.has(m.uuid),
      )
      if (filtered.length === 0) return
      for (const msg of filtered) {
        if (msg.uuid) recentPostedUUIDs.add(msg.uuid)
      }
      const events = filtered.map(m => ({ ...m, session_id: sessionId }))
      void transport.writeBatch(events)
    },
    sendControlRequest(request: SDKControlRequest) {
      if (authRecoveryInFlight) {
        logForDebugging(
          `[remote-bridge] Dropping control_request during 401 recovery: ${request.request_id}`,
        )
        return
      }
      const event = { ...request, session_id: sessionId }
      if (request.request.subtype === 'can_use_tool') {
        // v112: detailed metadata for can_use_tool
        let metadata: Record<string, unknown> | undefined
        // TODO(lift): tengu_bridge_requires_action_details flag at byte ~12055700
        if (isBridgeRequiresActionDetailsEnabled()) {
          const command = request.request.input?.command
          metadata = {
            tool_name:
              request.request.display_name || request.request.tool_name,
            action_description:
              request.request.description ||
              request.request.display_name ||
              request.request.tool_name,
            raw_command:
              // TODO(lift): S7, I5 tool names at byte ~12055750
              isBashOrReadTool(request.request.tool_name) &&
              typeof command === 'string'
                ? command
                : undefined,
            tool_use_id: request.request.tool_use_id,
            request_id: request.request_id,
            input: request.request.input,
          }
        }
        reportStateWithMetadata('requires_action', metadata)
      }
      void transport.write(event)
      logForDebugging(
        `[remote-bridge] Sent control_request request_id=${request.request_id}`,
      )
    },
    sendControlResponse(response: SDKControlResponse) {
      if (authRecoveryInFlight) {
        logForDebugging(
          '[remote-bridge] Dropping control_response during 401 recovery',
        )
        return
      }
      const event = { ...response, session_id: sessionId }
      reportStateWithMetadata('running')
      void transport.write(event)
      logForDebugging('[remote-bridge] Sent control_response')
    },
    sendControlCancelRequest(requestId: string) {
      if (authRecoveryInFlight) {
        logForDebugging(
          `[remote-bridge] Dropping control_cancel_request during 401 recovery: ${requestId}`,
        )
        return
      }
      const event = {
        type: 'control_cancel_request' as const,
        request_id: requestId,
        session_id: sessionId,
      }
      reportStateWithMetadata('running')
      void transport.write(event)
      logForDebugging(
        `[remote-bridge] Sent control_cancel_request request_id=${requestId}`,
      )
    },
    sendResult() {
      if (authRecoveryInFlight) {
        logForDebugging('[remote-bridge] Dropping result during 401 recovery')
        return
      }
      reportStateWithMetadata('idle')
      void transport.write(makeResultMessage(sessionId))
      logForDebugging(`[remote-bridge] Sent result`)
    },
    async teardown() {
      unregister()
      await teardown()
    },
    // v112: async dispose
    [Symbol.asyncDispose]() {
      return handle.teardown()
    },
  }

  return handle
}

// ─── Session API (v2 /code/sessions, no env) ─────────────────────────────────

/** Retry an async init call with exponential backoff + jitter. */
async function withRetry<T>(
  fn: () => Promise<T | null>,
  label: string,
  cfg: EnvLessBridgeConfig,
): Promise<T | null> {
  const max = cfg.init_retry_max_attempts
  for (let attempt = 1; attempt <= max; attempt++) {
    const result = await fn()
    if (result !== null) return result
    if (attempt < max) {
      const base = cfg.init_retry_base_delay_ms * 2 ** (attempt - 1)
      const jitter =
        base * cfg.init_retry_jitter_fraction * (2 * Math.random() - 1)
      const delay = Math.min(base + jitter, cfg.init_retry_max_delay_ms)
      logForDebugging(
        `[remote-bridge] ${label} failed (attempt ${attempt}/${max}), retrying in ${Math.round(delay)}ms`,
      )
      await sleep(delay)
    }
  }
  return null
}

// Moved to codeSessionApi.ts so the SDK /bridge subpath can bundle them
// without pulling in this file's heavy CLI tree (analytics, transport).
export {
  createCodeSession,
  type RemoteCredentials,
} from './codeSessionApi.js'
import {
  createCodeSession,
  fetchRemoteCredentials as fetchRemoteCredentialsRaw,
  type RemoteCredentials,
} from './codeSessionApi.js'

// v112: removed CLI-side wrapper for fetchRemoteCredentials — called directly
// from initEnvLessBridgeCore. The base-url override and trusted-device token
// logic moved into codeSessionApi.ts.

type ArchiveStatus = number | 'timeout' | 'error' | 'no_token'

// Single categorical for BQ `GROUP BY archive_status`. The booleans on
// _teardown predate this and are redundant with it (except archive_timeout,
// which distinguishes ECONNABORTED from other network errors — both map to
// 'network_error' here since the dominant cause in a 1.5s window is timeout).
type ArchiveTelemetryStatus =
  | 'ok'
  | 'skipped_no_token'
  | 'network_error'
  | 'server_4xx'
  | 'server_5xx'

async function archiveSession(
  sessionId: string,
  baseUrl: string,
  accessToken: string | undefined,
  orgUUID: string,
  timeoutMs: number,
): Promise<ArchiveStatus> {
  if (!accessToken) return 'no_token'
  const compatId = toCompatSessionId(sessionId)
  try {
    const response = await axios.post(
      `${baseUrl}/v1/sessions/${compatId}/archive`,
      {},
      {
        headers: {
          ...oauthHeaders(accessToken),
          'anthropic-beta': 'ccr-byoc-2025-07-29',
          'x-organization-uuid': orgUUID,
        },
        timeout: timeoutMs,
        validateStatus: () => true,
      },
    )
    logForDebugging(
      `[remote-bridge] Archive ${compatId} status=${response.status}`,
    )
    return response.status
  } catch (err) {
    const msg = errorMessage(err)
    logForDebugging(`[remote-bridge] Archive failed: ${msg}`)
    return axios.isAxiosError(err) && err.code === 'ECONNABORTED'
      ? 'timeout'
      : 'error'
  }
}

function isBridgeRequiresActionDetailsEnabled(): boolean {
  return getFeatureValue_CACHED_MAY_BE_STALE(
    'tengu_bridge_requires_action_details',
    false,
  )
}
function isBashOrReadTool(toolName: string): boolean {
  return toolName === 'Bash' || toolName === 'PowerShell'
}
