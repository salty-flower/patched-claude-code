// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{oe}from"./chunk-wbbe5mtc.js";import{Nt}from"./chunk-fk28fhjr.js";var lTn=128,Gsr=/^[\x21-\x7e]+$/,Vsr="io.modelcontextprotocol/tasks";function BUe(r){return oe(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),lTn)}function BV(r){return oe(BUe(r),8)}function vQe(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:Nt(r)}
export{lTn,Gsr,Vsr,BUe,BV,vQe};
