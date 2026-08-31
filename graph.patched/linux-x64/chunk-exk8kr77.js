// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{s}from"./chunk-yqfv1yd3.js";import{c}from"./chunk-r1b219q3.js";import{Hc}from"./chunk-73qfv3w2.js";import{A,v,F}from"./chunk-v59pjxqq.js";import{O2t}from"./chunk-zry0tkan.js";import{bM}from"./chunk-3x9xrtvw.js";F();function uu(t,e,i){let o=Hc(),n=o?O2t(t,e,o.bindings):void 0,r=n===void 0,_=o?"action_not_found":"no_context",f=v(!1);if(A(()=>{if(r&&!f.current)f.current=!0,s("tengu_keybinding_fallback_used",{action:t,context:c(e),fallback:i,reason:c(_)})},[r,t,e,i,_]),n===void 0)return i;return n===null?"":bM(n)}
export{uu};
