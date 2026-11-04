// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
function f$e(t,r){switch(r){case"bash":return`!${t}`;default:return t}}function EE(t){if(t.startsWith("!"))return"bash";return"prompt"}function hM(t){if(EE(t)==="prompt")return t;return t.slice(1)}function k2t(t){return t==="!"}function b4s({nextValue:t,value:r,cursorOffset:n,mode:o}){let e=EE(t);if(n!==0||e==="prompt"||e===o)return!1;return t.length===r.length+1||r.length===0}
export{f$e,EE,hM,k2t,b4s};
