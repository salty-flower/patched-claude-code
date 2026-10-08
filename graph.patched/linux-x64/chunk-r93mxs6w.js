// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Na,Wn,T,k_,mKe,Fne}from"./chunk-cxjvwxsa.js";async function n(){try{return await k_("tengu_violin_strad")}catch{return!1}}function t(){try{return T("tengu_violin_strad",!1)}catch{return!1}}async function hC(){try{return await k_("tengu_violin_wood")}catch{return!1}}function lf(){try{return T("tengu_violin_wood",!1)}catch{return!1}}var a="tengu_violin_maple";async function ZTt(){try{return await hC()||await mKe(a)}catch{return!1}}function cf(){try{return lf()||T(a,!1)}catch{return!1}}async function Y0(){return await hC()&&await n()}function GN(){return lf()&&t()}function Tle(e){return e?null:"flag_off"}function MU(e){return Tle(e)===null}function I5t(){try{let{value:e,source:o}=Wn("tengu_violin_wood",!1);return e===!1&&Fne(o)}catch{return!1}}function O5t(){return lf()&&dCs("tengu_violin_wood")}async function Cio(){let e=performance.now();return await Na().catch(()=>null),Math.round(performance.now()-e)}function dCs(e){try{return Fne(Wn(e,!1).source)}catch{return!1}}async function uCs(){try{return await k_("tengu_violin_amati")}catch{return!1}}function smr(){try{return T("tengu_violin_amati",!1)}catch{return!1}}function M5t(){return lf()&&smr()}async function eAt(){let[e,o]=await Promise.all([hC(),uCs()]);return e&&o}
export{hC,lf,ZTt,cf,Y0,GN,Tle,MU,I5t,O5t,Cio,dCs,uCs,smr,M5t,eAt};
