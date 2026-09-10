// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{J}from"./chunk-cet8na02.js";import{ra}from"./chunk-pcpcxqfq.js";import{m0,AV}from"./chunk-3m483seh.js";import{ta}from"./chunk-nvszsetg.js";import{Au,hXe}from"./chunk-vxv2z7a4.js";import{bf,Hse}from"./chunk-jpmzyet1.js";import{El}from"./chunk-evxfwc2t.js";import{P7e}from"./chunk-tavwd3sq.js";import{Lue}from"./chunk-jmf4eqtb.js";var g=["default","reset","none","gray","grey"];async function Lwr(n,e,t){return n(await fFt(t,e),{display:"system"}),null}async function fFt(n,e){if(ra())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?bf[Math.floor(Math.random()*bf.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!bf.includes(o)){let s=bf.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=J(),d=El(),i=r?"default":o,l=r?void 0:o;await P7e(m,i,d,e.storageV5),e.setAppState((s)=>Lue(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return hXe(Au(),Hse({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=ta()?.bridgeSessionId;if(!t)return;let o=m0();import("./chunk-qjh3kc3z.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,bf,{baseUrl:AV(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{Lwr,fFt};
