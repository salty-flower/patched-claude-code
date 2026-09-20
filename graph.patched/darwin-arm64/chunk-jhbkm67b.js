// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{se}from"./chunk-qmm87fyw.js";import{Bt}from"./chunk-gyqjm99t.js";var u6n=128,eHr=/^[\x21-\x7e]+$/,tHr="io.modelcontextprotocol/tasks";function eVe(r){return se(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),u6n)}function l9(r){return se(eVe(r),8)}function Qlt(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:Bt(r)}
export{u6n,eHr,tHr,eVe,l9,Qlt};
