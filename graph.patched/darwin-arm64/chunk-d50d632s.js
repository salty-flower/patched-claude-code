// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import"./chunk-ypa64mmn.js";import"./chunk-g5e6pf8s.js";import{Ce,$n}from"./chunk-a7cah040.js";import"./chunk-nynxm73s.js";import"./chunk-g9zw99sb.js";import"./chunk-hs50vfa7.js";import"./chunk-jm8r4kd0.js";import"./chunk-2j7zyd8v.js";var e={type:"local-jsx",name:"goal",description:"Set a goal Claude checks before stopping",argumentHint:"[<condition> | clear]",immediate:!0},o={type:"local",name:"goal",supportsNonInteractive:!0,thinClientDispatch:"post-text",description:"Set a goal \u2014 keep working until the condition is met",get isHidden(){return!Ce()},isEnabled:()=>Ce()||$n(),load:()=>import("./chunk-qqnaxy6r.js")},n=e;export{n as default,o as goalNonInteractive};
