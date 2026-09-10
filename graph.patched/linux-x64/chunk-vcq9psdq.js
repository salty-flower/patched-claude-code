// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import"./chunk-t8q7n4ta.js";import"./chunk-a7esebzw.js";import"./chunk-m3k3498d.js";import"./chunk-rfvh2b8a.js";import{h}from"./chunk-jvycdhmw.js";import"./chunk-vfrpernt.js";import"./chunk-vkfaczp9.js";import"./chunk-fy3j7rz0.js";import"./chunk-qsnhycbm.js";import"./chunk-xdb7bs7g.js";import"./chunk-xj9n0xxp.js";import{Fl}from"./chunk-r34ma10f.js";import"./chunk-tw4wqy93.js";import{W6n,G6n}from"./chunk-a3rsd0xj.js";var t=new WeakMap;function i(n){try{if(n.type!=="thinking"||!n.signature)return!1;let r;if(t.has(n))r=t.get(n);else r=G6n(n.signature),t.set(n,r);return r===W6n}catch(r){if(Fl().claim("narration_classifier_error"))h(r);return!1}}function u(n){return!!n.thinking?.trim()&&i(n)}function f(n){let r=[];return n.forEach((e,s)=>{if(i(e))r.push(s)}),r}export{u as isNarrationSummaryBlock,i as isNarrationTaggedBlock,f as narrationBlockIndexes};
