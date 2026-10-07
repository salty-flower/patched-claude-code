// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
function yxr(n){if(n!==void 0)n.callsInProgress=(n.callsInProgress??0)+1}function _xr(n){if(n===void 0)return;if(n.callsInProgress=(n.callsInProgress??1)-1,n.callsInProgress===0){let e=n.onCallsIdle;n.onCallsIdle=void 0,e?.()}}function GHt(n){yxr(n);let e=!0;return{[Symbol.dispose](){if(e)e=!1,_xr(n)}}}
export{yxr,_xr,GHt};
