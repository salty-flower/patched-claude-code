// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{m}from"./chunk-ffgkv432.js";import"./chunk-ycrs8y50.js";import"./chunk-td0fv71w.js";import"./chunk-0sa7g6pk.js";import"./chunk-cw80kq1q.js";import"./chunk-sr28hb79.js";import"./chunk-b1z7jvb2.js";import"./chunk-y7x1gsy0.js";import"./chunk-twjxwmnx.js";import"./chunk-xtc2dmbe.js";import"./chunk-mrh5xd2h.js";import"./chunk-5nyank6v.js";import"./chunk-pz607n7v.js";import"./chunk-ctshp37x.js";import"./chunk-hfch6q45.js";import"./chunk-wv4b4ave.js";import{_i}from"./chunk-s53bejma.js";import{Ec}from"./chunk-yhcbwxdv.js";import{i,de,T,c,pt,ge}from"./chunk-3qwvcykp.js";import"./chunk-dwwp0b8c.js";var s=m(()=>c({skills:T(pt({frontmatter:ge(i(),de()).nullish(),uri:i().nullish(),digest:i().nullish()}).catch({})),nextCursor:i().nullish()}));function u(e,t){return _i(e.client).request({method:"skills/list",params:t===void 0?{}:{cursor:t}},s(),{timeout:Ec()})}export{u as listMcpSkillPage};
