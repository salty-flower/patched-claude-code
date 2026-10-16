// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{qi,kn,k,db,jXe,j5}from"./chunk-k16gymf7.js";async function n(){try{return await db("tengu_violin_strad")}catch{return!1}}function t(){try{return k("tengu_violin_strad",!1)}catch{return!1}}async function hx(){try{return await db("tengu_violin_wood")}catch{return!1}}function Jf(){try{return k("tengu_violin_wood",!1)}catch{return!1}}var a="tengu_violin_maple";async function OLt(){try{return await hx()||await jXe(a)}catch{return!1}}function Qf(){try{return Jf()||k(a,!1)}catch{return!1}}async function T$(){return await hx()&&await n()}function DU(){return Jf()&&t()}function Xfe(e){return e?null:"flag_off"}function Lj(e){return Xfe(e)===null}function _sn(){try{let{value:e,source:o}=kn("tengu_violin_wood",!1);return e===!1&&j5(o)}catch{return!1}}function bsn(){return Jf()&&m8s("tengu_violin_wood")}async function WCo(){let e=performance.now();return await qi().catch(()=>null),Math.round(performance.now()-e)}function m8s(e){try{return j5(kn(e,!1).source)}catch{return!1}}async function g8s(){try{return await db("tengu_violin_amati")}catch{return!1}}function qPr(){try{return k("tengu_violin_amati",!1)}catch{return!1}}function Ssn(){return Jf()&&qPr()}async function MLt(){let[e,o]=await Promise.all([hx(),g8s()]);return e&&o}
export{hx,Jf,OLt,Qf,T$,DU,Xfe,Lj,_sn,bsn,WCo,m8s,g8s,qPr,Ssn,MLt};
