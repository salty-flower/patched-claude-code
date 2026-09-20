// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,z}from"./chunk-sgamszzq.js";import{OU}from"./chunk-746ms91t.js";import{nc}from"./chunk-vwjr2pkc.js";var d=new G(()=>({degraded:!1}));function t(){return d.of(z().host)}function Jle(n,r){if(n!==nc)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=OU(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function xyr(){return t().degraded}
export{Jle,xyr};
