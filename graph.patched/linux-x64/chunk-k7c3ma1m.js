// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{mi}from"./chunk-30zk17wm.js";import{Ht,Pn,Nn}from"./chunk-1e5y3pjf.js";import{CK}from"./chunk-n8nmdgpp.js";import{E3,ETe,rK}from"./chunk-3wpcw11t.js";import{O1e}from"./chunk-wrpzpw31.js";import{Nge,Eje,Fge}from"./chunk-sgfn1pmp.js";import{e}from"./chunk-ys8dsnqt.js";var s=import.meta.require("./chunk-f8w168md.js").ExtraUsageDialog;async function Wme(u,n){let t=CK(u);if(s&&Eje())return e(s,{onDone:t});let o=await Fge({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(Ht())return t(Nge),null;return e(O1e,{extraUsage:o.extraUsage,accepts:()=>!0,onDone:t})}let i=Nn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=Pn(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=mi();return e(rK,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await E3(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...ETe(n,a,g))}})}
export{Wme};
