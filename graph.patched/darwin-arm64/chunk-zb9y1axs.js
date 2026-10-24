// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Wr}from"./chunk-ersar6wn.js";import{f}from"./chunk-nyvhtfb3.js";import{gn,or,Ut,k}from"./chunk-27xjmczp.js";import{Nae}from"./chunk-v6a4kxre.js";import{EPe,cxt,bwe}from"./chunk-7v96f43f.js";import{NAn,FAn}from"./chunk-zq77a89q.js";import{e}from"./chunk-f790ajz4.js";import{Rct,Z7t,lte}from"./chunk-5kevj79k.js";import{o,u,Gr,T}from"./chunk-k395ayhm.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=f(()=>Gr("mode",[u({mode:T("one_step")}),u({mode:T("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function oPn(){let i=k("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function Wat(i,r){let n=Nae(i);if(Z7t())return e(FAn,{onDone:n});let t=await lte({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Ut())return n(Rct),null;return e(NAn,{extraUsage:t.extraUsage,flag:oPn(),wouldTakeAnswer:()=>!0,onDone:n})}let l=or();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=gn(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=Wr();return e(bwe,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,A,p)=>{let d=await EPe(r,m,{setAppState:p,previousAccount:g,previousGatewayAuth:c});n(...cxt(r,m,d))}})}
export{oPn,Wat};
