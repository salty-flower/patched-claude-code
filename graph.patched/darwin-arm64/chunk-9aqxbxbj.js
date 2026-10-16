// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ur}from"./chunk-xzypj06m.js";import{l}from"./chunk-e666gr8q.js";import{pXe,Mn,kt,vn,Vve}from"./chunk-1901fdh6.js";import{loe}from"./chunk-eq3jpjn9.js";import{ZCe,Bbt,cye}from"./chunk-7zkhxwn6.js";import{e}from"./chunk-esdbx0br.js";import{Ds}from"./chunk-d9v11evn.js";function s(a){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`}async function $Js(a,i){return sze(a,i,"upgrade_command")}async function sze(a,i,m){let u=loe(a),c=s(m);try{if(kt()){let o=Mn(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let t=await pXe(o.accessToken);n=t?.organization?.organization_type==="claude_max"&&t?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n){let t=Vve();return setTimeout(u,0,t?`You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.`:"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}}await Ds(c);let r=vn(),p=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},d=Ur();return e(cye,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,t)=>{let g=await ZCe(i,o,{setAppState:t,previousAccount:p,previousGatewayAuth:d});u(...Bbt(i,o,g))}})}catch(r){l(r),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{$Js,sze};
