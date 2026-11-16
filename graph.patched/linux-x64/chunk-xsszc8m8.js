// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ee}from"./chunk-wswyff5p.js";function Gfa(e){let n={...e,consumed:!1};return ee().pipelineReplyOrigins.set(e.expectedToolUseId,n),n}function zfa(e,n,t){let i=t===void 0?void 0:ee().pipelineReplyOrigins.get(t);if(i===void 0||i.consumed||i.slug!==e||i.threadId!==n)return!1;return i.consumed=!0,!0}function Vfa(e){return e!==void 0&&ee().pipelineReplyOrigins.has(e)}function FUr(e,n){return ee().autoReact.chainToolUseIds.set(e,n),e}function $Ur(e){let n=ee();n.autoReact.chainToolUseIds.delete(e),n.askClassFirstWords.delete(e)}function qfa(e,n){return e!==void 0&&ee().autoReact.chainToolUseIds.get(e)===n}function Kfa(e){let n=ee().pipelineReplyOrigins;if(n.get(e.expectedToolUseId)===e)n.delete(e.expectedToolUseId)}
export{Gfa,zfa,Vfa,FUr,$Ur,qfa,Kfa};
