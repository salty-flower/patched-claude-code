// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{dot}from"./chunk-h4q6j5r2.js";function _U(r,t){return(e)=>r((S)=>c(S,t,S[t],e(S[t])))}function tir(r){return(t)=>r((e)=>{let S=t(e);return Object.is(S,e)?e:{...e,...S}})}function Ume(r,t,e){return{get:()=>r()[e],set:_U(t,e)}}function dQ(r,t){return(e,S)=>({get:()=>e()[r]??t,set:(a)=>S((s)=>{let n=s[r]??t;return c(s,r,n,a(n))})})}function nir(r){let t=r;return{get:()=>t,set:(e)=>{t=e(t)}}}function rl(r,t){let e=r,S=new Set,a=t&&dot(t),s=()=>e;return{getSnapshot:s,getState:s,setState:(n)=>{let o=e,i=n(o);if(Object.is(i,o))return;e=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=dot(n);return S.add(o),()=>S.delete(o)}}}function c(r,t,e,S){return Object.is(S,e)?r:{...r,[t]:S}}
export{_U,tir,Ume,dQ,nir,rl};
