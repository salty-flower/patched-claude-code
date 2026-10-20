// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-dxktn51d.js";import{W}from"./chunk-2fbnw5gg.js";import{$2}from"./chunk-7p6jp6kj.js";import{Oc}from"./chunk-h3c350fm.js";var d=new W(()=>({degraded:!1}));function t(){return d.of(j().host)}function Lse(n,r){if(n!==Oc)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=$2(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function Chs(){return t().degraded}
export{Lse,Chs};
