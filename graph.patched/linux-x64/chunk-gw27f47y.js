// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{X}from"./chunk-6n7yk222.js";import{aa}from"./chunk-x2rz8f0q.js";import{SP,PK}from"./chunk-w4frmzrc.js";import{sa}from"./chunk-pyvg1z7j.js";import{Tu,x7e}from"./chunk-f4v140c7.js";import{Ef,lie}from"./chunk-30yzdvqs.js";import{Tl}from"./chunk-y8fvfzqc.js";import{XJe}from"./chunk-2byjyg85.js";import{vde}from"./chunk-99z9xnxf.js";var g=["default","reset","none","gray","grey"];async function tAr(n,e,t){return n(await VFt(t,e),{display:"system"}),null}async function VFt(n,e){if(aa())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?Ef[Math.floor(Math.random()*Ef.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!Ef.includes(o)){let s=Ef.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=X(),d=Tl(),i=r?"default":o,l=r?void 0:o;await XJe(m,i,d,e.storageV5),e.setAppState((s)=>vde(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return x7e(Tu(),lie({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=sa()?.bridgeSessionId;if(!t)return;let o=SP();import("./chunk-r7wm66c9.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,Ef,{baseUrl:PK(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{tAr,VFt};
