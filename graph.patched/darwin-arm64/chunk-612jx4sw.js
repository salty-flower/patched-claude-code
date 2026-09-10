// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{xo}from"./chunk-sgyvc67j.js";import{_t,Pn,jn}from"./chunk-e02s7cks.js";import{aK}from"./chunk-jzyf086v.js";import{h7,lOe,O9}from"./chunk-pz6k4p2q.js";import{dct}from"./chunk-8rmb0md8.js";import{e}from"./chunk-qs39f0kj.js";import{Wwe,L4e,zwe}from"./chunk-j48t47h6.js";var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-9d7xqzy3.js").ExtraUsageDialog;async function zbe(u,n){let t=aK(u);if(s&&L4e())return e(s,{onDone:t});let o=await zwe({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(_t())return t(Wwe),null;return e(dct,{extraUsage:o.extraUsage,wouldTakeAnswer:()=>!0,onDone:t})}let i=jn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=Pn(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=xo();return e(O9,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await h7(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...lOe(n,a,g))}})}
export{zbe};
