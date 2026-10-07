// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{xa,gr,T,r_,v2e,fte}from"./chunk-m0sj7y8g.js";async function n(){try{return await r_("tengu_violin_strad")}catch{return!1}}function Sar(){try{return T("tengu_violin_strad",!1)}catch{return!1}}async function NA(){try{return await r_("tengu_violin_wood")}catch{return!1}}function up(){try{return T("tengu_violin_wood",!1)}catch{return!1}}var t="tengu_violin_maple";async function Pvt(){try{return await NA()||await v2e(t)}catch{return!1}}function Jp(){try{return up()||T(t,!1)}catch{return!1}}async function ER(){return await NA()&&await n()}function sO(){return up()&&Sar()}function Wie(e){return e?null:"flag_off"}function jF(e){return Wie(e)===null}function x4t(){try{let{value:e,source:o}=gr("tengu_violin_wood",!1);return e===!1&&fte(o)}catch{return!1}}function P4t(){return up()&&wys("tengu_violin_wood")}async function b7r(){let e=performance.now();return await xa().catch(()=>null),Math.round(performance.now()-e)}function wys(e){try{return fte(gr(e,!1).source)}catch{return!1}}async function vys(){try{return await r_("tengu_violin_amati")}catch{return!1}}function war(){try{return T("tengu_violin_amati",!1)}catch{return!1}}function I4t(){return up()&&war()}async function Ivt(){let[e,o]=await Promise.all([NA(),vys()]);return e&&o}
export{Sar,NA,up,Pvt,Jp,ER,sO,Wie,jF,x4t,P4t,b7r,wys,vys,war,I4t,Ivt};
