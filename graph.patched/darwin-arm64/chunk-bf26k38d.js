// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{FT,Mm,H,td}from"./chunk-e02s7cks.js";import{a}from"./chunk-dv6tepz3.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await td(o)}catch{return!1}}function i(){try{return H(o,!1)}catch{return!1}}async function l(){try{return await td("tengu_violin_strad")}catch{return!1}}function u(){try{return H("tengu_violin_strad",!1)}catch{return!1}}async function Pu(){try{return await td("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function ri(){try{return H("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function eM(){return await Pu()&&await l()}function DB(){return ri()&&u()}function _nt(){try{let{value:e,source:t}=Mm("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return FT();case"disk":return!1}}function c(e){return s(Mm(e,!1).source)}function LRr(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function uAr(){try{return await td("tengu_violin_amati")}catch{return!1}}function P7t(){try{return H("tengu_violin_amati",!1)}catch{return!1}}function Snt(){return ri()&&P7t()}async function wje(){let[e,t]=await Promise.all([Pu(),uAr()]);return e&&t}
export{Pu,ri,eM,DB,_nt,LRr,uAr,P7t,Snt,wje};
