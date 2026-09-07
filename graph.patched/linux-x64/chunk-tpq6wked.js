// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Wt}from"./chunk-bj7g1p32.js";import{ge}from"./chunk-7s5qs9ea.js";import{t}from"./chunk-1tk5haqn.js";import{h}from"./chunk-9g6v0ehs.js";import{E7n}from"./chunk-ad19at7y.js";class n{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var AE=new Wt(()=>new n);function vE(r){return E7n()&&AE.of(r).transportPersists!==!1}function po(r){return vE(r)||AE.of(r).bridgeMayBeLive()}function Zgn(r,e){if(!vE(r))return e;return e.map((s)=>({name:s.name,status:s.status}))}function E6n(r,e){return vE(r)?[]:e}function eWt(r,e,s,i="last"){try{if(!vE(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return h(ge(o)),[e]}}function _L(r,e,s){return vE(r)?s:e}
export{AE,vE,po,Zgn,E6n,eWt,_L};
