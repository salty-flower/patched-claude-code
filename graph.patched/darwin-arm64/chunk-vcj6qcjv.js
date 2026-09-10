// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{zt}from"./chunk-sgyvc67j.js";import{pe}from"./chunk-rgs4nrpq.js";import{t}from"./chunk-wbbe5mtc.js";import{h}from"./chunk-2rebt4am.js";import{WTt}from"./chunk-a637cea8.js";class n{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var xv=new zt(()=>new n);function Hv(r){return WTt()&&xv.of(r).transportPersists!==!1}function co(r){return Hv(r)||xv.of(r).bridgeMayBeLive()}function HCn(r,e){if(!Hv(r))return e;return e.map((s)=>({name:s.name,status:s.status}))}function esr(r,e){return Hv(r)?[]:e}function j9t(r,e,s,i="last"){try{if(!Hv(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return h(pe(o)),[e]}}function qI(r,e,s){return Hv(r)?s:e}
export{xv,Hv,co,HCn,esr,j9t,qI};
