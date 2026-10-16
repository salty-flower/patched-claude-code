// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ff}from"./chunk-bnfhb7sj.js";import{Ft}from"./chunk-btnsqe7h.js";import{dQe}from"./chunk-td5pjp2j.js";import{dle}from"./chunk-3vzn6jff.js";var Zu="MEMORY.md",NF=200,Lae=25000,T0r=4*Lae,fOe=200,Nae=4096;function $mt(t){let r=t.trim();return{trimmed:r,lineCount:Ft(r,`
`)+1,byteCount:r.length}}function A0(t){return t.normalize("NFC").toLowerCase()}function FG(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var tje="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",R0r="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function QU(t){let r="";for(let n of dQe(Ff(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function Fae(t){return dle(s(t))}function f$s(t){return Umt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function Kin(t){return Fae(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var JPo=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function Umt(t){let r=t.codePointAt(0);if(JPo.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(Umt(n))continue;r+=n}return r}
export{Zu,NF,Lae,T0r,fOe,Nae,$mt,A0,FG,tje,R0r,QU,Fae,f$s,Kin,JPo,Umt};
