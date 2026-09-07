// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{os}from"./chunk-zhtwayh2.js";import{h}from"./chunk-c5ajdz5z.js";import{ame,Vt,gt,An}from"./chunk-n495pc0t.js";import{z4}from"./chunk-wts8cfz5.js";import{t8,Uxe,m4}from"./chunk-8cg221x3.js";import{e}from"./chunk-smtaex5n.js";import{jr}from"./chunk-1tn14wkq.js";function m(t){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`}async function Zdr(t,r){return dae(t,r,"upgrade_command")}async function dae(t,r,l){let u=z4(t),c=m(l);try{if(gt()){let o=Vt(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let i=await ame(o.accessToken);n=i?.organization?.organization_type==="claude_max"&&i?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n)return setTimeout(u,0,"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}await jr(c);let a=An(),s=a&&{accountUuid:a.accountUuid,organizationUuid:a.organizationUuid},p=os();return e(m4,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,i)=>{let d=await t8(r,o,{setAppState:i,previousAccount:s,previousGatewayAuth:p});u(...Uxe(r,o,d))}})}catch(a){h(a),setTimeout(u,0,`Failed to open browser. Please visit ${c} to upgrade.`)}return null}
export{Zdr,dae};
