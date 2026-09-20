// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{zt}from"./chunk-txfrkyzp.js";import{de}from"./chunk-cnzbk8gg.js";import{t}from"./chunk-847hpqqs.js";import{m}from"./chunk-kh3dq6rw.js";import{nB}from"./chunk-30p0nwys.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var RT=new zt(()=>new n);function k_(r){let e=RT.of(r);return e.hostedWorker||nB()&&e.transportPersists!==!1}function vo(r){return k_(r)||RT.of(r).bridgeMayBeLive()}function o2n(r,e){return k_(r)?s2n(e):e}function s2n(r){return r.map((e)=>({name:e.name,status:e.status}))}function i2n(r,e){return k_(r)?[]:e}function uin(r,e,s,i="last"){try{if(!k_(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return m(de(o)),[e]}}function J2(r,e,s){return k_(r)?s:e}
export{RT,k_,vo,o2n,s2n,i2n,uin,J2};
