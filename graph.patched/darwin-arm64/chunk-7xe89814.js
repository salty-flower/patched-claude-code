// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{At}from"./chunk-a7cah040.js";import{ee}from"./chunk-hs50vfa7.js";import{t}from"./chunk-3wz0srxw.js";import{u}from"./chunk-zwbw6dvp.js";import{e2}from"./chunk-q8pmvej3.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var oT=new At(()=>new n);function gm(r){let e=oT.of(r);return e.hostedWorker||e2()&&e.transportPersists!==!1}function Io(r){return gm(r)||oT.of(r).bridgeMayBeLive()}function fRr(r,e){return gm(r)?mRr(e):e}function mRr(r){return r.map((e)=>({name:e.name,status:e.status}))}function gRr(r,e){return gm(r)?[]:e}function XBn(r,e,s,i="last"){try{if(!gm(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return u(ee(o)),[e]}}function S4(r,e,s){return gm(r)?s:e}
export{oT,gm,Io,fRr,mRr,gRr,XBn,S4};
