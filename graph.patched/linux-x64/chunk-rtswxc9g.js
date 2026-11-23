// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Z}from"./chunk-h4js79s0.js";import{ri}from"./chunk-5z5dtbrz.js";function bJe(n){return n.replace(/[\r\n\u2028\u2029]+/g," ")}function SJe(n,r){let e=ri(n);if(e.length<=r)return e;let t=Z(e,r),o=Array.from(e.slice(t.length)).length;return`${t} \u2026 (${o} more characters follow that are NOT shown in this message)`}
export{bJe,SJe};
