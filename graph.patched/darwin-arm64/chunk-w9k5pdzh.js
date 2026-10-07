// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{z,F}from"./chunk-8mvda08c.js";import{e5}from"./chunk-s46qgfx7.js";import{lc}from"./chunk-6pm26t04.js";var d=new z(()=>({degraded:!1}));function t(){return d.of(F().host)}function M2(n,r){if(n!==lc)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=e5(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function ANo(){return t().degraded}
export{M2,ANo};
