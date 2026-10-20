// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-kpqr86hf.js";import{W}from"./chunk-cne7d53x.js";import{qz}from"./chunk-bvn0epzr.js";import{Mc}from"./chunk-jdf15pat.js";var d=new W(()=>({degraded:!1}));function t(){return d.of(j().host)}function Wse(n,r){if(n!==Mc)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=qz(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function pys(){return t().degraded}
export{Wse,pys};
