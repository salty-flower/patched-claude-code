// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{$n}from"./chunk-30zk17wm.js";import{Se}from"./chunk-efckqwp7.js";import{n}from"./chunk-d0cr5d2v.js";import{h}from"./chunk-ma4xtxwv.js";import{f7n}from"./chunk-pq9z8qvg.js";class o{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;markLocalTransport(){this.transportPersists=!1}}var uw=new $n(()=>new o);function LE(r){return f7n()&&uw.of(r).transportPersists!==!1}function mo(r){return LE(r)||(uw.of(r).remoteBridgeLive?.()??!1)}function mfn(r,e){if(!LE(r))return e;return e.map((t)=>({name:t.name,status:t.status}))}function m3n(r,e){return LE(r)?[]:e}function fjt(r,e,t,i="last"){try{if(!LE(r))return i==="first"?[e,...t]:[...t,e];for(let s of t)n(`error_during_execution detail: ${s}`,{level:"error"});return[e]}catch(s){return h(Se(s)),[e]}}function aL(r,e,t){return LE(r)?t:e}
export{uw,LE,mo,mfn,m3n,fjt,aL};
