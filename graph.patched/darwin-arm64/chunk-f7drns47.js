// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{on}from"./chunk-hdbxv3pp.js";import{he}from"./chunk-pc7b8z35.js";import{t}from"./chunk-t2jwg94b.js";import{h}from"./chunk-1mtde6n1.js";import{Ter}from"./chunk-6kmbqpg4.js";class n{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var Dw=new on(()=>new n);function iA(r){return Ter()&&Dw.of(r).transportPersists!==!1}function So(r){return iA(r)||Dw.of(r).bridgeMayBeLive()}function E_n(r,e){if(!iA(r))return e;return e.map((s)=>({name:s.name,status:s.status}))}function UYn(r,e){return iA(r)?[]:e}function v9t(r,e,s,i="last"){try{if(!iA(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return h(he(o)),[e]}}function nP(r,e,s){return iA(r)?s:e}
export{Dw,iA,So,E_n,UYn,v9t,nP};
