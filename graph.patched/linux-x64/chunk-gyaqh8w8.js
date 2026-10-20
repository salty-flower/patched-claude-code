// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{re}from"./chunk-nt1g7asm.js";import{sn}from"./chunk-17fr76vj.js";var Eme=128,jj=/^[\x21-\x7e]+$/,gOr="io.modelcontextprotocol/tasks";function Pae(r){return re(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),Eme)}function O5(r){return re(Pae(r),8)}function KRo(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:sn(r)}
export{Eme,jj,gOr,Pae,O5,KRo};
