// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{s}from"./chunk-qw5jhqey.js";import{c}from"./chunk-9rhc0mtn.js";import{wc}from"./chunk-jnz6ntmk.js";import{A,C,F}from"./chunk-w6mhhrt2.js";F();function Ro(t,e,n){let i=wc(),o=i?.getDisplayText(t,e),_=o===void 0,r=i?"action_not_found":"no_context",a=C(!1);if(A(()=>{if(_&&!a.current)a.current=!0,s("tengu_keybinding_fallback_used",{action:t,context:c(e),fallback:n,reason:c(r)})},[_,t,e,n,r]),_)return n;return o===null?"":o}
export{Ro};
