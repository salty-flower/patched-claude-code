// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function E5e(n){if(n===null||typeof n!=="object")return n;let e=n;if(t(e),"response"in e&&e.response!==null&&typeof e.response==="object")t(e.response);return n}function t(n){if("requestId"in n&&!("request_id"in n)){let e=J5s(n);if(delete n.requestId,e!==void 0)n.request_id=e}}function J5s(n){if("request_id"in n)return n.request_id;let e="requestId"in n?n.requestId:void 0;return typeof e==="string"&&e.toLowerCase().startsWith("late-bind-")?void 0:e}var hka=128;
export{E5e,J5s,hka};
