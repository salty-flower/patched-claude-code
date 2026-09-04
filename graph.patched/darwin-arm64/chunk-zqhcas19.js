// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{_i}from"./chunk-yhfssb7x.js";import{h}from"./chunk-jx9d5yeb.js";import{Oge,tn,Tt,Pn}from"./chunk-vtwn1md5.js";import{zz}from"./chunk-rrbmvjw6.js";import{l7,$0e,dz}from"./chunk-kmwp59r7.js";import{e}from"./chunk-6ccz96s4.js";import{Yr}from"./chunk-kwvayqxn.js";function m(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function kxr(t,r){return kle(t,r,"upgrade_command")}async function kle(t,r,l){let u=zz(t),c=m(l);try{if(Tt()){let o=tn(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let i=await Oge(o.accessToken);n=i?.organization?.organization_type==="claude_max"&&i?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await Yr(c);let a=Pn(),s=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},p=_i();return e(dz,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,i)=>{let d=await l7(r,o,{setAppState:i,previousAccount:s,previousGatewayAuth:p});u(...$0e(r,o,d))}})}catch(a){h(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{kxr,kle};
