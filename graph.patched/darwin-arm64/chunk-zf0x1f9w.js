// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Q}from"./chunk-hdbxv3pp.js";import{Ks}from"./chunk-gdx67b65.js";import{QH,uG}from"./chunk-mf35fj43.js";import{xa}from"./chunk-91h9xrqf.js";import{gu,d8e}from"./chunk-xxz7nkzb.js";import{sf,qre}from"./chunk-scv00ktt.js";import{El}from"./chunk-9my8vw9v.js";import{w5e}from"./chunk-darxmw8c.js";import{xle}from"./chunk-7xasvxrd.js";var g=["default","reset","none","gray","grey"];async function Fvr(n,e,t){return n(await TOt(t,e),{display:"system"}),null}async function TOt(n,e){if(Ks())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?sf[Math.floor(Math.random()*sf.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!sf.includes(o)){let s=sf.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=Q(),d=El(),i=r?"default":o,l=r?void 0:o;await w5e(m,i,d,e.storageV5),e.setAppState((s)=>xle(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return d8e(gu(),qre({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=xa()?.bridgeSessionId;if(!t)return;let o=QH();import("./chunk-wsbzs6vk.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,sf,{baseUrl:uG(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{Fvr,TOt};
