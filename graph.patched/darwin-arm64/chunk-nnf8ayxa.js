// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{mt}from"./chunk-vd0a9d2s.js";import{V}from"./chunk-tnh13g2g.js";import{t}from"./chunk-b5feae42.js";import{c}from"./chunk-tdmgys2e.js";import{yLn}from"./chunk-zp1a5mr6.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var gb=new mt(()=>new n);function kf(r){return yLn({hostedWorker:Ear(r),transportPersists:gb.of(r).transportPersists})}function Ear(r){return r.host.launchOptions.diskless()||gb.of(r).hostedWorker}function Xo(r){return kf(r)||gb.of(r).bridgeMayBeLive()}function TJr(r,e){return kf(r)?RJr(e):e}function RJr(r){return r.map((e)=>({name:e.name,status:e.status}))}function xJr(r,e){return kf(r)?[]:e}function kar(r,e,s,i="last"){try{if(!kf(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return c(V(o)),[e]}}function MX(r,e,s){return kf(r)?s:e}
export{gb,kf,Ear,Xo,TJr,RJr,xJr,kar,MX};
