// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{pn}from"./chunk-zs0343th.js";import{Rt}from"./chunk-z9b8syjk.js";import{Nd}from"./chunk-zyrx67ap.js";import{qS,He}from"./chunk-9dnqpecd.js";import{S6,nn,Cp,Nf}from"./chunk-v7f8j7cb.js";var SZ={policy:"allow_remote_sessions"};function Qwe(){let o=He();if(o!=="firstParty")return`Cloud sessions aren't available with ${qS[o]}. They run on Anthropic's infrastructure and require an Anthropic account.`;let{featureLabel:e,verb:t}=S6(SZ.policy);return Cp(SZ.policy,e,t)}function l3o(){return Nf(SZ.policy)==="org_denied"}function Zwe(){return!Rt()&&nn("allow_remote_sessions")&&nn("allow_quick_web_setup")}function Hse(){return!Nd()&&Zwe()}function VQe(){return`${pn().CLAUDE_AI_ORIGIN}/connect-github`}function wWe(o="this repository"){let e=VQe(),t=Hse()?`Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}`:`Connect it on the web at ${e}`;return`GitHub isn't connected to your Claude account, so ${o} can't be cloned in the cloud. ${t}`}var n={type:"local-jsx",name:"web-setup",description:"Set up cloud sessions with your GitHub account",availability:["claude-ai"],isEnabled:Zwe,policyGate:SZ,get isHidden(){return!nn("allow_remote_sessions")||!nn("allow_quick_web_setup")}},gks=n;
export{SZ,Qwe,l3o,Zwe,Hse,VQe,wWe,gks};
