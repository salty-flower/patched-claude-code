// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Lp}from"./chunk-ky8zgwyh.js";import{Ft}from"./chunk-z6am4wsr.js";import{F2e}from"./chunk-0wqb5n04.js";import{Ste}from"./chunk-3xa8a4ky.js";var uu="MEMORY.md",i0=200,Vee=25000,blr=4*Vee,HEe=200,Kee=4096;function ytt(t){let r=t.trim();return{trimmed:r,lineCount:Ft(r,`
`)+1,byteCount:r.length}}function bP(t){return t.normalize("NFC").toLowerCase()}function O1(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var wHe="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",Slr="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function sN(t){let r="";for(let n of F2e(Lp(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function Yee(t){return Ste(s(t))}function qes(t){return _tt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function i3t(t){return Yee(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var LZr=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function _tt(t){let r=t.codePointAt(0);if(LZr.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(_tt(n))continue;r+=n}return r}
export{uu,i0,Vee,blr,HEe,Kee,ytt,bP,O1,wHe,Slr,sN,Yee,qes,i3t,LZr,_tt};
