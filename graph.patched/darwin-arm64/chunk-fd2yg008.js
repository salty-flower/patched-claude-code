// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{eo}from"./chunk-4bw62nzm.js";import{c}from"./chunk-gsnbskq4.js";import{r4e,Sn,wt,Hn,ebe}from"./chunk-bk5ct2gw.js";import{mte}from"./chunk-9sq8whr4.js";import{Jwe,Kft,vfe}from"./chunk-9k4fc4ce.js";import{e}from"./chunk-d5st5fww.js";import{$s}from"./chunk-zekn1sw4.js";function l(a){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`}async function P1s(a,i){return DBe(a,i,"upgrade_command")}async function DBe(a,i,m){let u=mte(a),s=l(m);try{if(wt()){let o=Sn(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let t=await r4e(o.accessToken);n=t?.organization?.organization_type==="claude_max"&&t?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n){let t=ebe();return setTimeout(u,0,t?`You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.`:"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}}await $s(s);let r=Hn(),p=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},d=eo();return e(vfe,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,t)=>{let g=await Jwe(i,o,{setAppState:t,previousAccount:p,previousGatewayAuth:d});u(...Kft(i,o,g))}})}catch(r){c(r),setTimeout(u,0,`Failed to open browser. Please visit ${s} to upgrade.`)}return null}
export{P1s,DBe};
