// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{x}from"./chunk-ghnc2x4f.js";import{a}from"./chunk-bn8q5mbz.js";import{b}from"./chunk-w2hwjymv.js";import{Al}from"./chunk-njnrbp4g.js";import{IFt,rzn}from"./chunk-n6558sey.js";var g=2,c=1,l=8,u="narration",Jln="summarized";function f(r){let n;try{n=atob(r)}catch{return}let i=new Uint8Array(n.length);for(let e=0;e<n.length;e++)i[e]=n.charCodeAt(e);let o=IFt(i,g);if(o===void 0)return;let s=IFt(o,c);if(s===void 0)return;return rzn(s,l)}var d;function Y_r(){d=void 0}function xFt(){let r=a.CLAUDE_CODE_SABLE_THRUSH;return r===!0||r!==!1&&(d??=x("tengu_sable_thrush",!1))}var t=new WeakMap;function our(r){try{if(r.type!=="thinking"||!r.signature)return!1;let n;if(t.has(r))n=t.get(r);else n=f(r.signature),t.set(r,n);return n===u}catch(n){if(Al().claim("narration_classifier_error"))b(n);return!1}}function X_r(r){try{if(!r.thinking?.trim())return!1;return our(r)&&xFt()}catch(n){if(Al().claim("narration_classifier_error"))b(n);return!1}}
export{Jln,Y_r,xFt,our,X_r};
