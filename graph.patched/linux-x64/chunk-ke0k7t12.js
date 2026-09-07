// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{X}from"./chunk-k6vqz9fa.js";import{Zi}from"./chunk-x0xqzpn1.js";import{yI,KV}from"./chunk-2eyqk69b.js";import{Xi}from"./chunk-7zwr4n29.js";import{mu,v6e}from"./chunk-82qrhb9b.js";import{ep,Zre}from"./chunk-q2wrayky.js";import{_l}from"./chunk-prpv604z.js";import{z3e}from"./chunk-9wa0ka8p.js";import{Vle}from"./chunk-hbqxejdf.js";var g=["default","reset","none","gray","grey"];async function fgr(n,e,t){return n(await VDt(t,e),{display:"system"}),null}async function VDt(n,e){if(Zi())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?ep[Math.floor(Math.random()*ep.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!ep.includes(o)){let s=ep.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=X(),d=_l(),i=r?"default":o,l=r?void 0:o;await z3e(m,i,d,e.storageV5),e.setAppState((s)=>Vle(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return v6e(mu(),Zre({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=Xi()?.bridgeSessionId;if(!t)return;let o=yI();import("./chunk-r1ppsswv.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,ep,{baseUrl:KV(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{fgr,VDt};
