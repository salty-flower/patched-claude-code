// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import"./chunk-hdbxv3pp.js";import"./chunk-5e3knf27.js";import"./chunk-ma94d7pd.js";import"./chunk-gh3qnpny.js";import"./chunk-kzyd0fd4.js";import"./chunk-2avye5sw.js";import{p}from"./chunk-wpdwa7yz.js";import{k,E}from"./chunk-pc7b8z35.js";import{h}from"./chunk-1mtde6n1.js";import"./chunk-t2jwg94b.js";import"./chunk-2cgtbdj1.js";import"./chunk-2mb81hfz.js";import"./chunk-qkcr56w2.js";import{X3t,mJ,nt}from"./chunk-r936w483.js";var D="./SKILL-59d7da6d.md.zst";var t=nt(D,import.meta.dirname);var H="./payload.template.html.asset";var Q="./seed-canvas.mjs-a5d6a8af.txt.zst";var B=nt(Q,import.meta.dirname);var l=t,C="payload.template.html",e="seed-canvas.mjs";async function x(){let d;try{d=await mJ(H,import.meta.dirname)}catch(P){throw h(P),p("skill_bundled_extract","design_canvas_payload_unreadable"),new k(`design canvas: editor payload unreadable at ${X3t(H,import.meta.dirname)} (${E(P)??"unknown"})`,"design canvas: editor payload unreadable")}return{[C]:d,[e]:B}}export{C as PAYLOAD_TEMPLATE_FILE,e as SEED_HELPER_FILE,l as SKILL_MD,x as loadSkillFiles};
