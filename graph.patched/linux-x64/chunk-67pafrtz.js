// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{G,F}from"./chunk-aywwjcwq.js";import{G6}from"./chunk-m0sj7y8g.js";import{lc}from"./chunk-jnystawq.js";var d=new G(()=>({degraded:!1}));function t(){return d.of(F().host)}function EW(n,r){if(n!==lc)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=G6(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function jLo(){return t().degraded}
export{EW,jLo};
