// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Cbe}from"./chunk-732yb76j.js";function PF(t,e){return(r)=>t((S)=>c(S,e,S[e],r(S[e])))}function F7n(t){return(e)=>t((r)=>{let S=e(r);return Object.is(S,r)?r:{...r,...S}})}function O4r(t){return{getSnapshot:t.getSnapshot,getState:t.getState,setState:F7n(t.setState),subscribe:t.subscribe}}function nWe(t,e,r){return{get:()=>t()[r],set:PF(e,r)}}function ACt(t,e){return(r,S)=>({get:()=>r()[t]??e,set:(a)=>S((s)=>{let n=s[t]??e;return c(s,t,n,a(n))})})}function CPa(t){let e=t;return{get:()=>e,set:(r)=>{e=r(e)}}}function Hs(t,e){let r=t,S=new Set,a=e&&Cbe(e),s=()=>r;return{getSnapshot:s,getState:s,setState:(n)=>{let o=r,i=n(o);if(Object.is(i,o))return;r=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=Cbe(n);return S.add(o),()=>S.delete(o)}}}function c(t,e,r,S){return Object.is(S,r)?t:{...t,[e]:S}}
export{PF,F7n,O4r,nWe,ACt,CPa,Hs};
