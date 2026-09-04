// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Qt}from"./chunk-yhfssb7x.js";import{he}from"./chunk-dsb06hq9.js";import{t}from"./chunk-84crg0gy.js";import{h}from"./chunk-jx9d5yeb.js";import{Grr}from"./chunk-wa3r1gxt.js";class n{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var VT=new Qt(()=>new n);function _A(r){return Grr()&&VT.of(r).transportPersists!==!1}function Eo(r){return _A(r)||VT.of(r).bridgeMayBeLive()}function vbn(r,e){if(!_A(r))return e;return e.map((s)=>({name:s.name,status:s.status}))}function Rer(r,e){return _A(r)?[]:e}function GGt(r,e,s,i="last"){try{if(!_A(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return h(he(o)),[e]}}function yP(r,e,s){return _A(r)?s:e}
export{VT,_A,Eo,vbn,Rer,GGt,yP};
