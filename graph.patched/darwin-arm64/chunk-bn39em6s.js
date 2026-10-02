// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Qr}from"./chunk-a7cah040.js";import{p}from"./chunk-dsp1md5e.js";import{Cn,rr,Tt,x}from"./chunk-er6f56rj.js";import{q8}from"./chunk-fzts3nq7.js";import{mpe,NJe,Noe}from"./chunk-gegm5cg8.js";import{X6t,J6t}from"./chunk-n3b1z5m4.js";import{e}from"./chunk-ne6sbmea.js";import{o6e,DEt,yse}from"./chunk-9t8ceq9c.js";import{o,d,Fo,R}from"./chunk-g4gq2k0z.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=p(()=>Fo("mode",[d({mode:R("one_step")}),d({mode:R("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function nVt(){let i=x("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function aje(i,r){let n=q8(i);if(DEt())return e(J6t,{onDone:n});let t=await yse({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Tt())return n(o6e),null;return e(X6t,{extraUsage:t.extraUsage,flag:nVt(),wouldTakeAnswer:()=>!0,onDone:n})}let l=rr();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=Cn(),m=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},g=Qr();return e(Noe,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(u,A,c)=>{let f=await mpe(r,u,{setAppState:c,previousAccount:m,previousGatewayAuth:g});n(...NJe(r,u,f))}})}
export{nVt,aje};
