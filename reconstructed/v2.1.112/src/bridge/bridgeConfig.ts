/**
 * Shared bridge auth/URL resolution. Consolidates the ant-only
 * CLAUDE_BRIDGE_* dev overrides that were previously copy-pasted across
 * a dozen files — inboundAttachments, BriefTool/upload, bridgeMain,
 * initReplBridge, remoteBridgeCore, daemon workers, /rename,
 * /remote-control.
 *
 * Two layers: *Override() returns the ant-only env var (or undefined);
 * the non-Override versions fall through to the real OAuth store/config.
 * Callers that compose with a different auth source (e.g. daemon workers
 * using IPC auth) use the Override getters directly.
 */

import { getOauthConfig } from '../constants/oauth.js'
import { getClaudeAIOAuthTokens } from '../utils/auth.js'

// TODO(lift): getBridgeTokenOverride and getBridgeBaseUrlOverride removed in v112.
// The ant-only dev overrides were eliminated; the override functions returned
// undefined in external builds anyway. v112 keeps only the non-Override accessors.
// See v112_min.js: only `getBridgeAccessToken` and `getBridgeBaseUrl` remain.

// TODO(lift): sanitizeSessionNamePrefix and getBridgeSessionNamePrefix added in v112.
// These helpers sanitize/validate session name prefixes for bridge sessions.
// v112 minified shows: `ZfK` (sanitizeSessionNamePrefix) and `U58` (getBridgeSessionNamePrefix).
// Reconstruction deferred until the call sites in bridgeSessionName.ts are lifted.

/**
 * Access token for bridge API calls: dev override first, then the OAuth
 * keychain. Undefined means "not logged in".
 */
export function getBridgeAccessToken(): string | undefined {
  // TODO(lift): v112 dropped the override call `getBridgeTokenOverride() ??`.
  // The v112 minified is `rb6()??o7()?.accessToken` where rb6 was the override.
  // In external builds the override always returned undefined, so the behavior
  // is identical. Keeping the v88 source for traceability.
  return getBridgeTokenOverride() ?? getClaudeAIOAuthTokens()?.accessToken
}

// TODO(lift): getBridgeTokenOverride at byte ~9019912
// v112 removed this ant-only helper. In external builds it always returned
// undefined. Stub retained for backward compatibility with internal callers
// until those call sites are updated.
function getBridgeTokenOverride(): string | undefined {
  return undefined
}

/**
 * Base URL for bridge API calls: dev override first, then the production
 * OAuth config. Always returns a URL.
 */
export function getBridgeBaseUrl(): string {
  // TODO(lift): v112 dropped the override call `getBridgeBaseUrlOverride() ??`.
  // Same rationale as getBridgeAccessToken — external builds never hit the override.
  return getBridgeBaseUrlOverride() ?? getOauthConfig().BASE_API_URL
}

// TODO(lift): getBridgeBaseUrlOverride at byte ~9020184
// v112 removed this ant-only helper. Stub retained for backward compatibility.
function getBridgeBaseUrlOverride(): string | undefined {
  return undefined
}
