// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Gt}from"./chunk-cet8na02.js";import{fe}from"./chunk-wkyng8j1.js";import{t}from"./chunk-w930ag8r.js";import{h}from"./chunk-e0gvmsm3.js";import{lvt}from"./chunk-67177kp4.js";class n{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var mC=new Gt(()=>new n);function gC(r){return lvt()&&mC.of(r).transportPersists!==!1}function uo(r){return gC(r)||mC.of(r).bridgeMayBeLive()}function XEn(r,e){if(!gC(r))return e;return e.map((s)=>({name:s.name,status:s.status}))}function Mtr(r,e){return gC(r)?[]:e}function W4t(r,e,s,i="last"){try{if(!gC(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return h(fe(o)),[e]}}function IP(r,e,s){return gC(r)?s:e}
export{mC,gC,uo,XEn,Mtr,W4t,IP};
