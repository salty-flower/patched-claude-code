// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{s}from"./chunk-3jdapt8v.js";import{c}from"./chunk-jqgad8sa.js";import{ql}from"./chunk-5x73xcbp.js";import{E,T,N}from"./chunk-5752v0zq.js";N();function po(t,e,n){let i=ql(),o=i?.getDisplayText(t,e),_=o===void 0,r=i?"action_not_found":"no_context",a=T(!1);if(E(()=>{if(_&&!a.current)a.current=!0,s("tengu_keybinding_fallback_used",{action:t,context:c(e),fallback:n,reason:c(r)})},[_,t,e,n,r]),_)return n;return o===null?"":o}
export{po};
