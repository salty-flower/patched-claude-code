// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{x,A}from"./chunk-cnzbk8gg.js";import"./chunk-p9tbyvzw.js";import"./chunk-txfrkyzp.js";import"./chunk-gj513b2z.js";import"./chunk-qztrb7e5.js";import"./chunk-d3xvzk7s.js";import"./chunk-5a4y4a7y.js";import{p}from"./chunk-61g2sn1g.js";import{m}from"./chunk-kh3dq6rw.js";import"./chunk-847hpqqs.js";import"./chunk-k4wnp212.js";import"./chunk-hdk9febf.js";import{wun,koe,Qe}from"./chunk-a2dk9psf.js";var D="./SKILL-59d7da6d.md.zst";var E=Qe(D,import.meta.dirname);var H="./payload.template.html.asset";var t="./seed-canvas.mjs-a5d6a8af.txt.zst";var Q=Qe(t,import.meta.dirname);var N=E,C="payload.template.html",e="seed-canvas.mjs";async function l(){let d;try{d=await koe(H,import.meta.dirname)}catch(P){throw m(P),p("skill_bundled_extract","design_canvas_payload_unreadable"),new x(`design canvas: editor payload unreadable at ${wun(H,import.meta.dirname)} (${A(P)??"unknown"})`,"design canvas: editor payload unreadable")}return{[C]:d,[e]:Q}}export{C as PAYLOAD_TEMPLATE_FILE,e as SEED_HELPER_FILE,N as SKILL_MD,l as loadSkillFiles};
