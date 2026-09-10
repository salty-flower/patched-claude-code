// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{vo}from"./chunk-cet8na02.js";import{_t,Hn,Vn}from"./chunk-vryy7b5x.js";import{W9}from"./chunk-6ncymkhw.js";import{JY,FIe,d9}from"./chunk-1asjhnmr.js";import{Iat}from"./chunk-javwrn6b.js";import{e}from"./chunk-zhg3ync1.js";import{qbe,uVe,Kbe}from"./chunk-m15b6t9e.js";var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-9qkpen9h.js").ExtraUsageDialog;async function YSe(u,n){let t=W9(u);if(s&&uVe())return e(s,{onDone:t});let o=await Kbe({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(_t())return t(qbe),null;return e(Iat,{extraUsage:o.extraUsage,wouldTakeAnswer:()=>!0,onDone:t})}let i=Vn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=Hn(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=vo();return e(d9,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await JY(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...FIe(n,a,g))}})}
export{YSe};
