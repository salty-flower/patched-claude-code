// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{xt}from"./chunk-h4js79s0.js";import{vg}from"./chunk-3x18nsrw.js";import{ICt}from"./chunk-5z5dtbrz.js";import{Ty}from"./chunk-a5a37ds7.js";var oh="MEMORY.md",xU=200,qoe=25000,K1o=4*qoe,$5e=200,qEe=4096;function U5e(t){let r=t.trim();return{trimmed:r,lineCount:xt(r,`
`)+1,byteCount:r.length}}function XL(t){return t.normalize("NFC").toLowerCase()}function c7(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var Oit="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",Y1o="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function PU(t){let r="";for(let n of ICt(vg(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function f_e(t){return Ty(s(t))}function IVr(t){return Cqt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function r9n(t){return f_e(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var eYs=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function Cqt(t){let r=t.codePointAt(0);if(eYs.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(Cqt(n))continue;r+=n}return r}
export{oh,xU,qoe,K1o,$5e,qEe,U5e,XL,c7,Oit,Y1o,PU,f_e,IVr,r9n,eYs,Cqt};
