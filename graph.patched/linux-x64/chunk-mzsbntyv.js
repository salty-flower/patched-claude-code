// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{mt}from"./chunk-g79wjybr.js";import{q}from"./chunk-5g6j8x8p.js";import{t}from"./chunk-p46wpkfz.js";import{c}from"./chunk-3s94kw4m.js";import{Z0n}from"./chunk-hesrqedr.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var mS=new mt(()=>new n);function kf(r){return Z0n({hostedWorker:lar(r),transportPersists:mS.of(r).transportPersists})}function lar(r){return r.host.launchOptions.diskless()||mS.of(r).hostedWorker}function Xo(r){return kf(r)||mS.of(r).bridgeMayBeLive()}function mQr(r,e){return kf(r)?gQr(e):e}function gQr(r){return r.map((e)=>({name:e.name,status:e.status}))}function hQr(r,e){return kf(r)?[]:e}function car(r,e,s,i="last"){try{if(!kf(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return c(q(o)),[e]}}function RX(r,e,s){return kf(r)?s:e}
export{mS,kf,lar,Xo,mQr,gQr,hQr,car,RX};
