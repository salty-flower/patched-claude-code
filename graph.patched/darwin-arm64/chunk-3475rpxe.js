// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{re}from"./chunk-j370x2tz.js";import{Qt}from"./chunk-hn35vsf8.js";var efr=128,Noo=/^[\x21-\x7e]+$/,Foo="io.modelcontextprotocol/tasks";function jIn(r){return re(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),efr)}function EJ(r){return re(jIn(r),8)}function tfr(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:Qt(r)}
export{efr,Noo,Foo,jIn,EJ,tfr};
