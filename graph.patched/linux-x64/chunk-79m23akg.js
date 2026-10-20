// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
function Yht(n){if(n===null||typeof n!=="object")return n;let e=n;if(t(e),"response"in e&&e.response!==null&&typeof e.response==="object")t(e.response);return n}function t(n){if("requestId"in n&&!("request_id"in n)){let e=u0o(n);if(delete n.requestId,e!==void 0)n.request_id=e}}function u0o(n){if("request_id"in n)return n.request_id;let e="requestId"in n?n.requestId:void 0;return typeof e==="string"&&e.toLowerCase().startsWith("late-bind-")?void 0:e}var O2s=128;
export{Yht,u0o,O2s};
