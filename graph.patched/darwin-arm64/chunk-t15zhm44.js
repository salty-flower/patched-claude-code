// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Lt}from"./chunk-nw6r1618.js";import{kt}from"./chunk-d4940r2z.js";import{B,Pt,N}from"./chunk-5752v0zq.js";N();function Mb(c,o,t=1000,i=0,m){let e=kt(),n=()=>Lt(Math.max(0,(m??Date.now())-c-i)),a=B((l)=>{if(!o)return()=>{};let r,u=()=>{try{l()}finally{r=e.setTimeout(u,t)}};return r=e.setTimeout(u,t),()=>r()},[o,t,e]);return Pt(a,n,n)}
export{Mb};
