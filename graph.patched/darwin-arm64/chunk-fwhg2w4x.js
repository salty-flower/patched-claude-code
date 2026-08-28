// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{G}from"./chunk-g4zaymy2.js";import{ha}from"./chunk-j1j7vbq3.js";import{sI,D3}from"./chunk-52d8nf21.js";import{da}from"./chunk-5nj4gmt4.js";import{Bd,iee}from"./chunk-qn0p3nv8.js";import{Bc,x5e}from"./chunk-9ep0zqeb.js";import{pa}from"./chunk-paqnf24w.js";import{Zxe}from"./chunk-j5h9ds58.js";import{voe}from"./chunk-863s7hh1.js";var g=["default","reset","none","gray","grey"];async function Jhr(n,e,t){return n(await Hkt(t,e),{display:"system"}),null}async function Hkt(n,e){if(ha())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?Bd[Math.floor(Math.random()*Bd.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!Bd.includes(o)){let s=Bd.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=G(),d=pa(),i=r?"default":o,l=r?void 0:o;await Zxe(m,i,d,e.storageV5),e.setAppState((s)=>voe(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return x5e(Bc(),iee({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=da()?.bridgeSessionId;if(!t)return;let o=sI();import("./chunk-38asd24c.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,Bd,{baseUrl:D3(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{Jhr,Hkt};
