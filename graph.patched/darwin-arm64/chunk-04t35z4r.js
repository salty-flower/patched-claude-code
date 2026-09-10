// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{xo}from"./chunk-sgyvc67j.js";import{h}from"./chunk-2rebt4am.js";import{Mye,Jt,gt,Pn}from"./chunk-e02s7cks.js";import{aK}from"./chunk-jzyf086v.js";import{h7,lOe,O9}from"./chunk-pz6k4p2q.js";import{e}from"./chunk-qs39f0kj.js";import{qr}from"./chunk-w2sv249j.js";function m(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function Wvr(t,r){return vue(t,r,"upgrade_command")}async function vue(t,r,l){let u=aK(t),c=m(l);try{if(gt()){let o=Jt(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let i=await Mye(o.accessToken);n=i?.organization?.organization_type==="claude_max"&&i?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await qr(c);let a=Pn(),s=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},p=xo();return e(O9,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,i)=>{let d=await h7(r,o,{setAppState:i,previousAccount:s,previousGatewayAuth:p});u(...lOe(r,o,d))}})}catch(a){h(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{Wvr,vue};
