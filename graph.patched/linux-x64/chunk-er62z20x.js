// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Bo}from"./chunk-txfrkyzp.js";import{vt,Hn,ur}from"./chunk-30p0nwys.js";import{AX}from"./chunk-5smyeq0d.js";import{BZ,$1e,iY}from"./chunk-cghqhwh1.js";import{Vbt}from"./chunk-s6zgd5p4.js";import{e}from"./chunk-437ab22y.js";import{XRe,Y7e,JRe}from"./chunk-f08rjz09.js";var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-wk97qs8q.js").ExtraUsageDialog;async function DCe(u,n){let t=AX(u);if(s&&Y7e())return e(s,{onDone:t});let o=await JRe({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(vt())return t(XRe),null;return e(Vbt,{extraUsage:o.extraUsage,wouldTakeAnswer:()=>!0,onDone:t})}let i=ur();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=Hn(),l=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},g=Bo();return e(iY,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,m)=>{let c=await BZ(n,a,{setAppState:m,previousAccount:l,previousGatewayAuth:g});t(...$1e(n,a,c))}})}
export{DCe};
