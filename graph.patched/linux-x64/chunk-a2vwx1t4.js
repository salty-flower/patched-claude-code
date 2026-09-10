// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{oe}from"./chunk-cmg3b5hg.js";import{$t}from"./chunk-dz6vh6s7.js";var LAn=128,usr=/^[\x21-\x7e]+$/,dsr="io.modelcontextprotocol/tasks";function xBe(r){return oe(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),LAn)}function xK(r){return oe(xBe(r),8)}function cQe(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:$t(r)}
export{LAn,usr,dsr,xBe,xK,cQe};
