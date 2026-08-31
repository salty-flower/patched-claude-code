// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{K}from"./chunk-30zk17wm.js";import{na}from"./chunk-1461jpph.js";import{dR,rV}from"./chunk-bjw8ccxa.js";import{Da}from"./chunk-fqzjy4hh.js";import{tp,wne}from"./chunk-267gdh09.js";import{pu,L4e}from"./chunk-dmdmtq6p.js";import{Rl}from"./chunk-eeg0krn4.js";import{zKe}from"./chunk-h6btyxas.js";import{kse}from"./chunk-zc6m27va.js";var g=["default","reset","none","gray","grey"];async function Ywr(n,e,t){return n(await JRt(t,e),{display:"system"}),null}async function JRt(n,e){if(na())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?tp[Math.floor(Math.random()*tp.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!tp.includes(o)){let s=tp.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=K(),d=Rl(),i=r?"default":o,l=r?void 0:o;await zKe(m,i,d,e.storageV5),e.setAppState((s)=>kse(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return L4e(pu(),wne({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=Da()?.bridgeSessionId;if(!t)return;let o=dR();import("./chunk-c68dxmyv.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,tp,{baseUrl:rV(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{Ywr,JRt};
