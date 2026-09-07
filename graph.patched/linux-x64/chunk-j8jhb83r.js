// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Rv,vm,x,Yu}from"./chunk-3e93vkg3.js";import{a}from"./chunk-td8fcebs.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await Yu(o)}catch{return!1}}function i(){try{return x(o,!1)}catch{return!1}}async function l(){try{return await Yu("tengu_violin_strad")}catch{return!1}}function u(){try{return x("tengu_violin_strad",!1)}catch{return!1}}async function du(){try{return await Yu("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function ei(){try{return x("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function m0(){return await du()&&await l()}function AB(){return ei()&&u()}function rJe(){try{let{value:e,source:t}=vm("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return Rv();case"disk":return!1}}function c(e){return s(vm(e,!1).source)}function Umr(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function Ucr(){try{return await Yu("tengu_violin_amati")}catch{return!1}}function xKt(){try{return x("tengu_violin_amati",!1)}catch{return!1}}function oJe(){return ei()&&xKt()}async function fFe(){let[e,t]=await Promise.all([du(),Ucr()]);return e&&t}
export{du,ei,m0,AB,rJe,Umr,Ucr,xKt,oJe,fFe};
