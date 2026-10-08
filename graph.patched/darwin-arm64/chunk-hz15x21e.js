// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{co}from"./chunk-vd0a9d2s.js";import{f}from"./chunk-y575z4xw.js";import{Mn,dr,Lt,C}from"./chunk-gcyvvtkw.js";import{mZ}from"./chunk-5hg2jcgy.js";import{NSe,adt,rue}from"./chunk-scyp59ya.js";import{qtn,Ktn}from"./chunk-me4xzjyw.js";import{e}from"./chunk-efrp9dmx.js";import{TYe,uFt,spe}from"./chunk-dcsms7ck.js";import{o,u,xo,R}from"./chunk-hcyr0654.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=f(()=>xo("mode",[u({mode:R("one_step")}),u({mode:R("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function Qrn(){let i=C("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function D5e(i,r){let n=mZ(i);if(uFt())return e(Ktn,{onDone:n});let t=await spe({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Lt())return n(TYe),null;return e(qtn,{extraUsage:t.extraUsage,flag:Qrn(),wouldTakeAnswer:()=>!0,onDone:n})}let l=dr();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=Mn(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=co();return e(rue,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,A,p)=>{let d=await NSe(r,m,{setAppState:p,previousAccount:g,previousGatewayAuth:c});n(...adt(r,m,d))}})}
export{Qrn,D5e};
