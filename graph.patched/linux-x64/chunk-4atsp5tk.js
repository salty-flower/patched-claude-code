// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import"./chunk-30zk17wm.js";import"./chunk-7s3c5qqq.js";import"./chunk-rv2kd9jf.js";import{h}from"./chunk-ma4xtxwv.js";import"./chunk-d7ejrssq.js";import"./chunk-r1b219q3.js";import"./chunk-efckqwp7.js";import"./chunk-d0cr5d2v.js";import"./chunk-sgsf5yd5.js";import"./chunk-bvdq8tnt.js";import"./chunk-764j5mtt.js";import{fc}from"./chunk-ywzm9s7r.js";import"./chunk-j97nragx.js";import{mzn,gzn}from"./chunk-1wv3s0w5.js";import"./chunk-6c8t6gsc.js";import"./chunk-er188mb2.js";var t=new WeakMap;function i(r){try{if(r.type!=="thinking"||!r.signature)return!1;let n;if(t.has(r))n=t.get(r);else n=gzn(r.signature),t.set(r,n);return n===mzn}catch(n){if(fc().claim("narration_classifier_error"))h(n);return!1}}function o(r){return!!r.thinking?.trim()&&i(r)}export{o as isNarrationSummaryBlock,i as isNarrationTaggedBlock};
