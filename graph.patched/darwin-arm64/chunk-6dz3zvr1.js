// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-ynakaye4.js";import"./chunk-bjnpzyk4.js";import"./chunk-saccfcs4.js";import"./chunk-ny2cqbmq.js";import"./chunk-nre716m4.js";import"./chunk-2ckwvz0j.js";import"./chunk-f66mhvm1.js";import"./chunk-cne7d53x.js";import"./chunk-jrcdjayr.js";import"./chunk-4nyg9560.js";import"./chunk-h422gpw8.js";import"./chunk-esv3b1gm.js";import"./chunk-kpqr86hf.js";import"./chunk-r22r6j92.js";import"./chunk-tdxkq523.js";import"./chunk-pmhx705f.js";import"./chunk-42txhxmf.js";import"./chunk-277zhca1.js";import"./chunk-x352w4g5.js";import"./chunk-4ccvyrtz.js";import{Tl}from"./chunk-fagaehp9.js";import{Li}from"./chunk-c2tga6bg.js";import{o,oe,C,u}from"./chunk-xv841za9.js";var i=f(()=>u({skills:C(oe()),nextCursor:o().nullish()})),s=f(()=>u({skill:oe()}));function a(t,e){return Li(t.client).request({method:"skills/list",params:e===void 0?{}:{cursor:e}},i(),{timeout:Tl()})}function c(t,e,l){return Li(t.client).request({method:"skills/get",params:{uri:e}},s(),{timeout:Tl(),signal:l?.signal})}export{c as getMcpSkill,a as listMcpSkillPage};
