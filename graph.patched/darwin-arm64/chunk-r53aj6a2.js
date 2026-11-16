// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{LSe}from"./chunk-5p4f0tx0.js";function DF(t,e){return(r)=>t((S)=>c(S,e,S[e],r(S[e])))}function lXn(t){return(e)=>t((r)=>{let S=e(r);return Object.is(S,r)?r:{...r,...S}})}function rqr(t){return{getSnapshot:t.getSnapshot,getState:t.getState,setState:lXn(t.setState),subscribe:t.subscribe}}function sje(t,e,r){return{get:()=>t()[r],set:DF(e,r)}}function IAt(t,e){return(r,S)=>({get:()=>r()[t]??e,set:(a)=>S((s)=>{let n=s[t]??e;return c(s,t,n,a(n))})})}function gOa(t){let e=t;return{get:()=>e,set:(r)=>{e=r(e)}}}function Hs(t,e){let r=t,S=new Set,a=e&&LSe(e),s=()=>r;return{getSnapshot:s,getState:s,setState:(n)=>{let o=r,i=n(o);if(Object.is(i,o))return;r=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=LSe(n);return S.add(o),()=>S.delete(o)}}}function c(t,e,r,S){return Object.is(S,r)?t:{...t,[e]:S}}
export{DF,lXn,rqr,sje,IAt,gOa,Hs};
