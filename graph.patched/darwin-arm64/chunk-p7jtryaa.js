// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{ce}from"./chunk-04aem4bh.js";var i=/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF]|[\uDC00-\uDFFF]/g;function l(n){return n.replace(i,(t)=>t.length===2?t:"")}var o=/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/gu;function Qn(n){if(typeof n!=="string")return"";let t=n.length>4096?n.slice(0,4096):n;for(let e=0;e<64;e++){let r=l(t).replace(o,"");if(r===t)return ce(r,1024);t=r}return""}function Vyn(n){if(typeof n!=="string")return"";return(n.length>4096?n.slice(0,4096):n).replace(i,(e)=>e.length===2?e:" ").replace(o," ")}function O9t(n){if(n.length>16384)return null;let t=n;for(let e=0;e<64;e++){let r=l(t).replace(o,"");if(r===t)return[...r].length<=8192?r:null;t=r}return null}function uer(n){let t=n.slice(0,3).map((r)=>O9t(r)??"[elicitation URL too long to relay]"),e=n.length>3?` \u2026and ${n.length-3} more \u2014 re-run in the terminal to see all`:"";return`${t.join(", ")}${e}`}
export{Qn,Vyn,O9t,uer};
