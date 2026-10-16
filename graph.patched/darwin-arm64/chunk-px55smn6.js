// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ur}from"./chunk-xzypj06m.js";import{f}from"./chunk-5r64b6x9.js";import{vn,vr,Ut,k}from"./chunk-1901fdh6.js";import{loe}from"./chunk-eq3jpjn9.js";import{ZCe,Bbt,cye}from"./chunk-7zkhxwn6.js";import{ahn,lhn}from"./chunk-hm134dte.js";import{e}from"./chunk-esdbx0br.js";import{Hrt,Iqt,g_e}from"./chunk-hctzaj3e.js";import{o,u,Xr,A}from"./chunk-82bgdty3.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=f(()=>Xr("mode",[u({mode:A("one_step")}),u({mode:A("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function w_n(){let i=k("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function Het(i,r){let n=loe(i);if(Iqt())return e(lhn,{onDone:n});let t=await g_e({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Ut())return n(Hrt),null;return e(ahn,{extraUsage:t.extraUsage,flag:w_n(),wouldTakeAnswer:()=>!0,onDone:n})}let l=vr();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=vn(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=Ur();return e(cye,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,y,p)=>{let d=await ZCe(r,m,{setAppState:p,previousAccount:g,previousGatewayAuth:c});n(...Bbt(r,m,d))}})}
export{w_n,Het};
