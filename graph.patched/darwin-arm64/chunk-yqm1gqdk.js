// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ei}from"./chunk-g4zaymy2.js";import{b}from"./chunk-w2hwjymv.js";import{Ice,jt,St,In}from"./chunk-ghnc2x4f.js";import{C5}from"./chunk-9yh64pnd.js";import{wG,HEe,Jj}from"./chunk-am15h3bq.js";import{e}from"./chunk-80eepr01.js";import{Cr}from"./chunk-z04v3m62.js";function m(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function Cmr(t,r){return gre(t,r,"upgrade_command")}async function gre(t,r,l){let u=C5(t),c=m(l);try{if(St()){let o=jt(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let i=await Ice(o.accessToken);n=i?.organization?.organization_type==="claude_max"&&i?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await Cr(c);let a=In(),s=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},p=ei();return e(Jj,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,i)=>{let d=await wG(r,o,{setAppState:i,previousAccount:s,previousGatewayAuth:p});u(...HEe(r,o,d))}})}catch(a){b(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{Cmr,gre};
