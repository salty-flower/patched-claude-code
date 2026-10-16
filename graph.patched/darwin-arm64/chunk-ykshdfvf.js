// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{f}from"./chunk-5r64b6x9.js";import"./chunk-3mdayxq0.js";import"./chunk-dnq93t1z.js";import"./chunk-wkh5syvr.js";import"./chunk-54xe5s81.js";import"./chunk-r0a9v21k.js";import"./chunk-6dw7xt0q.js";import"./chunk-yh19hj71.js";import"./chunk-k4g6y57j.js";import"./chunk-bkygtq8f.js";import"./chunk-xzypj06m.js";import"./chunk-278j353c.js";import"./chunk-hbbqggzw.js";import"./chunk-bnfhb7sj.js";import"./chunk-6bcyaxwk.js";import"./chunk-btnsqe7h.js";import"./chunk-e666gr8q.js";import"./chunk-73603qq3.js";import{tl}from"./chunk-qsk4xjs1.js";import{vi}from"./chunk-8rf8db46.js";import{o,oe,C,u}from"./chunk-82bgdty3.js";import"./chunk-c1a9wnpp.js";var i=f(()=>u({skills:C(oe()),nextCursor:o().nullish()})),s=f(()=>u({skill:oe()}));function a(t,e){return vi(t.client).request({method:"skills/list",params:e===void 0?{}:{cursor:e}},i(),{timeout:tl()})}function c(t,e,l){return vi(t.client).request({method:"skills/get",params:{uri:e}},s(),{timeout:tl(),signal:l?.signal})}export{c as getMcpSkill,a as listMcpSkillPage};
