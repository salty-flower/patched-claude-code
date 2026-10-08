// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ne}from"./chunk-v2r1tbj3.js";import{Zt}from"./chunk-d9jpb7es.js";var kge=128,Cge=/^[\x21-\x7e]+$/,yar="io.modelcontextprotocol/tasks";function wEt(r){return ne(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),kge)}function e5(r){return ne(wEt(r),8)}function yJr(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:Zt(r)}
export{kge,Cge,yar,wEt,e5,yJr};
