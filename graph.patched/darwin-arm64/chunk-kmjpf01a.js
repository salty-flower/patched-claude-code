// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{K}from"./chunk-zhtwayh2.js";import{Ji}from"./chunk-sgt1b7h0.js";import{TH,L3}from"./chunk-ybr2dbk4.js";import{Ki}from"./chunk-583b4rcf.js";import{uu,ZKe}from"./chunk-aybj1x5t.js";import{Xp,mre}from"./chunk-yt8z1z01.js";import{fl}from"./chunk-e595chgr.js";import{SKe}from"./chunk-1692k4g5.js";import{rle}from"./chunk-mqz5c1bt.js";var g=["default","reset","none","gray","grey"];async function zpr(n,e,t){return n(await GPt(t,e),{display:"system"}),null}async function GPt(n,e){if(Ji())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?Xp[Math.floor(Math.random()*Xp.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!Xp.includes(o)){let s=Xp.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=K(),d=fl(),i=r?"default":o,l=r?void 0:o;await SKe(m,i,d,e.storageV5),e.setAppState((s)=>rle(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return ZKe(uu(),mre({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=Ki()?.bridgeSessionId;if(!t)return;let o=TH();import("./chunk-qx7r9hrm.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,Xp,{baseUrl:L3(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{zpr,GPt};
