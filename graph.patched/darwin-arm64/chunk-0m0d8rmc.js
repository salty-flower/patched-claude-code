// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{re}from"./chunk-62dhtzrb.js";import{Xt}from"./chunk-631kxjhr.js";var jle=128,Wle=/^[\x21-\x7e]+$/,oWn="io.modelcontextprotocol/tasks";function llt(r){return re(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),jle)}function _V(r){return re(llt(r),8)}function mIr(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:Xt(r)}
export{jle,Wle,oWn,llt,_V,mIr};
