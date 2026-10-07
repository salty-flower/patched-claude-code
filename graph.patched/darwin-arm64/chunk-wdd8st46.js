// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{yt}from"./chunk-8mvda08c.js";import{q}from"./chunk-fqsygynq.js";import{t}from"./chunk-f8eqwxpt.js";import{c}from"./chunk-qfs4y3ww.js";import{tOn}from"./chunk-ma17m27h.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var nb=new yt(()=>new n);function gf(r){return tOn({hostedWorker:Yer(r),transportPersists:nb.of(r).transportPersists})}function Yer(r){return r.host.launchOptions.diskless()||nb.of(r).hostedWorker}function Vo(r){return gf(r)||nb.of(r).bridgeMayBeLive()}function F3r(r,e){return gf(r)?$3r(e):e}function $3r(r){return r.map((e)=>({name:e.name,status:e.status}))}function U3r(r,e){return gf(r)?[]:e}function Xer(r,e,s,i="last"){try{if(!gf(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return c(q(o)),[e]}}function _Y(r,e,s){return gf(r)?s:e}
export{nb,gf,Yer,Vo,F3r,$3r,U3r,Xer,_Y};
