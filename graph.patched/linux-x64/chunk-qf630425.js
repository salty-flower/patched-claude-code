// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Gr}from"./chunk-dxktn51d.js";import{p}from"./chunk-949csv87.js";import{mn,hr,$t,k}from"./chunk-7p6jp6kj.js";import{ase}from"./chunk-9747w1pz.js";import{yCe,kEt,y_e}from"./chunk-46xb76wb.js";import{dSn,cSn}from"./chunk-g8r6rccx.js";import{e}from"./chunk-8d2nhg02.js";import{kst,a6t,gbe}from"./chunk-d7054aq8.js";import{o,u,jr,A}from"./chunk-mqaa2rrp.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=p(()=>jr("mode",[u({mode:A("one_step")}),u({mode:A("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function Avn(){let i=k("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function Bnt(i,r){let n=ase(i);if(a6t())return e(cSn,{onDone:n});let t=await gbe({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if($t())return n(kst),null;return e(dSn,{extraUsage:t.extraUsage,flag:Avn(),wouldTakeAnswer:()=>!0,onDone:n})}let l=hr();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=mn(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=Gr();return e(y_e,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,y,d)=>{let f=await yCe(r,m,{setAppState:d,previousAccount:g,previousGatewayAuth:c});n(...kEt(r,m,f))}})}
export{Avn,Bnt};
