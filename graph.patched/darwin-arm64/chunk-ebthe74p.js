// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{bn}from"./chunk-1f8jcja6.js";import{Mn}from"./chunk-b2f7pn4f.js";import{ce,At,j}from"./chunk-07a1744w.js";j();function PI(c,o,t=1000,i=0,m){let e=Mn(),n=()=>bn(Math.max(0,(m??Date.now())-c-i)),a=ce((l)=>{if(!o)return()=>{};let r,u=()=>{try{l()}finally{r=e.setTimeout(u,t)}};return r=e.setTimeout(u,t),()=>r()},[o,t,e]);return At(a,n,n)}
export{PI};
