// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{cn}from"./chunk-y208484s.js";import{Tt}from"./chunk-tdmgys2e.js";import{Yd}from"./chunk-pf8p4bsg.js";import{lw,Pe}from"./chunk-fsnz81vy.js";import{$5,on,Dp,Vf}from"./chunk-cns0hna9.js";var Zee={policy:"allow_remote_sessions"};function Rge(){let o=Pe();if(o!=="firstParty")return`Cloud sessions aren't available with ${lw[o]}. They run on Anthropic's infrastructure and require an Anthropic account.`;let{featureLabel:e,verb:t}=$5(Zee.policy);return Dp(Zee.policy,e,t)}function cZo(){return Vf(Zee.policy)==="org_denied"}function ike(){return!Tt()&&on("allow_remote_sessions")&&on("allow_quick_web_setup")}function bae(){return!Yd()&&ike()}function ltt(){return`${cn().CLAUDE_AI_ORIGIN}/connect-github`}function i6e(o="this repository"){let e=ltt(),t=bae()?`Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}`:`Connect it on the web at ${e}`;return`GitHub isn't connected to your Claude account, so ${o} can't be cloned in the cloud. ${t}`}var n={type:"local-jsx",name:"web-setup",description:"Set up cloud sessions with your GitHub account",availability:["claude-ai"],isEnabled:ike,policyGate:Zee,get isHidden(){return!on("allow_remote_sessions")||!on("allow_quick_web_setup")}},oMs=n;
export{Zee,Rge,cZo,ike,bae,ltt,i6e,oMs};
