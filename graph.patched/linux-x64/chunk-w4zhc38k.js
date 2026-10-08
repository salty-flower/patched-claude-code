// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{cn}from"./chunk-941sa7c2.js";import{Ct}from"./chunk-3s94kw4m.js";import{Yd}from"./chunk-cjpd2k0t.js";import{aw,Pe}from"./chunk-942093b7.js";import{I3,on,Dp,qf}from"./chunk-nd0jktes.js";var Vee={policy:"allow_remote_sessions"};function vge(){let o=Pe();if(o!=="firstParty")return`Cloud sessions aren't available with ${aw[o]}. They run on Anthropic's infrastructure and require an Anthropic account.`;let{featureLabel:e,verb:t}=I3(Vee.policy);return Dp(Vee.policy,e,t)}function k7o(){return qf(Vee.policy)==="org_denied"}function ZEe(){return!Ct()&&on("allow_remote_sessions")&&on("allow_quick_web_setup")}function mae(){return!Yd()&&ZEe()}function ett(){return`${cn().CLAUDE_AI_ORIGIN}/connect-github`}function QGe(o="this repository"){let e=ett(),t=mae()?`Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}`:`Connect it on the web at ${e}`;return`GitHub isn't connected to your Claude account, so ${o} can't be cloned in the cloud. ${t}`}var n={type:"local-jsx",name:"web-setup",description:"Set up cloud sessions with your GitHub account",availability:["claude-ai"],isEnabled:ZEe,policyGate:Vee,get isHidden(){return!on("allow_remote_sessions")||!on("allow_quick_web_setup")}},SHs=n;
export{Vee,vge,k7o,ZEe,mae,ett,QGe,SHs};
