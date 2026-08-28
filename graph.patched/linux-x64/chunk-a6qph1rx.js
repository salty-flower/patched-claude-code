// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Mt}from"./chunk-cgwm6n4d.js";import{Ht}from"./chunk-r03j4hsq.js";import{U,Rt,N}from"./chunk-q0z49y3j.js";N();function O_(c,o,t=1000,i=0,m){let e=Ht(),n=()=>Mt(Math.max(0,(m??Date.now())-c-i)),a=U((l)=>{if(!o)return()=>{};let r,u=()=>{try{l()}finally{r=e.setTimeout(u,t)}};return r=e.setTimeout(u,t),()=>r()},[o,t,e]);return Rt(a,n,n)}
export{O_};
