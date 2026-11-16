// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Z}from"./chunk-h4js79s0.js";import{Sn}from"./chunk-hzf7t49x.js";var Pde=128,J3=/^[\x21-\x7e]+$/,Yrt="io.modelcontextprotocol/tasks";function U6e(r){return Z(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),Pde)}function WIe(r){return Z(U6e(r),8)}function Ojs(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:Sn(r)}
export{Pde,J3,Yrt,U6e,WIe,Ojs};
