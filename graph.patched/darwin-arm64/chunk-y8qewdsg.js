// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{qt}from"./chunk-zhtwayh2.js";import{ge}from"./chunk-084v19yj.js";import{t}from"./chunk-5q90j22t.js";import{h}from"./chunk-c5ajdz5z.js";import{aQn}from"./chunk-ameycbwy.js";class n{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var CE=new qt(()=>new n);function vE(r){return aQn()&&CE.of(r).transportPersists!==!1}function fo(r){return vE(r)||CE.of(r).bridgeMayBeLive()}function Ahn(r,e){if(!vE(r))return e;return e.map((s)=>({name:s.name,status:s.status}))}function t7n(r,e){return vE(r)?[]:e}function bWt(r,e,s,i="last"){try{if(!vE(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return h(ge(o)),[e]}}function HI(r,e,s){return vE(r)?s:e}
export{CE,vE,fo,Ahn,t7n,bWt,HI};
