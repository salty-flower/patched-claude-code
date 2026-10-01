// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{sn}from"./chunk-vmffs68f.js";import{Ct}from"./chunk-zwbw6dvp.js";import{Wc}from"./chunk-n8h76tq4.js";import{PS,Pe}from"./chunk-ntsbwr3d.js";import{g5,Yt,Iu}from"./chunk-8gjexfse.js";var Wee={policy:"allow_remote_sessions"};function Bge(){let t=Pe();if(t!=="firstParty")return`Cloud sessions aren't available with ${PS[t]}. They run on Anthropic's infrastructure and require an Anthropic account.`;let{featureLabel:o,verb:e}=g5(Wee.policy);return Iu(Wee.policy,o,e)}function jge(){return!Ct()&&Yt("allow_remote_sessions")&&Yt("allow_quick_web_setup")}function Gee(){return!Wc()&&jge()}function L3e(){return`${sn().CLAUDE_AI_ORIGIN}/connect-github`}function N3e(t="this repository"){let o=L3e(),e=Gee()?`Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${o}`:`Connect it on the web at ${o}`;return`GitHub isn't connected to your Claude account, so ${t} can't be cloned in the cloud. ${e}`}var n={type:"local-jsx",name:"web-setup",description:"Set up cloud sessions with your GitHub account",availability:["claude-ai"],isEnabled:jge,policyGate:Wee,get isHidden(){return!Yt("allow_remote_sessions")||!Yt("allow_quick_web_setup")}},LXo=n;
export{Wee,Bge,jge,Gee,L3e,N3e,LXo};
