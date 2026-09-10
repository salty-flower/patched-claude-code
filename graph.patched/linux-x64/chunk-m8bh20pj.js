// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{LT,Om,I,ed}from"./chunk-ce4ppmnp.js";import{a}from"./chunk-1bwwmttj.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await ed(o)}catch{return!1}}function i(){try{return I(o,!1)}catch{return!1}}async function l(){try{return await ed("tengu_violin_strad")}catch{return!1}}function u(){try{return I("tengu_violin_strad",!1)}catch{return!1}}async function Iu(){try{return await ed("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function ri(){try{return I("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function GD(){return await Iu()&&await l()}function k1(){return ri()&&u()}function rnt(){try{let{value:e,source:t}=Om("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return LT();case"disk":return!1}}function c(e){return s(Om(e,!1).source)}function YCr(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function Avr(){try{return await ed("tengu_violin_amati")}catch{return!1}}function uXt(){try{return I("tengu_violin_amati",!1)}catch{return!1}}function ont(){return ri()&&uXt()}async function c2e(){let[e,t]=await Promise.all([Iu(),Avr()]);return e&&t}
export{Iu,ri,GD,k1,rnt,YCr,Avr,uXt,ont,c2e};
