// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{yt}from"./chunk-aywwjcwq.js";import{V}from"./chunk-fdatg9ax.js";import{t}from"./chunk-gvn18sr5.js";import{c}from"./chunk-z9b8syjk.js";import{NIn}from"./chunk-0wqb5n04.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var tS=new yt(()=>new n);function gf(r){return NIn({hostedWorker:Der(r),transportPersists:tS.of(r).transportPersists})}function Der(r){return r.host.launchOptions.diskless()||tS.of(r).hostedWorker}function Go(r){return gf(r)||tS.of(r).bridgeMayBeLive()}function T3r(r,e){return gf(r)?A3r(e):e}function A3r(r){return r.map((e)=>({name:e.name,status:e.status}))}function C3r(r,e){return gf(r)?[]:e}function Ler(r,e,s,i="last"){try{if(!gf(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return c(V(o)),[e]}}function u9(r,e,s){return gf(r)?s:e}
export{tS,gf,Der,Go,T3r,A3r,C3r,Ler,u9};
