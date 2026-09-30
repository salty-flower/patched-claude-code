// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{p}from"./chunk-dsp1md5e.js";import"./chunk-g5e6pf8s.js";import"./chunk-g9zw99sb.js";import"./chunk-hs50vfa7.js";import"./chunk-jm8r4kd0.js";import"./chunk-2j7zyd8v.js";import"./chunk-h1eby6n2.js";import"./chunk-sxefq60x.js";import"./chunk-1fpwxv0g.js";import"./chunk-ypa64mmn.js";import"./chunk-a7cah040.js";import"./chunk-nynxm73s.js";import"./chunk-vmffs68f.js";import"./chunk-3wz0srxw.js";import"./chunk-dard33vx.js";import"./chunk-62dhtzrb.js";import"./chunk-zwbw6dvp.js";import"./chunk-mpc9nxv5.js";import{Pl}from"./chunk-bfqb6kr7.js";import{Ts}from"./chunk-ys7pgsvn.js";import{o,ae,k,d,lt,ue}from"./chunk-g4gq2k0z.js";var i=p(()=>d({skills:k(lt({frontmatter:ue(o(),ae()).nullish(),uri:o().nullish(),digest:o().nullish()}).catch({})),nextCursor:o().nullish()}));function m(e,t){return Ts(e.client).request({method:"skills/list",params:t===void 0?{}:{cursor:t}},i(),{timeout:Pl()})}export{m as listMcpSkillPage};
