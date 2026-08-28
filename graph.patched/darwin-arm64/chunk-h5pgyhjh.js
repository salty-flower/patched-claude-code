// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Ct}from"./chunk-w2hwjymv.js";import{xt}from"./chunk-dd7crjgj.js";function yAe(){return!Ct()&&xt("allow_remote_sessions")&&xt("allow_quick_web_setup")}var e={type:"local-jsx",name:"web-setup",description:"Set up Claude Code on the web with your GitHub account",availability:["claude-ai"],isEnabled:yAe,get isHidden(){return!xt("allow_remote_sessions")||!xt("allow_quick_web_setup")}},Fhr=e;
export{yAe,Fhr};
