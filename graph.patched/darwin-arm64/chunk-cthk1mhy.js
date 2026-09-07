// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{PC,Rm,I,Yu}from"./chunk-n495pc0t.js";import{a}from"./chunk-dq2s4wjn.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await Yu(o)}catch{return!1}}function i(){try{return I(o,!1)}catch{return!1}}async function l(){try{return await Yu("tengu_violin_strad")}catch{return!1}}function u(){try{return I("tengu_violin_strad",!1)}catch{return!1}}async function fu(){try{return await Yu("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function ei(){try{return I("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function TD(){return await fu()&&await l()}function O$(){return ei()&&u()}function gYe(){try{let{value:e,source:t}=Rm("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return PC();case"disk":return!1}}function c(e){return s(Rm(e,!1).source)}function Cgr(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function Rur(){try{return await Yu("tengu_violin_amati")}catch{return!1}}function Gqt(){try{return I("tengu_violin_amati",!1)}catch{return!1}}function hYe(){return ei()&&Gqt()}async function TFe(){let[e,t]=await Promise.all([fu(),Rur()]);return e&&t}
export{fu,ei,TD,O$,gYe,Cgr,Rur,Gqt,hYe,TFe};
