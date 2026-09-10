// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import"./chunk-cet8na02.js";import"./chunk-3k7pa7mk.js";import"./chunk-wmtek349.js";import"./chunk-awrvr02y.js";import"./chunk-mx473n83.js";import"./chunk-jxvdfgn0.js";import{f}from"./chunk-qc0xda2j.js";import{R,v}from"./chunk-wkyng8j1.js";import{h}from"./chunk-e0gvmsm3.js";import"./chunk-w930ag8r.js";import"./chunk-3kadfzjs.js";import"./chunk-fz55wskw.js";import"./chunk-0v0wzs89.js";import{jKt,iZ,Xe}from"./chunk-4te0azgf.js";var D="./SKILL-59d7da6d.md.zst";var E=Xe(D,import.meta.dirname);var H="./payload.template.html.asset";var t="./seed-canvas.mjs-a5d6a8af.txt.zst";var Q=Xe(t,import.meta.dirname);var N=E,A="payload.template.html",I="seed-canvas.mjs";async function l(){let d;try{d=await iZ(H,import.meta.dirname)}catch(P){throw h(P),f("skill_bundled_extract","design_canvas_payload_unreadable"),new R(`design canvas: editor payload unreadable at ${jKt(H,import.meta.dirname)} (${v(P)??"unknown"})`,"design canvas: editor payload unreadable")}return{[A]:d,[I]:Q}}export{A as PAYLOAD_TEMPLATE_FILE,I as SEED_HELPER_FILE,N as SKILL_MD,l as loadSkillFiles};
