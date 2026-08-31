// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{oA,Nm,x,$f}from"./chunk-1e5y3pjf.js";import{a}from"./chunk-m9gbfvns.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await $f(o)}catch{return!1}}function i(){try{return x(o,!1)}catch{return!1}}async function l(){try{return await $f("tengu_violin_strad")}catch{return!1}}function u(){try{return x("tengu_violin_strad",!1)}catch{return!1}}async function Ec(){try{return await $f("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function Ws(){try{return x("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function Z0(){return await Ec()&&await l()}function lB(){return Ws()&&u()}function sre(){try{let{value:e,source:t}=Nm("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return oA();case"disk":return!1}}function c(e){return s(Nm(e,!1).source)}function tTr(){try{return n()&&x("tengu_violin_wood",!1)?o:"tengu_violin_wood"}catch{return"tengu_violin_wood"}}function nTr(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function V_r(){try{return await $f("tengu_violin_amati")}catch{return!1}}function QWt(){try{return x("tengu_violin_amati",!1)}catch{return!1}}function A6e(){return Ws()&&QWt()}async function hMe(){let[e,t]=await Promise.all([Ec(),V_r()]);return e&&t}
export{Ec,Ws,Z0,lB,sre,tTr,nTr,V_r,QWt,A6e,hMe};
