// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{ho}from"./chunk-s8xs8s76.js";import{xn,Xn,At}from"./chunk-twxt3h9y.js";import{vne}from"./chunk-8p48m7y3.js";import{vle,d9e,ite}from"./chunk-re3ywx87.js";import{bFt}from"./chunk-dkd7nfng.js";import{e}from"./chunk-srmsc891.js";import{z1e,jgt,V1e}from"./chunk-jsxvpn6b.js";var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-j465g3b8.js").ExtraUsageDialog;async function i$e(u,n){let t=vne(u);if(s&&jgt())return e(s,{onDone:t});let o=await V1e({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(At())return t(z1e),null;return e(bFt,{extraUsage:o.extraUsage,wouldTakeAnswer:()=>!0,onDone:t})}let i=Xn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=xn(),l=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},g=ho();return e(ite,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,m)=>{let c=await vle(n,a,{setAppState:m,previousAccount:l,previousGatewayAuth:g});t(...d9e(n,a,c))}})}
export{i$e};
