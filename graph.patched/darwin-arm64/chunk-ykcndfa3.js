// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{_i}from"./chunk-yhfssb7x.js";import{bt,Pn,Kn}from"./chunk-vtwn1md5.js";import{zz}from"./chunk-rrbmvjw6.js";import{l7,$0e,dz}from"./chunk-kmwp59r7.js";import{fit}from"./chunk-czh70q2k.js";import{e}from"./chunk-6ccz96s4.js";import{ISe,w3e,PSe}from"./chunk-erp669cp.js";var s=import.meta.require("./chunk-k439ywk7.js").ExtraUsageDialog;async function Hye(u,n){let t=zz(u);if(s&&w3e())return e(s,{onDone:t});let o=await PSe({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(bt())return t(ISe),null;return e(fit,{extraUsage:o.extraUsage,wouldTakeAnswer:()=>!0,onDone:t})}let i=Kn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=Pn(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=_i();return e(dz,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await l7(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...$0e(n,a,g))}})}
export{Hye};
