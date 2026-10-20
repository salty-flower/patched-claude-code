// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import"./chunk-esv3b1gm.js";import"./chunk-bjnpzyk4.js";import{be,On}from"./chunk-kpqr86hf.js";import"./chunk-saccfcs4.js";import"./chunk-ny2cqbmq.js";import"./chunk-nre716m4.js";import"./chunk-2ckwvz0j.js";import"./chunk-f66mhvm1.js";import"./chunk-cne7d53x.js";var e={type:"local-jsx",name:"goal",description:"Set a goal Claude checks before stopping",argumentHint:"[<condition> | clear]",immediate:!0},o={type:"local",name:"goal",supportsNonInteractive:!0,thinClientDispatch:"post-text",description:"Set a goal \u2014 keep working until the condition is met",get isHidden(){return!be()},isEnabled:()=>be()||On(),load:()=>import("./chunk-fa8n9j5w.js")},n=e;export{n as default,o as goalNonInteractive};
