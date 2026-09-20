// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Bo}from"./chunk-txfrkyzp.js";import{m}from"./chunk-kh3dq6rw.js";import{_ke,Zt,_t,Hn}from"./chunk-30p0nwys.js";import{AX}from"./chunk-5smyeq0d.js";import{BZ,$1e,iY}from"./chunk-cghqhwh1.js";import{e}from"./chunk-437ab22y.js";import{ro}from"./chunk-xnsp6gaj.js";function l(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function fKr(t,r){return bhe(t,r,"upgrade_command")}async function bhe(t,r,s){let u=AX(t),c=l(s);try{if(_t()){let o=Zt(),i=!1;if(o?.subscriptionType&&o?.rateLimitTier)i=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let n=await _ke(o.accessToken);i=n?.organization?.organization_type==="claude_max"&&n?.organization?.rate_limit_tier==="default_claude_max_20x"}if(i)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await ro(c);let a=Hn(),p=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},d=Bo();return e(iY,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,i,n)=>{let g=await BZ(r,o,{setAppState:n,previousAccount:p,previousGatewayAuth:d});u(...$1e(r,o,g))}})}catch(a){m(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{fKr,bhe};
