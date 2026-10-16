// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{p}from"./chunk-he0s6sfd.js";import"./chunk-rs6p8dg3.js";import"./chunk-fr28a3he.js";import"./chunk-w7m8nded.js";import"./chunk-r2xfgg0x.js";import"./chunk-pzq28dp7.js";import"./chunk-c61xdsy8.js";import"./chunk-63mtweh2.js";import"./chunk-xwn0mfnc.js";import"./chunk-bfqfmbd0.js";import"./chunk-eqmywwjn.js";import"./chunk-qeqy4res.js";import"./chunk-8fqmxv14.js";import"./chunk-cwsn6mdf.js";import"./chunk-xc4b32zy.js";import"./chunk-b9getfsf.js";import"./chunk-9pt2nr7j.js";import"./chunk-73603qq3.js";import{el}from"./chunk-3m5gqwry.js";import{Ei}from"./chunk-wsz0c674.js";import{o,oe,T,u}from"./chunk-zypddzr3.js";import"./chunk-29rv67gt.js";var i=p(()=>u({skills:T(oe()),nextCursor:o().nullish()})),s=p(()=>u({skill:oe()}));function c(t,e){return Ei(t.client).request({method:"skills/list",params:e===void 0?{}:{cursor:e}},i(),{timeout:el()})}function S(t,e,l){return Ei(t.client).request({method:"skills/get",params:{uri:e}},s(),{timeout:el(),signal:l?.signal})}export{S as getMcpSkill,c as listMcpSkillPage};
