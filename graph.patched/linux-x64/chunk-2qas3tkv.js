// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Y}from"./chunk-bj7g1p32.js";import{Ji}from"./chunk-f39k86ma.js";import{dR,RV}from"./chunk-a0bh899x.js";import{Ki}from"./chunk-ybpnzw5r.js";import{lu,F8e}from"./chunk-t5k9jbxx.js";import{Xf,ire}from"./chunk-grcazzk3.js";import{pl}from"./chunk-842t038w.js";import{s8e}from"./chunk-y3swhsrk.js";import{rle}from"./chunk-jkg6j54d.js";var g=["default","reset","none","gray","grey"];async function cfr(n,e,t){return n(await UPt(t,e),{display:"system"}),null}async function UPt(n,e){if(Ji())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?Xf[Math.floor(Math.random()*Xf.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!Xf.includes(o)){let s=Xf.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=Y(),d=pl(),i=r?"default":o,l=r?void 0:o;await s8e(m,i,d,e.storageV5),e.setAppState((s)=>rle(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return F8e(lu(),ire({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=Ki()?.bridgeSessionId;if(!t)return;let o=dR();import("./chunk-vt7qjx7e.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,Xf,{baseUrl:RV(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{cfr,UPt};
