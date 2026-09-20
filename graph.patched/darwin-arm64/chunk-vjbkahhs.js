// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{x,C}from"./chunk-qq9jq5dz.js";import"./chunk-k6smmjsm.js";import"./chunk-sgamszzq.js";import"./chunk-vx7e38ke.js";import"./chunk-n93bke93.js";import"./chunk-q2h0fawe.js";import"./chunk-jxv3x25k.js";import{p}from"./chunk-4akrhkry.js";import{g}from"./chunk-vzm3bfp5.js";import"./chunk-qmm87fyw.js";import"./chunk-jxdnn2j1.js";import"./chunk-pfxvy4ay.js";import{jun,Hoe,Qe}from"./chunk-n5ehe625.js";var D="./SKILL-59d7da6d.md.zst";var E=Qe(D,import.meta.dirname);var H="./payload.template.html.asset";var t="./seed-canvas.mjs-a5d6a8af.txt.zst";var Q=Qe(t,import.meta.dirname);var N=E,I="payload.template.html",e="seed-canvas.mjs";async function l(){let d;try{d=await Hoe(H,import.meta.dirname)}catch(P){throw g(P),p("skill_bundled_extract","design_canvas_payload_unreadable"),new x(`design canvas: editor payload unreadable at ${jun(H,import.meta.dirname)} (${C(P)??"unknown"})`,"design canvas: editor payload unreadable")}return{[I]:d,[e]:Q}}export{I as PAYLOAD_TEMPLATE_FILE,e as SEED_HELPER_FILE,N as SKILL_MD,l as loadSkillFiles};
