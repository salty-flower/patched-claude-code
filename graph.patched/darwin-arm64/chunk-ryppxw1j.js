// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Qr}from"./chunk-a7cah040.js";import{u}from"./chunk-zwbw6dvp.js";import{x$e,ln,ut,Cn,u_e}from"./chunk-er6f56rj.js";import{q8}from"./chunk-fzts3nq7.js";import{mpe,NJe,Noe}from"./chunk-gegm5cg8.js";import{e}from"./chunk-ne6sbmea.js";import{Ko}from"./chunk-yx1axhzf.js";function l(a){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`}async function Z5o(a,i){return PIe(a,i,"upgrade_command")}async function PIe(a,i,m){let c=q8(a),s=l(m);try{if(ut()){let o=ln(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let t=await x$e(o.accessToken);n=t?.organization?.organization_type==="claude_max"&&t?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n){let t=u_e();return setTimeout(c,0,t?`You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.`:"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}}await Ko(s);let r=Cn(),p=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},d=Qr();return e(Noe,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,t)=>{let g=await mpe(i,o,{setAppState:t,previousAccount:p,previousGatewayAuth:d});c(...NJe(i,o,g))}})}catch(r){u(r),setTimeout(c,0,`Failed to open browser. Please visit ${s} to upgrade.`)}return null}
export{Z5o,PIe};
