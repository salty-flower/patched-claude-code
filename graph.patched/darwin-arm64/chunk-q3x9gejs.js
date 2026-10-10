// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-fdwn5gdv.js";import"./chunk-fdxhcr6b.js";import"./chunk-76anb6yt.js";import"./chunk-886tf6ja.js";import"./chunk-yjc18bey.js";import"./chunk-ae84tp6z.js";import"./chunk-nqc6v990.js";import"./chunk-phz47asr.js";import"./chunk-yvnhkg35.js";import"./chunk-nfna65jh.js";import"./chunk-4bw62nzm.js";import"./chunk-k1419ccf.js";import"./chunk-5b8s3gnd.js";import"./chunk-gyf58rwf.js";import"./chunk-tat46164.js";import"./chunk-ax7r0qj7.js";import"./chunk-gsnbskq4.js";import"./chunk-p9frg3mj.js";import{$a}from"./chunk-qdcqm5pj.js";import{hi}from"./chunk-mwe8pp44.js";import{o,oe,A,u,_t,ue}from"./chunk-9cmjz7j9.js";import"./chunk-xaes9ysz.js";var n=p(()=>u({skills:A(_t({frontmatter:ue(o(),oe()).nullish(),uri:o().nullish(),digest:o().nullish()}).catch({})),nextCursor:o().nullish()})),l=p(()=>u({skill:oe().optional(),resultType:oe().optional(),ttlMs:oe().optional(),cacheScope:oe().optional(),_meta:oe().optional()}));function m(e,t){return hi(e.client).request({method:"skills/list",params:t===void 0?{}:{cursor:t}},n(),{timeout:$a()})}function a(e,t){return hi(e.client).request({method:"skills/get",params:{uri:t}},l(),{timeout:$a()})}export{a as getMcpSkill,m as listMcpSkillPage};
