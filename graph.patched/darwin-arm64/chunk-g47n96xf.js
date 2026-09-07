// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{j,B}from"./chunk-zhtwayh2.js";import{yF}from"./chunk-1692k4g5.js";import{BG}from"./chunk-6pky15m5.js";var d=new j(()=>({degraded:!1}));function t(){return d.of(B().host)}function jee(n,r){if(n!==BG)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=yF(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function DWn(){return t().degraded}
export{jee,DWn};
