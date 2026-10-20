// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Gr}from"./chunk-dxktn51d.js";import{l}from"./chunk-jkcb7qdd.js";import{Ryt,Mn,kt,mn,iTe}from"./chunk-7p6jp6kj.js";import{ase}from"./chunk-9747w1pz.js";import{yCe,kEt,y_e}from"./chunk-46xb76wb.js";import{e}from"./chunk-8d2nhg02.js";import{Ys}from"./chunk-8kwx7fwk.js";function s(a){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`}async function jai(a,i){return gVe(a,i,"upgrade_command")}async function gVe(a,i,m){let u=ase(a),c=s(m);try{if(kt()){let o=Mn(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let t=await Ryt(o.accessToken);n=t?.organization?.organization_type==="claude_max"&&t?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n){let t=iTe();return setTimeout(u,0,t?`You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.`:"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}}await Ys(c);let r=mn(),p=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},d=Gr();return e(y_e,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,t)=>{let g=await yCe(i,o,{setAppState:t,previousAccount:p,previousGatewayAuth:d});u(...kEt(i,o,g))}})}catch(r){l(r),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{jai,gVe};
