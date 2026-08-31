// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{oA,$m,I,Lp}from"./chunk-bsdtxcdc.js";import{a}from"./chunk-w3k8bej2.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await Lp(o)}catch{return!1}}function i(){try{return I(o,!1)}catch{return!1}}async function l(){try{return await Lp("tengu_violin_strad")}catch{return!1}}function u(){try{return I("tengu_violin_strad",!1)}catch{return!1}}async function Ec(){try{return await Lp("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function Gs(){try{return I("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function ZD(){return await Ec()&&await l()}function u$(){return Gs()&&u()}function are(){try{let{value:e,source:t}=$m("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return oA();case"disk":return!1}}function c(e){return s($m(e,!1).source)}function oRr(){try{return n()&&I("tengu_violin_wood",!1)?o:"tengu_violin_wood"}catch{return"tengu_violin_wood"}}function iRr(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function zyr(){try{return await Lp("tengu_violin_amati")}catch{return!1}}function L9t(){try{return I("tengu_violin_amati",!1)}catch{return!1}}function b8e(){return Gs()&&L9t()}async function mMe(){let[e,t]=await Promise.all([Ec(),zyr()]);return e&&t}
export{Ec,Gs,ZD,u$,are,oRr,iRr,zyr,L9t,b8e,mMe};
