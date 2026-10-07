// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K}from"./chunk-8mvda08c.js";import{ac}from"./chunk-d4ww8xgn.js";import{qM,lie}from"./chunk-2m64qy92.js";import{ql}from"./chunk-04aem477.js";import{Of,MWt}from"./chunk-t5y3xk7a.js";import{qy,TOe}from"./chunk-wrwcn2zn.js";import{Ep}from"./chunk-805xjggr.js";import{yjt}from"./chunk-y0b3kvx1.js";import{A1e}from"./chunk-dggrv0p6.js";var c=["default","reset","none","gray","grey"];async function xvs(n,e,o){return n(await zVn(o,e),{display:"system"}),null}async function zVn(n,e){if(ac())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?qy[Math.floor(Math.random()*qy.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!qy.includes(t)){let s=qy.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=K(),m=Ep(),i=r?"default":t,l=r?void 0:t;await yjt(d,i,m,e.storageV5),e.setAppState((s)=>A1e(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return MWt(Of(),TOe({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=ql()?.bridgeSessionId;if(!o)return;let t=qM();import("./chunk-phyp7rxr.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,qy,{baseUrl:lie(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{xvs,zVn};
