// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ur}from"./chunk-eqmywwjn.js";import{l}from"./chunk-9pt2nr7j.js";import{sXe,Hn,kt,En,UEe}from"./chunk-k16gymf7.js";import{toe}from"./chunk-wg0anxwe.js";import{VTe,MSt,oye}from"./chunk-sbrzcpje.js";import{e}from"./chunk-esdbx0br.js";import{Ds}from"./chunk-n6aksg65.js";function s(a){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`}async function tQs(a,i){return JGe(a,i,"upgrade_command")}async function JGe(a,i,m){let u=toe(a),c=s(m);try{if(kt()){let o=Hn(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let t=await sXe(o.accessToken);n=t?.organization?.organization_type==="claude_max"&&t?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n){let t=UEe();return setTimeout(u,0,t?`You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.`:"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}}await Ds(c);let r=En(),p=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},d=Ur();return e(oye,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,t)=>{let g=await VTe(i,o,{setAppState:t,previousAccount:p,previousGatewayAuth:d});u(...MSt(i,o,g))}})}catch(r){l(r),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{tQs,JGe};
