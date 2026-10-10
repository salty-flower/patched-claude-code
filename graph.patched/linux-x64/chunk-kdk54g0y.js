// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-5k7wva7c.js";import"./chunk-j27d47mr.js";import"./chunk-wkmq9ht0.js";import"./chunk-m1rt7wpr.js";import"./chunk-jtpfgrzr.js";import"./chunk-xgw72tt1.js";import"./chunk-6kc68p18.js";import"./chunk-s7bhz6qz.js";import"./chunk-dp4xqs6t.js";import"./chunk-dn762950.js";import"./chunk-ctt36bn8.js";import"./chunk-fcerdfs3.js";import"./chunk-x0qpydt2.js";import"./chunk-bd805sh6.js";import"./chunk-24agvrd9.js";import"./chunk-qch5xj2a.js";import"./chunk-etbngzss.js";import"./chunk-p9frg3mj.js";import{$a}from"./chunk-k3pmdjj0.js";import{hi}from"./chunk-vvkk7cgc.js";import{o,oe,T,u,_t,ue}from"./chunk-smx21d0k.js";import"./chunk-79wfew46.js";var n=p(()=>u({skills:T(_t({frontmatter:ue(o(),oe()).nullish(),uri:o().nullish(),digest:o().nullish()}).catch({})),nextCursor:o().nullish()})),l=p(()=>u({skill:oe().optional(),resultType:oe().optional(),ttlMs:oe().optional(),cacheScope:oe().optional(),_meta:oe().optional()}));function m(e,t){return hi(e.client).request({method:"skills/list",params:t===void 0?{}:{cursor:t}},n(),{timeout:$a()})}function a(e,t){return hi(e.client).request({method:"skills/get",params:{uri:t}},l(),{timeout:$a()})}export{a as getMcpSkill,m as listMcpSkillPage};
