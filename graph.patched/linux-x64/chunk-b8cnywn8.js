// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Pt}from"./chunk-n17xw1z0.js";import{vt}from"./chunk-6wv5bpfy.js";import{re,wt,N}from"./chunk-vm1tjjym.js";N();function kS(c,o,t=1000,i=0,m){let e=vt(),n=()=>Pt(Math.max(0,(m??Date.now())-c-i)),a=re((l)=>{if(!o)return()=>{};let r,u=()=>{try{l()}finally{r=e.setTimeout(u,t)}};return r=e.setTimeout(u,t),()=>r()},[o,t,e]);return wt(a,n,n)}
export{kS};
