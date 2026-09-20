// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{kb,qp,P,Qd}from"./chunk-30p0nwys.js";import{a}from"./chunk-q2vrcqny.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await Qd(o)}catch{return!1}}function i(){try{return P(o,!1)}catch{return!1}}async function l(){try{return await Qd("tengu_violin_strad")}catch{return!1}}function u(){try{return P("tengu_violin_strad",!1)}catch{return!1}}async function ad(){try{return await Qd("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function Ii(){try{return P("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function J$(){return await ad()&&await l()}function zz(){return Ii()&&u()}function Jpt(){try{let{value:e,source:t}=qp("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return kb();case"disk":return!1}}function c(e){return s(qp(e,!1).source)}function w5r(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function dqr(){try{return await Qd("tengu_violin_amati")}catch{return!1}}function Udn(){try{return P("tengu_violin_amati",!1)}catch{return!1}}function Qpt(){return Ii()&&Udn()}async function Q3e(){let[e,t]=await Promise.all([ad(),dqr()]);return e&&t}
export{ad,Ii,J$,zz,Jpt,w5r,dqr,Udn,Qpt,Q3e};
