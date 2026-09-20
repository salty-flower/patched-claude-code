// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{rl}from"./chunk-h7x15g9k.js";import{NOe}from"./chunk-vvze968h.js";import{k,T,L}from"./chunk-cf8g1269.js";L();function wo(n,e,t){let r=rl(),i=r?.getDisplayText(n,e),o=i===void 0,s=r?"action_not_found":"no_context",u=T(!1);if(k(()=>{if(o&&!u.current)u.current=!0,NOe(n,e,t,s)},[o,n,e,t,s]),o)return t;return i===null?"":i}
export{wo};
