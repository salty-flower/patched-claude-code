// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Fa,Wn,C,C_,wqe,zne}from"./chunk-gcyvvtkw.js";async function n(){try{return await C_("tengu_violin_strad")}catch{return!1}}function t(){try{return C("tengu_violin_strad",!1)}catch{return!1}}async function ST(){try{return await C_("tengu_violin_wood")}catch{return!1}}function lf(){try{return C("tengu_violin_wood",!1)}catch{return!1}}var a="tengu_violin_maple";async function pAt(){try{return await ST()||await wqe(a)}catch{return!1}}function cf(){try{return lf()||C(a,!1)}catch{return!1}}async function ZD(){return await ST()&&await n()}function JN(){return lf()&&t()}function Hle(e){return e?null:"flag_off"}function W1(e){return Hle(e)===null}function K9t(){try{let{value:e,source:o}=Wn("tengu_violin_wood",!1);return e===!1&&zne(o)}catch{return!1}}function Y9t(){return lf()&&qTs("tengu_violin_wood")}async function nao(){let e=performance.now();return await Fa().catch(()=>null),Math.round(performance.now()-e)}function qTs(e){try{return zne(Wn(e,!1).source)}catch{return!1}}async function KTs(){try{return await C_("tengu_violin_amati")}catch{return!1}}function Tmr(){try{return C("tengu_violin_amati",!1)}catch{return!1}}function X9t(){return lf()&&Tmr()}async function fAt(){let[e,o]=await Promise.all([ST(),KTs()]);return e&&o}
export{ST,lf,pAt,cf,ZD,JN,Hle,W1,K9t,Y9t,nao,qTs,KTs,Tmr,X9t,fAt};
