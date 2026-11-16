// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ep,GA}from"./chunk-a5a37ds7.js";import{dy}from"./chunk-zaxe68t4.js";function o(e){let t=ep(e);return t===ep("")?"(unnamed agent)":t}function r(e,t,i){return`${o(e)} agent: ${GA(t,i)}`}function s(e,t,i){return{type:"notification",notification:{key:`agent-model-restricted-${o(e)}-${ep(t)}`,text:r(e,t,i),priority:"medium",color:"warning",timeoutMs:1e4}}}function Jgr(e,t){return(i,n)=>{t?.(s(e,i,n))}}function mVe(e,t){return(i,n)=>{t?.(dy(r(e,i,n),"warning"))}}
export{Jgr,mVe};
