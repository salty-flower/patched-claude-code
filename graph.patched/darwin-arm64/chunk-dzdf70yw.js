// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{fv,qm,P,$p}from"./chunk-h6md7820.js";import{a}from"./chunk-pv906ex9.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await $p(o)}catch{return!1}}function i(){try{return P(o,!1)}catch{return!1}}async function l(){try{return await $p("tengu_violin_strad")}catch{return!1}}function u(){try{return P("tengu_violin_strad",!1)}catch{return!1}}async function Ed(){try{return await $p("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function bs(){try{return P("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function MD(){return await Ed()&&await l()}function uU(){return bs()&&u()}function qYe(){try{let{value:e,source:t}=qm("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return fv();case"disk":return!1}}function c(e){return s(qm(e,!1).source)}function kHr(){try{return n()&&P("tengu_violin_wood",!1)?o:"tengu_violin_wood"}catch{return"tengu_violin_wood"}}function xHr(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function Twr(){try{return await $p("tengu_violin_amati")}catch{return!1}}function S4t(){try{return P("tengu_violin_amati",!1)}catch{return!1}}function zYe(){return bs()&&S4t()}async function AFe(){let[e,t]=await Promise.all([Ed(),Twr()]);return e&&t}
export{Ed,bs,MD,uU,qYe,kHr,xHr,Twr,S4t,zYe,AFe};
