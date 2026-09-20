// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Bo}from"./chunk-sgamszzq.js";import{Et,In,sr}from"./chunk-g4c6ggz4.js";import{b7}from"./chunk-g92k7atw.js";import{QZ,rUe,fY}from"./chunk-kfjee0mq.js";import{Rbt}from"./chunk-axt6yh1z.js";import{e}from"./chunk-437ab22y.js";import{ZRe,QJe,exe}from"./chunk-sr3qzzm3.js";var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-3rm4qg7r.js").ExtraUsageDialog;async function Yke(u,n){let t=b7(u);if(s&&QJe())return e(s,{onDone:t});let o=await exe({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(Et())return t(ZRe),null;return e(Rbt,{extraUsage:o.extraUsage,wouldTakeAnswer:()=>!0,onDone:t})}let i=sr();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=In(),l=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},g=Bo();return e(fY,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,m)=>{let c=await QZ(n,a,{setAppState:m,previousAccount:l,previousGatewayAuth:g});t(...rUe(n,a,c))}})}
export{Yke};
