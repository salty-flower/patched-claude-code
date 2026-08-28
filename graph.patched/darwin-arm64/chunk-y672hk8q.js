// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{de}from"./chunk-hp9wjta4.js";var l=/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF]|[\uDC00-\uDFFF]/g;function o(n){return n.replace(l,(t)=>t.length===2?t:"")}var i=/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/gu;function vt(n){if(typeof n!=="string")return"";let t=n.length>4096?n.slice(0,4096):n;for(let r=0;r<64;r++){let e=o(t).replace(i,"");if(e===t)return de(e,1024);t=e}return""}function pBt(n){if(n.length>16384)return null;let t=n;for(let r=0;r<64;r++){let e=o(t).replace(i,"");if(e===t)return[...e].length<=8192?e:null;t=e}return null}function NVn(n){let t=n.slice(0,3).map((e)=>pBt(e)??"[elicitation URL too long to relay]"),r=n.length>3?` \u2026and ${n.length-3} more \u2014 re-run in the terminal to see all`:"";return`${t.join(", ")}${r}`}
export{vt,pBt,NVn};
