// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ln}from"./chunk-38213y7h.js";import{we}from"./chunk-qr1avfxy.js";import{n}from"./chunk-ynzt0fm1.js";import{h}from"./chunk-qpcjd2zp.js";import{HJn}from"./chunk-2jwmf6rf.js";class o{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;markLocalTransport(){this.transportPersists=!1}}var uT=new Ln(()=>new o);function PE(r){return HJn()&&uT.of(r).transportPersists!==!1}function mo(r){return PE(r)||(uT.of(r).remoteBridgeLive?.()??!1)}function hpn(r,e){if(!PE(r))return e;return e.map((t)=>({name:t.name,status:t.status}))}function bKn(r,e){return PE(r)?[]:e}function m2t(r,e,t,i="last"){try{if(!PE(r))return i==="first"?[e,...t]:[...t,e];for(let s of t)n(`error_during_execution detail: ${s}`,{level:"error"});return[e]}catch(s){return h(we(s)),[e]}}function dI(r,e,t){return PE(r)?t:e}
export{uT,PE,mo,hpn,bKn,m2t,dI};
