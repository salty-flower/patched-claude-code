// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{oe}from"./chunk-0v0wzs89.js";import{Lt}from"./chunk-4kwsawbv.js";var LAn=128,Rnr=/^[\x21-\x7e]+$/,xnr="io.modelcontextprotocol/tasks";function h$e(r){return oe(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),LAn)}function wV(r){return oe(h$e(r),8)}function KXe(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:Lt(r)}
export{LAn,Rnr,xnr,h$e,wV,KXe};
