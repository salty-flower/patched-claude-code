// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{K}from"./chunk-vd0a9d2s.js";import{yc}from"./chunk-91pk1a5a.js";import{DD,Wae}from"./chunk-da53hkfx.js";import{ac}from"./chunk-h7j2v5wr.js";import{Ff,Tzt}from"./chunk-28k2pyza.js";import{y_,FHe}from"./chunk-bcvk3m9b.js";import{Gu}from"./chunk-n2c703p7.js";import{g6t}from"./chunk-nwqfvmza.js";import{XBe}from"./chunk-gps3dcmf.js";var c=["default","reset","none","gray","grey"];async function M0s(n,e,o){return n(await G9n(o,e),{display:"system"}),null}async function G9n(n,e){if(yc())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?y_[Math.floor(Math.random()*y_.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!y_.includes(t)){let s=y_.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=K(),m=Gu(),i=r?"default":t,l=r?void 0:t;await g6t(d,i,m,e.storageV5),e.setAppState((s)=>XBe(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return Tzt(Ff(),FHe({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=ac()?.bridgeSessionId;if(!o)return;let t=DD();import("./chunk-h721fezj.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,y_,{baseUrl:Wae(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{M0s,G9n};
