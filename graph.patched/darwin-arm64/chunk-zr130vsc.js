// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{F}from"./chunk-ecyypctx.js";import{W}from"./chunk-8915xd28.js";import{u5}from"./chunk-y4qg9nre.js";import{mp}from"./chunk-drdzaj23.js";var d=new W(()=>({degraded:!1}));function t(){return d.of(F().host)}function hhe(n,r){if(n!==mp)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=u5(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function jii(){return t().degraded}
export{hhe,jii};
