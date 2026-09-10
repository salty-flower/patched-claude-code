// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{TT,om,H,Zu}from"./chunk-vryy7b5x.js";import{a}from"./chunk-qymratxs.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await Zu(o)}catch{return!1}}function i(){try{return H(o,!1)}catch{return!1}}async function l(){try{return await Zu("tengu_violin_strad")}catch{return!1}}function u(){try{return H("tengu_violin_strad",!1)}catch{return!1}}async function Ru(){try{return await Zu("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function Xs(){try{return H("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function BL(){return await Ru()&&await l()}function cB(){return Xs()&&u()}function jet(){try{let{value:e,source:t}=om("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return TT();case"disk":return!1}}function c(e){return s(om(e,!1).source)}function wCr(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function cSr(){try{return await Zu("tengu_violin_amati")}catch{return!1}}function D8t(){try{return H("tengu_violin_amati",!1)}catch{return!1}}function Wet(){return Xs()&&D8t()}async function QBe(){let[e,t]=await Promise.all([Ru(),cSr()]);return e&&t}
export{Ru,Xs,BL,cB,jet,wCr,cSr,D8t,Wet,QBe};
