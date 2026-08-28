// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Fn}from"./chunk-g4zaymy2.js";import{Te}from"./chunk-e5bq01yj.js";import{n}from"./chunk-cmkfpkth.js";import{b}from"./chunk-w2hwjymv.js";import{eGn}from"./chunk-1pdkgxab.js";class o{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;markLocalTransport(){this.transportPersists=!1}}var eb=new Fn(()=>new o);function Nw(r){return eGn()&&eb.of(r).transportPersists!==!1}function no(r){return Nw(r)||(eb.of(r).remoteBridgeLive?.()??!1)}function ian(r,e){if(!Nw(r))return e;return e.map((t)=>({name:t.name,status:t.status}))}function I5n(r,e){return Nw(r)?[]:e}function ENt(r,e,t,i="last"){try{if(!Nw(r))return i==="first"?[e,...t]:[...t,e];for(let s of t)n(`error_during_execution detail: ${s}`,{level:"error"});return[e]}catch(s){return b(Te(s)),[e]}}function Jx(r,e,t){return Nw(r)?t:e}
export{eb,Nw,no,ian,I5n,ENt,Jx};
