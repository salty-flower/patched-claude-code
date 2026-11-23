// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function FGe(t,r){switch(r){case"bash":return`!${t}`;default:return t}}function qv(t){if(t.startsWith("!"))return"bash";return"prompt"}function aL(t){if(qv(t)==="prompt")return t;return t.slice(1)}function VXt(t){return t==="!"}function Ixi({nextValue:t,value:r,cursorOffset:n,mode:o}){let e=qv(t);if(n!==0||e==="prompt"||e===o)return!1;return t.length===r.length+1||r.length===0}
export{FGe,qv,aL,VXt,Ixi};
