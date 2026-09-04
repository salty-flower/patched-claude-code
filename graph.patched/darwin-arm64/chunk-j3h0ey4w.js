// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import"./chunk-yhfssb7x.js";import"./chunk-h4q6j5r2.js";import"./chunk-0xdcm8sp.js";import"./chunk-p3vjhzt0.js";import{h}from"./chunk-jx9d5yeb.js";import"./chunk-dsb06hq9.js";import"./chunk-g1553wr3.js";import"./chunk-84crg0gy.js";import"./chunk-ty218y69.js";import"./chunk-8nmvz1t1.js";import"./chunk-y5gt0775.js";import{lc}from"./chunk-3nf5pwkc.js";import"./chunk-vt8f332f.js";import{B4n,j4n}from"./chunk-3gdmfqrn.js";var t=new WeakMap;function i(r){try{if(r.type!=="thinking"||!r.signature)return!1;let n;if(t.has(r))n=t.get(r);else n=j4n(r.signature),t.set(r,n);return n===B4n}catch(n){if(lc().claim("narration_classifier_error"))h(n);return!1}}function o(r){return!!r.thinking?.trim()&&i(r)}export{o as isNarrationSummaryBlock,i as isNarrationTaggedBlock};
