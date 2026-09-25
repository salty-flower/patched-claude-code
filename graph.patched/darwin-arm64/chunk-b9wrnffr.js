// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{K}from"./chunk-s8xs8s76.js";import{$a}from"./chunk-8z6ck5c9.js";import{sN,lQ}from"./chunk-vbj21270.js";import{Pl}from"./chunk-r626j2gd.js";import{Zu,mCt}from"./chunk-kdpydqc7.js";import{Xg,zwe}from"./chunk-qg652t2c.js";import{fd}from"./chunk-e3q3es8j.js";import{kwt}from"./chunk-h3bc7dkc.js";import{TRe}from"./chunk-wzmfse89.js";var c=["default","reset","none","gray","grey"];async function RLo(n,e,o){return n(await t_n(o,e),{display:"system"}),null}async function t_n(n,e){if($a())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?Xg[Math.floor(Math.random()*Xg.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!Xg.includes(t)){let s=Xg.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=K(),m=fd(),i=r?"default":t,l=r?void 0:t;await kwt(d,i,m,e.storageV5),e.setAppState((s)=>TRe(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return mCt(Zu(),zwe({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=Pl()?.bridgeSessionId;if(!o)return;let t=sN();import("./chunk-4jsgek37.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,Xg,{baseUrl:lQ(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{RLo,t_n};
