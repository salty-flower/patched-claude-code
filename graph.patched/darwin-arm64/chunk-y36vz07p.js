// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{co}from"./chunk-vd0a9d2s.js";import{c}from"./chunk-tdmgys2e.js";import{qVe,mn,_t,Mn,uAe}from"./chunk-gcyvvtkw.js";import{mZ}from"./chunk-5hg2jcgy.js";import{NSe,adt,rue}from"./chunk-scyp59ya.js";import{e}from"./chunk-efrp9dmx.js";import{Hs}from"./chunk-v0wvdmzc.js";function l(a){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`}async function QPs(a,i){return N$e(a,i,"upgrade_command")}async function N$e(a,i,m){let u=mZ(a),s=l(m);try{if(_t()){let o=mn(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let t=await qVe(o.accessToken);n=t?.organization?.organization_type==="claude_max"&&t?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n){let t=uAe();return setTimeout(u,0,t?`You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.`:"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}}await Hs(s);let r=Mn(),p=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},d=co();return e(rue,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,t)=>{let g=await NSe(i,o,{setAppState:t,previousAccount:p,previousGatewayAuth:d});u(...adt(i,o,g))}})}catch(r){c(r),setTimeout(u,0,`Failed to open browser. Please visit ${s} to upgrade.`)}return null}
export{QPs,N$e};
