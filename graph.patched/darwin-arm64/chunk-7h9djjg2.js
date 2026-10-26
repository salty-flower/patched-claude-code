// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ti,kn,k,ub,Jnt,Nj}from"./chunk-27xjmczp.js";async function n(){try{return await ub("tengu_violin_strad")}catch{return!1}}function t(){try{return k("tengu_violin_strad",!1)}catch{return!1}}async function oI(){try{return await ub("tengu_violin_wood")}catch{return!1}}function Gm(){try{return k("tengu_violin_wood",!1)}catch{return!1}}var a="tengu_violin_maple";async function vGt(){try{return await oI()||await Jnt(a)}catch{return!1}}function zm(){try{return Gm()||k(a,!1)}catch{return!1}}async function zU(){return await oI()&&await n()}function Sj(){return Gm()&&t()}function A_e(e){return e?null:"flag_off"}function kG(e){return A_e(e)===null}function Utt(){try{let{value:e,source:o}=kn("tengu_violin_wood",!1);return e===!1&&Nj(o)}catch{return!1}}function iyn(){return Gm()&&wbi("tengu_violin_wood")}async function U6o(){let e=performance.now();return await Ti().catch(()=>null),Math.round(performance.now()-e)}function wbi(e){try{return Nj(kn(e,!1).source)}catch{return!1}}async function Ebi(){try{return await ub("tengu_violin_amati")}catch{return!1}}function Ozr(){try{return k("tengu_violin_amati",!1)}catch{return!1}}function ayn(){return Gm()&&Ozr()}async function kGt(){let[e,o]=await Promise.all([oI(),Ebi()]);return e&&o}
export{oI,Gm,vGt,zm,zU,Sj,A_e,kG,Utt,iyn,U6o,wbi,Ebi,Ozr,ayn,kGt};
