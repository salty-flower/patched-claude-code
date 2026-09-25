// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{ho}from"./chunk-s8xs8s76.js";import{u}from"./chunk-0dpks9t0.js";import{NDe,un,pt,xn}from"./chunk-twxt3h9y.js";import{vne}from"./chunk-8p48m7y3.js";import{vle,d9e,ite}from"./chunk-re3ywx87.js";import{e}from"./chunk-srmsc891.js";import{Lo}from"./chunk-nkk20n3a.js";function m(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function hDo(t,r){return qke(t,r,"upgrade_command")}async function qke(t,r,s){let c=vne(t),l=m(s);try{if(pt()){let o=un(),i=!1;if(o?.subscriptionType&&o?.rateLimitTier)i=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let n=await NDe(o.accessToken);i=n?.organization?.organization_type==="claude_max"&&n?.organization?.rate_limit_tier==="default_claude_max_20x"}if(i)return setTimeout(c,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await Lo(l);let a=xn(),p=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},d=ho();return e(ite,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,i,n)=>{let g=await vle(r,o,{setAppState:n,previousAccount:p,previousGatewayAuth:d});c(...d9e(r,o,g))}})}catch(a){u(a),setTimeout(c,0,`Failed to open browser. Please visit ${l} to upgrade.`)}return null}
export{hDo,qke};
