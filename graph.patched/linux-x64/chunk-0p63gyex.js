// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{R,A}from"./chunk-59zxrwfh.js";import"./chunk-0rpkhv24.js";import"./chunk-6n7yk222.js";import"./chunk-d8qjp6nk.js";import"./chunk-mtqrv1h8.js";import"./chunk-xg0fb0fx.js";import"./chunk-nx6yj2w6.js";import{f}from"./chunk-t5df5mky.js";import{h}from"./chunk-p9k2m8jj.js";import"./chunk-cmg3b5hg.js";import"./chunk-1k8htemc.js";import"./chunk-c413mrzf.js";import{yYt,_Z,Xe}from"./chunk-jv6naa95.js";var D="./SKILL-59d7da6d.md.zst";var E=Xe(D,import.meta.dirname);var H="./payload.template.html.asset";var t="./seed-canvas.mjs-a5d6a8af.txt.zst";var Q=Xe(t,import.meta.dirname);var l=E,I="payload.template.html",C="seed-canvas.mjs";async function x(){let d;try{d=await _Z(H,import.meta.dirname)}catch(P){throw h(P),f("skill_bundled_extract","design_canvas_payload_unreadable"),new R(`design canvas: editor payload unreadable at ${yYt(H,import.meta.dirname)} (${A(P)??"unknown"})`,"design canvas: editor payload unreadable")}return{[I]:d,[C]:Q}}export{I as PAYLOAD_TEMPLATE_FILE,C as SEED_HELPER_FILE,l as SKILL_MD,x as loadSkillFiles};
