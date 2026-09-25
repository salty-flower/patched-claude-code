// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import"./chunk-kp7gknaw.js";import"./chunk-4a5nddj6.js";import{Te,Vn}from"./chunk-cqc88nqm.js";import"./chunk-7yckkh1m.js";import"./chunk-rnxz8hs2.js";import"./chunk-2bj5eqbj.js";import"./chunk-7r0w3nmp.js";import"./chunk-35k7s716.js";var e={type:"local-jsx",name:"goal",description:"Set a goal Claude checks before stopping",argumentHint:"[<condition> | clear]",immediate:!0},o={type:"local",name:"goal",supportsNonInteractive:!0,thinClientDispatch:"post-text",description:"Set a goal \u2014 keep working until the condition is met",get isHidden(){return!Te()},isEnabled:()=>Te()||Vn(),load:()=>import("./chunk-aqj4h8a4.js")},n=e;export{n as default,o as goalNonInteractive};
