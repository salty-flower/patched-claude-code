// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{le}from"./chunk-y5gt0775.js";import{Ft}from"./chunk-2fnmmmh0.js";var oTn=128,inr=/^[\x21-\x7e]+$/,snr="io.modelcontextprotocol/tasks";function TFe(r){return le(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),oTn)}function kG(r){return le(TFe(r),8)}function sYe(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:Ft(r)}
export{oTn,inr,snr,TFe,kG,sYe};
