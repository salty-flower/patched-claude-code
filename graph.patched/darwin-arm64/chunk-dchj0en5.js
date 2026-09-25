// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ot}from"./chunk-s8xs8s76.js";import{se}from"./chunk-shf1fjz2.js";import{t}from"./chunk-wvb0gwjm.js";import{u}from"./chunk-0dpks9t0.js";import{z1}from"./chunk-n875m8bj.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var eR=new Ot(()=>new n);function Rg(r){let e=eR.of(r);return e.hostedWorker||z1()&&e.transportPersists!==!1}function So(r){return Rg(r)||eR.of(r).bridgeMayBeLive()}function Efr(r,e){return Rg(r)?vfr(e):e}function vfr(r){return r.map((e)=>({name:e.name,status:e.status}))}function Cfr(r,e){return Rg(r)?[]:e}function e0n(r,e,s,i="last"){try{if(!Rg(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return u(se(o)),[e]}}function A3(r,e,s){return Rg(r)?s:e}
export{eR,Rg,So,Efr,vfr,Cfr,e0n,A3};
