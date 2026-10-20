// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Mi,Sn,k,IS,tQe,W9}from"./chunk-bvn0epzr.js";async function n(){try{return await IS("tengu_violin_strad")}catch{return!1}}function t(){try{return k("tengu_violin_strad",!1)}catch{return!1}}async function Kx(){try{return await IS("tengu_violin_wood")}catch{return!1}}function ym(){try{return k("tengu_violin_wood",!1)}catch{return!1}}var a="tengu_violin_maple";async function nUt(){try{return await Kx()||await tQe(a)}catch{return!1}}function _m(){try{return ym()||k(a,!1)}catch{return!1}}async function m$(){return await Kx()&&await n()}function M1(){return ym()&&t()}function Rge(e){return e?null:"flag_off"}function TW(e){return Rge(e)===null}function Qdn(){try{let{value:e,source:o}=Sn("tengu_violin_wood",!1);return e===!1&&W9(o)}catch{return!1}}function Zdn(){return ym()&&Woi("tengu_violin_wood")}async function jDo(){let e=performance.now();return await Mi().catch(()=>null),Math.round(performance.now()-e)}function Woi(e){try{return W9(Sn(e,!1).source)}catch{return!1}}async function Goi(){try{return await IS("tengu_violin_amati")}catch{return!1}}function QLr(){try{return k("tengu_violin_amati",!1)}catch{return!1}}function ecn(){return ym()&&QLr()}async function rUt(){let[e,o]=await Promise.all([Kx(),Goi()]);return e&&o}
export{Kx,ym,nUt,_m,m$,M1,Rge,TW,Qdn,Zdn,jDo,Woi,Goi,QLr,ecn,rUt};
