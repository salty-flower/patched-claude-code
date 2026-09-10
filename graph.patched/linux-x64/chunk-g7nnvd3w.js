// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{$t}from"./chunk-dz6vh6s7.js";import{Et}from"./chunk-g0jk30qp.js";import{re,kt,L}from"./chunk-kt4npzgg.js";L();function lS(c,o,t=1000,i=0,m){let e=Et(),n=()=>$t(Math.max(0,(m??Date.now())-c-i)),a=re((l)=>{if(!o)return()=>{};let r,u=()=>{try{l()}finally{r=e.setTimeout(u,t)}};return r=e.setTimeout(u,t),()=>r()},[o,t,e]);return kt(a,n,n)}
export{lS};
