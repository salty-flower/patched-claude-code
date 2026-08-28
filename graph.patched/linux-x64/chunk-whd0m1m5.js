// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{s}from"./chunk-cvykgfry.js";import{S,c}from"./chunk-gt4btdxr.js";import{wS,vdt}from"./chunk-cvgmjmpe.js";import{ele}from"./chunk-fedrx9j2.js";function og(t,n,i){let _=vdt(wS),e=ele(t,n,_);if(e===void 0){let a=`${t}:${n}`,o=wS.loggedShortcutFallbacks;if(!o.has(a))o.add(a),s("tengu_keybinding_fallback_used",{action:t,context:c(n),fallback:i,reason:S("action_not_found")});return i}return e===null?"":e}
export{og};
