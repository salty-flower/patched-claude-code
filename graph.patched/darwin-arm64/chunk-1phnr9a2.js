// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ZC,um,x,Fp}from"./chunk-ghnc2x4f.js";import{a}from"./chunk-bn8q5mbz.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await Fp(o)}catch{return!1}}function i(){try{return x(o,!1)}catch{return!1}}async function l(){try{return await Fp("tengu_violin_strad")}catch{return!1}}function u(){try{return x("tengu_violin_strad",!1)}catch{return!1}}async function Kl(){try{return await Fp("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function ks(){try{return x("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function AO(){return await Kl()&&await l()}function LN(){return ks()&&u()}function jee(){try{let{value:e,source:t}=um("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return ZC();case"disk":return!1}}function c(e){return s(um(e,!1).source)}function Cbr(){try{return n()&&x("tengu_violin_wood",!1)?o:"tengu_violin_wood"}catch{return"tengu_violin_wood"}}function Abr(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function Lur(){try{return await Fp("tengu_violin_amati")}catch{return!1}}function fBt(){try{return x("tengu_violin_amati",!1)}catch{return!1}}function Qqe(){return ks()&&fBt()}async function THe(){let[e,t]=await Promise.all([Kl(),Lur()]);return e&&t}
export{Kl,ks,AO,LN,jee,Cbr,Abr,Lur,fBt,Qqe,THe};
