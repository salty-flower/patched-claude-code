// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{mi}from"./chunk-38213y7h.js";import{h}from"./chunk-qpcjd2zp.js";import{ope,Yt,Tt,Dn}from"./chunk-bsdtxcdc.js";import{xq}from"./chunk-t0drmbm8.js";import{vK,CRe,sq}from"./chunk-qfs22xxp.js";import{e}from"./chunk-wk3xnwvn.js";import{Lr}from"./chunk-m263gdna.js";function m(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function oTr(t,r){return $ie(t,r,"upgrade_command")}async function $ie(t,r,l){let u=xq(t),c=m(l);try{if(Tt()){let o=Yt(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let i=await ope(o.accessToken);n=i?.organization?.organization_type==="claude_max"&&i?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await Lr(c);let a=Dn(),s=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},p=mi();return e(sq,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,i)=>{let d=await vK(r,o,{setAppState:i,previousAccount:s,previousGatewayAuth:p});u(...CRe(r,o,d))}})}catch(a){h(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{oTr,$ie};
