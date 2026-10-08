// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{co}from"./chunk-g79wjybr.js";import{f}from"./chunk-ras5x31x.js";import{Hn,hr,Lt,T}from"./chunk-cxjvwxsa.js";import{uZ}from"./chunk-60xq8hs0.js";import{Pbe,Zct,Jde}from"./chunk-e6r4smzd.js";import{Itn,Otn}from"./chunk-848z1p5h.js";import{e}from"./chunk-efrp9dmx.js";import{b9e,JNt,Zue}from"./chunk-srem9zsp.js";import{o,u,xo,R}from"./chunk-w8db6ytr.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=f(()=>xo("mode",[u({mode:R("one_step")}),u({mode:R("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function Lrn(){let i=T("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function x3e(i,r){let n=uZ(i);if(JNt())return e(Otn,{onDone:n});let t=await Zue({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Lt())return n(b9e),null;return e(Itn,{extraUsage:t.extraUsage,flag:Lrn(),wouldTakeAnswer:()=>!0,onDone:n})}let l=hr();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=Hn(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=co();return e(Jde,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,A,p)=>{let d=await Pbe(r,m,{setAppState:p,previousAccount:g,previousGatewayAuth:c});n(...Zct(r,m,d))}})}
export{Lrn,x3e};
