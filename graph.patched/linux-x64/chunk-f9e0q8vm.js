// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{qp}from"./chunk-j6z0j5vh.js";import{Bt}from"./chunk-2j48j0j1.js";import{_Ye}from"./chunk-amnc8bbv.js";import{Vne}from"./chunk-whgkjmx2.js";var wu="MEMORY.md",X0=200,bne=25000,rgr=4*bne,LTe=200,Sne=4096;function Dot(t){let r=t.trim();return{trimmed:r,lineCount:Bt(r,`
`)+1,byteCount:r.length}}function GP(t){return t.normalize("NFC").toLowerCase()}function Nj(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var O0e="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",ogr="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function ZN(t){let r="";for(let n of _Ye(qp(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function wne(t){return Vne(s(t))}function Ods(t){return Lot(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function a8t(t){return wne(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var Gao=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function Lot(t){let r=t.codePointAt(0);if(Gao.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(Lot(n))continue;r+=n}return r}
export{wu,X0,bne,rgr,LTe,Sne,Dot,GP,Nj,O0e,ogr,ZN,wne,Ods,a8t,Gao,Lot};
