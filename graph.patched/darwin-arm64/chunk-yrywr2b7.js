// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{wt}from"./chunk-2rebt4am.js";import{Ft}from"./chunk-ea584spk.js";function cne(){return!wt()&&Ft("allow_remote_sessions")&&Ft("allow_quick_web_setup")}var e={type:"local-jsx",name:"web-setup",description:"Set up Claude Code on the web with your GitHub account",availability:["claude-ai"],isEnabled:cne,get isHidden(){return!Ft("allow_remote_sessions")||!Ft("allow_quick_web_setup")}},CCr=e;
export{cne,CCr};
