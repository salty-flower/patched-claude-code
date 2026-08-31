// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ct}from"./chunk-qpcjd2zp.js";import{Mt}from"./chunk-y97hdknc.js";function Lke(){return!Ct()&&Mt("allow_remote_sessions")&&Mt("allow_quick_web_setup")}var e={type:"local-jsx",name:"web-setup",description:"Set up Claude Code on the web with your GitHub account",availability:["claude-ai"],isEnabled:Lke,get isHidden(){return!Mt("allow_remote_sessions")||!Mt("allow_quick_web_setup")}},jTr=e;
export{Lke,jTr};
