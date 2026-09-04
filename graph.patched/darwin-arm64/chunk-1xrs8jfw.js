// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{s}from"./chunk-v5cr82c7.js";import{u}from"./chunk-g1553wr3.js";import{ul}from"./chunk-ztevm5d3.js";import{C,v,j}from"./chunk-8wk5q2vw.js";import{G$,VGt}from"./chunk-s29w1jkx.js";j();function cp(t,e,i){let o=ul(),n=o?VGt(t,e,o.bindings):void 0,r=n===void 0,_=o?"action_not_found":"no_context",f=v(!1);if(C(()=>{if(r&&!f.current)f.current=!0,s("tengu_keybinding_fallback_used",{action:t,context:u(e),fallback:i,reason:u(_)})},[r,t,e,i,_]),n===void 0)return i;return n===null?"":G$(n)}
export{cp};
