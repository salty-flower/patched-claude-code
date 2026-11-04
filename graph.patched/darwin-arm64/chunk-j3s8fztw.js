// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Lt}from"./chunk-zmmnrc9r.js";import{rm}from"./chunk-53x2yxpb.js";import{o_t}from"./chunk-qj8veqay.js";import{BX}from"./chunk-3pbvjn6y.js";var Yf="MEMORY.md",fN=200,XZ=25000,ugo=4*XZ,z2e=200,D_e=4096;function V2e(t){let r=t.trim();return{trimmed:r,lineCount:Lt(r,`
`)+1,byteCount:r.length}}function mN(t){return t.normalize("NFC").toLowerCase()}function G4(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var oJe="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",pgo="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function GW(t){let r="";for(let n of o_t(rm(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function mue(t){return BX(s(t))}function cTr(t){return XLt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function yNn(t){return mue(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var aks=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function XLt(t){let r=t.codePointAt(0);if(aks.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(XLt(n))continue;r+=n}return r}
export{Yf,fN,XZ,ugo,z2e,D_e,V2e,mN,G4,oJe,pgo,GW,mue,cTr,yNn,aks,XLt};
