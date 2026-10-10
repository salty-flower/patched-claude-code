// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{eo}from"./chunk-4bw62nzm.js";import{p}from"./chunk-fdwn5gdv.js";import{Hn,Sr,Nt,k}from"./chunk-bk5ct2gw.js";import{mte}from"./chunk-9sq8whr4.js";import{Jwe,Kft,vfe}from"./chunk-9k4fc4ce.js";import{man,gan}from"./chunk-24k7d6mw.js";import{e}from"./chunk-d5st5fww.js";import{zJe,sjt,Ame}from"./chunk-t50k4547.js";import{o,u,Wr,C}from"./chunk-9cmjz7j9.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=p(()=>Wr("mode",[u({mode:C("one_step")}),u({mode:C("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function gcn(){let i=k("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function QYe(i,r){let n=mte(i);if(sjt())return e(gan,{onDone:n});let t=await Ame({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Nt())return n(zJe),null;return e(man,{extraUsage:t.extraUsage,flag:gcn(),wouldTakeAnswer:()=>!0,onDone:n})}let l=Sr();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=Hn(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=eo();return e(vfe,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,A,d)=>{let f=await Jwe(r,m,{setAppState:d,previousAccount:g,previousGatewayAuth:c});n(...Kft(r,m,f))}})}
export{gcn,QYe};
