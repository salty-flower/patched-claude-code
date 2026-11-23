// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ee}from"./chunk-m9wmj1k9.js";function Mpa(e){let n={...e,consumed:!1};return ee().pipelineReplyOrigins.set(e.expectedToolUseId,n),n}function Dpa(e,n,t){let i=t===void 0?void 0:ee().pipelineReplyOrigins.get(t);if(i===void 0||i.consumed||i.slug!==e||i.threadId!==n)return!1;return i.consumed=!0,!0}function Lpa(e){return e!==void 0&&ee().pipelineReplyOrigins.has(e)}function dUr(e,n){return ee().autoReact.chainToolUseIds.set(e,n),e}function cUr(e){let n=ee();n.autoReact.chainToolUseIds.delete(e),n.askClassFirstWords.delete(e)}function Hpa(e,n){return e!==void 0&&ee().autoReact.chainToolUseIds.get(e)===n}function Npa(e){let n=ee().pipelineReplyOrigins;if(n.get(e.expectedToolUseId)===e)n.delete(e.expectedToolUseId)}
export{Mpa,Dpa,Lpa,dUr,cUr,Hpa,Npa};
