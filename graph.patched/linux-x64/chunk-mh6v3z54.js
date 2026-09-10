// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{z,B}from"./chunk-6n7yk222.js";import{HB}from"./chunk-2byjyg85.js";import{xF}from"./chunk-nf00mahq.js";var d=new z(()=>({degraded:!1}));function t(){return d.of(B().host)}function Pne(n,r){if(n!==xF)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=HB(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function a3n(){return t().degraded}
export{Pne,a3n};
