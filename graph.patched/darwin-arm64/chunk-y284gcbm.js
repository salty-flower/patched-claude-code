// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{va,$n,k,h_,U4e,L3}from"./chunk-bk5ct2gw.js";async function n(){try{return await h_("tengu_violin_strad")}catch{return!1}}function t(){try{return k("tengu_violin_strad",!1)}catch{return!1}}async function pR(){try{return await h_("tengu_violin_wood")}catch{return!1}}function xf(){try{return k("tengu_violin_wood",!1)}catch{return!1}}var a="tengu_violin_maple";async function pPt(){try{return await pR()||await U4e(a)}catch{return!1}}function Pf(){try{return xf()||k(a,!1)}catch{return!1}}async function oN(){return await pR()&&await n()}function d$(){return xf()&&t()}function Rde(e){return e?null:"flag_off"}function tB(e){return Rde(e)===null}function hJt(){try{let{value:e,source:o}=$n("tengu_violin_wood",!1);return e===!1&&L3(o)}catch{return!1}}function yJt(){return xf()&&rFs("tengu_violin_wood")}async function Kfo(){let e=performance.now();return await va().catch(()=>null),Math.round(performance.now()-e)}function rFs(e){try{return L3($n(e,!1).source)}catch{return!1}}async function oFs(){try{return await h_("tengu_violin_amati")}catch{return!1}}function PSr(){try{return k("tengu_violin_amati",!1)}catch{return!1}}function _Jt(){return xf()&&PSr()}async function fPt(){let[e,o]=await Promise.all([pR(),oFs()]);return e&&o}
export{pR,xf,pPt,Pf,oN,d$,Rde,tB,hJt,yJt,Kfo,rFs,oFs,PSr,_Jt,fPt};
