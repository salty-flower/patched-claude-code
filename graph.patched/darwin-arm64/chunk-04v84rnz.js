// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Z}from"./chunk-zmmnrc9r.js";import{un}from"./chunk-qf6jrnqc.js";var Nve=128,YV=/^[\x21-\x7e]+$/,pao="io.modelcontextprotocol/tasks";function uye(r){return Z(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu,""),Nve)}function rZ(r){return Z(uye(r),8)}function Zcs(r){if(!Number.isFinite(r)||r<=0)return;return r<1000?`${r}ms`:un(r)}
export{Nve,YV,pao,uye,rZ,Zcs};
