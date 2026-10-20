// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{at}from"./chunk-dxktn51d.js";import{U}from"./chunk-ekgz6skk.js";import{t}from"./chunk-n5v91jc3.js";import{l}from"./chunk-jkcb7qdd.js";import{cA,D9n}from"./chunk-4qs43hr1.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var US=new at(()=>new n);function Bp(r){return D9n({hostedWorker:lzn(r),transportPersists:US.of(r).transportPersists})}function azn(r){return lzn(r)||US.of(r).transportPersists!==!1}function QHs(r){return cA()&&US.of(r).transportPersists===!0}function lzn(r){return r.host.launchOptions.diskless()||US.of(r).hostedWorker}function vo(r){return Bp(r)||US.of(r).bridgeMayBeLive()}function qTo(r,e){return Bp(r)?YTo(e):e}function YTo(r){return r.map((e)=>({name:e.name,status:e.status}))}function XTo(r,e){return Bp(r)?[]:e}function Jxr(r,e,s,i="last"){try{if(!Bp(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return l(U(o)),[e]}}function Dee(r,e,s){return Bp(r)?s:e}
export{US,Bp,azn,QHs,lzn,vo,qTo,YTo,XTo,Jxr,Dee};
