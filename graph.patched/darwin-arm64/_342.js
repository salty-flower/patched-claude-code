// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{tfd as r,yfd as u}from"./_806.js";import{Exd as i}from"./_839.js";function p(n,o,t){let e=o.safeParse(t);if(e.success)return e.data;let s=e.error.issues[0];return r(`[thin-client] ${n} reply did not match its schema (${e.error.issues.length} issue(s); first: ${s?`${s.path.join(".")||"<root>"}: ${s.message}`:"unknown"})`,{level:"warn"}),null}var l=i(()=>{u()});
export{p as vJ,l as wJ};
