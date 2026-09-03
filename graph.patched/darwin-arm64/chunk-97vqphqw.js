// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{fi}from"./chunk-hdbxv3pp.js";import{bt,On,Xn}from"./chunk-h6md7820.js";import{oz}from"./chunk-4j30jhq0.js";import{R8,_He,P4}from"./chunk-y51sya27.js";import{Frt}from"./chunk-8234by6n.js";import{Tye,AWe,wye}from"./chunk-yj3n403b.js";import{e}from"./chunk-v5r13aq1.js";var s=import.meta.require("./chunk-ws7zxmwx.js").ExtraUsageDialog;async function R_e(u,n){let t=oz(u);if(s&&AWe())return e(s,{onDone:t});let o=await wye({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(bt())return t(Tye),null;return e(Frt,{extraUsage:o.extraUsage,wouldTakeAnswer:()=>!0,onDone:t})}let i=Xn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=On(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=fi();return e(P4,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await R8(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(..._He(n,a,g))}})}
export{R_e};
