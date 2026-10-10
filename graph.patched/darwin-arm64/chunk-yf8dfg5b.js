// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lt}from"./chunk-4bw62nzm.js";import{G}from"./chunk-886tf6ja.js";import{t}from"./chunk-gyf58rwf.js";import{c}from"./chunk-gsnbskq4.js";import{pH,zBn}from"./chunk-r2vtj1kh.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var sb=new lt(()=>new n);function Jp(r){return zBn({hostedWorker:Xpr(r),transportPersists:sb.of(r).transportPersists})}function qas(r){return pH()&&sb.of(r).transportPersists===!0}function Xpr(r){return r.host.launchOptions.diskless()||sb.of(r).hostedWorker}function lo(r){return Jp(r)||sb.of(r).bridgeMayBeLive()}function ioo(r,e){return Jp(r)?aoo(e):e}function aoo(r){return r.map((e)=>({name:e.name,status:e.status}))}function loo(r,e){return Jp(r)?[]:e}function Jpr(r,e,s,i="last"){try{if(!Jp(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return c(G(o)),[e]}}function fJ(r,e,s){return Jp(r)?s:e}
export{sb,Jp,qas,Xpr,lo,ioo,aoo,loo,Jpr,fJ};
