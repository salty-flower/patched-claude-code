// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{rl}from"./chunk-h7x15g9k.js";import{CV,fin,NOe}from"./chunk-vvze968h.js";import{k,T,L}from"./chunk-cf8g1269.js";L();function yu(e,i,t){let o=rl(),n=o?fin(e,i,o.bindings):void 0,r=n===void 0,f=o?"action_not_found":"no_context",d=T(!1);if(k(()=>{if(r&&!d.current)d.current=!0,NOe(e,i,t,f)},[r,e,i,t,f]),n===void 0)return t;return n===null?"":CV(n)}
export{yu};
