// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{lJt}from"./chunk-29aedz4e.js";function $B(t,e){return(r)=>t((S)=>c(S,e,S[e],r(S[e])))}function vqt(t){return(e)=>t((r)=>{let S=e(r);return Object.is(S,r)?r:{...r,...S}})}function ITn(t){return{getSnapshot:t.getSnapshot,getState:t.getState,setState:vqt(t.setState),subscribe:t.subscribe}}function Gme(t,e,r){return{get:()=>t()[r],set:$B(e,r)}}function WW(t,e){return(r,S)=>({get:()=>r()[t]??e,set:(a)=>S((s)=>{let n=s[t]??e;return c(s,t,n,a(n))})})}function cQo(t){let e=t;return{get:()=>e,set:(r)=>{e=r(e)}}}function $s(t,e){let r=t,S=new Set,a=e&&lJt(e),s=()=>r;return{getSnapshot:s,getState:s,setState:(n)=>{let o=r,i=n(o);if(Object.is(i,o))return;r=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=lJt(n);return S.add(o),()=>S.delete(o)}}}function c(t,e,r,S){return Object.is(S,r)?t:{...t,[e]:S}}
export{$B,vqt,ITn,Gme,WW,cQo,$s};
