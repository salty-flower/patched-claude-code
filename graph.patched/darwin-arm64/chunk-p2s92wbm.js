// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import"./chunk-38213y7h.js";import"./chunk-5b2g0bc6.js";import"./chunk-tey8avmn.js";import{h}from"./chunk-qpcjd2zp.js";import"./chunk-92vbp1ze.js";import"./chunk-9rhc0mtn.js";import"./chunk-qr1avfxy.js";import"./chunk-ynzt0fm1.js";import"./chunk-4j4893mq.js";import"./chunk-1jtqmqar.js";import"./chunk-04aem4bh.js";import{pc}from"./chunk-d1vv8xeh.js";import"./chunk-cvkyvbn7.js";import{Sjn,bjn}from"./chunk-n2xg3dk3.js";import"./chunk-snzr790g.js";import"./chunk-6c8t6gsc.js";var t=new WeakMap;function i(r){try{if(r.type!=="thinking"||!r.signature)return!1;let n;if(t.has(r))n=t.get(r);else n=bjn(r.signature),t.set(r,n);return n===Sjn}catch(n){if(pc().claim("narration_classifier_error"))h(n);return!1}}function o(r){return!!r.thinking?.trim()&&i(r)}export{o as isNarrationSummaryBlock,i as isNarrationTaggedBlock};
