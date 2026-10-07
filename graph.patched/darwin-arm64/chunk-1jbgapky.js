// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Pa,gr,k,o_,x6e,bte}from"./chunk-s46qgfx7.js";async function n(){try{return await o_("tengu_violin_strad")}catch{return!1}}function War(){try{return k("tengu_violin_strad",!1)}catch{return!1}}async function UA(){try{return await o_("tengu_violin_wood")}catch{return!1}}function up(){try{return k("tengu_violin_wood",!1)}catch{return!1}}var t="tengu_violin_maple";async function WEt(){try{return await UA()||await x6e(t)}catch{return!1}}function Jp(){try{return up()||k(t,!1)}catch{return!1}}async function TR(){return await UA()&&await n()}function lO(){return up()&&War()}function Jie(e){return e?null:"flag_off"}function Q$(e){return Jie(e)===null}function VKt(){try{let{value:e,source:o}=gr("tengu_violin_wood",!1);return e===!1&&bte(o)}catch{return!1}}function qKt(){return up()&&o_s("tengu_violin_wood")}async function KQr(){let e=performance.now();return await Pa().catch(()=>null),Math.round(performance.now()-e)}function o_s(e){try{return bte(gr(e,!1).source)}catch{return!1}}async function s_s(){try{return await o_("tengu_violin_amati")}catch{return!1}}function Gar(){try{return k("tengu_violin_amati",!1)}catch{return!1}}function KKt(){return up()&&Gar()}async function GEt(){let[e,o]=await Promise.all([UA(),s_s()]);return e&&o}
export{War,UA,up,WEt,Jp,TR,lO,Jie,Q$,VKt,qKt,KQr,o_s,s_s,Gar,KKt,GEt};
