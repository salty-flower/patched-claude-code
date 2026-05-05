// highlight.js's type defs carry `/// <reference lib="dom" />`. SSETransport,
// mcp/client, ssh, dumpPrompts use DOM types (TextDecodeOptions, RequestInfo)
// that only typecheck because this file's `typeof import('highlight.js')` pulls
// lib.dom in. tsconfig has lib: ["ESNext"] only — fixing the actual DOM-type
// deps is a separate sweep; this ref preserves the status quo.
/// <reference lib="dom" />

import { extname } from 'path'

export type CliHighlight = {
  highlight: typeof import('cli-highlight').highlight
  supportsLanguage: typeof import('cli-highlight').supportsLanguage
}

// NOTE(lift): v112 region.json shows heavy attrition.
// v88 decls [6290858,6292772], [6292805,6293036], [6293036,6293073], [6293183,6293195]
// all have NO v112 match. Only decl [6293073,6293183] (getLanguageName) → jac=1,cos=0.975
// matches v112 at [7938085,7938195].
//
// The v112_min fragment shows:
//   function Aaz(q){let K=Bp8(q);if(K)return v_K(K);let _=mp8(q);if(_)return _.join(" ");return q.type??"unknown"}
//
// This is a NEW function — not `getLanguageName`. The function resolves a language
// name from a token, not a file path. The module-level promise/cache and `loadCliHighlight`
// were replaced with a simpler token-based lookup. The shared-promise pattern is gone.

// TODO(lift): Aaz at v112 byte ~7938085 — `getLanguageName` replacement.
// Takes a token object (with .type) and resolves language via Bp8 (highlight.js lookup?),
// mp8 (language alias list?), falling back to q.type. Signature changed from
// `(file_path: string) => Promise<string>` to a synchronous token resolver.

/**
 * v112: getLanguageName now takes a token object and resolves synchronously.
 * The async file-path-based version and the shared cli-highlight promise were removed.
 *
 * @param token - A syntax token with a `type` field and optionally other language metadata.
 * @returns The resolved language name string.
 */
export function getLanguageName(token: { type?: string; [key: string]: unknown }): string {
  // TODO(lift): Bp8 at byte ~7938085 — first lookup (highlight.js language registry by token)
  // TODO(lift): v_K at byte ~7938085 — name resolver for highlight.js language object
  // TODO(lift): mp8 at byte ~7938085 — second lookup (alias list or language map)
  return token.type ?? 'unknown'
}

// NOTE: The module-level shared promise, loadCliHighlight, and getCliHighlightPromise
// functions were removed in v112. The CliHighlight type export is kept for consumers
// that may still reference it transitively, but its internal implementation changed.
