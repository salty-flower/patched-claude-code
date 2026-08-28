// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Nn}from"./chunk-2vv5hpw3.js";import{Ee}from"./chunk-7h2h1m4y.js";import{n}from"./chunk-akz0cj0f.js";import{_}from"./chunk-6ce4s97h.js";import{HVn}from"./chunk-pvyjzfv6.js";class o{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;markLocalTransport(){this.transportPersists=!1}}var e_=new Nn(()=>new o);function $w(r){return HVn()&&e_.of(r).transportPersists!==!1}function no(r){return $w(r)||(e_.of(r).remoteBridgeLive?.()??!1)}function ran(r,e){if(!$w(r))return e;return e.map((t)=>({name:t.name,status:t.status}))}function kWn(r,e){return $w(r)?[]:e}function E1t(r,e,t,i="last"){try{if(!$w(r))return i==="first"?[e,...t]:[...t,e];for(let s of t)n(`error_during_execution detail: ${s}`,{level:"error"});return[e]}catch(s){return _(Ee(s)),[e]}}function Vx(r,e,t){return $w(r)?t:e}
export{e_,$w,no,ran,kWn,E1t,Vx};
