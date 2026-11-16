// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{xt}from"./chunk-b5xhmzas.js";import{Eg}from"./chunk-ksq2mgyv.js";import{NAt}from"./chunk-29cd2nzs.js";import{Ty}from"./chunk-e44qnbvj.js";var oh="MEMORY.md",O$=200,tse=25000,vBo=4*tse,V5e=200,nTe=4096;function q5e(t){let r=t.trim();return{trimmed:r,lineCount:xt(r,`
`)+1,byteCount:r.length}}function ZL(t){return t.normalize("NFC").toLowerCase()}function wY(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var zit="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",kBo="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function I$(t){let r="";for(let n of NAt(Eg(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function w_e(t){return Ty(s(t))}function oVr(t){return HVt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function x8n(t){return w_e(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var I7s=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function HVt(t){let r=t.codePointAt(0);if(I7s.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(HVt(n))continue;r+=n}return r}
export{oh,O$,tse,vBo,V5e,nTe,q5e,ZL,wY,zit,kBo,I$,w_e,oVr,x8n,I7s,HVt};
