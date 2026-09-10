// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Nt}from"./chunk-fk28fhjr.js";import{vt}from"./chunk-0xf6sw3y.js";import{re,Ct,M}from"./chunk-xgsrj7pc.js";M();function cb(c,o,t=1000,i=0,m){let e=vt(),n=()=>Nt(Math.max(0,(m??Date.now())-c-i)),a=re((l)=>{if(!o)return()=>{};let r,u=()=>{try{l()}finally{r=e.setTimeout(u,t)}};return r=e.setTimeout(u,t),()=>r()},[o,t,e]);return Ct(a,n,n)}
export{cb};
