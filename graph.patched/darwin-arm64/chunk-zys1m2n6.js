// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{re}from"./chunk-42txhxmf.js";import{sn}from"./chunk-6pw3jyf9.js";var wme=128,Jj=/^[\x21-\x7e]+$/,OIr="io.modelcontextprotocol/tasks";function Rae(r){return re(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),wme)}function D5(r){return re(Rae(r),8)}function wRo(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:sn(r)}
export{wme,Jj,OIr,Rae,D5,wRo};
