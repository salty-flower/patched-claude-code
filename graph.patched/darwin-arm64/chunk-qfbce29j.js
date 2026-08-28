// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ei}from"./chunk-g4zaymy2.js";import{bt,In,An}from"./chunk-ghnc2x4f.js";import{C5}from"./chunk-9yh64pnd.js";import{wG,HEe,Jj}from"./chunk-am15h3bq.js";import{zNe}from"./chunk-e34g17ee.js";import{yfe,e2e,_fe}from"./chunk-jpk4yce0.js";import{e}from"./chunk-80eepr01.js";var s=import.meta.require("./chunk-jg1wmh1a.js").ExtraUsageDialog;async function upe(u,n){let t=C5(u);if(s&&e2e())return e(s,{onDone:t});let o=await _fe({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(bt())return t(yfe),null;return e(zNe,{extraUsage:o.extraUsage,accepts:()=>!0,onDone:t})}let i=An();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=In(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=ei();return e(Jj,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await wG(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...HEe(n,a,g))}})}
export{upe};
