// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import"./chunk-9sbknd2z.js";import"./chunk-9s1z8ttt.js";import{ye,Pn}from"./chunk-ersar6wn.js";import"./chunk-kqpf5fh3.js";import"./chunk-ydpbzmt4.js";import"./chunk-36ysyspx.js";import"./chunk-3kevgx4j.js";import"./chunk-gp4v3dbd.js";import"./chunk-3y73jbfr.js";var e={type:"local-jsx",name:"goal",description:"Set a goal Claude checks before stopping",argumentHint:"[<condition> | clear]",immediate:!0},o={type:"local",name:"goal",supportsNonInteractive:!0,thinClientDispatch:"post-text",description:"Set a goal \u2014 keep working until the condition is met",get isHidden(){return!ye()},isEnabled:()=>ye()||Pn(),load:()=>import("./chunk-y1fcmry4.js")},n=e;export{n as default,o as goalNonInteractive};
