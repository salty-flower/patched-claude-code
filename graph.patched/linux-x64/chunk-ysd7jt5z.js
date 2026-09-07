// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{os}from"./chunk-bj7g1p32.js";import{ht,An,Yn}from"./chunk-3e93vkg3.js";import{M4}from"./chunk-q2ys7ygz.js";import{K3,xIe,i4}from"./chunk-m9yyevvg.js";import{Vnt}from"./chunk-s2bq2fga.js";import{e}from"./chunk-smtaex5n.js";import{s_e,eWe,i_e}from"./chunk-q536m236.js";var s=import.meta.require("./chunk-4vgqqcnv.js").ExtraUsageDialog;async function lye(u,n){let t=M4(u);if(s&&eWe())return e(s,{onDone:t});let o=await i_e({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(ht())return t(s_e),null;return e(Vnt,{extraUsage:o.extraUsage,wouldTakeAnswer:()=>!0,onDone:t})}let i=Yn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=An(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=os();return e(i4,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await K3(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...xIe(n,a,g))}})}
export{lye};
