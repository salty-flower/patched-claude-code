// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{mi}from"./chunk-38213y7h.js";import{wt,Dn,Fn}from"./chunk-bsdtxcdc.js";import{xq}from"./chunk-t0drmbm8.js";import{vK,CRe,sq}from"./chunk-qfs22xxp.js";import{BUe}from"./chunk-42mkv9xr.js";import{Bge,g2e,jge}from"./chunk-sm30a2q1.js";import{e}from"./chunk-wk3xnwvn.js";var s=import.meta.require("./chunk-xamq8yb1.js").ExtraUsageDialog;async function Xme(u,n){let t=xq(u);if(s&&g2e())return e(s,{onDone:t});let o=await jge({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(wt())return t(Bge),null;return e(BUe,{extraUsage:o.extraUsage,accepts:()=>!0,onDone:t})}let i=Fn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=Dn(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=mi();return e(sq,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await vK(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...CRe(n,a,g))}})}
export{Xme};
