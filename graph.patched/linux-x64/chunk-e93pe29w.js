// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{re,$r}from"./chunk-nt1g7asm.js";import{gt}from"./chunk-17fr76vj.js";import{fn}from"./chunk-n5v91jc3.js";var i=200,o=i*4,r=/[\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;function nf(n){let e=n===void 0?"":$r(fn(n).replace(r," "));return e===""?void 0:gt(re(e,o),i)}
export{nf};
