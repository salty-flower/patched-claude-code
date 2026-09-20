// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{jt}from"./chunk-sgamszzq.js";import{de}from"./chunk-qq9jq5dz.js";import{t}from"./chunk-qmm87fyw.js";import{g}from"./chunk-vzm3bfp5.js";import{dB}from"./chunk-g4c6ggz4.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var HT=new jt(()=>new n);function C_(r){let e=HT.of(r);return e.hostedWorker||dB()&&e.transportPersists!==!1}function Eo(r){return C_(r)||HT.of(r).bridgeMayBeLive()}function Hjn(r,e){return C_(r)?Pjn(e):e}function Pjn(r){return r.map((e)=>({name:e.name,status:e.status}))}function Ijn(r,e){return C_(r)?[]:e}function Hin(r,e,s,i="last"){try{if(!C_(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return g(de(o)),[e]}}function s6(r,e,s){return C_(r)?s:e}
export{HT,C_,Eo,Hjn,Pjn,Ijn,Hin,s6};
