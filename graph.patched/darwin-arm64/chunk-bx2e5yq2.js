// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{bt}from"./chunk-c5ajdz5z.js";import{Pt}from"./chunk-2q73xrvs.js";function i0e(){return!bt()&&Pt("allow_remote_sessions")&&Pt("allow_quick_web_setup")}var e={type:"local-jsx",name:"web-setup",description:"Set up Claude Code on the web with your GitHub account",availability:["claude-ai"],isEnabled:i0e,get isHidden(){return!Pt("allow_remote_sessions")||!Pt("allow_quick_web_setup")}},Dpr=e;
export{i0e,Dpr};
