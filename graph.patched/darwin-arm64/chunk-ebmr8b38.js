// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Vp}from"./chunk-cy0s0eq1.js";import{Bt}from"./chunk-v2r1tbj3.js";import{C3e}from"./chunk-yj45yszw.js";import{Zne}from"./chunk-j9jxxcf5.js";var Eu="MEMORY.md",eL=200,Cne=25000,kgr=4*Cne,WCe=200,Ane=4096;function Wot(t){let r=t.trim();return{trimmed:r,lineCount:Bt(r,`
`)+1,byteCount:r.length}}function YP(t){return t.normalize("NFC").toLowerCase()}function Xj(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var BDe="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",Cgr="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function sF(t){let r="";for(let n of C3e(Vp(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function Tne(t){return Zne(s(t))}function hus(t){return Got(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function v8t(t){return Tne(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var Slo=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function Got(t){let r=t.codePointAt(0);if(Slo.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(Got(n))continue;r+=n}return r}
export{Eu,eL,Cne,kgr,WCe,Ane,Wot,YP,Xj,BDe,Cgr,sF,Tne,hus,v8t,Slo,Got};
