// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{s}from"./chunk-qw5jhqey.js";import{w,c}from"./chunk-9rhc0mtn.js";import{dT,Rmt}from"./chunk-rrxdw3hn.js";import{Hue}from"./chunk-x5w5gehz.js";function Nh(t,n,i){let _=Rmt(dT),e=Hue(t,n,_);if(e===void 0){let a=`${t}:${n}`,o=dT.loggedShortcutFallbacks;if(!o.has(a))o.add(a),s("tengu_keybinding_fallback_used",{action:t,context:c(n),fallback:i,reason:w("action_not_found")});return i}return e===null?"":e}
export{Nh};
