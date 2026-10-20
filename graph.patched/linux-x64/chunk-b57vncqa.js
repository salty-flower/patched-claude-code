// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Mi,bn,k,Pb,qQe,D3}from"./chunk-7p6jp6kj.js";async function n(){try{return await Pb("tengu_violin_strad")}catch{return!1}}function t(){try{return k("tengu_violin_strad",!1)}catch{return!1}}async function Gx(){try{return await Pb("tengu_violin_wood")}catch{return!1}}function ym(){try{return k("tengu_violin_wood",!1)}catch{return!1}}var a="tengu_violin_maple";async function NFt(){try{return await Gx()||await qQe(a)}catch{return!1}}function _m(){try{return ym()||k(a,!1)}catch{return!1}}async function aF(){return await Gx()&&await n()}function AB(){return ym()&&t()}function _ge(e){return e?null:"flag_off"}function yW(e){return _ge(e)===null}function Cdn(){try{let{value:e,source:o}=bn("tengu_violin_wood",!1);return e===!1&&D3(o)}catch{return!1}}function Rdn(){return ym()&&roi("tengu_violin_wood")}async function tLo(){let e=performance.now();return await Mi().catch(()=>null),Math.round(performance.now()-e)}function roi(e){try{return D3(bn(e,!1).source)}catch{return!1}}async function ooi(){try{return await Pb("tengu_violin_amati")}catch{return!1}}function d0r(){try{return k("tengu_violin_amati",!1)}catch{return!1}}function xdn(){return ym()&&d0r()}async function $Ft(){let[e,o]=await Promise.all([Gx(),ooi()]);return e&&o}
export{Gx,ym,NFt,_m,aF,AB,_ge,yW,Cdn,Rdn,tLo,roi,ooi,d0r,xdn,$Ft};
