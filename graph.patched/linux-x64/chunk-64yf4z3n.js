// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K}from"./chunk-aywwjcwq.js";import{ac}from"./chunk-k0nrzyt2.js";import{zD,tie}from"./chunk-4e8m6n41.js";import{Vl}from"./chunk-rqf2h4dh.js";import{If,uWt}from"./chunk-vanx1pds.js";import{qy,bOe}from"./chunk-aj0rppsq.js";import{vp}from"./chunk-83whr1kq.js";import{rjt}from"./chunk-9wqh5j7s.js";import{wUe}from"./chunk-zc2z9y2a.js";var c=["default","reset","none","gray","grey"];async function Vvs(n,e,o){return n(await OVn(o,e),{display:"system"}),null}async function OVn(n,e){if(ac())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?qy[Math.floor(Math.random()*qy.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!qy.includes(t)){let s=qy.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=K(),m=vp(),i=r?"default":t,l=r?void 0:t;await rjt(d,i,m,e.storageV5),e.setAppState((s)=>wUe(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return uWt(If(),bOe({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=Vl()?.bridgeSessionId;if(!o)return;let t=zD();import("./chunk-r640rj13.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,qy,{baseUrl:tie(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{Vvs,OVn};
