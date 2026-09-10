// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{xo}from"./chunk-6n7yk222.js";import{h}from"./chunk-p9k2m8jj.js";import{xye,Jt,gt,Pn}from"./chunk-ce4ppmnp.js";import{Q6}from"./chunk-nj585ctd.js";import{lX,Z0e,k6}from"./chunk-w3tvx1n6.js";import{e}from"./chunk-qs39f0kj.js";import{Vr}from"./chunk-fn23q9n6.js";function m(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function okr(t,r){return hue(t,r,"upgrade_command")}async function hue(t,r,l){let u=Q6(t),c=m(l);try{if(gt()){let o=Jt(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let i=await xye(o.accessToken);n=i?.organization?.organization_type==="claude_max"&&i?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await Vr(c);let a=Pn(),s=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},p=xo();return e(k6,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,i)=>{let d=await lX(r,o,{setAppState:i,previousAccount:s,previousGatewayAuth:p});u(...Z0e(r,o,d))}})}catch(a){h(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{okr,hue};
