// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import"./chunk-hdbxv3pp.js";import"./chunk-5e3knf27.js";import"./chunk-ma94d7pd.js";import"./chunk-gh3qnpny.js";import{h}from"./chunk-1mtde6n1.js";import"./chunk-pc7b8z35.js";import"./chunk-2avye5sw.js";import"./chunk-t2jwg94b.js";import"./chunk-2cgtbdj1.js";import"./chunk-2mb81hfz.js";import"./chunk-qkcr56w2.js";import{rc}from"./chunk-7hxnyrf7.js";import"./chunk-cacefka0.js";import{I3n,P3n}from"./chunk-vm1s00wa.js";var t=new WeakMap;function i(r){try{if(r.type!=="thinking"||!r.signature)return!1;let n;if(t.has(r))n=t.get(r);else n=P3n(r.signature),t.set(r,n);return n===I3n}catch(n){if(rc().claim("narration_classifier_error"))h(n);return!1}}function o(r){return!!r.thinking?.trim()&&i(r)}export{o as isNarrationSummaryBlock,i as isNarrationTaggedBlock};
