// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{nt}from"./chunk-ersar6wn.js";import{N}from"./chunk-36ysyspx.js";import{t}from"./chunk-d7b0m8qy.js";import{l}from"./chunk-thm21ca7.js";import{xes}from"./chunk-we9anmwe.js";import{cC,Jar}from"./chunk-z3m0wxsd.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;hostOwnedLocalStdin=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0,this.hostOwnedLocalStdin=!1}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}markHeadlessStart(r){this.hostOwnedLocalStdin=!r.sdkUrl&&r.readsProcessStdin&&!xes()}}var cS=new nt(()=>new n);function Dp(r){return Jar({hostedWorker:lcn(r),transportPersists:cS.of(r).transportPersists})}function Z0e(r){return lcn(r)||cS.of(r).transportPersists!==!1}function Pzs(r){let e=cS.of(r);return e.hostOwnedLocalStdin&&e.transportPersists===!1&&!lcn(r)&&!xes()}function Izs(r){return cC()&&cS.of(r).transportPersists===!0}function lcn(r){return r.host.launchOptions.diskless()||cS.of(r).hostedWorker}function eo(r){return Dp(r)||cS.of(r).bridgeMayBeLive()}function YDo(r,e){return Dp(r)?XDo(e):e}function XDo(r){return r.map((e)=>({name:e.name,status:e.status}))}function JDo(r,e){return Dp(r)?[]:e}function HFr(r,e,s,i="last"){try{if(!Dp(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return l(N(o)),[e]}}function fre(r,e,s){return Dp(r)?s:e}
export{cS,Dp,Z0e,Pzs,Izs,lcn,eo,YDo,XDo,JDo,HFr,fre};
