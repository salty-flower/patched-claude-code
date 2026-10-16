// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ur}from"./chunk-eqmywwjn.js";import{p}from"./chunk-he0s6sfd.js";import{En,Ir,Ut,k}from"./chunk-k16gymf7.js";import{toe}from"./chunk-wg0anxwe.js";import{VTe,MSt,oye}from"./chunk-sbrzcpje.js";import{Jgn,Qgn}from"./chunk-wvvrhgdn.js";import{e}from"./chunk-esdbx0br.js";import{wrt,cqt,d_e}from"./chunk-r6y2patc.js";import{o,u,Xr,A}from"./chunk-zypddzr3.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=p(()=>Xr("mode",[u({mode:A("one_step")}),u({mode:A("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function s_n(){let i=k("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function Cet(i,r){let n=toe(i);if(cqt())return e(Qgn,{onDone:n});let t=await d_e({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Ut())return n(wrt),null;return e(Jgn,{extraUsage:t.extraUsage,flag:s_n(),wouldTakeAnswer:()=>!0,onDone:n})}let l=Ir();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=En(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=Ur();return e(oye,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,y,d)=>{let f=await VTe(r,m,{setAppState:d,previousAccount:g,previousGatewayAuth:c});n(...MSt(r,m,f))}})}
export{s_n,Cet};
