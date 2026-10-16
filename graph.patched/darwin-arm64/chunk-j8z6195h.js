// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{b_,Sw}from"./chunk-1901fdh6.js";import{Sv}from"./chunk-996thspe.js";function o(e){let t=b_(e);return t===b_("")?"(unnamed agent)":t}function r(e,t,i){return`${o(e)} agent: ${Sw(t,i)}`}function s(e,t,i){return{type:"notification",notification:{key:`agent-model-restricted-${o(e)}-${b_(t)}`,text:r(e,t,i),priority:"medium",color:"warning",timeoutMs:1e4}}}function zTn(e,t){return(i,n)=>{t?.(s(e,i,n))}}function ATe(e,t){return(i,n)=>{t?.(Sv(r(e,i,n),"warning"))}}
export{zTn,ATe};
