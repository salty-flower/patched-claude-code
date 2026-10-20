// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{K}from"./chunk-kpqr86hf.js";import{oc}from"./chunk-kp0m30dm.js";import{RR,Nme}from"./chunk-d1jpce0q.js";import{Pd}from"./chunk-q4prt943.js";import{Km,drn}from"./chunk-79rentg1.js";import{ob,ije}from"./chunk-2fjhf8xz.js";import{Vu}from"./chunk-d6m9bdw1.js";import{ben}from"./chunk-na9nw575.js";import{u3e}from"./chunk-gp533bkx.js";var c=["default","reset","none","gray","grey"];async function hui(n,e,o){return n(await xmr(o,e),{display:"system"}),null}async function xmr(n,e){if(oc())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?ob[Math.floor(Math.random()*ob.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!ob.includes(t)){let s=ob.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=K(),m=Vu(),i=r?"default":t,l=r?void 0:t;await ben(d,i,m,e.storageV5),e.setAppState((s)=>u3e(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return drn(Km(),ije({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=Pd()?.bridgeSessionId;if(!o)return;let t=RR();import("./chunk-97qj2424.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,ob,{baseUrl:Nme(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{hui,xmr};
