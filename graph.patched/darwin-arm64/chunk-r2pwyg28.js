// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{V}from"./chunk-ersar6wn.js";import{pc}from"./chunk-5te1p2af.js";import{vx,Pye}from"./chunk-063dbhcr.js";import{zd}from"./chunk-c1rfegja.js";import{Pg,udn}from"./chunk-yhsjqng1.js";import{XS,vGe}from"./chunk-t0jzx3ak.js";import{_p}from"./chunk-040fj5r2.js";import{Pin}from"./chunk-31gxg38t.js";import{A8e}from"./chunk-ns8czn4y.js";var c=["default","reset","none","gray","grey"];async function XTi(n,e,o){return n(await ckr(o,e),{display:"system"}),null}async function ckr(n,e){if(pc())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?XS[Math.floor(Math.random()*XS.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!XS.includes(t)){let s=XS.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=V(),m=_p(),i=r?"default":t,l=r?void 0:t;await Pin(d,i,m,e.storageV5),e.setAppState((s)=>A8e(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return udn(Pg(),vGe({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=zd()?.bridgeSessionId;if(!o)return;let t=vx();import("./chunk-9rqfrm19.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,XS,{baseUrl:Pye(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{XTi,ckr};
