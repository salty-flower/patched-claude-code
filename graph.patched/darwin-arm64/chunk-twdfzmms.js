// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import"./chunk-nfna65jh.js";import"./chunk-fdxhcr6b.js";import{ve,jn}from"./chunk-4bw62nzm.js";import"./chunk-k1419ccf.js";import"./chunk-76anb6yt.js";import"./chunk-886tf6ja.js";import"./chunk-yjc18bey.js";import"./chunk-ae84tp6z.js";var e={type:"local-jsx",name:"goal",description:"Set a goal Claude checks before stopping",argumentHint:"[<condition> | clear]",immediate:!0},o={type:"local",name:"goal",supportsNonInteractive:!0,thinClientDispatch:"post-text",description:"Set a goal \u2014 keep working until the condition is met",get isHidden(){return!ve()},isEnabled:()=>ve()||jn(),load:()=>import("./chunk-vvz1khq0.js")},n=e;export{n as default,o as goalNonInteractive};
