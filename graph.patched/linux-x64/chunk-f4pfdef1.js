// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Wt}from"./chunk-6n7yk222.js";import{pe}from"./chunk-59zxrwfh.js";import{t}from"./chunk-cmg3b5hg.js";import{h}from"./chunk-p9k2m8jj.js";import{TTt}from"./chunk-s01fy5wt.js";class n{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var Rk=new Wt(()=>new n);function xk(r){return TTt()&&Rk.of(r).transportPersists!==!1}function co(r){return xk(r)||Rk.of(r).bridgeMayBeLive()}function sAn(r,e){if(!xk(r))return e;return e.map((s)=>({name:s.name,status:s.status}))}function Eor(r,e){return xk(r)?[]:e}function v6t(r,e,s,i="last"){try{if(!xk(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return h(pe(o)),[e]}}function L0(r,e,s){return xk(r)?s:e}
export{Rk,xk,co,sAn,Eor,v6t,L0};
