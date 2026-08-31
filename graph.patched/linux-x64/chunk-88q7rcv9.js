// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
function c(t){let e=BigInt(58),i=Array(22).fill("1"),r=21,n=t;while(n>0n){let s=Number(n%e);i[r]="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[s],n=n/e,r--}return i.join("")}function o(t){let e=t.replaceAll("-","");if(e.length!==32)throw Error(`Invalid UUID hex length: ${e.length}`);return BigInt("0x"+e)}function YSt(t,e){try{let i=o(e);return`${t}_01${c(i)}`}catch{return}}function u(t){if(t.length!==22)return;let e=BigInt(58),i=0n;for(let r of t){let n="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(r);if(n<0)return;i=i*e+BigInt(n)}return i}function Y5(t){let e=t.lastIndexOf("_");if(e<0)return;let i=t.slice(e+1);if(!i.startsWith("01"))return;let r=u(i.slice(2));if(r===void 0)return;let n=r.toString(16).padStart(32,"0");if(n.length!==32)return;return`${n.slice(0,8)}-${n.slice(8,12)}-${n.slice(12,16)}-${n.slice(16,20)}-${n.slice(20,32)}`}
export{YSt,Y5};
