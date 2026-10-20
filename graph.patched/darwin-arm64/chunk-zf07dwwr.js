// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Gr}from"./chunk-kpqr86hf.js";import{f}from"./chunk-ynakaye4.js";import{mn,gr,Ft,k}from"./chunk-bvn0epzr.js";import{mse}from"./chunk-th1ha6kr.js";import{kAe,Ovt,v_e}from"./chunk-55g4fa03.js";import{Mbn,Hbn}from"./chunk-fke7e36g.js";import{e}from"./chunk-q4w894bt.js";import{Rst,h4t,bSe}from"./chunk-r0v69asx.js";import{o,u,jr,T}from"./chunk-xv841za9.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=f(()=>jr("mode",[u({mode:T("one_step")}),u({mode:T("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function jEn(){let i=k("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function Knt(i,r){let n=mse(i);if(h4t())return e(Hbn,{onDone:n});let t=await bSe({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Ft())return n(Rst),null;return e(Mbn,{extraUsage:t.extraUsage,flag:jEn(),wouldTakeAnswer:()=>!0,onDone:n})}let l=gr();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=mn(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=Gr();return e(v_e,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,A,p)=>{let d=await kAe(r,m,{setAppState:p,previousAccount:g,previousGatewayAuth:c});n(...Ovt(r,m,d))}})}
export{jEn,Knt};
