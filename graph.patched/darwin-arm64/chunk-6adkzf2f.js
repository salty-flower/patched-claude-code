// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import"./chunk-cet8na02.js";import"./chunk-3k7pa7mk.js";import"./chunk-wmtek349.js";import"./chunk-awrvr02y.js";import{h}from"./chunk-e0gvmsm3.js";import"./chunk-wkyng8j1.js";import"./chunk-jxvdfgn0.js";import"./chunk-w930ag8r.js";import"./chunk-3kadfzjs.js";import"./chunk-fz55wskw.js";import"./chunk-0v0wzs89.js";import{Ul}from"./chunk-b9a7s3a6.js";import"./chunk-1a5h448d.js";import{w5n,E5n}from"./chunk-gwksmzsk.js";var t=new WeakMap;function i(n){try{if(n.type!=="thinking"||!n.signature)return!1;let r;if(t.has(n))r=t.get(n);else r=E5n(n.signature),t.set(n,r);return r===w5n}catch(r){if(Ul().claim("narration_classifier_error"))h(r);return!1}}function u(n){return!!n.thinking?.trim()&&i(n)}function f(n){let r=[];return n.forEach((e,s)=>{if(i(e))r.push(s)}),r}export{u as isNarrationSummaryBlock,i as isNarrationTaggedBlock,f as narrationBlockIndexes};
