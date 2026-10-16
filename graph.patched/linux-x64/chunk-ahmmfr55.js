// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ne}from"./chunk-b9getfsf.js";import{nn}from"./chunk-ameg1sn6.js";var hpe=128,V1=/^[\x21-\x7e]+$/,Cwr="io.modelcontextprotocol/tasks";function Nse(r){return ne(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),hpe)}function R6(r){return ne(Nse(r),8)}function dmo(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:nn(r)}
export{hpe,V1,Cwr,Nse,R6,dmo};
