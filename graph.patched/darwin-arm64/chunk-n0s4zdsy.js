// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Zu,Kv}from"./chunk-axsjfnwn.js";import{Dw}from"./chunk-0x9x817t.js";function o(e){let t=Zu(e);return t===Zu("")?"(unnamed agent)":t}function r(e,t,i){return`${o(e)} agent: ${Kv(t,i)}`}function s(e,t,i){return{type:"notification",notification:{key:`agent-model-restricted-${o(e)}-${Zu(t)}`,text:r(e,t,i),priority:"medium",color:"warning",timeoutMs:1e4}}}function WXn(e,t){return(i,n)=>{t?.(s(e,i,n))}}function W$e(e,t){return(i,n)=>{t?.(Dw(r(e,i,n),"warning"))}}
export{WXn,W$e};
