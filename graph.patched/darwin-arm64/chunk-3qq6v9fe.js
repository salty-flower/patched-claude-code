// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{re}from"./chunk-fqzh3zpr.js";import{tn}from"./chunk-1jrtnqew.js";var Nfe=128,Ffe=/^[\x21-\x7e]+$/,Ger="io.modelcontextprotocol/tasks";function Y_t(r){return re(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),Nfe)}function G3(r){return re(Y_t(r),8)}function R3r(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:tn(r)}
export{Nfe,Ffe,Ger,Y_t,G3,R3r};
