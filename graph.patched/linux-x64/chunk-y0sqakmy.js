// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{q}from"./chunk-dxktn51d.js";import{oc}from"./chunk-wqjt4nrc.js";import{TR,Ime}from"./chunk-sz0s8w27.js";import{Pd}from"./chunk-2xjha5w6.js";import{Vm,Xnn}from"./chunk-cskmvz0m.js";import{rS,J1e}from"./chunk-690gd89k.js";import{Ku}from"./chunk-s07r7g28.js";import{ien}from"./chunk-rncrmfyt.js";import{oYe}from"./chunk-233gvy0v.js";var c=["default","reset","none","gray","grey"];async function Oci(n,e,o){return n(await umr(o,e),{display:"system"}),null}async function umr(n,e){if(oc())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?rS[Math.floor(Math.random()*rS.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!rS.includes(t)){let s=rS.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=q(),m=Ku(),i=r?"default":t,l=r?void 0:t;await ien(d,i,m,e.storageV5),e.setAppState((s)=>oYe(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return Xnn(Vm(),J1e({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=Pd()?.bridgeSessionId;if(!o)return;let t=TR();import("./chunk-3zk4cn0n.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,rS,{baseUrl:Ime(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{Oci,umr};
