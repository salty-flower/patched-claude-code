// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Y}from"./chunk-sgyvc67j.js";import{aa}from"./chunk-jkz0x6q2.js";import{x0,jV}from"./chunk-4tbahnnt.js";import{sa}from"./chunk-s3h76hsf.js";import{ku,VJe}from"./chunk-nhz30e6h.js";import{vf,gie}from"./chunk-d6mvvjc5.js";import{Tl}from"./chunk-1vqgbqb9.js";import{uJe}from"./chunk-e55d0yhx.js";import{Ade}from"./chunk-y7aseex2.js";var g=["default","reset","none","gray","grey"];async function NCr(n,e,t){return n(await X1t(t,e),{display:"system"}),null}async function X1t(n,e){if(aa())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?vf[Math.floor(Math.random()*vf.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!vf.includes(o)){let s=vf.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=Y(),d=Tl(),i=r?"default":o,l=r?void 0:o;await uJe(m,i,d,e.storageV5),e.setAppState((s)=>Ade(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return VJe(ku(),gie({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=sa()?.bridgeSessionId;if(!t)return;let o=x0();import("./chunk-3snfbsts.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,vf,{baseUrl:jV(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{NCr,X1t};
