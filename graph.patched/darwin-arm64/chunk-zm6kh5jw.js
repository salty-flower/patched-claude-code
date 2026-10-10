// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K}from"./chunk-4bw62nzm.js";import{Oc}from"./chunk-rgrg9230.js";import{KL,hde}from"./chunk-dp4ppbzq.js";import{bc}from"./chunk-qm7kbp9q.js";import{nm,u4t}from"./chunk-m2gn903q.js";import{B_,bLe}from"./chunk-1z1j45h7.js";import{zu}from"./chunk-9em13yqt.js";import{XKt}from"./chunk-sfn1dbxq.js";import{KWe}from"./chunk-3wyskt03.js";var c=["default","reset","none","gray","grey"];async function b2s(n,e,o){return n(await BQn(o,e),{display:"system"}),null}async function BQn(n,e){if(Oc())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?B_[Math.floor(Math.random()*B_.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!B_.includes(t)){let s=B_.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=K(),m=zu(),i=r?"default":t,l=r?void 0:t;await XKt(d,i,m,e.storageV5),e.setAppState((s)=>KWe(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return u4t(nm(),bLe({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=bc()?.bridgeSessionId;if(!o)return;let t=KL();import("./chunk-e0a5f2nx.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,B_,{baseUrl:hde(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{b2s,BQn};
