// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{os}from"./chunk-zhtwayh2.js";import{ht,An,Bn}from"./chunk-n495pc0t.js";import{z4}from"./chunk-wts8cfz5.js";import{t8,Uxe,m4}from"./chunk-8cg221x3.js";import{irt}from"./chunk-z9gghgtn.js";import{e}from"./chunk-smtaex5n.js";import{uye,cWe,dye}from"./chunk-2x6zgbap.js";var s=import.meta.require("./chunk-2xy6dnqz.js").ExtraUsageDialog;async function f_e(u,n){let t=z4(u);if(s&&cWe())return e(s,{onDone:t});let o=await dye({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(ht())return t(uye),null;return e(irt,{extraUsage:o.extraUsage,wouldTakeAnswer:()=>!0,onDone:t})}let i=Bn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=An(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=os();return e(m4,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await t8(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...Uxe(n,a,g))}})}
export{f_e};
