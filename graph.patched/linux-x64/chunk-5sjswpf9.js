// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import"./chunk-2vv5hpw3.js";import"./chunk-gqqx2ybk.js";import"./chunk-cvykgfry.js";import"./chunk-gt4btdxr.js";import{f}from"./chunk-v1ap59a1.js";import"./chunk-hjxpwbhy.js";import{L,k}from"./chunk-7h2h1m4y.js";import{_}from"./chunk-6ce4s97h.js";import"./chunk-akz0cj0f.js";import"./chunk-xj8gnzar.js";import"./chunk-qkpfba5t.js";import"./chunk-m09j9ze8.js";import"./chunk-2h7wbm8s.js";import"./chunk-9q51f9rr.js";import{ee}from"./chunk-by569dsf.js";import{readFile as c}from"fs/promises";import{isAbsolute as d,join as u}from"path";var a=ee("./SKILL-8ebv7th4.md");var e="./payload.template.html.asset";var o=ee("./seed-canvas.mjs-sjsabt6v.txt");var T=a,p="payload.template.html",h="seed-canvas.mjs";async function R(){let t=d(e)?e:u(import.meta.dirname,e),r;try{r=await c(t,"utf8")}catch(n){throw _(n),f("skill_bundled_extract","design_canvas_payload_unreadable"),new L(`design canvas: editor payload unreadable at ${t} (${k(n)??"unknown"})`,"design canvas: editor payload unreadable")}return{[p]:r,[h]:o}}export{p as PAYLOAD_TEMPLATE_FILE,h as SEED_HELPER_FILE,T as SKILL_MD,R as loadSkillFiles};
