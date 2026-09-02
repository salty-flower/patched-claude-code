// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{K}from"./chunk-38213y7h.js";import{na}from"./chunk-mk4am7jk.js";import{gH,s3}from"./chunk-mcegm5jk.js";import{Oa}from"./chunk-00p5gaye.js";import{ef,Rne}from"./chunk-x2nkzh3v.js";import{fu,xGe}from"./chunk-wwwdzdhk.js";import{Hl}from"./chunk-1x1tv6fk.js";import{Gqe}from"./chunk-fy12d89p.js";import{Pse}from"./chunk-x2taxq1b.js";var g=["default","reset","none","gray","grey"];async function oEr(n,e,t){return n(await ixt(t,e),{display:"system"}),null}async function ixt(n,e){if(na())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?ef[Math.floor(Math.random()*ef.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!ef.includes(o)){let s=ef.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=K(),d=Hl(),i=r?"default":o,l=r?void 0:o;await Gqe(m,i,d,e.storageV5),e.setAppState((s)=>Pse(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return xGe(fu(),Rne({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=Oa()?.bridgeSessionId;if(!t)return;let o=gH();import("./chunk-svmxgdbm.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,ef,{baseUrl:s3(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{oEr,ixt};
