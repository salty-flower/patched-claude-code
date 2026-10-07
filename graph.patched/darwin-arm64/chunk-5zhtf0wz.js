// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{GT}from"./chunk-y0b3kvx1.js";import{jb,HS}from"./chunk-s46qgfx7.js";function o(e){let t=jb(e);return t===jb("")?"(unnamed agent)":t}function r(e,t,i){return`${o(e)} agent: ${HS(t,i)}`}function s(e,t,i){return{type:"notification",notification:{key:`agent-model-restricted-${o(e)}-${jb(t)}`,text:r(e,t,i),priority:"medium",color:"warning",timeoutMs:1e4}}}function wln(e,t){return(i,n)=>{t?.(s(e,i,n))}}function oSe(e,t){return(i,n)=>{t?.(GT(r(e,i,n),"warning"))}}
export{wln,oSe};
