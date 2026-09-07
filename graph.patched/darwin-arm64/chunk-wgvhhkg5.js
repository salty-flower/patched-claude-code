// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import"./chunk-zhtwayh2.js";import"./chunk-fkz3e4t3.js";import"./chunk-7wmynp0n.js";import"./chunk-r5q3158s.js";import{h}from"./chunk-c5ajdz5z.js";import"./chunk-084v19yj.js";import"./chunk-gnrvsty9.js";import"./chunk-5q90j22t.js";import"./chunk-4rr1ghkj.js";import"./chunk-643msr15.js";import"./chunk-j317bre5.js";import{Kl}from"./chunk-tapqtxqw.js";import"./chunk-txrdhdjc.js";import{Ijn,Pjn}from"./chunk-eybvc16j.js";var t=new WeakMap;function i(n){try{if(n.type!=="thinking"||!n.signature)return!1;let r;if(t.has(n))r=t.get(n);else r=Pjn(n.signature),t.set(n,r);return r===Ijn}catch(r){if(Kl().claim("narration_classifier_error"))h(r);return!1}}function u(n){return!!n.thinking?.trim()&&i(n)}function f(n){let r=[];return n.forEach((e,s)=>{if(i(e))r.push(s)}),r}export{u as isNarrationSummaryBlock,i as isNarrationTaggedBlock,f as narrationBlockIndexes};
