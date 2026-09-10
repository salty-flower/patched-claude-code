// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import"./chunk-t8q7n4ta.js";import"./chunk-a7esebzw.js";import"./chunk-m3k3498d.js";import"./chunk-rfvh2b8a.js";import"./chunk-74qghvre.js";import"./chunk-vkfaczp9.js";import{f}from"./chunk-dzyeyv65.js";import{R,A}from"./chunk-vfrpernt.js";import{h}from"./chunk-jvycdhmw.js";import"./chunk-fy3j7rz0.js";import"./chunk-qsnhycbm.js";import"./chunk-xdb7bs7g.js";import"./chunk-xj9n0xxp.js";import{w8t,ZQ,Xe}from"./chunk-c0hx3sz2.js";var D="./SKILL-59d7da6d.md.zst";var E=Xe(D,import.meta.dirname);var H="./payload.template.html.asset";var t="./seed-canvas.mjs-a5d6a8af.txt.zst";var Q=Xe(t,import.meta.dirname);var l=E,I="payload.template.html",C="seed-canvas.mjs";async function x(){let d;try{d=await ZQ(H,import.meta.dirname)}catch(P){throw h(P),f("skill_bundled_extract","design_canvas_payload_unreadable"),new R(`design canvas: editor payload unreadable at ${w8t(H,import.meta.dirname)} (${A(P)??"unknown"})`,"design canvas: editor payload unreadable")}return{[I]:d,[C]:Q}}export{I as PAYLOAD_TEMPLATE_FILE,C as SEED_HELPER_FILE,l as SKILL_MD,x as loadSkillFiles};
