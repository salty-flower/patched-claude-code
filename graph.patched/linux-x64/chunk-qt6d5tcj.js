// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{s}from"./chunk-cvykgfry.js";import{c}from"./chunk-gt4btdxr.js";import{Wl}from"./chunk-y7fk9hvk.js";import{A,E,N}from"./chunk-q0z49y3j.js";import{VNt}from"./chunk-fedrx9j2.js";import{QP}from"./chunk-7htg0dng.js";N();function au(t,e,i){let o=Wl(),n=o?VNt(t,e,o.bindings):void 0,r=n===void 0,_=o?"action_not_found":"no_context",f=E(!1);if(A(()=>{if(r&&!f.current)f.current=!0,s("tengu_keybinding_fallback_used",{action:t,context:c(e),fallback:i,reason:c(_)})},[r,t,e,i,_]),n===void 0)return i;return n===null?"":QP(n)}
export{au};
