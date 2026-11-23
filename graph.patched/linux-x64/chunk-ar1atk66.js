// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-r3adsed5.js";import{x4}from"./chunk-jk3t30z5.js";import{Pf}from"./chunk-ne47maj5.js";import{W}from"./chunk-z1a5ffdv.js";var d=new W(()=>({degraded:!1}));function t(){return d.of(F().host)}function mqe(n,r){if(n!==Pf)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=x4(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function AWi(){return t().degraded}
export{mqe,AWi};
