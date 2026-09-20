// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Kt}from"./chunk-tq3ft6e6.js";import{At}from"./chunk-vzm3bfp5.js";import{Qc}from"./chunk-gyyhh83h.js";import{PC,Pe}from"./chunk-yvbqdrex.js";import{dQ,Xt,gf}from"./chunk-2b1j7csg.js";var n9={policy:"allow_remote_sessions"};function Cre(){let e=Pe();if(e!=="firstParty")return`Cloud sessions aren't available with ${PC[e]}. They run on Anthropic's infrastructure and require an Anthropic account.`;let{featureLabel:t,verb:o}=dQ(n9.policy);return gf(n9.policy,t,o)}function Tre(){return!At()&&Xt("allow_remote_sessions")&&Xt("allow_quick_web_setup")}function wde(){return!Qc()&&Tre()}function zOe(){return`${Kt().CLAUDE_AI_ORIGIN}/connect-github`}function GOe(e="this repository"){let t=zOe(),o=wde()?`Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${t}`:`Connect it on the web at ${t}`;return`GitHub isn't connected to your Claude account, so ${e} can't be cloned in the cloud. ${o}`}var n={type:"local-jsx",name:"web-setup",description:"Set up Claude Code on the web with your GitHub account",availability:["claude-ai"],isEnabled:Tre,policyGate:n9,get isHidden(){return!Xt("allow_remote_sessions")||!Xt("allow_quick_web_setup")}},v9r=n;
export{n9,Cre,Tre,wde,zOe,GOe,v9r};
