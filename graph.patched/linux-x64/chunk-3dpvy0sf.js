// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{p}from"./chunk-949csv87.js";import"./chunk-8nra9hkj.js";import"./chunk-6arex0x2.js";import"./chunk-m3epja3j.js";import"./chunk-ekgz6skk.js";import"./chunk-wk0rbc8w.js";import"./chunk-h9cj3xp8.js";import"./chunk-2fbnw5gg.js";import"./chunk-jbgr14ef.js";import"./chunk-pbkqy204.js";import"./chunk-cd1a8ced.js";import"./chunk-grpzqw3p.js";import"./chunk-dxktn51d.js";import"./chunk-59xd6a0a.js";import"./chunk-n5v91jc3.js";import"./chunk-nvrstjfg.js";import"./chunk-nt1g7asm.js";import"./chunk-jkcb7qdd.js";import"./chunk-tbekftmt.js";import"./chunk-4ccvyrtz.js";import{Tl}from"./chunk-3sg1dxk4.js";import{Li}from"./chunk-t22b5qx7.js";import{o,oe,T,u}from"./chunk-mqaa2rrp.js";var i=p(()=>u({skills:T(oe()),nextCursor:o().nullish()})),s=p(()=>u({skill:oe()}));function c(t,e){return Li(t.client).request({method:"skills/list",params:e===void 0?{}:{cursor:e}},i(),{timeout:Tl()})}function S(t,e,l){return Li(t.client).request({method:"skills/get",params:{uri:e}},s(),{timeout:Tl(),signal:l?.signal})}export{S as getMcpSkill,c as listMcpSkillPage};
