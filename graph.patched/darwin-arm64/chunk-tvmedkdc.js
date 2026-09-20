// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{J}from"./chunk-sgamszzq.js";import{la}from"./chunk-pfn1bjke.js";import{aO,x9}from"./chunk-rzpeenzg.js";import{sa}from"./chunk-ybr4tvgm.js";import{Td,Slt}from"./chunk-fpdh0w7q.js";import{Rm,Bde}from"./chunk-r75dbkc6.js";import{_c}from"./chunk-wh4168zx.js";import{fot}from"./chunk-nq62bgfy.js";import{Nye}from"./chunk-pjdqz33s.js";var c=["default","reset","none","gray","grey"];async function aqr(n,e,o){return n(await BKt(o,e),{display:"system"}),null}async function BKt(n,e){if(la())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?Rm[Math.floor(Math.random()*Rm.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!Rm.includes(t)){let s=Rm.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=J(),m=_c(),i=r?"default":t,l=r?void 0:t;await fot(d,i,m,e.storageV5),e.setAppState((s)=>Nye(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return Slt(Td(),Bde({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=sa()?.bridgeSessionId;if(!o)return;let t=aO();import("./chunk-3f9kt0ec.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,Rm,{baseUrl:x9(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{aqr,BKt};
