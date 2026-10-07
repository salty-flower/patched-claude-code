// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{mo}from"./chunk-aywwjcwq.js";import{f}from"./chunk-wp37h1qm.js";import{Ln,mr,Ht,T}from"./chunk-m0sj7y8g.js";import{UQ}from"./chunk-1h5pqaph.js";import{Pye,$it,mce}from"./chunk-p28s4km7.js";import{kQt,TQt}from"./chunk-z4076x1x.js";import{e}from"./chunk-mq8eg5v4.js";import{EYe,lDt,fde}from"./chunk-cyx7zm8s.js";import{o,u,Ao,R}from"./chunk-6kgnb6mn.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=f(()=>Ao("mode",[u({mode:R("one_step")}),u({mode:R("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function bZt(){let i=T("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function D4e(i,r){let n=UQ(i);if(lDt())return e(TQt,{onDone:n});let t=await fde({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Ht())return n(EYe),null;return e(kQt,{extraUsage:t.extraUsage,flag:bZt(),wouldTakeAnswer:()=>!0,onDone:n})}let l=mr();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=Ln(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=mo();return e(mce,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,A,p)=>{let d=await Pye(r,m,{setAppState:p,previousAccount:g,previousGatewayAuth:c});n(...$it(r,m,d))}})}
export{bZt,D4e};
