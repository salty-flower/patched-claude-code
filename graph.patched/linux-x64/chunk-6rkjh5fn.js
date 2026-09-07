// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import"./chunk-bj7g1p32.js";import"./chunk-mnk1rjxv.js";import"./chunk-h9wtyp3p.js";import"./chunk-3whp6z2x.js";import{h}from"./chunk-9g6v0ehs.js";import"./chunk-7s5qs9ea.js";import"./chunk-vx4qhc14.js";import"./chunk-1tk5haqn.js";import"./chunk-e1n9j4jc.js";import"./chunk-mzzfzvay.js";import"./chunk-hvf4zpd9.js";import{Yl}from"./chunk-ssgnh5ww.js";import"./chunk-8snz2hty.js";import{W2n,z2n}from"./chunk-dbahannn.js";var t=new WeakMap;function i(n){try{if(n.type!=="thinking"||!n.signature)return!1;let r;if(t.has(n))r=t.get(n);else r=z2n(n.signature),t.set(n,r);return r===W2n}catch(r){if(Yl().claim("narration_classifier_error"))h(r);return!1}}function u(n){return!!n.thinking?.trim()&&i(n)}function f(n){let r=[];return n.forEach((e,s)=>{if(i(e))r.push(s)}),r}export{u as isNarrationSummaryBlock,i as isNarrationTaggedBlock,f as narrationBlockIndexes};
