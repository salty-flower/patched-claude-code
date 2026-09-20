// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Kt}from"./chunk-40wq8hf6.js";import{kt}from"./chunk-kh3dq6rw.js";import{Qc}from"./chunk-39xz88rg.js";import{xA,Pe}from"./chunk-s3hsf7ap.js";import{sQ,Xt,gf}from"./chunk-js9x7t7j.js";var Y6={policy:"allow_remote_sessions"};function bre(){let e=Pe();if(e!=="firstParty")return`Cloud sessions aren't available with ${xA[e]}. They run on Anthropic's infrastructure and require an Anthropic account.`;let{featureLabel:t,verb:o}=sQ(Y6.policy);return gf(Y6.policy,t,o)}function Sre(){return!kt()&&Xt("allow_remote_sessions")&&Xt("allow_quick_web_setup")}function mde(){return!Qc()&&Sre()}function MOe(){return`${Kt().CLAUDE_AI_ORIGIN}/connect-github`}function DOe(e="this repository"){let t=MOe(),o=mde()?`Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${t}`:`Connect it on the web at ${t}`;return`GitHub isn't connected to your Claude account, so ${e} can't be cloned in the cloud. ${o}`}var n={type:"local-jsx",name:"web-setup",description:"Set up Claude Code on the web with your GitHub account",availability:["claude-ai"],isEnabled:Sre,policyGate:Y6,get isHidden(){return!Xt("allow_remote_sessions")||!Xt("allow_quick_web_setup")}},$6r=n;
export{Y6,bre,Sre,mde,MOe,DOe,$6r};
