// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{K}from"./chunk-g79wjybr.js";import{yc}from"./chunk-e3ya4n4j.js";import{O0,Lae}from"./chunk-99wcvek9.js";import{ac}from"./chunk-m6w6w83e.js";import{Ff,EVt}from"./chunk-ztvkra0t.js";import{h_,xHe}from"./chunk-s80xexkt.js";import{Gu}from"./chunk-7qntjzak.js";import{t2t}from"./chunk-g263vvvn.js";import{V1e}from"./chunk-8kwdshbg.js";var c=["default","reset","none","gray","grey"];async function QOs(n,e,o){return n(await P5n(o,e),{display:"system"}),null}async function P5n(n,e){if(yc())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?h_[Math.floor(Math.random()*h_.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!h_.includes(t)){let s=h_.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=K(),m=Gu(),i=r?"default":t,l=r?void 0:t;await t2t(d,i,m,e.storageV5),e.setAppState((s)=>V1e(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return EVt(Ff(),xHe({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=ac()?.bridgeSessionId;if(!o)return;let t=O0();import("./chunk-y8e6rqja.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,h_,{baseUrl:Lae(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{QOs,P5n};
