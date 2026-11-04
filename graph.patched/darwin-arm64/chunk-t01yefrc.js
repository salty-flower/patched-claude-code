// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Ete}from"./chunk-w5484khd.js";function hN(t,e){return(r)=>t((S)=>c(S,e,S[e],r(S[e])))}function wNn(t){return(e)=>t((r)=>{let S=e(r);return Object.is(S,r)?r:{...r,...S}})}function bTr(t){return{getSnapshot:t.getSnapshot,getState:t.getState,setState:wNn(t.setState),subscribe:t.subscribe}}function cLe(t,e,r){return{get:()=>t()[r],set:hN(e,r)}}function kmt(t,e){return(r,S)=>({get:()=>r()[t]??e,set:(a)=>S((s)=>{let n=s[t]??e;return c(s,t,n,a(n))})})}function LBi(t){let e=t;return{get:()=>e,set:(r)=>{e=r(e)}}}function Ls(t,e){let r=t,S=new Set,a=e&&Ete(e),s=()=>r;return{getSnapshot:s,getState:s,setState:(n)=>{let o=r,i=n(o);if(Object.is(i,o))return;r=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=Ete(n);return S.add(o),()=>S.delete(o)}}}function c(t,e,r,S){return Object.is(S,r)?t:{...t,[e]:S}}
export{hN,wNn,bTr,cLe,kmt,LBi,Ls};
