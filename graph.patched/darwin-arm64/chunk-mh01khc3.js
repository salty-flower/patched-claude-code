// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ep,VC}from"./chunk-e44qnbvj.js";import{dy}from"./chunk-wqb2b4v0.js";function o(e){let t=ep(e);return t===ep("")?"(unnamed agent)":t}function r(e,t,i){return`${o(e)} agent: ${VC(t,i)}`}function s(e,t,i){return{type:"notification",notification:{key:`agent-model-restricted-${o(e)}-${ep(t)}`,text:r(e,t,i),priority:"medium",color:"warning",timeoutMs:1e4}}}function b_r(e,t){return(i,n)=>{t?.(s(e,i,n))}}function Sze(e,t){return(i,n)=>{t?.(dy(r(e,i,n),"warning"))}}
export{b_r,Sze};
