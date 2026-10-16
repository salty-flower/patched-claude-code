// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{K}from"./chunk-xzypj06m.js";import{Xd}from"./chunk-3sm6609v.js";import{iI,mfe}from"./chunk-hrvsnmf5.js";import{Ad}from"./chunk-2e71x4y4.js";import{vm,tQt}from"./chunk-knqsyt69.js";import{DS,UUe}from"./chunk-5srq0xcq.js";import{Pu}from"./chunk-kwpjat4s.js";import{I7t}from"./chunk-996thspe.js";import{Eqe}from"./chunk-wy7483wb.js";var c=["default","reset","none","gray","grey"];async function Pei(n,e,o){return n(await Idr(o,e),{display:"system"}),null}async function Idr(n,e){if(Xd())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?DS[Math.floor(Math.random()*DS.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!DS.includes(t)){let s=DS.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=K(),m=Pu(),i=r?"default":t,l=r?void 0:t;await I7t(d,i,m,e.storageV5),e.setAppState((s)=>Eqe(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return tQt(vm(),UUe({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=Ad()?.bridgeSessionId;if(!o)return;let t=iI();import("./chunk-v7tfa0y7.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,DS,{baseUrl:mfe(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{Pei,Idr};
