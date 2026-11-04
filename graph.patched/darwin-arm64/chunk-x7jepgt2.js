// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{_}from"./chunk-5nh49npx.js";import{x,Z}from"./chunk-zmmnrc9r.js";import{basename as c,resolve as C}from"path";var h=100,l=900,a=300;function qae(t){return _(t).replace(/[^\x20-\x7e]/g,(e)=>`\\u${e.charCodeAt(0).toString(16).padStart(4,"0")}`)}function SCt(t){let e=qae(t);if(e.length<=a)return e;let n=[...t],r=n.length,i=5;while(r>0){if(i+=qae(n[r-1]).length-2,i>a)break;r--}return qae(`...${n.slice(r).join("")}`)}function soi(t){let e=[],n=0;for(let{path:i,name:o,size:g}of t){let s=`${SCt(i)}${c(i)===o?"":`, the file ${SCt(o)}`} (${g} bytes)`;if(n+=s.length+2,n>l)break;e.push(s)}let r=t.length-e.length;return`Attaches ${t.length} ${x(t.length,"file")}: ${e.join("; ")}${r>0?`; and ${r} more`:""}`}function ioi(t){if(t==="")return;let e=t.slice(1).split("/").map((n)=>n.replaceAll("~1","/").replaceAll("~0","~")).map((n,r)=>r===0?n:/^\d+$/.test(n)?`[${n}]`:`.${n}`).join("");return une(e)}function une(t){return qae(t.length>h?`${Z(t,h)}...`:t)}
export{qae,SCt,soi,ioi,une};
