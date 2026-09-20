// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{J}from"./chunk-txfrkyzp.js";import{aa}from"./chunk-090t3djy.js";import{X0,v5}from"./chunk-jqgvvac8.js";import{oa}from"./chunk-hcjd6z4h.js";import{Td,ilt}from"./chunk-adxfsceb.js";import{Cm,Mde}from"./chunk-ck3gk161.js";import{yc}from"./chunk-1t2j04wn.js";import{eot}from"./chunk-v4zgc4qd.js";import{Iye}from"./chunk-7sdzs34k.js";var c=["default","reset","none","gray","grey"];async function v4r(n,e,o){return n(await A6t(o,e),{display:"system"}),null}async function A6t(n,e){if(aa())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?Cm[Math.floor(Math.random()*Cm.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!Cm.includes(t)){let s=Cm.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=J(),m=yc(),i=r?"default":t,l=r?void 0:t;await eot(d,i,m,e.storageV5),e.setAppState((s)=>Iye(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return ilt(Td(),Mde({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=oa()?.bridgeSessionId;if(!o)return;let t=X0();import("./chunk-sw37rjme.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,Cm,{baseUrl:v5(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{v4r,A6t};
