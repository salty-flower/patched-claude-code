// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ei}from"./chunk-2vv5hpw3.js";import{_t,In,Tn}from"./chunk-ns0ekkj0.js";import{wW}from"./chunk-cypew82r.js";import{y6,IAe,qG}from"./chunk-cqxxs6j3.js";import{$1e}from"./chunk-3ckwmwcy.js";import{ffe,QFe,mfe}from"./chunk-rvgwmq9c.js";import{e}from"./chunk-azctepqx.js";var s=import.meta.require("./chunk-72fny3zy.js").ExtraUsageDialog;async function npe(u,n){let t=wW(u);if(s&&QFe())return e(s,{onDone:t});let o=await mfe({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(_t())return t(ffe),null;return e($1e,{extraUsage:o.extraUsage,accepts:()=>!0,onDone:t})}let i=Tn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=In(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=ei();return e(qG,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await y6(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...IAe(n,a,g))}})}
export{npe};
