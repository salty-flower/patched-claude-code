// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{p5b as r,q5b as o,s5b as c}from"./_637.js";import{Exd as h}from"./_839.js";function d(){return o(l)}function F(e,n,t){if(!S.test(t))return;e.set((i)=>{let s=i.ownVers[n]??[];if(s.includes(t))return i;return{...i,ownVers:{...i.ownVers,[n]:[...s,t].slice(-P)}}})}function a(e,n,t){return e.get().ownVers[n]?.includes(t)??!1}function x(e,n,t){return a(e,n,t)?"self-session":"unverified"}async function y(e,n,t){g(e,n);try{return await t()}finally{w(e,n)}}function g(e,n){e.set((t)=>({...t,inFlight:{...t.inFlight,[n]:(t.inFlight[n]??0)+1}}))}function w(e,n){e.set((t)=>{let i=t.inFlight[n]??0;if(i===0)return t;if(i===1){let{[n]:s,...u}=t.inFlight;return{...t,inFlight:u}}return{...t,inFlight:{...t.inFlight,[n]:i-1}}})}function m(e,n){return(e.get().inFlight[n]??0)>0}var P=8,S,l,O;var b=h(()=>{c();S=/^[A-Za-z0-9._-]{1,64}$/,l={ownVers:{},inFlight:{}},O=r("ownPublishes",l)});
export{S as bSb,O as cSb,d as dSb,F as eSb,a as fSb,x as gSb,y as hSb,g as iSb,w as jSb,m as kSb,b as lSb};
