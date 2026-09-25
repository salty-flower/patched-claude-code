// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Gh,Ol,x,mp}from"./chunk-twxt3h9y.js";import{a}from"./chunk-3a4khaz5.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await mp(o)}catch{return!1}}function i(){try{return x(o,!1)}catch{return!1}}async function l(){try{return await mp("tengu_violin_strad")}catch{return!1}}function u(){try{return x("tengu_violin_strad",!1)}catch{return!1}}async function Nd(){try{return await mp("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function _s(){try{return x("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function k1(){return await Nd()&&await l()}function Eq(){return _s()&&u()}function RIt(){try{let{value:e,source:t}=Ol("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return Gh();case"disk":return!1}}function c(e){return s(Ol(e,!1).source)}function LFo(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function $0o(){try{return await mp("tengu_violin_amati")}catch{return!1}}function D$n(){try{return x("tengu_violin_amati",!1)}catch{return!1}}function xIt(){return _s()&&D$n()}async function Nst(){let[e,t]=await Promise.all([Nd(),$0o()]);return e&&t}
export{Nd,_s,k1,Eq,RIt,LFo,$0o,D$n,xIt,Nst};
