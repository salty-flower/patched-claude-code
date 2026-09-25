// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{V,W}from"./chunk-s8xs8s76.js";import{FG}from"./chunk-twxt3h9y.js";import{fc}from"./chunk-emn764wn.js";var d=new V(()=>({degraded:!1}));function t(){return d.of(W().host)}function IK(n,r){if(n!==fc)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=FG(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function cqr(){return t().degraded}
export{IK,cqr};
