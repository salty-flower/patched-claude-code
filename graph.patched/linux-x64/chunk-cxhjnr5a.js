// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{alt}from"./chunk-d8qjp6nk.js";function g1(r,t){return(e)=>r((S)=>c(S,t,S[t],e(S[t])))}function VCt(r){return(t)=>r((e)=>{let S=t(e);return Object.is(S,e)?e:{...e,...S}})}function b9(r,t,e){return{get:()=>r()[e],set:g1(t,e)}}function RW(r,t){return(e,S)=>({get:()=>e()[r]??t,set:(a)=>S((s)=>{let n=s[r]??t;return c(s,r,n,a(n))})})}function lur(r){let t=r;return{get:()=>t,set:(e)=>{t=e(t)}}}function Ei(r,t){let e=r,S=new Set,a=t&&alt(t),s=()=>e;return{getSnapshot:s,getState:s,setState:(n)=>{let o=e,i=n(o);if(Object.is(i,o))return;e=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=alt(n);return S.add(o),()=>S.delete(o)}}}function c(r,t,e,S){return Object.is(S,e)?r:{...r,[t]:S}}
export{g1,VCt,b9,RW,lur,Ei};
