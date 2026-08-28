// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import"./chunk-g4zaymy2.js";import"./chunk-vpkz5m05.js";import"./chunk-3jdapt8v.js";import"./chunk-jqgad8sa.js";import{f}from"./chunk-wx0zfkp2.js";import"./chunk-v5t1qnj3.js";import{O,C}from"./chunk-e5bq01yj.js";import{b}from"./chunk-w2hwjymv.js";import"./chunk-cmkfpkth.js";import"./chunk-j6bwf1es.js";import"./chunk-8w8hykva.js";import"./chunk-fnn4jyg7.js";import"./chunk-hp9wjta4.js";import"./chunk-9q51f9rr.js";import{ee}from"./chunk-t2kfemrk.js";import{readFile as c}from"fs/promises";import{isAbsolute as d,join as u}from"path";var a=ee("./SKILL-8ebv7th4.md");var e="./payload.template.html.asset";var o=ee("./seed-canvas.mjs-sjsabt6v.txt");var R=a,p="payload.template.html",h="seed-canvas.mjs";async function P(){let t=d(e)?e:u(import.meta.dirname,e),r;try{r=await c(t,"utf8")}catch(n){throw b(n),f("skill_bundled_extract","design_canvas_payload_unreadable"),new O(`design canvas: editor payload unreadable at ${t} (${C(n)??"unknown"})`,"design canvas: editor payload unreadable")}return{[p]:r,[h]:o}}export{p as PAYLOAD_TEMPLATE_FILE,h as SEED_HELPER_FILE,R as SKILL_MD,P as loadSkillFiles};
