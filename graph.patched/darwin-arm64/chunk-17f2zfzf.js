// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{re}from"./chunk-j79dwkaq.js";import{un}from"./chunk-2k4ev690.js";var lye=128,j2=/^[\x21-\x7e]+$/,mUr="io.modelcontextprotocol/tasks";function qde(r){return re(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),lye)}function O8(r){return re(qde(r),8)}function EFo(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:un(r)}
export{lye,j2,mUr,qde,O8,EFo};
