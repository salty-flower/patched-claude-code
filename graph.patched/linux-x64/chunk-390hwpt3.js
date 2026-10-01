// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import"./chunk-b1a55n2g.js";import"./chunk-fkak21hw.js";import{ke,Fn}from"./chunk-bxhyh54r.js";import"./chunk-k3gp1qmc.js";import"./chunk-aap6zsd0.js";import"./chunk-vqpmen5t.js";import"./chunk-dmpcy5p5.js";import"./chunk-actz3rxp.js";var e={type:"local-jsx",name:"goal",description:"Set a goal Claude checks before stopping",argumentHint:"[<condition> | clear]",immediate:!0},o={type:"local",name:"goal",supportsNonInteractive:!0,thinClientDispatch:"post-text",description:"Set a goal \u2014 keep working until the condition is met",get isHidden(){return!ke()},isEnabled:()=>ke()||Fn(),load:()=>import("./chunk-0y7vqs72.js")},n=e;export{n as default,o as goalNonInteractive};
