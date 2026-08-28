// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ei}from"./chunk-2vv5hpw3.js";import{_}from"./chunk-6ce4s97h.js";import{Tce,Ut,vt,In}from"./chunk-ns0ekkj0.js";import{wW}from"./chunk-cypew82r.js";import{y6,IAe,qG}from"./chunk-cqxxs6j3.js";import{e}from"./chunk-azctepqx.js";import{kr}from"./chunk-983m2c4d.js";function m(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function bmr(t,r){return pre(t,r,"upgrade_command")}async function pre(t,r,l){let u=wW(t),c=m(l);try{if(vt()){let o=Ut(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let i=await Tce(o.accessToken);n=i?.organization?.organization_type==="claude_max"&&i?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await kr(c);let a=In(),s=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},p=ei();return e(qG,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,i)=>{let d=await y6(r,o,{setAppState:i,previousAccount:s,previousGatewayAuth:p});u(...IAe(r,o,d))}})}catch(a){_(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{bmr,pre};
