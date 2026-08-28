// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{D_c as w,w_c as h}from"./_780.js";import"./_814.js";import{Ged as f,Oed as y}from"./_816.js";import"./_820.js";import"./_821.js";import"./_822.js";import"./_823.js";import"./_824.js";import"./_825.js";import"./_826.js";import"./_827.js";import"./_828.js";import"./_829.js";import{Gud as u,Nud as p,zvd as v}from"./_831.js";import"./_832.js";import"./_833.js";import"./_834.js";import"./_835.js";import"./_836.js";import{Axd as o,xxd as e}from"./_837.js";var l;var i=e(()=>{l=o("./SKILL-8bdpvcbd.md")});var t="./payload.template.html.asset";var s=()=>{};var d;var c=e(()=>{d=o("./seed-canvas.mjs-sjsabt6v.txt")});import{readFile as x}from"fs/promises";import{isAbsolute as k,join as S}from"path";async function B(){let r=k(t)?t:S(import.meta.dirname,t),n;try{n=await x(r,"utf8")}catch(a){throw f(a),h("skill_bundled_extract","design_canvas_payload_unreadable"),new u(`design canvas: editor payload unreadable at ${r} (${p(a)??"unknown"})`,"design canvas: editor payload unreadable")}return{[E]:n,[C]:d}}var F,E="payload.template.html",C="seed-canvas.mjs";var A=e(()=>{w();v();y();i();s();c();F=l});A();export{E as PAYLOAD_TEMPLATE_FILE,C as SEED_HELPER_FILE,F as SKILL_MD,B as loadSkillFiles};
