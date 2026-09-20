// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{f}from"./chunk-67jj8qay.js";import"./chunk-gj513b2z.js";import"./chunk-d3xvzk7s.js";import"./chunk-k4wnp212.js";import"./chunk-q3f1bdx8.js";import"./chunk-q2vrcqny.js";import"./chunk-txfrkyzp.js";import"./chunk-qztrb7e5.js";import"./chunk-40wq8hf6.js";import"./chunk-p9tbyvzw.js";import"./chunk-cnzbk8gg.js";import"./chunk-847hpqqs.js";import"./chunk-hdk9febf.js";import"./chunk-kh3dq6rw.js";import"./chunk-1cx6bcw0.js";import{bs}from"./chunk-0xsav7cn.js";import{jc}from"./chunk-brstd4tz.js";import{o,ae,C,u,it,pe}from"./chunk-ehsmc9ae.js";var i=f(()=>u({skills:C(it({frontmatter:pe(o(),ae()).nullish(),uri:o().nullish(),digest:o().nullish()}).catch({})),nextCursor:o().nullish()}));function m(e,t){return bs(e.client).request({method:"skills/list",params:t===void 0?{}:{cursor:t}},i(),{timeout:jc()})}export{m as listMcpSkillPage};
