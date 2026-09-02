// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{mi}from"./chunk-30zk17wm.js";import{h}from"./chunk-ma4xtxwv.js";import{rfe,Xt,wt,Pn}from"./chunk-1e5y3pjf.js";import{CK}from"./chunk-n8nmdgpp.js";import{E3,ETe,rK}from"./chunk-3wpcw11t.js";import{e}from"./chunk-ys8dsnqt.js";import{$r}from"./chunk-t6tnnca6.js";function m(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function JHr(t,r){return Mie(t,r,"upgrade_command")}async function Mie(t,r,l){let u=CK(t),c=m(l);try{if(wt()){let o=Xt(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let i=await rfe(o.accessToken);n=i?.organization?.organization_type==="claude_max"&&i?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await $r(c);let a=Pn(),s=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},p=mi();return e(rK,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,i)=>{let d=await E3(r,o,{setAppState:i,previousAccount:s,previousGatewayAuth:p});u(...ETe(r,o,d))}})}catch(a){h(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{JHr,Mie};
