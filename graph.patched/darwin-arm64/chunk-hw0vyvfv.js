// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Cv,kg,P,Ku}from"./chunk-vtwn1md5.js";import{a}from"./chunk-g2ngvza5.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await Ku(o)}catch{return!1}}function i(){try{return P(o,!1)}catch{return!1}}async function l(){try{return await Ku("tengu_violin_strad")}catch{return!1}}function u(){try{return P("tengu_violin_strad",!1)}catch{return!1}}async function Ru(){try{return await Ku("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function ds(){try{return P("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function XD(){return await Ru()&&await l()}function HU(){return ds()&&u()}function wQe(){try{let{value:e,source:t}=kg("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return Cv();case"disk":return!1}}function c(e){return s(kg(e,!1).source)}function bOr(){try{return n()&&P("tengu_violin_wood",!1)?o:"tengu_violin_wood"}catch{return"tengu_violin_wood"}}function wOr(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function rvr(){try{return await Ku("tengu_violin_amati")}catch{return!1}}function kVt(){try{return P("tengu_violin_amati",!1)}catch{return!1}}function TQe(){return ds()&&kVt()}async function eUe(){let[e,t]=await Promise.all([Ru(),rvr()]);return e&&t}
export{Ru,ds,XD,HU,wQe,bOr,wOr,rvr,kVt,TQe,eUe};
