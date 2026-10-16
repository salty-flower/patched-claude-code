// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ff}from"./chunk-cwsn6mdf.js";import{$t}from"./chunk-b9getfsf.js";import{n7e}from"./chunk-n1y0nb3t.js";import{rle}from"./chunk-b8e5f7zw.js";var Zu="MEMORY.md",I$=200,Pae=25000,sMr=4*Pae,iOe=200,Iae=4096;function Imt(t){let r=t.trim();return{trimmed:r,lineCount:$t(r,`
`)+1,byteCount:r.length}}function vM(t){return t.normalize("NFC").toLowerCase()}function RG(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var V1e="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",iMr="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function GU(t){let r="";for(let n of n7e(Ff(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function Oae(t){return rle(s(t))}function R$s(t){return Omt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function Oin(t){return Oae(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var vPo=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function Omt(t){let r=t.codePointAt(0);if(vPo.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(Omt(n))continue;r+=n}return r}
export{Zu,I$,Pae,sMr,iOe,Iae,Imt,vM,RG,V1e,iMr,GU,Oae,R$s,Oin,vPo,Omt};
