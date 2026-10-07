// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{mo}from"./chunk-8mvda08c.js";import{c}from"./chunk-qfs4y3ww.js";import{r6e,gn,mt,Ln,rCe}from"./chunk-s46qgfx7.js";import{jJ}from"./chunk-1wbrxnj0.js";import{Lye,Vit,bce}from"./chunk-t7b67gn6.js";import{e}from"./chunk-mq8eg5v4.js";import{ls}from"./chunk-99td1wjg.js";function l(a){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`}async function qbs(a,i){return ANe(a,i,"upgrade_command")}async function ANe(a,i,m){let u=jJ(a),s=l(m);try{if(mt()){let o=gn(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let t=await r6e(o.accessToken);n=t?.organization?.organization_type==="claude_max"&&t?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n){let t=rCe();return setTimeout(u,0,t?`You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.`:"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}}await ls(s);let r=Ln(),p=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},d=mo();return e(bce,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,t)=>{let g=await Lye(i,o,{setAppState:t,previousAccount:p,previousGatewayAuth:d});u(...Vit(i,o,g))}})}catch(r){c(r),setTimeout(u,0,`Failed to open browser. Please visit ${s} to upgrade.`)}return null}
export{qbs,ANe};
