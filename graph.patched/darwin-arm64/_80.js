// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{$n as C,Xn as y,go as S}from"./_125.js";import{lO as h,zO as J}from"./_384.js";import{leb as _,neb as m}from"./_497.js";import{oGb as x,pGb as D}from"./_569.js";import{Bpc as g,Jmc as p,Lmc as O,Lqc as b,Mpc as f,cpc as d}from"./_668.js";import{Qcd as s,Ycd as A}from"./_802.js";import{And as l,krd as k}from"./_812.js";O();J();b();D();A();function c(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}k();m();async function N(t,a){return P(t,a,"upgrade_command")}async function P(t,a,w){let i=h(t),u=c(w);try{if(g()){let o=d(),r=!1;if(o?.subscriptionType&&o?.rateLimitTier)r=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let n=await p(o.accessToken);r=n?.organization?.organization_type==="claude_max"&&n?.organization?.rate_limit_tier==="default_claude_max_20x"}if(r)return setTimeout(i,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await x(u);let e=f(),L=e&&{accountUuid:e.accountUuid,organizationUuid:e.organizationUuid},U=l();return _(S,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,r,n)=>{let T=await y(a,o,{setAppState:n,previousAccount:L,previousGatewayAuth:U});i(...C(a,o,T))}})}catch(e){s(e),setTimeout(i,0,`Failed to open browser. Please visit ${u} to upgrade.`)}return null}
export{N as Ni,P as Oi};
