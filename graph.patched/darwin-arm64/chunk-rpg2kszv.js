// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Qtt}from"./chunk-fkz3e4t3.js";function R$(r,t){return(e)=>r((S)=>c(S,t,S[t],e(S[t])))}function Uwt(r){return(t)=>r((e)=>{let S=t(e);return Object.is(S,e)?e:{...e,...S}})}function cK(r,t,e){return{get:()=>r()[e],set:R$(t,e)}}function H6(r,t){return(e,S)=>({get:()=>e()[r]??t,set:(a)=>S((s)=>{let n=s[r]??t;return c(s,r,n,a(n))})})}function TZn(r){let t=r;return{get:()=>t,set:(e)=>{t=e(t)}}}function ja(r,t){let e=r,S=new Set,a=t&&Qtt(t),s=()=>e;return{getSnapshot:s,getState:s,setState:(n)=>{let o=e,i=n(o);if(Object.is(i,o))return;e=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=Qtt(n);return S.add(o),()=>S.delete(o)}}}function c(r,t,e,S){return Object.is(S,e)?r:{...r,[t]:S}}
export{R$,Uwt,cK,H6,TZn,ja};
