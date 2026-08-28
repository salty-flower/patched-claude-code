// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{$$c as w,U$c as h}from"./_796.js";import"./_800.js";import{Qcd as f,Ycd as y}from"./_802.js";import"./_806.js";import"./_807.js";import"./_808.js";import"./_809.js";import"./_810.js";import"./_811.js";import"./_812.js";import"./_813.js";import"./_814.js";import"./_815.js";import"./_825.js";import{$ud as p,Nvd as v,Uud as u}from"./_834.js";import"./_835.js";import"./_836.js";import"./_837.js";import"./_838.js";import{Exd as e,Hxd as o}from"./_839.js";var l;var i=e(()=>{l=o("./SKILL-8bdpvcbd.md")});var t="./payload.template.html.asset";var s=()=>{};var d;var c=e(()=>{d=o("./seed-canvas.mjs-sjsabt6v.txt")});import{readFile as x}from"fs/promises";import{isAbsolute as k,join as S}from"path";async function B(){let r=k(t)?t:S(import.meta.dirname,t),n;try{n=await x(r,"utf8")}catch(a){throw f(a),h("skill_bundled_extract","design_canvas_payload_unreadable"),new u(`design canvas: editor payload unreadable at ${r} (${p(a)??"unknown"})`,"design canvas: editor payload unreadable")}return{[E]:n,[C]:d}}var F,E="payload.template.html",C="seed-canvas.mjs";var A=e(()=>{w();v();y();i();s();c();F=l});A();export{E as PAYLOAD_TEMPLATE_FILE,C as SEED_HELPER_FILE,F as SKILL_MD,B as loadSkillFiles};
