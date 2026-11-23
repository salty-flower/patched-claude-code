// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Sn}from"./chunk-hzf7t49x.js";import{Mn}from"./chunk-bzk3ayzm.js";import{ce,Ct,j}from"./chunk-mp0bjfh5.js";j();function CO(c,o,t=1000,i=0,m){let e=Mn(),n=()=>Sn(Math.max(0,(m??Date.now())-c-i)),a=ce((l)=>{if(!o)return()=>{};let r,u=()=>{try{l()}finally{r=e.setTimeout(u,t)}};return r=e.setTimeout(u,t),()=>r()},[o,t,e]);return Ct(a,n,n)}
export{CO};
