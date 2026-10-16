// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{bu}from"./chunk-zw6exh70.js";var e="self_hosted_runner_";function Pzt(n){return n.startsWith(e)}function d8o(n){return bu([...n]).some(Pzt)}function r(n){return bu([n]).filter((t)=>!Pzt(t)).join(",")}function Dqr(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return bu([t]).some(Pzt)}function c8o(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!Dqr(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:r(o)}}
export{Pzt,d8o,Dqr,c8o};
