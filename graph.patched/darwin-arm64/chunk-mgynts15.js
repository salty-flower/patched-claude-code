// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Bo}from"./chunk-sgamszzq.js";import{g}from"./chunk-vzm3bfp5.js";import{CAe,en,_t,In}from"./chunk-g4c6ggz4.js";import{b7}from"./chunk-g92k7atw.js";import{QZ,rUe,fY}from"./chunk-kfjee0mq.js";import{e}from"./chunk-437ab22y.js";import{oo}from"./chunk-qk2g0fmn.js";function l(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function JVr(t,r){return Phe(t,r,"upgrade_command")}async function Phe(t,r,m){let u=b7(t),c=l(m);try{if(_t()){let o=en(),i=!1;if(o?.subscriptionType&&o?.rateLimitTier)i=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let n=await CAe(o.accessToken);i=n?.organization?.organization_type==="claude_max"&&n?.organization?.rate_limit_tier==="default_claude_max_20x"}if(i)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await oo(c);let a=In(),s=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},p=Bo();return e(fY,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,i,n)=>{let d=await QZ(r,o,{setAppState:n,previousAccount:s,previousGatewayAuth:p});u(...rUe(r,o,d))}})}catch(a){g(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{JVr,Phe};
