// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{lt}from"./chunk-xzypj06m.js";import{U}from"./chunk-wkh5syvr.js";import{t}from"./chunk-bnfhb7sj.js";import{l}from"./chunk-e666gr8q.js";import{Hx,S4n}from"./chunk-p28cak91.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var yb=new lt(()=>new n);function Wp(r){return S4n({hostedWorker:_$n(r),transportPersists:yb.of(r).transportPersists})}function rws(r){return _$n(r)||yb.of(r).transportPersists!==!1}function ows(r){return Hx()&&yb.of(r).transportPersists===!0}function _$n(r){return r.host.launchOptions.diskless()||yb.of(r).hostedWorker}function _o(r){return Wp(r)||yb.of(r).bridgeMayBeLive()}function Ymo(r,e){return Wp(r)?Xmo(e):e}function Xmo(r){return r.map((e)=>({name:e.name,status:e.status}))}function Jmo(r,e){return Wp(r)?[]:e}function eEr(r,e,s,i="last"){try{if(!Wp(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return l(U(o)),[e]}}function NZ(r,e,s){return Wp(r)?s:e}
export{yb,Wp,rws,ows,_$n,_o,Ymo,Xmo,Jmo,eEr,NZ};
