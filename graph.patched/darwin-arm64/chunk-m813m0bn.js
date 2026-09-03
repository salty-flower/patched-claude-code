// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{fi}from"./chunk-hdbxv3pp.js";import{h}from"./chunk-1mtde6n1.js";import{Ume,Jt,wt,On}from"./chunk-h6md7820.js";import{oz}from"./chunk-4j30jhq0.js";import{R8,_He,P4}from"./chunk-y51sya27.js";import{e}from"./chunk-v5r13aq1.js";import{Lr}from"./chunk-30pre7fm.js";function m(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function UCr(t,r){return Dae(t,r,"upgrade_command")}async function Dae(t,r,l){let u=oz(t),c=m(l);try{if(wt()){let o=Jt(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let i=await Ume(o.accessToken);n=i?.organization?.organization_type==="claude_max"&&i?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await Lr(c);let a=On(),s=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},p=fi();return e(P4,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,i)=>{let d=await R8(r,o,{setAppState:i,previousAccount:s,previousGatewayAuth:p});u(..._He(r,o,d))}})}catch(a){h(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{UCr,Dae};
