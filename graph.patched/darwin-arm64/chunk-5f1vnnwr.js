// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Q}from"./chunk-yhfssb7x.js";import{sa}from"./chunk-n2xpq5jc.js";import{p0,jG}from"./chunk-w7f5yxh7.js";import{Da}from"./chunk-x5njxsab.js";import{Cu,z7e}from"./chunk-0xb8rq8q.js";import{df,joe}from"./chunk-x9bmv596.js";import{vl}from"./chunk-my9as4f3.js";import{o7e}from"./chunk-5e9qk3ys.js";import{xce}from"./chunk-16exjxx1.js";var g=["default","reset","none","gray","grey"];async function kHr(n,e,t){return n(await BLt(t,e),{display:"system"}),null}async function BLt(n,e){if(sa())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?df[Math.floor(Math.random()*df.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!df.includes(o)){let s=df.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=Q(),d=vl(),i=r?"default":o,l=r?void 0:o;await o7e(m,i,d,e.storageV5),e.setAppState((s)=>xce(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return z7e(Cu(),joe({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=Da()?.bridgeSessionId;if(!t)return;let o=p0();import("./chunk-knmcnrfc.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,df,{baseUrl:jG(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{kHr,BLt};
