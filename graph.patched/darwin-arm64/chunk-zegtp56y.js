// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Qt}from"./chunk-62dhtzrb.js";import{Bp}from"./chunk-ya4yfeap.js";import{R$e}from"./chunk-8rbn3nb3.js";import{VRe}from"./chunk-v9v7yqrh.js";var ql="MEMORY.md",jH=200,F7=25000,fKn=4*F7,Kye=200,$7=4096;function O9e(t){let r=t.trim();return{trimmed:r,lineCount:Qt(r,`
`)+1,byteCount:r.length}}function fR(t){return t.normalize("NFC").toLowerCase()}function N$(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var Bke="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",mKn="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function TD(t){let r="";for(let n of R$e(Bp(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function iq(t){return VRe(s(t))}function TLo(t){return D9e(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function T$e(t){return iq(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var R1r=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function D9e(t){let r=t.codePointAt(0);if(R1r.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(D9e(n))continue;r+=n}return r}
export{ql,jH,F7,fKn,Kye,$7,O9e,fR,N$,Bke,mKn,TD,iq,TLo,T$e,R1r,D9e};
