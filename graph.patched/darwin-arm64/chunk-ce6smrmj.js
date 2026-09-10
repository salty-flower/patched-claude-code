// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-sgyvc67j.js";import"./chunk-8yfx63va.js";import"./chunk-95e36pja.js";import"./chunk-0yrss36a.js";import{h}from"./chunk-2rebt4am.js";import"./chunk-rgs4nrpq.js";import"./chunk-am8gnetv.js";import"./chunk-wbbe5mtc.js";import"./chunk-g6gcsnnp.js";import"./chunk-kr797g3g.js";import{Bl}from"./chunk-vhea07bt.js";import"./chunk-cfbjp56b.js";import{oYn,sYn}from"./chunk-4a3s9xge.js";var t=new WeakMap;function i(n){try{if(n.type!=="thinking"||!n.signature)return!1;let r;if(t.has(n))r=t.get(n);else r=sYn(n.signature),t.set(n,r);return r===oYn}catch(r){if(Bl().claim("narration_classifier_error"))h(r);return!1}}function u(n){return!!n.thinking?.trim()&&i(n)}function f(n){let r=[];return n.forEach((e,s)=>{if(i(e))r.push(s)}),r}export{u as isNarrationSummaryBlock,i as isNarrationTaggedBlock,f as narrationBlockIndexes};
