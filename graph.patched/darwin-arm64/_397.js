// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{LP as A,MP as R}from"./_398.js";import{$Ya as j,_Xa as v}from"./_444.js";import{C7a as u,h8a as U,m7a as p}from"./_472.js";import{n8a as n,p8a as f,s8a as J}from"./_474.js";import{Bzb as E,uzb as g}from"./_546.js";import{HSb as w,rSb as S}from"./_589.js";import{YWb as C,ZWb as y,dXb as B}from"./_608.js";import{Hxc as D,wxc as c}from"./_674.js";import{Mid as d,krd as b}from"./_812.js";import{Exd as L,Hxd as O}from"./_839.js";async function K(s,e,t){return s(await H(t,e),{display:"system"}),null}async function H(s,e){if(c())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=s?.trim()??"",o=t===""?n[Math.floor(Math.random()*n.length)]:t.toLowerCase(),r=X.includes(o);if(!r&&!n.includes(o)){let a=n.join(", ");return`Invalid color "${o}". Available colors: ${a}, default`}let T=d(),h=g(),l=r?"default":o,m=r?void 0:o;await v(T,l,h,e.storageV5),e.setAppState((a)=>A(a,{color:m}));let i=e.getAppState(),I=i.agent?i.agentDefinitions.activeAgents.find((a)=>a.agentType===i.agent):void 0;return u(p(),f({userOverride:m,agentDefinitionColor:I?.color}),e.storageV5),N(l,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function N(s,e){let t=S()?.bridgeSessionId;if(!t)return;let o=C();import("./chunk-f9z8d45t.js").then(({updateBridgeSessionColorTag:r})=>r(t,s,n,{baseUrl:y(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}var X;var P=L(()=>{b();B();w();U();J();E();j();R();D();X=["default","reset","none","gray","grey"]});
export{K as HP,H as IP,P as JP};
