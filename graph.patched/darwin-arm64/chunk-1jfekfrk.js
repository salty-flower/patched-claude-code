// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{utn}from"./chunk-63vja5td.js";function Wj(t,e){return(r)=>t((S)=>c(S,e,S[e],r(S[e])))}function A5t(t){return(e)=>t((r)=>{let S=e(r);return Object.is(S,r)?r:{...r,...S}})}function xOn(t){return{getSnapshot:t.getSnapshot,getState:t.getState,setState:A5t(t.setState),subscribe:t.subscribe}}function Mhe(t,e,r){return{get:()=>t()[r],set:Wj(e,r)}}function e6(t,e){return(r,S)=>({get:()=>r()[t]??e,set:(a)=>S((s)=>{let n=s[t]??e;return c(s,t,n,a(n))})})}function Nas(t){let e=t;return{get:()=>e,set:(r)=>{e=r(e)}}}function rs(t,e){let r=t,S=new Set,a=e&&utn(e),s=()=>r;return{getSnapshot:s,getState:s,setState:(n)=>{let o=r,i=n(o);if(Object.is(i,o))return;r=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=utn(n);return S.add(o),()=>S.delete(o)}}}function c(t,e,r,S){return Object.is(S,r)?t:{...t,[e]:S}}
export{Wj,A5t,xOn,Mhe,e6,Nas,rs};
