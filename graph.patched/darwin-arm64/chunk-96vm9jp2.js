// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{oe}from"./chunk-j317bre5.js";import{Ot}from"./chunk-qs8h438x.js";var y_n=128,Q7n=/^[\x21-\x7e]+$/,Z7n="io.modelcontextprotocol/tasks";function zMe(r){return oe(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),y_n)}function k3(r){return oe(zMe(r),8)}function F5e(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:Ot(r)}
export{y_n,Q7n,Z7n,zMe,k3,F5e};
