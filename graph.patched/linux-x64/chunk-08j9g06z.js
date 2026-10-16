// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Bne}from"./chunk-rs6p8dg3.js";function SG(t,e){return(r)=>t((S)=>c(S,e,S[e],r(S[e])))}function ion(t){return(e)=>t((r)=>{let S=e(r);return Object.is(S,r)?r:{...r,...S}})}function QGn(t){return{getSnapshot:t.getSnapshot,getState:t.getState,setState:ion(t.setState),subscribe:t.subscribe}}function Ive(t,e,r){return{get:()=>t()[r],set:SG(e,r)}}function pq(t,e){return(r,S)=>({get:()=>r()[t]??e,set:(a)=>S((s)=>{let n=s[t]??e;return c(s,t,n,a(n))})})}function xMs(t){let e=t;return{get:()=>e,set:(r)=>{e=r(e)}}}function _s(t,e){let r=t,S=new Set,a=e&&Bne(e),s=()=>r;return{getSnapshot:s,getState:s,setState:(n)=>{let o=r,i=n(o);if(Object.is(i,o))return;r=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=Bne(n);return S.add(o),()=>S.delete(o)}}}function c(t,e,r,S){return Object.is(S,r)?t:{...t,[e]:S}}
export{SG,ion,QGn,Ive,pq,xMs,_s};
