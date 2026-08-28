// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Jk,cm,x,Np}from"./chunk-ns0ekkj0.js";import{a}from"./chunk-g0kfvhx3.js";var o="tengu_violin_pegbox";function n(){return a.CLAUDE_CODE_ENTRYPOINT==="remote_desktop"}async function r(){try{return await Np(o)}catch{return!1}}function i(){try{return x(o,!1)}catch{return!1}}async function l(){try{return await Np("tengu_violin_strad")}catch{return!1}}function u(){try{return x("tengu_violin_strad",!1)}catch{return!1}}async function Kl(){try{return await Np("tengu_violin_wood")&&(!n()||await r())}catch{return!1}}function Hs(){try{return x("tengu_violin_wood",!1)&&(!n()||i())}catch{return!1}}async function kL(){return await Kl()&&await l()}function D1(){return Hs()&&u()}function Uee(){try{let{value:e,source:t}=cm("tengu_violin_wood",!1);return e===!1&&s(t)}catch{return!1}}function s(e){switch(e){case"payload":case"override":case"disabled":return!0;case"fallback":return Jk();case"disk":return!1}}function c(e){return s(cm(e,!1).source)}function w_r(){try{return n()&&x("tengu_violin_wood",!1)?o:"tengu_violin_wood"}catch{return"tengu_violin_wood"}}function E_r(e){try{return c(e)&&(e!=="tengu_violin_wood"||!n()||c(o))}catch{return!1}}async function Mur(){try{return await Np("tengu_violin_amati")}catch{return!1}}function HUt(){try{return x("tengu_violin_amati",!1)}catch{return!1}}function n6e(){return Hs()&&HUt()}async function ADe(){let[e,t]=await Promise.all([Kl(),Mur()]);return e&&t}
export{Kl,Hs,kL,D1,Uee,w_r,E_r,Mur,HUt,n6e,ADe};
