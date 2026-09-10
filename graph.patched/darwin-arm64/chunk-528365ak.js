// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{W,B}from"./chunk-sgyvc67j.js";import{jU}from"./chunk-e55d0yhx.js";import{N1}from"./chunk-hfzdv02p.js";var d=new W(()=>({degraded:!1}));function t(){return d.of(B().host)}function Fne(n,r){if(n!==N1)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=jU(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function Fqn(){return t().degraded}
export{Fne,Fqn};
