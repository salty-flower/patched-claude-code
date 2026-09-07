// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import"./chunk-2x3q7cfh.js";import"./chunk-207999qb.js";import"./chunk-h62vxw7j.js";import"./chunk-510m1t2d.js";import"./chunk-an83zrbx.js";import"./chunk-w76kejwn.js";import{f}from"./chunk-0vqzb8ad.js";import{R,A}from"./chunk-h4f48kbj.js";import{h}from"./chunk-27ncq5fr.js";import"./chunk-38sny42z.js";import"./chunk-5ndhfaq9.js";import"./chunk-z5vtnzjg.js";import"./chunk-1wezmyx2.js";import{_4t,qJ,Ke}from"./chunk-fcskxvsh.js";var D="./SKILL-59d7da6d.md.zst";var E=Ke(D,import.meta.dirname);var H="./payload.template.html.asset";var t="./seed-canvas.mjs-a5d6a8af.txt.zst";var Q=Ke(t,import.meta.dirname);var l=E,I="payload.template.html",C="seed-canvas.mjs";async function x(){let d;try{d=await qJ(H,import.meta.dirname)}catch(P){throw h(P),f("skill_bundled_extract","design_canvas_payload_unreadable"),new R(`design canvas: editor payload unreadable at ${_4t(H,import.meta.dirname)} (${A(P)??"unknown"})`,"design canvas: editor payload unreadable")}return{[I]:d,[C]:Q}}export{I as PAYLOAD_TEMPLATE_FILE,C as SEED_HELPER_FILE,l as SKILL_MD,x as loadSkillFiles};
