// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{q}from"./chunk-2vv5hpw3.js";import{ha}from"./chunk-aw9sr560.js";import{nI,Rz}from"./chunk-9d33e8k8.js";import{da}from"./chunk-14at7kq2.js";import{Fd,iee}from"./chunk-jxyaf9gv.js";import{Bc,AWe}from"./chunk-zve9wwgw.js";import{pa}from"./chunk-zmyynaq1.js";import{Qxe}from"./chunk-hrvkymct.js";import{Soe}from"./chunk-0v9n1fdj.js";var g=["default","reset","none","gray","grey"];async function Yhr(n,e,t){return n(await BHt(t,e),{display:"system"}),null}async function BHt(n,e){if(ha())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?Fd[Math.floor(Math.random()*Fd.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!Fd.includes(o)){let s=Fd.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=q(),d=pa(),i=r?"default":o,l=r?void 0:o;await Qxe(m,i,d,e.storageV5),e.setAppState((s)=>Soe(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return AWe(Bc(),iee({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=da()?.bridgeSessionId;if(!t)return;let o=nI();import("./chunk-v6t8zyya.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,Fd,{baseUrl:Rz(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{Yhr,BHt};
