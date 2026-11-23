// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-m8nhymg4.js";import{L3}from"./chunk-s69m30yj.js";import{Of}from"./chunk-5eewsfgr.js";import{W}from"./chunk-z1a5ffdv.js";var d=new W(()=>({degraded:!1}));function t(){return d.of(F().host)}function SVe(n,r){if(n!==Of)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=L3(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function hWi(){return t().degraded}
export{SVe,hWi};
