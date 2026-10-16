// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{lt}from"./chunk-eqmywwjn.js";import{U}from"./chunk-w7m8nded.js";import{t}from"./chunk-cwsn6mdf.js";import{l}from"./chunk-9pt2nr7j.js";import{Px,t6n}from"./chunk-mm8dw908.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var hS=new lt(()=>new n);function Wp(r){return t6n({hostedWorker:Z$n(r),transportPersists:hS.of(r).transportPersists})}function _Ss(r){return Z$n(r)||hS.of(r).transportPersists!==!1}function bSs(r){return Px()&&hS.of(r).transportPersists===!0}function Z$n(r){return r.host.launchOptions.diskless()||hS.of(r).hostedWorker}function _o(r){return Wp(r)||hS.of(r).bridgeMayBeLive()}function bmo(r,e){return Wp(r)?Smo(e):e}function Smo(r){return r.map((e)=>({name:e.name,status:e.status}))}function wmo(r,e){return Wp(r)?[]:e}function Mwr(r,e,s,i="last"){try{if(!Wp(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return l(U(o)),[e]}}function xZ(r,e,s){return Wp(r)?s:e}
export{hS,Wp,_Ss,bSs,Z$n,_o,bmo,Smo,wmo,Mwr,xZ};
