// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var r,a;function n(){if(r!==void 0&&a==="external")return r;return a="external",r=[],r}function USi(){return n().map((e)=>e.id)}function BSi(e){for(let t of n()){let o=t.digests.find((i)=>i.sha256===e);if(o)return{template:t,label:o.label}}return}function wOt(e){return n().find((t)=>t.id===e)}function par(e){return e.event==="PreToolUse"}function mar(){return!0}
export{USi,BSi,wOt,par,mar};
