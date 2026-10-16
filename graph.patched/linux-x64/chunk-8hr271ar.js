// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{q}from"./chunk-eqmywwjn.js";import{Xd}from"./chunk-3axhkz18.js";import{nI,lfe}from"./chunk-xv9ctsnh.js";import{Ad}from"./chunk-9r24yzbv.js";import{Em,jQt}from"./chunk-602wadg8.js";import{Hb,IUe}from"./chunk-p466vgbf.js";import{Pu}from"./chunk-53pfvs0k.js";import{yJt}from"./chunk-38nf1dnm.js";import{cqe}from"./chunk-6kn29egz.js";var c=["default","reset","none","gray","grey"];async function zZs(n,e,o){return n(await ddr(o,e),{display:"system"}),null}async function ddr(n,e){if(Xd())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?Hb[Math.floor(Math.random()*Hb.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!Hb.includes(t)){let s=Hb.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=q(),m=Pu(),i=r?"default":t,l=r?void 0:t;await yJt(d,i,m,e.storageV5),e.setAppState((s)=>cqe(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return jQt(Em(),IUe({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=Ad()?.bridgeSessionId;if(!o)return;let t=nI();import("./chunk-6p4at6mf.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,Hb,{baseUrl:lfe(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{zZs,ddr};
