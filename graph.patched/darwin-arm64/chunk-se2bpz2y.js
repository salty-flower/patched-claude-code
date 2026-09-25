// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{dn}from"./chunk-v9aeg87c.js";import{xt}from"./chunk-0dpks9t0.js";import{$c}from"./chunk-x4gz28fm.js";import{jR,He}from"./chunk-m9hfdm3b.js";import{bq,Xt,Zp}from"./chunk-9hpfkyew.js";var vJ={policy:"allow_remote_sessions"};function Mue(){let t=He();if(t!=="firstParty")return`Cloud sessions aren't available with ${jR[t]}. They run on Anthropic's infrastructure and require an Anthropic account.`;let{featureLabel:o,verb:e}=bq(vJ.policy);return Zp(vJ.policy,o,e)}function Nue(){return!xt()&&Xt("allow_remote_sessions")&&Xt("allow_quick_web_setup")}function CJ(){return!$c()&&Nue()}function m6e(){return`${dn().CLAUDE_AI_ORIGIN}/connect-github`}function S0e(t="this repository"){let o=m6e(),e=CJ()?`Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${o}`:`Connect it on the web at ${o}`;return`GitHub isn't connected to your Claude account, so ${t} can't be cloned in the cloud. ${e}`}var n={type:"local-jsx",name:"web-setup",description:"Set up cloud sessions with your GitHub account",availability:["claude-ai"],isEnabled:Nue,policyGate:vJ,get isHidden(){return!Xt("allow_remote_sessions")||!Xt("allow_quick_web_setup")}},GNo=n;
export{vJ,Mue,Nue,CJ,m6e,S0e,GNo};
