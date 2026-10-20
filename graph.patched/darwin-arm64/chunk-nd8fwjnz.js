// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{at}from"./chunk-kpqr86hf.js";import{U}from"./chunk-nre716m4.js";import{t}from"./chunk-tdxkq523.js";import{l}from"./chunk-277zhca1.js";import{fT,ZYn}from"./chunk-ex8w1b3a.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var Ub=new at(()=>new n);function Up(r){return ZYn({hostedWorker:_Gn(r),transportPersists:Ub.of(r).transportPersists})}function yGn(r){return _Gn(r)||Ub.of(r).transportPersists!==!1}function Y0s(r){return fT()&&Ub.of(r).transportPersists===!0}function _Gn(r){return r.host.launchOptions.diskless()||Ub.of(r).hostedWorker}function Eo(r){return Up(r)||Ub.of(r).bridgeMayBeLive()}function lTo(r,e){return Up(r)?dTo(e):e}function dTo(r){return r.map((e)=>({name:e.name,status:e.status}))}function cTo(r,e){return Up(r)?[]:e}function cPr(r,e,s,i="last"){try{if(!Up(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return l(U(o)),[e]}}function jee(r,e,s){return Up(r)?s:e}
export{Ub,Up,yGn,Y0s,_Gn,Eo,lTo,dTo,cTo,cPr,jee};
