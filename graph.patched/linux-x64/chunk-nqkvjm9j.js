// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import"./chunk-x1rrg5j2.js";import"./chunk-jdw11prg.js";import"./chunk-56nvyfje.js";import"./chunk-1mrhsd7s.js";import{h}from"./chunk-6rkpsn9e.js";import"./chunk-058caznt.js";import"./chunk-97tbrkcc.js";import"./chunk-fzpv8ev5.js";import"./chunk-kn2qhfka.js";import"./chunk-xmrr4sh8.js";import"./chunk-ras23w04.js";import{lc}from"./chunk-t387wqyr.js";import"./chunk-gyggj0k8.js";import{_4n,b4n}from"./chunk-kge29183.js";var t=new WeakMap;function i(r){try{if(r.type!=="thinking"||!r.signature)return!1;let n;if(t.has(r))n=t.get(r);else n=b4n(r.signature),t.set(r,n);return n===_4n}catch(n){if(lc().claim("narration_classifier_error"))h(n);return!1}}function o(r){return!!r.thinking?.trim()&&i(r)}export{o as isNarrationSummaryBlock,i as isNarrationTaggedBlock};
