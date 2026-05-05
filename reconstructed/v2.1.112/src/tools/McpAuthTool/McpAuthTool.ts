import reject from 'lodash-es/reject.js'
import { z } from 'zod/v4'
import { performMCPOAuthFlow } from '../../services/mcp/auth.js'
import {
  clearMcpAuthCache,
  reconnectMcpServerImpl,
} from '../../services/mcp/client.js'
import {
  buildMcpToolName,
  getMcpPrefix,
} from '../../services/mcp/mcpStringUtils.js'
import type {
  McpHTTPServerConfig,
  McpSSEServerConfig,
  ScopedMcpServerConfig,
} from '../../services/mcp/types.js'
import type { Tool } from '../../Tool.js'
import { errorMessage } from '../../utils/errors.js'
import { lazySchema } from '../../utils/lazySchema.js'
import { logMCPDebug, logMCPError } from '../../utils/log.js'
import type { PermissionDecision } from '../../utils/permissions/PermissionResult.js'
// v112-only imports (unresolved — see TODOs below)
// TODO(lift): buildCallbackUrl (gGY) at byte ~9735800 — constructs the
//   redirect-callback URL from an authUrl; used in the remote-session branch.
// TODO(lift): isRemoteSession (pGY) at byte ~9735850 — returns true when
//   Claude Code is running as a remote server (affects browser redirect UX).
// TODO(lift): registerOAuthPromise (pl8) at byte ~9734900 — stores the
//   oauthPromise in a module-level Map keyed by serverName for later
//   retrieval by the completeAuthentication tool.
// TODO(lift): completeAuthenticationInputSchema (UFY/ox6) at byte ~10963638 —
//   z.object({title: z.string()}); this is the inputSchema for the sibling
//   completeAuthentication pseudo-tool, initialized in a separate thunk.

// v112: three new module-level Maps added to track OAuth state across
// the auth + callback flow.
// TODO(lift): bl8, Il8, xl8 at byte ~9734050 (init thunk `me`) —
//   likely oauthPromiseMap, oauthControllerMap, oauthResolverMap.
const _oauthPromiseMap = new Map<string, Promise<void>>()
const _oauthControllerMap = new Map<string, unknown>()
const _oauthResolverMap = new Map<string, unknown>()

const inputSchema = lazySchema(() => z.object({}))
type InputSchema = ReturnType<typeof inputSchema>

export type McpAuthOutput = {
  status: 'auth_url' | 'unsupported' | 'error'
  message: string
  authUrl?: string
}

function getConfigUrl(config: ScopedMcpServerConfig): string | undefined {
  if ('url' in config) return config.url
  return undefined
}

/**
 * Creates a pseudo-tool for an MCP server that is installed but not
 * authenticated. Surfaced in place of the server's real tools so the model
 * knows the server exists and can start the OAuth flow on the user's behalf.
 *
 * When called, starts performMCPOAuthFlow with skipBrowserOpen and returns
 * the authorization URL. The OAuth callback completes in the background;
 * once it fires, reconnectMcpServerImpl runs and the server's real tools
 * are swapped into appState.mcp.tools via the existing prefix-based
 * replacement (useManageMCPConnections.updateServer wipes anything matching
 * mcp__<server>__*, so this pseudo-tool is removed automatically).
 *
 * v112 additions:
 * - OAuth promise is registered in a module-level Map (registerOAuthPromise)
 *   so the completeAuthentication tool can reuse it for the callback URL flow.
 * - AbortController is no longer created; signal is passed as `undefined`.
 * - Remote-session UX: when pGY() is true, the response includes instructions
 *   to paste the full redirect URL and call the completeAuthentication tool.
 */
export function createMcpAuthTool(
  serverName: string,
  config: ScopedMcpServerConfig,
): Tool<InputSchema, McpAuthOutput> {
  const url = getConfigUrl(config)
  const transport = config.type ?? 'stdio'
  const location = url ? `${transport} at ${url}` : transport

  const description =
    `The \`${serverName}\` MCP server (${location}) is installed but requires authentication. ` +
    `Call this tool to start the OAuth flow — you'll receive an authorization URL to share with the user. ` +
    `Once the user completes authorization in their browser, the server's real tools will become available automatically.`

  return {
    name: buildMcpToolName(serverName, 'authenticate'),
    isMcp: true,
    mcpInfo: { serverName, toolName: 'authenticate' },
    isEnabled: () => true,
    isConcurrencySafe: () => false,
    isReadOnly: () => false,
    toAutoClassifierInput: () => serverName,
    userFacingName: () => `${serverName} - authenticate (MCP)`,
    maxResultSizeChars: 10_000,
    renderToolUseMessage: () => `Authenticate ${serverName} MCP server`,
    async description() {
      return description
    },
    async prompt() {
      return description
    },
    get inputSchema(): InputSchema {
      return inputSchema()
    },
    async checkPermissions(input): Promise<PermissionDecision> {
      return { behavior: 'allow', updatedInput: input }
    },
    async call(_input, context) {
      // claude.ai connectors use a separate auth flow (handleClaudeAIAuth in
      // MCPRemoteServerMenu) that we don't invoke programmatically here —
      // just point the user at /mcp.
      if (config.type === 'claudeai-proxy') {
        return {
          data: {
            status: 'unsupported' as const,
            message: `This is a claude.ai MCP connector. Ask the user to run /mcp and select "${serverName}" to authenticate.`,
          },
        }
      }

      // performMCPOAuthFlow only accepts sse/http. needs-auth state is only
      // set on HTTP 401 (UnauthorizedError) so other transports shouldn't
      // reach here, but be defensive.
      if (config.type !== 'sse' && config.type !== 'http') {
        return {
          data: {
            status: 'unsupported' as const,
            message: `Server "${serverName}" uses ${transport} transport which does not support OAuth from this tool. Ask the user to run /mcp and authenticate manually.`,
          },
        }
      }

      const sseOrHttpConfig = config as (
        | McpSSEServerConfig
        | McpHTTPServerConfig
      ) & { scope: ScopedMcpServerConfig['scope'] }

      // Mirror cli/print.ts mcp_authenticate: start the flow, capture the
      // URL via onAuthorizationUrl, return it immediately. The flow's
      // Promise resolves later when the browser callback fires.
      let resolveAuthUrl: ((url: string) => void) | undefined
      const authUrlPromise = new Promise<string>(resolve => {
        resolveAuthUrl = resolve
      })

      const { setAppState } = context

      // v112: AbortController removed — signal is now passed as undefined.
      const oauthPromise = performMCPOAuthFlow(
        serverName,
        sseOrHttpConfig,
        u => resolveAuthUrl?.(u),
        undefined, // v112: no AbortController (was: controller.signal)
        { skipBrowserOpen: true },
      )

      // v112: register the OAuth promise in the module-level map so the
      // completeAuthentication tool can retrieve it when the user pastes
      // the callback URL.
      // TODO(lift): registerOAuthPromise (pl8) at byte ~9734900
      // pl8(serverName, oauthPromise)
      _oauthPromiseMap.set(serverName, oauthPromise as unknown as Promise<void>)

      // Background continuation: once OAuth completes, reconnect and swap
      // the real tools into appState. Prefix-based replacement removes this
      // pseudo-tool since it shares the mcp__<server>__ prefix.
      void oauthPromise
        .then(async () => {
          clearMcpAuthCache()
          const result = await reconnectMcpServerImpl(serverName, config)
          const prefix = getMcpPrefix(serverName)
          setAppState(prev => ({
            ...prev,
            mcp: {
              ...prev.mcp,
              clients: prev.mcp.clients.map(c =>
                c.name === serverName ? result.client : c,
              ),
              tools: [
                ...reject(prev.mcp.tools, t => t.name?.startsWith(prefix)),
                ...result.tools,
              ],
              commands: [
                ...reject(prev.mcp.commands, c => c.name?.startsWith(prefix)),
                ...result.commands,
              ],
              resources: result.resources
                ? { ...prev.mcp.resources, [serverName]: result.resources }
                : prev.mcp.resources,
            },
          }))
          logMCPDebug(
            serverName,
            `OAuth complete, reconnected with ${result.tools.length} tool(s)`,
          )
        })
        .catch(err => {
          logMCPError(
            serverName,
            `OAuth flow failed after tool-triggered start: ${errorMessage(err)}`,
          )
        })

      try {
        // Race: get the URL, or the flow completes without needing one
        // (e.g. XAA with cached IdP token — silent auth).
        const authUrl = await Promise.race([
          authUrlPromise,
          oauthPromise.then(() => null as string | null),
        ])

        if (authUrl) {
          const completeAuthToolName = buildMcpToolName(
            serverName,
            'complete_authentication',
          )
          // TODO(lift): buildCallbackUrl (gGY) at byte ~9735800
          // const callbackUrl = buildCallbackUrl(authUrl)
          // TODO(lift): isRemoteSession (pGY) at byte ~9735850
          // const isRemote = isRemoteSession()
          const isRemote = false // TODO: resolve pGY()
          const callbackUrl = authUrl // TODO: resolve gGY(authUrl)
          const remoteNote = isRemote
            ? `\n\nThis session is remote, so after authorizing the browser will try to load \`${callbackUrl}?code=...\` and show a connection error — that's expected. Ask the user to copy the full URL from the browser's address bar and paste it into chat, then call \`${completeAuthToolName}\` with that URL as \`callback_url\`.`
            : `\n\nIf the browser shows a connection error on the redirect page, ask the user to paste the full URL from the address bar and call \`${completeAuthToolName}\` with it.`
          return {
            data: {
              status: 'auth_url' as const,
              authUrl,
              message:
                `Ask the user to open this URL in their browser to authorize the ${serverName} MCP server:\n\n${authUrl}\n\nOnce they complete the flow, the server's tools will become available automatically.${remoteNote}`,
            },
          }
        }

        return {
          data: {
            status: 'auth_url' as const,
            message: `Authentication completed silently for ${serverName}. The server's tools should now be available.`,
          },
        }
      } catch (err) {
        return {
          data: {
            status: 'error' as const,
            message: `Failed to start OAuth flow for ${serverName}: ${errorMessage(err)}. Ask the user to run /mcp and authenticate manually.`,
          },
        }
      }
    },
    mapToolResultToToolResultBlockParam(data, toolUseID) {
      return {
        tool_use_id: toolUseID,
        type: 'tool_result',
        content: data.message,
      }
    },
  } satisfies Tool<InputSchema, McpAuthOutput>
}

// v112: jac=0.5, cos=0.997 — additional export decl at byte ~10963638.
// This is a lazySchema for the completeAuthentication tool's input.
// The matching v88 decl [6695710,6695788] was the inputSchema init.
// In v112 this thunk (ox6) initializes UFY = lazySchema(() => z.object({title: z.string()})).
// TODO(lift): completeAuthenticationInputSchema (UFY) at byte ~10963638 —
//   used by the completeAuthentication pseudo-tool (separate Tool object,
//   not in this source file's v112 span). The schema accepts `{title: string}`.
//   Exposing as a named export so the sibling tool can import it.
export const completeAuthenticationInputSchema = lazySchema(() =>
  z.object({
    title: z.string(),
  }),
)
