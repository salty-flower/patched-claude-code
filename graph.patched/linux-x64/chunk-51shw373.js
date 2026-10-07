// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{UC}from"./chunk-9wqh5j7s.js";import{BS,Ob}from"./chunk-m0sj7y8g.js";function o(e){let t=BS(e);return t===BS("")?"(unnamed agent)":t}function r(e,t,i){return`${o(e)} agent: ${Ob(t,i)}`}function s(e,t,i){return{type:"notification",notification:{key:`agent-model-restricted-${o(e)}-${BS(t)}`,text:r(e,t,i),priority:"medium",color:"warning",timeoutMs:1e4}}}function uln(e,t){return(i,n)=>{t?.(s(e,i,n))}}function Q_e(e,t){return(i,n)=>{t?.(UC(r(e,i,n),"warning"))}}
export{uln,Q_e};
