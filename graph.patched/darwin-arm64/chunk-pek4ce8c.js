// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ki,kn,k,cS,YXe,X5}from"./chunk-1901fdh6.js";async function n(){try{return await cS("tengu_violin_strad")}catch{return!1}}function t(){try{return k("tengu_violin_strad",!1)}catch{return!1}}async function Sx(){try{return await cS("tengu_violin_wood")}catch{return!1}}function Jf(){try{return k("tengu_violin_wood",!1)}catch{return!1}}var a="tengu_violin_maple";async function QLt(){try{return await Sx()||await YXe(a)}catch{return!1}}function Qf(){try{return Jf()||k(a,!1)}catch{return!1}}async function OF(){return await Sx()&&await n()}function jU(){return Jf()&&t()}function sme(e){return e?null:"flag_off"}function zj(e){return sme(e)===null}function Wsn(){try{let{value:e,source:o}=kn("tengu_violin_wood",!1);return e===!1&&X5(o)}catch{return!1}}function Gsn(){return Jf()&&eYs("tengu_violin_wood")}async function RRo(){let e=performance.now();return await Ki().catch(()=>null),Math.round(performance.now()-e)}function eYs(e){try{return X5(kn(e,!1).source)}catch{return!1}}async function tYs(){try{return await cS("tengu_violin_amati")}catch{return!1}}function LIr(){try{return k("tengu_violin_amati",!1)}catch{return!1}}function zsn(){return Jf()&&LIr()}async function ZLt(){let[e,o]=await Promise.all([Sx(),tYs()]);return e&&o}
export{Sx,Jf,QLt,Qf,OF,jU,sme,zj,Wsn,Gsn,RRo,eYs,tYs,LIr,zsn,ZLt};
