// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Xre}from"./chunk-8nra9hkj.js";function c2(t,e){return(r)=>t((S)=>c(S,e,S[e],r(S[e])))}function Cln(t){return(e)=>t((r)=>{let S=e(r);return Object.is(S,r)?r:{...r,...S}})}function SYn(t){return{getSnapshot:t.getSnapshot,getState:t.getState,setState:Cln(t.setState),subscribe:t.subscribe}}function nke(t,e,r){return{get:()=>t()[r],set:c2(e,r)}}function Zq(t,e){return(r,S)=>({get:()=>r()[t]??e,set:(a)=>S((s)=>{let n=s[t]??e;return c(s,t,n,a(n))})})}function Djs(t){let e=t;return{get:()=>e,set:(r)=>{e=r(e)}}}function Ts(t,e){let r=t,S=new Set,a=e&&Xre(e),s=()=>r;return{getSnapshot:s,getState:s,setState:(n)=>{let o=r,i=n(o);if(Object.is(i,o))return;r=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=Xre(n);return S.add(o),()=>S.delete(o)}}}function c(t,e,r,S){return Object.is(S,r)?t:{...t,[e]:S}}
export{c2,Cln,SYn,nke,Zq,Djs,Ts};
