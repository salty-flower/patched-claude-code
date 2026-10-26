// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{rn}from"./chunk-ke15dgmq.js";import{_}from"./chunk-d7b0m8qy.js";import{I,re}from"./chunk-j79dwkaq.js";import{St}from"./chunk-thm21ca7.js";import{zs}from"./chunk-cg45s1mf.js";import{RJe}from"./chunk-0s3jtbsx.js";function b7(){try{RJe(rn().BASE_API_URL)}catch{return"egress_blocked"}if(zs("zdr"))return"egress_blocked";return St()?"essential_traffic":void 0}import{basename as f}from"path";var l=100,g=900,a=300;function Lte(t){return _(t).replace(/[^\x20-\x7e]/g,(n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4,"0")}`)}function ZCr(t){let n=Lte(t);if(n.length<=a)return n;let e=[...t],r=e.length,s=5;while(r>0){if(s+=Lte(e[r-1]).length-2,s>a)break;r--}return Lte(`...${e.slice(r).join("")}`)}function yRs(t){let n=[],e=0;for(let{path:s,name:i,size:c}of t){let o=`${ZCr(s)}${f(s)===i?"":`, the file ${ZCr(i)}`} (${c} bytes)`;if(e+=o.length+2,e>g)break;n.push(o)}let r=t.length-n.length;return`Attaches ${t.length} ${I(t.length,"file")}: ${n.join("; ")}${r>0?`; and ${r} more`:""}`}function _Rs(t){if(t==="")return;let n=t.slice(1).split("/").map((e)=>e.replaceAll("~1","/").replaceAll("~0","~")).map((e,r)=>r===0?e:/^\d+$/.test(e)?`[${e}]`:`.${e}`).join("");return w7(n)}function w7(t){return Lte(t.length>l?`${re(t,l)}...`:t)}
export{b7,Lte,ZCr,yRs,_Rs,w7};
