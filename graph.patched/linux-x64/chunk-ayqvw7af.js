// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{xo}from"./chunk-6n7yk222.js";import{_t,Pn,Vn}from"./chunk-ce4ppmnp.js";import{Q6}from"./chunk-nj585ctd.js";import{lX,Z0e,k6}from"./chunk-w3tvx1n6.js";import{Jlt}from"./chunk-a6xts8ka.js";import{e}from"./chunk-qs39f0kj.js";import{Lwe,b4e,$we}from"./chunk-10effs63.js";var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-pqqhzf9y.js").ExtraUsageDialog;async function NSe(u,n){let t=Q6(u);if(s&&b4e())return e(s,{onDone:t});let o=await $we({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(_t())return t(Lwe),null;return e(Jlt,{extraUsage:o.extraUsage,wouldTakeAnswer:()=>!0,onDone:t})}let i=Vn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=Pn(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=xo();return e(k6,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await lX(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...Z0e(n,a,g))}})}
export{NSe};
