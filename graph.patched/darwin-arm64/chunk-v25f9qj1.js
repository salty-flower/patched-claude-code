// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{z}from"./chunk-a7cah040.js";import{Ga}from"./chunk-0y6wkmcj.js";import{wH,yte}from"./chunk-bdn1md90.js";import{Vl}from"./chunk-t2ndab9k.js";import{Ip,q0t}from"./chunk-fggdnxfn.js";import{Fh,_Ae}from"./chunk-swv3mpcg.js";import{Id}from"./chunk-f3ctdkkt.js";import{mIt}from"./chunk-59zy4j10.js";import{SHe}from"./chunk-6qd1accj.js";var c=["default","reset","none","gray","grey"];async function S8o(n,e,o){return n(await Axn(o,e),{display:"system"}),null}async function Axn(n,e){if(Ga())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?Fh[Math.floor(Math.random()*Fh.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!Fh.includes(t)){let s=Fh.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=z(),m=Id(),i=r?"default":t,l=r?void 0:t;await mIt(d,i,m,e.storageV5),e.setAppState((s)=>SHe(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return q0t(Ip(),_Ae({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=Vl()?.bridgeSessionId;if(!o)return;let t=wH();import("./chunk-yba13551.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,Fh,{baseUrl:yte(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{S8o,Axn};
