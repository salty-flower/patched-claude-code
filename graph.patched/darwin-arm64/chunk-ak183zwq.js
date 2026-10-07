// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{pn}from"./chunk-yfyrtrqq.js";import{Rt}from"./chunk-qfs4y3ww.js";import{Nd}from"./chunk-mcq8tx7b.js";import{qb,Me}from"./chunk-sac2pmqn.js";import{R4,nn,Tp,Nf}from"./chunk-2e9twphc.js";var TZ={policy:"allow_remote_sessions"};function oEe(){let o=Me();if(o!=="firstParty")return`Cloud sessions aren't available with ${qb[o]}. They run on Anthropic's infrastructure and require an Anthropic account.`;let{featureLabel:e,verb:t}=R4(TZ.policy);return Tp(TZ.policy,e,t)}function q3o(){return Nf(TZ.policy)==="org_denied"}function sEe(){return!Rt()&&nn("allow_remote_sessions")&&nn("allow_quick_web_setup")}function Use(){return!Nd()&&sEe()}function tQe(){return`${pn().CLAUDE_AI_ORIGIN}/connect-github`}function x2e(o="this repository"){let e=tQe(),t=Use()?`Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}`:`Connect it on the web at ${e}`;return`GitHub isn't connected to your Claude account, so ${o} can't be cloned in the cloud. ${t}`}var n={type:"local-jsx",name:"web-setup",description:"Set up cloud sessions with your GitHub account",availability:["claude-ai"],isEnabled:sEe,policyGate:TZ,get isHidden(){return!nn("allow_remote_sessions")||!nn("allow_quick_web_setup")}},ZCs=n;
export{TZ,oEe,q3o,sEe,Use,tQe,x2e,ZCs};
