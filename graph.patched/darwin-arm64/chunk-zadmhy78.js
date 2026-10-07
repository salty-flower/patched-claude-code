// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{mo}from"./chunk-8mvda08c.js";import{f}from"./chunk-2pfss7d0.js";import{Ln,cr,Mt,k}from"./chunk-s46qgfx7.js";import{jJ}from"./chunk-1wbrxnj0.js";import{Lye,Vit,bce}from"./chunk-t7b67gn6.js";import{NJt,FJt}from"./chunk-f3rmssv3.js";import{e}from"./chunk-mq8eg5v4.js";import{I5e,EMt,Sde}from"./chunk-fym1nnt9.js";import{o,u,Ao,R}from"./chunk-seb9y51t.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=f(()=>Ao("mode",[u({mode:R("one_step")}),u({mode:R("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function DZt(){let i=k("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function BKe(i,r){let n=jJ(i);if(EMt())return e(FJt,{onDone:n});let t=await Sde({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Mt())return n(I5e),null;return e(NJt,{extraUsage:t.extraUsage,flag:DZt(),wouldTakeAnswer:()=>!0,onDone:n})}let l=cr();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=Ln(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=mo();return e(bce,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,A,p)=>{let d=await Lye(r,m,{setAppState:p,previousAccount:g,previousGatewayAuth:c});n(...Vit(r,m,d))}})}
export{DZt,BKe};
