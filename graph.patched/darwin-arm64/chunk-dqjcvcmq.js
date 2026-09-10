// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{R,C}from"./chunk-rgs4nrpq.js";import"./chunk-am8gnetv.js";import"./chunk-sgyvc67j.js";import"./chunk-8yfx63va.js";import"./chunk-95e36pja.js";import"./chunk-0yrss36a.js";import"./chunk-z0p50v56.js";import{f}from"./chunk-a25t2bvk.js";import{h}from"./chunk-2rebt4am.js";import"./chunk-wbbe5mtc.js";import"./chunk-g6gcsnnp.js";import"./chunk-kr797g3g.js";import{MYt,CZ,Xe}from"./chunk-qn6hdxd7.js";var D="./SKILL-59d7da6d.md.zst";var E=Xe(D,import.meta.dirname);var H="./payload.template.html.asset";var t="./seed-canvas.mjs-a5d6a8af.txt.zst";var Q=Xe(t,import.meta.dirname);var l=E,A="payload.template.html",I="seed-canvas.mjs";async function x(){let d;try{d=await CZ(H,import.meta.dirname)}catch(P){throw h(P),f("skill_bundled_extract","design_canvas_payload_unreadable"),new R(`design canvas: editor payload unreadable at ${MYt(H,import.meta.dirname)} (${C(P)??"unknown"})`,"design canvas: editor payload unreadable")}return{[A]:d,[I]:Q}}export{A as PAYLOAD_TEMPLATE_FILE,I as SEED_HELPER_FILE,l as SKILL_MD,x as loadSkillFiles};
