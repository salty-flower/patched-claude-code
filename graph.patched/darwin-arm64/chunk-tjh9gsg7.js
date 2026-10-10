// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B}from"./chunk-4bw62nzm.js";import{O8}from"./chunk-bk5ct2gw.js";import{Hc}from"./chunk-c0aaqg7t.js";var d=new q(()=>({degraded:!1}));function t(){return d.of(B().host)}function Dte(n,r){if(n!==Hc)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=O8(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function z9o(){return t().degraded}
export{Dte,z9o};
