// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-6n7yk222.js";import"./chunk-d8qjp6nk.js";import"./chunk-mtqrv1h8.js";import"./chunk-xg0fb0fx.js";import{h}from"./chunk-p9k2m8jj.js";import"./chunk-59zxrwfh.js";import"./chunk-0rpkhv24.js";import"./chunk-cmg3b5hg.js";import"./chunk-1k8htemc.js";import"./chunk-c413mrzf.js";import{Bl}from"./chunk-4p5sc4j8.js";import"./chunk-1p9ed3jx.js";import{C9n,R9n}from"./chunk-0bet7kef.js";var t=new WeakMap;function i(n){try{if(n.type!=="thinking"||!n.signature)return!1;let r;if(t.has(n))r=t.get(n);else r=R9n(n.signature),t.set(n,r);return r===C9n}catch(r){if(Bl().claim("narration_classifier_error"))h(r);return!1}}function u(n){return!!n.thinking?.trim()&&i(n)}function f(n){let r=[];return n.forEach((e,s)=>{if(i(e))r.push(s)}),r}export{u as isNarrationSummaryBlock,i as isNarrationTaggedBlock,f as narrationBlockIndexes};
